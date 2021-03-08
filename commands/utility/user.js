const { MessageEmbed } = require("discord.js");


module.exports={
    name:'user',
    description: "Saber información de tu perfil discord.",
    execute(message) {
        let sicon = message.guild.iconURL;
        let serverEmbed = new MessageEmbed()
            .setDescription("Información de tu perfil")
            .setColor("#ff0000")
            .setThumbnail(sicon)
            .addField("Tu nombre:", message.author.username)
			.addField("Tu ID:", message.author.id)

        const messagePromise = message.channel.send(serverEmbed);
    },
};
