import { Router } from 'express';
import resultController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const resultRouter = Router();
resultRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), resultController.get);

resultRouter.route('/:id')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), resultController.findOne);

export default resultRouter;