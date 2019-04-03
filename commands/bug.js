const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let guild = message.guild;
    entry = args.join(' ');
    let embed = new Discord.RichEmbed()
    .setColor("#36393e")
    .setAuthor("Bug report:", message.author.displayAvatarURL)
    .addField(`Server: ${guild.name}`, '_ _')
    .addField("Author:", message.author.tag)
    .addField("Reason:", entry)
    
    if(!entry) return message.channel.send("Please say something to report!")
    message.delete();
    message.channel.send("**Bug report sent!**");

        let client = message.channel.client;

    let user = client.fetchUser('394638597439094795')
    .then(user => {
        user.send(embed); 
    });
}



module.exports.help = {
  name: 'bug'
}
