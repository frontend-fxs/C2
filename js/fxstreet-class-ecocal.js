var event = {
  tradeable: false,
  time: new Date(),
  volatility: 0,
  title: 'event title',
  flag: 'flagname',
  actual: 27,
  deviation: 107,
  consensus: 107,
  previous: -1.7,
  dashboardLink: 'google.es'
}

$.get('https://frontend-fxs.github.io/C2/js/templates/row.mst', function (template) {
  Mustache.parse(template)
  var rendered = Mustache.render(template, event)
  $('#eventRow').html(rendered)
})
