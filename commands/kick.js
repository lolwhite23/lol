const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("You don't have the correct perms!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    const liveJoin = bot.channels.get("562800536303304734");
    if(!kReason){
     "No reason."   
        
    }
    


    message.guild.member(kUser).kick(kReason);
    message.channel.send(`You kicked ${kUser} for **${kReason}** `).then(msg => msg.delete(5000));


    return;
  };
  
module.exports.help = {
    name: 'kick',
    aliases: []
};
