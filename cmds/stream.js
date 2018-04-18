const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
    message.edit(":white_check_mark:  Now streaming: **" + args.join(' ') + "**")
    client.user.setPresence({
      game: {
        name: args.join(' '),
        url: "https://www.twitch.tv/memes",
        type: 1
      }
    });
}

module.exports.help = {
    name: "stream"
}