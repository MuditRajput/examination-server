import { VersionableSchema } from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {
    constructor (collections: any) {
        const baseSchema = Object.assign({
            name: String,
            email: String,
            role: String,
            password: String,
        });
        super(baseSchema, collections);
    }
}
export default UserSchema;
