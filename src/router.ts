import { Router } from 'express';
import { traineeRouter , userRouter, examinationRouter } from './controllers';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/exam', examinationRouter);

export default mainRouter;
