const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');
  
module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By:", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", rreason)
    .setTimestamp()

    let reportschannel = message.guild.channels.find(`name`, "mod-log");
    if(!reportschannel) return message.channel.send("Couldn't find mod-log channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  module.exports.help = {
    name: 'report',
    aliases: []
};
