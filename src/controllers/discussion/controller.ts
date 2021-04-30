import { Request, Response, NextFunction } from 'express';
import DiscussionRepository from '../../repositories/Discussion/DiscussionRepository';

class DiscussionController {
    private discussionRepository;
    constructor() {
        this.discussionRepository = new DiscussionRepository();
    }

    static instance: DiscussionController;
    static getInstance() {
        if (DiscussionController.instance) {
            return DiscussionController.instance;
        }
        DiscussionController.instance = new DiscussionController();
        return DiscussionController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.discussionRepository.find();
            res.status(200).send({
                message: 'Discussion fetched successfully',
                data: response,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public create =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { title, description } = req.body;
            const { name } = res.locals.userData;
            const response = await this.discussionRepository.create({ title, description, owner: name });
            if (!response) {
                return next({
                    message: 'Discussion Creation failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Discussion Created Successfully',
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
            const response = await this.discussionRepository.update({originalId, dataToUpdate});
            if (!response) {
                return next({
                    message: 'Discussion Update Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Discussion Updated Successfully',
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
            const response = await this.discussionRepository.delete(id);
            if (!response.originalId) {
                return next({
                    message: 'Discussion delete Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Discussion Deleted Successfully',
                data: {},
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }
}

export default DiscussionController.getInstance();