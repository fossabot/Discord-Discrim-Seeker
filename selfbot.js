const config = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

console.log("Discord Discrim Seeker is Active | Visit our support server : 9XSktUe");

const discrimSeeker = async () => {
    let users = client.users.filter(u => u.discriminator === client.user.discriminator);
    if (users.size < 2) {
        console.error("We didn't find any user with your discriminator. You need to make your selfbot see more users. Go and join some servers!");
        process.exit(1);
    }
    let user = users.random();
    try {
        await client.user.setUsername(user.username, config.password);
        if (config.discriminator.indexOf(client.user.discriminator) > -1) {
            console.log("One of your choosen discriminators was selected. Selfbot will change your name in 5 minutes. DO NOT CLOSE CLIENT.");
            client.setTimeout(async () => {
                try {
                    console.log("Changing your username...");
                    await client.user.setUsername(config.username, config.password);
                    console.log("Changed Username. Exiting...");
                    process.exit(1);
                }
                catch (e) {
                    console.error("Client failed to reset to your preferred username. You'll have to manually reset your username.");
                    process.exit(1);
                }
            }, 300000);
        }
        else return console.log("The selected discriminator was not one of your preferred discriminators. Will reset your username in 30 minutes.");
    }
    catch (e) {
        console.error("Selfbot failed to sey your username.");
        console.error(e);
    }
};

client.on("ready", () => {
    console.log("Alright, let's do this. Selfbot will change your username in 10 seconds.");
    client.setTimeout(() => discrimSeeker(), 10000);
    client.setInterval(() => discrimSeeker(), 1800000);
});

client.login(config.usertoken);
