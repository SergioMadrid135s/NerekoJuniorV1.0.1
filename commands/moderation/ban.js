require('discord.js');
module.exports = {
    name: "ban",
    description: "Banear un miembro..Comando de Admin",

    async execute(message, args){

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('No puedes usar eso!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('No tengo los permisos adecuados.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Por favor especifique un usuario');

        if(!member) return message.channel.send('Parece que no puedo encontrar a este usuario. Lo siento por eso :/');
        if(!member.bannable) return message.channel.send('Este usuario no puede ser baneado. Es porque es moderador/admin, o su rol más alto es más alto que el mío');

        if(member.id === message.author.id) return message.channel.send('¡Bruh, no puedes prohibirte!');

        let banReason = args.slice(1).join(" ");

        if(!banReason) banReason = 'No especificada';

        member.ban({ reason: banReason })
        .catch(err => {
            if(err) return message.channel.send('Algo salió mal')
        })
    }
}