 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rainbow = ((1 << 24) * Math.random() | 0).toString(16); 

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Member Count`, `
    ✅ Online: ${message.guild.members.filter(m=>m.presence.status == 'online').size}
    🔴 DND: ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
    🌕 Idle: ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
    ⚪ Offline: ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
    📷 Streaming: ${message.guild.members.filter(s => s.presence.status === 'streaming').size}
    👥 Users: ${message.guild.members.filter(member => !member.user.bot).size}
    🤖 Bots: ${message.guild.members.filter(member => member.user.bot).size}`)

    message.channel.send(serverembed)
  }
  
exports.help = {
    name: "members"
};
