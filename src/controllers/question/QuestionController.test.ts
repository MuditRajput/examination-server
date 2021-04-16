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
  it('get all Questions', async () => {
    return request
      .get('/api/question/60644a1554d5941a1694281')
      .query({
        submitted: 'true'
      })
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('No questions Found');
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
        originalId: '60791c3e46c4b71e14be58f1',
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
  it('update Questions', async () => {
    return request
      .put('/api/question')
      .send({
        originalId: '60791c3e46c4b71e14be58f',
        dataToUpdate:
          {
            marks : 3,
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

export const deleteQuestionTest = (request) => {
  it('delete Question', async () => {
    return request
      .delete('/api/question/606467093325562c5f7b4c4b')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body.status).toBe(400);
      });
  });
};

export const submitQuestionTest = (request) => {
  it('submit Question', async () => {
    return request
      .post('/api/question/submit')
      .set('Authorization', token)
      .send({
        questionSet: '60644a1554d5941a1694281b',
        answersList: {
          '60644a1c54d5941a1694281c': '1'
        }
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
  it('submit Question', async () => {
    return request
      .post('/api/question/submit')
      .set('Authorization', token)
      .send({
        questionSet: '60644a1554d5941a1694281b'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe('success');
      });
  });
};
