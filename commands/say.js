module.exports = {
  name: 'say',
  aliases: ['s', 'falar', 'fale'],
  description: 'Faz o bot mandar a mensagem escolhida.',
  async run(message, args, cmd, client, Discord){
  
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }
}