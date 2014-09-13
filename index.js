'use strict';


exports.ease = function (t) {
  if (t <= 0) {
    return 0;
  }
  if (t >= 1) {
    return 1;
  }
  var a =  1.0042954579734844;
  var b = -6.4041738958415664;
  var c = -7.2908241330981340;
  return a * Math.exp(b * Math.exp(c * t));
};
