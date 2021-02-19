import { Request, Response, NextFunction } from 'express';
import QuestionRepository from '../../repositories/questions/QuestionRepository';

class QuestionController {
    private questionRepository;
    constructor() {
        this.questionRepository = new QuestionRepository();
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
            const { originalId } = req.body;
            const selectedQuestions = await this.questionRepository.find({questionSet: originalId});
            if (!selectedQuestions) {
                next({
                    message: 'No Examination Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Examination fetched successfully',
                data: {
                    questions: selectedQuestions
                },
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
            const { questionId, dataToUpdate } = req.body;
            const response = await this.questionRepository.update({originalId: questionId, dataToUpdate});
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

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const allQuestions = await this.questionRepository.find({ questionSet: id });
            allQuestions.forEach(async(question) => {
                const response = await this.questionRepository.delete(id);
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
        const { answersList = [] } = req.body;
        const resultList = [];
        answersList.forEach(async({ originalId, answer }) => {
            const response = await this.questionRepository.getOne({originalId});
            console.log(response);
            if (!response) {
                next({
                    message: 'No question found',
                    error: 'Bad request',
                    status: 400
                });
            }
            if (answer === response.correctOption) {
                resultList.push(true);
                return;
            }
            resultList.push(false);
            console.log(resultList);
            res.send('hello');
        });
    }
}

export default QuestionController.getInstance();