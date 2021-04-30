import { Router } from 'express';
import discussionController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const discussionRouter = Router();
discussionRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), discussionController.get)
    .post(authMiddleWare('getUsers', 'read'), validationHandler(Validation.create), discussionController.create)
    .put(authMiddleWare('getUsers', 'read'), validationHandler(Validation.update), discussionController.update);

discussionRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'read'), validationHandler(Validation.delete), discussionController.delete);

export default discussionRouter;