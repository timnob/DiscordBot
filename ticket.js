const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const categoryId = "542053374263033890";
    
    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;

    // Als ticket al gemaakt is
    var bool = false;

    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {

        // Als ticket is gemaakt, zend bericht.
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket aangemaakt");

            bool = true;

        }

    });

    // Als ticket return code.
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setDescription("Jouw ticket wordt aangemaakt.")
        .setColor("#9805b2")
        .setFooter(" © Mystic Builds", "https://media.discordapp.net/attachments/336195545469288452/503976320070451211/image0.jpg?width=465&height=465");

    message.channel.send(embedCreateTicket);
    
        // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal

        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.

            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setColor("#9805b2")
                .setDescription("Zet hier je vraag of bestelling, dan helpt een medewerker jou zo spoedig mogelijk.")
                .setFooter(" © Mystic Builds", "https://media.discordapp.net/attachments/336195545469288452/503976320070451211/image0.jpg?width=465&height=465");
                
                

            settedParent.send(embedParent);

        }).catch(err => {
            message.channel.send("Er is iets fout gegaan, probeer het later opnieuw.");
        });

    }).catch(err => {
        message.channel.send("Er is iets fout gegaan, probeer het later opnieuw.");
    });

}

module.exports.help = {
    name: "ticket",
    description: "ticket aanmaken"
}