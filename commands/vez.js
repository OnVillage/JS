module.exports = {
  name: 'vez',
  aliases: ['v'],
  description: 'Faz o bot mandar a mensagem escolhida.',
  async run(message, args, cmd, client, Discord){
  
    message.delete().catch(O_o => {});
    message.channel.send(`acionado ${count}`);
  }
}