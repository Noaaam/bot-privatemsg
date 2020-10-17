const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission pour cela !**").catch(console.error);
    
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Je ne possède pas les droits nécessaires !**").catch(console.error);

    message.channel.send(`**> :warning: Watsup @everyone, thank you for being present on our server, we have decided to give you rewards thanks to invitations !**

   ** ✨ | 20 invitations ➔ 1 nitro (1 month)

    ✨ | 35 invitations ➔ 1 nitro (3 months)

    ✨ | 50 invitations ➔ 1 nitro (1 year)

    💜 | 2 boosts ➔ 1 nitro (3 months)

    💵 | 3€ ➔ 1 nitro (3 months)**
     

    **⚙️ To claim your reward please send me a private message, but only if you have the necessary conditions.**`);
};

module.exports.help = {
    name: "rewards"
}