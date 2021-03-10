import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IResultModel extends IVersionableDocument {
    userId: string;
    questionSet: string;
    result: object;
}
