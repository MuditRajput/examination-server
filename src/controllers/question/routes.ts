import { Router } from 'express';
import questionController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const questionRouter = Router();
questionRouter.route('/')
.post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), questionController.create)
.put(authMiddleWare('getUsers', 'write'), validationHandler(Validation.update), questionController.update);

questionRouter.route('/:id')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), questionController.get)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), questionController.delete);

questionRouter.route('/submit')
    .post(authMiddleWare('getUsers', 'read'), validationHandler(Validation.submitAnswers), questionController.submitAnswers);

export default questionRouter;