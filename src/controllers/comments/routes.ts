import { Router } from 'express';
import commentController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const commentRouter = Router();
commentRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), commentController.get)
    .post(authMiddleWare('getUsers', 'read'), validationHandler(Validation.create), commentController.create)
    .put(authMiddleWare('getUsers', 'read'), validationHandler(Validation.update), commentController.update);

commentRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'read'), validationHandler(Validation.delete), commentController.delete);

export default commentRouter;