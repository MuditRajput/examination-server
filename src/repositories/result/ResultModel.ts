import * as mongoose from 'mongoose';
import ResultSchema from './ResultSchema';
import IResultModel from './IResultModel';

export const resultSchema = new ResultSchema({
    collection: 'result'
});

export const resultModel: mongoose.Model<IResultModel> = mongoose.model<IResultModel>
(
    'Result',
    resultSchema,
    'Result',
    true
);