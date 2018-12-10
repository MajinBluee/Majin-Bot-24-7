const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have Permissions to DM all the server.")
  message.delete()
  const onlineMembers = message.guild.members.filter(member => member.presence.status !== "offline");
  onlineMembers.forEach((member, key) => member.send(args.join(" ")))

}

module.exports.help = {
    name: "dmserver"
}
