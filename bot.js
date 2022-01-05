require('dotenv').config()

const { Client } = require('discord.js');
const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

bot.login(process.env.DISCORDJS_BOT_TOKEN)