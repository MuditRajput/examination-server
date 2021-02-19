import { Request, Response, NextFunction } from 'express';
import { config } from '../../config';
import * as jwt from 'jsonwebtoken';
import UserRepositories from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/constants';
import * as bcrypt from 'bcrypt';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    profile(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'Profile fetched successfully',
                data: res.locals.userData,
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
        }
    }
    async login(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepositories = new UserRepositories();
            const { email, password } = req.body;
            const newPayLoad = {...payLoad, email};
            const userData = await userRepositories.findOne({email});
            if (!userData) {
                return next ({
                    message: 'invalid email',
                    error: 'Authentication Failed',
                    status: 403
                });
            }
            const isPasswordValid = await bcrypt.compare(password, userData.password);
            if (!isPasswordValid) {
                return next({
                    message: 'invalid password',
                    error: 'Authentication Failed',
                    status: 403
                });
            }
            const secret = config.secretKey;
            const tokenGenerated = jwt.sign(newPayLoad, secret, {expiresIn: '1y'});
            res.status(200).send({
                message: 'Logged in successfully',
                data: {
                    token: tokenGenerated
                },
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
        }
    }
}

export default UserController.getInstance();
