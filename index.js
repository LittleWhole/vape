const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.json")

const prefix = config.prefix

const fs = require("fs")
client.commands = new Discord.Collection()

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err)

    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if(jsfiles.length <= 0) {
        return;
    }

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`)
        client.commands.set(props.help.name, props)
    })
})

client.on("ready", async () => {
    console.log("Vape Launcher: Getting token..")
    try {
        console.log("You're vaping verzion 0.3");
    } catch (err) {
        console.log("Please check your token in the config.json file, if this error persists contact inventor02")
    }
})

client.on("message", async message => {
    if (message.author !== client.user) return;

    let messageArray = message.content.split(" ")
    let command = messageArray[0]
    let args = messageArray.slice(1)

    if(!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length))
    if(cmd) cmd.run(client, message, args)
})

client.login(config.token)