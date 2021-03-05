import * as mongoose from 'mongoose';

export default class ResultSchema extends mongoose.Schema {
    constructor(collections: any) {
        const resultOptions = Object.assign({
            originalId: {
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
