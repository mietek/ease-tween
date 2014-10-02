ease
====

CSS-style easing in JavaScript.

Fast.  Approximate.  No dependencies.

Thanks to [Robert Penner](http://www.robertpenner.com/easing/) for popularising the use of easing functions.


Usage
-----

```js
var ease = require('ease').ease;
```

See [ease-scroll](https://github.com/mietek/ease-scroll/) for more information.


### Installation

```sh
bower install ease
```

Requires [Bower](http://bower.io/).


Details
-------

The function is an exponential approximation to `ease`, the default CSS [transition timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), which is a cubic Bézier curve with control points at `(0.25, 0.1)` and `(0.25, 1.0)`.

Coefficients were found with [ZunZun](http://zunzun.com/Equation/2/Simple/Simple%20Equation%2023/), based on [data](https://github.com/mietek/ease/blob/master/data.csv) sampled with [bezier-easing](https://github.com/gre/bezier-easing).

![](https://github.com/mietek/ease/blob/master/figure1.png)

![](https://github.com/mietek/ease/blob/master/figure2.png)

| Absolute error         |                             |
| :----------------------|---------------------------: |
| Minimum                | −7.085130 × 10<sup>−2</sup> |
| Maximum                |  4.759085 × 10<sup>−2</sup> |
| Mean                   |  2.238834 × 10<sup>−4</sup> |
| Standard error of mean |  4.029076 × 10<sup>−3</sup> |
| Median                 |  3.505542 × 10<sup>−3</sup> |
| Variance               |  1.282443 × 10<sup>−3</sup> |
| Standard deviation     |  3.581121 × 10<sup>−2</sup> |
| Skew                   | −5.665190 × 10<sup>−1</sup> |
| Kurtosis               | −7.313037 × 10<sup>−1</sup> |


License
-------

[MIT X11](https://github.com/mietek/license/blob/master/LICENSE.md) © [Miëtek Bak](http://mietek.io/)
