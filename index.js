// Add modules here
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const config = require('./config.json')

// Put a prefix for the commands
const Prefix = "!"

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot)
})

bot.on("ready", () => {
    console.log(`Currently online in ${bot.guilds.cache.size}`)
})

bot.on("message", async (message) => {

    if (message.author.bot) { return; }
    if (message.webhookID) { return; }
    if (!message.guild) { return; }

    if (!message.content.startsWith(Prefix)) { return; }
    if (!message.member) { message.member = await message.guild.fetchMember(message); }

    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let command = bot.commands.get(cmd);
    if (!command) { command = bot.commands.get(bot.aliases.get(cmd)); }

    if (command) {
        command.run(bot, message, args);
    }
});
//go to config.json and put in your bots token
bot.login()