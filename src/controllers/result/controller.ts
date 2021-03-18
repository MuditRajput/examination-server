import { Request, Response, NextFunction } from 'express';
import ExaminationRepository from '../../repositories/examination/ExaminationRepository';
import ResultRepository from '../../repositories/result/ResultRepository';

class ResultController {
    private examinationRepository;
    private resultRepository;
    constructor() {
        this.examinationRepository = new ExaminationRepository();
        this.resultRepository = new ResultRepository();
    }

    static instance: ResultController;
    static getInstance() {
        if (ResultController.instance) {
            return ResultController.instance;
        }
        ResultController.instance = new ResultController();
        return ResultController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { userData: { originalId } } = res.locals;
            const response = await this.resultRepository.getAll(originalId);
            if (!response.length) {
                next({
                    message: 'No Results Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            const examResponse = await this.examinationRepository.find();
            if (!examResponse.length) {
                next({
                    message: 'No Results Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            const getAllResponse = [];
            response.forEach((result) => {
                examResponse.forEach((exam) => {
                    if (result.questionSet === exam.originalId) {
                        result.questionSet = exam.subject;
                        getAllResponse.push(result);
                    }
                });
            });
            res.status(200).send({
                message: 'Results fetched successfully',
                data: getAllResponse,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public findOne =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.body;
            const response = await this.resultRepository.getOne({ originalId: id });
            if (!response) {
                return next({
                    message: 'Result Not Found',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Result Fetched Successfully',
                data: response,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }
}

export default ResultController.getInstance();