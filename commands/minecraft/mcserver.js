const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

module.exports = {
    name: 'mcserver',
    description: 'Verifique el estado y los jugadores en línea del servidor. Los datos se actualizan cada 5 minutos',
    args: '<ip address>',
    execute(message, args) {
        //check if there're arguments
        if(!args.length) {
            message.reply('Por favor especifique la dirección IP del servidor');
            return;
        }
        //create new XMLHttpRequest
        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = () => {
            //check that response is complete
            if(xmlHttp.readyState === 4) {
                //create obj from response
                const resp = JSON.parse(xmlHttp.responseText);
                //check that hostname exists
                if(!resp.hostname) {
                    message.channel.send('No se pudo encontrar ningún servidor con ip ' + args[0]);
                    return;
                }
                //create answer message
                let response = resp.hostname;
                if(resp.online) {
                    response += ' está en linea. Jugadores conectados: ';
                    if(resp.players.online) {
                        response += resp.players.online;
                    }
                    else {
                        response += 'none';
                    }
                }
                else {
                    response += ' esta apagado'
                }
                //send answer
                message.channel.send(response);
            }
        }
        //open and send xhr
        xmlHttp.open('GET', 'https://api.mcsrvstat.us/2/' + args[0]);
        xmlHttp.send();
    }
}