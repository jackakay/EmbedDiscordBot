
const Discord = require('discord.js');


const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});




client.on('message', message => {

const prefix = "!";
const args = message.content.slice(prefix.length).trim().split(" ");

if (!message.content.startsWith(prefix) || message.author.bot) return;
const command = args.shift().toLowerCase();

	if (command === 'ping') {
       
        message.channel.send('Pong.');
    } else if(command === "embed"){
        if(!args.length){
            return message.channel.send("You didnt provide any arguments");
        } else {
            var title = args[0];
           
            var colour = args[1];
            if(colour === "null"){
                colour = "#e32228";
            }
            let description = args.slice(2).join(" ");
            const embed = new Discord.MessageEmbed()
        .setColor(colour)
        .setTitle(title)
        .setDescription(description);
    message.channel.send(embed);
        }
        
    } else if(command === "help"){
        const helpEmbed = new Discord.MessageEmbed().setColor("#e32228").setTitle("Help!").setDescription("Make your embed with this format: title, colour hex code or type null for default, the description. Do !embed to get started!");
       message.channel.send(helpEmbed);
    }

    
});

client.login('ODIyNTY0NzQ3NjA1ODM1Nzk3.YFUHHg.ZBMLCNlq6vLrPZii6sTFMCMlIp8');
