```javascript
const Discord = require('discord.js');
const { token } = require('../.env');
const bot = new Discord.Client();

bot.login(token);

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Handle different moderation commands
  if (message.content.startsWith('!ban')) {
    const banCommand = require('./commands/ban');
    banCommand.execute(message, bot);
  } else if (message.content.startsWith('!kick')) {
    const kickCommand = require('./commands/kick');
    kickCommand.execute(message, bot);
  } else if (message.content.startsWith('!mute')) {
    const muteCommand = require('./commands/mute');
    muteCommand.execute(message, bot);
  } else if (message.content.startsWith('!delete')) {
    const deleteCommand = require('./commands/delete');
    deleteCommand.execute(message, bot);
  } else if (message.content.startsWith('!rules')) {
    const rulesCommand = require('./commands/rules');
    rulesCommand.execute(message, bot);
  }
});
```