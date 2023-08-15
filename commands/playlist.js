const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("TRAP THE FATO"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/intl-pt/album/2Gb9tOJBTIkiXfdQq1cLgo?si=PClKUXzBSCKFUQjM7pc01A"
    );
  },
};