module.exports = (Discord, client, message) => {
  const prefix = '_';
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

  try{
  if(command) command.run(message, args, cmd, client, Discord);
  } catch (err) {
    message.reply('Houve um erro ao executar o comando.');
    console.log(err);
  }
}