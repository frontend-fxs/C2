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

var randomEcocalService = function () {

  var now = new Date()
  var today = new Date()
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  var afterTomorrow = new Date()
  afterTomorrow.setDate(afterTomorrow.getDate() + 2)

  var randomPeriodService = function (end) {

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

    var isFuture = function () {
      return now.getTime() <= end.getTime()
    }

    var isTooLongPast = function () {
      return now.getTime() - end.getTime() > 120000
    }

    var isNow = function () {
      return isFuture() || !isTooLongPast()
    }

    var period = {
      Header: end.toLocaleDateString('en-EN', { weekday: 'long', month: 'short', day: '2-digit' }),
      Rows: []
    }

    for (var i = 1; i < 10; i++) {
      var randomNumber = Math.random()
      var time = {
        Hour: Math.floor(Math.random() * Math.floor(24)) + 1,
        Minute: Math.floor(Math.random() * Math.floor(59)) + 1
      }
      end.setHours(time.Hour)
      end.setMinutes(time.Minute)

      var event = {
        IsActive: !isTooLongPast(),
        IsNow: isNow(),
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
      return a.Date.getTime() - b.Date.getTime()
    })
    return period
  }

  ecoCalEvents.Periods.push(randomPeriodService(today))
  ecoCalEvents.Periods.push(randomPeriodService(tomorrow))
  ecoCalEvents.Periods.push(randomPeriodService(afterTomorrow))

}

randomEcocalService()



var addEvents = function () {
  $('.fxs_ecocal_event_row').click(function () {
    $(this).next('.fxs_ecocal_event_collapsible').toggleClass('fxs_hideElements')
    $(this).find('.fa-chevron-right').toggleClass('fa-chevron-right fa-chevron-down')
    $(this).find('.fa-chevron-left').toggleClass('fa-chevron-left fa-chevron-down')
  })
  $('[data-toggle="tooltip"]').tooltip()
}

var renderData = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/data.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, ecoCalEvents)
    $('#fxs_ecocal_data').html(rendered)
    addEvents()
  })
}

var renderMenu = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/menu.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, {})
    $('#fxs_ecocal_menu').html(rendered)
  })
}

var renderFilter = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/filter.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, {})
    $('#fxs_ecocal_filter').html(rendered)
  })
}

var renderEcocal = function () {
  $.get('https://frontend-fxs.github.io/C2/js/templates/ecocal.mst', function (template) {
    Mustache.parse(template)
    var rendered = Mustache.render(template, {})
    $('#fxs_ecocal').html(rendered)
    renderFilter()
    renderMenu()
    renderData()
  })
}

renderEcocal()
