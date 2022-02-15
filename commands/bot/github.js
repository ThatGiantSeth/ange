/* eslint-disable no-shadow-restricted-names */
module.exports = {
	category: 'Bot',
	description: 'View the bot\'s GitHub repository',
	cooldown: '10s',
	slash: true,
	guildOnly: true,
	callback: ({ interaction }) => {
		const { MessageActionRow, MessageButton } = require('discord.js');
	const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('GitHub')
			.setStyle('LINK')
			.setURL('https://github.com/ThatGiantSeth/ange'),
		);

  interaction.reply({ content: 'The bot\'s source code can be found here (no token included sorry hackers).\n**WARNING:** Downloading and hosting this bot is not recommended. It is made for this server only.', components: [row] });
	},
};