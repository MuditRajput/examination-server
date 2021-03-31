import { token } from '../../libs/constants';

export const getResultsTest = (request) => {
  it('get all results', async () => {
    return request
      .get('/api/results')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};

export const getResultTest = (request) => {
  it('get one result', async () => {
    return request
      .get('/api/results/6064146b99b83c2dd494e503')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};
