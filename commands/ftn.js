const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client('7e559f76-5825-4925-a709-6ba0c618a862');

// var user = fortnite.user('Number1Swifty', 'xbl').then(console.log);

module.exports.run = async (bot, message, args) => {
  // await message.delete()
  let username = args[0]
  let platform = args[1] // || 'pc'
  
  if (!username) return message.reply("Please provide a username.")
  
  let data = fortnite.user(username, platform).then(data => {
    let stats = data.stats
    let lifetime = stats.lifetime
    
    let score = lifetime[6]['Score']
    let mplayed = lifetime[7]['Matches Played']
    let wins = lifetime[8]['Wins']
    let winper = lifetime[9]['Win%']
    let kills = lifetime[10]['Kills']
    let kd = lifetime[11]['K/d']
    
    let embed = new Discord.RichEmbed()
    .setTitle("Fortnite Tracker Lifetime Stats")
    .setAuthor(data.username)
    .setColor("RANDOM")
    .addField("Wins", wins, true)
    .addField("Kills", kills, true)
    .addField("Score", score, true)
    .addField("Matches Played", mplayed, true)
    .addField("Win Presentage", winper, true)
    .addField("KD (Kill/Death Ratio)", wins, true)
    
    message.channel.send(embed)
    
  })
  

  }

module.exports.help = {
  name:"ftn"
}
