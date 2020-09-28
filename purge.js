const discord = require("discord.js");
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, but you do not have the **Manage Messages** permissions! If you think this is an error, contact an owner.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the **Manage Messages** permission in this server.');

    if (!args[0]) return message.channel.send('You must specify a number of messages.');
    if (args[0] < 1) return message.channel.send('Please provide a number greater than 1.');
    if (args[0] > 100) return message.channel.send('Please provide a number less than 100.');
    if (isNaN(args[0])) return message.channel.send('Please provide a corect number.');
    
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**${args[0]}** berichten gaan naar de prullenbak.`).then(message => message.delete(3000));
    }).catch().catch((e) => message.channel.send('Je kan geen berichten van 14 dagen of ouder verwijderen.'));



}

module.exports.help = {
    name: "purge",
    category: "moderation"
}