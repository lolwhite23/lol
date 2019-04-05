const discord = require('discord.js');
const message = require('./handlers/message');
const utils = require('./global/utils');
const bot = new discord.Client();
const client = new discord.Client();
const fs = require("fs");
const ms = require("ms");
const botconfig = require('./settiings/config.json')
const db = require('quick.db');

require('./global/functions')(bot, utils, botconfig);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
message.message(bot, utils, botconfig, discord);
 





bot.on('ready', function() {

  console.log(`${bot.user.username} is online!`)
  setInterval(async () => {
const statuslist = [
  'IP: Coming soon',
  `>help | v1.2`,
  `Website: Coming soon`
];
const random = Math.floor(Math.random() * statuslist.length);

try {
  await bot.user.setPresence({
    game: {
      name: `${statuslist[random]}`,
      type: "WATCHING"
    },
    status: "online"
  });
} catch (error) {
  console.error(error);
}
}, 10000);
});

bot.on('guildMemberAdd', member => {

  member.guild.channels.get('562959217745723402').setName(`Total Humans: ${member.guild.members.filter(member => !member.user.bot).size}`)
  member.guild.channels.get('562959925207105557').setName(`Total Members: ${member.guild.memberCount}`)
  member.guild.channels.get('562959381533032450').setName(`Total Bots: ${member.guild.members.filter(member => member.user.bot).size}`)
 
 let role = member.guild.roles.find("name", "Members");
 member.addRole(role).catch(console.error);

  if(member.bot) return;

  let welcome = new discord.RichEmbed()
  .setAuthor('Welcome!', bot.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .addField(`╋━━━━━━◥◣◆◢◤━━━━━━╋`, '_ _')
  .addField(`Welcome @${member.user.tag} to ${member.guild.name}!`, '_ _')
  .addField(' » Store : Coming Soon!', '_ _')
  .addField(" » Server IP : Coming Soon!", '_ _')
  .addField(' » Website : Coming Soon!', '_ _')
  .addField(`╋━━━━━━◥◣◆◢◤━━━━━━╋`, '_ _')
  .addField("Total Human Members:", `${member.guild.members.filter(member => !member.user.bot).size}`)
  .setColor("#2CDD19")
  .setFooter("Zorah | Logs")
  .setTimestamp()
 let welcomeChannel = member.guild.channels.find('id', '562439350420373515');
  welcomeChannel.send(welcome)

  let logChannelw = member.guild.channels.find('id', '562800536303304734');

  let logEmbedw = new discord.RichEmbed()
  .setAuthor("Member joined", bot.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
    .addField(member.user.username + " Has joined the server.", '_ _')
    .addField(`ID: ${member.user.id}`, '_ _')
    .addField(`Tag: #${member.user.discriminator}`, '_ _')
    .addField("Total members:", `${member.guild.memberCount}`)
    .addField("Total Humans:", `${member.guild.members.filter(member => !member.user.bot).size}`)
  .setFooter("Zorah | Logs")
  .setColor("#2CDD19")
  .setTimestamp()
  logChannelw.send(logEmbedw);


  })

  bot.on('guildMemberRemove', member => {
  member.guild.channels.get('562959217745723402').setName(`Total Humans: ${member.guild.members.filter(member => !member.user.bot).size}`)
  member.guild.channels.get('562959925207105557').setName(`Total Members: ${member.guild.memberCount}`)
  member.guild.channels.get('562959381533032450').setName(`Total Bots: ${member.guild.members.filter(member => member.user.bot).size}`)
    
      let leave = new discord.RichEmbed()
  .setAuthor('Goodbye!', bot.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .addField(`${member.user.tag} has left the server, we will miss you!`, '_ _')
  .addField("Total members:", `${member.guild.memberCount}`)
  .setColor("#DD1919")
  .setFooter("Zorah | Logs")
  .setTimestamp()
    
    let leaveChannel = member.guild.channels.find('id', '562439350420373515');
          
    leaveChannel.send(leave);
    
    
  let logChannel = member.guild.channels.find('id', '562800536303304734');

    let logEmbed2 = new discord.RichEmbed()
    .setAuthor("Member left", bot.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
      .addField(member.user.username + " Has left the server.", '_ _')
      .addField(`ID: ${member.user.id}`, '_ _')
      .addField(`Tag: #${member.user.discriminator}`, '_ _')
      .addField("Total members:", `${member.guild.members.filter(member => !member.user.bot).size}`)
    .setFooter("Zorah | Logs")
    .setColor("#DD1919")
    .setTimestamp()
    logChannel.send(logEmbed2);
  })

let y = process.openStdin()
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  bot.channels.get("558116244822163487").send(x.join(" "));
})

bot.on('message', async message => {

  // parseTime fu

let status = new db.table('AFKs');

// Check if author is AFK
let authorStatus = await status.fetch(message.author.id);

let entries = await db.fetch('afkreason');
let name = await db.fetch('afkreason')


if (entries instanceof Array) entries = entries.slice(-1);


if (authorStatus) { // Run if they are AFK

  const afkembed = new discord.RichEmbed()
    .setColor("#36393e")
    .setDescription(`${message.author.username} is no longer AFK.`)
  
    
  message.channel.send(afkembed).then(msg => msg.delete(5000));
  
  status.delete(message.author.id);

}

let mentioned = message.mentions.members.first(); 
if (mentioned) { 

  
  let statusw = await status.fetch(mentioned.id);
  let changelog = '';
  for (var i in entries.reverse()) {
    changelog += `**${entries[i].entry}**\n`
  }
  let changelog2 = '';
  for (var i in entries.reverse()) {
    changelog2 += `${entries[i].name}\n`
  }
  if (statusw) { 

    message.delete();
    const embed = new discord.RichEmbed()
      .setColor("#36393e")
      .setAuthor(`${changelog2} is AFK!`, bot.user.displayAvatarURL)
      .addField(`Reason: ${changelog}`, '_ _')

    
    message.channel.send(embed);

  }


}

});

bot.login('NTUxOTIxMTI0NTQ4ODA0NjA4.XKPycg.J7X3_pdPWcaFioQHpMZDSLgUv0I')
