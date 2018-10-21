# Discord Discrim Seeker
This great selfbot will try changing discriminators until you get one you like.

<div align="center">

  <p>
<img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love"><!--
--><img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with JavaScript">
  </p>

<p>
  <a href="https://github.com/NeotiDev/Discord-Discrim-Seeker/blob/master/LICENSE.md"><img src="https://img.shields.io/github/license/NeotiDev/Discord-Discrim-Seeker.svg?style=for-the-badge" alt="License"></a>
  </p>
  
  <p>
    <p>
    <a href="https://discord.gg/NqMA6xC"><img src="https://discordapp.com/api/guilds/478157155279699971/widget.png?style=banner2" alt="Join Our Discord Server"/></a>
  </p>
  </div>

Note that Discord may decide to restrict your account from changing your username or terminate your account altogether as a result of using this selfbot.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FNeotiDev%2FDiscord-Discrim-Seeker.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FNeotiDev%2FDiscord-Discrim-Seeker?ref=badge_large)

## NOTICES : 
#### I don't use selfbots on both my accounts. I manually change names to get my preferred discriminator and tested in different environments.

#### Discord has a limit of tag changing 1/day. So bot will only be able to change your tag once a day.

## Risks of Selfbots
A clear text that is written on Discord website about selfbots:
```
The question regarding "self bots" has come up here and there, and we'd like to make our stance clear:

Discord's API provides a separate type of user account dedicated to automation, called a bot account.
Bot accounts can be created through the applications page, and are authenticated using a token (rather than a username and password).
Unlike the normal OAuth2 flow, bot accounts have full access to all API routes without using bearer tokens, and can connect to the Real Time Gateway.
Automating normal user accounts (generally called "self-bots") outside of the OAuth2/bot API is forbidden, and can result in an account termination if found.
Discord's enforcement of the selfbot policy has not changed either in the last year.
If you decide to use a selfbot you do so at your own risk of getting your account banned from the API and Discord.
API restrictions on selfbots are tight, any sort of abuse will be immediately dealt with.
Note: Userbots (aka user bots, user-bots) which spam, respond to others, react to others, welcome users, etc, are dealt with swiftly and immediately.
```
#### I AM NOT RESPONSIBLE AND CANNOT BE HELD LIABLE IF YOU MESS UP WITH SELFBOTS. THIS INCLUDES BUT IS NOT LIMITED TO LOSING PRIVILEGES, GETTING KICKED OR BANNED FROM SERVERS, OR BEING BANNED FROM DISCORD ITSELF

## How to get an user token?

First, open the Discord console by pressing CTRL + SHIFT + I (COMMAND + SHIFT + I on Mac). Then, navigate to the "Network" tab and press F5 to reload your page/client:

![console](https://discordhelp.net/image/network-refresh.png)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FNeotiDev%2FDiscord-Discrim-Seeker.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FNeotiDev%2FDiscord-Discrim-Seeker?ref=badge_shield)

After doing refreshing the page with the network tab open, follow these steps (in order):

In the "Filter" search box, type "/api" (without quotes).

Click "applications" as highlighted in the below image.

If not already selected, select the headers tab (highlighted in below image).

Your Discord token can be found near the bottom of the headers tab, after "authorization:". We again stress that you must keep this private.

In the below image, each step is labelled:

![token](https://discordhelp.net/image/api-search-authorization.png)

## I got everything, now what do i do?

### If you got your user token, you now can edit `config.json`.

`discriminator`: List of the discriminators you want.

`username`: The Username You Want.

`password`: Your Discord Password.

`usertoken`: The token that you got.

### Install dependencies:

Open your console in the project folder.

Type `npm install`

Wait for the Discord.js library installation.

After that, run the client by `npm start`.

Please keep an eye to console notifications.

# Join our community for questions!

You are always able to join our community:

- Discord : [NqMA6xC](https://discord.gg/NqMA6xC)
- GitHub  : [GitHub/NeotiDev](https://github.com/NeotiDev)