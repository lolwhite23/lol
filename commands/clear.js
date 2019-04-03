const discord = require('discord.js');
const bot = new discord.Client();
const {prefix} = require('../settiings/config.json');
const liveJoin = bot.channels.get("543576078242021376");

module.exports.run = async (bot, message, args) => {
    let clearerrors = new discord.RichEmbed()
    .setDescription("Please specify a valid amount of message to delete. (1-100)")
    .setColor("#ff0000")
    .setTimestamp()

    let clearerror = new discord.RichEmbed()
    .setColor("#ff0000")
    .setDescription("Cannot delete more than 100 messages")
    .setTimestamp()


    let clearerrorp = new discord.RichEmbed()
    .setDescription("You do not have the required permissions.")
    .setColor("#ff0000")
    .setTimestamp()


    let clearchannelembed = new discord.RichEmbed()
        .setAuthor('Purge:', bot.user.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
    .setColor("#d63100")
    .addField("Cleared by:", `${message.author}`)
    .addField("# of messages deleted:", `${args[0]}`)
    .addField("Channel:", message.channel)
    .setTimestamp()


    let clearembed = new discord.RichEmbed()
    .setDescription(`Cleared ${args[0]} message(s).`)
    .setTimestamp()
    

    let clearembedchannel = new discord.RichEmbed()
    .setAuthor("**ERROR**:",message.author.id)
    .setColor("#FF0000")
    .setDescription(`An error occured!`)
    .addField("Clear command error 1:", "Cannot clear more than 100 messages\n **Reason**: API limitations")
    .addField("Author of command", `${message.author.id}`)
    .setTimestamp()



    if(!message.member.hasPermission("MENTION_EVERYONE")) return message.reply(clearerrorp);
    if(args[1] += 100)
    {
      message.channel.send(clearerror);
      
      let channel = bot.channels.get('555470767098167341');
      if (channel) setInterval(() => {channel.send(clearembedchannel);}, 10 * 60 * 1000);
      return;

    }

    if(!args[0]) return message.channel.send(clearerrors);
    message.channel.bulkDelete(1)
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(clearembed).then(msg => msg.delete(5000));

      
      let clearchannelsend = message.guild.channels.find(`name`, "mod-log");
      if(!clearchannelsend) return message.channel.send("Couldn't find mod-log channel.");
      clearchannelsend.send(clearchannelembed);
    });
  }

module.exports.help = {
    name: 'clear',
    aliases: []
};
