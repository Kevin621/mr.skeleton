# Mr.skeleton

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8234fa7f8bec41f096635d22b5383574)](https://app.codacy.com/gh/Kevin621/mr.skeleton?utm_source=github.com&utm_medium=referral&utm_content=Kevin621/mr.skeleton&utm_campaign=Badge_Grade)

## Usage

This code is a template used to help you design your bot without knowing JavaScript.

## Rules

This bots code is allowed to be edited in anyway
<br>
The only limitation is that your code must include the mit license that is provided.

## Setup

    1. You must have node.js installed on your computer.
    2. Put the bot token in anyway but if it is in the files then do not post to github unless it is a private repo.
    3. Edit the code to include the features that are desired.
    4. Save it then open the folder in the command prompt.
    5. Once its ready just type the command 'node .'

## Creating commands

1 Create a folder in the commands folder (if you already have the categpry created then you dont need  

## Example

### Ping Command

```javascript
//Put modules here
    const Discord = require('discord.js')
    module.export = {
        name: "Replace this",
        aliases: ["latency"],
        categort: "The folder its in",
        description: "Replace this",
        run: async(bot, message, args) => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Ping")
            .setDescription("Ping is being appreciated... :bar_chart:")
            .setColor(0xFF0000)
            .setFooter("Kevin123#9973")
            var resMsg = await message.channel.send(embed);

            const editEmbed = new Discord.MessageEmbed()
            .setTitle("Ping")
            .addFields({ name: "API Latemcy", value: `${bot.ws.ping}ms`, inline: false },
            { name: "Response time", vakue: ${ Math(resMsg.createdTimestamp - message.createdTimestamp) }})
            .setColor(0xFF0000);
            resMsg.edit(editEmbed);
        }
    };
```

