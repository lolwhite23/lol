const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    var user = message.mentions.members.first(); 
    var roleName = args.splice(2).join(' ');
    var create = args.splice(1).join(' ');
    var create2 = args.splice(1).join(' ');
    var role = message.guild.roles.find('name', roleName);
    
    let error1 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("Please specify a role name!")
    .setTimestamp()
    let error2 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("Please mention a valid user!")
    .setTimestamp()
    let error3 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("No role with that name exists! This command is case sensitive.")
    .setTimestamp()
    let error4 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("This user already has this role!")
    .setTimestamp()
    let error5 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("Cannot add this role!")
    let error6 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("User does not have this role!")
    .setTimestamp()
    let error7 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("Cannot remove this role!")
    .setTimestamp()
    let error8 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("You do not have permisson!")
    .setTimestamp()
    let error9 = new Discord.RichEmbed()
    .setAuthor("ERROR", bot.user.displayAvatarURL)
    .setColor("#DD1919")
    .addField("Please specify a role name!")
    .setTimestamp()
    let ra = new Discord.RichEmbed()
    .setAuthor("Role added.", bot.user.displayAvatarURL)
    .setColor("#36393e")
    .addField(`The **${roleName}** role was added to **${user}**`)
    .setTimestamp()
    let rr = new Discord.RichEmbed()
    .setAuthor("Role removed.", bot.user.displayAvatarURL)
    .setColor("#36393e")
    .addField(`The **${roleName}** role was removed from **${user}**`)
    .setTimestamp()
    let rc = new Discord.RichEmbed()
    .setColor("#36393e")
    .addField(`<:tickgreen:536967144248836113> Created role: **${roleName}**`)
    .setTimestamp()
    let rca = new Discord.RichEmbed()
    .setColor("#36393e")
    .addField(`<:tickgreen:536967144248836113> Created role: **${roleName}**`)
    .setTimestamp()




    switch (args[0]) {
        case 'add':
             if (message.member.hasPermission('ADMINISTRATOR')) {
            if (!user) return message.reply(error2); 
            if (!roleName) return message.reply(error1); 
            if (!message.guild.roles.find('name', roleName)) return message.reply(error3);
            if (user.roles.exists('name', roleName)) return message.reply(error4); 


            user.addRole(role).then(() => message.reply(ra)).catch((err) => message.reply(error5).then(() => console.log(err)));
             }
            break;
        case 'remove':
            if (message.member.hasPermission('ADMINISTRATOR')) {
            if (!user) return message.reply(error2);
            if (!roleName) return message.reply(error1);
            

            if (!message.guild.roles.find('name', roleName)) return message.reply(error3);

            if (!user.roles.find('name', roleName)) return message.reply(error6);

            user.removeRole(role).then(() => message.reply(rr)).catch((err) => message.reply(error7).then(() => console.log(err)));
            }  
            break;
        case 'create':
        if(!message.member.hasPermisson("ADMINISTRATOR")) return message.channel.send(error8)
            if(!message.content.includes("-a")){
                message.guild.createRole({
                    name: `${create}`,
                    color: "RED",
                    permissions: "ADMINISTRATOR"
                })
                message.channel.send(rca)
                return;
            }
            if(!create) return message.channel.send(error9)
            message.guild.createRole({
                name: `${create}`,
                color: "BLUE"
              })
               
            message.channel.send(rc)
            break;
    }
}
    module.exports.help = {
    name: 'role'
    }
