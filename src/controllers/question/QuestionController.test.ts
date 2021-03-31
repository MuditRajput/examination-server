import { token } from '../../libs/constants';

export const getQuestionsTest = (request) => {
  it('get all Questions', async () => {
    return request
      .get('/api/question/60644a1554d5941a1694281b')
      .query({
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

export const createQuestionsTest = (request) => {
  it('create Questions', async () => {
    return request
      .post('/api/question')
      .send({
        originalId: '60644a1554d5941a1694281b',
        questionList: [
          {
            'options' : [
              '2',
              '3',
              '4'
            ],
            'correctOption' : [
              '2'
            ],
            'question' : 'question 1',
            'marks' : 1,
          }
        ]
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};
export const updateQuestionsTest = (request) => {
  it('update Questions', async () => {
    return request
      .put('/api/question')
      .send({
        originalId: '606467093325562c5f7b4c47',
        dataToUpdate:
          {
            marks : 3,
          }
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};
export const deleteQuestionTest = (request) => {
  it('delete Question', async () => {
    return request
      .delete('/api/question/606467093325562c5f7b4c47')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};
