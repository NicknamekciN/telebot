var TelegramBot = require('node-telegram-bot-api');

var token = '969367811:AAGR4MkgU0Lb2SIHnNgnNCp5pGzRFnUm9hQ';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Ill have the tuna. No crust.');
});