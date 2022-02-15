const moment = require('moment');
require('dotenv').config();
module.exports = {
	category: 'Security',
	description: 'Log in',
	guildOnly: true,
	cooldown: '5s',
	testOnly: true,
	slash: true,
	minArgs: 1,
	maxArgs: 1,
	expectedArgs: 'Login code',
	options: [
		{
			name: 'code',
			description: 'Login code',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, args, client }) => {
	const server = interaction.guild.id;
	if (server === '727554812299968582') {
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const author = interaction.user.username;
  const Code = process.env.LOGIN_CODE;
  if (args[0] !== Code || !args[0]) {
	interaction.reply({ content: 'Invalid code!', ephemeral: true });
	return;
  }
  else if (args[0] === Code) {
	interaction.reply({ content: 'Logged in!', ephemeral: true });
	client.channels.cache.get('836421516546539561').send(`${author} logged in ${timeFull}`);
	const role = interaction.member.guild.roles.cache.find(role => role.name === 'Aci');
	interaction.member.roles.add(role);
	if (interaction.user.id === '702164630570663992') {
		const ikeRole = interaction.member.guild.roles.cache.find(role => role.id === '836052546875031612');
		interaction.member.roles.add(ikeRole);
}
  }
}
	},
};