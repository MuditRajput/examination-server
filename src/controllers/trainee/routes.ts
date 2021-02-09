import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
    /**
     * @swagger
     * /trainee/:
     *   get:
     *     summary: List all active users.
     *     security:
     *       - ApiKeyAuth: []
     *     description: Gives you a list of active users with proper format. or you can get users by the given query in body.
     *     parameters:
     *       - name: skip
     *         in: query
     *         description: Value of skip for pagination.
     *         required: false
     *         schema:
     *           type: string
     *       - name: limit
     *         in: query
     *         description: Value of limit for pagination.
     *         required: false
     *         schema:
     *           type: string
     *       - name: sortBy
     *         in: query
     *         description: Value of sortBy for sorting with given property.
     *         required: false
     *         schema:
     *           type: string
     *       - name: sortOrder
     *         in: query
     *         description: sortOrder(Ascending or Descending).
     *         required: false
     *         schema:
     *           type: string
     *       - name: searchBy
     *         in: query
     *         description: (Name or Email) to be searched by.
     *         required: false
     *         schema:
     *           type: string
     *       - name: search
     *         in: query
     *         description: Name or Email to be search.
     *         required: false
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           '$ref': '#/definitions/usersGETResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           '$ref': '#/definitions/Error'
     *     tags:
     *       - trainee
     */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), TraineeController.get)

    /**
     * @swagger
     * /trainee/:
     *   post:
     *     summary: Create new user.
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: updatetraineeWithForm
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/CREATEInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: User fetched successfully
     *         schema:
     *           $ref: '#/definitions/userPOSTResponse'
     *       '403':
     *         description: Invalid User
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - trainee
     */
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), TraineeController.create)

    /**
     * @swagger
     * /trainee/:
     *   put:
     *     summary: Update user.
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: uploadFile
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/PUTInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: User created successfully
     *         schema:
     *           $ref: '#/definitions/userPUTResponse'
     *       '403':
     *         description: Invalid user
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - trainee
     */
    .put(authMiddleWare('getUsers', 'write'), validationHandler(Validation.update), TraineeController.update);

traineeRouter.route('/:id')

    /**
     * @swagger
     * '/trainee/{id}':
     *   delete:
     *     summary: Deletes a trainee
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: deletetrainee
     *     parameters:
     *       - name: id
     *         in: path
     *         description: User id to delete
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Deleted Successfully
     *         schema:
     *           $ref: '#/definitions/userDELETEResonse'
     *       '403':
     *         description: Delete Failed
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - trainee
     */
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), TraineeController.delete)

    /**
     * @swagger
     * '/trainee/{id}':
     *   get:
     *     summary: Find user by ID
     *     security:
     *       - ApiKeyAuth: []
     *     description: Returns a single user
     *     operationId: getuserById
     *     parameters:
     *       - name: id
     *         in: path
     *         description: ID of trainee to return
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: User Fetched Successfully
     *         schema:
     *           $ref: '#/definitions/userGETResponse'
     *       '403':
     *         description: Invalid User
     *         schema:
     *           $ref: '#/definitions/Error'
     *     tags:
     *       - trainee
     */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.getOne), TraineeController.getOne);

export default traineeRouter;
