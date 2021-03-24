import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IExamprogressmodel extends IVersionableDocument {
    timeLeft: string;
    questionSet: string;
}
