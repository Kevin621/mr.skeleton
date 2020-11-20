const Discord = require('discord.js');

module.exports = {
    name: "welcome",
    aliases: [],
    category: "server",
    description: "creates welcome page and reactions",
    run: async (bot, message, args) => {
        const welcome = `
        **Welcome to my support server!**

        
__**Rules:**__
1.No advertising outside of the ads channel.
2.No illegal activity.
3.NSFW is not allowed in this server.
4.Don't be a fucking dick.
5.Use the proper channels.

__**Suggestions**__
1.Be detailed with your problems.
2.Use code blocks. (Details below)


__**Code block help**__:
https://gist.github.com/matthewzring/9f7bbfd102003963f9be7dbcf7d40e51
        `
        if(!message.author.id == 582303186476466206) return
        message.channel.send(welcome)
    }
}