import UserRepository from '../repositories/user/UserRepository';
import ResultRepository from '../repositories/result/ResultRepository';
import ExaminationRepository from '../repositories/examination/ExaminationRepository';
import * as bcrypt from 'bcrypt';
import { seedData1, seedExaminationData } from './constants';
import { resultModel } from '../repositories/result/ResultModel';


const userRepository: UserRepository = new UserRepository();
const resultRepository = new ResultRepository(resultModel);
const examinationRepository = new ExaminationRepository();
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

export async function seedExamination() {
    const examCount = await examinationRepository.countExams();
    if (examCount === 0) {
        try {
            await examinationRepository.create(seedExaminationData);
        } catch (err) {
            console.log(err);
        }
    }
}

export async function seedresult() {
    resultRepository.create({
        originalId: 'abc123',
        physics: 75,
        chemistry: 75,
        math: 75
    });
}
