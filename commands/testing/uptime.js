const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    aliases: [],
    category: "testing",
    description: "Displays the current uptime of the bot!",
    run: async (bot, message, args) => {

        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()
            .setTitle("Bot Uptime")
            .addFields({ name: "Days", value: days, inline: false },
                { name: "Hours", value: hours, inline: false },
                { name: "Minutes", value: minutes, inline: false },
                { name: "Seconds", value: seconds, inline: false })
            .setColor(0xF54242);

        message.channel.send(embed);

    }
};