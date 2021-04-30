import { Request, Response, NextFunction } from 'express';
import CommentRepository from '../../repositories/comment/CommentsRepository';

class CommentController {
    private commentRepository;
    constructor() {
        this.commentRepository = new CommentRepository();
    }

    static instance: CommentController;
    static getInstance() {
        if (CommentController.instance) {
            return CommentController.instance;
        }
        CommentController.instance = new CommentController();
        return CommentController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.commentRepository.find();
            if (!response) {
                return next({
                    message: 'Comment Update Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Comment fetched successfully',
                data: response,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public create =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { parentComment, comment } = req.body;
            const { userData: { name } } = res.locals;
            const response = await this.commentRepository.create({ parentComment, comment, commenter: name });
            if (!response) {
                return next({
                    message: 'Comment Creation failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Comment Created Successfully',
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
            const response = await this.commentRepository.update({originalId, dataToUpdate});
            if (!response) {
                return next({
                    message: 'Comment Update Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Comment Updated Successfully',
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
            const { userData: { originalId } } = res.locals;
            if (!(originalId !== id)) {
                return next({
                    message: 'Cannot delete other user`s comments',
                    error: 'Bad Request',
                    status: 400
                });
            }
            const response = await this.commentRepository.delete(id);
            if (!response.originalId) {
                return next({
                    message: 'Comment delete Failed',
                    error: 'Bad Request',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Comment Deleted Successfully',
                data: {},
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }
}

export default CommentController.getInstance();