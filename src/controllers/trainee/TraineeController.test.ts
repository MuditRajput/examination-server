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
  it('get all trainees with skip and limit', async () => {
    return request
      .get('/api/trainee')
      .set('Authorization', token)
      .query({
        limit: 5,
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.data.UsersList.length).toBe(5);
      });
  });
  it('get all trainees with wrong skip and limit', async () => {
    return request
      .get('/api/trainee')
      .set('Authorization', token)
      .query({
        limit: 'a',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((res) => {
        expect(res.body.message).toBe('Limit is invalid');
      });
  });
  it('get all trainees with search and serchBy', async () => {
    return request
      .get('/api/trainee')
      .set('Authorization', token)
      .query({
        searchBy: 'email',
        search: 'head.trainer@successive.tech'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.data.UsersList.length).toBe(1);
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

export const getOneTraineeTest = (request) => {
  it('get one trainee', async () => {
    return request
      .get('/api/trainee/602defed287cf212e8bb3811')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('get one trainee with wrong id', async () => {
    return request
      .get('/api/trainee/602defed287cf212e8bb381')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('Fetch Unsuccessfull');
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
        originalId: '606585a3276c5a4966e2e9c7',
        dataToUpdate: {
          name: 'trainee 99'
        },
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('update trainee wrong dataToUpdate', async () => {
    return request
      .put('/api/trainee')
      .send({
        originalId: '606585a3276c5a4966e2e9c7',
        dataToUpdate: {
          name: {
            name : 'name 1'
          }
        },
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(res.body.message).toBe('Internal Server Error');
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
