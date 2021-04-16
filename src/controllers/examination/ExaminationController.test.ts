import { token } from '../../libs/constants';

export const getExaminationsTest = (request) => {
  it('get all Examinations', async () => {
    return request
      .get('/api/exam')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};

export const createExaminationsTest = (request) => {
  it('create Examinations', async () => {
    return request
      .post('/api/exam')
      .send({
        subject: 'Physics',
        description: 'testing',
        maxAttempts: 4,
        time: 60
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('create Examinations with wrong inputs', async () => {
    return request
      .post('/api/exam')
      .send({
        subject: 'Physics',
        description: 'testing',
        maxAttempts: 4
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(422)
      .then((res) => {
        expect(res.body.message).toBe('time is required');
      });
  });
};

export const updateExaminationsTest = (request) => {
  it('update Examinations', async () => {
    return request
      .put('/api/exam')
      .send({
        originalId: '6073f1677c1a5a1c3866a754',
        dataToUpdate:
          {
            time : 3,
          }
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('update Examinations with wrong id', async () => {
    return request
      .put('/api/exam')
      .send({
        originalId: '6073f1677c1a5a1c3866a75',
        dataToUpdate:
          {
            time : 3,
          }
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('Examination Update Failed');
      });
  });
};

export const deleteExaminationTest = (request) => {
  it('delete Examination', async () => {
    return request
      .delete('/api/exam/60655754e9abe033f10cffbc')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.status).toBe(400);
      });
  });
};
