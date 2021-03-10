import { VersionableSchema } from '../versionable/VersionableSchema';

export default class ResultSchema extends VersionableSchema {
    constructor(collections: any) {
        const resultOptions = Object.assign({
            userId: {
                required: true,
                type: String
            },
            questionSet: {
                required: true,
                type: String
            },
            result: {
                required: true,
                type: Object
            }
        });
        super(resultOptions, collections);
    }
}
