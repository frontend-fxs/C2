$.get('https://frontend-fxs.github.io/C2/js/templates/row.mst', function (template) {
  Mustache.parse(template)
  var rendered = Mustache.render(template, { name: 'Oriol' })
  $('#targetRender').html(rendered)
})
