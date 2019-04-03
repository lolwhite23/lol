const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.delete();
    let embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setAuthor('Server IP:', bot.user.displayAvatarURL)
    .addField("`Coming soon!`", '_ _')
    .setFooter(`Requested by: ${message.author.tag}`)

    message.channel.send(embed);
}

module.exports.help = {
    name: 'ip'
}