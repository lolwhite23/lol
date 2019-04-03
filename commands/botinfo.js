const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
  
    let bicon = bot.user.displayAvatarURL;
    let botembed = new discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name:", bot.user.username, inline = true)
    .addField("Creator:", "Reverso#3604")
    .addField("Created On:", bot.user.createdAt)
    .addField("Version:", "1.1.0")
    .setTimestamp()

    return message.channel.send(botembed);
  }

module.exports.help = {
    name: 'botinfo',
    aliases: ['']
};
