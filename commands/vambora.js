module.exports = {
  name: 'vambora',
  aliases: ['bora', 'bo'],
  description: 'Meme.',
  async run(message, args, cmd, client, Discord){

  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
  return message.reply('Mencione um usuário válido.');
}

  let embed = new Discord.MessageEmbed()
  .setColor('#ffe600')
  .setImage('https://media.giphy.com/media/u2Oj4FLWzwLRso66B0/giphy.gif')
  .setDescription(`${user} **Vam boraa!**`);

  await message.channel.send(embed);
}
}