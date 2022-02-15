/* eslint-disable no-shadow-restricted-names */
module.exports = {
  category: 'Bot',
  description: 'Check the bot\'s latency.',
  cooldown: '3s',
  slash: true,
  guildOnly: true,
	callback: async ({ interaction }) => {
    const mesg = await interaction.reply({ content: 'Testing <a:megloadtb:815413186869198858>', fetchReply: true });
            setTimeout(async function() {
                await interaction.editReply({ content: `:ping_pong: Pong! Latency: ${mesg.createdTimestamp - interaction.createdTimestamp}ms.` });
            }, 1000);

	},
};