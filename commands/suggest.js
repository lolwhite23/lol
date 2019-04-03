const Discord = require('discord.js');
var used = false;

module.exports.run = async(bot, message, args) => {
    if(used){
        return message.channel.send("This command has a 10min cooldown")
    }
    else{
        let logChannel = bot.channels.get("555470760009793546")
        let error2 = new Discord.RichEmbed()
        .setAuthor("ERROR", message.author.displayAvatarURL)
        .setColor("#FF0000")
        .setDescription("Proper Usage: ~suggest <suggestion>")
        .setTimestamp()
        let sugestionlol = args.slice(0).join(" ")
        if(!sugestionlol) return message.channel.send('Please say your suggestion.')
        // Check for input
        if (!args[0]) return message.channel.send(error2)
        let embed1 = new Discord.RichEmbed()
        .setDescription("Please type something to suggest next time.")
        let embed2 = new Discord.RichEmbed()
        .setAuthor("Suggestion:", message.author.displayAvatarURL)
        .setDescription(sugestionlol)

        let msg = await logChannel.send(embed2)
            .then(function (msg) {
                msg.react(`❎`);
                msg.react(`✅`); // You can only add two reacts
                message.delete({timeout: 1000});
                message.channel.send("**Your suggestion has been submitted. Check <#555470760009793546> to view your suggestion.**");
                message.delete({timeout: 1000})
                }).catch(function(error) {
                message.channel.send(error);
                });
                if(msg.author.react(`✅`)) return message.channel.send("this is a test bitch")
                }
            
        used = true;
        setTimeout(() => {
            used = false;
            message.channel.send(`${message.author} You can now use the suggest command again!`)
        }, 1000 * 600);

    }

module.exports.help = {
    name: 'suggest'
}