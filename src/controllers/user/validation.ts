const Validation = {
    login: {
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
        }
    },
    profile: {
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
        }
    }
};
export default Validation;
