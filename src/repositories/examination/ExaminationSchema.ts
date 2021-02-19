import { VersionableSchema } from '../versionable/VersionableSchema';

export default class ExaminationSchema extends VersionableSchema {
    constructor(collections: any) {
        const examinationOptions = Object.assign({
            subject: {
                required: true,
                type: String
            }
        });
        super(examinationOptions, collections);
    }
}