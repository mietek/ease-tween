"use strict";

var _ = module.exports = {
  easeTween: function (duration, step, callback) {
    _.tween(duration, function (t) {
        return step(_.ease(t));
      },
      callback);
  },

  tween: function (duration, step, callback) {
    var start = Date.now();
    var end = start + duration;
    function loop() {
      var now = Date.now();
      if (now < end) {
        step((now - start) / duration);
        window.requestAnimationFrame(loop);
      } else if (callback) {
        callback();
      }
    }
    window.requestAnimationFrame(loop);
  },

  ease: function (t) {
    return (
      t <= 0 ? 0 :
      t >= 1 ? 1 :
      1.0042954579734844 * Math.exp(
        -6.4041738958415664 * Math.exp(
          -7.2908241330981340 * t)));
  }
};
