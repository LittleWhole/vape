const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
	process.exit();
}

module.exports.help = {
    name: "stop"
}