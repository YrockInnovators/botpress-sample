/*
  CONGRATULATIONS on creating your first Botpress bot!

  This is the programmatic entry point of your bot.
  Your bot's logic resides here.
  
  Here's the next steps for you:
  1. Read this file to understand how this simple bot works
  2. Read the `content.yml` file to understand how messages are sent
  3. Install a connector module (Facebook Messenger and/or Slack)
  4. Customize your bot!

  Happy bot building!

  The Botpress Team
  ----
  Getting Started (Youtube Video): https://www.youtube.com/watch?v=HTpUmDz9kRY
  Documentation: https://botpress.io/docs
  Our Slack Community: https://slack.botpress.io
*/

var syncRequest = require('sync-request');

const getRequestAPI = () => {

  return "http://api.icndb.com/jokes/random"
}

const requestAPI = getRequestAPI();
const res = JSON.parse(syncRequest('GET', requestAPI).body);

const message = res.value.joke;


module.exports = function(bp) {
  // Listens for a first message (this is a Regex)
  // GET_STARTED is the first message you get on Facebook Messenger

  bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
    event.reply('#welcome') // See the file `content.yml` to see the block
  })

  bp.hear({
    type: /message|text/i,
    text: /yes|YES|ok/i
  }, (event, next) => {
    event.reply('#jokes', {
      // You can pass data to the UMM bloc!
     joke: 
    })
  })

  //Version
  bp.hear({
    type: /message|text/i,
    text: /lol|ngek|funny|crazy|laugh|leave|stop/i
  }, (event, next) => {
    event.reply('#goodbye', {
      // You can pass data to the UMM bloc!
      reason: 'Its 4pm'
    })
  })
}
