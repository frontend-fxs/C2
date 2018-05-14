var FXStreet = { Class:{} };
(function() {
  FXStreet.Class.EcoCal = function () {
    var _this = this;

    _this.init = function (json) {
      _this.setSettingsByObject(json);
      _this.setVars();
      _this.render();
      _this.addEvents();
    }

    _this.setSettingsByObject = function (json) {
      for (var propName in json) {
        if (json.hasOwnProperty(propName)) {
          if (this[propName] !== undefined) {
            this[propName] = json[propName];
          }
        }
      }
    }

    _this.setVars = function () {}

    _this.render = function () {
      $.get('./templates/row.mst', function(template) {
      Mustache.parse(template);
      var rendered = Mustache.render(template,{name:'Oriol'} );
      $('#targetRender').html(rendered);
    });

    _this.addEvents = function () {

    };
  }
}())