const Validation = {
    create: {
        parentComment: {
            required: false,
            string: true,
            in: ['body'],
            errorMessage: 'parentComment is invalid'
        },
        comment: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Comment is invalid'
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
