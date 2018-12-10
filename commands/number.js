const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send(Math.floor(Math.random() * 100) + 1)

  }

module.exports.help = {
  name:"number"
}
