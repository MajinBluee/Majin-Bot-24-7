const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
//if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have Permissions")
message.delete()
let text = args.join(" ")
.replace('{user}', message.author)
.replace('{user.name}', message.author.username)
.replace('{user.id}', message.author.id)
.replace('{user.discrime}', '#'+message.author.discriminator)
.replace('{server.name}', message.guild.name)
.replace('{server.id}', message.guild.id)
.replace('{channel}', message.channel.toString())
.replace('{channel.name}', message.channel.name)
.replace('{channel.id}', message.channel.id)

//const embed = new Discord.RichEmbed()
//.setDescription(text)
//.setColor(`RANDOM`)
message.channel.send(text)
}

module.exports.help = {
    name: "say"
}
