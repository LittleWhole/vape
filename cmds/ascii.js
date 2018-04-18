const Discord = module.require("discord.js")
let ascii = require('ascii-text-generator');

module.exports.run = async (client, message, args) => {
    let input_text = args.join(' ');
    let ascii_text = ascii(input_text,"2");
    try {
        message.edit("```" + ascii_text + "```");
    } catch (err) {
        message.delete();
        console.log("Invalid text! You can only use a-z, 0-9, and ()")
    }
}

module.exports.help = {
    name: "ascii",
}