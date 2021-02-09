import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { seedData1 } from './constants';

const userRepository: UserRepository = new UserRepository();
export default async function seed() {
    const count = await userRepository.count({});
    if (count === 0) {
        try {
        console.log('Seeding Data');
        const hashPass1 = await bcrypt.hash(seedData1.password, 10);
        seedData1.password = hashPass1;
        userRepository.create(seedData1);
        } catch (err) {
        console.log(err);
        }
    }
}
