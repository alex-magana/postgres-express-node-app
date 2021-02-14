const request = require('supertest');
const app = require('../../../app');
const { dataSetUp, dataTeardown } = require('../../helpers/database');

describe('Todos', () => {
    beforeEach(async () => {
        dataSetUp();
    });

    afterEach(async () => {
        dataTeardown();
    });

    it('should create a new Todo item', async () => {
        const res = await request(app)
            .post('/api/todos')
            .send({
                title: 'Jamaica'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title');
    });

    it('should fetch all posts', async () => {
        const res = await request(app).get('/api/todos/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(20);
    });

    it('should retrieve a Todo', async () => {
        const todoId = 5;
        const res = await request(app).get(`/api/todos/${todoId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
        expect(res.body.title).toEqual('China');
    });

    it('should update a Todo', async () => {
        const res = await request(app)
            .put('/api/todos/6')
            .send({
                title: 'Djibouti'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
        expect(res.body.title).toEqual('Djibouti');
    });

    it('should delete a Todo', async () => {
        const res = await request(app).delete('/api/todos/7');
        expect(res.statusCode).toEqual(204);
    });
});