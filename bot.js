require('dotenv').config()

const { Client } = require('discord.js');
const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

bot.on('ready', () => {
    console.log(`${bot.user.username} has logged in`);
})

//Message Event
bot.on('messageCreate', (message) => {
    console.log(message.content);
    if(message.author.bot === true) return;
    if(message.content === '/hello') {
        message.channel.send('Hi please be consistent')
    }
})

bot.login(process.env.DISCORDJS_BOT_TOKEN)