client.on('message', message => {
    if(message.content.startsWith("/amuseu")) {
const amusEu = new Discord.MessageEmbed()
1);
	.setColor('#FFFF00')
	.setTitle(“Nouvelle Partie D’among Us“)
	.setURL(“https://store.steampowered.com/app/945360/Among_Us/“)

let argsss = message.content.split(" ").slice(

	.setAuthor(message.author, message.author.displayavatarurl)
	.setThumbnail('https://cdn.discordapp.com/attachments/780022857328885782/798254674738282586/image0.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '🌎 | Région', value: 'Europe', inline: true },
		{ name: '👑 | Créateur', value: 'Le créateur est', message.author, inline: true },
	)
	.addField('❌ | Code', ˋLe code est ${argsss[0]}`, true)
	.setImage('https://cdn.discordapp.com/attachments/780022857328885782/798254680064262184/image0.jpg')
	.setTimestamp()
	.setFooter('Cette game à était créer le ', 'https://cdn.discordapp.com/attachments/780022857328885782/798254674738282586/image0.png');

client.channels.get('769462979854073887').send("<@&755073926127812608>", amusEu);

client.on('message', message => {
    if(message.content.startsWith("/amusan
")) {
const amusEu = new Discord.MessageEmbed()
1);
	.setColor('#FFFF00')
	.setTitle(“Nouvelle Partie D’among Us“)
	.setURL(“https://store.steampowered.com/app/945360/Among_Us/“)

let argssss = message.content.split(" ").slice(

	.setAuthor(message.author, message.author.displayavatarurl)
	.setThumbnail('https://cdn.discordapp.com/attachments/780022857328885782/798254674738282586/image0.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '🌎 | Région', value: 'North America', inline: true },
		{ name: '👑 | Créateur', value: 'Le créateur est', message.author, inline: true },
	)
	.addField('❌ | Code', ˋLe code est ${argssss[0]}`, true)
	.setImage('https://cdn.discordapp.com/attachments/780022857328885782/798254680064262184/image0.jpg')
	.setTimestamp()
	.setFooter('Cette game à était créer le ', 'https://cdn.discordapp.com/attachments/780022857328885782/798254674738282586/image0.png');

client.channels.get('769462979854073887').send("<@&755073926127812608>", amusEu);


Bot.on("message", async message => {
  if(command === "/mute"){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ | Vous n'avez pas les droits pour muter un utilisateur !");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("❓| Merci d'entrer un utilisateur !");
    let role = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
    if(!role){
      try {
        role = await message.guild.createRole({
          name: "Utilisateurs mutés",
          color:"#000000",
          permissions:[]
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');

    await(toMute.addRole(role));
    message.channel.send("Je l'ai muté !");

    return;
  }

});


bot.on("guildMemberAdd", async member => {      
let user = member;     
const canvas = Canvas.createCanvas(700, 250);     
const ctx = canvas.getContext(`2d`);      const background = await 
Canvas.loadImage(`./wallpaper.jpg`);     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);      ctx.font = `40px Calvert MT Std`;     ctx.fillStyle = `#ffffff`;      ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);     ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)     ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)      ctx.beginPath();     ctx.arc(125, 125, 100, 0, Math.PI * 2, true);     ctx.closePath();     ctx.clip();     const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))     ctx.drawImage(avatar, 25, 25, 200, 200);      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), './Welcome.jpg');       bot.channels.cache.get('781609852748169256').send(attachment); })
