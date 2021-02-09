import { Request, Response, NextFunction } from 'express';

export default (err: IError, req: Request, res: Response, next: NextFunction) => {
    const { error, message, status} = err;
    const result = {
        error: error || 'something went wrong',
        message: message || 'error',
        status: status || 500,
        timestamp: new Date()
    };
    res.status(result.status).json(result);
};
