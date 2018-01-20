const Discord = require('discord.js')
const fs = require('fs')
const config = require('./auth.json')
const token = config.token
let bridge = '#393944416282214402'
let crewActivity = '#393944470485336064'
let ooc = '#393944502009593879'

// Bot initialization
const bot = new Discord.Client()
bot.on('ready', () => {
  console.log('Bot logged in and ready')
})
bot.login(token)
// Bot replies
bot.on('message', msg => {
let args = msg.content.slice(config.prefix.length).trim().split(/ + /g)
let command = args.shift().toLowerCase()
  if(!command || msg.author.bot)return
  switch (command) {
    case 'ping':
      msg.reply('Pong!')
      break
    case 'hello':
      msg.reply('Hello! Welcome to the server!')
      break
    case 'spoilers':
      msg.reply(
        'Absolutely NO spoilers for the latest episode in general channels until the Wednesday after it airs. All spoiler-related discussions should stay in <' +
          bridge +
          '>.\n\nSpoilers are banned in <' +
          crewActivity +
          '> and <' +
          ooc +
          '> for the first 24 hours after airing.'
      )
      break
    case 'sot':
      msg.reply(
        'Shield of Tomorrow currently airs Fridays at 4PM Pacific Time (GMT-8) on the Geek and Sundry Twitch channel (https://www.twitch.tv/geekandsundry)'
      )
      break
    case 'talkabout':
      msg.reply("I don't know what you're talking about...")
      break
    case 'cato':
      msg.reply('Cato: SHIP! COMBAT!')
      break
    case 'belowdeckspodcast':
      msg.reply('Follow the Below Decks Podcast! https://www.belowdeckspodcast.com')
      break
    case 'martinez':
      msg.reply('Faaantastic...')
      break
  }
})
 