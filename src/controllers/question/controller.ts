import { Request, Response, NextFunction } from 'express';
import QuestionRepository from '../../repositories/questions/QuestionRepository';
import ResultRepository from '../../repositories/result/ResultRepository';
import ExamprogressRepository from '../../repositories/examprogress/ExamprogressRepository';

class QuestionController {
    private questionRepository;
    private resultRepository;
    private examprogressRepository;
    constructor() {
        this.questionRepository = new QuestionRepository();
        this.resultRepository = new ResultRepository();
        this.examprogressRepository = new ExamprogressRepository();
    }

    static instance: QuestionController;
    static getInstance() {
        if (QuestionController.instance) {
            return QuestionController.instance;
        }
        QuestionController.instance = new QuestionController();
        return QuestionController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { timeLimit, submitted } = req.body;
            const { userData: { originalId } } = res.locals;
            let timeLeft = 0;
            const progressData = await this.examprogressRepository.getOne({originalId});
            if (progressData && !(progressData.questionSet === id)) {
                return next({
                    message: 'You have active attempt',
                    error: 'Bad Request',
                    status: 400
                });
            }
            const totalAttempts = await this.resultRepository.find({userId: originalId, questionSet: id});
            const selectedQuestions = await this.questionRepository.find({questionSet: id});
            if (!selectedQuestions || !selectedQuestions.length) {
                return next({
                    message: 'No questions Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            if (submitted === 'false') {
                if (progressData) {
                    timeLeft = (progressData.timeLeft >= Date.now()) ? (progressData.timeLeft - Date.now()) : 0;
                } else {
                    timeLeft = timeLimit * 60000;
                    const response = await this.examprogressRepository.create({
                        questionSet: id, originalId, timeLeft: (Date.now() + (timeLimit * 60000))
                    });
                    if (!response) {
                        next({
                            message: 'Time setting failed',
                            error: 'Bad Request',
                            status: 400
                        });
                    }
                }
            }
            const { write } = res.locals;
            res.status(200).send({
                message: 'Questions fetched successfully',
                data: selectedQuestions,
                numberOfAttempts: totalAttempts.length,
                timeLeft,
                write,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public create =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { questionList, originalId } = req.body;
            await questionList.forEach(async (question) => {
                question = { questionSet: originalId, ...question };
                const questionResponse = await this.questionRepository.create(question);
                if (!questionResponse) {
                    next({
                        message: 'Examination Creation failed',
                        error: 'Bad Request',
                        status: 400
                    });
                }
                return questionResponse;
            });
            res.status(200).send({
                message: 'Examination Created Successfully',
                data: {
                    questions: questionList,
                },
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { originalId, dataToUpdate } = req.body;
            const response = await this.questionRepository.update({originalId, dataToUpdate});
            if (!response) {
                next({
                    message: 'Examination Update Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Examination Updated Successfully',
                data: response,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public deleteOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const response = await this.questionRepository.delete(id);
            if (!response.originalId) {
                next({
                    message: 'Examination delete Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Examination Deleted Successfully',
                data: {},
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const allQuestions = await this.questionRepository.find({ questionSet: id });
            allQuestions.forEach(async(question) => {
                const response = await this.questionRepository.delete(question.originalId);
                console.log(response, 'here');
                if (!response) {
                    next({
                        message: 'Examination delete Failed',
                        error: 'Bad Request',
                        status: 400
                    });
                }
            });
            res.status(200).send({
                message: 'Examination Deleted Successfully',
                data: {},
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public submitAnswers = async(req: Request, res: Response, next: NextFunction) => {
        const { userData: { originalId: userId } } = res.locals;
        const { answersList = {}, questionSet } = req.body;
        const resultList = {};
        const progressData = await this.examprogressRepository.delete(userId);
        const response = await this.questionRepository.find({questionSet});
        if (!response.length || !progressData) {
            return next({
                message: 'No question found',
                error: 'Bad request',
                status: 400
            });
        }
        const compareArrays = (firstArray, secondArray) => {
            const comparision = secondArray.map((element) => {
                if ( firstArray && [...firstArray].includes(element)) {
                    return true;
                }
                return false;
            });
             return comparision.includes(false) ? false : true;
        };
        response.forEach(async({ originalId, correctOption, marks }) => {
            if (compareArrays(answersList[originalId], [...correctOption])) {
                resultList[originalId] = [marks, correctOption, answersList[originalId], marks];
                return;
            }
            resultList[originalId] = [0, correctOption, answersList[originalId], marks];
        });
        const resultResponse = await this.resultRepository.resultCreate({result: resultList, userId, questionSet});
        if (!resultResponse) {
            next({
                message: 'Result Not Saved',
                error: 'Bad Request',
                status: 400
            });
        }
        res.status(200).send({
            message: 'Result Fetched Successfully',
            data: resultResponse,
            status: 'success'
        });
    }
}

export default QuestionController.getInstance();