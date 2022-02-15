const moment = require('moment');
const Discord = require('discord.js');
module.exports = {
	category: 'Security',
	description: 'Log out everyone',
	guildOnly: true,
	ownerOnly: true,
	cooldown: '5s',
	testOnly: true,
	slash: true,
	callback: async ({ interaction, client }) => {
		await interaction.reply({ content: 'Lockdown initiated. All users logged out.', ephemeral: true });
        const guild = client.guilds.cache.find(guild => guild.id === '727554812299968582');
        await guild.members.fetch();
        const role = guild.roles.cache.find(role => role.name === 'Aci');
          role.members.forEach((member) => {
              member.roles.remove(role);
              // WARNING: This code will get you rate limited after more than a few members
        });
        const timeOut = moment();
         const timeFull = timeOut.format('MMMM Do YYYY, h:mm:ss a');
         const embed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Security Alert')
	.setDescription(`Everyone was forcefully logged out ${timeFull}`);
	client.channels.cache.get('836421516546539561').send({ embeds: [embed] });
	},
};