const moment = require('moment');
module.exports = {
	category: 'Security',
	description: 'Log out a user forcefully',
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: 'user',
	guildOnly: true,
    ownerOnly: true,
	testOnly: true,
	slash: true,
	options: [
		{
			name: 'user',
			description: 'User to log out',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, client, args }) => {
	const Discord = require('discord.js');
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const user = interaction.mentions.members.first() || await interaction.guild.members.fetch(args[0]).catch(error => {
 return;
  });
  interaction.reply({ content: 'User was logged out', ephemeral: true });
  if (user) {
	const embed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Security Alert')
	.setDescription(`${user} was forcefully logged out ${timeFull}`);
	client.channels.cache.get('836421516546539561').send(embed);
	const role = interaction.member.guild.roles.cache.find(role => role.name === 'Aci');
	user.roles.remove(role);
	if (user.id === '702164630570663992') {
		const ikeRole = interaction.member.guild.roles.cache.find(role => role.id === '836052546875031612');
		user.roles.remove(ikeRole);
	}
  }
	},
};