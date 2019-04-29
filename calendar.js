const calendar = require('./fetch-calendar.js')

exports.command = 'cal'

exports.describe = 'Get list of 10 most recent calendar events'

// exports.builder = {
//   banana: {
//     default: 'cool'
//   },
//   batman: {
//     default: 'sad'
//   }
// }

exports.handler = function (argv) {
  // do something with argv.
  calendar.loadCalendar()
}