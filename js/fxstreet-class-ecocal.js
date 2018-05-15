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
    End: new Date(2018, 4, 15, 14, 25, 0, 0),
    Now: new Date(),
    CountdownMilliseconds: function(){
      return this.End.getTime() - this.Now.getTime()
    },
    CountdownSeconds:function(){
      return parseInt(this.CountdownMilliseconds() / 1000)
    },
    CountdownMinutes:function(){
      return parseInt(this.CountdownMilliseconds() / 1000 * 60)
    },
    TimeStampString: function(){
      return this.End.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit',hour12: false})
    },
    CountdownString: function(){
      switch (true) {
        case Parent.CountdownMilliseconds() <= 0:
          countdownString = Translations.Now
          break
        case Parent.CountdownMilliseconds() < 60000:
          countdownString = Translations.In + Parent.CountdownSeconds() + Translations.SecondsLabel
          break
        case Parent.CountdownMilliseconds() < 3600000:
          countdownString = Translations.In + Parent.CountdownMinutes() + Translations.MinutesLabel
          break
        default:
          countdownString = Parent.TimeStampString()
          break
      }
      return countdownString;
    }
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
