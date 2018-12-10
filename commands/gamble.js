const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var areyoulucky = new Array("You won!","You lost!");
var random = areyoulucky[Math.floor(Math.random() * areyoulucky.length)];
message.channel.send(random)

  }

module.exports.help = {
  name:"gamble"
}
