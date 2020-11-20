const Discord = require("discord.js");
const ms = require('ms')

module.exports = {
    name: "mute",
    aliases: [],
    category: "moderation",
    run: async(bot, message, args) => {
        let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!toMute) return message.channel.send("Couldn't find the user.");
        if(toMute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them")
        let muteRole = message.guild.roles.cache.find(muteRole => muteRole.name === "Muted");


//This is where the problem starts
        if(!muteRole){
            muteRole = await message.guild.roles.create({
                data: {
                    name: "Muted",
                    color: "#000000",
                    permissions: [],
                },
            });
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.updateOverwrite(muteRole, {
                    SEND_MESSAGES: false,
                    SPEAK: false,
                    ADD_REACTIONS: false
                })
            });
        }

        let muteTime = args[1];
        if(!muteTime) return message.reply("Please Specify a time.");


        await(toMute.roles.add(muteRole));
        const mEmbed = new Discord.MessageEmbed()
        .setTitle("Muted")
        .addFields({ name: "Member", value: toMute, inline: false },
        { name: "Time", value: muteTime })
        .setTimestamp()
        message.channel.send(mEmbed)

        setTimeout(function() {
            toMute.roles.remove(muteRole);
            message.channel.send(`<@${toMute.id}> has been unmuted`);
        }, ms(muteTime)) 
    }
}