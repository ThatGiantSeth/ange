/* eslint-disable no-shadow-restricted-names */
module.exports = {
	category: 'Bot',
	description: 'View the bot\'s status page',
	cooldown: '10s',
	slash: true,
	guildOnly: true,
	callback: async ({ interaction }) => {
		const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
        const { version } = require('../../config.json');
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('Statuspage')
			.setStyle('LINK')
			.setURL('https://ange.statuspage.io/'),
		);
		const statusEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Bot Status Page')
	.setDescription('Information about maintenances or downtime will be posted here, if I remember.')
	.setThumbnail('https://i.imgur.com/klL3Wi8.png')
	.setFooter(`Ange ${version}`, 'https://i.imgur.com/W1lcK9M.gif');

  interaction.reply({ embeds: [statusEmbed], components: [row] });
	},
};