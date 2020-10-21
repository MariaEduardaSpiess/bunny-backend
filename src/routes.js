const { request, response } = require('express');
const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/user', async (request, response) => {
    if (request.body.id) {
        await connection('user').where({id: request.body.id}).update({name: request.body.name});
    } else {
        await connection('user').insert(request.body);
    }
    return response.json();
});

routes.get('/user', async (request, response) => {
    const users = await connection('user').select('*');
    return response.json(users);
});

routes.delete('/user', async (request, response) => {
    await connection('user_task').where({user_id: request.query.user}).del();
    await connection('user').where({id: request.query.user}).del();
    return response.json();
});

routes.post('/user-task', async (request, response) => {
    if (!request.body.id) {
        request.body.user_id = request.query.user;
        await connection('user_task').insert(request.body);
    } else {
        await connection('user_task').where({id: request.body.id}).update({description: request.body.description, state: request.body.state});
    }
    return response.json();
});

routes.get('/user-task', async (request, response) => {
    const userTasks = await connection('user_task').where({user_id: request.query.user}).select('*');
    return response.json(userTasks);
});

module.exports = routes;