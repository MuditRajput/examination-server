const Validation = {
    get: {
        id: {
            required: true,
            string: true,
            in: ['params'],
            errorMessage: 'id is Invalid'
        }
    },
};
export default Validation;
