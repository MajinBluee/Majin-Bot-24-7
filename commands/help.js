const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const commands = [
  '**HEBREW EDITION/גרסת עברית**',
  '`;helphebrew` - Tells you what all of the commands does in Hebrew/אומר לך מה עושה כל פקודה בעברית',
  '',
  '**𝐁𝐎𝐓 𝐈𝐍𝐕𝐈𝐓𝐄 𝐋𝐈𝐍𝐊**',
  '`;invite` - Sends you an invite link to the bot',
  '',
  '**𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓**',
  '`;warn` - Warnes people (;warn {@Member} {Reason})',
  '`;ban` - Bans people (;ban {@Member} {Reason})',
  '`;kick` - Kicks people {@Member} {Reason})',
  '`;mute` - Mutes people {@Member} {Reason})',
  '`;report` - Reports people to the owners {@Member} {Reason}',
  '**𝐅𝐔𝐍**',
  '`;wanted` - Creats a wanted poster {@Member}',
  '`;gamble` - Tells you if you won or lost',
  '`;joke` - Tells you a joke',
  '`;8ball` - You ask a question and it answers it randomly {Question}',
  '`;fart` - Ew, Why would you fart here?',
  '`;gif` - Sends a Gif',
  '`;meme` - Sends a random meme',
  '`;cat` - Sends a random picture of a cat',
  '`;dog` - Sends a random picture of a dog',
  '`;rip` - Kills someone {@Member}',
  '**𝐌𝐔𝐒𝐈𝐂**',
  '`;playsong` - Plays a song if you are in voice chat {Song Name} {Song Url}',
  '`;stop` - Stops the music',
  '`;pause` - Pauses the music',
  '`;resume` - Resumes the music',
  '`;queue` - Shows the queue list of the songs',
  '`;nowplaying` - Tells you what is currently playing',
  '**𝐎𝐓𝐇𝐄𝐑**',
  '`;say` - Says what you make it to say {Message}',
  '`;ping` - Tells you the speed of the bot',
  '`;number` - Tells you a number between 1 to 100',
  '`;clear` - Clears the chat {Number 1 - 100}',
  '`;avatar` - Sends the avatar of a person {@Member}',
  '`;poll` - Starts a poll {Question}',
  '`;dmserver` - Sends a DM to all of the server {Message}',
  '**𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍**',
  '`;userinfo` - Tells you information about people {@Member}',
  '`;serverinfo` - Tells you information about the server',
  '`;channelinfo` - Tells you information about a channel',
  '`;roleinfo` - Tells you information about a role {@Role Name}',
  '`;developers` - Tells you who is the developer of this bot',
  '`;servers` - Tells you the servers the bot runs on',
  '`;members` - Tells you information about the people in the server',
  '`;ftn` - Tells you information about a Fortnite player {Fortnite Name} {Platform}',
];

const embed = new Discord.RichEmbed()
.setTitle('Commands')
.setColor("RANDOM")
.setDescription(commands)

message.channel.send(embed)

  }

module.exports.help = {
  name:"help"
}
