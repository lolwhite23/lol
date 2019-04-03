const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let bReason = args.join(" ");
    bot.user.setStatus(bReason)
}
module.exports.help = {
    name: 'status'
}