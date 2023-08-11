const { exec } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Pong!'"),

    async execution(interaction){
        await interaction.reply("Pong!");
    }
}