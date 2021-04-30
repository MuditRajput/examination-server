import { VersionableSchema } from '../versionable/VersionableSchema';

export default class DiscussionSchema extends VersionableSchema {
    constructor(collections: any) {
        const discussionOptions = Object.assign({
            owner: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            },
            description: {
                required: true,
                type: String
            },
            closed: {
                required: false,
                type: Boolean,
                default: false
            },
        });
        super(discussionOptions, collections);
    }
}