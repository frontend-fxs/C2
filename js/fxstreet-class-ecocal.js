var translations = {
  In: 'in ',
  Now: 'NOW',
  SecondsLabel: '"',
  MinutesLabel: "'",
  TimeStampSeparator: ':'
}
var time = {
  Year: 2018,
  Month: 4,
  Day: 15,
  Hour: 17,
  Minute: 58
}
var calcCountDownString = function (end, now) {
  var countdownMilliseconds = end.getTime() - now.getTime()
  var countdownSeconds = parseInt(countdownMilliseconds / 1000)
  var countdownMinutes = parseInt(countdownMilliseconds / 1000 * 60)
  var timeStampString = end.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: false })
  var countdownString = ''
  switch (true) {
    case countdownMilliseconds <= 0:
      countdownString = translations.Now
      break
    case countdownMilliseconds < 60000:
      countdownString = translations.In + countdownSeconds + translations.SecondsLabel
      break
    case countdownMilliseconds < 3600000:
      countdownString = translations.In + countdownMinutes + translations.MinutesLabel
      break
    default:
      countdownString = timeStampString
      break
  }
  return countdownString
}
var getCountDownString = function (time) {
  var end = new Date(time.Year, time.Month, time.Day, time.Hour, time.Minute)
  var now = new Date()
  var countdownString = calcCountDownString(end, now)
  return countdownString
}
var countDown = getCountDownString(time)
var ecoCalEvent = {
  Tradeable: true,
  CountDown: countDown,
  VolatilityLevel0:false,
  VolatilityLevel1:true,
  VolatilityLevel2:false,
  VolatilityLevel3:false,
  Title: 'event title',
  Flag: 'flagname',
  Actual: 27,
  Deviation: 107,
  Consensus: 107,
  Previous: -1.7,
  DashboardLink: 'google.es'
}
$.get('https://frontend-fxs.github.io/C2/js/templates/row.mst', function (template) {
  Mustache.parse(template)
  var rendered = Mustache.render(template, ecoCalEvent)
  $('#eventRow').html(rendered)
})
