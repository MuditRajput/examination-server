import { Router } from 'express';
import examinationController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const examinationRouter = Router();
examinationRouter.route('/')
    /**
     * @swagger
     * /exam/:
     *   get:
     *     summary: List all examination.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Gives you a list of examinations.
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/examsGETResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - examinations
     */
    .get(authMiddleWare('getUsers', 'read'), examinationController.get)
    /**
     * @swagger
     * /exam/:
     *   post:
     *     summary: Create examination.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Create new examination.
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/examination'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/examinationPOSTResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - examinations
     */
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), examinationController.create)
    /**
     * @swagger
     * /exam/:
     *   put:
     *     summary: Update examination.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Update existing examination.
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/PUTExaminationInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/examinationPUTResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - examinations
     */
    .put(authMiddleWare('getUsers', 'write'), validationHandler(Validation.update), examinationController.update);

examinationRouter.route('/:id')
    /**
     * @swagger
     * /exam/{id}:
     *   delete:
     *     summary: Delete examination.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Deleted the examination of given id.
     *     parameters:
     *       - name: id
     *         in: path
     *         description: ID of examination to delete.
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/examinationDELETEResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - examinations
     */
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), examinationController.delete);

export default examinationRouter;