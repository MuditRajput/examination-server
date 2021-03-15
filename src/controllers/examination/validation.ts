const Validation = {
    create: {
        subject: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Subject is invalid'
        },
        maximumMarks: {
            required: false,
            number: true,
            in: ['body']
        },
        description: {
            required: false,
            string: true,
            in: ['body']
        },
        time: {
            required: true,
            number: true,
            in: ['body']
        },
        maxAttempts: {
            required: true,
            number: true,
            in: ['body']
        },
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
