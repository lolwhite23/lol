const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy"
    ]
    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'meme',
    aliases: ['memes']
}
