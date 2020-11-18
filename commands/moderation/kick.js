const Discord = require('discord.js')

module.exports = { 
    name: "kick",
    aliases: [],
    category: "moderation",
    description: "Kicks the user that is specified",
    run: async(bot, message, args, guild) => {

        let kicked = message.mentions.users.first() || message.guild.members.get(args[0])
        let reason = args.join(" ").slice(22)

        //Messages

        if(!kicked) {
            let kickInfoEmbed = new Discord.MessageEmbed()
            .setTitle("Kicked")
            .setDescription("Specify a member to kick")
            message.channel.send(kickInfoEmbed);

            return;
        }

        if(message.author === kicked){
            let KYSembed = new Discord.MessageEmbed()
            .setDescription("You can't kick yourself")
            .setColor("#000000");
            message.channel.send(KYSembed);

            return;
        }

        if(!reason){
            let noReasonEmbed = new Discord.MessageEmbed()
            .setDescription("Please specify a reason to kick the member.")
            .setColor("#000000")
            message.channel.send(noReasonEmbed);

            return;
        }

        if(!message.member.permissions.has("KICK_MEMBERS")) {
            let permEmbed = new Discord.MessageEmbed()
            .setDescription("You do not have the permission to kick members.")
            .setColor("#000000")
            message.channel.send(permEmbed);

            return;
        }

        if(!message.guild.me.permissions.has("KICK_MEMBERS")) {
            let noPermBot = new Discord.MessageEmbed()
            .setDescription("Please contact the Admin to perform this.")
        }
        
        let reasonEmbed = new Discord.MessageEmbed()
        .setTitle("Kicked!")
        .setDescription("The user has been kicked for the following reasons:")
        .addFields({ name: "Member", value: `<@${kicked.id}>`, inline: false },
        { name: "Reason", value: reason, inline: false })
        .setColor('#FF0000')

        await kicked.send(reasonEmbed)
        message.channel.send(reasonEmbed)

        message.guild.member(kicked).kick(reasonEmbed)



    }
}