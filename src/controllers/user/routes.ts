import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const userRouter = Router();

userRouter.route('/me')
    /**
     * @swagger
     * /user/me:
     *   get:
     *     tags:
     *       - user
     *     summary: Profile fetch
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: user Profile
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           $ref: '#/definitions/ProfileResponse'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           $ref: '#/definitions/Error'
     */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.profile), UserController.profile);


userRouter.route('/login')
    /**
     * @swagger
     * /user/login:
     *   post:
     *     tags:
     *       - user
     *     summary: Logs user into the system
     *     parameters:
     *       - name: body
     *         in: body
     *         description: Enter email and password
     *         schema:
     *           $ref: '#/definitions/loginInput'
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           $ref: '#/definitions/LoginResponse'
     *       '403':
     *         description: Invalid username / password supplied
     *         schema:
     *           $ref: '#/definitions/Error'
     */
    .post(validationHandler(Validation.login), UserController.login);

export default userRouter;