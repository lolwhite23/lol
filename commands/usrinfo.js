const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(bot, message, args) => {
    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!User) return message.channel.send("Please mention someone");
    
    let embed = new Discord.RichEmbed()
    .setColor("#00d2ff")
    .setThumbnail(User.user.displayAvatarURL)
    .addField(`Bot:`, User.user.bot)
    .addField(`Created At:`, User.user.createdAt)
    .addField("Joined Server:", `${moment.utc(User.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    .addField(`Last Message:`, `${User.user.lastMessage ? User.user.lastMessage : 'Null'}`)
    .addField(`Presence Status:`, User.user.presence.status)
    .addField("Game:", `${User.presence.game ? User.presence.game.name : 'None'}`)
    .addField('Nickname:', User.guild.member(User).displayName)
    .addField(`Tag:`, User.user.tag)
    .addField("Username:", User.user.username)
    .addField("Roles:", User.roles.map(roles => `${roles.name}`).join(', '))
    .setTimestamp()

    message.channel.send(embed)

}

module.exports.help = {
    name: 'usrinfo'
}