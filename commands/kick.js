const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You dont have permission to kick members.");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("You need to mention a member.")
    if(kUser.id === bot.user.id) return message.channel.send("You cant kick bots."); 
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("You need a specific reason.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant kick this member.")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kicked")
    .setColor("#bc0000")
    .addField("Member", kUser)
    .addField("Moderator", message.author)
    .addField("Reason", kReason);

    let logchannel = message.guild.channels.find(`name`, "log");
    if(!logchannel) return message.channel.send("I cant find channel called `log`");

    message.guild.member(kUser).kick(kReason);
    logchannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
