const config = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

console.log('\x1b[36m', "Discord Discrim Seeker is Active | Visit our support server : NqMA6xC");

const discrimSeeker = async () => {
    let users = client.users.filter(u => u.discriminator === client.user.discriminator);
    if (users.size < 2) {
        console.error('\x1b[31m', "We didn't find any user with your discriminator. You need to make your selfbot see more users. Go and join some servers!");
        process.exit(1);
    }
    let user = users.random();
    try {
        await client.user.setUsername(user.username, config.password);
        if (config.discriminator.indexOf(client.user.discriminator) > -1) {
            console.log('\x1b[36m', "One of your choosen discriminators was selected. Selfbot will change your name in 5 minutes. DO NOT CLOSE CLIENT.");
            client.setTimeout(async () => {
                try {
                    console.log('\x1b[36m', "Changing your username...");
                    await client.user.setUsername(config.username, config.password);
                    console.log('\x1b[36m', "Changed Username. Exiting...");
                    process.exit(1);
                }
                catch (e) {
                    console.error('\x1b[31m', "Client failed to reset to your preferred username. You'll have to manually reset your username.");
                    process.exit(1);
                }
            }, 300000);
        }
        else return console.log('\x1b[33m', "The selected discriminator was not one of your preferred discriminators. Will reset your username in 30 minutes.");
    }
    catch (e) {
                console.error("\x1b[31m", e);
        console.error("\x1b[33m", "Selfbot failed to set your username. | Contact Support Server : NqMA6xC");
    }
};

client.on("ready", () => {
    console.log("\x1b[36m", "Alright, let's do this. Selfbot will change your username in 10 seconds.");
    client.setTimeout(() => discrimSeeker(), 10000);
    client.setInterval(() => discrimSeeker(), 1800000);
});

client.login(config.usertoken);
