var FXStreet = {
    Class:{
    }
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
        var templateRow = _this.get('./templates/row.html');
        var json = {
            name : "oriol"
        }
        console.log(templateRow);
        var html = Mustache.to_html(templateRow, json);
        document.querySelector("#targetRender").innerHtml += html;
    }

    _this.get = function (file) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', file)
      xhr.onload = function () {
        if (xhr.status === 200) {
          return xhr.responseText;
        } else {
          return xhr.status;
        }
      }
      xhr.send();
    }

    _this.addEvents = function () {}
  }
})()
