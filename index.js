const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const express = require('express');
const app = express();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

client.on("ready", () => {
  let activities = [
    `_help`,
    `${client.channels.cache.size} canais.`,
    `${client.guilds.cache.size} servidores.`
    ],
  i = 0
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "LISTENING"
    }), 10000);
});
app.listen(process.env.PORT);
client.login(process.env.TOKEN);