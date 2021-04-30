import * as mongoose from 'mongoose';
import DiscussionSchema from './DiscussionSchema';
import IDiscussionModel from './IDiscussionModel';

export const discussionSchema = new DiscussionSchema({
    collection: 'Discussion'
});

export const discussionModel: mongoose.Model<IDiscussionModel> = mongoose.model<IDiscussionModel>
(
    'Discussion',
    discussionSchema,
    'Discussion',
    true
);