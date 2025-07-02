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
    
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1373190165274558616/1389995739534327838/0e1f8367d81e6f161d198a0b5011a62f.gif?ex=6866a5e9&is=68655469&hm=1e3dc491274ac17536bb71bbb9d1cd493fdeec6e7f273cf11a954e71aae8c74e&=&width=500&height=385') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝟏𝟎𝟎𝟐 𝐃𝐀𝐘 𝐖𝐈𝐓𝐇 𝐔') //Text when you hover the Large image
   
    .addButton('𝐦𝐞', 'https://linktr.ee/br0510')
  .addButton(`𝐒𝐭𝐞𝐚𝐦`, `https://steamcommunity.com/id/nopeeth/`);
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);