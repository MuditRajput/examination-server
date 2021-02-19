import { Router } from 'express';
import { traineeRouter , userRouter, examinationRouter, questionRouter } from './controllers';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/exam', examinationRouter);
mainRouter.use('/question', questionRouter);

export default mainRouter;
