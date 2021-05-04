import { Router } from 'express';
import resultController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const resultRouter = Router();
resultRouter.route('/')
    /**
     * @swagger
     * /results/:
     *   get:
     *     summary: List of result of all recent exams.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Gives you a list of results of all recent exams you have attempted.
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/resultsGETResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - results
     */
    .get(authMiddleWare('getUsers', 'read'), resultController.get);

resultRouter.route('/:id')
    /**
     * @swagger
     * /results/{id}:
     *   get:
     *     summary: List of result of all recent exams.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Gives you a list of results of all recent exams you have attempted.
     *     parameters:
     *       - name: id
     *         in: path
     *         description: ID of result to return
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/resultGETResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - results
     */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), resultController.findOne);

export default resultRouter;