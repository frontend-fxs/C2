var renderData = function(){
    $.get('https://frontend-fxs.github.io/C2/js/templates/data.mst', function (template) {
        Mustache.parse(template)
        var rendered = Mustache.render(template, {})
        $('#fxs_ecocal_data').append(rendered)
      })
}

var renderMenu = function(){
    $.get('https://frontend-fxs.github.io/C2/js/templates/menu.mst', function (template) {
        Mustache.parse(template)
        var rendered = Mustache.render(template, {})
        $('#fxs_ecocal_menu').append(rendered)
      })
}

var renderFilter = function(){
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
    renderFilter();
    renderMenu();
    renderData();
  })
}


renderEcocal();