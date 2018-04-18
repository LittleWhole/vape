const Discord = module.require("discord.js")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
    message.edit(":white_check_mark: Now playing: **" + args.join(' ') + "**")
    client.user.setGame(args.join(' '))
}

module.exports.help = {
    name: "play"
}