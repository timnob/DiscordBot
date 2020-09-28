const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    try{
        var text = "**MysticBuilds** \n\n **__Commands__ ** \n !info -Geeft info over de server. \n !ticket -Maakt een ticket voor je aan. ";
        
        message.author.send(text);

        message.reply("Alle commands kan je vinden in je pm!")

    }catch(error){
        message.reply("Er is iets fout gelopen");
    }
    
}
module.exports.help = {
    name: "help"
}