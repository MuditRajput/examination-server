import * as mongoose from 'mongoose';

export default class ResultSchema extends mongoose.Schema {
    constructor(collections: any) {
        const resultOptions = Object.assign({
            originalId: {
                required: true,
                type: String
            },
            physics: {
                required: false,
                type: Number
            },
            chemistry: {
                required: false,
                type: Number
            },
            maths: {
                required: false,
                type: Number
            }
        });
        super(resultOptions, collections);
    }
}