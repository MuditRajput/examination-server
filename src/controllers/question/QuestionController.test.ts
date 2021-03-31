import { token } from '../../libs/constants';

export const getQuestionsTest = (request) => {
  it('get all Questions', async () => {
    return request
      .get('/api/question/605adbb8983e192358194334')
      .send({
        submitted: 'true'
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};

