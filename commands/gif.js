const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  var gifs = new Array("http://i.imgur.com/czx5YDq.gif", "https://i.imgur.com/7kGglyF.gif");
  var random = gifs[Math.floor(Math.random() * gifs.length)];
  
  message.channel.sendMessage({
        "embed": {
                title: 'Gif',
                "image": {
                "url": random,
                }
            }
        });
}

module.exports.help = {
  name: "gif"
}
