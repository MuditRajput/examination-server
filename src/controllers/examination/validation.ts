const Validation = {
    create: {
        subject: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Subject is invalid'
        },
        questionSet: {
            required: true,
            isObject: true,
            regex: /[a-z]+/i,
            in: ['body'],
            errorMessage: 'QuestionSet is invalid'
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
            required: true,
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
