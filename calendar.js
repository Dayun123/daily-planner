const calendar = require('./fetch-calendar.js')
const l = console.log

exports.command = 'cal'

exports.describe = 'Get list of 10 most recent calendar events'

exports.builder = {
  primary: {
    alias: 'p'
  },
  music: {
    alias: 'm'
  },
  gotGroove: {
    alias: 'g'
  }
}

exports.handler = function (argv) {
  // do something with argv.
  l(argv)
  // calendar.loadCalendar(argv)
}