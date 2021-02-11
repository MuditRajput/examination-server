import { Router } from 'express';
import examinationController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const examinationRouter = Router();
examinationRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), examinationController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), examinationController.create)
    .put(authMiddleWare('getUsers', 'write'), validationHandler(Validation.update), examinationController.update);

examinationRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), examinationController.delete);

export default examinationRouter;