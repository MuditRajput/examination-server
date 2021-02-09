import validateEmail from './helper'
export default function validateUsers(users) {
    const invalidUsers = [];
    const validUsers = [];
    users.forEach(function (user) {
        const{traineeEmail, reviewerEmail} = user;
        if(validateEmail(traineeEmail)){
            validUsers.push(traineeEmail);
        }
        else{
            invalidUsers.push(traineeEmail);
        }
        if(validateEmail(reviewerEmail)){
            validUsers.push(reviewerEmail)
        }
        else{
            invalidUsers.push(reviewerEmail)
        }
    }
)
let validNumber=validUsers.length;
let invalidNumber=invalidUsers.length;
console.log(`${validNumber} Users are Valid: \n`, validUsers)
console.log(`${invalidNumber} Users are Invalid: \n`, invalidUsers)
}
