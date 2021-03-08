module.exports={
    name:'ping',
    description: "Comprueba el ping del bot",
    execute(message) {
        message.channel.send(`🏓 | Latencia es: **${Date.now() - message.createdTimestamp}ms.**`);
    },
};