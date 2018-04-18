const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
    if (args === null) {
        return client.message("Invalid args! Try $prune Number");
    }
    message.channel.getMessages(200).then(msgs => {
        let msgArray = msgs.filter(m => m.author.id === this.self.user.id).filter(m => m !== msgs[0])
        msgArray.length = parseInt(args[0], 10)
        msgArray.map(m => m.delete().catch(err => this.log.err(err)))
      })
}

module.exports.help = {
    name: "prune"
}