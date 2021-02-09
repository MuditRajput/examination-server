import validateEmail from './helper';
import { IUsers } from '../interfaces';
export default function validateUsers(users: IUsers[]): void {
    const invalidUsers = [];
    const validUsers = [];
    users.forEach((user) => {
        const{traineeEmail, reviewerEmail} = user;
        if (validateEmail(traineeEmail)) {
            validUsers.push(traineeEmail);
        }
        else {
            invalidUsers.push(traineeEmail);
        }
        if (validateEmail(reviewerEmail)) {
            validUsers.push(reviewerEmail);
        }
        else {
            invalidUsers.push(reviewerEmail);
        }
    }
);
const validNumber = validUsers.length;
const invalidNumber = invalidUsers.length;
console.log(`${validNumber} Users are Valid: \n`, validUsers);
console.log(`${invalidNumber} Users are Invalid: \n`, invalidUsers);
}
