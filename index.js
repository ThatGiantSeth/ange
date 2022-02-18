const { Client, Intents } = require('discord.js');
const wokcommands = require('wokcommands');
require('dotenv').config();
const path = require('path');

const client = new Client({
    partials: ['MESSAGE', 'REACTION'],
    intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS],
});

client.on ('ready', async () => {
  console.log('Bot online!');
      // sets bot status
        client.user.setPresence({ status : 'dnd' });
        client.user.setActivity('out for intruders.', { type: 'WATCHING' });

    // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
  };

    // If you want to disable built in commands you can add them to this array. Simply uncomment the strings to disable that command.

    const disabledDefaultCommands = [
        'help',
        'command',
        'language',
        'prefix',
        'requiredrole',
      ];

      // Initialize WOKCommands with specific folders and MongoDB
  new wokcommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    messagesPath: path.resolve('./messages.json'),
    delErrMsgCooldown: -1,
    showWarns: true,
    dbOptions,
    disabledDefaultCommands,
    mongoUri: process.env.MONGO_URI,
    testServers: ['819442264043946004', '727554812299968582'],
    botOwners: (['411994450370232321', '702164630570663992']),
    ephemeral: true,
  })
  // Set the default prefix for your bot, it is ! by default
  .setDefaultPrefix('aa.')
  // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
  // eslint-disable-next-line semi
  .setColor(0x000000)
  .setCategorySettings([
    {
      name: 'Bot',
      emoji: '🤖',
    },
    {
      name: 'Security',
      emoji: '🔒',
    },
  ]);

});

client.login(process.env.TOKEN);