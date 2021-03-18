import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IQuestionModel extends IVersionableDocument {
    questionSet: string;
    question: string;
    options: string[];
    correctOption: string[];
}
