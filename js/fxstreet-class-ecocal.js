var Translations = {
  In: 'in ',
  Now: 'NOW',
  SecondsLabel: '"',
  MinutesLabel: "'",
  TimeStampSeparator: ':'
}
var event = {
  Tradeable: true,
  Time: {
    Year: 2018,
    Month: 4,
    Day: 15,
    Hour: 17,
    Minute: 45
  },
  CountDown: getTime(this.Time),
  Volatility: 0,
  Title: 'event title',
  Flag: 'flagname',
  Actual: 27,
  Deviation: 107,
  Consensus: 107,
  Previous: -1.7,
  DashboardLink: 'google.es'
}

var getTime = function (time) {
  var end = new Date(time.year, time.month, time.day, time.hour, time.minute)
  var now = new Date()
  var countdownString = calcCountDownString(end,now)
  return countdownString
}
var calcCountDownString = function (end,now) {
  var countdownMilliseconds = end.getTime() - now.getTime()
  var countdownSeconds = parseInt(countdownMilliseconds / 1000)
  var countdownMinutes = parseInt(countdownMilliseconds / 1000 * 60)
  var timeStampString = end.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: false })
  var countdownString = "";
  switch (true) {
    case countdownMilliseconds <= 0:
      countdownString = Translations.Now
      break
    case countdownMilliseconds < 60000:
      countdownString = Translations.In + countdownSeconds + Translations.SecondsLabel
      break
    case countdownMilliseconds < 3600000:
      countdownString = Translations.In + countdownMinutes + Translations.MinutesLabel
      break
    default:
      countdownString = timeStampString
      break
  }
  return countdownString
}

$.get('https://frontend-fxs.github.io/C2/js/templates/row.mst', function (template) {
  Mustache.parse(template)
  var rendered = Mustache.render(template, event)
  $('#eventRow').html(rendered)
})
