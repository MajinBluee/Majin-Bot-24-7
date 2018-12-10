const Discord = require('discord.js');

module.exports.run = async (bot, message, args ,ops) =>{

    let string = '';
    bot.guilds.forEach(guild => {
    string += `${guild.name}\n`;
})

const embed = new Discord.RichEmbed()
        .addField("Servers", string)
message.channel.send(embed)              
}

module.exports.help = {
  name:"servers"
}
