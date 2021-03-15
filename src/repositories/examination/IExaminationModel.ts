import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IExaminationModel extends IVersionableDocument {
    subject: string;
    description: string;
    maximumMarks: string;
    time: string;
}
