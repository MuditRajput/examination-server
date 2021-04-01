import { wrongToken, token } from '../../libs/constants';

export const getTraineeTest = (request) => {
  it('get all trainees', async () => {
    return request
      .get('/api/trainee')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('get all trainees', async () => {
    return request
      .get('/api/trainee')
      .set('Authorization', wrongToken)
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
        expect(res.body.error).toBe('Authentication Failed');
      });
  });
};

export const createTraineeTest = (request) => {
  it('create trainee', async () => {
    return request
      .post('/api/trainee')
      .send({
        email: 'trainee.2@successive.tech',
        password: 'Qwerty@1',
        name: 'Trainee 2'
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('create trainee', async () => {
    return request
      .post('/api/trainee')
      .send({
        email: 'trainee.2@successive.tech',
        password: 'Qwerty@1'
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(422)
      .then((res) => {
        expect(res.body.message).toBe('Name is invalid');
      });
  });
  it('create trainee', async () => {
    return request
      .post('/api/trainee')
      .send({
        email: 'trainee.2@successive.tech',
        password: 'Qwerty@1',
        name: '12'
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(422)
      .then((res) => {
        expect(res.body.message).toBe('Name is invalid');
      });
  });
};

export const updateTraineeTest = (request) => {
  it('update trainee', async () => {
    return request
      .put('/api/trainee')
      .send({
        originalId: '601b7f029df26436101cf9e7',
        dataToUpdate: {
          name: 'trainee 99'
        },
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.status).toBe(400);
      });
  });
  it('update trainee', async () => {
    return request
      .put('/api/trainee')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(422)
      .then((res) => {
        expect(res.body.message).toBe('originalId is required');
      });
  });
};

export const deleteTraineeTest = (request) => {
  it('delete trainee', async () => {
    return request
      .delete('/api/trainee/601b7f029df26436101cf9e7')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.status).toBe(400);
      });
  });
};
