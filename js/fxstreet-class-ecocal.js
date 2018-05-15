var Translations = {
  In: 'in ',
  Now: 'NOW',
  SecondsLabel: '"',
  MinutesLabel: "'",
  TimeStampSeparator: ':'
}
var event = {
  Tradeable: true,
  Time: function () {
    this.end = new Date(2018, 5, 15, 14, 25, 0, 0)
    this.now = new Date()
    this.CountdownMilliseconds = end.getTime() - now.getTime()
    this.CountdownSeconds = parseInt(this.CountdownMilliseconds / 1000)
    this.CountdownMinutes = parseInt(this.CountdownMilliseconds / 1000 * 60)
    this.TimeStampString = end.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit',hour12: false})
    this.CountdownString = ''
    switch (true) {
      case this.CountdownMilliseconds <= 0:
        this.CountdownString = Translations.Now
        break
      case this.CountdownMilliseconds < 60000:
        this.CountdownString = Translations.In + this.CountdownSeconds + Translations.SecondsLabel
        break
      case this.CountdownMilliseconds < 3600000:
        this.CountdownString = Translations.In + this.CountdownMinutes + Translations.MinutesLabel
        break
      default:
        this.CountdownString = this.TimeStampString
        break
    }
    return this.CountdownString;
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
