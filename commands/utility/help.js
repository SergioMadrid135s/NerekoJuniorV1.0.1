const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Muestra todos los comandos y descripciones",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`Comandos de NerekoJunior`)
      .setThumbnail('https://images-ext-2.discordapp.net/external/nYTDfPFgvtFst8FwYGxvtC1jBJVlBkaFH9YlpIgabNk/%3Fsize%3D1024/https/cdn.discordapp.com/icons/777988362921443368/6409c8b8c634a4167e95902597c315e8.png')
      .setDescription("Lista de Comandos")
      .setURL('https://github.com/SergioMadrid135s')
      .addField(` ------------------------------ Redes Sociales ---------------------------`)
      .addField(`→ instagram`, `Mi perfil de Instagram`, true)
      .addField(`→ twitter`, `Mi perfil de Twitter`, true)
      .addField(`→ twitch`, `Mi perfil de Twitch`, true)
      .addField(`→ youtube`, `Mi canal de Youtube`, true)
      .addField(` ----------------------------- Utilidades Twitch --------------------------`)
      .addField(`→ cofres`, `Mi colección de cofres`)
      .addField(` ------------------------------- Utilidades Bot ------------------------`)
      .addField(`→ ping`, `Comprueba la latencia del bot`)
      .addField(`→ user`, `Saber información de tu perfil discord`)
      .addField(`→ server`, `Saber información del server`)
      .addField(`→ avatar`, `Conseguir tu foto o de otro usuario`)
      .addField(`→ meme`, `Envia un meme aleatorio en ingles`)
      .addField(`→ creador`, `Usuario del creador del bot`)
      .addField(`→ dueña`, `Usuario de dueño del server`)
	    .setFooter("Pedido por" + message.author.tag)
      .setColor("#4900FF");


    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};