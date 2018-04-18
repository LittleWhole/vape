const Discord = module.require("discord.js")
const leet = require("leet")

module.exports.run = async (bot, message, args) => {
    message.edit(leet.convert(args.join(' ')))
}

module.exports.help = {
    name: "leet"
}