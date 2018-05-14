var FXStreet = {
    Class:{}
};
(function () {
  FXStreet.Class.EcoCal = function () {
    var _this = this

    _this.init = function (json) {
      _this.setSettingsByObject(json)
      _this.setVars()
      _this.render()
      _this.addEvents()
    }

    _this.setSettingsByObject = function (json) {
      for (var propName in json) {
        if (json.hasOwnProperty(propName)) {
          if (this[propName] !== undefined) {
            this[propName] = json[propName]
          }
        }
      }
    }

    _this.setVars = function () {}

    _this.render = function () {
        var templateRow = _this.get('https://frontend-fxs.github.io/C2/js/templates/row.mst');
        var json = {
            name : "oriol"
        }
        console.log(templateRow);
        var html = Mustache.to_html(templateRow, json);
        document.querySelector("#targetRender").innerHtml += html;
    }

    _this.get = function (file) {
      var request = new XMLHttpRequest();
      request.open('GET', file, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var resp = request.responseText;
          return resp;
        }
      };
      
      request.onerror = function() {
        console.log('error loading file');
      };
      
      request.send();
    }

    _this.addEvents = function () {}
  }
})()
