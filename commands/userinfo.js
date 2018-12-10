const Discord = require('discord.js');
const dateformat = require("dateformat")
const moment = require("moment");

exports.run = async (client, message, args) => {

	let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);

    } else {
        user = message.author;
    }
    if (user.presence.status === 'online') {
        user.presence.status = '<:online:494501693073915914>';
    } else if (user.presence.status === 'dnd') {
        user.presence.status = '<:dnd:494501693757849610>';
    } else if (user.presence.status === 'idle') {
        user.presence.status = '<:idle:494501693023584266>';
    } else if (user.presence.status === 'offline') {
        user.presence.status = '<:offline:494501692713336834>';
    } 

if (args == '') {
var z = message.author
} else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.bot) {
var type = '**Bot**';
}else {
var type = '**Member**';
}
    const member = message.guild.member(user);

    const joineddiscord = (user.createdAt.getDate() + 1) + '/' + (user.createdAt.getMonth() + 1) + '/' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    const joinedserver = (member.joinedAt.getDate() + 1) + '/' + (member.joinedAt.getMonth() + 1) + '/' + member.joinedAt.getFullYear() + ' | ' + member.joinedAt.getHours() + ':' + member.joinedAt.getMinutes() + ':' + member.joinedAt.getSeconds();
    const embed = new Discord.RichEmbed()
		.setColor(`RANDOM`)
		.setThumbnail(user.avatarURL)
		.setTitle(`User Information`, true)
    .addField("Username", user.tag, true)
    .addField("user ID", user.id, true)
    .addField("User Nickname", `${member.nickname !== null ? member.nickname : 'none'}`, true)
    .addField("User Created", joineddiscord, true)
    .addField("User Joined", joinedserver, true)
    .addField("Account Type", type, true)
    .addField("Status", user.presence.status, true)
    .addField("Game", user.presence.game ? user.presence.game.name : 'Not currently Playing', true)
    .addField("Roles assigned to this user", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" ") || "No roles found"}`, true)
     message.channel.send(embed)
    }

module.exports.help = {
  name: "userinfo"
}
