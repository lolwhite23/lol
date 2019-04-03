

module.exports.run = async(bot, message, args) => {
    let bReason = args.join(" ").slice(22);
    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(User.id === '257737712860135425'){
        message.delete();
        message.channel.send("**This person is blacklisted!**");
        return;
    }
    if(!User) return message.channel.send("Please mention someone");
    User.send(`**${message.author.tag}:**${bReason}`)
    message.delete();
    message.channel.send("Your message was sent!").then(msg => msg.delete(5000));
}
module.exports.help = {
    name: 'tell'
}
