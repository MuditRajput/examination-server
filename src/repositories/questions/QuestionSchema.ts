import { VersionableSchema } from '../versionable/VersionableSchema';

export default class QuestionSchema extends VersionableSchema {
    constructor(collections: any) {
        const questionOptions = Object.assign({
            questionSet: {
                required: true,
                type: String
            },
            question: {
                required: true,
                type: String
            },
            options: {
                required: false,
                type: Array
            },
            correctOption: {
                required: false,
                type: String
            }
        });
        super(questionOptions, collections);
    }
}