const supertest = require('supertest');
const baseURL = supertest('https://reqres.in');

function getUsers() {
    return baseURL
        .get('/api/users?page=2')
        .set('x-api-key', 'reqres-free-v1');
}

function createUser(user) {
    return baseURL
        .post('/api/users')
        .set({
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json',
        })
        .send(user);
}

module.exports = { getUsers, createUser };