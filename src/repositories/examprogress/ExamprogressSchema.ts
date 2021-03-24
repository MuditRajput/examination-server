import { VersionableSchema } from '../versionable/VersionableSchema';

export default class ExamprogressSchema extends VersionableSchema {
    constructor(collections: any) {
        const examinationOptions = Object.assign({
            timeLeft: {
                required: true,
                type: String
            },
            questionSet: {
                required: true,
                type: String
            }
        });
        super(examinationOptions, collections);
    }
}