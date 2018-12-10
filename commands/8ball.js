const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var answers = new Array("Of course!","Why are you asking?","No","I dont care!","Maybe","Hard question..","I dont know");
var random = answers[Math.floor(Math.random() * answers.length)];

const text = [
  "Q. " + args.join(" "),
  "A. " + random
];

let Embed = new Discord.RichEmbed()
.setTitle("8Ball")
.setDescription(text)
.setColor("RANDOM")
message.channel.send(Embed);

  }

module.exports.help = {
  name:"8ball"
}
