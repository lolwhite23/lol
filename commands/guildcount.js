const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
  var resp = 
  "Members: " + message.guild.memberCount + "\n" +
  "Online: " + message.guild.members.filter(o => o.presence.status === 'online').size + "\n" +
  "Away: " + message.guild.members.filter(i => i.presence.status === 'idle').size + "\n" +
  "DND: " + message.guild.members.filter(d => d.presence.status === 'dnd').size + "\n" +
  "Offline: " + message.guild.members.filter(a => a.presence.status === 'offline').size;
  
  let embed = new Discord.RichEmbed()
  .setAuthor('Guild Count', message.guild.iconIRL)
  .addField("Humans:", `${message.guild.members.filter(member => !member.user.bot).size}`, true)
  .addField("Bots:", `${message.guild.members.filter(member => member.user.bot).size}`, true)
  .addField("Total Members", `${message.guild.memberCount}`, true)
  .addField(resp, '_ _')
}

exports.help = {
  name: 'guildcount'
}
