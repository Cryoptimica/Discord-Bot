const Discord = require('discord.js'); 
const client = new Discord.Client();

//Prompt for terminal to let user know the bot is online
client.on('ready', () => { 
    console.log('The bot is online!'); 
});

//When a certain message is typed..
client.on('message', message => 
{
//usr is what the user types
var usr = message.content;
//res splits the string into an array with a delimiter of space(in order to handle spaces in the names)
var res = usr.split(" ");
var link = "https://na.op.gg/summoner/userName=";
var name; 
//Case for no spaces:
if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 2)
{
    message.reply(link + res[1])
    var name = res[1];
}
//Case for one space
if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 3)
{
    message.reply(link + res[1] + res[2]);
    name.concat(res[1], res[2]);
}
//two spaces etc
if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 4)
{
    message.reply(link + res[1] + res[2] + res[3]);
}

if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 5)
{
    message.reply(link + res[1] + res[2] + res[3] + res[4]);
}

if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 6)
{
    message.reply(link + res[1] + res[2] + res[3] + res[4] + res[5])
}

if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 7)
{
    message.reply(link + res[1] + res[2] + res[3] + res[4] + res[5] + res[6])
}  

if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 8)
{
   message.reply(link + res[1] + res[2] + res[3] + res[4] + res[5] + res[6] + res[7]) 
}

if((res[0] == "opgg" || res[0] == "op.gg") && res.length == 9)
{
   message.reply(link + res[1] + res[2] + res[3] + res[4] + res[5] + res[6] + res[7] + res[8])  
}

var webshot = require("webshot");

var options = {
streamType: "png",
windowSize: {
    width: 1024,
    height: 786
},
shotSize: {
    width:"all",
    height: "all"
}
};
webshot("https://na.op.gg/summoner/userName=" + name, "image.png", options, () => {
    if(err){
        return console.log(err);
    }

    console.log("Image succesfully created");
});







});

client.login("MzM4MDMzNDYwNDk1MjUzNTE2.DFPhtA.R1SGpXggrcfW9xbmSRMOrdHju4w");