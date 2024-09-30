const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('nivel-furro')
    .setDescription("Determina el nivel de 'furrosidad' del usuario")
    .addUserOption(option => option.setName('usuario').setDescription('El usuario del que quieres comprobar su nivel de furrosidad').setRequired(true)),
    async execute(interaction) {

        const user = interaction.options.getUser('usuario') || interaction.user;

        const minNivelFurro = 0;
        const maxNivelFurro = 100;
        const randomNivelFurro = Math.floor(Math.random() * (maxNivelFurro - minNivelFurro + 1)) + minNivelFurro;
        let message = `El nivel de furrosidad de ${user} es del ${randomNivelFurro}%.`;

        if (randomNivelFurro >= 80) {
            message = `> ${user} es un furro hardcore con un nivel del **${randomNivelFurro}%** 🐾`;
        } else if (randomNivelFurro <= 20) {
            message = `> ${user} es un normie con un nivel del **${randomNivelFurro}%** 🙄`;
        } else if (randomNivelFurro <= 50) {
            message = `> ${user} es un furro casual con un nivel del **${randomNivelFurro}%** 🦊`;
        } else {
            message = `> ${user} es un orgulloso furro con un nivel del **${randomNivelFurro}%** 🐱‍👤`;
        }

        const embed = new EmbedBuilder()
        .setAuthor({ name: `Comando de Nivel Furro`})
        .setTitle(`Medición de Nivel Furro`)
        .setDescription(`Comprobando el nivel de furrosidad de ${user}`)
        .setColor("DarkOrange")
        .addFields({name: '• Nivel de Furrosidad', value: (message)})
        .setTimestamp()
        .setFooter({text: `Solicitado por ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setImage('https://pm1.aminoapps.com/9081/2c201f3003bc5e410f6dbb43a9d8e3e207a10131r1-729-569v2_00.jpg');

        await interaction.reply({ embeds: [embed] });
    },
};