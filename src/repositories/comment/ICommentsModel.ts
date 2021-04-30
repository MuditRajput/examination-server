import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface ICommentsModel extends IVersionableDocument {
    commenter: string;
    comment: string;
    likes: number;
    parentComment: string;
}
