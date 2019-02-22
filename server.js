const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');

// const actionRouter = require('./routes/actionRouter');
// const projectRouter = require('./routes/projectRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
// server.use('/api/actions');
// server.use('/api/projects');

server.get('/', async (req, res) => {
    const motd = process.env.MOTD || 'Heroku';
    res.send(`<h3>This Node Express Sprint is being viewed from ${motd}!</h3>`)
});
module.exports = server;