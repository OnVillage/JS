module.exports = {
  name: 'vote',
  aliases: ['v'],
  description: 'Votação.',
  async run(message, args, cmd, client, Discord){

  let helpembed = new Discord.MessageEmbed()
  .setColor('#ffe600')
  .setTitle("**Votação para staff:**")
  .setDescription(":heart: -- Anitguinha; \n\n:yellow_heart: -- Rafinha;\n\n:green_heart: -- Pato;\n\n:blue_heart: -- Hzin;\n\n:black_heart: -- Bielzin;\n\n:brown_heart: -- Ganso;\n\n:white_heart: -- zSantzin.")
  .setFooter("Votação em si mesmo será anulado. Votar em apenas uma pessoa, caso contrário o voto também será anulado.");

  message.delete().catch(O_o => {});
  await message.channel.send(helpembed);
}
}