var init = function(){
  setVars();
  render();
  addEvents();
};
var setVars = function () {}
var render = function () {
  $.get('./js/templates/row.mst', function(template) {
    Mustache.parse(template);
    var rendered = Mustache.render(template, { name:'Oriol' } );
    $('#targetRender').html(rendered);
  });
} 
var addEvents = function () { }; 
init();