import { IPermissions, ISeedExamination } from './Interfaces';
export const permissions: IPermissions = {
    getUsers: {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: []
    },

    getProduct: {
        all: ['head-manager'],
        read : ['marketing-head'],
        write : ['manager'],
        delete: []
    }
};

export let payLoad = {
    'iss': 'Successive Technologies',
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
};
export const seedData1 = {
    name: 'Head-Trainer',
    email: 'head.trainer@successive.tech',
    role: 'head-trainer',
    password: 'Qwerty@1'
};

export const attemptTimes = {};

export const seedExaminationData: ISeedExamination = {
    subject: 'physics',
    questionSet: [{
        question: 'Svedberg Unit is a unit of ____?',
        firstOption: 'Concentration',
        secondOption: 'Size',
        thirdOption: 'Density',
        forthOption: 'Time',
        correctOption: 'Time'
    },
    {
        question: "Young's modulus is the property of ?",
        firstOption: 'Gas only',
        secondOption: 'Liquid only',
        thirdOption: 'Solid only',
        forthOption: 'Both solid & Liquid',
        correctOption: 'Solid only'
    },
    {
        question: 'A man presses more weigh on earth at?',
        firstOption: 'Sitting position',
        secondOption: 'Standing position',
        thirdOption: 'Lying position',
        forthOption: 'None of these',
        correctOption: 'Standing position'
    },
    {
        question: 'A piece of ice is dropped in a vessel containing Kerosene. WHen ice melts, the level of Kerosene will',
        firstOption: 'Rise',
        secondOption: 'Remain same',
        thirdOption: 'Fall',
        forthOption: 'None of these',
        correctOption: 'Fall'
    },
    {
        question: 'Product of force & velocity is called?',
        firstOption: 'Work',
        secondOption: 'Energy',
        thirdOption: 'Power',
        forthOption: 'Momentum',
        correctOption: 'Power'
    }]
};

export const wrongToken = '3h4k1324kh32k4h23412j34k2323jd22lh234y24ypii234y2i4n2hd123re22rgl23hne234';
export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImF1ZCI6Ind3dy5zdWNjZXNzaXZlLmluIiwic3ViIjoiTGVhcm4gYW5kIEltcGxlbWVudCIsImVtYWlsIjoiaGVhZC50cmFpbmVyQHN1Y2Nlc3NpdmUudGVjaCIsImlhdCI6MTYxNzE2NTEyMCwiZXhwIjoxNjQ4NzIyNzIwfQ.YE_cQ7ZgHB_pgD0CZ9prfWfTDrAN6Upk0b45Ns2UMds';