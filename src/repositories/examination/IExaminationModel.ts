import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IExaminationModel extends IVersionableDocument {
    subject: string;
    questionset: [questionset];
}

type questionset = {
    question: string;
    firstOption: string;
    secondOption: string;
    thirdOption: string;
    forthOption: string;
    correctOption: string;
};