const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setAuthor('Ping:')
        .addField('API Ping: ', Math.floor(bot.ping) + 'ms')
        .addField('<a:ping:561273661173268490> Bot Ping: ', Math.floor(botping) + 'ms')
        .addField('Message Ping: ', '~' + Math.round(msgping2) + 'ms')


        
    return message.channel.send(pingembed);
        

};

module.exports.help = {
    name: "ping"
};
