require("discord.js");
module.exports = {
  name: "directo",
  description: "Permiso Admin",
 async execute(message, args){
  if(!message.member.hasPermission('ADMINISTRATOR')) return
     args.join(" ");
     message.delete().catch(() => {});
     message.channel.send(`Estoy en directo gente! Iros uniendo https://www.twitch.tv/nerekoo @everyone`);
  }
}