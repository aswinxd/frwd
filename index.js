// Load environment variables from .env file
require('dotenv').config();

// Require the Bot module
const Bot = require('./src/Bot');

// Create a new instance of the Bot class
const bot = new Bot();

// Launch the bot
bot.telegraf.launch();
