import { token, wrongToken } from '../../libs/constants';

export const loginTest = (request) => {
  it('Login new user', async () => {
    return request
      .post('/api/user/login')
      .send({
        email: 'head.trainer@successive.tech',
        password: 'Qwerty@1'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
          expect(res.body.status).toBe('success');
      });
  });
  it('Login new user', async () => {
    return request
      .post('/api/user/login')
      .send({
        email: 'head.trainer@successive.tech',
        password: 'Qwerty@'
      })
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('invalid password');
      });
  });
  it('Login new user', async () => {
    return request
      .post('/api/user/login')
      .send({
        email: 'headtrainer@successive.tech',
        password: 'Qwerty@1'
      })
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('invalid email');
      });
  });
};

export const profileTest = (request) => {
  it('user profile', async () => {
    return request
      .get('/api/user/me')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
          expect(res.body.status).toBe('success');
      });
  });
  it('user profile', async () => {
    return request
      .get('/api/user/me')
      .set('Authorization', wrongToken)
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('User is Invalid');
      });
  });
};
