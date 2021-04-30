const Validation = {
    create: {
        description: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Descrption is invalid'
        },
        title: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Title is invalid'
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
