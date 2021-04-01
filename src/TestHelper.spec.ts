import { config } from './config';
import Server from './Server';
import Database from './libs/database';
import * as supertest from 'supertest';
import { loginTest, profileTest } from './controllers/user/UserController.test';
import { getResultsTest, getResultTest } from './controllers/result/ResultController.test';
import { getExaminationsTest, createExaminationsTest, updateExaminationsTest, deleteExaminationTest } from './controllers/examination/QuestionController.test';
import { getQuestionsTest, createQuestionsTest, updateQuestionsTest, deleteQuestionTest, submitQuestionTest } from './controllers/question/QuestionController.test';
import { getTraineeTest, createTraineeTest, updateTraineeTest, deleteTraineeTest } from './controllers/trainee/TraineeController.test';

const server = new Server(config);
const app = server.bootstrap();
export const request = supertest(app);

beforeAll(async () => {
  const { port, mongoUrl } = config;
  Database.open(mongoUrl)
    .then((res) => {
      app.listen(port, (err) => {
        if (!err) {
          console.log(`app is running on port ${port}`);
        }
      });
    })
    .catch();
});

afterAll(async () => {
    Database.disconnect();
});

describe('LOGIN API', () => {
  loginTest(request);
});

describe('PROFILE API', () => {
  profileTest(request);
});

describe('GET TRAINEE API', () => {
  getTraineeTest(request);
});

describe('POST TRAINEE API', () => {
  createTraineeTest(request);
});

describe('PUT TRAINEE API', () => {
  updateTraineeTest(request);
});

describe('DELETE TRAINEE API', () => {
  deleteTraineeTest(request);
});

describe('GET RESULTS API', () => {
  getResultsTest(request);
});

describe('GET RESULT API', () => {
  getResultTest(request);
});

describe('GET QUESTIONS API', () => {
  getQuestionsTest(request);
});

describe('POST QUESTIONS API', () => {
  createQuestionsTest(request);
});

describe('PUT QUESTIONS API', () => {
  updateQuestionsTest(request);
});

describe('DELETE QUESTIONS API', () => {
  deleteQuestionTest(request);
});

describe('SUBMIT QUESTIONS API', () => {
  submitQuestionTest(request);
});

describe('GET EXAMINATIONS API', () => {
  getExaminationsTest(request);
});

describe('POST EXAMINATION API', () => {
  createExaminationsTest(request);
});

describe('PUT EXAMINATION API', () => {
  updateExaminationsTest(request);
});

describe('DELETE EXAMINATION API', () => {
  deleteExaminationTest(request);
});
