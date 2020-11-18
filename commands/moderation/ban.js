const Discord = require('discord.js')

module.exports = { 
    name: "ban",
    aliases: [],
    category: "moderation",
    description: "Bans the user that is specified",
    run: async(bot, message, args, guild) => {

        let banned = message.mentions.users.first() || message.guild.members.get(args[0])
        let reason = args.join(" ").slice(22)

        //Messages

        if(!banned) {
            let banInfoEmbed = new Discord.MessageEmbed()
            .setTitle("ban")
            .setDescription("Specify a member to ban")
            message.channel.send(banInfoEmbed);

            return;
        }

        if(message.author === banned){
            let KYSembed = new Discord.MessageEmbed()
            .setDescription("You can't ban yourself")
            .setColor("#000000");
            message.channel.send(KYSembed);

            return;
        }

        if(!reason){
            let noReasonEmbed = new Discord.MessageEmbed()
            .setDescription("Please specify a reason to ban the member.")
            .setColor("#000000")
            message.channel.send(noReasonEmbed);

            return;
        }

        if(!message.member.permissions.has("BAN_MEMBERS")) {
            let permEmbed = new Discord.MessageEmbed()
            .setDescription("You do not have the permission to ban members.")
            .setColor("#000000")
            message.channel.send(permEmbed);

            return;
        }

        if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
            let noPermBot = new Discord.MessageEmbed()
            .setDescription("Please contact the Admin to perform this.")
        }
        
        let reasonEmbed = new Discord.MessageEmbed()
        .setTitle("BANNED!")
        .setDescription("The user has been banned for the following reasons:")
        .addFields({ name: "Member", value: `<@${banned.id}>`, inline: false },
        { name: "Reason", value: reason, inline: false })
        .setColor('#FF0000')

        await banned.send(reasonEmbed)
        message.channel.send(reasonEmbed)

        message.guild.member(banned).ban(reasonEmbed)



    }
}