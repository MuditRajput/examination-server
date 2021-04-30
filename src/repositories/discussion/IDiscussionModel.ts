import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IDiscussionModel extends IVersionableDocument {
    owner: string;
    title: string;
    description: string;
    closed: boolean;
}
