require("discord.js");
module.exports = {
  name: "say",
  description: "Mandar mensaje con el bot",
 async execute(message, args){
  if(!message.member.hasPermission('ADMINISTRATOR')) return

    const sayMessage = args.join(" ");
    message.delete().catch(() => {});
    message.channel.send(`${sayMessage}`);
  }
}