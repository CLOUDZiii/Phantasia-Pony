const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, Discord, args }) => {
    const exampleEmbed = new MessageEmbed()
      .setColor("#e21784")
      .setTitle("Some title")
      .setDescription("Some description here");

    message.channel.send({ embeds: [exampleEmbed] });
  },
};
