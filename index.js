const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

client.login("NzY0OTEzMTU0NTc2NDgyMzA0.X4NK4w.JecAKe9FIdsl5D6Lmtx2yTrMKKo");

client.commands = new Discord.Collection();

client.on("ready", () => {
    console.log(`Vous êtes connecté en tant que ${client.user.tag} !`);
    client.user.setActivity("✨ | Nitro Rewards");
});

/*
client.on("guildMemberAdd", user =>{
   user.addRole("721647834012581919")   
});

*/

client.on('message', msg => {

  if(msg.channel.type === 'dm'){

      const dm_channel = client.channels.cache.get("764941800041218049");

      if(msg.content.length < 1024){
 
      const dm_embed = new Discord.MessageEmbed()

      .setColor('RANDOM')
      .setAuthor(`Provenance du message : ${msg.author.tag}`)
      .addField(`\u200B`, `\u200B`, false)
      .addField(`Contenu du message :`, `${msg.content}`, true)
      .addField(`\u200B`, `\u200B`, false)
      .setTimestamp()

      dm_channel.send(dm_embed);

      }else {

          const dm_embed_2 = new Discord.MessageEmbed()

          .setColor('RANDOM')
          .setAuthor(`Provenance du message : ${msg.author.tag}`)
          .addField(`\u200B`, `\u200B`, false)
          .addField(`Contenu du message :`, `Le message envoyé par l'utilisateur dépasse les 1024 caractères.`, true)
          .addField(`\u200B`, `\u200B`, false)
          .setTimestamp()
  
          dm_channel.send(dm_embed_2);

      }
         
  }else {

      return;

  }
}); 


fs.readdir("./Administration/", (error, f) =>{
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commandes d'administration trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Administration/${f}`);
        console.log(`${f} à été chargée avec succès !`);

    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargements...`);

    f.forEach((f) =>{
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));    
    });
});
