// play this: https://www.youtube.com/watch?v=d-diB65scQU
// code away!
require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));