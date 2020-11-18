//This command is used to test your bots latency
const Discord = require("discord.js");
// Put required modules here
module.exports = {
    name: "ping",
    aliases: ["latency"],
    category: "testing",
    description: "gets API Ping and Response Time",
    run: async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Ping")
            .setDescription("Ping is being appreciated... :bar_chart:")
            .setColor(0xFF0000);
        var resMsg = await message.channel.send(embed);

        const editEmbed = new Discord.MessageEmbed()
            .setTitle("Ping")
            .addFields({ name: "API latency", value: `${bot.ws.ping}ms`, inline: false },
                { name: "Response time", value: `${Math.round(resMsg.createdTimestamp - message.createdTimestamp)}ms` })
            .setColor(0xFF0000);
        resMsg.edit(editEmbed);

    }
};