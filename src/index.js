require('dotenv').config({ path: '.env' });
require('@sapphire/plugin-logger/register');

const { logClientIn } = require('./client.js');
logClientIn();
