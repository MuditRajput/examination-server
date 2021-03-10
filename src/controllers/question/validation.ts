const Validation = {
    create: {
        originalId: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Subject is invalid'
        },
        questionList: {
            required: true,
            in: ['body'],
            errorMessage: 'QuestionList is invalid'
        }
    },
    get: {
        id: {
            required: true,
            string: true,
            in: ['params'],
            errorMessage: 'id is Invalid'
        }
    },
    delete: {
        id: {
            required: true,
            string: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    update: {
        originalId: {
            required: false,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'dataToUpdate is required'
        }
    },
    submitAnswers: {
        questionSet: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'questionSet is required'
        },
        answersList: {
            required: false,
            isObject: true,
            in: ['body'],
            errorMessage: 'answersList is Invalid'
        },
    }
};
export default Validation;
