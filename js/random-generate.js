var calendarEvents = []

for (var i = 1; i < 10; i++) {
  var randomNumber = Math.random()
  ecoCalEventJson = {
    Id: i,
    Time: {
      Year: 2018,
      Month: Math.floor(Math.random() * Math.floor(11)) + 1,
      Day: Math.floor(Math.random() * Math.floor(28)) + 1,
      Hour: Math.floor(Math.random() * Math.floor(24)) + 1,
      Minute: Math.floor(Math.random() * Math.floor(59)) + 1
    },
    Tradeable: randomNumber > 0.5,
    CountDown: '',
    VolatilityLevel: {
      Value: 1,
      ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Information_circle.png'
    },
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
  var event = new EventRow(ecoCalEventJson)
  calendarEvents.push(event)
}
calendarEvents.sort(function(a, b){return a - b})