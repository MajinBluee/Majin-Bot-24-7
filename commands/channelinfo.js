const Discord = require("discord.js");
const dateformat = require("dateformat");
let date = require('date-and-time');

module.exports.run = async (bot, message, args) => {

      const error = "You need to mention a channel.";
  let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.guild.channels.find("name", args[0]);
  if (!channel) {
message.channel.send(error)
    }

    const millis = new Date().getTime() - channel.createdAt
    const noww = new Date();
    dateformat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;

const millis2 = channel.createdAt
let now = channel.createdAt;
date.format(now, 'YYYY/MM/DD');
let created = date.format(now, 'YYYY/MM/DD');

    if (channel.type === 'text') {
        channel.type = 'Text channel';
    }
    if (channel.type === 'voice') {
        channel.type = 'Voice channel';
    } 
    if (channel.type === 'category') {
        channel.type = 'Category';
    }

const channelcreated = (channel.createdAt.getDate() + 1) + '/' + (channel.createdAt.getMonth() + 1) + '/' + channel.createdAt.getFullYear() + ' | ' + channel.createdAt.getHours() + ':' + channel.createdAt.getMinutes() + ':' + channel.createdAt.getSeconds();
      const channelembed = new Discord.RichEmbed()
    .setTitle("Channel info")
    .addField("Channel name",channel.name,true)
    .addField("Channel ID",channel.id,true)
    .addField("Channel mention",channel,true)
    .addField("Channel type",channel.type,true)
      .setColor("RANDOM")
      message.channel.send(channelembed)

  }

module.exports.help = {
  name:"channelinfo"
}
