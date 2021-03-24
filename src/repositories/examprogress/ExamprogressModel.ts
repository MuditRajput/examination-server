import * as mongoose from 'mongoose';
import ExamprogressSchema from './ExamprogressSchema';
import IExamprogressmodel from './IExamprogressmodel';

export const examprogressSchema = new ExamprogressSchema({
    collection: 'examination'
});

export const ExamprogressModel: mongoose.Model<IExamprogressmodel> = mongoose.model<IExamprogressmodel>
(
    'Examprogress',
    examprogressSchema,
    'Examprogress',
    true
);