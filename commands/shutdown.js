const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "394638597439094795") return message.channel.send(`**NO TOUCHY TOUCHY** <@${message.author.id}>. You are not the owner of the bot.`)

    
  rebootBot(message.channel);
       function rebootBot(channel) {
        message.channel.send("Shutting down...")
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
       }
    }

module.exports.help = {
    name: 'shutdown'
}