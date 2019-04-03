const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Invites and links:`, message.author.displayAvatarURL)
    .setColor("#245AED")
    .addField("<:bot:536966206108729349> **Website**:", "https://zeptixmc.net/")
    .addField("<:patreon:536964960924991510> **Bot Dev Patreon**:", "https://www.patreon.com/reversebot")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: 'info',
    aliases: ['links']
}