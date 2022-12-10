module.exports = {
  name: 'sugada',
  aliases: ['sug', 'sugs', 'suga'],
  description: 'Meme.',
async run(message, args, cmd, client, Discord){

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Mencione um usuário válido.');
}

message.channel.send(`${message.author} mandou **${user}** dar uma sugada.`);

}
}