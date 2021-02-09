import * as mongoose from 'mongoose';

export default interface IResultModel extends mongoose.Document {
    originalId: string;
    physics: number;
    chemistry: number;
    maths: number;
}