const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      const sayMessage = args.join(" ");
      if(!sayMessage) return message.channel.send("Please say something!")
      message.delete();
      let embed = new Discord.RichEmbed()
      .setDescription(sayMessage)
      message.channel.send(embed)
}

module.exports.help = {
  name: "say"
}
