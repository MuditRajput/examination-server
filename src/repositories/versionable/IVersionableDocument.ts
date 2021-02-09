import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
    deletedAt?: Date;
    id: string;
    originalId: string;
    createdAt: Date;
}
