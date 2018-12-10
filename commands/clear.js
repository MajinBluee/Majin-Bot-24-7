const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if(!message.member.hasPermission(8))
if(!message.member.hasPermission(["MANAGE_MESSAGES"]))
if(!message.member.roles.find("name", "mods"))
if(!message.member.roles.find("name", "admins"))
if(!args[0]) return message.channel.send("You need to write how much messages you want me to delete.")
if(args[0] > 100) return message.channel.send("I can only delete 100 messages at a time.")
message.channel.bulkDelete(args[0])
message.channel.send(`Messages deleted: ${args[0]}`).then(msg => {
setTimeout(function() {
msg.delete()
}, 15000)
})
}

module.exports.help = {
    name: "clear"
}
