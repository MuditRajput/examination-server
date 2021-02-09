import * as mongoose from 'mongoose';

export default interface IExaminationModel extends mongoose.Document {
    subject: string;
    questionset: string;
}