const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const categoryId = "542053374263033890";


    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setColor("#9805b2")
        .setDescription("Je ticket is gemarkeerd als **compleet**. Wil je een nieuwe maken doe dan !ticket")
        .setFooter("Ticket gesloten");


}

module.exports.help = {
    name: "close",
    description: "ticket sluiten"
}