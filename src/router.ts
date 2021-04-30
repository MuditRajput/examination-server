import { Router } from 'express';
import { traineeRouter , userRouter, examinationRouter, questionRouter, resultRouter, discussionRouter, commentRouter } from './controllers';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/exam', examinationRouter);
mainRouter.use('/question', questionRouter);
mainRouter.use('/results', resultRouter);
mainRouter.use('/discussion', discussionRouter);
mainRouter.use('/comments', commentRouter);

export default mainRouter;
