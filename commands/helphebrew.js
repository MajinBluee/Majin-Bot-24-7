const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const commands = [
  '**𝐄𝐍𝐆𝐋𝐈𝐒𝐇 𝐄𝐃𝐈𝐓𝐈𝐎𝐍/גרסת אנגלית**',
  '`;help` - אומר לך כל פקודה באנגלית/Tells you what all of the commands does in English',
  '',
  '**קישור הזמנה לבוט**',
  '`;invite` - שולח לך קישור הזמנה של הבוט',
  '',
  '**הנהלה**',
  '`;warn` - מזהיר אנשים (;warn {@Member} {Reason})',
  '`;ban` - מעיף אנשים לתמיד מהשרת (;ban {@Member} {Reason})',
  '`;kick` - מעיף אנשים מהשרת {@Member} {Reason})',
  '`;mute` - משתיק אנשים {@Member} {Reason})',
  '`;report` - מדווח על אנשים למנהלי השרת {@Member} {Reason}',
  '**כיף**',
  '`;wanted` - יוצר פוסטר של מבוקש {@Member}',
  '`;gamble` - אומר לך אם ניצחת או הפסדת',
  '`;joke` - אומר לך בדיחה',
  '`;8ball` - אתה שואל שאלה וזה עונה לך רנדומלי {Question}',
  '`;fart` - איכס, למה שתפליץ כאן?',
  '`;gif` - Gif שולח תמונת',
  '`;meme` - רנדומלי Meme שולח',
  '`;cat` - שולח תמונה רנדומלית של חתול',
  '`;dog` - שולח תמונה רמדומלית של כלב',
  '`;rip` - הורג את מי שאתה רוצה {@Member}',
  '**מוזיקה**',
  '`;playsong` - מנגן שיר {Song Name} {Song Url}',
  '`;stop` - מפסיק את השיר',
  '`;pause` - עושה פאוז לשיר',
  '`;resume` - ממשיך את השיר',
  '`;queue` - מציג את התור של רשימת השירים',
  '`;nowplaying` - אומר לך מה מתנגן עכשיו',
  '**אחר**',
  '`;say` - אומר את מה שאתה אומר לו לאמר {Message}',
  '`;ping` - אומר לך את המהירות של הבוט',
  '`;number` - אומר לך  מספר בין 1 ל- 100',
  '`;clear` - מנקה את הצאט {Number 1 - 100}',
  '`;avatar` - שולח את התמונהSends the avatar of a person {@Member}',
  '`;poll` - מתחיל הצבעה {Question}',
  '`;dmserver` - שולח הודעה לכל השרת {Message}',
  '**מידע**',
  '`;userinfo` - אומר לך מידע על על אנשים {@Member}',
  '`;serverinfo` - אומר לך מידע על השרת',
  '`;channelinfo` - Channel אומר לך מידע על {#Channel Name}' ,
  '`;roleinfo` - אומר לך מידע על רול {@Role Name}',
  '`;developers` - אומר לך מי המפתח של הבוט הזה',
  '`;servers` - אומר לך מה השרתים שהבוט רץ עליהם',
  '`;members` - אומר לך מידע על האנשים בשרת',
  '`;ftn` - Fortnite אומר לך מידע על שחקן {Fortnite Name} {Platform}',
];

const embed = new Discord.RichEmbed()
.setTitle('פקודות')
.setColor("RANDOM")
.setDescription(commands)

message.channel.send(embed)

  }

module.exports.help = {
  name:"helphebrew"
}
