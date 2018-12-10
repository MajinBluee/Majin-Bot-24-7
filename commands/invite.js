const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()
  .setTitle("Bot Invite Link")
  .setColor("RANDOM")
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=494516177096409088&permissions=8&scope=bot")

  message.channel.send(embed);

  }

module.exports.help = {
  name:"invite"
}
