import { Request, Response, NextFunction } from 'express';
import ExaminationRepository from '../../repositories/examination/ExaminationRepository';
import QuestionRepository from '../../repositories/questions/QuestionRepository';

class ExaminationController {
    private examinationRepository;
    private questionRepository;
    constructor() {
        this.examinationRepository = new ExaminationRepository();
        this.questionRepository = new QuestionRepository();
    }

    static instance: ExaminationController;
    static getInstance() {
        if (ExaminationController.instance) {
            return ExaminationController.instance;
        }
        ExaminationController.instance = new ExaminationController();
        return ExaminationController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.examinationRepository.find();
            if (!response) {
                next({
                    message: 'No Examination Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            const questions = await this.questionRepository.find({});
            const finalResponse = response.map(({ originalId, subject, description, time, maxAttempts }) => {
                let maximumMarks = 0;
                if (questions.length) {
                    questions.forEach(({ questionSet, marks }) => {
                        if (questionSet === originalId) {
                            console.log(questionSet, marks);
                            maximumMarks = maximumMarks + marks;
                        }
                    });
                }
                console.log(maximumMarks);
                return {subject, description, time, maxAttempts, originalId, maximumMarks};
            });
            const { write } = res.locals;
            res.status(200).send({
                message: 'Examination fetched successfully',
                data: finalResponse,
                write,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public create =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { subject, description, time, maxAttempts } = req.body;
            const response = await this.examinationRepository.create({ subject, description, time, maxAttempts });
            if (!response) {
                next({
                    message: 'Examination Creation failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Examination Created Successfully',
                data: response,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { originalId, dataToUpdate } = req.body;
            const response = await this.examinationRepository.update({originalId, dataToUpdate});
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
            const response = await this.examinationRepository.delete(id);
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
}

export default ExaminationController.getInstance();