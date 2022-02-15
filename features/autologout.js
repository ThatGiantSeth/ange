const moment = require('moment');
module.exports = (client) => {
    client.on('ready', () => {});
    const cron = require('node-cron');
        const express = require('express');
        const app = express();
        cron.schedule('0 3 * * THU', async function() {
          const guild = client.guilds.cache.find(guild => guild.id === '727554812299968582');
          await guild.members.fetch();
          const role = guild.roles.cache.find(role => role.name === 'Aci');
            role.members.forEach((member) => {
                member.roles.remove(role);
                // WARNING: This code will get you rate limited after more than a few members
          });
          const timeOut = moment();
           const timeFullOut = timeOut.format('MMMM Do YYYY, h:mm:ss a');
          client.channels.cache.get('836421516546539561').send({ content: `Everyone was logged out ${timeFullOut}` });
        });
        app.listen(3000);
  };
// 0 3 * * THU

  module.exports.config = {
    displayName: 'autologout',
    dbName: 'autologout',
  };