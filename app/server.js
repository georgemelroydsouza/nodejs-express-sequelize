// server.js
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const config = require('./config');
const { Sequelize } = require('sequelize');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});