import { Request, Response, NextFunction, request } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepositories from '../../repositories/user/UserRepository';

class TraineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const {skip, limit, sortBy, sortOrder, searchBy, search} = req.body;
            const options = {
                skip,
                limit,
                sort: {
                    [sortBy]: sortOrder
                }
            };
            let regexSearch;
            if (search) {
                regexSearch = new RegExp(search, 'gi');
            }
            const users = await this.userRepository.findAll({[searchBy]: regexSearch}, options);
            const count = await this.userRepository.count({});
            if (!users) {
                return next({
                    message: 'Fetch Unsuccessfull',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Trainees Fetched Successfully',
                data: {
                    totalCount: count,
                    UsersList: users
                },
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const user = await this.userRepository.getOne(id);
            if (!user) {
                return next({
                    message: 'Fetch Unsuccessfull',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Trainee Fetched Successfully',
                data: user,
                status: 'success',
            });
        }
        catch (err) {
            next({message: err.message});
        }
    }

    public create = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const { password, ...rest } = req.body;
            const hashPassword = await bcrypt.hash(password, 10);
            req.body = {...rest, password: hashPassword};
            const user = await this.userRepository.create(req.body);
            if (!user) {
                return next({
                    message: 'Trainee creation failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Trainee Created Successfully',
                data: user,
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const { dataToUpdate: { password, ...rest }, originalId } = req.body;
            let newUser = {originalId, dataToUpdate: {...rest}};
            if (password) {
                const newPassword = await bcrypt.hash(password, 10);
                newUser = {originalId, dataToUpdate: {password: newPassword, ...rest}};
            }
            const result = await this.userRepository.update(newUser);
            if (!result) {
                return next({
                    message: 'Update Failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Trainee Updated Successfully',
                data: result,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const id = req.params.id;
            const result = await this.userRepository.delete(id);
            if (!result) {
                return next({
                    message: 'Delete Failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'Trainee Deleted Successfully',
                data: {},
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
        }
    }
}

export default TraineeController.getInstance();
