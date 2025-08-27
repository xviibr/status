const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Bangkok', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('950349794952482897')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=8F7Q-4PZCjA') //Must be a youtube video link 
    .setState('𝟓/𝟏𝟎/𝟔𝟓')
    .setName('𝐯𝐱𝐥𝐞𝐧.𝐳')
    
 .setAssetsLargeImage('images-ext-1.discordapp.net/external/scJOH8jG0zOxomBS0uPGrtPK4N4H_WsIzFG2Cb2CGDg/https/media.tenor.com/cQzRWAWrN6kAAAPo/ichigo-hiro.mp4') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝟏𝟎𝟓𝟖 𝐃𝐀𝐘 𝐖𝐈𝐓𝐇 𝐔') //Text when you hover the Large image
   
    .addButton('𝐦𝐞', 'https://linktr.ee/br0510')
  .addButton(`𝐒𝐭𝐞𝐚𝐦`, `https://steamcommunity.com/id/nopeeth/`);
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
