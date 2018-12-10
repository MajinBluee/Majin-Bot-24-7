const Discord = require("discord.js");
const {config, prefix, devs} = require("../config.json")

exports.run = async (bot, message, args) => {
    message.channel.send(`
**__Developers:__**
`+"MajinBluee"+`
`)
}

module.exports.help = {
    name: "developers"
  }
