//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: "compute",
    value: function compute(a, b) {
      var difference = [];
      var tmpA = a.split("");
      var tmpB = b.split("");

      console.log('tmpA: ', tmpA);
      console.log('tmpB: ', tmpB);

      tmpA.forEach(function (e, i) {
        console.log('i: ', i);
        if (tmpA.length !== tmpB.length) {
          throw new Error('DNA strands must be of equal length.');
        }
        if (tmpA[i] !== tmpB[i]) {
          difference.push(tmpA[i]);
          console.log('difference array: ', difference);
          console.log(difference.length);
        }
      });
      return difference.length;
    }
  }]);

  return Hamming;
})();

;

exports["default"] = Hamming;

/*let hamming = New Hamming();
console.log(hamming.compute('A','G'));*/
//http://stackoverflow.com/questions/33232823/javascript-compare-two-objects-and-get-key-value-pair
module.exports = exports["default"];