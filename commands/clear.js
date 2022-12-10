module.exports = {
  name: 'clear',
  aliases: ['c'],
  description: 'Limpa as mensagens do chat.',
  async run(message, args, cmd, client, Discord){

    if (!args[0]) return message.reply("Envie o total de mensagens que deseja apagar!");
 
    if(isNaN(args[0])) return message.reply("Mande um mundo real!");
 
    if(args[0] > 100) return message.reply("Você não pode apagar mais de 100 mensagens!");
    if(args[0] < 1) return message.reply("Você deve apagar pelo menos 1 mensagem!");

    await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   