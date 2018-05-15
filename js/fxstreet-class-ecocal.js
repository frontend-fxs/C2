var Translations = {
  In: 'in ',
  Now: 'NOW',
  SecondsLabel: '"',
  MinutesLabel: "'",
  TimeStampSeparator: ':'
}
var event = {
  Tradeable: false,
  Time: function () {
    var end = new Date(2018, 5, 15, 12, 25, 0, 0)
    var now = new Date()
    var countdownMilliseconds = end.getTime() - now.getTime()
    var countdownSeconds = parseInt(countdownMilliseconds / 1000)
    var countdownMinutes = parseInt(countdownMilliseconds / 1000 * 60)
    var TimeStampString = end.toLocaleTimeString('en-us', { hour: 'short', minute: 'numeric' })
    var countdownString = ''
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
        countdownString = TimeStampString
        break
    }
    return countdownString;
  },
  Volatility: 0,
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
  var rendered = Mustache.render(template, event)
  $('#eventRow').html(rendered)
})
