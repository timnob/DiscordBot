const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    

        var botEmbed = new discord.RichEmbed()
            .setDescription("**Bot info**")
            .setColor("#9805b2")
            .addField("Bot naam:",bot.user.username)
            .addField("Total Members:", message.guild.memberCount)
            .addField("Aantal Bots:", message.guild.botCount);

        return message.channel.send(botEmbed);
    
    
    
    
}

module.exports.help = {
    name: "info",
    description: "geeft de beschrijving van de server"
}