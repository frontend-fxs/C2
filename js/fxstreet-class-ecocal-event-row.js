var EventRow = function(eventJson) {
	var translations = {
		In: 'in ',
		Now: 'NOW',
		SecondsLabel: '"',
		MinutesLabel: "'",
		TimeStampSeparator: ':',
  };

	var calcCountDownString = function(end, now) {
		var countdownMilliseconds = end.getTime() - now.getTime();
		var countdownSeconds = parseInt(countdownMilliseconds / 1000);
		var countdownMinutes = parseInt(countdownMilliseconds / (1000 * 60));
		var timeStampString = end.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: false });
		var countdownString = '';
		switch (true) {
			case countdownMilliseconds <= 0:
				countdownString = translations.Now;
				break;
			case countdownMilliseconds < 60000:
				countdownString = translations.In + countdownSeconds + translations.SecondsLabel;
				break;
			case countdownMilliseconds < 3600000:
				countdownString = translations.In + countdownMinutes + translations.MinutesLabel;
				break;
			default:
				countdownString = timeStampString;
				break;
		}
		return countdownString;
	};
	var getCountDownString = function(time) {
		var end = new Date(time.Year, time.Month, time.Day, time.Hour, time.Minute);
		var now = new Date();
		var countdownString = calcCountDownString(end, now);
		return countdownString;
	};
  var ecoCalEventJson = {};
  var setJson = function(JsonData){
    ecoCalEventJson = JsonData;
    ecoCalEventJson.CountDown = getCountDownString(ecoCalEventJson.Time);
  }
  var addEvents = function(){
		$('[data-toggle="tooltip"]').tooltip();
		$('#fxs_ecocal_event_row_' + ecoCalEventJson.Id).click(function() {
			$('#fxs_ecocal_event_collapsible_' + ecoCalEventJson.Id).toggleClass('fxs_hideElements');
			$('#fxs_ecocal_event_row_chevron_right_' + ecoCalEventJson.Id).toggleClass('fa-chevron-right fa-chevron-down');
			$('#fxs_ecocal_event_row_chevron_left_' + ecoCalEventJson.Id).toggleClass('fa-chevron-left fa-chevron-down');
		});
  }
  var render = function(){
    $.get('https://frontend-fxs.github.io/C2/js/templates/row.html', function(template) {
      Mustache.parse(template);
      var rendered = Mustache.render(template, ecoCalEventJson);
      $('#eventRow').append(rendered);
      addEvents();
    });  
  }
  var init = function(eventJson){
    setJson(eventJson);
    render();
  }
  init(eventJson);
};
