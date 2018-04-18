const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(args.join(' '))
    message.edit({embed: embed})
}

module.exports.help = {
    name: "embed"
}