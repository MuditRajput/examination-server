import * as mongoose from 'mongoose';

export default interface IResultModel extends mongoose.Document {
    _id: string;
    originalId: string;
    questionSet: string;
    result: object;
}
