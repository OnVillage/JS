module.exports = {
  name: 'help',
  aliases: ['h', 'hp', 'hlp'],
  description: 'Mostra todos os comando disponíveis.',
  async run(message, args, cmd, client, Discord){

  let helpembed = new Discord.MessageEmbed()
  .setColor('#ffe600')
  .setThumbnail('https://ucarecdn.com/7ccac1f3-c7ec-47ea-8737-eb73d86339d7/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/')
  .setTitle("**Comandos:**")
  .setDescription("Prefixo: **_**\n\n**()** -> Opcional\n **<>** -> Obrigatório\n\nComandos disponíveis:\n\n**_say** **<**conteúdo**>**\n**_sugada** **<**@user**>**\n**_largopote** **<**@user**>**\n**_vambora** **<**@user**>**\n**_vote** **<**conteúdo**>**");

  message.delete().catch(O_o => {});
  await message.channel.send(helpembed);
}
}