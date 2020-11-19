const Discord = require("discord.js");
const ms = require('ms')

module.exports = {
    name: "tempmute",
    aliases: [],
    category: "moderation",
    description: "Mutes the user for the specified time",
    run: async(bot, message, args) => {
        let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!toMute) return message.channel.send("Couldn't find the user.");
        if(toMute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't Muted them")
        let muteRole = message.guild.roles.cache.find(muteRole => muteRole.name === "muted");

        if(!muteRole){
            try{
                muteRole = await message.guild.roles.create({ data: { name: "muted", permissions: ['SEND_MESSAGES, VIEW_CHANNEL, READ_MESSAGE_HISTORY'] } })
                message.guild.channels.cache.forEach(async (channel, id) => {
                    message.channel.updateOverwrite(channel.guild.roles.muteRole.id, { "SEND_MESSAGES": false });
                });
            }catch(err){
                console.log(err)
            }
        }

        let muteTime = args[1];
        if(!muteTime) return message.reply("Please Specify a time.");

        await(toMute.roles.add(muteRole));
        message.reply(`<@${toMute.id}> has been muted for ${ms(ms(muteTime))}`);

        setTimeout(function() {
            toMute.roles.remove(muteRole);
            message.channel.send(`<@${toMute.id}> hsa been unmuted`);
        }, ms(muteTime));
    }
}
