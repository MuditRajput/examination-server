import * as mongoose from 'mongoose';

export default class ExaminationSchema extends mongoose.Schema {
    constructor(collections: any) {
        const examinationOptions = Object.assign({
            subject: {
                required: true,
                type: String
            },
            questionSet: {
                required: false,
                type: Object
            }
        });
        super(examinationOptions, collections);
    }
}