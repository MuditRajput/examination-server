import { token, wrongToken, noEmailToken, wrongEmailToken } from '../../libs/constants';

export const loginTest = (request) => {
  it('Login new user with correct inputs', async () => {
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
  it('Login new user with wrong password', async () => {
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
  it('Login new user with invalid email', async () => {
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
  it('Login new user without email or password', async () => {
    return request
      .post('/api/user/login')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
          expect((res.body).length).toBe(2);
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
  it('profile with wrong token', async () => {
    return request
      .get('/api/user/me')
      .set('Authorization', wrongToken)
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('User is Invalid');
      });
  });
  it('profile without token', async () => {
    return request
      .get('/api/user/me')
      .set('Authorization', '')
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('Token not found');
      });
  });
  it('profile with token containing no email', async () => {
    return request
      .get('/api/user/me')
      .set('Authorization', noEmailToken)
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('Email  not in token');
      });
  });
  it('profile with token containing wrong email', async () => {
    return request
      .get('/api/user/me')
      .set('Authorization', wrongEmailToken)
      .expect('Content-Type', /json/)
      .expect(403)
      .then((res) => {
          expect(res.body.message).toBe('User is empty');
      });
  });
};
