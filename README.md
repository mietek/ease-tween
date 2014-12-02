_ease_
======

CSS-style easing in JavaScript.


### Example

```js
var ease = require('ease').ease;
```

See [_ease-scroll_](https://github.com/mietek/ease-scroll/) for more information.


Usage
-----

_ease_ is installed with [Bower](http://bower.io/).

```
$ bower install ease
```


### Documentation

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


About
-----

Made by [Miëtek Bak](https://mietek.io/).  Published under the [MIT X11 license](https://mietek.io/license/).


### Acknowledgments

Thanks to [Robert Penner](http://www.robertpenner.com/easing/) for popularising the use of easing functions.
