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
    
 .setAssetsLargeImage('media.discordapp.net/attachments/1389998306998096114/1394659081100333208/image.png?ex=68b247bc&is=68b0f63c&hm=9f720e57f625a5148886e6db57d8a6b772f3006f873d75d0ce2ad28d84e2895c&=&format=webp&quality=lossless&width=688&height=381') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝟏𝟎𝟓𝟖 𝐃𝐀𝐘 𝐖𝐈𝐓𝐇 𝐔') //Text when you hover the Large image
   
    .addButton('𝐦𝐞', 'https://linktr.ee/br0510')
  .addButton(`𝐒𝐭𝐞𝐚𝐦`, `https://steamcommunity.com/id/nopeeth/`);
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
