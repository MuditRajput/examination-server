export const permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer','reviewer'],
    write : ['trainer'],
    delete: [],
    },
    'getProduct': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: ['manager'],
    },
}

export const users =[
    {
        traineeEmail: 'mudit.rajput@successive.tech',
        reviewerEmail: 'yogesh.singh@successive.tech',
    },
    {
        traineeEmail: 'aviral.swarnkar@successive.tech',
        reviewerEmail: 'avinash.thube@successive.com',
    },
    {
        traineeEmail: 'nikhil.rawat@successive.tech',
        reviewerEmail: 'shalu.sharma@successive.techa',
    }
]
