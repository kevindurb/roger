require('dotenv').config();
const Roger = require('./Roger/Roger');

const roger = new Roger();

roger.boot();
