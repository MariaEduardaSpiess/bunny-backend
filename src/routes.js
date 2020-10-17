const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/user', async (request, response) => {
    await connection('user').insert(request.body);
    return response.json();
});

routes.get('/user', async (request, response) => {
    const users = await connection('user').select('*');
    return response.json(users);
});

routes.post('/user-task', async (request, response) => {
    request.body.user_id = request.query.user;
    await connection('user_task').insert(request.body);
    return response.json();
});

routes.get('/user-task', async (request, response) => {
    const userTasks = await connection('user_task').where('user_id', request.query.user).select('*');
    return response.json(userTasks);
});

module.exports = routes;