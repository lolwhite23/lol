const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
  let humans = message.guild.members.filter(member => !member.user.bot).size
  var resp = 
  "Members: " + message.guild.memberCount + "\n" +
  "Online: " + message.guild.members.filter(o => o.presence.status === 'online').size + "\n" +
  "Away: " + message.guild.members.filter(i => i.presence.status === 'idle').size + "\n" +
  "DND: " + message.guild.members.filter(d => d.presence.status === 'dnd').size + "\n" +
  "Offline: " + message.guild.members.filter(a => a.presence.status === 'offline').size;
    let sicon = message.guild.iconURL;
    let serverembed = new discord.RichEmbed()
    .setAuthor("Server Information", message.guild.iconURL)
    .setColor("#15f15")
    .setThumbnail(message.guild.iconURL)
    .addField("Server Name:", `${message.guild.name}`, inline = true)
    .addField("Created On:", `${message.guild.createdAt}`, inline = true)
    .addField("You Joined:", `${message.member.joinedAt}`, inline = true)
    .addField('Stats:', '_ _')
    .addField(resp, '_ _')
    .addField('Humans:', `${message.guild.members.filter(member => !member.user.bot).size}`)
    .addField('Bots:', `${message.guild.members.filter(member => member.user.bot).size}`)
    .setTimestamp()

    return message.channel.send(serverembed);
  }

module.exports.help = {
    name: 'guildinfo',
    aliases: []
};
