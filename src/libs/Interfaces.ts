export interface IPermissions {
    getUsers: GetUsers;
    getProduct: GetProduct;
}
type GetUsers = {
    all: string[],
    read: string[],
    write: string[],
    delete: string[]
};

type GetProduct = {
    all: string[],
    read: string[],
    write: string[],
    delete: string[]
};

export interface ISeedExamination {
    subject: string;
    questionSet: questions[];
}

type questions = {
    question: string,
    firstOption: string,
    secondOption: string,
    thirdOption: string,
    forthOption: string,
    correctOption: string
};