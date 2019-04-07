const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = async (bot, message, args) => { 
    let embed1 = new Discord.RichEmbed()
    .setDescription("Shutting Down...")
    let embed2  = new Discord.RichEmbed()
    .setDescription("Rebooting...")
    if(message.author.id !== "394638597439094795") return message.channel.send(`**NO TOUCHY TOUCHY** <@${message.author.id}>. You are not the owner of the bot.`)
    if(message.content.includes === '-r')
    {
        message.channel.send(embed2)
        bot.destroy();
        bot.login(process.env.token);
        return;
    }
    
  rebootBot(message.channel);
       function rebootBot(channel) {
        message.channel.send(embed1)
               .then(message => bot.destroy())
               .then(message => bot.destroy())
       }
    }

module.exports.help = {
    name: 'shutdown'
}
