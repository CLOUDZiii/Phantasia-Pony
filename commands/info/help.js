const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, Discord, args }) => {
    const exampleEmbed = new MessageEmbed()
      .setColor("#e21784")
      .setTitle("Phantasia Help")
      .setDescription("Prefix for Phantasia is `p?`.");

    message.channel.send({ embeds: [exampleEmbed] });
  },
};
