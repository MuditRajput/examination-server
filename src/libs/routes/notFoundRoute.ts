import { Request, Response, NextFunction } from 'express';

export default(req, res, next) => {
    next({
        error: 'Not Found',
        status: 404,
        message: 'Route Not Found'
    });
};
