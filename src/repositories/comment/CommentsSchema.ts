import { VersionableSchema } from '../versionable/VersionableSchema';

export default class CommentsSchema extends VersionableSchema {
    constructor(collections: any) {
        const commentsOptions = Object.assign({
            commenter: {
                required: true,
                type: String
            },
            comment: {
                required: false,
                type: String
            },
            likes: {
                required: true,
                type: Number,
                default: 0
            },
            parentComment: {
                required: false,
                type: String
            },
        });
        super(commentsOptions, collections);
    }
}