const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
    }
    let error2 = new Discord.RichEmbed()
    .setAuthor("ERROR", message.author.displayAvatarURL)
    .setColor("#FF0000")
    .setDescription("Proper Usage: rPoll <question>")
    .setTimestamp()
    
    // Check for input
    if (!args[0]) return message.channel.send(error2)

    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setAuthor(`Poll:`, message.author.displayAvatarURL)
        .setColor("#0091FF") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        console.log(`${message.author.username} Made a poll about ${args[0]}`)
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react(`❎`);
            msg.react(`✅`); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            message.channel.send(error);
            });

};

module.exports.help = {
    name: 'poll'
}