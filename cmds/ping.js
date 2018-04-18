const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
   message.edit("Pong!")
}

module.exports.help = {
    name: "ping"
}