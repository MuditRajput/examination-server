import * as mongoose from 'mongoose';
import ExaminationSchema from './ExaminationSchema';
import IExaminationModel from './IExaminationModel';

export const examinationSchema = new ExaminationSchema({
    collection: 'examination'
});

export const examinationModel: mongoose.Model<IExaminationModel> = mongoose.model<IExaminationModel>
(
    'Exams',
    examinationSchema,
    'Exams',
    true
);