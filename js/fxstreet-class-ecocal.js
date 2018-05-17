var translations = {
  In: 'in ',
  Now: 'NOW',
  SecondsLabel: '"',
  MinutesLabel: "'",
  TimeStampSeparator: ':'
}

var ecoCalEvents = {
  Periods: []
}

var end = null;
var now = null;

var randomPeriodService = function (year, month, day, header) {
  var getCountDownString = function () {
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

  var isFuture = function(){
    return now.getTime() <= end.getTime()
  }

  var isTooLongPast = function(){
    return !isFuture() && now.getTime() - end.getTime() > 120000;
  }

  var isVisible = function(){
    return isFuture() || !isTooLongPast()
  }

  var period = {
    Header: header,
    Rows: []
  }

  for (var i = 1; i < 10; i++) {
    var randomNumber = Math.random()
    var time = {
      Year: year,
      Month: month,
      Day: day,
      Hour: Math.floor(Math.random() * Math.floor(24)) + 1,
      Minute: Math.floor(Math.random() * Math.floor(59)) + 1
    }
    var end = new Date(time.Year, time.Month, time.Day, time.Hour, time.Minute)
    var now = new Date()

    var event = {
      IsActive: !isTooLongPast(),
      IsVisible: isVisible(),
      Tradeable: randomNumber > 0.5,
      CountDown: getCountDownString(),
      Date: end,
      VolatilityLevel: randomNumber > 0.1 && Math.floor(randomNumber * 3 + 1),
      Flag: 'us',
      Currency: 'EUR',
      Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
      Actual: {
        Value: '¥-9999.99B',
        High: randomNumber > 0.66,
        Low: randomNumber < 0.33
      },
      Deviation: {
        Value: '-5.66%',
        High: randomNumber > 0.66,
        Low: randomNumber < 0.33
      },
      Consensus: '¥-9999.99B',
      Previous: {
        Value: '¥-9999.99B',
        Revised: {
          Tooltip: 'Revised From ',
          Value: '¥-9999.99B',
          High: randomNumber > 0.66,
          Low: randomNumber < 0.33
        }
      },
      DashboardLink: 'google.es'
    }
    period.Rows.push(event)
  }
  period.Rows.sort(function (a, b) {
    return a.Date - b.Date
  })
  return period
}

ecoCalEvents.Periods.push(randomPeriodService(2018, 4, 17, 'THURSDAY MAY 17'))
ecoCalEvents.Periods.push(randomPeriodService(2018, 4, 17, 'FRIDAY MAY 18'))
ecoCalEvents.Periods.push(randomPeriodService(2018, 4, 17, 'MONDAY MAY 21'))

var addEvents = function () {
  $('.fxs_ecocal_event_row').click(function () {
    $(this).next('.fxs_ecocal_event_collapsible').toggleClass('fxs_hideElements')
    $(this).find('.fa_chevron_right').toggleClass('fa-chevron-right fa-chevron-down')
    $(this).find('.fa_chevron_left').toggleClass('fa-chevron-left fa-chevron-down')
  })
  $('[data-toggle="tooltip"]').tooltip()
}

var renderData = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/data.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, ecoCalEvents)
    $('#fxs_ecocal_data').append(rendered)
    addEvents()
  })
}

var renderMenu = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/menu.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, {})
    $('#fxs_ecocal_menu').append(rendered)
  })
}

var renderFilter = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/filter.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, {})
    $('#fxs_ecocal_filter').append(rendered)
  })
}

var renderEcocal = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/ecocal.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, {})
    $('#fxs_ecocal').append(rendered)
    renderFilter()
    renderMenu()
    renderData()
  })
}
setInterval(renderEcocal, 1000)
