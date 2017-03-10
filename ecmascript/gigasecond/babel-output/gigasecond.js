//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gigasecond = (function () {
    function Gigasecond(date) {
        _classCallCheck(this, Gigasecond);

        this.date1 = date;
    }

    _createClass(Gigasecond, [{
        key: "date",
        value: function date(date1) {
            /* let date1 = new Date();
             date1.setUTCHours(0,0,0,0);
            const timeD = Math.abs(date2.getTime() - date1.getTime());
            const diffDays = Math.ceil(timeD / (1000 * 3600 * 24)); 
             return diffDays;    
            }*/
            date1 = new Date();
            date1.setUTCHours(0, 0, 0, 0);
            var milliSeconds = Math.pow(date1.getMilliseconds(), 10);
            date1 = date1 + milliSeconds;
        }
    }]);

    return Gigasecond;
})();

exports["default"] = Gigasecond;
module.exports = exports["default"];