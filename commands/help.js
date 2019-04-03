const Discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
    var args = message.content.toLowerCase().split(" ");
    let helpembed1 = new Discord.RichEmbed()
    .setAuthor("Help:", bot.user.displayAvatarURL)
    .setColor("#36393e")
    .addField("Prefix: `~`", `_ _`)
    .addField("Mod Commands", `Do ${prefix}Help mod to see all mod commands.`)
    .addField("Fun Commands", `Do ${prefix}Help fun to display all fun commands.`)
    .setTimestamp()
    if(!args[1]) return message.channel.send(helpembed1)
    if(args[1] === 'all')
    {
        let helpembedall1 = new Discord.RichEmbed()
        .setColor("#36393e")
        .setDescription(":page_facing_up: Sent a list of commands to you!")
        message.channel.send(helpembedall1);
        let helpembedall2 = new Discord.RichEmbed()
        .setColor("#36393e")
        .setAuthor("All Commands:", bot.user.displayAvatarURL)
        .addField("Prefix: `>`", `_ _`)
        .addField("====== Server Commands ======", '_ _')
        .addField("IP:", "Shows the server IP")
        .addField("Info:", "Shows the website link, an invite link, and a patreon page to donate")
        .addField("====== Mod Commands ======", "_ _")
        .addField("Kick:", "Kicks a mentioned person. Usage: ~kick <@person> <reason>")
        .addField("Warn:", "Warns a mentioned person. Usage: ~warn <@person> <reason>")
        .addField("Ban:", "Bans a mentioned person. Usage: ~ban <@person> <reason>")
        .addField("====== Misc Commands ======", "_ _")
        .addField("Suggest:", "Suggests something for the server. Usage: ~suggest <suggestion>")
        .addField("====== Fun Commands ======", "_ _")
        .addField("Meme:", "Shows you a meme.")
        .addField("Mi:", "Shows you something mildly infuriating.")
        message.author.send(helpembedall2)
        
    }
    if(args[1] === 'fun')
    {
        let fun = new Discord.RichEmbed()
        .setAuthor("Fun Commands", bot.user.displayAvatarURL)
        .setColor("#36393e")
        .addField("Meme:", "Shows you a meme.")
        .addField("Mi:", "Shows you something mildly infuriating.")
        .addField("Say:", "Bot will say anything you say.")
        
        message.channel.send(fun)
        
    
    }
    if(args[1] === 'server')
    {
        let server = new Discord.RichEmbed()
        .setAuthor("Server Commands:", bot.user.displayAvatarURL)
        .setColor("#36393e")
        .addField("IP:", "Shows the server IP")
        .addField("Info:", "Shows the website link, an invite link, and a patreon page to donate")
        message.channel.send(server);
    
    }
    if(args[1] === 'mod')
    {
        let helpembed2 = new Discord.RichEmbed()
        .setAuthor("Moderation Commands:", bot.user.displayAvatarURL)
        .setColor("#36393e")
        .addField("Prefix: `~`", '_ _')
        .addField("Kick:", "Kicks a mentioned person. Usage: ~kick <@person> <reason>")
        .addField("Warn:", "Warns a mentioned person. Usage: ~warn <@person> <reason>")
        .addField("Ban:", "Bans a mentioned person Usage: ~ban <@person> <reason>")
        .addField("Announce:", "Announces something in a channel of your choosing. Usage: ~announce <#channel> <message>")

        message.channel.send(helpembed2)

    }


}

module.exports.help = {
    name: 'help'
}
