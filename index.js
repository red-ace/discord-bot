const Discord = require("discord.js");
const { send } = require("process");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrvié");
    member.guild.channels.cache.find(channel => channel.id === "808433426985386044").send(`${member} bienvenue parmis les Ghosts ! `);
    member.roles.add("779287611675639818").then(mbr => {
        console.log("Rôle attribué avec succès !")
    }).catch(() => {
        console.log("Le rôle n'a pas pu être attribué");
    });
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "808433426985386044").send(`${member} tu as servi ton pays avec honneur, repose en paix Ghost. `);
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    //!ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }
    
    if(message.content == prefix + "stat"){
        message.channel.send("**" + message.author.username + "** qui a pour identifiant : __ " + message.author.id + "__ a posté un message");
    }
});


Client.login("ODA3Njc5MjM2MjIzNjY0MTI4.YB7f5w.MuxGxwIVFPLfrdWCNHknbvym-LM");