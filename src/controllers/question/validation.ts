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
        originalId: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'questionSet is Invalid'
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
        questionId: {
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
    }
};
export default Validation;
