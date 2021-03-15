import { VersionableSchema } from '../versionable/VersionableSchema';

export default class ExaminationSchema extends VersionableSchema {
    constructor(collections: any) {
        const examinationOptions = Object.assign({
            subject: {
                required: true,
                type: String
            },
            description: {
                required: false,
                type: String
            },
            maximumMarks: {
                required: false,
                type: Number
            },
            time: {
                required: true,
                type: Number
            },
            maxAttempts: {
                required: true,
                type: Number
            },
        });
        super(examinationOptions, collections);
    }
}