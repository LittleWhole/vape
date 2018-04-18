const Discord = module.require("discord.js")
const esrever = module.require("esrever")

module.exports.run = async (client, message, args) => {
    message.edit(esrever.reverse(args.join(' ')))
}

module.exports.help = {
    name: "reverse"
}