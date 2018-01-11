const Discord = require('discord.js')
const logger = require('winston')
const auth = require('./auth.json')
const token = auth.token
let bridge = '#393944416282214402'
let crewActivity = '#393944470485336064'
let ooc = '#393944502009593879'
// logger settings configuration
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, {
  colorize: true,
})
logger.level = 'debug'

// Bot initialization
let bot = new Discord.Client()
bot.on('ready', function(evt) {
  logger.info('Connected')
  logger.info('Logged in')
})
bot.login(token)
bot.on('message', message => {
  switch (message.content) {
    // !ping
    case '!ping':
      message.reply('Pong!')
      break
    // !hello
    case '!hello':
      message.reply('Hello! Welcome to the server!')
      break
    // !spoilers
    case '!spoilers':
      message.reply(
        'Absolutely NO spoilers for the latest episode in general channels until the Wednesday after it airs. All spoiler-related discussions should stay in <' +
          bridge +
          '>.\n\nSpoilers are banned in <' +
          crewActivity +
          '> and <' +
          ooc +
          '> for the first 24 hours after airing.'
      )
      break
    // !sot
    case '!sot':
      message.reply(
        'Shield of Tomorrow currently airs Fridays at 4PM Pacific Time (GMT-8) on the Geek and Sundry Twitch channel (https://www.twitch.tv/geekandsundry)'
      )
      break
    // !talkabout
    case '!talkabout':
      message.reply("I don't know what you're talking about...")
      break
    // !cato
    case '!cato':
      message.reply('Cato: SHIP! COMBAT!')
      break
    // !belowdeckspodcast
    case '!belowdeckspodcast':
      message('Follow the Below Decks Podcast! https://www.belowdeckspodcast.com')
      break
  }
})
