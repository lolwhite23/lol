const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
  let humans = message.guild.members.filter(member => !member.user.bot).size
    let sicon = message.guild.iconURL;
    let serverembed = new discord.RichEmbed()
    .setAuthor("Server Information", message.guild.iconURL)
    .setColor("#15f15")
    .setThumbnail(message.guild.iconURL)
    .addField("Server Name:", `${message.guild.name}`, inline = true)
    .addField("Created On:", `${message.guild.createdAt}`, inline = true)
    .addField("You Joined:", `${message.member.joinedAt}`, inline = true)
    .setTimestamp()

    return message.channel.send(serverembed);
  }

module.exports.help = {
    name: 'guildinfo',
    aliases: []
};
