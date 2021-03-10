import { Router } from 'express';
import { traineeRouter , userRouter, examinationRouter, questionRouter, resultRouter } from './controllers';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/exam', examinationRouter);
mainRouter.use('/question', questionRouter);
mainRouter.use('/results', resultRouter);

export default mainRouter;
