import { Router } from 'express';
import questionController from './controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const questionRouter = Router();
questionRouter.route('/')
    /**
     * @swagger
     * /question/:
     *   post:
     *     summary: Create new questions.
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: createQuestions
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/CREATEQuestionInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: Question created successfully
     *         schema:
     *           $ref: '#/definitions/questionPOSTResponse'
     *       '403':
     *         description: Invalid User
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - questions
     */
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), questionController.create)
    /**
     * @swagger
     * /question/:
     *   put:
     *     summary: Update Question.
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: updatQuestions
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/PUTQuestionInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: Question created successfully
     *         schema:
     *           $ref: '#/definitions/questionPUTResponse'
     *       '403':
     *         description: Invalid User
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - questions
     */
    .put(authMiddleWare('getUsers', 'write'), validationHandler(Validation.update), questionController.update);

questionRouter.route('/:id')
    /**
     * @swagger
     * /question/{id}:
     *   get:
     *     summary: List of questions of the exam.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Gives you a list of questions of the exam.
     *     parameters:
     *       - name: id
     *         in: path
     *         description: ID of questionSet to return questions of
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/questionGETResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - questions
     */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), questionController.get)
    /**
     * @swagger
     * /question/{id}:
     *   delete:
     *     summary: Delete one question.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Deleted the question of given id.
     *     parameters:
     *       - name: id
     *         in: path
     *         description: ID of question to delete.
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/questionDELETEResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - questions
     */
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), questionController.deleteOne);
questionRouter.route('/submit')
    /**
     * @swagger
     * /question/submit:
     *   post:
     *     summary: Submit questions.
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: submitQuestions
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/SUBMITQuestionInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: Successfull Operation
     *         schema:
     *           $ref: '#/definitions/resultGETResponse'
     *       '403':
     *         description: Invalid User
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - questions
     */
    .post(authMiddleWare('getUsers', 'read'), validationHandler(Validation.submitAnswers), questionController.submitAnswers);
questionRouter.route('/delete/:id')
    /**
     * @swagger
     * /question/delete/{id}:
     *   delete:
     *     summary: Delete all question.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Deleted the question of given questionSet.
     *     parameters:
     *       - name: id
     *         in: path
     *         description: ID of questionSet to delete all questions of.
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/questionDELETEResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - questions
     */
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), questionController.delete);

export default questionRouter;