import * as mongoose from 'mongoose';
import QuestionSchema from './QuestionSchema';
import IQuestionModel from './IQuestionModel';

export const questionSchema = new QuestionSchema({
    collection: 'questions'
});

export const questionModel: mongoose.Model<IQuestionModel> = mongoose.model<IQuestionModel>
(
    'Questions',
    questionSchema,
    'Questions',
    true
);