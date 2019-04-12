require('dotenv').config();
const request = require('request');
const Discord = require('discord.js');
const { parseString } = require("xml2js");

const TwitterClient = require('./twitterClient');

const client = new Discord.Client();
const twitterClient = new TwitterClient(client);
