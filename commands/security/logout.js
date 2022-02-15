const moment = require('moment');
module.exports = {
	category: 'Security',
	description: 'Log out',
	guildOnly: true,
	cooldown: '10s',
	slash: true,
	testOnly: true,
	callback: async ({ interaction, client }) => {
		const server = interaction.guild.id;
		if (server === '727554812299968582') {
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const author = interaction.user.username;
  const { MessageActionRow, MessageButton } = require('discord.js');
  const row = new MessageActionRow()
  .addComponents(
	new MessageButton()
	.setCustomId('yes')
	.setLabel('Yes')
	.setStyle('SUCCESS'),
	new MessageButton()
	.setCustomId('no')
	.setLabel('No')
	.setStyle('DANGER'),
  );
 await interaction.reply({ content: 'Are you sure you want to log out?', components: [row], ephemeral: true });

 const aFilter = i=>i.user.id === interaction.user.id;

 const collector = interaction.channel.createMessageComponentCollector({ filter: aFilter, time: 30000 });

 collector.on('collect', async i => {
	if (i.customId === 'no') {
		try {
		await interaction.editReply({ content: 'Logout canceled.', components: [] });
		}
		catch (error) {
		return;
		}
	}
	else if (i.customId === 'yes') {
		try {
			await interaction.editReply({ content: 'Logged out.', components: [] });
		}
		catch (error) {
			return;
		}
		client.channels.cache.get('836421516546539561').send(`${author} logged out ${timeFull}`);
		const role = interaction.member.guild.roles.cache.find(role => role.name === 'Aci');
		interaction.member.roles.remove(role);
		if (interaction.user.id === '702164630570663992') {
			const ikeRole = interaction.member.guild.roles.cache.find(role => role.name === 'Bot Dev');
			interaction.member.roles.remove(ikeRole);
		}
	}
	else {
		return;
	}
 });

		}
	},
};