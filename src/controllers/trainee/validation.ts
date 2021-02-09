const Validation = {
    create: {
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is invalid'
        },
        email: {
            required: true,
            regex: /@[a-z]+[.][a-z]+$/,
            in: ['body'],
            errorMessage: 'Email is invalid'
        },
        name: {
            required: true,
            string: true,
            regex: /[a-z]+/i,
            in: ['body'],
            errorMessage: 'Name is invalid'
        },
        role: {
            required: false,
            string: true,
            in: ['body'],
            default: 'trainee',
            errorMessage: 'Role is invalid'
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
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
        sortBy: {
            required: false,
            default: 'createdAt',
            in: ['query'],
            string: true
        },
        sortOrder: {
            required: false,
            string: true,
            default: 'descending',
            in: ['query'],
        },
        searchBy: {
            required: false,
            string: true,
            in: ['query']
        },
        search: {
            required: false,
            string: true,
            in: ['query']
        }
    },
    getOne: {
        id: {
            required: true,
            in: ['params'],
            string: true,
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
            custom(dataToUpdate) {
                console.log('hey');
            }
        }
    }
};
export default Validation;
