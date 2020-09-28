const discord = require("discord.js");
const botConfig = require("./botconfig.json");
//command handler
const fs = require("fs");
const client = new discord.Client();
const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {
    
    if(err) console.log(err);
    
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    
    if(jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }
    
    jsFiles.forEach((f, i) => {
        
        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);
        
        bot.commands.set(fileGet.help.name, fileGet);
        
        
    })
    
    
    
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is ready to rumble!`);

    bot.user.setActivity("MysticBuilds | !help", { type: "PLAYING" });
});

bot.on("guildMemberAdd", member => {
    
    var role = member.guild.roles.find("name" , "🧙‍ | Member" );
    
    if(!role) return;
    
    member.addRole(role);
    
    
});


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);
    
    
    var commands = bot.commands.get(command.slice(prefix.length));
    
    if(commands) commands.run(bot, message, arguments);
    


});

bot.login(botConfig.token);