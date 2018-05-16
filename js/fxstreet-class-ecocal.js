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
  Day: 16,
  Hour: 15,
  Minute: 50
}
var calcCountDownString = function (end, now) {
  var countdownMilliseconds = end.getTime() - now.getTime()
  var countdownSeconds = parseInt(countdownMilliseconds / 1000)
  var countdownMinutes = parseInt(countdownMilliseconds / (1000 * 60))
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
  Id:1,
  Tradeable: true,
  CountDown: countDown,
  VolatilityLevel: { ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Information_circle.png' },
  Flag: 'us',
  Currency: 'EUR',
  Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
  Actual: {
    Value: '¥-9999.99B',
    High: true,
    Low: false,
    Neutral: false
  },
  Deviation: {
    Value: '-5.66%',
    High: true,
    Low: false,
    Neutral: false
  },
  Consensus: '¥-9999.99B',
  Previous: {
    Value: '¥-9999.99B',
    Revised: {
      Tooltip: 'Revised From ',
      Value: '¥-9999.99B',
      High: true,
      Low: false,
      Neutral: false
    }
  },
  DashboardLink: 'google.es'
}
$.get('https://frontend-fxs.github.io/C2/js/templates/row.mst', function (template) {
  Mustache.parse(template)
  var rendered = Mustache.render(template, ecoCalEvent)
  $('#eventRow').html(rendered)
  $('[data-toggle="tooltip"]').tooltip();
})
