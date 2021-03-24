import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IExaminationModel extends IVersionableDocument {
    subject: string;
    description: string;
    time: string;
    maxAttempts: string;
}
