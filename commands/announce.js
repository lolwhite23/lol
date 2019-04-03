const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async(bot, message) => {

    if(!message.member.hasPermission(["MENTION_EVERYONE", "ADMINISTRATOR", "MANAGE_MESSAGES"])) return message.channel.send("Invalid Perms")
    let mChannel = message.mentions.channels.first()
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let announcement = args.slice(1).join(" ");
    if(!args) return message.channel.send(`Usage: <channel> <message>`);
    let embed = new Discord.RichEmbed()
    .setAuthor('ANNOUNCEMENT', message.author.displayAvatarURL)
    .setColor("#36393e")
    .addField(`${announcement}`, "_ _")
    .setTimestamp(new Date())
    .setFooter(`Announcement by: ${message.author.tag}`);
    message.delete({timeout: 1000});
    mChannel.send("@everyone")
    mChannel.send(embed)
}
module.exports.help = {
    name: 'announce'
}
