import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
    name: string;
    email: string;
    role: string;
    password: string;
}
