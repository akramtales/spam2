const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522377801891053578")
setInterval(function() {
channel.send(`Tm_Dz spam spam spam spam spam spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
