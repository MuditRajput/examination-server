import { Request, Response, NextFunction } from 'express';
import QuestionRepository from '../../repositories/questions/QuestionRepository';
import ResultRepository from '../../repositories/result/ResultRepository';

class QuestionController {
    private questionRepository;
    private resultRepository;
    constructor() {
        this.questionRepository = new QuestionRepository();
        this.resultRepository = new ResultRepository();
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
            const selectedQuestions = await this.questionRepository.find({questionSet: id});
            if (!selectedQuestions) {
                next({
                    message: 'No Examination Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            const { write } = res.locals;
            res.status(200).send({
                message: 'Examination fetched successfully',
                data: selectedQuestions,
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
            if (!response) {
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
        const response = await this.questionRepository.find({questionSet});
        if (!response.length) {
            return next({
                message: 'No question found',
                error: 'Bad request',
                status: 400
            });
        }
        response.forEach(async({ originalId, correctOption }) => {
            if (answersList[originalId] === correctOption) {
                resultList[originalId] = [true, correctOption, answersList[originalId]];
                return;
            }
            resultList[originalId] = [false, correctOption, answersList[originalId]];
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