const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login('NzUwNjQ0MDE1OTc1NjI4ODMy.X09htw.8z5U8uRjJBuEQo2J8MoNhr1FyR4');