const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
        let bembederroru = new discord.RichEmbed()
        .setDescription("Cannot find that user.")
        .setColor("#ff0000")
        let bembederrorp = new discord.RichEmbed()
        .setDescription("You don't have the correct permissions.")
        .setColor("#ff0000")
        let bembederrors = new discord.RichEmbed()
        .setDescription("That person cannot be banned!")
        .setColor("#ff0000")
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(bembederroru);
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(bembederrorp);
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(bembederrors);
        let banEmbed = new discord.RichEmbed()
        .setTitle("Ban")
        .setColor("#bc0000")
        .addField("Banned User:", `${bUser} with ID ${bUser.id}`, true)
        .addField("Banned By:", `<@${message.author.id}> with ID ${message.author.id}`, true)
        .addField("Banned In:", message.channel, true)
        .addField("Time:", message.createdAt, true)
        .addField("Reason:", bReason, true)
        .setTimestamp()
    
    
        message.guild.member(bUser).ban(bReason);
        message.channel.send(`You banned ${bUser} for **${bReason}**`).then(msg => msg.delete(5000));
    
    
        return;
       };

module.exports.help = {
        name: 'ban'
    };
