const Discord = require('discord.js'),
  	  db = require('quick.db');

exports.run = async (bot, message, args) => {
  let entry = args.join(' ');

  
  const status = new db.table('AFKs');

  
  let afk = await status.fetch(message.author.id);
  let afkname = message.author.tag

  
  const embed = new Discord.RichEmbed()
    .setColor("#36393e")

  if (!afk) { 
    embed.setDescription('You are now AFK.'); 
    
    status.set(message.author.id, args.join(' ') || `Sorry, ${message.author.username} is AFK.`);
  } else {
    embed.setDescription('You are no longer AFK.'); 
    
    status.delete(message.author.id);
  }

  await db.push('afkreason', {
    entry: entry,
    name: afkname
  });

  
  message.channel.send(embed);

}
module.exports.help = {
  name: 'afk'
}