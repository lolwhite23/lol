const randomPuppy = require('random-puppy');
const snekfetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "mildlyinfuriating"
    ]
    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'mi.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'mi'
}
