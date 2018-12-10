const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
  message.delete()
  let serverembed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username} started a vote! React to this message to vote on it.`)
  .setColor("RANDOM")
  .setDescription(args.join(" "))
  const pollTopic = await message.channel.send(serverembed)
  await pollTopic.react(`✅`);
  await pollTopic.react(`⛔`);
  // Create a reaction collector
  const filter = (reaction) => reaction.emoji.name === '✅';
  const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
  collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
  collector.on('end', collected => console.log(`Collected ${collected.size} items`));
};

module.exports.help = {
  name:"poll"
}
