const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the correct perms!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    const liveJoin = bot.channels.get("562800536303304734");
    if(!kReason){
     "No reason."   
        
    }
        let kickEmbed = new discord.RichEmbed()
    .setTitle("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User:", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By:", `<@${message.author.id}> with ID ${message.author.id}`, true)
    .addField("Kicked In:", message.channel)
    .addField("Time:", message.createdAt, true)
    .addField("Reason:", kReason)
    .setTimestamp()


    message.guild.member(kUser).kick(kReason);
    message.channel.send(`You kicked ${kUser} for **${kReason}** `).then(msg => msg.delete(5000));
    liveJoin.send(kickEmbed)

    return;
  };
  
module.exports.help = {
    name: 'kick',
    aliases: []
};
