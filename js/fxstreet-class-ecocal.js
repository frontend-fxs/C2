var init = function(json){
  setSettingsByObject(json);
  setVars();
  render();
  addEvents();
};
var setSettingsByObject = function (json) {
  for (var propName in json)  {
    if (json.hasOwnProperty(propName))  {
      if (this[propName] !== undefined)  {
        this[propName] = json[propName]; 
      }
    }
  }
}
var setVars = function () {}
var render = function () {
  $.get('./templates/row.mst', function(template) {
    Mustache.parse(template);
    var rendered = Mustache.render(template, { name:'Oriol' } );
    $('#targetRender').html(rendered);
  });
} 
var addEvents = function () { }; 
var json = {}; 
init(json);