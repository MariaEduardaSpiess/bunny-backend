const express = require('express');
const routes = require('./routes');
var port = process.env.PORT || 3333;
var cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(port);