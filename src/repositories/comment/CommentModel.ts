import * as mongoose from 'mongoose';
import CommentsSchema from './CommentsSchema';
import ICommentsModel from './ICommentsModel';

export const commentsSchema = new CommentsSchema({
    collection: 'Comments'
});

export const commentsModel: mongoose.Model<ICommentsModel> = mongoose.model<ICommentsModel>
(
    'Comments',
    commentsSchema,
    'Comments',
    true
);