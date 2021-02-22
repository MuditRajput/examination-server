import * as mongoose from 'mongoose';

export default interface IResultModel extends mongoose.Document {
    _id: string;
    originalId: string;
    questionSet: string;
    result: Result[];
}

interface Result {
    originalId: string;
    result: boolean;
}