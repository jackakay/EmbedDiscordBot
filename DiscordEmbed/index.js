const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    const args = message.content.slice(config.prefix.length).trim().split(" ");

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            return message.channel.send('Pong.');
        case 'embed':
            if(!args.length) {
                return message.channel.send("You didnt provide any arguments");
            }
            else {
                let title = args[0];
                let color = args[1];
                if (color === "null") {
                    color = "#e32228";
                }
                let description = args.slice(2).join(" ");
                const embed = new Discord.MessageEmbed().setColor(color).setTitle(title).setDescription(description);
                return message.channel.send(embed);
            }
        case 'help':
            const helpEmbed = new Discord.MessageEmbed().setColor("#e32228").setTitle("Help!").setDescription("Make your embed with this format: title, colour hex code or type null for default, the description. Do !embed to get started!");
            return message.channel.send(helpEmbed);
    }
});

client.login(config.token);