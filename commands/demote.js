const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
 if (message.member.hasPermission('ADMINISTRATOR')){
    let kReason = args.join(" ").slice(22); 
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rMember) return message.reply("That user does not exist.");
    rMember.removeRoles(rMember.roles).then(console.log).catch(console.error); 
  message.channel.send(`<:tickgreen:536967144248836113> You have demoted ${rMember} for **${kReason ? kReason : 'No reason provided.'}**`);
    channel = bot.channels.get("564934769310302209");
    let embed = new Discord.RichEmbed()
    .setColor("#36393e")
    .setThumbnail(rMember.displayAvatarURL)
    .setTitle("Demotion:")
    .addField("Demotee:", rMember)
    .addField("Moderator:", message.author.tag)
    .addField("Reason:", `${kReason ? kReason : 'No reason provided.'}`)
    .setTimestamp()
    channel.send(embed)
  rMember.send(`You have been demoted for: **${kReason ? kReason : 'No reason provided.'}**`)
    }
}
module.exports.help = {
  name: 'demote'
}
