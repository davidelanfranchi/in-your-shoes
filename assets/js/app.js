/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/basicscroll/dist/basicScroll.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/basicscroll/dist/basicScroll.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function u(i, c, s) {
    function f(n, t) {
      if (!c[n]) {
        if (!i[n]) {
          var e = "function" == typeof require && require;
          if (!t && e) return require(n, !0);
          if (a) return a(n, !0);
          var o = new Error("Cannot find module '" + n + "'");
          throw o.code = "MODULE_NOT_FOUND", o;
        }

        var r = c[n] = {
          exports: {}
        };
        i[n][0].call(r.exports, function (t) {
          return f(i[n][1][t] || t);
        }, r, r.exports, u, i, c, s);
      }

      return c[n].exports;
    }

    for (var a = "function" == typeof require && require, t = 0; t < s.length; t++) {
      f(s[t]);
    }

    return f;
  }({
    1: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        var n = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((n + 1) * t - n) * .5 : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
      };
    }, {}],
    2: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        var n = 1.70158;
        return t * t * ((n + 1) * t - n);
      };
    }, {}],
    3: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        var n = 1.70158;
        return --t * t * ((n + 1) * t + n) + 1;
      };
    }, {}],
    4: [function (t, n, e) {
      "use strict";

      var o = t("./bounce-out");

      n.exports = function (t) {
        return t < .5 ? .5 * (1 - o(1 - 2 * t)) : .5 * o(2 * t - 1) + .5;
      };
    }, {
      "./bounce-out": 6
    }],
    5: [function (t, n, e) {
      "use strict";

      var o = t("./bounce-out");

      n.exports = function (t) {
        return 1 - o(1 - t);
      };
    }, {
      "./bounce-out": 6
    }],
    6: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        var n = t * t;
        return t < 4 / 11 ? 7.5625 * n : t < 8 / 11 ? 9.075 * n - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * n - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72;
      };
    }, {}],
    7: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      };
    }, {}],
    8: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    }, {}],
    9: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return Math.sqrt(1 - --t * t);
      };
    }, {}],
    10: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1;
      };
    }, {}],
    11: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t * t * t;
      };
    }, {}],
    12: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        var n = t - 1;
        return n * n * n + 1;
      };
    }, {}],
    13: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
      };
    }, {}],
    14: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1));
      };
    }, {}],
    15: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
      };
    }, {}],
    16: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 20 * t - 10) : -.5 * Math.pow(2, 10 - 20 * t) + 1;
      };
    }, {}],
    17: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return 0 === t ? t : Math.pow(2, 10 * (t - 1));
      };
    }, {}],
    18: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return 1 === t ? t : 1 - Math.pow(2, -10 * t);
      };
    }, {}],
    19: [function (t, n, e) {
      "use strict";

      n.exports = {
        backInOut: t("./back-in-out"),
        backIn: t("./back-in"),
        backOut: t("./back-out"),
        bounceInOut: t("./bounce-in-out"),
        bounceIn: t("./bounce-in"),
        bounceOut: t("./bounce-out"),
        circInOut: t("./circ-in-out"),
        circIn: t("./circ-in"),
        circOut: t("./circ-out"),
        cubicInOut: t("./cubic-in-out"),
        cubicIn: t("./cubic-in"),
        cubicOut: t("./cubic-out"),
        elasticInOut: t("./elastic-in-out"),
        elasticIn: t("./elastic-in"),
        elasticOut: t("./elastic-out"),
        expoInOut: t("./expo-in-out"),
        expoIn: t("./expo-in"),
        expoOut: t("./expo-out"),
        linear: t("./linear"),
        quadInOut: t("./quad-in-out"),
        quadIn: t("./quad-in"),
        quadOut: t("./quad-out"),
        quartInOut: t("./quart-in-out"),
        quartIn: t("./quart-in"),
        quartOut: t("./quart-out"),
        quintInOut: t("./quint-in-out"),
        quintIn: t("./quint-in"),
        quintOut: t("./quint-out"),
        sineInOut: t("./sine-in-out"),
        sineIn: t("./sine-in"),
        sineOut: t("./sine-out")
      };
    }, {
      "./back-in": 2,
      "./back-in-out": 1,
      "./back-out": 3,
      "./bounce-in": 5,
      "./bounce-in-out": 4,
      "./bounce-out": 6,
      "./circ-in": 8,
      "./circ-in-out": 7,
      "./circ-out": 9,
      "./cubic-in": 11,
      "./cubic-in-out": 10,
      "./cubic-out": 12,
      "./elastic-in": 14,
      "./elastic-in-out": 13,
      "./elastic-out": 15,
      "./expo-in": 17,
      "./expo-in-out": 16,
      "./expo-out": 18,
      "./linear": 20,
      "./quad-in": 22,
      "./quad-in-out": 21,
      "./quad-out": 23,
      "./quart-in": 25,
      "./quart-in-out": 24,
      "./quart-out": 26,
      "./quint-in": 28,
      "./quint-in-out": 27,
      "./quint-out": 29,
      "./sine-in": 31,
      "./sine-in-out": 30,
      "./sine-out": 32
    }],
    20: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t;
      };
    }, {}],
    21: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
      };
    }, {}],
    22: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t * t;
      };
    }, {}],
    23: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return -t * (t - 2);
      };
    }, {}],
    24: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t < .5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
      };
    }, {}],
    25: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return Math.pow(t, 4);
      };
    }, {}],
    26: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return Math.pow(t - 1, 3) * (1 - t) + 1;
      };
    }, {}],
    27: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
      };
    }, {}],
    28: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return t * t * t * t * t;
      };
    }, {}],
    29: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return --t * t * t * t * t + 1;
      };
    }, {}],
    30: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1);
      };
    }, {}],
    31: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        var n = Math.cos(t * Math.PI * .5);
        return Math.abs(n) < 1e-14 ? 1 : 1 - n;
      };
    }, {}],
    32: [function (t, n, e) {
      "use strict";

      n.exports = function (t) {
        return Math.sin(t * Math.PI / 2);
      };
    }, {}],
    33: [function (t, n, e) {
      "use strict";

      n.exports = function (t, n) {
        n || (n = [0, ""]), t = String(t);
        var e = parseFloat(t, 10);
        return n[0] = e, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
      };
    }, {}],
    34: [function (t, n, e) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.create = void 0;
      var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      },
          o = r(t("parse-unit")),
          i = r(t("eases"));

      function r(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var c,
          s,
          f,
          a = [],
          p = function p() {
        return (document.scrollingElement || document.documentElement).scrollTop;
      },
          l = function l(t) {
        return !1 === isNaN((0, o.default)(t)[0]);
      },
          d = function d(t) {
        var n = (0, o.default)(t);
        return {
          value: n[0],
          unit: n[1]
        };
      },
          m = function m(t) {
        return null !== String(t).match(/^[a-z]+-[a-z]+$/);
      },
          h = function h(t, n) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : p(),
            o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window.innerHeight || window.outerHeight,
            r = n.getBoundingClientRect(),
            u = t.match(/^[a-z]+/)[0],
            i = t.match(/[a-z]+$/)[0],
            c = 0;
        return "top" === i && (c -= 0), "middle" === i && (c -= o / 2), "bottom" === i && (c -= o), "top" === u && (c += r.top + e), "middle" === u && (c += r.top + e + r.height / 2), "bottom" === u && (c += r.top + e + r.height), c + "px";
      },
          b = function b(t) {
        var n,
            e,
            o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : p(),
            s = t.getData(),
            r = s.to.value - s.from.value,
            u = (o - s.from.value) / (r / 100),
            f = Math.min(Math.max(u, 0), 100),
            i = (n = s.direct, e = {
          global: document.documentElement,
          elem: s.elem,
          direct: s.direct
        }, !0 === n ? e.elem : n instanceof HTMLElement == 1 ? e.direct : e.global),
            c = Object.keys(s.props).reduce(function (t, n) {
          var e = s.props[n],
              o = e.from.unit || e.to.unit,
              r = e.from.value - e.to.value,
              u = e.timing(f / 100),
              i = e.from.value - r * u,
              c = Math.round(1e4 * i) / 1e4;
          return t[n] = c + o, t;
        }, {}),
            a = u < 0 || 100 < u;
        return !0 === (0 <= u && u <= 100) && s.inside(t, u, c), !0 === a && s.outside(t, u, c), {
          elem: i,
          props: c
        };
      },
          w = function w(o, r) {
        Object.keys(r).forEach(function (t) {
          return n = o, e = {
            key: t,
            value: r[t]
          }, void n.style.setProperty(e.key, e.value);
          var n, e;
        });
      };

      e.create = function (t) {
        var n = null,
            e = !1,
            o = {
          isActive: function isActive() {
            return e;
          },
          getData: function getData() {
            return n;
          },
          calculate: function calculate() {
            n = function () {
              var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
              if (null == (o = Object.assign({}, o)).inside && (o.inside = function () {}), null == o.outside && (o.outside = function () {}), null == o.direct && (o.direct = !1), null == o.track && (o.track = !0), null == o.props && (o.props = {}), null == o.from) throw new Error("Missing property `from`");
              if (null == o.to) throw new Error("Missing property `to`");
              if ("function" != typeof o.inside) throw new Error("Property `inside` must be undefined or a function");
              if ("function" != typeof o.outside) throw new Error("Property `outside` must be undefined or a function");
              if ("boolean" != typeof o.direct && o.direct instanceof HTMLElement == 0) throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");
              if (!0 === o.direct && null == o.elem) throw new Error("Property `elem` is required when `direct` is true");
              if ("boolean" != typeof o.track) throw new Error("Property `track` must be undefined or a boolean");
              if ("object" !== u(o.props)) throw new Error("Property `props` must be undefined or an object");

              if (null == o.elem) {
                if (!1 === l(o.from)) throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                if (!1 === l(o.to)) throw new Error("Property `to` must be a absolute value when no `elem` has been provided");
              } else !0 === m(o.from) && (o.from = h(o.from, o.elem)), !0 === m(o.to) && (o.to = h(o.to, o.elem));

              return o.from = d(o.from), o.to = d(o.to), o.props = Object.keys(o.props).reduce(function (t, n) {
                var e = Object.assign({}, o.props[n]);
                if (!1 === l(e.from)) throw new Error("Property `from` of prop must be a absolute value");
                if (!1 === l(e.to)) throw new Error("Property `from` of prop must be a absolute value");
                if (e.from = d(e.from), e.to = d(e.to), null == e.timing && (e.timing = i.default.linear), "string" != typeof e.timing && "function" != typeof e.timing) throw new Error("Property `timing` of prop must be undefined, a string or a function");
                if ("string" == typeof e.timing && null == i.default[e.timing]) throw new Error("Unknown timing for property `timing` of prop");
                return "string" == typeof e.timing && (e.timing = i.default[e.timing]), t[n] = e, t;
              }, {}), o;
            }(t);
          },
          update: function update() {
            var t = b(o),
                n = t.elem,
                e = t.props;
            return w(n, e), e;
          },
          start: function start() {
            e = !0;
          },
          stop: function stop() {
            e = !1;
          },
          destroy: function destroy() {
            a[r] = void 0;
          }
        },
            r = a.push(o) - 1;
        return o.calculate(), o;
      };

      !function t(n, e) {
        var o = function o() {
          requestAnimationFrame(function () {
            return t(n, e);
          });
        },
            r = a.filter(function (t) {
          return null != t && t.isActive();
        });

        if (0 === r.length) return o();
        var u = p();
        if (e === u) return o();
        e = u, r.map(function (t) {
          return b(t, u);
        }).forEach(function (t) {
          var n = t.elem,
              e = t.props;
          return w(n, e);
        }), o();
      }(), window.addEventListener("resize", (c = function c() {
        a.filter(function (t) {
          return null != t && t.getData().track;
        }).forEach(function (t) {
          t.calculate(), t.update();
        });
      }, s = 50, f = null, function () {
        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) {
          n[e] = arguments[e];
        }

        clearTimeout(f), f = setTimeout(function () {
          return c.apply(void 0, n);
        }, s);
      }));
    }, {
      eases: 19,
      "parse-unit": 33
    }]
  }, {}, [34])(34);
});

/***/ }),

/***/ "./node_modules/gsap/AttrPlugin.js":
/*!*****************************************!*\
  !*** ./node_modules/gsap/AttrPlugin.js ***!
  \*****************************************/
/*! exports provided: AttrPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return AttrPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttrPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var AttrPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "attr",
  API: 2,
  version: "0.6.1",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween, index) {
    var p, end;

    if (typeof target.setAttribute !== "function") {
      return false;
    }

    for (p in value) {
      end = value[p];

      if (typeof end === "function") {
        end = end(index, target);
      }

      this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);

      this._overwriteProps.push(p);
    }

    return true;
  }
});


/***/ }),

/***/ "./node_modules/gsap/BezierPlugin.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/BezierPlugin.js ***!
  \*******************************************/
/*! exports provided: BezierPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return BezierPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BezierPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


var _RAD2DEG = 180 / Math.PI,
    _r1 = [],
    _r2 = [],
    _r3 = [],
    _corProps = {},
    _globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
    Segment = function Segment(a, b, c, d) {
  if (c === d) {
    //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
    c = d - (d - b) / 1000000;
  }

  if (a === b) {
    //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
    b = a + (c - a) / 1000000;
  }

  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.da = d - a;
  this.ca = c - a;
  this.ba = b - a;
},
    _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
    cubicToQuadratic = function cubicToQuadratic(a, b, c, d) {
  var q1 = {
    a: a
  },
      q2 = {},
      q3 = {},
      q4 = {
    c: d
  },
      mab = (a + b) / 2,
      mbc = (b + c) / 2,
      mcd = (c + d) / 2,
      mabc = (mab + mbc) / 2,
      mbcd = (mbc + mcd) / 2,
      m8 = (mbcd - mabc) / 8;
  q1.b = mab + (a - mab) / 4;
  q2.b = mabc + m8;
  q1.c = q2.a = (q1.b + q2.b) / 2;
  q2.c = q3.a = (mabc + mbcd) / 2;
  q3.b = mbcd - m8;
  q4.b = mcd + (d - mcd) / 4;
  q3.c = q4.a = (q3.b + q4.b) / 2;
  return [q1, q2, q3, q4];
},
    _calculateControlPoints = function _calculateControlPoints(a, curviness, quad, basic, correlate) {
  var l = a.length - 1,
      ii = 0,
      cp1 = a[0].a,
      i,
      p1,
      p2,
      p3,
      seg,
      m1,
      m2,
      mm,
      cp2,
      qb,
      r1,
      r2,
      tl;

  for (i = 0; i < l; i++) {
    seg = a[ii];
    p1 = seg.a;
    p2 = seg.d;
    p3 = a[ii + 1].d;

    if (correlate) {
      r1 = _r1[i];
      r2 = _r2[i];
      tl = (r2 + r1) * curviness * 0.25 / (basic ? 0.5 : _r3[i] || 0.5);
      m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : r1 !== 0 ? tl / r1 : 0);
      m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : r2 !== 0 ? tl / r2 : 0);
      mm = p2 - (m1 + ((m2 - m1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
    } else {
      m1 = p2 - (p2 - p1) * curviness * 0.5;
      m2 = p2 + (p3 - p2) * curviness * 0.5;
      mm = p2 - (m1 + m2) / 2;
    }

    m1 += mm;
    m2 += mm;
    seg.c = cp2 = m1;

    if (i !== 0) {
      seg.b = cp1;
    } else {
      seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
    }

    seg.da = p2 - p1;
    seg.ca = cp2 - p1;
    seg.ba = cp1 - p1;

    if (quad) {
      qb = cubicToQuadratic(p1, cp1, cp2, p2);
      a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
      ii += 4;
    } else {
      ii++;
    }

    cp1 = m2;
  }

  seg = a[ii];
  seg.b = cp1;
  seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.

  seg.da = seg.d - seg.a;
  seg.ca = seg.c - seg.a;
  seg.ba = cp1 - seg.a;

  if (quad) {
    qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
    a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
  }
},
    _parseAnchors = function _parseAnchors(values, p, correlate, prepend) {
  var a = [],
      l,
      i,
      p1,
      p2,
      p3,
      tmp;

  if (prepend) {
    values = [prepend].concat(values);
    i = values.length;

    while (--i > -1) {
      if (typeof (tmp = values[i][p]) === "string") if (tmp.charAt(1) === "=") {
        values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
      }
    }
  }

  l = values.length - 2;

  if (l < 0) {
    a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
    return a;
  }

  for (i = 0; i < l; i++) {
    p1 = values[i][p];
    p2 = values[i + 1][p];
    a[i] = new Segment(p1, 0, 0, p2);

    if (correlate) {
      p3 = values[i + 2][p];
      _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
      _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
    }
  }

  a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
  return a;
},
    bezierThrough = function bezierThrough(values, curviness, quadratic, basic, correlate, prepend) {
  var obj = {},
      props = [],
      first = prepend || values[0],
      i,
      p,
      a,
      j,
      r,
      l,
      seamless,
      last;
  correlate = typeof correlate === "string" ? "," + correlate + "," : _correlate;

  if (curviness == null) {
    curviness = 1;
  }

  for (p in values[0]) {
    props.push(p);
  } //check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)


  if (values.length > 1) {
    last = values[values.length - 1];
    seamless = true;
    i = props.length;

    while (--i > -1) {
      p = props[i];

      if (Math.abs(first[p] - last[p]) > 0.05) {
        //build in a tolerance of +/-0.05 to accommodate rounding errors.
        seamless = false;
        break;
      }
    }

    if (seamless) {
      values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens

      if (prepend) {
        values.unshift(prepend);
      }

      values.push(values[1]);
      prepend = values[values.length - 3];
    }
  }

  _r1.length = _r2.length = _r3.length = 0;
  i = props.length;

  while (--i > -1) {
    p = props[i];
    _corProps[p] = correlate.indexOf("," + p + ",") !== -1;
    obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
  }

  i = _r1.length;

  while (--i > -1) {
    _r1[i] = Math.sqrt(_r1[i]);
    _r2[i] = Math.sqrt(_r2[i]);
  }

  if (!basic) {
    i = props.length;

    while (--i > -1) {
      if (_corProps[p]) {
        a = obj[props[i]];
        l = a.length - 1;

        for (j = 0; j < l; j++) {
          r = a[j + 1].da / _r2[j] + a[j].da / _r1[j] || 0;
          _r3[j] = (_r3[j] || 0) + r * r;
        }
      }
    }

    i = _r3.length;

    while (--i > -1) {
      _r3[i] = Math.sqrt(_r3[i]);
    }
  }

  i = props.length;
  j = quadratic ? 4 : 1;

  while (--i > -1) {
    p = props[i];
    a = obj[p];

    _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties


    if (seamless) {
      a.splice(0, j);
      a.splice(a.length - j, j);
    }
  }

  return obj;
},
    _parseBezierData = function _parseBezierData(values, type, prepend) {
  type = type || "soft";
  var obj = {},
      inc = type === "cubic" ? 3 : 2,
      soft = type === "soft",
      props = [],
      a,
      b,
      c,
      d,
      cur,
      i,
      j,
      l,
      p,
      cnt,
      tmp;

  if (soft && prepend) {
    values = [prepend].concat(values);
  }

  if (values == null || values.length < inc + 1) {
    throw "invalid Bezier data";
  }

  for (p in values[0]) {
    props.push(p);
  }

  i = props.length;

  while (--i > -1) {
    p = props[i];
    obj[p] = cur = [];
    cnt = 0;
    l = values.length;

    for (j = 0; j < l; j++) {
      a = prepend == null ? values[j][p] : typeof (tmp = values[j][p]) === "string" && tmp.charAt(1) === "=" ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
      if (soft) if (j > 1) if (j < l - 1) {
        cur[cnt++] = (a + cur[cnt - 2]) / 2;
      }
      cur[cnt++] = a;
    }

    l = cnt - inc + 1;
    cnt = 0;

    for (j = 0; j < l; j += inc) {
      a = cur[j];
      b = cur[j + 1];
      c = cur[j + 2];
      d = inc === 2 ? 0 : cur[j + 3];
      cur[cnt++] = tmp = inc === 3 ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }

    cur.length = cnt;
  }

  return obj;
},
    _addCubicLengths = function _addCubicLengths(a, steps, resolution) {
  var inc = 1 / resolution,
      j = a.length,
      d,
      d1,
      s,
      da,
      ca,
      ba,
      p,
      i,
      inv,
      bez,
      index;

  while (--j > -1) {
    bez = a[j];
    s = bez.a;
    da = bez.d - s;
    ca = bez.c - s;
    ba = bez.b - s;
    d = d1 = 0;

    for (i = 1; i <= resolution; i++) {
      p = inc * i;
      inv = 1 - p;
      d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
      index = j * resolution + i - 1;
      steps[index] = (steps[index] || 0) + d * d;
    }
  }
},
    _parseLengthData = function _parseLengthData(obj, resolution) {
  resolution = resolution >> 0 || 6;
  var a = [],
      lengths = [],
      d = 0,
      total = 0,
      threshold = resolution - 1,
      segments = [],
      curLS = [],
      //current length segments array
  p,
      i,
      l,
      index;

  for (p in obj) {
    _addCubicLengths(obj[p], a, resolution);
  }

  l = a.length;

  for (i = 0; i < l; i++) {
    d += Math.sqrt(a[i]);
    index = i % resolution;
    curLS[index] = d;

    if (index === threshold) {
      total += d;
      index = i / resolution >> 0;
      segments[index] = curLS;
      lengths[index] = total;
      d = 0;
      curLS = [];
    }
  }

  return {
    length: total,
    lengths: lengths,
    segments: segments
  };
},
    BezierPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "bezier",
  priority: -1,
  version: "1.3.8",
  API: 2,
  global: true,
  //gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, vars, tween) {
    this._target = target;

    if (vars instanceof Array) {
      vars = {
        values: vars
      };
    }

    this._func = {};
    this._mod = {};
    this._props = [];
    this._timeRes = vars.timeResolution == null ? 6 : parseInt(vars.timeResolution, 10);
    var values = vars.values || [],
        first = {},
        second = values[0],
        autoRotate = vars.autoRotate || tween.vars.orientToBezier,
        p,
        isFunc,
        i,
        j,
        prepend;
    this._autoRotate = autoRotate ? autoRotate instanceof Array ? autoRotate : [["x", "y", "rotation", autoRotate === true ? 0 : Number(autoRotate) || 0]] : null;

    for (p in second) {
      this._props.push(p);
    }

    i = this._props.length;

    while (--i > -1) {
      p = this._props[i];

      this._overwriteProps.push(p);

      isFunc = this._func[p] = typeof target[p] === "function";
      first[p] = !isFunc ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
      if (!prepend) if (first[p] !== values[0][p]) {
        prepend = first;
      }
    }

    this._beziers = vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft" ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, vars.type === "thruBasic", vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
    this._segCount = this._beziers[p].length;

    if (this._timeRes) {
      var ld = _parseLengthData(this._beziers, this._timeRes);

      this._length = ld.length;
      this._lengths = ld.lengths;
      this._segments = ld.segments;
      this._l1 = this._li = this._s1 = this._si = 0;
      this._l2 = this._lengths[0];
      this._curSeg = this._segments[0];
      this._s2 = this._curSeg[0];
      this._prec = 1 / this._curSeg.length;
    }

    if (autoRotate = this._autoRotate) {
      this._initialRotations = [];

      if (!(autoRotate[0] instanceof Array)) {
        this._autoRotate = autoRotate = [autoRotate];
      }

      i = autoRotate.length;

      while (--i > -1) {
        for (j = 0; j < 3; j++) {
          p = autoRotate[i][j];
          this._func[p] = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)] : false;
        }

        p = autoRotate[i][2];
        this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;

        this._overwriteProps.push(p);
      }
    }

    this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.

    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(v) {
    var segments = this._segCount,
        func = this._func,
        target = this._target,
        notStart = v !== this._startRatio,
        curIndex,
        inv,
        i,
        p,
        b,
        t,
        val,
        l,
        lengths,
        curSeg;

    if (!this._timeRes) {
      curIndex = v < 0 ? 0 : v >= 1 ? segments - 1 : segments * v >> 0;
      t = (v - curIndex * (1 / segments)) * segments;
    } else {
      lengths = this._lengths;
      curSeg = this._curSeg;
      v *= this._length;
      i = this._li; //find the appropriate segment (if the currently cached one isn't correct)

      if (v > this._l2 && i < segments - 1) {
        l = segments - 1;

        while (i < l && (this._l2 = lengths[++i]) <= v) {}

        this._l1 = lengths[i - 1];
        this._li = i;
        this._curSeg = curSeg = this._segments[i];
        this._s2 = curSeg[this._s1 = this._si = 0];
      } else if (v < this._l1 && i > 0) {
        while (i > 0 && (this._l1 = lengths[--i]) >= v) {}

        if (i === 0 && v < this._l1) {
          this._l1 = 0;
        } else {
          i++;
        }

        this._l2 = lengths[i];
        this._li = i;
        this._curSeg = curSeg = this._segments[i];
        this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
        this._s2 = curSeg[this._si];
      }

      curIndex = i; //now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)

      v -= this._l1;
      i = this._si;

      if (v > this._s2 && i < curSeg.length - 1) {
        l = curSeg.length - 1;

        while (i < l && (this._s2 = curSeg[++i]) <= v) {}

        this._s1 = curSeg[i - 1];
        this._si = i;
      } else if (v < this._s1 && i > 0) {
        while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}

        if (i === 0 && v < this._s1) {
          this._s1 = 0;
        } else {
          i++;
        }

        this._s2 = curSeg[i];
        this._si = i;
      }

      t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
    }

    inv = 1 - t;
    i = this._props.length;

    while (--i > -1) {
      p = this._props[i];
      b = this._beziers[p][curIndex];
      val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;

      if (this._mod[p]) {
        val = this._mod[p](val, target);
      }

      if (func[p]) {
        target[p](val);
      } else {
        target[p] = val;
      }
    }

    if (this._autoRotate) {
      var ar = this._autoRotate,
          b2,
          x1,
          y1,
          x2,
          y2,
          add,
          conv;
      i = ar.length;

      while (--i > -1) {
        p = ar[i][2];
        add = ar[i][3] || 0;
        conv = ar[i][4] === true ? 1 : _RAD2DEG;
        b = this._beziers[ar[i][0]];
        b2 = this._beziers[ar[i][1]];

        if (b && b2) {
          //in case one of the properties got overwritten.
          b = b[curIndex];
          b2 = b2[curIndex];
          x1 = b.a + (b.b - b.a) * t;
          x2 = b.b + (b.c - b.b) * t;
          x1 += (x2 - x1) * t;
          x2 += (b.c + (b.d - b.c) * t - x2) * t;
          y1 = b2.a + (b2.b - b2.a) * t;
          y2 = b2.b + (b2.c - b2.b) * t;
          y1 += (y2 - y1) * t;
          y2 += (b2.c + (b2.d - b2.c) * t - y2) * t;
          val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

          if (this._mod[p]) {
            val = this._mod[p](val, target); //for modProps
          }

          if (func[p]) {
            target[p](val);
          } else {
            target[p] = val;
          }
        }
      }
    }
  }
}),
    p = BezierPlugin.prototype;

BezierPlugin.bezierThrough = bezierThrough;
BezierPlugin.cubicToQuadratic = cubicToQuadratic;
BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite

BezierPlugin.quadraticToCubic = function (a, b, c) {
  return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
};

BezierPlugin._cssRegister = function () {
  var CSSPlugin = _globals.CSSPlugin;

  if (!CSSPlugin) {
    return;
  }

  var _internals = CSSPlugin._internals,
      _parseToProxy = _internals._parseToProxy,
      _setPluginRatio = _internals._setPluginRatio,
      CSSPropTween = _internals.CSSPropTween;

  _internals._registerComplexSpecialProp("bezier", {
    parser: function parser(t, e, prop, cssp, pt, plugin) {
      if (e instanceof Array) {
        e = {
          values: e
        };
      }

      plugin = new BezierPlugin();
      var values = e.values,
          l = values.length - 1,
          pluginValues = [],
          v = {},
          i,
          p,
          data;

      if (l < 0) {
        return pt;
      }

      for (i = 0; i <= l; i++) {
        data = _parseToProxy(t, values[i], cssp, pt, plugin, l !== i);
        pluginValues[i] = data.end;
      }

      for (p in e) {
        v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
      }

      v.values = pluginValues;
      pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
      pt.data = data;
      pt.plugin = plugin;
      pt.setRatio = _setPluginRatio;

      if (v.autoRotate === 0) {
        v.autoRotate = true;
      }

      if (v.autoRotate && !(v.autoRotate instanceof Array)) {
        i = v.autoRotate === true ? 0 : Number(v.autoRotate);
        v.autoRotate = data.end.left != null ? [["left", "top", "rotation", i, false]] : data.end.x != null ? [["x", "y", "rotation", i, false]] : false;
      }

      if (v.autoRotate) {
        if (!cssp._transform) {
          cssp._enableTransforms(false);
        }

        data.autoRotate = cssp._target._gsTransform;
        data.proxy.rotation = data.autoRotate.rotation || 0;

        cssp._overwriteProps.push("rotation");
      }

      plugin._onInitTween(data.proxy, v, cssp._tween);

      return pt;
    }
  });
};

p._mod = function (lookup) {
  var op = this._overwriteProps,
      i = op.length,
      val;

  while (--i > -1) {
    val = lookup[op[i]];

    if (val && typeof val === "function") {
      this._mod[op[i]] = val;
    }
  }
};

p._kill = function (lookup) {
  var a = this._props,
      p,
      i;

  for (p in this._beziers) {
    if (p in lookup) {
      delete this._beziers[p];
      delete this._func[p];
      i = a.length;

      while (--i > -1) {
        if (a[i] === p) {
          a.splice(i, 1);
        }
      }
    }
  }

  a = this._autoRotate;

  if (a) {
    i = a.length;

    while (--i > -1) {
      if (lookup[a[i][2]]) {
        a.splice(i, 1);
      }
    }
  }

  return this._super._kill.call(this, lookup);
};



/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/*! exports provided: CSSPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return CSSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function () {
  /** @constructor **/
  var CSSPlugin = function CSSPlugin() {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].call(this, "css");
    this._overwriteProps.length = 0;
    this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
  },
      _globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
      _hasPriority,
      //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
  _suffixMap,
      //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
  _cs,
      //computed style (we store this in a shared variable to conserve memory and make minification tighter
  _overwriteProps,
      //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
  _specialProps = {},
      p = CSSPlugin.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]("css");

  p.constructor = CSSPlugin;
  CSSPlugin.version = "2.0.2";
  CSSPlugin.API = 2;
  CSSPlugin.defaultTransformPerspective = 0;
  CSSPlugin.defaultSkewType = "compensated";
  CSSPlugin.defaultSmoothOrigin = true;
  p = "px"; //we'll reuse the "p" variable to keep file size down

  CSSPlugin.suffixMap = {
    top: p,
    right: p,
    bottom: p,
    left: p,
    width: p,
    height: p,
    fontSize: p,
    padding: p,
    margin: p,
    perspective: p,
    lineHeight: ""
  };

  var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
      _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
      _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
      //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
  _NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
      //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
  _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
      _opacityExp = /opacity *= *([^)]*)/i,
      _opacityValExp = /opacity:([^;]*)/i,
      _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
      _rgbhslExp = /^(rgb|hsl)/,
      _capsExp = /([A-Z])/g,
      _camelExp = /-([a-z])/gi,
      _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
      //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
  _camelFunc = function _camelFunc(s, g) {
    return g.toUpperCase();
  },
      _horizExp = /(?:Left|Right|Width)/i,
      _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
      _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
      _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
      //finds any commas that are not within parenthesis
  _complexExp = /[\s,\(]/i,
      //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
  _DEG2RAD = Math.PI / 180,
      _RAD2DEG = 180 / Math.PI,
      _forcePT = {},
      _dummyElement = {
    style: {}
  },
      _doc = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document || {
    createElement: function createElement() {
      return _dummyElement;
    }
  },
      _createElement = function _createElement(type, ns) {
    return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
  },
      _tempDiv = _createElement("div"),
      _tempImg = _createElement("img"),
      _internals = CSSPlugin._internals = {
    _specialProps: _specialProps
  },
      //provides a hook to a few internal methods that we need to access from inside other plugins
  _agent = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator || {}).userAgent || "",
      _autoRound,
      _reqSafariFix,
      //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).
  _isSafari,
      _isFirefox,
      //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
  _isSafariLT6,
      //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
  _ieVers,
      _supportsOpacity = function () {
    //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
    var i = _agent.indexOf("Android"),
        a = _createElement("a");

    _isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3);
    _isSafariLT6 = _isSafari && parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6;
    _isFirefox = _agent.indexOf("Firefox") !== -1;

    if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) {
      _ieVers = parseFloat(RegExp.$1);
    }

    if (!a) {
      return false;
    }

    a.style.cssText = "top:1px;opacity:.55;";
    return /^0.55/.test(a.style.opacity);
  }(),
      _getIEOpacity = function _getIEOpacity(v) {
    return _opacityExp.test(typeof v === "string" ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
  },
      _log = function _log(s) {
    //for logging messages, but in a way that won't throw errors in old versions of IE.
    if (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].console) {
      console.log(s);
    }
  },
      _target,
      //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
  _index,
      //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
  _prefixCSS = "",
      //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
  _prefix = "",
      //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".
  // @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
  _checkPropPrefix = function _checkPropPrefix(p, e) {
    e = e || _tempDiv;
    var s = e.style,
        a,
        i;

    if (s[p] !== undefined) {
      return p;
    }

    p = p.charAt(0).toUpperCase() + p.substr(1);
    a = ["O", "Moz", "ms", "Ms", "Webkit"];
    i = 5;

    while (--i > -1 && s[a[i] + p] === undefined) {}

    if (i >= 0) {
      _prefix = i === 3 ? "ms" : a[i];
      _prefixCSS = "-" + _prefix.toLowerCase() + "-";
      return _prefix + p;
    }

    return null;
  },
      _getComputedStyle = (typeof window !== "undefined" ? window : _doc.defaultView || {
    getComputedStyle: function getComputedStyle() {}
  }).getComputedStyle,

  /**
   * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
   * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
   *
   * @param {!Object} t Target element whose style property you want to query
   * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
   * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
   * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
   * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
   * @return {?string} The current property value
   */
  _getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
    var rv;
    if (!_supportsOpacity) if (p === "opacity") {
      //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
      return _getIEOpacity(t);
    }

    if (!calc && t.style[p]) {
      rv = t.style[p];
    } else if (cs = cs || _getComputedStyle(t)) {
      rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
    } else if (t.currentStyle) {
      rv = t.currentStyle[p];
    }

    return dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto") ? dflt : rv;
  },

  /**
   * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
   * @param {!Object} t Target element
   * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
   * @param {!number} v Value
   * @param {string=} sfx Suffix (like "px" or "%" or "em")
   * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
   * @return {number} value in pixels
   */
  _convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
    if (sfx === "px" || !sfx && p !== "lineHeight") {
      return v;
    }

    if (sfx === "auto" || !v) {
      return 0;
    }

    var horiz = _horizExp.test(p),
        node = t,
        style = _tempDiv.style,
        neg = v < 0,
        precise = v === 1,
        pix,
        cache,
        time;

    if (neg) {
      v = -v;
    }

    if (precise) {
      v *= 100;
    }

    if (p === "lineHeight" && !sfx) {
      //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
      cache = _getComputedStyle(t).lineHeight;
      t.style.lineHeight = v;
      pix = parseFloat(_getComputedStyle(t).lineHeight);
      t.style.lineHeight = cache;
    } else if (sfx === "%" && p.indexOf("border") !== -1) {
      pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
    } else {
      style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";

      if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
        node = t.parentNode || _doc.body;

        if (_getStyle(node, "display").indexOf("flex") !== -1) {
          //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
          style.position = "absolute";
        }

        cache = node._gsCache;
        time = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;

        if (cache && horiz && cache.time === time) {
          //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
          return cache.width * v / 100;
        }

        style[horiz ? "width" : "height"] = v + sfx;
      } else {
        style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
      }

      node.appendChild(_tempDiv);
      pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
      node.removeChild(_tempDiv);

      if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
        cache = node._gsCache = node._gsCache || {};
        cache.time = time;
        cache.width = pix / v * 100;
      }

      if (pix === 0 && !recurse) {
        pix = _convertToPixels(t, p, v, sfx, true);
      }
    }

    if (precise) {
      pix /= 100;
    }

    return neg ? -pix : pix;
  },
      _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
    //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
    if (_getStyle(t, "position", cs) !== "absolute") {
      return 0;
    }

    var dim = p === "left" ? "Left" : "Top",
        v = _getStyle(t, "margin" + dim, cs);

    return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
  },
      // @private returns at object containing ALL of the style properties in camelCase and their associated values.
  _getAllStyles = function _getAllStyles(t, cs) {
    var s = {},
        i,
        tr,
        p;

    if (cs = cs || _getComputedStyle(t, null)) {
      if (i = cs.length) {
        while (--i > -1) {
          p = cs[i];

          if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
            //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
            s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
          }
        }
      } else {
        //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
        for (i in cs) {
          if (i.indexOf("Transform") === -1 || _transformProp === i) {
            //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
            s[i] = cs[i];
          }
        }
      }
    } else if (cs = t.currentStyle || t.style) {
      for (i in cs) {
        if (typeof i === "string" && s[i] === undefined) {
          s[i.replace(_camelExp, _camelFunc)] = cs[i];
        }
      }
    }

    if (!_supportsOpacity) {
      s.opacity = _getIEOpacity(t);
    }

    tr = _getTransform(t, cs, false);
    s.rotation = tr.rotation;
    s.skewX = tr.skewX;
    s.scaleX = tr.scaleX;
    s.scaleY = tr.scaleY;
    s.x = tr.x;
    s.y = tr.y;

    if (_supports3D) {
      s.z = tr.z;
      s.rotationX = tr.rotationX;
      s.rotationY = tr.rotationY;
      s.scaleZ = tr.scaleZ;
    }

    if (s.filters) {
      delete s.filters;
    }

    return s;
  },
      // @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
  _cssDif = function _cssDif(t, s1, s2, vars, forceLookup) {
    var difs = {},
        style = t.style,
        val,
        p,
        mpt;

    for (p in s2) {
      if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) if (p.indexOf("Origin") === -1) if (typeof val === "number" || typeof val === "string") {
        difs[p] = val === "auto" && (p === "left" || p === "top") ? _calculateOffset(t, p) : (val === "" || val === "auto" || val === "none") && typeof s1[p] === "string" && s1[p].replace(_NaNExp, "") !== "" ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.

        if (style[p] !== undefined) {
          //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
          mpt = new MiniPropTween(style, p, style[p], mpt);
        }
      }
    }

    if (vars) {
      for (p in vars) {
        //copy properties (except className)
        if (p !== "className") {
          difs[p] = vars[p];
        }
      }
    }

    return {
      difs: difs,
      firstMPT: mpt
    };
  },
      _dimensions = {
    width: ["Left", "Right"],
    height: ["Top", "Bottom"]
  },
      _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],

  /**
   * @private Gets the width or height of an element
   * @param {!Object} t Target element
   * @param {!string} p Property name ("width" or "height")
   * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
   * @return {number} Dimension (in pixels)
   */
  _getDimension = function _getDimension(t, p, cs) {
    if ((t.nodeName + "").toLowerCase() === "svg") {
      //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
      return (cs || _getComputedStyle(t))[p] || 0;
    } else if (t.getCTM && _isSVG(t)) {
      return t.getBBox()[p] || 0;
    }

    var v = parseFloat(p === "width" ? t.offsetWidth : t.offsetHeight),
        a = _dimensions[p],
        i = a.length;
    cs = cs || _getComputedStyle(t, null);

    while (--i > -1) {
      v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
      v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
    }

    return v;
  },
      // @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
  _parsePosition = function _parsePosition(v, recObj) {
    if (v === "contain" || v === "auto" || v === "auto auto") {
      //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
      return v + " ";
    }

    if (v == null || v === "") {
      v = "0 0";
    }

    var a = v.split(" "),
        x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
        y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1],
        i;

    if (a.length > 3 && !recObj) {
      //multiple positions
      a = v.split(", ").join(",").split(",");
      v = [];

      for (i = 0; i < a.length; i++) {
        v.push(_parsePosition(a[i]));
      }

      return v.join(",");
    }

    if (y == null) {
      y = x === "center" ? "50%" : "0";
    } else if (y === "center") {
      y = "50%";
    }

    if (x === "center" || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) {
      //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
      x = "50%";
    }

    v = x + " " + y + (a.length > 2 ? " " + a[2] : "");

    if (recObj) {
      recObj.oxp = x.indexOf("%") !== -1;
      recObj.oyp = y.indexOf("%") !== -1;
      recObj.oxr = x.charAt(1) === "=";
      recObj.oyr = y.charAt(1) === "=";
      recObj.ox = parseFloat(x.replace(_NaNExp, ""));
      recObj.oy = parseFloat(y.replace(_NaNExp, ""));
      recObj.v = v;
    }

    return recObj || v;
  },

  /**
   * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
   * @param {(number|string)} e End value which is typically a string, but could be a number
   * @param {(number|string)} b Beginning value which is typically a string but could be a number
   * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
   */
  _parseChange = function _parseChange(e, b) {
    if (typeof e === "function") {
      e = e(_index, _target);
    }

    return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
  },

  /**
   * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
   * @param {Object} v Value to be parsed
   * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
   * @return {number} Parsed value
   */
  _parseVal = function _parseVal(v, d) {
    if (typeof v === "function") {
      v = v(_index, _target);
    }

    var isRelative = typeof v === "string" && v.charAt(1) === "=";

    if (typeof v === "string" && v.charAt(v.length - 2) === "v") {
      //convert vw and vh into px-equivalents.
      v = (isRelative ? v.substr(0, 2) : 0) + window["inner" + (v.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100);
    }

    return v == null ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
  },

  /**
   * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
   * @param {Object} v Value to be parsed
   * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
   * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
   * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
   * @return {number} parsed angle in radians
   */
  _parseAngle = function _parseAngle(v, d, p, directionalEnd) {
    var min = 0.000001,
        cap,
        split,
        dif,
        result,
        isRelative;

    if (typeof v === "function") {
      v = v(_index, _target);
    }

    if (v == null) {
      result = d;
    } else if (typeof v === "number") {
      result = v;
    } else {
      cap = 360;
      split = v.split("_");
      isRelative = v.charAt(1) === "=";
      dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d);

      if (split.length) {
        if (directionalEnd) {
          directionalEnd[p] = d + dif;
        }

        if (v.indexOf("short") !== -1) {
          dif = dif % cap;

          if (dif !== dif % (cap / 2)) {
            dif = dif < 0 ? dif + cap : dif - cap;
          }
        }

        if (v.indexOf("_cw") !== -1 && dif < 0) {
          dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
        } else if (v.indexOf("ccw") !== -1 && dif > 0) {
          dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
        }
      }

      result = d + dif;
    }

    if (result < min && result > -min) {
      result = 0;
    }

    return result;
  },
      _colorLookup = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    fuchsia: [255, 0, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
  },

  /**
   * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
   * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
   * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
   * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
   */
  _parseColor = CSSPlugin.parseColor = function (v, toHSL) {
    var a, r, g, b, h, s, l, max, min, d, wasHSL;

    if (!v) {
      a = _colorLookup.black;
    } else if (typeof v === "number") {
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else {
      if (v.charAt(v.length - 1) === ",") {
        //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length === 4) {
          //for shorthand like #9F0
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b;
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & 255, v & 255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_numExp);

        if (!toHSL) {
          h = Number(a[0]) % 360 / 360;
          s = Number(a[1]) / 100;
          l = Number(a[2]) / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;

          if (a.length > 3) {
            a[3] = Number(a[3]);
          }

          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (v.indexOf("=") !== -1) {
          //if relative values are found, just return the raw strings with the relative prefixes in place.
          return v.match(_relNumExp);
        }
      } else {
        a = v.match(_numExp) || _colorLookup.transparent;
      }

      a[0] = Number(a[0]);
      a[1] = Number(a[1]);
      a[2] = Number(a[2]);

      if (a.length > 3) {
        a[3] = Number(a[3]);
      }
    }

    if (toHSL && !wasHSL) {
      r = a[0] / 255;
      g = a[1] / 255;
      b = a[2] / 255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = h + 0.5 | 0;
      a[1] = s * 100 + 0.5 | 0;
      a[2] = l * 100 + 0.5 | 0;
    }

    return a;
  },
      _formatColors = function _formatColors(s, toHSL) {
    var colors = s.match(_colorExp) || [],
        charIndex = 0,
        parsed = "",
        i,
        color,
        temp;

    if (!colors.length) {
      return s;
    }

    for (i = 0; i < colors.length; i++) {
      color = colors[i];
      temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
      charIndex += temp.length + color.length;
      color = _parseColor(color, toHSL);

      if (color.length === 3) {
        color.push(1);
      }

      parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
    }

    return parsed + s.substr(charIndex);
  },
      _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.


  for (p in _colorLookup) {
    _colorExp += "|" + p + "\\b";
  }

  _colorExp = new RegExp(_colorExp + ")", "gi");

  CSSPlugin.colorStringFilter = function (a) {
    var combined = a[0] + " " + a[1],
        toHSL;

    if (_colorExp.test(combined)) {
      toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
      a[0] = _formatColors(a[0], toHSL);
      a[1] = _formatColors(a[1], toHSL);
    }

    _colorExp.lastIndex = 0;
  };

  if (!_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter) {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter = CSSPlugin.colorStringFilter;
  }
  /**
   * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
   * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
   * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
   * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
   * @return {Function} formatter function
   */


  var _getFormatter = function _getFormatter(dflt, clr, collapsible, multi) {
    if (dflt == null) {
      return function (v) {
        return v;
      };
    }

    var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
        dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
        pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
        sfx = dflt.charAt(dflt.length - 1) === ")" ? ")" : "",
        delim = dflt.indexOf(" ") !== -1 ? " " : ",",
        numVals = dVals.length,
        dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "",
        _formatter2;

    if (!numVals) {
      return function (v) {
        return v;
      };
    }

    if (clr) {
      _formatter2 = function formatter(v) {
        var color, vals, i, a;

        if (typeof v === "number") {
          v += dSfx;
        } else if (multi && _commasOutsideParenExp.test(v)) {
          a = v.replace(_commasOutsideParenExp, "|").split("|");

          for (i = 0; i < a.length; i++) {
            a[i] = _formatter2(a[i]);
          }

          return a.join(",");
        }

        color = (v.match(_colorExp) || [dColor])[0];
        vals = v.split(color).join("").match(_valuesExp) || [];
        i = vals.length;

        if (numVals > i--) {
          while (++i < numVals) {
            vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
          }
        }

        return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
      };

      return _formatter2;
    }

    _formatter2 = function _formatter(v) {
      var vals, a, i;

      if (typeof v === "number") {
        v += dSfx;
      } else if (multi && _commasOutsideParenExp.test(v)) {
        a = v.replace(_commasOutsideParenExp, "|").split("|");

        for (i = 0; i < a.length; i++) {
          a[i] = _formatter2(a[i]);
        }

        return a.join(",");
      }

      vals = v.match(_valuesExp) || [];
      i = vals.length;

      if (numVals > i--) {
        while (++i < numVals) {
          vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
        }
      }

      return pfx + vals.join(delim) + sfx;
    };

    return _formatter2;
  },

  /**
   * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
   * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
   * @return {Function} a formatter function
   */
  _getEdgeParser = function _getEdgeParser(props) {
    props = props.split(",");
    return function (t, e, p, cssp, pt, plugin, vars) {
      var a = (e + "").split(" "),
          i;
      vars = {};

      for (i = 0; i < 4; i++) {
        vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
      }

      return cssp.parse(t, vars, pt, plugin);
    };
  },
      // @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
  _setPluginRatio = _internals._setPluginRatio = function (v) {
    this.plugin.setRatio(v);
    var d = this.data,
        proxy = d.proxy,
        mpt = d.firstMPT,
        min = 0.000001,
        val,
        pt,
        i,
        str,
        p;

    while (mpt) {
      val = proxy[mpt.v];

      if (mpt.r) {
        val = mpt.r(val);
      } else if (val < min && val > -min) {
        val = 0;
      }

      mpt.t[mpt.p] = val;
      mpt = mpt._next;
    }

    if (d.autoRotate) {
      d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
    } //at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.


    if (v === 1 || v === 0) {
      mpt = d.firstMPT;
      p = v === 1 ? "e" : "b";

      while (mpt) {
        pt = mpt.t;

        if (!pt.type) {
          pt[p] = pt.s + pt.xs0;
        } else if (pt.type === 1) {
          str = pt.xs0 + pt.s + pt.xs1;

          for (i = 1; i < pt.l; i++) {
            str += pt["xn" + i] + pt["xs" + (i + 1)];
          }

          pt[p] = str;
        }

        mpt = mpt._next;
      }
    }
  },

  /**
   * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
   * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
   * @param {!string} p property name
   * @param {(number|string|object)} v value
   * @param {MiniPropTween=} next next MiniPropTween in the linked list
   * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
   */
  MiniPropTween = function MiniPropTween(t, p, v, next, r) {
    this.t = t;
    this.p = p;
    this.v = v;
    this.r = r;

    if (next) {
      next._prev = this;
      this._next = next;
    }
  },

  /**
   * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
   * This method returns an object that has the following properties:
   *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
   *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
   *  - firstMPT: the first MiniPropTween in the linked list
   *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
   * @param {!Object} t target object to be tweened
   * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
   * @param {!CSSPlugin} cssp The CSSPlugin instance
   * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
   * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
   * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
   * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
   */
  _parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
    var bpt = pt,
        start = {},
        end = {},
        transform = cssp._transform,
        oldForce = _forcePT,
        i,
        p,
        xp,
        mpt,
        firstPT;
    cssp._transform = null;
    _forcePT = vars;
    pt = firstPT = cssp.parse(t, vars, pt, plugin);
    _forcePT = oldForce; //break off from the linked list so the new ones are isolated.

    if (shallow) {
      cssp._transform = transform;

      if (bpt) {
        bpt._prev = null;

        if (bpt._prev) {
          bpt._prev._next = null;
        }
      }
    }

    while (pt && pt !== bpt) {
      if (pt.type <= 1) {
        p = pt.p;
        end[p] = pt.s + pt.c;
        start[p] = pt.s;

        if (!shallow) {
          mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
          pt.c = 0;
        }

        if (pt.type === 1) {
          i = pt.l;

          while (--i > 0) {
            xp = "xn" + i;
            p = pt.p + "_" + xp;
            end[p] = pt.data[xp];
            start[p] = pt[xp];

            if (!shallow) {
              mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
            }
          }
        }
      }

      pt = pt._next;
    }

    return {
      proxy: start,
      end: end,
      firstMPT: mpt,
      pt: firstPT
    };
  },

  /**
   * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
   * CSSPropTweens have the following optional properties as well (not defined through the constructor):
   *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
   *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
   *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
   *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
   *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
   * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
   * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
   * @param {number} s Starting numeric value
   * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
   * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
   * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
   * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
   * @param {boolean=} r If true, the value(s) should be rounded
   * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
   * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
   * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
   */
  CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
    this.t = t; //target

    this.p = p; //property

    this.s = s; //starting value

    this.c = c; //change value

    this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)

    if (!(t instanceof CSSPropTween)) {
      _overwriteProps.push(this.n);
    }

    this.r = !r ? r : typeof r === "function" ? r : Math.round; //round (boolean)

    this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work

    if (pr) {
      this.pr = pr;
      _hasPriority = true;
    }

    this.b = b === undefined ? s : b;
    this.e = e === undefined ? s + c : e;

    if (next) {
      this._next = next;
      next._prev = this;
    }
  },
      _addNonTweeningNumericPT = function _addNonTweeningNumericPT(target, prop, start, end, next, overwriteProp) {
    //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
    var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
    pt.b = start;
    pt.e = pt.xs0 = end;
    return pt;
  },

  /**
   * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
   * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
   * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
   * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
   *
   * @param {!Object} t Target whose property will be tweened
   * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
   * @param {string} b Beginning value
   * @param {string} e Ending value
   * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
   * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
   * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
   * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
   * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
   * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
   * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
   */
  _parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
    //DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
    b = b || dflt || "";

    if (typeof e === "function") {
      e = e(_index, _target);
    }

    pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
    e += ""; //ensures it's a string

    if (clrs && _colorExp.test(e + b)) {
      //if colors are found, normalize the formatting to rgba() or hsla().
      e = [b, e];
      CSSPlugin.colorStringFilter(e);
      b = e[0];
      e = e[1];
    }

    var ba = b.split(", ").join(",").split(" "),
        //beginning array
    ea = e.split(", ").join(",").split(" "),
        //ending array
    l = ba.length,
        autoRound = _autoRound !== false,
        i,
        xi,
        ni,
        bv,
        ev,
        bnums,
        enums,
        bn,
        hasAlpha,
        temp,
        cv,
        str,
        useHSL;

    if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
      if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) {
        //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
        ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
        ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
      } else {
        ba = ba.join(" ").split(",").join(", ").split(" ");
        ea = ea.join(" ").split(",").join(", ").split(" ");
      }

      l = ba.length;
    }

    if (l !== ea.length) {
      //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
      ba = (dflt || "").split(" ");
      l = ba.length;
    }

    pt.plugin = plugin;
    pt.setRatio = setRatio;
    _colorExp.lastIndex = 0;

    for (i = 0; i < l; i++) {
      bv = ba[i];
      ev = ea[i] + "";
      bn = parseFloat(bv); //if the value begins with a number (most common). It's fine if it has a suffix like px

      if (bn || bn === 0) {
        pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1 ? Math.round : false, true); //if the value is a color
      } else if (clrs && _colorExp.test(bv)) {
        str = ev.indexOf(")") + 1;
        str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.

        useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity;
        temp = ev; //original string value so we can look for any prefix later.

        bv = _parseColor(bv, useHSL);
        ev = _parseColor(ev, useHSL);
        hasAlpha = bv.length + ev.length > 6;

        if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
          //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
          pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
          pt.e = pt.e.split(ea[i]).join("transparent");
        } else {
          if (!_supportsOpacity) {
            //old versions of IE don't support rgba().
            hasAlpha = false;
          }

          if (useHSL) {
            pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, false);
          } else {
            pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true).appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, Math.round);
          }

          if (hasAlpha) {
            bv = bv.length < 4 ? 1 : bv[3];
            pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
          }
        }

        _colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.
      } else {
        bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array
        //if no number is found, treat it as a non-tweening value and just append the string to the current xs.

        if (!bnums) {
          pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev; //loop through all the numbers that are found and construct the extra values on the pt.
        } else {
          enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5

          if (!enums || enums.length !== bnums.length) {
            //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
            return pt;
          }

          ni = 0;

          for (xi = 0; xi < bnums.length; xi++) {
            cv = bnums[xi];
            temp = bv.indexOf(cv, ni);
            pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && bv.substr(temp + cv.length, 2) === "px" ? Math.round : false, xi === 0);
            ni = temp + cv.length;
          }

          pt["xs" + pt.l] += bv.substr(ni);
        }
      }
    } //if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.


    if (e.indexOf("=") !== -1) if (pt.data) {
      str = pt.xs0 + pt.data.s;

      for (i = 1; i < pt.l; i++) {
        str += pt["xs" + i] + pt.data["xn" + i];
      }

      pt.e = str + pt["xs" + i];
    }

    if (!pt.l) {
      pt.type = -1;
      pt.xs0 = pt.e;
    }

    return pt.xfirst || pt;
  },
      i = 9;

  p = CSSPropTween.prototype;
  p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.

  while (--i > 0) {
    p["xn" + i] = 0;
    p["xs" + i] = "";
  }

  p.xs0 = "";
  p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
  /**
   * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
   * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
   * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
   * @param {string=} pfx Prefix (if any)
   * @param {!number} s Starting value
   * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
   * @param {string=} sfx Suffix (if any)
   * @param {boolean=} r Round (if true).
   * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
   * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
   */

  p.appendXtra = function (pfx, s, c, sfx, r, pad) {
    var pt = this,
        l = pt.l;
    pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "";
    if (!c) if (l !== 0 && !pt.plugin) {
      //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
      pt["xs" + l] += s + (sfx || "");
      return pt;
    }
    pt.l++;
    pt.type = pt.setRatio ? 2 : 1;
    pt["xs" + pt.l] = sfx || "";

    if (l > 0) {
      pt.data["xn" + l] = s + c;
      pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)

      pt["xn" + l] = s;

      if (!pt.plugin) {
        pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
        pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
      }

      return pt;
    }

    pt.data = {
      s: s + c
    };
    pt.rxp = {};
    pt.s = s;
    pt.c = c;
    pt.r = r;
    return pt;
  };
  /**
   * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
   * @param {!string} p Property name (like "boxShadow" or "throwProps")
   * @param {Object=} options An object containing any of the following configuration options:
   *                      - defaultValue: the default value
   *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
   *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
   *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
   *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
   *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
   *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
   *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
   *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
   */


  var SpecialProp = function SpecialProp(p, options) {
    options = options || {};
    this.p = options.prefix ? _checkPropPrefix(p) || p : p;
    _specialProps[p] = _specialProps[this.p] = this;
    this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);

    if (options.parser) {
      this.parse = options.parser;
    }

    this.clrs = options.color;
    this.multi = options.multi;
    this.keyword = options.keyword;
    this.dflt = options.defaultValue;
    this.pr = options.priority || 0;
  },
      //shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
  _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
    if (_typeof(options) !== "object") {
      options = {
        parser: defaults
      }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
    }

    var a = p.split(","),
        d = options.defaultValue,
        i,
        temp;
    defaults = defaults || [d];

    for (i = 0; i < a.length; i++) {
      options.prefix = i === 0 && options.prefix;
      options.defaultValue = defaults[i] || d;
      temp = new SpecialProp(a[i], options);
    }
  },
      //creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
  _registerPluginProp = _internals._registerPluginProp = function (p) {
    if (!_specialProps[p]) {
      var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";

      _registerComplexSpecialProp(p, {
        parser: function parser(t, e, p, cssp, pt, plugin, vars) {
          var pluginClass = _globals.com.greensock.plugins[pluginName];

          if (!pluginClass) {
            _log("Error: " + pluginName + " js file not loaded.");

            return pt;
          }

          pluginClass._cssRegister();

          return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
        }
      });
    }
  };

  p = SpecialProp.prototype;
  /**
   * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
   * @param {!Object} t target element
   * @param {(string|number|object)} b beginning value
   * @param {(string|number|object)} e ending (destination) value
   * @param {CSSPropTween=} pt next CSSPropTween in the linked list
   * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
   * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
   * @return {CSSPropTween=} First CSSPropTween in the linked list
   */

  p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
    var kwd = this.keyword,
        i,
        ba,
        ea,
        l,
        bi,
        ei; //if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)

    if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
      ba = b.replace(_commasOutsideParenExp, "|").split("|");
      ea = e.replace(_commasOutsideParenExp, "|").split("|");
    } else if (kwd) {
      ba = [b];
      ea = [e];
    }

    if (ea) {
      l = ea.length > ba.length ? ea.length : ba.length;

      for (i = 0; i < l; i++) {
        b = ba[i] = ba[i] || this.dflt;
        e = ea[i] = ea[i] || this.dflt;

        if (kwd) {
          bi = b.indexOf(kwd);
          ei = e.indexOf(kwd);

          if (bi !== ei) {
            if (ei === -1) {
              //if the keyword isn't in the end value, remove it from the beginning one.
              ba[i] = ba[i].split(kwd).join("");
            } else if (bi === -1) {
              //if the keyword isn't in the beginning, add it.
              ba[i] += " " + kwd;
            }
          }
        }
      }

      b = ba.join(", ");
      e = ea.join(", ");
    }

    return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
  };
  /**
   * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
   * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
   * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
   * @param {!Object} t Target object whose property is being tweened
   * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
   * @param {!string} p Property name
   * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
   * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
   * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
   * @param {Object=} vars Original vars object that contains the data for parsing.
   * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
   */


  p.parse = function (t, e, p, cssp, pt, plugin, vars) {
    return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
  };
  /**
   * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
   *  1) Target object whose property should be tweened (typically a DOM element)
   *  2) The end/destination value (could be a string, number, object, or whatever you want)
   *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
   *
   * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
   *
   * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
   *      var start = target.style.width;
   *      return function(ratio) {
   *              target.style.width = (start + value * ratio) + "px";
   *              console.log("set width to " + target.style.width);
   *          }
   * }, 0);
   *
   * Then, when I do this tween, it will trigger my special property:
   *
   * TweenLite.to(element, 1, {css:{myCustomProp:100}});
   *
   * In the example, of course, we're just changing the width, but you can do anything you want.
   *
   * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
   * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
   * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
   */


  CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
    _registerComplexSpecialProp(name, {
      parser: function parser(t, e, p, cssp, pt, plugin, vars) {
        var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
        rv.plugin = plugin;
        rv.setRatio = onInitTween(t, e, cssp._tween, p);
        return rv;
      },
      priority: priority
    });
  }; //transform-related methods and properties


  CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).

  var _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
      _transformProp = _checkPropPrefix("transform"),
      //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
  _transformPropCSS = _prefixCSS + "transform",
      _transformOriginProp = _checkPropPrefix("transformOrigin"),
      _supports3D = _checkPropPrefix("perspective") !== null,
      Transform = _internals.Transform = function () {
    this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
    this.force3D = CSSPlugin.defaultForce3D === false || !_supports3D ? false : CSSPlugin.defaultForce3D || "auto";
  },
      _SVGElement = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SVGElement,
      _useSVGTransformAttr,
      //Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.
  _createSVG = function _createSVG(type, container, attributes) {
    var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
        reg = /([a-z])([A-Z])/g,
        p;

    for (p in attributes) {
      element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
    }

    container.appendChild(element);
    return element;
  },
      _docElement = _doc.documentElement || {},
      _forceSVGTransformAttr = function () {
    //IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
    var force = _ieVers || /Android/i.test(_agent) && !_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].chrome,
        svg,
        rect,
        width;

    if (_doc.createElementNS && !force) {
      //IE8 and earlier doesn't support SVG anyway
      svg = _createSVG("svg", _docElement);
      rect = _createSVG("rect", svg, {
        width: 100,
        height: 50,
        x: 100
      });
      width = rect.getBoundingClientRect().width;
      rect.style[_transformOriginProp] = "50% 50%";
      rect.style[_transformProp] = "scaleX(0.5)";
      force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).

      _docElement.removeChild(svg);
    }

    return force;
  }(),
      _parseSVGOrigin = function _parseSVGOrigin(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
    var tm = e._gsTransform,
        m = _getMatrix(e, true),
        v,
        x,
        y,
        xOrigin,
        yOrigin,
        a,
        b,
        c,
        d,
        tx,
        ty,
        determinant,
        xOriginOld,
        yOriginOld;

    if (tm) {
      xOriginOld = tm.xOrigin; //record the original values before we alter them.

      yOriginOld = tm.yOrigin;
    }

    if (!absolute || (v = absolute.split(" ")).length < 2) {
      b = e.getBBox();

      if (b.x === 0 && b.y === 0 && b.width + b.height === 0) {
        //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
        b = {
          x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
          y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
          width: 0,
          height: 0
        };
      }

      local = _parsePosition(local).split(" ");
      v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
    }

    decoratee.xOrigin = xOrigin = parseFloat(v[0]);
    decoratee.yOrigin = yOrigin = parseFloat(v[1]);

    if (absolute && m !== _identity2DMatrix) {
      //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
      a = m[0];
      b = m[1];
      c = m[2];
      d = m[3];
      tx = m[4];
      ty = m[5];
      determinant = a * d - b * c;

      if (determinant) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = decoratee.xOrigin = v[0] = x;
        yOrigin = decoratee.yOrigin = v[1] = y;
      }
    }

    if (tm) {
      //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
      if (skipRecord) {
        decoratee.xOffset = tm.xOffset;
        decoratee.yOffset = tm.yOffset;
        tm = decoratee;
      }

      if (smoothOrigin || smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false) {
        x = xOrigin - xOriginOld;
        y = yOrigin - yOriginOld; //originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
        //tm.x -= x - (x * m[0] + y * m[2]);
        //tm.y -= y - (x * m[1] + y * m[3]);

        tm.xOffset += x * m[0] + y * m[2] - x;
        tm.yOffset += x * m[1] + y * m[3] - y;
      } else {
        tm.xOffset = tm.yOffset = 0;
      }
    }

    if (!skipRecord) {
      e.setAttribute("data-svg-origin", v.join(" "));
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._originalGetBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._originalGetBBox) {
      bbox = this._originalGetBBox();
    }

    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getBBox = function _getBBox(e) {
    try {
      return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
      return _getBBoxHack.call(e, true);
    }
  },
      _isSVG = function _isSVG(e) {
    //reports if the element is an SVG on which getBBox() actually works
    return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _getMatrix = function _getMatrix(e, force2D) {
    var tm = e._gsTransform || new Transform(),
        rnd = 100000,
        style = e.style,
        isDefault,
        s,
        m,
        n,
        dec,
        none;

    if (_transformProp) {
      s = _getStyle(e, _transformPropCSS, null, true);
    } else if (e.currentStyle) {
      //for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
      s = e.currentStyle.filter.match(_ieGetMatrixExp);
      s = s && s.length === 4 ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : "";
    }

    isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";

    if (_transformProp && ((none = !_getComputedStyle(e) || _getComputedStyle(e).display === "none") || !e.parentNode)) {
      //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
      if (none) {
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        n = style.display;
        style.display = "block";
      }

      if (!e.parentNode) {
        dec = 1; //flag

        _docElement.appendChild(e);
      }

      s = _getStyle(e, _transformPropCSS, null, true);
      isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";

      if (n) {
        style.display = n;
      } else if (none) {
        _removeProp(style, "display");
      }

      if (dec) {
        _docElement.removeChild(e);
      }
    }

    if (tm.svg || e.getCTM && _isSVG(e)) {
      if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
        //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
        s = style[_transformProp];
        isDefault = 0;
      }

      m = e.getAttribute("transform");

      if (isDefault && m) {
        m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

        s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
        isDefault = 0;
      }
    }

    if (isDefault) {
      return _identity2DMatrix;
    } //split the matrix values out into an array (m for matrix)


    m = (s || "").match(_numExp) || [];
    i = m.length;

    while (--i > -1) {
      n = Number(m[i]);
      m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -0.5 : 0.5) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
    }

    return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
  },

  /**
   * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
   * @param {!Object} t target element
   * @param {Object=} cs computed style object (optional)
   * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
   * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
   * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
   */
  _getTransform = _internals.getTransform = function (t, cs, rec, parse) {
    if (t._gsTransform && rec && !parse) {
      return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
    }

    var tm = rec ? t._gsTransform || new Transform() : new Transform(),
        invX = tm.scaleX < 0,
        //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
    min = 0.00002,
        rnd = 100000,
        zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
        defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
        m,
        i,
        scaleX,
        scaleY,
        rotation,
        skewX;
    tm.svg = !!(t.getCTM && _isSVG(t));

    if (tm.svg) {
      _parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));

      _useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
    }

    m = _getMatrix(t);

    if (m !== _identity2DMatrix) {
      if (m.length === 16) {
        //we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
        var a11 = m[0],
            a21 = m[1],
            a31 = m[2],
            a41 = m[3],
            a12 = m[4],
            a22 = m[5],
            a32 = m[6],
            a42 = m[7],
            a13 = m[8],
            a23 = m[9],
            a33 = m[10],
            a14 = m[12],
            a24 = m[13],
            a34 = m[14],
            a43 = m[11],
            angle = Math.atan2(a32, a33),
            t1,
            t2,
            t3,
            t4,
            cos,
            sin; //we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari

        if (tm.zOrigin) {
          a34 = -tm.zOrigin;
          a14 = a13 * a34 - m[12];
          a24 = a23 * a34 - m[13];
          a34 = a33 * a34 + tm.zOrigin - m[14];
        } //note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.


        tm.rotationX = angle * _RAD2DEG; //rotationX

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        } //rotationY


        angle = Math.atan2(-a31, a33);
        tm.rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a11 * cos - a13 * sin;
          t2 = a21 * cos - a23 * sin;
          t3 = a31 * cos - a33 * sin;
          a23 = a21 * sin + a23 * cos;
          a33 = a31 * sin + a33 * cos;
          a43 = a41 * sin + a43 * cos;
          a11 = t1;
          a21 = t2;
          a31 = t3;
        } //rotationZ


        angle = Math.atan2(a21, a11);
        tm.rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a11 * cos + a21 * sin;
          t2 = a12 * cos + a22 * sin;
          t3 = a13 * cos + a23 * sin;
          a21 = a21 * cos - a11 * sin;
          a22 = a22 * cos - a12 * sin;
          a23 = a23 * cos - a13 * sin;
          a11 = t1;
          a12 = t2;
          a13 = t3;
        }

        if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
          //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
          tm.rotationX = tm.rotation = 0;
          tm.rotationY = 180 - tm.rotationY;
        } //skewX


        angle = Math.atan2(a12, a22); //scales

        tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5 | 0) / rnd;
        tm.scaleY = (Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5 | 0) / rnd;
        tm.scaleZ = (Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5 | 0) / rnd;
        a11 /= tm.scaleX;
        a12 /= tm.scaleY;
        a21 /= tm.scaleX;
        a22 /= tm.scaleY;

        if (Math.abs(angle) > min) {
          tm.skewX = angle * _RAD2DEG;
          a12 = 0; //unskews

          if (tm.skewType !== "simple") {
            tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
          }
        } else {
          tm.skewX = 0;
        }
        /* //for testing purposes
        var transform = "matrix3d(",
        	comma = ",",
        	zero = "0";
        a13 /= tm.scaleZ;
        a23 /= tm.scaleZ;
        a31 /= tm.scaleX;
        a32 /= tm.scaleY;
        a33 /= tm.scaleZ;
        transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
        transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
        transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
        transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
        transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
        console.log(transform);
        document.querySelector(".test").style[_transformProp] = transform;
        */


        tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        tm.x = a14;
        tm.y = a24;
        tm.z = a34;

        if (tm.svg) {
          tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
          tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
        }
      } else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
        //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
        var k = m.length >= 6,
            a = k ? m[0] : 1,
            b = m[1] || 0,
            c = m[2] || 0,
            d = k ? m[3] : 1;
        tm.x = m[4] || 0;
        tm.y = m[5] || 0;
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

        skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
        tm.scaleX = scaleX;
        tm.scaleY = scaleY;
        tm.rotation = rotation;
        tm.skewX = skewX;

        if (_supports3D) {
          tm.rotationX = tm.rotationY = tm.z = 0;
          tm.perspective = defaultTransformPerspective;
          tm.scaleZ = 1;
        }

        if (tm.svg) {
          tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
          tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
        }
      }

      if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
        if (invX) {
          tm.scaleX *= -1;
          tm.skewX += tm.rotation <= 0 ? 180 : -180;
          tm.rotation += tm.rotation <= 0 ? 180 : -180;
        } else {
          tm.scaleY *= -1;
          tm.skewX += tm.skewX <= 0 ? 180 : -180;
        }
      }

      tm.zOrigin = zOrigin; //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.

      for (i in tm) {
        if (tm[i] < min) if (tm[i] > -min) {
          tm[i] = 0;
        }
      }
    } //DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);


    if (rec) {
      t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)

      if (tm.svg) {
        //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
        if (_useSVGTransformAttr && t.style[_transformProp]) {
          _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function () {
            //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
            _removeProp(t.style, _transformProp);
          });
        } else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
          _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function () {
            t.removeAttribute("transform");
          });
        }
      }
    }

    return tm;
  },
      //for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
  _setIETransformRatio = function _setIETransformRatio(v) {
    var t = this.data,
        //refers to the element's _gsTransform object
    ang = -t.rotation * _DEG2RAD,
        skew = ang + t.skewX * _DEG2RAD,
        rnd = 100000,
        a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
        b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
        c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
        d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
        style = this.t.style,
        cs = this.t.currentStyle,
        filters,
        val;

    if (!cs) {
      return;
    }

    val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)

    b = -c;
    c = -val;
    filters = cs.filter;
    style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight

    var w = this.t.offsetWidth,
        h = this.t.offsetHeight,
        clip = cs.position !== "absolute",
        m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
        ox = t.x + w * t.xPercent / 100,
        oy = t.y + h * t.yPercent / 100,
        dx,
        dy; //if transformOrigin is being used, adjust the offset x and y

    if (t.ox != null) {
      dx = (t.oxp ? w * t.ox * 0.01 : t.ox) - w / 2;
      dy = (t.oyp ? h * t.oy * 0.01 : t.oy) - h / 2;
      ox += dx - (dx * a + dy * b);
      oy += dy - (dx * c + dy * d);
    }

    if (!clip) {
      m += ", sizingMethod='auto expand')";
    } else {
      dx = w / 2;
      dy = h / 2; //translate to ensure that transformations occur around the correct origin (default is center).

      m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
    }

    if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
      style.filter = filters.replace(_ieSetMatrixExp, m);
    } else {
      style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
    } //at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.


    if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf( true && filters.indexOf("Alpha")) === -1) {
      style.removeAttribute("filter");
    } //we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).

    if (!clip) {
      var mult = _ieVers < 8 ? 1 : -1,
          //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
      marg,
          prop,
          dif;
      dx = t.ieOffsetX || 0;
      dy = t.ieOffsetY || 0;
      t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
      t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);

      for (i = 0; i < 4; i++) {
        prop = _margins[i];
        marg = cs[prop]; //we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)

        val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;

        if (val !== t[prop]) {
          dif = i < 2 ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
        } else {
          dif = i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY;
        }

        style[prop] = (t[prop] = Math.round(val - dif * (i === 0 || i === 2 ? 1 : mult))) + "px";
      }
    }
  },

  /* translates a super small decimal to a string WITHOUT scientific notation
  _safeDecimal = function(n) {
  	var s = (n < 0 ? -n : n) + "",
  		a = s.split("e-");
  	return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
  },
  */
  _setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
    var t = this.data,
        //refers to the element's _gsTransform object
    style = this.t.style,
        angle = t.rotation,
        rotationX = t.rotationX,
        rotationY = t.rotationY,
        sx = t.scaleX,
        sy = t.scaleY,
        sz = t.scaleZ,
        x = t.x,
        y = t.y,
        z = t.z,
        isSVG = t.svg,
        perspective = t.perspective,
        force3D = t.force3D,
        skewY = t.skewY,
        skewX = t.skewX,
        t1,
        a11,
        a12,
        a13,
        a21,
        a22,
        a23,
        a31,
        a32,
        a33,
        a41,
        a42,
        a43,
        zOrigin,
        min,
        cos,
        sin,
        t2,
        transform,
        comma,
        zero,
        skew,
        rnd;

    if (skewY) {
      //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
      skewX += skewY;
      angle += skewY;
    } //check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)


    if (((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1 || _useSVGTransformAttr && isSVG || !_supports3D) {
      //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.
      //2D
      if (angle || skewX || isSVG) {
        angle *= _DEG2RAD;
        skew = skewX * _DEG2RAD;
        rnd = 100000;
        a11 = Math.cos(angle) * sx;
        a21 = Math.sin(angle) * sx;
        a12 = Math.sin(angle - skew) * -sy;
        a22 = Math.cos(angle - skew) * sy;

        if (skew && t.skewType === "simple") {
          //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
          t1 = Math.tan(skew - skewY * _DEG2RAD);
          t1 = Math.sqrt(1 + t1 * t1);
          a12 *= t1;
          a22 *= t1;

          if (skewY) {
            t1 = Math.tan(skewY * _DEG2RAD);
            t1 = Math.sqrt(1 + t1 * t1);
            a11 *= t1;
            a21 *= t1;
          }
        }

        if (isSVG) {
          x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
          y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;

          if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
            //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
            min = this.t.getBBox();
            x += t.xPercent * 0.01 * min.width;
            y += t.yPercent * 0.01 * min.height;
          }

          min = 0.000001;
          if (x < min) if (x > -min) {
            x = 0;
          }
          if (y < min) if (y > -min) {
            y = 0;
          }
        }

        transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")";

        if (isSVG && _useSVGTransformAttr) {
          this.t.setAttribute("transform", "matrix(" + transform);
        } else {
          //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
          style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
        }
      } else {
        style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
      }

      return;
    }

    if (_isFirefox) {
      //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
      min = 0.0001;

      if (sx < min && sx > -min) {
        sx = sz = 0.00002;
      }

      if (sy < min && sy > -min) {
        sy = sz = 0.00002;
      }

      if (perspective && !t.z && !t.rotationX && !t.rotationY) {
        //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
        perspective = 0;
      }
    }

    if (angle || skewX) {
      angle *= _DEG2RAD;
      cos = a11 = Math.cos(angle);
      sin = a21 = Math.sin(angle);

      if (skewX) {
        angle -= skewX * _DEG2RAD;
        cos = Math.cos(angle);
        sin = Math.sin(angle);

        if (t.skewType === "simple") {
          //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
          t1 = Math.tan((skewX - skewY) * _DEG2RAD);
          t1 = Math.sqrt(1 + t1 * t1);
          cos *= t1;
          sin *= t1;

          if (t.skewY) {
            t1 = Math.tan(skewY * _DEG2RAD);
            t1 = Math.sqrt(1 + t1 * t1);
            a11 *= t1;
            a21 *= t1;
          }
        }
      }

      a12 = -sin;
      a22 = cos;
    } else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
      //if we're only translating and/or 2D scaling, this is faster...
      style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (sx !== 1 || sy !== 1 ? " scale(" + sx + "," + sy + ")" : "");
      return;
    } else {
      a11 = a22 = 1;
      a12 = a21 = 0;
    } // KEY  INDEX   AFFECTS a[row][column]
    // a11  0       rotation, rotationY, scaleX
    // a21  1       rotation, rotationY, scaleX
    // a31  2       rotationY, scaleX
    // a41  3       rotationY, scaleX
    // a12  4       rotation, skewX, rotationX, scaleY
    // a22  5       rotation, skewX, rotationX, scaleY
    // a32  6       rotationX, scaleY
    // a42  7       rotationX, scaleY
    // a13  8       rotationY, rotationX, scaleZ
    // a23  9       rotationY, rotationX, scaleZ
    // a33  10      rotationY, rotationX, scaleZ
    // a43  11      rotationY, rotationX, perspective, scaleZ
    // a14  12      x, zOrigin, svgOrigin
    // a24  13      y, zOrigin, svgOrigin
    // a34  14      z, zOrigin
    // a44  15
    // rotation: Math.atan2(a21, a11)
    // rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
    // rotationX: Math.atan2(a32, a33)


    a33 = 1;
    a13 = a23 = a31 = a32 = a41 = a42 = 0;
    a43 = perspective ? -1 / perspective : 0;
    zOrigin = t.zOrigin;
    min = 0.000001; //threshold below which browsers use scientific notation which won't work.

    comma = ",";
    zero = "0";
    angle = rotationY * _DEG2RAD;

    if (angle) {
      cos = Math.cos(angle);
      sin = Math.sin(angle);
      a31 = -sin;
      a41 = a43 * -sin;
      a13 = a11 * sin;
      a23 = a21 * sin;
      a33 = cos;
      a43 *= cos;
      a11 *= cos;
      a21 *= cos;
    }

    angle = rotationX * _DEG2RAD;

    if (angle) {
      cos = Math.cos(angle);
      sin = Math.sin(angle);
      t1 = a12 * cos + a13 * sin;
      t2 = a22 * cos + a23 * sin;
      a32 = a33 * sin;
      a42 = a43 * sin;
      a13 = a12 * -sin + a13 * cos;
      a23 = a22 * -sin + a23 * cos;
      a33 = a33 * cos;
      a43 = a43 * cos;
      a12 = t1;
      a22 = t2;
    }

    if (sz !== 1) {
      a13 *= sz;
      a23 *= sz;
      a33 *= sz;
      a43 *= sz;
    }

    if (sy !== 1) {
      a12 *= sy;
      a22 *= sy;
      a32 *= sy;
      a42 *= sy;
    }

    if (sx !== 1) {
      a11 *= sx;
      a21 *= sx;
      a31 *= sx;
      a41 *= sx;
    }

    if (zOrigin || isSVG) {
      if (zOrigin) {
        x += a13 * -zOrigin;
        y += a23 * -zOrigin;
        z += a33 * -zOrigin + zOrigin;
      }

      if (isSVG) {
        //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
        x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
        y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
      }

      if (x < min && x > -min) {
        x = zero;
      }

      if (y < min && y > -min) {
        y = zero;
      }

      if (z < min && z > -min) {
        z = 0; //don't use string because we calculate perspective later and need the number.
      }
    } //optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:


    transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(";
    transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31);
    transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22);

    if (rotationX || rotationY || sz !== 1) {
      //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
      transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13);
      transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma;
    } else {
      transform += ",0,0,0,0,1,0,";
    }

    transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")";
    style[_transformProp] = transform;
  };

  p = Transform.prototype;
  p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
  p.scaleX = p.scaleY = p.scaleZ = 1;

  _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
    parser: function parser(t, e, parsingProp, cssp, pt, plugin, vars) {
      if (cssp._lastParsedTransform === vars) {
        return pt;
      } //only need to parse the transform once, and only if the browser supports it.


      cssp._lastParsedTransform = vars;
      var scaleFunc = vars.scale && typeof vars.scale === "function" ? vars.scale : 0,
          //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
      swapFunc;

      if (typeof vars[parsingProp] === "function") {
        //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
        swapFunc = vars[parsingProp];
        vars[parsingProp] = e;
      }

      if (scaleFunc) {
        vars.scale = scaleFunc(_index, t);
      }

      var originalGSTransform = t._gsTransform,
          style = t.style,
          min = 0.000001,
          i = _transformProps.length,
          v = vars,
          endRotations = {},
          transformOriginString = "transformOrigin",
          m1 = _getTransform(t, _cs, true, v.parseTransform),
          orig = v.transform && (typeof v.transform === "function" ? v.transform(_index, _target) : v.transform),
          m2,
          copy,
          has3D,
          hasChange,
          dr,
          x,
          y,
          matrix,
          p;

      m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
      cssp._transform = m1;

      if ("rotationZ" in v) {
        v.rotation = v.rotationZ;
      }

      if (orig && typeof orig === "string" && _transformProp) {
        //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
        copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.

        copy[_transformProp] = orig;
        copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.

        copy.position = "absolute";

        if (orig.indexOf("%") !== -1) {
          //%-based translations will fail unless we set the width/height to match the original target...
          copy.width = _getStyle(t, "width");
          copy.height = _getStyle(t, "height");
        }

        _doc.body.appendChild(_tempDiv);

        m2 = _getTransform(_tempDiv, null, false);

        if (m1.skewType === "simple") {
          //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
          m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
        }

        if (m1.svg) {
          //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
          x = m1.xOrigin;
          y = m1.yOrigin;
          m2.x -= m1.xOffset;
          m2.y -= m1.yOffset;

          if (v.transformOrigin || v.svgOrigin) {
            //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
            orig = {};

            _parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);

            x = orig.xOrigin;
            y = orig.yOrigin;
            m2.x -= orig.xOffset - m1.xOffset;
            m2.y -= orig.yOffset - m1.yOffset;
          }

          if (x || y) {
            matrix = _getMatrix(_tempDiv, true);
            m2.x -= x - (x * matrix[0] + y * matrix[2]);
            m2.y -= y - (x * matrix[1] + y * matrix[3]);
          }
        }

        _doc.body.removeChild(_tempDiv);

        if (!m2.perspective) {
          m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
        }

        if (v.xPercent != null) {
          m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
        }

        if (v.yPercent != null) {
          m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
        }
      } else if (_typeof(v) === "object") {
        //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
        m2 = {
          scaleX: _parseVal(v.scaleX != null ? v.scaleX : v.scale, m1.scaleX),
          scaleY: _parseVal(v.scaleY != null ? v.scaleY : v.scale, m1.scaleY),
          scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
          x: _parseVal(v.x, m1.x),
          y: _parseVal(v.y, m1.y),
          z: _parseVal(v.z, m1.z),
          xPercent: _parseVal(v.xPercent, m1.xPercent),
          yPercent: _parseVal(v.yPercent, m1.yPercent),
          perspective: _parseVal(v.transformPerspective, m1.perspective)
        };
        dr = v.directionalRotation;

        if (dr != null) {
          if (_typeof(dr) === "object") {
            for (copy in dr) {
              v[copy] = dr[copy];
            }
          } else {
            v.rotation = dr;
          }
        }

        if (typeof v.x === "string" && v.x.indexOf("%") !== -1) {
          m2.x = 0;
          m2.xPercent = _parseVal(v.x, m1.xPercent);
        }

        if (typeof v.y === "string" && v.y.indexOf("%") !== -1) {
          m2.y = 0;
          m2.yPercent = _parseVal(v.y, m1.yPercent);
        }

        m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);

        if (_supports3D) {
          m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
          m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
        }

        m2.skewX = _parseAngle(v.skewX, m1.skewX);
        m2.skewY = _parseAngle(v.skewY, m1.skewY);
      }

      if (_supports3D && v.force3D != null) {
        m1.force3D = v.force3D;
        hasChange = true;
      }

      has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;

      if (!has3D && v.scale != null) {
        m2.scaleZ = 1; //no need to tween scaleZ.
      }

      while (--i > -1) {
        p = _transformProps[i];
        orig = m2[p] - m1[p];

        if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
          hasChange = true;
          pt = new CSSPropTween(m1, p, m1[p], orig, pt);

          if (p in endRotations) {
            pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
          }

          pt.xs0 = 0; //ensures the value stays numeric in setRatio()

          pt.plugin = plugin;

          cssp._overwriteProps.push(pt.n);
        }
      }

      orig = v.transformOrigin;

      if (m1.svg && (orig || v.svgOrigin)) {
        x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin

        y = m1.yOffset;

        _parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);

        pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.

        pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);

        if (x !== m1.xOffset || y !== m1.yOffset) {
          pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString);
          pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString);
        }

        orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
      }

      if (orig || _supports3D && has3D && m1.zOrigin) {
        //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
        if (_transformProp) {
          hasChange = true;
          p = _transformOriginProp;
          orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors

          pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
          pt.b = style[p];
          pt.plugin = plugin;

          if (_supports3D) {
            copy = m1.zOrigin;
            orig = orig.split(" ");
            m1.zOrigin = (orig.length > 2 && !(copy !== 0 && orig[2] === "0px") ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.

            pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!

            pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)

            pt.b = copy;
            pt.xs0 = pt.e = m1.zOrigin;
          } else {
            pt.xs0 = pt.e = orig;
          } //for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).

        } else {
          _parsePosition(orig + "", m1);
        }
      }

      if (hasChange) {
        cssp._transformType = !(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
      }

      if (swapFunc) {
        vars[parsingProp] = swapFunc;
      }

      if (scaleFunc) {
        vars.scale = scaleFunc;
      }

      return pt;
    },
    prefix: true
  });

  _registerComplexSpecialProp("boxShadow", {
    defaultValue: "0px 0px 0px 0px #999",
    prefix: true,
    color: true,
    multi: true,
    keyword: "inset"
  });

  _registerComplexSpecialProp("borderRadius", {
    defaultValue: "0px",
    parser: function parser(t, e, p, cssp, pt, plugin) {
      e = this.format(e);
      var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
          style = t.style,
          ea1,
          i,
          es2,
          bs2,
          bs,
          es,
          bn,
          en,
          w,
          h,
          esfx,
          bsfx,
          rel,
          hn,
          vn,
          em;
      w = parseFloat(t.offsetWidth);
      h = parseFloat(t.offsetHeight);
      ea1 = e.split(" ");

      for (i = 0; i < props.length; i++) {
        //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
        if (this.p.indexOf("border")) {
          //older browsers used a prefix
          props[i] = _checkPropPrefix(props[i]);
        }

        bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");

        if (bs.indexOf(" ") !== -1) {
          bs2 = bs.split(" ");
          bs = bs2[0];
          bs2 = bs2[1];
        }

        es = es2 = ea1[i];
        bn = parseFloat(bs);
        bsfx = bs.substr((bn + "").length);
        rel = es.charAt(1) === "=";

        if (rel) {
          en = parseInt(es.charAt(0) + "1", 10);
          es = es.substr(2);
          en *= parseFloat(es);
          esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
        } else {
          en = parseFloat(es);
          esfx = es.substr((en + "").length);
        }

        if (esfx === "") {
          esfx = _suffixMap[p] || bsfx;
        }

        if (esfx !== bsfx) {
          hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.

          vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number

          if (esfx === "%") {
            bs = hn / w * 100 + "%";
            bs2 = vn / h * 100 + "%";
          } else if (esfx === "em") {
            em = _convertToPixels(t, "borderLeft", 1, "em");
            bs = hn / em + "em";
            bs2 = vn / em + "em";
          } else {
            bs = hn + "px";
            bs2 = vn + "px";
          }

          if (rel) {
            es = parseFloat(bs) + en + esfx;
            es2 = parseFloat(bs2) + en + esfx;
          }
        }

        pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
      }

      return pt;
    },
    prefix: true,
    formatter: _getFormatter("0px 0px 0px 0px", false, true)
  });

  _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
    defaultValue: "0px",
    parser: function parser(t, e, p, cssp, pt, plugin) {
      return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
    },
    prefix: true,
    formatter: _getFormatter("0px 0px", false, true)
  });

  _registerComplexSpecialProp("backgroundPosition", {
    defaultValue: "0 0",
    parser: function parser(t, e, p, cssp, pt, plugin) {
      var bp = "background-position",
          cs = _cs || _getComputedStyle(t, null),
          bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
          //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
      es = this.format(e),
          ba,
          ea,
          i,
          pct,
          overlap,
          src;

      if (bs.indexOf("%") !== -1 !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
        src = _getStyle(t, "backgroundImage").replace(_urlExp, "");

        if (src && src !== "none") {
          ba = bs.split(" ");
          ea = es.split(" ");

          _tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height


          i = 2;

          while (--i > -1) {
            bs = ba[i];
            pct = bs.indexOf("%") !== -1;

            if (pct !== (ea[i].indexOf("%") !== -1)) {
              overlap = i === 0 ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
              ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
            }
          }

          bs = ba.join(" ");
        }
      }

      return this.parseComplex(t.style, bs, es, pt, plugin);
    },
    formatter: _parsePosition
  });

  _registerComplexSpecialProp("backgroundSize", {
    defaultValue: "0 0",
    formatter: function formatter(v) {
      v += ""; //ensure it's a string

      return v.substr(0, 2) === "co" ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
    }
  });

  _registerComplexSpecialProp("perspective", {
    defaultValue: "0px",
    prefix: true
  });

  _registerComplexSpecialProp("perspectiveOrigin", {
    defaultValue: "50% 50%",
    prefix: true
  });

  _registerComplexSpecialProp("transformStyle", {
    prefix: true
  });

  _registerComplexSpecialProp("backfaceVisibility", {
    prefix: true
  });

  _registerComplexSpecialProp("userSelect", {
    prefix: true
  });

  _registerComplexSpecialProp("margin", {
    parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")
  });

  _registerComplexSpecialProp("padding", {
    parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")
  });

  _registerComplexSpecialProp("clip", {
    defaultValue: "rect(0px,0px,0px,0px)",
    parser: function parser(t, e, p, cssp, pt, plugin) {
      var b, cs, delim;

      if (_ieVers < 9) {
        //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
        cs = t.currentStyle;
        delim = _ieVers < 8 ? " " : ",";
        b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
        e = this.format(e).split(",").join(delim);
      } else {
        b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
        e = this.format(e);
      }

      return this.parseComplex(t.style, b, e, pt, plugin);
    }
  });

  _registerComplexSpecialProp("textShadow", {
    defaultValue: "0px 0px 0px #999",
    color: true,
    multi: true
  });

  _registerComplexSpecialProp("autoRound,strictUnits", {
    parser: function parser(t, e, p, cssp, pt) {
      return pt;
    }
  }); //just so that we can ignore these properties (not tween them)


  _registerComplexSpecialProp("border", {
    defaultValue: "0px solid #000",
    parser: function parser(t, e, p, cssp, pt, plugin) {
      var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
          end = this.format(e).split(" "),
          esfx = end[0].replace(_suffixExp, "");

      if (esfx !== "px") {
        //if we're animating to a non-px value, we need to convert the beginning width to that unit.
        bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx;
      }

      return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
    },
    color: true,
    formatter: function formatter(v) {
      var a = v.split(" ");
      return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
    }
  });

  _registerComplexSpecialProp("borderWidth", {
    parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
  }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).


  _registerComplexSpecialProp("float,cssFloat,styleFloat", {
    parser: function parser(t, e, p, cssp, pt, plugin) {
      var s = t.style,
          prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
      return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
    }
  }); //opacity-related


  var _setIEOpacityRatio = function _setIEOpacityRatio(v) {
    var t = this.t,
        //refers to the element's style property
    filters = t.filter || _getStyle(this.data, "filter") || "",
        val = this.s + this.c * v | 0,
        skip;

    if (val === 100) {
      //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
      if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
        t.removeAttribute("filter");
        skip = !_getStyle(this.data, "filter"); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
      } else {
        t.filter = filters.replace(_alphaFilterExp, "");
        skip = true;
      }
    }

    if (!skip) {
      if (this.xn1) {
        t.filter = filters = filters || "alpha(opacity=" + val + ")"; //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
      }

      if (filters.indexOf("pacity") === -1) {
        //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
        if (val !== 0 || !this.xn1) {
          //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
          t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
        }
      } else {
        t.filter = filters.replace(_opacityExp, "opacity=" + val);
      }
    }
  };

  _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
    defaultValue: "1",
    parser: function parser(t, e, p, cssp, pt, plugin) {
      var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
          style = t.style,
          isAutoAlpha = p === "autoAlpha";

      if (typeof e === "string" && e.charAt(1) === "=") {
        e = (e.charAt(0) === "-" ? -1 : 1) * parseFloat(e.substr(2)) + b;
      }

      if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
        //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
        b = 0;
      }

      if (_supportsOpacity) {
        pt = new CSSPropTween(style, "opacity", b, e - b, pt);
      } else {
        pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
        pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.

        style.zoom = 1; //helps correct an IE issue.

        pt.type = 2;
        pt.b = "alpha(opacity=" + pt.s + ")";
        pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
        pt.data = t;
        pt.plugin = plugin;
        pt.setRatio = _setIEOpacityRatio;
      }

      if (isAutoAlpha) {
        //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
        pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, b !== 0 ? "inherit" : "hidden", e === 0 ? "hidden" : "inherit");
        pt.xs0 = "inherit";

        cssp._overwriteProps.push(pt.n);

        cssp._overwriteProps.push(p);
      }

      return pt;
    }
  });

  var _removeProp = function _removeProp(s, p) {
    if (p) {
      if (s.removeProperty) {
        if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
          //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
          p = "-" + p;
        }

        s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      } else {
        //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        s.removeAttribute(p);
      }
    }
  },
      _setClassNameRatio = function _setClassNameRatio(v) {
    this.t._gsClassPT = this;

    if (v === 1 || v === 0) {
      this.t.setAttribute("class", v === 0 ? this.b : this.e);
      var mpt = this.data,
          //first MiniPropTween
      s = this.t.style;

      while (mpt) {
        if (!mpt.v) {
          _removeProp(s, mpt.p);
        } else {
          s[mpt.p] = mpt.v;
        }

        mpt = mpt._next;
      }

      if (v === 1 && this.t._gsClassPT === this) {
        this.t._gsClassPT = null;
      }
    } else if (this.t.getAttribute("class") !== this.e) {
      this.t.setAttribute("class", this.e);
    }
  };

  _registerComplexSpecialProp("className", {
    parser: function parser(t, e, p, cssp, pt, plugin, vars) {
      var b = t.getAttribute("class") || "",
          //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
      cssText = t.style.cssText,
          difData,
          bs,
          cnpt,
          cnptLookup,
          mpt;
      pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
      pt.setRatio = _setClassNameRatio;
      pt.pr = -11;
      _hasPriority = true;
      pt.b = b;
      bs = _getAllStyles(t, _cs); //if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)

      cnpt = t._gsClassPT;

      if (cnpt) {
        cnptLookup = {};
        mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.

        while (mpt) {
          cnptLookup[mpt.p] = 1;
          mpt = mpt._next;
        }

        cnpt.setRatio(1);
      }

      t._gsClassPT = pt;
      pt.e = e.charAt(1) !== "=" ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + (e.charAt(0) === "+" ? " " + e.substr(2) : "");
      t.setAttribute("class", pt.e);
      difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
      t.setAttribute("class", b);
      pt.data = difData.firstMPT;
      t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).

      pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)

      return pt;
    }
  });

  var _setClearPropsRatio = function _setClearPropsRatio(v) {
    if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
      //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
      var s = this.t.style,
          transformParse = _specialProps.transform.parse,
          a,
          p,
          i,
          clearTransform,
          transform;

      if (this.e === "all") {
        s.cssText = "";
        clearTransform = true;
      } else {
        a = this.e.split(" ").join("").split(",");
        i = a.length;

        while (--i > -1) {
          p = a[i];

          if (_specialProps[p]) {
            if (_specialProps[p].parse === transformParse) {
              clearTransform = true;
            } else {
              p = p === "transformOrigin" ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
            }
          }

          _removeProp(s, p);
        }
      }

      if (clearTransform) {
        _removeProp(s, _transformProp);

        transform = this.t._gsTransform;

        if (transform) {
          if (transform.svg) {
            this.t.removeAttribute("data-svg-origin");
            this.t.removeAttribute("transform");
          }

          delete this.t._gsTransform;
        }
      }
    }
  };

  _registerComplexSpecialProp("clearProps", {
    parser: function parser(t, e, p, cssp, pt) {
      pt = new CSSPropTween(t, p, 0, 0, pt, 2);
      pt.setRatio = _setClearPropsRatio;
      pt.e = e;
      pt.pr = -10;
      pt.data = cssp._tween;
      _hasPriority = true;
      return pt;
    }
  });

  p = "bezier,throwProps,physicsProps,physics2D".split(",");
  i = p.length;

  while (i--) {
    _registerPluginProp(p[i]);
  }

  p = CSSPlugin.prototype;
  p._firstPT = p._lastParsedTransform = p._transform = null; //gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.

  p._onInitTween = function (target, vars, tween, index) {
    if (!target.nodeType) {
      //css is only for dom elements
      return false;
    }

    this._target = _target = target;
    this._tween = tween;
    this._vars = vars;
    _index = index;
    _autoRound = vars.autoRound;
    _hasPriority = false;
    _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
    _cs = _getComputedStyle(target, "");
    _overwriteProps = this._overwriteProps;
    var style = target.style,
        v,
        pt,
        pt2,
        first,
        last,
        next,
        zIndex,
        tpt,
        threeD;
    if (_reqSafariFix) if (style.zIndex === "") {
      v = _getStyle(target, "zIndex", _cs);

      if (v === "auto" || v === "") {
        //corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
        this._addLazySet(style, "zIndex", 0);
      }
    }

    if (typeof vars === "string") {
      first = style.cssText;
      v = _getAllStyles(target, _cs);
      style.cssText = first + ";" + vars;
      v = _cssDif(target, v, _getAllStyles(target)).difs;

      if (!_supportsOpacity && _opacityValExp.test(vars)) {
        v.opacity = parseFloat(RegExp.$1);
      }

      vars = v;
      style.cssText = first;
    }

    if (vars.className) {
      //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
      this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
    } else {
      this._firstPT = pt = this.parse(target, vars, null);
    }

    if (this._transformType) {
      threeD = this._transformType === 3;

      if (!_transformProp) {
        style.zoom = 1; //helps correct an IE issue.
      } else if (_isSafari) {
        _reqSafariFix = true; //if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).

        if (style.zIndex === "") {
          zIndex = _getStyle(target, "zIndex", _cs);

          if (zIndex === "auto" || zIndex === "") {
            this._addLazySet(style, "zIndex", 0);
          }
        } //Setting WebkitBackfaceVisibility corrects 3 bugs:
        // 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
        // 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
        // 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
        //Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.


        if (_isSafariLT6) {
          this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
        }
      }

      pt2 = pt;

      while (pt2 && pt2._next) {
        pt2 = pt2._next;
      }

      tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);

      this._linkCSSP(tpt, null, pt2);

      tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
      tpt.data = this._transform || _getTransform(target, _cs, true);
      tpt.tween = tween;
      tpt.pr = -1; //ensures that the transforms get applied after the components are updated.

      _overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.

    }

    if (_hasPriority) {
      //reorders the linked list in order of pr (priority)
      while (pt) {
        next = pt._next;
        pt2 = first;

        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }

        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }

        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }

        pt = next;
      }

      this._firstPT = first;
    }

    return true;
  };

  p.parse = function (target, vars, pt, plugin) {
    var style = target.style,
        p,
        sp,
        bn,
        en,
        bs,
        es,
        bsfx,
        esfx,
        isStr,
        rel;

    for (p in vars) {
      es = vars[p]; //ending value string

      if (typeof es === "function") {
        es = es(_index, _target);
      }

      sp = _specialProps[p]; //SpecialProp lookup.

      if (sp) {
        pt = sp.parse(target, es, p, this, pt, plugin, vars);
      } else if (p.substr(0, 2) === "--") {
        //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
        this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
        continue;
      } else {
        bs = _getStyle(target, p, _cs) + "";
        isStr = typeof es === "string";

        if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es)) {
          //Opera uses background: to define color sometimes in addition to backgroundColor:
          if (!isStr) {
            es = _parseColor(es);
            es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")";
          }

          pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
        } else if (isStr && _complexExp.test(es)) {
          pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
        } else {
          bn = parseFloat(bs);
          bsfx = bn || bn === 0 ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

          if (bs === "" || bs === "auto") {
            if (p === "width" || p === "height") {
              bn = _getDimension(target, p, _cs);
              bsfx = "px";
            } else if (p === "left" || p === "top") {
              bn = _calculateOffset(target, p, _cs);
              bsfx = "px";
            } else {
              bn = p !== "opacity" ? 0 : 1;
              bsfx = "";
            }
          }

          rel = isStr && es.charAt(1) === "=";

          if (rel) {
            en = parseInt(es.charAt(0) + "1", 10);
            es = es.substr(2);
            en *= parseFloat(es);
            esfx = es.replace(_suffixExp, "");
          } else {
            en = parseFloat(es);
            esfx = isStr ? es.replace(_suffixExp, "") : "";
          }

          if (esfx === "") {
            esfx = p in _suffixMap ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
          }

          es = en || en === 0 ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
          //if the beginning/ending suffixes don't match, normalize them...

          if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) {
            //note: if the beginning value (bn) is 0, we don't need to convert units!
            bn = _convertToPixels(target, p, bn, bsfx);

            if (esfx === "%") {
              bn /= _convertToPixels(target, p, 100, "%") / 100;

              if (vars.strictUnits !== true) {
                //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
                bs = bn + "%";
              }
            } else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
              bn /= _convertToPixels(target, p, 1, esfx); //otherwise convert to pixels.
            } else if (esfx !== "px") {
              en = _convertToPixels(target, p, en, esfx);
              esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
            }

            if (rel) if (en || en === 0) {
              es = en + bn + esfx; //the changes we made affect relative calculations, so adjust the end value here.
            }
          }

          if (rel) {
            en += bn;
          }

          if ((bn || bn === 0) && (en || en === 0)) {
            //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
            pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && (esfx === "px" || p === "zIndex"), 0, bs, es);
            pt.xs0 = esfx; //DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
          } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
            _log("invalid " + p + " tween value: " + vars[p]);
          } else {
            pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
            pt.xs0 = es === "none" && (p === "display" || p.indexOf("Style") !== -1) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
            //DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
          }
        }
      }

      if (plugin) if (pt && !pt.plugin) {
        pt.plugin = plugin;
      }
    }

    return pt;
  }; //gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.


  p.setRatio = function (v) {
    var pt = this._firstPT,
        min = 0.000001,
        val,
        str,
        i; //at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).

    if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
      while (pt) {
        if (pt.type !== 2) {
          if (pt.r && pt.type !== -1) {
            val = pt.r(pt.s + pt.c);

            if (!pt.type) {
              pt.t[pt.p] = val + pt.xs0;
            } else if (pt.type === 1) {
              //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
              i = pt.l;
              str = pt.xs0 + val + pt.xs1;

              for (i = 1; i < pt.l; i++) {
                str += pt["xn" + i] + pt["xs" + (i + 1)];
              }

              pt.t[pt.p] = str;
            }
          } else {
            pt.t[pt.p] = pt.e;
          }
        } else {
          pt.setRatio(v);
        }

        pt = pt._next;
      }
    } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
      while (pt) {
        val = pt.c * v + pt.s;

        if (pt.r) {
          val = pt.r(val);
        } else if (val < min) if (val > -min) {
          val = 0;
        }

        if (!pt.type) {
          pt.t[pt.p] = val + pt.xs0;
        } else if (pt.type === 1) {
          //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
          i = pt.l;

          if (i === 2) {
            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
          } else if (i === 3) {
            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
          } else if (i === 4) {
            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
          } else if (i === 5) {
            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
          } else {
            str = pt.xs0 + val + pt.xs1;

            for (i = 1; i < pt.l; i++) {
              str += pt["xn" + i] + pt["xs" + (i + 1)];
            }

            pt.t[pt.p] = str;
          }
        } else if (pt.type === -1) {
          //non-tweening value
          pt.t[pt.p] = pt.xs0;
        } else if (pt.setRatio) {
          //custom setRatio() for things like SpecialProps, external plugins, etc.
          pt.setRatio(v);
        }

        pt = pt._next;
      } //if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).

    } else {
      while (pt) {
        if (pt.type !== 2) {
          pt.t[pt.p] = pt.b;
        } else {
          pt.setRatio(v);
        }

        pt = pt._next;
      }
    }
  };
  /**
   * @private
   * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
   * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
   * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
   * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
   * doesn't have any transform-related properties of its own. You can call this method as many times as you
   * want and it won't create duplicate CSSPropTweens.
   *
   * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
   */


  p._enableTransforms = function (threeD) {
    this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.

    this._transformType = !(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3) ? 3 : 2;
  };

  var lazySet = function lazySet(v) {
    this.t[this.p] = this.e;

    this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.

  };
  /** @private Gives us a way to set a value on the first render (and only the first render). **/


  p._addLazySet = function (t, p, v) {
    var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
    pt.e = v;
    pt.setRatio = lazySet;
    pt.data = this;
  };
  /** @private **/


  p._linkCSSP = function (pt, next, prev, remove) {
    if (pt) {
      if (next) {
        next._prev = pt;
      }

      if (pt._next) {
        pt._next._prev = pt._prev;
      }

      if (pt._prev) {
        pt._prev._next = pt._next;
      } else if (this._firstPT === pt) {
        this._firstPT = pt._next;
        remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
      }

      if (prev) {
        prev._next = pt;
      } else if (!remove && this._firstPT === null) {
        this._firstPT = pt;
      }

      pt._next = next;
      pt._prev = prev;
    }

    return pt;
  };

  p._mod = function (lookup) {
    var pt = this._firstPT;

    while (pt) {
      if (typeof lookup[pt.p] === "function") {
        //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
        pt.r = lookup[pt.p];
      }

      pt = pt._next;
    }
  }; //we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.


  p._kill = function (lookup) {
    var copy = lookup,
        pt,
        p,
        xfirst;

    if (lookup.autoAlpha || lookup.alpha) {
      copy = {};

      for (p in lookup) {
        //copy the lookup so that we're not changing the original which may be passed elsewhere.
        copy[p] = lookup[p];
      }

      copy.opacity = 1;

      if (copy.autoAlpha) {
        copy.visibility = 1;
      }
    }

    if (lookup.className && (pt = this._classNamePT)) {
      //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
      xfirst = pt.xfirst;

      if (xfirst && xfirst._prev) {
        this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev

      } else if (xfirst === this._firstPT) {
        this._firstPT = pt._next;
      }

      if (pt._next) {
        this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
      }

      this._classNamePT = null;
    }

    pt = this._firstPT;

    while (pt) {
      if (pt.plugin && pt.plugin !== p && pt.plugin._kill) {
        //for plugins that are registered with CSSPlugin, we should notify them of the kill.
        pt.plugin._kill(lookup);

        p = pt.plugin;
      }

      pt = pt._next;
    }

    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].prototype._kill.call(this, copy);
  }; //used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.


  var _getChildStyles = function _getChildStyles(e, props, targets) {
    var children, i, child, type;

    if (e.slice) {
      i = e.length;

      while (--i > -1) {
        _getChildStyles(e[i], props, targets);
      }

      return;
    }

    children = e.childNodes;
    i = children.length;

    while (--i > -1) {
      child = children[i];
      type = child.type;

      if (child.style) {
        props.push(_getAllStyles(child));

        if (targets) {
          targets.push(child);
        }
      }

      if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
        _getChildStyles(child, props, targets);
      }
    }
  };
  /**
   * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
   * and then compares the style properties of all the target's child elements at the tween's start and end, and
   * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
   * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
   * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
   * is because it creates entirely new tweens that may have completely different targets than the original tween,
   * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
   * and it would create other problems. For example:
   *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
   *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
   *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
   *
   * @param {Object} target object to be tweened
   * @param {number} Duration in seconds (or frames for frames-based tweens)
   * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
   * @return {Array} An array of TweenLite instances
   */


  CSSPlugin.cascadeTo = function (target, duration, vars) {
    var tween = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to(target, duration, vars),
        results = [tween],
        b = [],
        e = [],
        targets = [],
        _reservedProps = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals.reservedProps,
        i,
        difs,
        p,
        from;
    target = tween._targets || tween.target;

    _getChildStyles(target, b, targets);

    tween.render(duration, true, true);

    _getChildStyles(target, e);

    tween.render(0, true, true);

    tween._enabled(true);

    i = targets.length;

    while (--i > -1) {
      difs = _cssDif(targets[i], b[i], e[i]);

      if (difs.firstMPT) {
        difs = difs.difs;

        for (p in vars) {
          if (_reservedProps[p]) {
            difs[p] = vars[p];
          }
        }

        from = {};

        for (p in difs) {
          from[p] = b[i][p];
        }

        results.push(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(targets[i], duration, from, difs));
      }
    }

    return results;
  };

  _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].activate([CSSPlugin]);
  return CSSPlugin;
}, true);

var CSSPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].CSSPlugin;


/***/ }),

/***/ "./node_modules/gsap/CSSRulePlugin.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/CSSRulePlugin.js ***!
  \********************************************/
/*! exports provided: CSSRulePlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSRulePlugin", function() { return CSSRulePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSRulePlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
/*!
 * VERSION: 0.6.7
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("plugins.CSSRulePlugin", ["plugins.TweenPlugin", "TweenLite", "plugins.CSSPlugin"], function () {
  /** @constructor **/
  var CSSRulePlugin = function CSSRulePlugin() {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].call(this, "cssRule");
    this._overwriteProps.length = 0;
  },
      _doc = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document,
      _superSetRatio = _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.setRatio,
      p = CSSRulePlugin.prototype = new _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

  p._propName = "cssRule";
  p.constructor = CSSRulePlugin;
  CSSRulePlugin.version = "0.6.7";
  CSSRulePlugin.API = 2;
  /**
   * Searches the style sheets in the document for a particular selector like ".myClass" or "a" or "a:hover" or ":after" and
   * returns a reference to that style sheet (or an array of them in the case of a pseudo selector like ":after"). Then you
   * can animate the individual properties of the style sheet.
   *
   * @param {!string} selector a string describing the selector, like ".myClass" or "a" or "a:hover" or ":after"
   * @return a reference to the style sheet (or an array of them in the case of a pseudo selector). If none was found, null is returned (or an empty array for a pseudo selector)
   */

  CSSRulePlugin.getRule = function (selector) {
    var ruleProp = _doc.all ? "rules" : "cssRules",
        ss = _doc.styleSheets,
        i = ss.length,
        pseudo = selector.charAt(0) === ":",
        j,
        curSS,
        cs,
        a;
    selector = (pseudo ? "" : ",") + selector.split("::").join(":").toLowerCase() + ","; //note: old versions of IE report tag name selectors as upper case, so we just change everything to lowercase.

    if (pseudo) {
      a = [];
    }

    while (--i > -1) {
      //Firefox may throw insecure operation errors when css is loaded from other domains, so try/catch.
      try {
        curSS = ss[i][ruleProp];

        if (!curSS) {
          continue;
        }

        j = curSS.length;
      } catch (e) {
        console.log(e);
        continue;
      }

      while (--j > -1) {
        cs = curSS[j];

        if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector) !== -1) {
          //note: IE adds an extra ":" to pseudo selectors, so .myClass:after becomes .myClass::after, so we need to strip the extra one out.
          if (pseudo) {
            a.push(cs.style);
          } else {
            return cs.style;
          }
        }
      }
    }

    return a;
  }; // @private gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.


  p._onInitTween = function (target, value, tween) {
    if (target.cssText === undefined) {
      return false;
    }

    var div = target._gsProxy = target._gsProxy || _doc.createElement("div");

    this._ss = target;
    this._proxy = div.style;
    div.style.cssText = target.cssText;

    _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype._onInitTween.call(this, div, value, tween); //we just offload all the work to the regular CSSPlugin and then copy the cssText back over to the rule in the setRatio() method. This allows us to have all of the updates to CSSPlugin automatically flow through to CSSRulePlugin instead of having to maintain both


    return true;
  }; // @private gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.


  p.setRatio = function (v) {
    _superSetRatio.call(this, v);

    this._ss.cssText = this._proxy.cssText;
  };

  _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].activate([CSSRulePlugin]);
  return CSSRulePlugin;
}, true);

var CSSRulePlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].CSSRulePlugin;


/***/ }),

/***/ "./node_modules/gsap/ColorPropsPlugin.js":
/*!***********************************************!*\
  !*** ./node_modules/gsap/ColorPropsPlugin.js ***!
  \***********************************************/
/*! exports provided: ColorPropsPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPropsPlugin", function() { return ColorPropsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPropsPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 1.5.3
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


var _numExp = /(\d|\.)+/g,
    _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
    _colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
},

/**
 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
 */
_parseColor = function _parseColor(v, toHSL) {
  var a, r, g, b, h, s, l, max, min, d, wasHSL;

  if (!v) {
    a = _colorLookup.black;
  } else if (typeof v === "number") {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length === 4) {
        //for shorthand like #9F0
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b;
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_numExp);

      if (!toHSL) {
        h = Number(a[0]) % 360 / 360;
        s = Number(a[1]) / 100;
        l = Number(a[2]) / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;

        if (a.length > 3) {
          a[3] = Number(a[3]);
        }

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (v.indexOf("=") !== -1) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        return v.match(_relNumExp);
      }
    } else {
      a = v.match(_numExp) || _colorLookup.transparent;
    }

    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);

    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }

  if (toHSL && !wasHSL) {
    r = a[0] / 255;
    g = a[1] / 255;
    b = a[2] / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = h + 0.5 | 0;
    a[1] = s * 100 + 0.5 | 0;
    a[2] = l * 100 + 0.5 | 0;
  }

  return a;
},
    _formatColors = function _formatColors(s, toHSL) {
  var colors = (s + "").match(_colorExp) || [],
      charIndex = 0,
      parsed = "",
      i,
      color,
      temp;

  if (!colors.length) {
    return s;
  }

  for (i = 0; i < colors.length; i++) {
    color = colors[i];
    temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
    charIndex += temp.length + color.length;
    color = _parseColor(color, toHSL);

    if (color.length === 3) {
      color.push(1);
    }

    parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
  }

  return parsed + s.substr(charIndex);
},
    p,
    _colorStringFilter,
    TweenLite = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].GreenSockGlobals || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]).TweenLite,
    _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
    //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.
ColorPropsPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "colorProps",
  version: "1.5.3",
  priority: -1,
  API: 2,
  global: true,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween, index) {
    var p, proxy, pt, val;
    this._target = target;
    this._proxy = proxy = (value.format + "").toUpperCase() === "NUMBER" ? {} : 0;

    for (p in value) {
      if (p !== "format") {
        if (proxy) {
          this._firstNumPT = pt = {
            _next: this._firstNumPT,
            t: target,
            p: p,
            f: typeof target[p] === "function"
          };
          proxy[p] = "rgb(" + _parseColor(!pt.f ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]()).join(",") + ")";
          val = value[p];

          if (typeof val === "function") {
            val = val(index, target);
          }

          this._addTween(proxy, p, "get", typeof val === "number" ? "rgb(" + _parseColor(val, false).join(",") + ")" : val, p, null, null, _colorStringFilter);
        } else {
          this._addTween(target, p, "get", value[p], p, null, null, _colorStringFilter, index);
        }
      }
    }

    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(v) {
    var pt = this._firstNumPT,
        val;

    this._super.setRatio.call(this, v);

    while (pt) {
      val = _parseColor(this._proxy[pt.p], false);
      val = val[0] << 16 | val[1] << 8 | val[2];

      if (pt.f) {
        this._target[pt.p](val);
      } else {
        this._target[pt.p] = val;
      }

      pt = pt._next;
    }
  }
});

for (p in _colorLookup) {
  _colorExp += "|" + p + "\\b";
}

_colorExp = new RegExp(_colorExp + ")", "gi");

ColorPropsPlugin.colorStringFilter = _colorStringFilter = function _colorStringFilter(a) {
  var combined = a[0] + " " + a[1],
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
    a[0] = _formatColors(a[0], toHSL);
    a[1] = _formatColors(a[1], toHSL);
  }
};

if (!TweenLite.defaultStringFilter) {
  TweenLite.defaultStringFilter = ColorPropsPlugin.colorStringFilter;
}

ColorPropsPlugin.parseColor = _parseColor;
p = ColorPropsPlugin.prototype;
p._firstNumPT = null;

p._kill = function (lookup) {
  var pt = this._firstNumPT,
      prev;

  while (pt) {
    if (pt.p in lookup) {
      if (pt === p._firstNumPT) {
        this._firstNumPT = pt._next;
      }

      if (prev) {
        prev._next = pt._next;
      }
    } else {
      prev = pt;
    }

    pt = pt._next;
  }

  return this._super._kill(lookup);
};



/***/ }),

/***/ "./node_modules/gsap/DirectionalRotationPlugin.js":
/*!********************************************************!*\
  !*** ./node_modules/gsap/DirectionalRotationPlugin.js ***!
  \********************************************************/
/*! exports provided: DirectionalRotationPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return DirectionalRotationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectionalRotationPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var DirectionalRotationPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "directionalRotation",
  version: "0.3.1",
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween, index) {
    if (_typeof(value) !== "object") {
      value = {
        rotation: value
      };
    }

    this.finals = {};
    var cap = value.useRadians === true ? Math.PI * 2 : 360,
        min = 0.000001,
        p,
        v,
        start,
        end,
        dif,
        split;

    for (p in value) {
      if (p !== "useRadians") {
        end = value[p];

        if (typeof end === "function") {
          end = end(index, target);
        }

        split = (end + "").split("_");
        v = split[0];
        start = parseFloat(typeof target[p] !== "function" ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]());
        end = this.finals[p] = typeof v === "string" && v.charAt(1) === "=" ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
        dif = end - start;

        if (split.length) {
          v = split.join("_");

          if (v.indexOf("short") !== -1) {
            dif = dif % cap;

            if (dif !== dif % (cap / 2)) {
              dif = dif < 0 ? dif + cap : dif - cap;
            }
          }

          if (v.indexOf("_cw") !== -1 && dif < 0) {
            dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
          } else if (v.indexOf("ccw") !== -1 && dif > 0) {
            dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
          }
        }

        if (dif > min || dif < -min) {
          this._addTween(target, p, start, start + dif, p);

          this._overwriteProps.push(p);
        }
      }
    }

    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(ratio) {
    var pt;

    if (ratio !== 1) {
      this._super.setRatio.call(this, ratio);
    } else {
      pt = this._firstPT;

      while (pt) {
        if (pt.f) {
          pt.t[pt.p](this.finals[pt.p]);
        } else {
          pt.t[pt.p] = this.finals[pt.p];
        }

        pt = pt._next;
      }
    }
  }
});
DirectionalRotationPlugin._autoCSS = true;


/***/ }),

/***/ "./node_modules/gsap/Draggable.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/Draggable.js ***!
  \****************************************/
/*! exports provided: Draggable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draggable; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 0.16.5
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function () {
  var _tempVarsXY = {
    css: {},
    data: "_draggable"
  },
      //speed optimization - we reuse the same vars object for x/y TweenLite.set() calls to minimize garbage collection tasks and improve performance.
  _tempVarsX = {
    css: {},
    data: "_draggable"
  },
      _tempVarsY = {
    css: {},
    data: "_draggable"
  },
      _tempVarsRotation = {
    css: {}
  },
      _globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
      _tempEvent = {},
      //for populating with pageX/pageY in old versions of IE
  _emptyFunc = function _emptyFunc() {
    return false;
  },
      _dummyElement = {
    style: {},
    appendChild: _emptyFunc,
    removeChild: _emptyFunc
  },
      _doc = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document || {
    createElement: function createElement() {
      return _dummyElement;
    }
  },
      _docElement = _doc.documentElement || {},
      _createElement = function _createElement(type) {
    return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
  },
      _tempDiv = _createElement("div"),
      _emptyArray = [],
      _RAD2DEG = 180 / Math.PI,
      _max = 999999999999999,
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _isOldIE = !!(!_doc.addEventListener && _doc.all),
      _placeholderDiv = _doc.createElement("div"),
      _renderQueue = [],
      _lookup = {},
      //when a Draggable is created, the target gets a unique _gsDragID property that allows gets associated with the Draggable instance for quick lookups in Draggable.get(). This avoids circular references that could cause gc problems.
  _lookupCount = 0,
      _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
      _dragCount = 0,
      //total number of elements currently being dragged
  _prefix,
      _isMultiTouching,
      _isAndroid = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator && _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator.userAgent.toLowerCase().indexOf("android") !== -1,
      //Android handles touch events in an odd way and it's virtually impossible to "feature test" so we resort to UA sniffing
  _lastDragTime = 0,
      _temp1 = {},
      // a simple object we reuse and populate (usually x/y properties) to conserve memory and improve performance.
  _windowProxy = {},
      //memory/performance optimization - we reuse this object during autoScroll to store window-related bounds/offsets.
  _slice = function _slice(a) {
    //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
    if (typeof a === "string") {
      a = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(a);
    }

    if (!a || a.nodeType) {
      //if it's not an array, wrap it in one.
      return [a];
    }

    var b = [],
        l = a.length,
        i;

    for (i = 0; i !== l; b.push(a[i++])) {
      ;
    }

    return b;
  },
      _copy = function _copy(obj, factor) {
    var copy = {},
        p;

    if (factor) {
      for (p in obj) {
        copy[p] = obj[p] * factor;
      }
    } else {
      for (p in obj) {
        copy[p] = obj[p];
      }
    }

    return copy;
  },
      ThrowPropsPlugin,
      _renderQueueTick = function _renderQueueTick() {
    var i = _renderQueue.length;

    while (--i > -1) {
      _renderQueue[i]();
    }
  },
      _addToRenderQueue = function _addToRenderQueue(func) {
    _renderQueue.push(func);

    if (_renderQueue.length === 1) {
      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.addEventListener("tick", _renderQueueTick, this, false, 1);
    }
  },
      _removeFromRenderQueue = function _removeFromRenderQueue(func) {
    var i = _renderQueue.length;

    while (--i > -1) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }

    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to(_renderQueueTimeout, 0, {
      overwrite: "all",
      delay: 15,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    }); //remove the "tick" listener only after the render queue is empty for 15 seconds (to improve performance). Adding/removing it constantly for every click/touch wouldn't deliver optimal speed, and we also don't want the ticker to keep calling the render method when things are idle for long periods of time (we want to improve battery life on mobile devices).
  },
      _renderQueueTimeout = function _renderQueueTimeout() {
    if (!_renderQueue.length) {
      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.removeEventListener("tick", _renderQueueTick);
    }
  },
      _extend = function _extend(obj, defaults) {
    var p;

    for (p in defaults) {
      if (obj[p] === undefined) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _getDocScrollTop = function _getDocScrollTop() {
    return window.pageYOffset != null ? window.pageYOffset : _doc.scrollTop != null ? _doc.scrollTop : _docElement.scrollTop || _doc.body.scrollTop || 0;
  },
      _getDocScrollLeft = function _getDocScrollLeft() {
    return window.pageXOffset != null ? window.pageXOffset : _doc.scrollLeft != null ? _doc.scrollLeft : _docElement.scrollLeft || _doc.body.scrollLeft || 0;
  },
      _addScrollListener = function _addScrollListener(e, callback) {
    _addListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _addScrollListener(e.parentNode, callback);
    }
  },
      _removeScrollListener = function _removeScrollListener(e, callback) {
    _removeListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _removeScrollListener(e.parentNode, callback);
    }
  },
      _isRoot = function _isRoot(e) {
    return !!(!e || e === _docElement || e === _doc || e === _doc.body || e === window || !e.nodeType || !e.parentNode);
  },
      _getMaxScroll = function _getMaxScroll(element, axis) {
    var dim = axis === "x" ? "Width" : "Height",
        scroll = "scroll" + dim,
        client = "client" + dim,
        body = _doc.body;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], body[scroll]) - (window["inner" + dim] || _docElement[client] || body[client]) : element[scroll] - element[client]);
  },
      _recordMaxScrolls = function _recordMaxScrolls(e) {
    //records _gsMaxScrollX and _gsMaxScrollY properties for the element and all ancestors up the chain so that we can cap it, otherwise dragging beyond the edges with autoScroll on can endlessly scroll.
    var isRoot = _isRoot(e),
        x = _getMaxScroll(e, "x"),
        y = _getMaxScroll(e, "y");

    if (isRoot) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls(e.parentNode);
    }

    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;
    e._gsScrollX = e.scrollLeft || 0;
    e._gsScrollY = e.scrollTop || 0;
  },
      //just used for IE8 and earlier to normalize events and populate pageX/pageY
  _populateIEEvent = function _populateIEEvent(e, preventDefault) {
    e = e || window.event;
    _tempEvent.pageX = e.clientX + _doc.body.scrollLeft + _docElement.scrollLeft;
    _tempEvent.pageY = e.clientY + _doc.body.scrollTop + _docElement.scrollTop;

    if (preventDefault) {
      e.returnValue = false;
    }

    return _tempEvent;
  },
      //grabs the first element it finds (and we include the window as an element), so if it's selector text, it'll feed that value to TweenLite.selector, if it's a jQuery object or some other selector engine's result, it'll grab the first one, and same for an array. If the value doesn't contain a DOM element, it'll just return null.
  _unwrapElement = function _unwrapElement(value) {
    if (!value) {
      return value;
    }

    if (typeof value === "string") {
      value = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(value);
    }

    if (value.length && value !== window && value[0] && value[0].style && !value.nodeType) {
      value = value[0];
    }

    return value === window || value.nodeType && value.style ? value : null;
  },
      _checkPrefix = function _checkPrefix(e, p) {
    var s = e.style,
        capped,
        i,
        a;

    if (s[p] === undefined) {
      a = ["O", "Moz", "ms", "Ms", "Webkit"];
      i = 5;
      capped = p.charAt(0).toUpperCase() + p.substr(1);

      while (--i > -1 && s[a[i] + capped] === undefined) {}

      if (i < 0) {
        return "";
      }

      _prefix = i === 3 ? "ms" : a[i];
      p = _prefix + capped;
    }

    return p;
  },
      _setStyle = function _setStyle(e, p, value) {
    var s = e.style;

    if (!s) {
      return;
    }

    if (s[p] === undefined) {
      p = _checkPrefix(e, p);
    }

    if (value == null) {
      if (s.removeProperty) {
        s.removeProperty(p.replace(/([A-Z])/g, "-$1").toLowerCase());
      } else {
        //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        s.removeAttribute(p);
      }
    } else if (s[p] !== undefined) {
      s[p] = value;
    }
  },
      _getCSFunc = (typeof window !== "undefined" ? window : _doc.defaultView || {
    getComputedStyle: function getComputedStyle() {}
  }).getComputedStyle,
      _getComputedStyle = function _getComputedStyle(e, s) {
    return _getCSFunc(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e, s); //the "host" stuff helps to accommodate ShadowDom objects.
  },
      _horizExp = /(?:Left|Right|Width)/i,
      _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
      _convertToPixels = function _convertToPixels(t, p, v, sfx, recurse) {
    if (sfx === "px" || !sfx) {
      return v;
    }

    if (sfx === "auto" || !v) {
      return 0;
    }

    var horiz = _horizExp.test(p),
        node = t,
        style = _tempDiv.style,
        neg = v < 0,
        pix;

    if (neg) {
      v = -v;
    }

    if (sfx === "%" && p.indexOf("border") !== -1) {
      pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
    } else {
      style.cssText = "border:0 solid red;position:" + _getStyle(t, "position", true) + ";line-height:0;";

      if (sfx === "%" || !node.appendChild) {
        node = t.parentNode || _doc.body;
        style[horiz ? "width" : "height"] = v + sfx;
      } else {
        style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
      }

      node.appendChild(_tempDiv);
      pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
      node.removeChild(_tempDiv);

      if (pix === 0 && !recurse) {
        pix = _convertToPixels(t, p, v, sfx, true);
      }
    }

    return neg ? -pix : pix;
  },
      _calculateOffset = function _calculateOffset(t, p) {
    //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
    if (_getStyle(t, "position", true) !== "absolute") {
      return 0;
    }

    var dim = p === "left" ? "Left" : "Top",
        v = _getStyle(t, "margin" + dim, true);

    return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), (v + "").replace(_suffixExp, "")) || 0);
  },
      _getStyle = function _getStyle(element, prop, keepUnits) {
    var rv = (element._gsTransform || {})[prop],
        cs;

    if (rv || rv === 0) {
      return rv;
    } else if (element.style && element.style[prop]) {
      //shadow dom elements don't have "style".
      rv = element.style[prop];
    } else if (cs = _getComputedStyle(element)) {
      rv = cs.getPropertyValue(prop.replace(/([A-Z])/g, "-$1").toLowerCase());
      rv = rv || cs.length ? rv : cs[prop]; //Opera behaves VERY strangely - length is usually 0 and cs[prop] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
    } else if (element.currentStyle) {
      rv = element.currentStyle[prop];
    }

    if (rv === "auto" && (prop === "top" || prop === "left")) {
      rv = _calculateOffset(element, prop);
    }

    return keepUnits ? rv : parseFloat(rv) || 0;
  },
      _dispatchEvent = function _dispatchEvent(instance, type, callbackName) {
    var vars = instance.vars,
        callback = vars[callbackName],
        listeners = instance._listeners[type];

    if (typeof callback === "function") {
      callback.apply(vars[callbackName + "Scope"] || vars.callbackScope || instance, vars[callbackName + "Params"] || [instance.pointerEvent]);
    }

    if (listeners) {
      instance.dispatchEvent(type);
    }
  },
      _getBounds = function _getBounds(obj, context) {
    //accepts any of the following: a DOM element, jQuery object, selector text, or an object defining bounds as {top, left, width, height} or {minX, maxX, minY, maxY}. Returns an object with left, top, width, and height properties.
    var e = _unwrapElement(obj),
        top,
        left,
        offset;

    if (!e) {
      if (obj.left !== undefined) {
        offset = _getOffsetTransformOrigin(context); //the bounds should be relative to the origin

        return {
          left: obj.left - offset.x,
          top: obj.top - offset.y,
          width: obj.width,
          height: obj.height
        };
      }

      left = obj.min || obj.minX || obj.minRotation || 0;
      top = obj.min || obj.minY || 0;
      return {
        left: left,
        top: top,
        width: (obj.max || obj.maxX || obj.maxRotation || 0) - left,
        height: (obj.max || obj.maxY || 0) - top
      };
    }

    return _getElementBounds(e, context);
  },
      _svgBorderFactor,
      _svgBorderScales,
      _svgScrollOffset,
      _hasBorderBug,
      _hasReparentBug,
      //some browsers, like Chrome 49, alter the offsetTop/offsetLeft/offsetParent of elements when a non-identity transform is applied.
  _setEnvironmentVariables = function _setEnvironmentVariables() {
    //some browsers factor the border into the SVG coordinate space, some don't (like Firefox). Some apply transforms to them, some don't. We feature-detect here so we know how to handle the border(s). We can't do this immediately - we must wait for the document.body to exist.
    if (!_doc.createElementNS) {
      _svgBorderFactor = 0;
      _svgBorderScales = false;
      return;
    }

    var div = _createElement("div"),
        svg = _doc.createElementNS("http://www.w3.org/2000/svg", "svg"),
        wrapper = _createElement("div"),
        style = div.style,
        parent = _doc.body || _docElement,
        isFlex = _getStyle(parent, "display", true) === "flex",
        //Firefox bug causes getScreenCTM() to return null when parent is display:flex and the element isn't rendered inside the window (like if it's below the scroll position)
    matrix,
        e1,
        point,
        oldValue;

    if (_doc.body && _transformProp) {
      style.position = "absolute";
      parent.appendChild(wrapper);
      wrapper.appendChild(div);
      oldValue = div.offsetParent;
      wrapper.style[_transformProp] = "rotate(1deg)";
      _hasReparentBug = div.offsetParent === oldValue;
      wrapper.style.position = "absolute";
      style.height = "10px";
      oldValue = div.offsetTop;
      wrapper.style.border = "5px solid red";
      _hasBorderBug = oldValue !== div.offsetTop; //some browsers, like Firefox 38, cause the offsetTop/Left to be affected by a parent's border.

      parent.removeChild(wrapper);
    }

    style = svg.style;
    svg.setAttributeNS(null, "width", "400px");
    svg.setAttributeNS(null, "height", "400px");
    svg.setAttributeNS(null, "viewBox", "0 0 400 400");
    style.display = "block";
    style.boxSizing = "border-box";
    style.border = "0px solid red";
    style.transform = "none"; // in some browsers (like certain flavors of Android), the getScreenCTM() matrix is contaminated by the scroll position. We can run some logic here to detect that condition, but we ended up not needing this because we found another workaround using getBoundingClientRect().

    div.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;";
    parent.appendChild(div);
    div.appendChild(svg);
    point = svg.createSVGPoint().matrixTransform(svg.getScreenCTM());
    e1 = point.y;
    div.scrollTop = 100;
    point.x = point.y = 0;
    point = point.matrixTransform(svg.getScreenCTM());
    _svgScrollOffset = e1 - point.y < 100.1 ? 0 : e1 - point.y - 150;
    div.removeChild(svg);
    parent.removeChild(div); // -- end _svgScrollOffset calculation.

    parent.appendChild(svg);

    if (isFlex) {
      parent.style.display = "block"; //Firefox bug causes getScreenCTM() to return null when parent is display:flex and the element isn't rendered inside the window (like if it's below the scroll position)
    }

    matrix = svg.getScreenCTM();
    e1 = matrix.e;
    style.border = "50px solid red";
    matrix = svg.getScreenCTM();

    if (e1 === 0 && matrix.e === 0 && matrix.f === 0 && matrix.a === 1) {
      //Opera has a bunch of bugs - it doesn't adjust the x/y of the matrix, nor does it scale when box-sizing is border-box but it does so elsewhere; to get the correct behavior we set _svgBorderScales to true.
      _svgBorderFactor = 1;
      _svgBorderScales = true;
    } else {
      _svgBorderFactor = e1 !== matrix.e ? 1 : 0;
      _svgBorderScales = matrix.a !== 1;
    }

    if (isFlex) {
      parent.style.display = "flex";
    }

    parent.removeChild(svg);
  },
      _supports3D = _checkPrefix(_tempDiv, "perspective") !== "",
      // start matrix and point conversion methods...
  _transformOriginProp = _checkPrefix(_tempDiv, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
      _transformProp = _checkPrefix(_tempDiv, "transform"),
      _transformPropCSS = _transformProp.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
      _point1 = {},
      //we reuse _point1 and _point2 objects inside matrix and point conversion methods to conserve memory and minimize garbage collection tasks.
  _point2 = {},
      _SVGElement = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SVGElement,
      _isSVG = function _isSVG(e) {
    return !!(_SVGElement && typeof e.getBBox === "function" && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM));
  },
      _isIE10orBelow = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator && (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
      //Ideally we'd avoid user agent sniffing, but there doesn't seem to be a way to feature-detect and sense a border-related bug that only affects IE10 and IE9.
  _tempTransforms = [],
      _tempElements = [],
      _getSVGOffsets = function _getSVGOffsets(e) {
    //SVG elements don't always report offsetTop/offsetLeft/offsetParent at all (I'm looking at you, Firefox 29 and Android), so we have to do some work to manufacture those values. You can pass any SVG element and it'll spit back an object with offsetTop, offsetLeft, offsetParent, scaleX, and scaleY properties. We need the scaleX and scaleY to handle the way SVG can resize itself based on the container.
    if (!e.getBoundingClientRect || !e.parentNode || !_transformProp) {
      return {
        offsetTop: 0,
        offsetLeft: 0,
        scaleX: 1,
        scaleY: 1,
        offsetParent: _docElement
      };
    }

    if (Draggable.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame) {
      //performance optimization. Assume that if the offsets are requested again on the same tick, we can just feed back the values we already calculated (no need to keep recalculating until another tick elapses).
      return e._dCache;
    }

    var curElement = e,
        cache = _cache(e),
        eRect,
        parentRect,
        offsetParent,
        cs,
        m,
        i,
        point1,
        point2,
        borderWidth,
        borderHeight,
        width,
        height;

    cache.lastUpdate = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;

    if (e.getBBox && !cache.isSVGRoot) {
      //if it's a nested/child SVG element, we must find the parent SVG canvas and measure the offset from there.
      curElement = e.parentNode;
      eRect = e.getBBox();

      while (curElement && (curElement.nodeName + "").toLowerCase() !== "svg") {
        curElement = curElement.parentNode;
      }

      cs = _getSVGOffsets(curElement);
      cache.offsetTop = eRect.y * cs.scaleY;
      cache.offsetLeft = eRect.x * cs.scaleX;
      cache.scaleX = cs.scaleX;
      cache.scaleY = cs.scaleY;
      cache.offsetParent = curElement || _docElement;
      return cache;
    } //only root SVG elements continue here...


    offsetParent = cache.offsetParent;

    if (offsetParent === _doc.body) {
      offsetParent = _docElement; //avoids problems with margins/padding on the body
    } //walk up the ancestors and record any non-identity transforms (and reset them to "none") until we reach the offsetParent. We must do this so that the getBoundingClientRect() is accurate for measuring the offsetTop/offsetLeft. We'll revert the values later...


    _tempElements.length = _tempTransforms.length = 0;

    while (curElement) {
      m = _getStyle(curElement, _transformProp, true);

      if (m !== "matrix(1, 0, 0, 1, 0, 0)" && m !== "none" && m !== "translate3d(0px, 0px, 0px)") {
        _tempElements.push(curElement);

        _tempTransforms.push(curElement.style[_transformProp]);

        curElement.style[_transformProp] = "none";
      }

      if (curElement === offsetParent) {
        break;
      }

      curElement = curElement.parentNode;
    }

    parentRect = offsetParent.getBoundingClientRect();
    m = e.getScreenCTM();
    point2 = e.createSVGPoint();
    point1 = point2.matrixTransform(m);
    cache.scaleX = Math.sqrt(m.a * m.a + m.b * m.b);
    cache.scaleY = Math.sqrt(m.d * m.d + m.c * m.c);

    if (_svgBorderFactor === undefined) {
      _setEnvironmentVariables();
    }

    if (cache.borderBox && !_svgBorderScales && e.getAttribute("width")) {
      //some browsers (like Safari) don't properly scale the matrix to accommodate the border when box-sizing is border-box, so we must calculate it here...
      cs = _getComputedStyle(e) || {};
      borderWidth = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth) || 0;
      borderHeight = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth) || 0;
      width = parseFloat(cs.width) || 0;
      height = parseFloat(cs.height) || 0;
      cache.scaleX *= (width - borderWidth) / width;
      cache.scaleY *= (height - borderHeight) / height;
    }

    if (_svgScrollOffset) {
      //some browsers (like Chrome for Android) have bugs in the way getScreenCTM() is reported (it doesn't factor in scroll position), so we must revert to a more expensive technique for calculating offsetTop/Left.
      eRect = e.getBoundingClientRect();
      cache.offsetLeft = eRect.left - parentRect.left;
      cache.offsetTop = eRect.top - parentRect.top;
    } else {
      cache.offsetLeft = point1.x - parentRect.left;
      cache.offsetTop = point1.y - parentRect.top;
    }

    cache.offsetParent = offsetParent;
    i = _tempElements.length;

    while (--i > -1) {
      _tempElements[i].style[_transformProp] = _tempTransforms[i];
    }

    return cache;
  },
      _getOffsetTransformOrigin = function _getOffsetTransformOrigin(e, decoratee) {
    //returns the x/y position of the transformOrigin of the element, in its own local coordinate system (pixels), offset from the top left corner.
    decoratee = decoratee || {};

    if (!e || e === _docElement || !e.parentNode || e === window) {
      return {
        x: 0,
        y: 0
      };
    }

    var cs = _getComputedStyle(e),
        v = _transformOriginProp && cs ? cs.getPropertyValue(_transformOriginProp) : "50% 50%",
        a = v.split(" "),
        x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
        y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1];

    if (y === "center" || y == null) {
      y = "50%";
    }

    if (x === "center" || isNaN(parseFloat(x))) {
      //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
      x = "50%";
    }

    if (e.getBBox && _isSVG(e)) {
      //SVG elements must be handled in a special way because their origins are calculated from the top left.
      if (!e._gsTransform) {
        _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(e, {
          x: "+=0",
          overwrite: false
        }); //forces creation of the _gsTransform where we store all the transform components including xOrigin and yOrigin for SVG elements, as of GSAP 1.15.0 which also takes care of calculating the origin from the upper left corner of the SVG canvas.

        if (e._gsTransform.xOrigin === undefined) {
          console.log("Draggable requires at least GSAP 1.17.0");
        }
      }

      v = e.getBBox();
      decoratee.x = e._gsTransform.xOrigin - v.x;
      decoratee.y = e._gsTransform.yOrigin - v.y;
    } else {
      if (e.getBBox && (x + y).indexOf("%") !== -1) {
        //Firefox doesn't report offsetWidth/height on <svg> elements.
        e = e.getBBox();
        e = {
          offsetWidth: e.width,
          offsetHeight: e.height
        };
      }

      decoratee.x = x.indexOf("%") !== -1 ? e.offsetWidth * parseFloat(x) / 100 : parseFloat(x);
      decoratee.y = y.indexOf("%") !== -1 ? e.offsetHeight * parseFloat(y) / 100 : parseFloat(y);
    }

    return decoratee;
  },
      _cache = function _cache(e) {
    //computes some important values and stores them in a _dCache object attached to the element itself so that we can optimize performance
    if (Draggable.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame) {
      //performance optimization. Assume that if the offsets are requested again on the same tick, we can just feed back the values we already calculated (no need to keep recalculating until another tick elapses).
      return e._dCache;
    }

    var cache = e._dCache = e._dCache || {},
        cs = _getComputedStyle(e),
        isSVG = e.getBBox && _isSVG(e),
        isSVGRoot = (e.nodeName + "").toLowerCase() === "svg",
        curSVG;

    cache.isSVG = isSVG;
    cache.isSVGRoot = isSVGRoot;
    cache.borderBox = cs.boxSizing === "border-box";
    cache.computedStyle = cs;

    if (isSVGRoot) {
      //some browsers don't report parentNode on SVG elements.
      curSVG = e.parentNode || _docElement;
      curSVG.insertBefore(_tempDiv, e);
      cache.offsetParent = _tempDiv.offsetParent || _docElement; //in some cases, Firefox still reports offsetParent as null.

      curSVG.removeChild(_tempDiv);
    } else if (isSVG) {
      curSVG = e.parentNode;

      while (curSVG && (curSVG.nodeName + "").toLowerCase() !== "svg") {
        //offsetParent is always the SVG canvas for SVG elements.
        curSVG = curSVG.parentNode;
      }

      cache.offsetParent = curSVG;
    } else {
      cache.offsetParent = e.offsetParent;
    }

    return cache;
  },
      _getOffset2DMatrix = function _getOffset2DMatrix(e, offsetOrigin, parentOffsetOrigin, zeroOrigin, isBase) {
    //"isBase" helps us discern context - it should only be true when the element is the base one (the one at which we're starting to walk up the chain). It only matters in cases when it's an <svg> element itself because that's a case when we don't apply scaling.
    if (e === window || !e || !e.style || !e.parentNode) {
      return [1, 0, 0, 1, 0, 0];
    }

    var cache = e._dCache || _cache(e),
        parent = e.parentNode,
        parentCache = parent._dCache || _cache(parent),
        cs = cache.computedStyle,
        parentOffsetParent = cache.isSVG ? parentCache.offsetParent : parent.offsetParent,
        m,
        isRoot,
        offsets,
        rect,
        t,
        sx,
        sy,
        offsetX,
        offsetY,
        parentRect,
        borderTop,
        borderLeft,
        borderTranslateX,
        borderTranslateY;

    m = cache.isSVG && (e.style[_transformProp] + "").indexOf("matrix") !== -1 ? e.style[_transformProp] : cs ? cs.getPropertyValue(_transformPropCSS) : e.currentStyle ? e.currentStyle[_transformProp] : "1,0,0,1,0,0"; //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values

    if (e.getBBox && (e.getAttribute("transform") + "").indexOf("matrix") !== -1) {
      //SVG can store transform data in its "transform" attribute instead of the CSS, so look for that here (only accept matrix()).
      m = e.getAttribute("transform");
    }

    m = (m + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0];

    if (m.length > 6) {
      m = [m[0], m[1], m[4], m[5], m[12], m[13]];
    }

    if (zeroOrigin) {
      m[4] = m[5] = 0;
    } else if (cache.isSVG && (t = e._gsTransform) && (t.xOrigin || t.yOrigin)) {
      //SVGs handle origin very differently. Factor in GSAP's handling of origin values here:
      m[0] = parseFloat(m[0]);
      m[1] = parseFloat(m[1]);
      m[2] = parseFloat(m[2]);
      m[3] = parseFloat(m[3]);
      m[4] = parseFloat(m[4]) - (t.xOrigin - (t.xOrigin * m[0] + t.yOrigin * m[2]));
      m[5] = parseFloat(m[5]) - (t.yOrigin - (t.xOrigin * m[1] + t.yOrigin * m[3]));
    }

    if (offsetOrigin) {
      if (_svgBorderFactor === undefined) {
        _setEnvironmentVariables();
      }

      offsets = cache.isSVG || cache.isSVGRoot ? _getSVGOffsets(e) : e;

      if (cache.isSVG) {
        //don't just rely on "instanceof _SVGElement" because if the SVG is embedded via an object tag, it won't work (SVGElement is mapped to a different object))
        rect = e.getBBox();
        parentRect = parentCache.isSVGRoot ? {
          x: 0,
          y: 0
        } : parent.getBBox();
        offsets = {
          offsetLeft: rect.x - parentRect.x,
          offsetTop: rect.y - parentRect.y,
          offsetParent: cache.offsetParent
        };
      } else if (cache.isSVGRoot) {
        borderTop = parseInt(cs.borderTopWidth, 10) || 0;
        borderLeft = parseInt(cs.borderLeftWidth, 10) || 0;
        borderTranslateX = (m[0] - _svgBorderFactor) * borderLeft + m[2] * borderTop;
        borderTranslateY = m[1] * borderLeft + (m[3] - _svgBorderFactor) * borderTop;
        sx = offsetOrigin.x;
        sy = offsetOrigin.y;
        offsetX = sx - (sx * m[0] + sy * m[2]); //accommodate the SVG root's transforms when the origin isn't in the top left.

        offsetY = sy - (sx * m[1] + sy * m[3]);
        m[4] = parseFloat(m[4]) + offsetX;
        m[5] = parseFloat(m[5]) + offsetY;
        offsetOrigin.x -= offsetX;
        offsetOrigin.y -= offsetY;
        sx = offsets.scaleX;
        sy = offsets.scaleY;

        if (!isBase) {
          //when getting the matrix for a root <svg> element itself (NOT in the context of an SVG element that's nested inside of it like a <path>), we do NOT apply the scaling!
          offsetOrigin.x *= sx;
          offsetOrigin.y *= sy;
        }

        m[0] *= sx;
        m[1] *= sy;
        m[2] *= sx;
        m[3] *= sy;

        if (!_isIE10orBelow) {
          offsetOrigin.x += borderTranslateX;
          offsetOrigin.y += borderTranslateY;
        }

        if (parentOffsetParent === _doc.body && offsets.offsetParent === _docElement) {
          //to avoid issues with margin/padding on the <body>, we always set the offsetParent to _docElement in the _getSVGOffsets() function but there's a condition we check later in this function for (parentOffsetParent === offsets.offsetParent) which would fail if we don't run this logic. In other words, parentOffsetParent may be <body> and the <svg>'s offsetParent is also <body> but artificially set to _docElement to avoid margin/padding issues.
          parentOffsetParent = _docElement;
        }
      } else if (!_hasBorderBug && e.offsetParent) {
        offsetOrigin.x += parseInt(_getStyle(e.offsetParent, "borderLeftWidth"), 10) || 0;
        offsetOrigin.y += parseInt(_getStyle(e.offsetParent, "borderTopWidth"), 10) || 0;
      }

      isRoot = parent === _docElement || parent === _doc.body;
      m[4] = Number(m[4]) + offsetOrigin.x + (offsets.offsetLeft || 0) - parentOffsetOrigin.x - (isRoot ? 0 : parent.scrollLeft || 0);
      m[5] = Number(m[5]) + offsetOrigin.y + (offsets.offsetTop || 0) - parentOffsetOrigin.y - (isRoot ? 0 : parent.scrollTop || 0);

      if (parent && _getStyle(e, "position", cs) === "fixed") {
        //fixed position elements should factor in the scroll position of the document.
        m[4] += _getDocScrollLeft();
        m[5] += _getDocScrollTop();
      }

      if (parent && parent !== _docElement && parentOffsetParent === offsets.offsetParent && !parentCache.isSVG && (!_hasReparentBug || _getOffset2DMatrix(parent).join("") === "100100")) {
        offsets = parentCache.isSVGRoot ? _getSVGOffsets(parent) : parent;
        m[4] -= offsets.offsetLeft || 0;
        m[5] -= offsets.offsetTop || 0;

        if (!_hasBorderBug && parentCache.offsetParent && !cache.isSVG && !cache.isSVGRoot) {
          m[4] -= parseInt(_getStyle(parentCache.offsetParent, "borderLeftWidth"), 10) || 0;
          m[5] -= parseInt(_getStyle(parentCache.offsetParent, "borderTopWidth"), 10) || 0;
        }
      }
    }

    return m;
  },
      _getConcatenatedMatrix = function _getConcatenatedMatrix(e, invert) {
    if (!e || e === window || !e.parentNode) {
      return [1, 0, 0, 1, 0, 0];
    } //note: we keep reusing _point1 and _point2 in order to minimize memory usage and garbage collection chores.


    var originOffset = _getOffsetTransformOrigin(e, _point1),
        parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, _point2),
        m = _getOffset2DMatrix(e, originOffset, parentOriginOffset, false, !invert),
        a,
        b,
        c,
        d,
        tx,
        ty,
        m2,
        determinant;

    while ((e = e.parentNode) && e.parentNode && e !== _docElement) {
      originOffset = parentOriginOffset;
      parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, originOffset === _point1 ? _point2 : _point1);
      m2 = _getOffset2DMatrix(e, originOffset, parentOriginOffset);
      a = m[0];
      b = m[1];
      c = m[2];
      d = m[3];
      tx = m[4];
      ty = m[5];
      m[0] = a * m2[0] + b * m2[2];
      m[1] = a * m2[1] + b * m2[3];
      m[2] = c * m2[0] + d * m2[2];
      m[3] = c * m2[1] + d * m2[3];
      m[4] = tx * m2[0] + ty * m2[2] + m2[4];
      m[5] = tx * m2[1] + ty * m2[3] + m2[5];
    }

    if (invert) {
      a = m[0];
      b = m[1];
      c = m[2];
      d = m[3];
      tx = m[4];
      ty = m[5];
      determinant = a * d - b * c;
      m[0] = d / determinant;
      m[1] = -b / determinant;
      m[2] = -c / determinant;
      m[3] = a / determinant;
      m[4] = (c * ty - d * tx) / determinant;
      m[5] = -(a * ty - b * tx) / determinant;
    }

    return m;
  },
      _localToGlobal = function _localToGlobal(e, p, fromTopLeft, decoratee, zeroOrigin) {
    e = _unwrapElement(e);

    var m = _getConcatenatedMatrix(e, false, zeroOrigin),
        x = p.x,
        y = p.y;

    if (fromTopLeft) {
      _getOffsetTransformOrigin(e, p);

      x -= p.x;
      y -= p.y;
    }

    decoratee = decoratee === true ? p : decoratee || {};
    decoratee.x = x * m[0] + y * m[2] + m[4];
    decoratee.y = x * m[1] + y * m[3] + m[5];
    return decoratee;
  },
      _localizePoint = function _localizePoint(p, localToGlobal, globalToLocal) {
    var x = p.x * localToGlobal[0] + p.y * localToGlobal[2] + localToGlobal[4],
        y = p.x * localToGlobal[1] + p.y * localToGlobal[3] + localToGlobal[5];
    p.x = x * globalToLocal[0] + y * globalToLocal[2] + globalToLocal[4];
    p.y = x * globalToLocal[1] + y * globalToLocal[3] + globalToLocal[5];
    return p;
  },
      _getElementBounds = function _getElementBounds(e, context, fromTopLeft) {
    if (!(e = _unwrapElement(e))) {
      return null;
    }

    context = _unwrapElement(context);

    var isSVG = e.getBBox && _isSVG(e),
        origin,
        left,
        right,
        top,
        bottom,
        mLocalToGlobal,
        mGlobalToLocal,
        p1,
        p2,
        p3,
        p4,
        bbox,
        width,
        height,
        cache,
        borderLeft,
        borderTop,
        viewBox,
        viewBoxX,
        viewBoxY,
        computedDimensions,
        cs;

    if (e === window) {
      top = _getDocScrollTop();
      left = _getDocScrollLeft();
      right = left + (_docElement.clientWidth || e.innerWidth || _doc.body.clientWidth || 0);
      bottom = top + ((e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _doc.body.clientHeight || 0); //some browsers (like Firefox) ignore absolutely positioned elements, and collapse the height of the documentElement, so it could be 8px, for example, if you have just an absolutely positioned div. In that case, we use the innerHeight to resolve this.
    } else if (context === undefined || context === window) {
      return e.getBoundingClientRect();
    } else {
      origin = _getOffsetTransformOrigin(e);
      left = -origin.x;
      top = -origin.y;

      if (isSVG) {
        bbox = e.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else if ((e.nodeName + "").toLowerCase() !== "svg" && e.offsetWidth) {
        //Chrome dropped support for "offsetWidth" on SVG elements
        width = e.offsetWidth;
        height = e.offsetHeight;
      } else {
        computedDimensions = _getComputedStyle(e);
        width = parseFloat(computedDimensions.width);
        height = parseFloat(computedDimensions.height);
      }

      right = left + width;
      bottom = top + height;

      if (e.nodeName.toLowerCase() === "svg" && !_isOldIE) {
        //root SVG elements are a special beast because they have 2 types of scaling - transforms on themselves as well as the stretching of the SVG canvas itself based on the outer size and the viewBox. If, for example, the SVG's viewbox is "0 0 100 100" but the CSS is set to width:200px; height:200px, that'd make it appear at 2x scale even though the element itself has no CSS transforms but the offsetWidth/offsetHeight are based on that css, not the viewBox so we need to adjust them accordingly.
        cache = _getSVGOffsets(e);
        cs = cache.computedStyle || {};
        viewBox = (e.getAttribute("viewBox") || "0 0").split(" ");
        viewBoxX = parseFloat(viewBox[0]);
        viewBoxY = parseFloat(viewBox[1]);
        borderLeft = parseFloat(cs.borderLeftWidth) || 0;
        borderTop = parseFloat(cs.borderTopWidth) || 0;
        right -= width - (width - borderLeft) / cache.scaleX - viewBoxX;
        bottom -= height - (height - borderTop) / cache.scaleY - viewBoxY;
        left -= borderLeft / cache.scaleX - viewBoxX;
        top -= borderTop / cache.scaleY - viewBoxY;

        if (computedDimensions) {
          //when we had to use computed styles, factor in the border now.
          right += (parseFloat(cs.borderRightWidth) + borderLeft) / cache.scaleX;
          bottom += (borderTop + parseFloat(cs.borderBottomWidth)) / cache.scaleY;
        }
      }
    }

    if (e === context) {
      return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top
      };
    }

    mLocalToGlobal = _getConcatenatedMatrix(e);
    mGlobalToLocal = _getConcatenatedMatrix(context, true);
    p1 = _localizePoint({
      x: left,
      y: top
    }, mLocalToGlobal, mGlobalToLocal);
    p2 = _localizePoint({
      x: right,
      y: top
    }, mLocalToGlobal, mGlobalToLocal);
    p3 = _localizePoint({
      x: right,
      y: bottom
    }, mLocalToGlobal, mGlobalToLocal);
    p4 = _localizePoint({
      x: left,
      y: bottom
    }, mLocalToGlobal, mGlobalToLocal);
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    _temp1.x = _temp1.y = 0;

    if (fromTopLeft) {
      _getOffsetTransformOrigin(context, _temp1);
    }

    return {
      left: left + _temp1.x,
      top: top + _temp1.y,
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  },
      // end matrix and point conversion methods
  _isArrayLike = function _isArrayLike(e) {
    return e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? true : false; //could be an array of jQuery objects too, so accommodate that.
  },
      _flattenArray = function _flattenArray(a) {
    var result = [],
        l = a.length,
        i,
        e,
        j;

    for (i = 0; i < l; i++) {
      e = a[i];

      if (_isArrayLike(e)) {
        j = e.length;

        for (j = 0; j < e.length; j++) {
          result.push(e[j]);
        }
      } else if (e && e.length !== 0) {
        result.push(e);
      }
    }

    return result;
  },
      _isTouchDevice = typeof window !== "undefined" && "ontouchstart" in _docElement && "orientation" in window,
      _touchEventLookup = function (types) {
    //we create an object that makes it easy to translate touch event types into their "pointer" counterparts if we're in a browser that uses those instead. Like IE10 uses "MSPointerDown" instead of "touchstart", for example.
    var standard = types.split(","),
        converted = (_tempDiv.onpointerdown !== undefined ? "pointerdown,pointermove,pointerup,pointercancel" : _tempDiv.onmspointerdown !== undefined ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
        obj = {},
        i = 4;

    while (--i > -1) {
      obj[standard[i]] = converted[i];
      obj[converted[i]] = standard[i];
    }

    return obj;
  }("touchstart,touchmove,touchend,touchcancel"),
      _addListener = function _addListener(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || {
        passive: false
      };
      element.addEventListener(touchType || type, func, capture);

      if (touchType && type !== touchType) {
        //some browsers actually support both, so must we.
        element.addEventListener(type, func, capture);
      }
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, func);
    }
  },
      _removeListener = function _removeListener(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);

      if (touchType && type !== touchType) {
        element.removeEventListener(type, func);
      }
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, func);
    }
  },
      _hasTouchID = function _hasTouchID(list, ID) {
    var i = list.length;

    while (--i > -1) {
      if (list[i].identifier === ID) {
        return true;
      }
    }

    return false;
  },
      _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(e) {
    _isMultiTouching = e.touches && _dragCount < e.touches.length;

    _removeListener(e.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _onMultiTouchDocument = function _onMultiTouchDocument(e) {
    _isMultiTouching = e.touches && _dragCount < e.touches.length;

    _addListener(e.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _parseThrowProps = function _parseThrowProps(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {},
        a,
        i,
        l;

    if (snap) {
      if (factor !== 1 && snap instanceof Array) {
        //some data must be altered to make sense, like if the user passes in an array of rotational values in degrees, we must convert it to radians. Or for scrollLeft and scrollTop, we invert the values.
        vars.end = a = [];
        l = snap.length;

        if (_typeof(snap[0]) === "object") {
          //if the array is populated with objects, like points ({x:100, y:200}), make copies before multiplying by the factor, otherwise we'll mess up the originals and the user may reuse it elsewhere.
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap[i] * factor;
          }
        }

        max += 1.1; //allow 1.1 pixels of wiggle room when snapping in order to work around some browser inconsistencies in the way bounds are reported which can make them roughly a pixel off. For example, if "snap:[-$('#menu').width(), 0]" was defined and #menu had a wrapper that was used as the bounds, some browsers would be one pixel off, making the minimum -752 for example when snap was [-753,0], thus instead of snapping to -753, it would snap to 0 since -753 was below the minimum.

        min -= 1.1;
      } else if (typeof snap === "function") {
        vars.end = function (value) {
          var result = snap.call(draggable, value),
              copy,
              p;

          if (factor !== 1) {
            if (_typeof(result) === "object") {
              copy = {};

              for (p in result) {
                copy[p] = result[p] * factor;
              }

              result = copy;
            } else {
              result *= factor;
            }
          }

          return result; //we need to ensure that we can scope the function call to the Draggable instance itself so that users can access important values like maxX, minX, maxY, minY, x, and y from within that function.
        };
      } else {
        vars.end = snap;
      }
    }

    if (max || max === 0) {
      vars.max = max;
    }

    if (min || min === 0) {
      vars.min = min;
    }

    if (forceZeroVelocity) {
      vars.velocity = 0;
    }

    return vars;
  },
      _isClickable = function _isClickable(e) {
    //sometimes it's convenient to mark an element as clickable by adding a data-clickable="true" attribute (in which case we won't preventDefault() the mouse/touch event). This method checks if the element is an <a>, <input>, or <button> or has an onclick or has the data-clickable or contentEditable attribute set to true (or any of its parent elements).
    var data;
    return !e || !e.getAttribute || e.nodeName === "BODY" ? false : (data = e.getAttribute("data-clickable")) === "true" || data !== "false" && (e.onclick || _clickableTagExp.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? true : _isClickable(e.parentNode);
  },
      _setSelectable = function _setSelectable(elements, selectable) {
    var i = elements.length,
        e;

    while (--i > -1) {
      e = elements[i];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;

      _setStyle(e, "userSelect", selectable ? "text" : "none");
    }
  },
      _addPaddingBR = function () {
    //this function is in charge of analyzing browser behavior related to padding. It sets the _addPaddingBR to true if the browser doesn't normally factor in the bottom or right padding on the element inside the scrolling area, and it sets _addPaddingLeft to true if it's a browser that requires the extra offset (offsetLeft) to be added to the paddingRight (like Opera).
    var div = _doc.createElement("div"),
        child = _doc.createElement("div"),
        childStyle = child.style,
        parent = _doc.body || _tempDiv,
        val;

    childStyle.display = "inline-block";
    childStyle.position = "relative";
    div.style.cssText = child.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden";
    div.appendChild(child);
    parent.appendChild(div);
    val = child.offsetHeight + 18 > div.scrollHeight; //div.scrollHeight should be child.offsetHeight + 20 because of the 10px of padding on each side, but some browsers ignore one side. We allow a 2px margin of error.

    parent.removeChild(div);
    return val;
  }(),
      //The ScrollProxy class wraps an element's contents into another div (we call it "content") that we either add padding when necessary or apply a translate3d() transform in order to overscroll (scroll past the boundaries). This allows us to simply set the scrollTop/scrollLeft (or top/left for easier reverse-axis orientation, which is what we do in Draggable) and it'll do all the work for us. For example, if we tried setting scrollTop to -100 on a normal DOM element, it wouldn't work - it'd look the same as setting it to 0, but if we set scrollTop of a ScrollProxy to -100, it'll give the correct appearance by either setting paddingTop of the wrapper to 100 or applying a 100-pixel translateY.
  ScrollProxy = function ScrollProxy(element, vars) {
    element = _unwrapElement(element);
    vars = vars || {};

    var content = _doc.createElement("div"),
        style = content.style,
        node = element.firstChild,
        offsetTop = 0,
        offsetLeft = 0,
        prevTop = element.scrollTop,
        prevLeft = element.scrollLeft,
        scrollWidth = element.scrollWidth,
        scrollHeight = element.scrollHeight,
        extraPadRight = 0,
        maxLeft = 0,
        maxTop = 0,
        elementWidth,
        elementHeight,
        contentHeight,
        nextNode,
        transformStart,
        transformEnd;

    if (_supports3D && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp) {
      transformStart = "translate(";
      transformEnd = "px)";
    }

    this.scrollTop = function (value, force) {
      if (!arguments.length) {
        return -this.top();
      }

      this.top(-value, force);
    };

    this.scrollLeft = function (value, force) {
      if (!arguments.length) {
        return -this.left();
      }

      this.left(-value, force);
    };

    this.left = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }

      var dif = element.scrollLeft - prevLeft,
          oldOffset = offsetLeft;

      if ((dif > 2 || dif < -2) && !force) {
        //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
        prevLeft = element.scrollLeft;
        _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf(this, true, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value; //invert because scrolling works in the opposite direction

      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }

      if (offsetLeft || oldOffset) {
        if (transformStart) {
          if (!this._suspendTransforms) {
            style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
          }
        } else {
          style.left = -offsetLeft + "px";
        }

        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }

      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft; //don't merge this with the line above because some browsers adjsut the scrollLeft after it's set, so in order to be 100% accurate in tracking it, we need to ask the browser to report it.
    };

    this.top = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }

      var dif = element.scrollTop - prevTop,
          oldOffset = offsetTop;

      if ((dif > 2 || dif < -2) && !force) {
        //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
        prevTop = element.scrollTop;
        _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf(this, true, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value; //invert because scrolling works in the opposite direction

      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }

      if (offsetTop || oldOffset) {
        if (transformStart) {
          if (!this._suspendTransforms) {
            style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
          }
        } else {
          style.top = -offsetTop + "px";
        }
      }

      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };

    this.maxScrollTop = function () {
      return maxTop;
    };

    this.maxScrollLeft = function () {
      return maxLeft;
    };

    this.disable = function () {
      node = content.firstChild;

      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }

      if (element === content.parentNode) {
        //in case disable() is called when it's already disabled.
        element.removeChild(content);
      }
    };

    this.enable = function () {
      node = element.firstChild;

      if (node === content) {
        return;
      }

      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }

      element.appendChild(content);
      this.calibrate();
    };

    this.calibrate = function (force) {
      var widthMatches = element.clientWidth === elementWidth,
          x,
          y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;

      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return; //no need to recalculate things if the width and height haven't changed.
      }

      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      } //first, we need to remove any width constraints to see how the content naturally flows so that we can see if it's wider than the containing element. If so, we've got to record the amount of overage so that we can apply that as padding in order for browsers to correctly handle things. Then we switch back to a width of 100% (without that, some browsers don't flow the content correctly)


      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth); //if the content is wider than the container, we need to add the paddingLeft and paddingRight in order for things to behave correctly.

        if (extraPadRight) {
          extraPadRight += _getStyle(element, "paddingLeft") + (_addPaddingBR ? _getStyle(element, "paddingRight") : 0);
        }
      }

      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px"; //some browsers neglect to factor in the bottom padding when calculating the scrollHeight, so we need to add that padding to the content when that happens. Allow a 2px margin for error

      if (_addPaddingBR) {
        style.paddingBottom = _getStyle(element, "paddingBottom", true);
      }

      if (_isOldIE) {
        style.zoom = "1";
      }

      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";

      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };

    this.content = content;
    this.element = element;
    this._suspendTransforms = false;
    this.enable();
  },
      Draggable = function Draggable(target, vars) {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"].call(this, target);
    target = _unwrapElement(target); //in case the target is a selector object or selector text

    if (!ThrowPropsPlugin) {
      ThrowPropsPlugin = _globals.com.greensock.plugins.ThrowPropsPlugin;
    }

    this.vars = vars = _copy(vars || {});
    this.target = target;
    this.x = this.y = this.rotation = 0;
    this.dragResistance = parseFloat(vars.dragResistance) || 0;
    this.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
    this.lockAxis = vars.lockAxis;
    this.autoScroll = vars.autoScroll || 0;
    this.lockedAxis = null;
    this.allowEventDefault = !!vars.allowEventDefault;

    var type = (vars.type || (_isOldIE ? "top,left" : "x,y")).toLowerCase(),
        xyMode = type.indexOf("x") !== -1 || type.indexOf("y") !== -1,
        rotationMode = type.indexOf("rotation") !== -1,
        xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
        yProp = xyMode ? "y" : "top",
        allowX = type.indexOf("x") !== -1 || type.indexOf("left") !== -1 || type === "scroll",
        allowY = type.indexOf("y") !== -1 || type.indexOf("top") !== -1 || type === "scroll",
        minimumMovement = vars.minimumMovement || 2,
        self = this,
        triggers = _slice(vars.trigger || vars.handle || target),
        killProps = {},
        dragEndTime = 0,
        checkAutoScrollBounds = false,
        autoScrollMarginTop = vars.autoScrollMarginTop || 40,
        autoScrollMarginRight = vars.autoScrollMarginRight || 40,
        autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
        autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
        isClickable = vars.clickableTest || _isClickable,
        clickTime = 0,
        enabled,
        scrollProxy,
        startPointerX,
        startPointerY,
        startElementX,
        startElementY,
        hasBounds,
        hasDragCallback,
        maxX,
        minX,
        maxY,
        minY,
        tempVars,
        cssVars,
        touch,
        touchID,
        rotationOrigin,
        dirty,
        old,
        snapX,
        snapY,
        snapXY,
        isClicking,
        touchEventTarget,
        matrix,
        interrupted,
        startScrollTop,
        startScrollLeft,
        applyObj,
        allowNativeTouchScrolling,
        touchDragAxis,
        isDispatching,
        clickDispatch,
        trustedClickDispatch,
        onContextMenu = function onContextMenu(e) {
      //used to prevent long-touch from triggering a context menu.
      if (self.isPressed && e.which < 2) {
        self.endDrag();
      } else {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
        //this method gets called on every tick of TweenLite.ticker which allows us to synchronize the renders to the core engine (which is typically synchronized with the display refresh via requestAnimationFrame). This is an optimization - it's better than applying the values inside the "mousemove" or "touchmove" event handler which may get called many times inbetween refreshes.
    render = function render(suppressEvents) {
      if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
        var e = target,
            autoScrollFactor = self.autoScroll * 15,
            //multiplying by 15 just gives us a better "feel" speed-wise.
        parent,
            isRoot,
            rect,
            pointerX,
            pointerY,
            changeX,
            changeY,
            gap;
        checkAutoScrollBounds = false;
        _windowProxy.scrollTop = window.pageYOffset != null ? window.pageYOffset : _docElement.scrollTop != null ? _docElement.scrollTop : _doc.body.scrollTop;
        _windowProxy.scrollLeft = window.pageXOffset != null ? window.pageXOffset : _docElement.scrollLeft != null ? _docElement.scrollLeft : _doc.body.scrollLeft;
        pointerX = self.pointerX - _windowProxy.scrollLeft;
        pointerY = self.pointerY - _windowProxy.scrollTop;

        while (e && !isRoot) {
          //walk up the chain and sense wherever the pointer is within 40px of an edge that's scrollable.
          isRoot = _isRoot(e.parentNode);
          parent = isRoot ? _windowProxy : e.parentNode;
          rect = isRoot ? {
            bottom: Math.max(_docElement.clientHeight, window.innerHeight || 0),
            right: Math.max(_docElement.clientWidth, window.innerWidth || 0),
            left: 0,
            top: 0
          } : parent.getBoundingClientRect();
          changeX = changeY = 0;

          if (allowY) {
            gap = parent._gsMaxScrollY - parent.scrollTop;

            if (gap < 0) {
              changeY = gap;
            } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
              checkAutoScrollBounds = true;
              changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
            } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
              checkAutoScrollBounds = true;
              changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
            }

            if (changeY) {
              parent.scrollTop += changeY;
            }
          }

          if (allowX) {
            gap = parent._gsMaxScrollX - parent.scrollLeft;

            if (gap < 0) {
              changeX = gap;
            } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
              checkAutoScrollBounds = true;
              changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
            } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
              checkAutoScrollBounds = true;
              changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
            }

            if (changeX) {
              parent.scrollLeft += changeX;
            }
          }

          if (isRoot && (changeX || changeY)) {
            window.scrollTo(parent.scrollLeft, parent.scrollTop);
            setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
          }

          e = parent;
        }
      }

      if (dirty) {
        var x = self.x,
            y = self.y,
            min = 0.000001;

        if (x < min && x > -min) {
          //browsers don't handle super small decimals well.
          x = 0;
        }

        if (y < min && y > -min) {
          y = 0;
        }

        if (rotationMode) {
          self.deltaX = x - applyObj.data.rotation;
          applyObj.data.rotation = self.rotation = x;
          applyObj.setRatio(1); //note: instead of doing TweenLite.set(), as a performance optimization we skip right to the method that renders the transforms inside CSSPlugin. For old versions of IE, though, we do a normal TweenLite.set() to leverage its ability to re-reroute to an IE-specific 2D renderer.
        } else {
          if (scrollProxy) {
            if (allowY) {
              self.deltaY = y - scrollProxy.top();
              scrollProxy.top(y);
            }

            if (allowX) {
              self.deltaX = x - scrollProxy.left();
              scrollProxy.left(x);
            }
          } else if (xyMode) {
            if (allowY) {
              self.deltaY = y - applyObj.data.y;
              applyObj.data.y = y;
            }

            if (allowX) {
              self.deltaX = x - applyObj.data.x;
              applyObj.data.x = x;
            }

            applyObj.setRatio(1); //note: instead of doing TweenLite.set(), as a performance optimization we skip right to the method that renders the transforms inside CSSPlugin. For old versions of IE, though, we do a normal TweenLite.set() to leverage its ability to re-reroute to an IE-specific 2D renderer.
          } else {
            if (allowY) {
              self.deltaY = y - parseFloat(target.style.top || 0);
              target.style.top = y + "px";
            }

            if (allowX) {
              self.deltaY = x - parseFloat(target.style.left || 0);
              target.style.left = x + "px";
            }
          }
        }

        if (hasDragCallback && !suppressEvents && !isDispatching) {
          isDispatching = true; //in case onDrag has an update() call (avoid endless loop)

          _dispatchEvent(self, "drag", "onDrag");

          isDispatching = false;
        }
      }

      dirty = false;
    },
        //copies the x/y from the element (whether that be transforms, top/left, or ScrollProxy's top/left) to the Draggable's x and y (and rotation if necessary) properties so that they reflect reality and it also (optionally) applies any snapping necessary. This is used by the ThrowPropsPlugin tween in an onUpdate to ensure things are synced and snapped.
    syncXY = function syncXY(skipOnUpdate, skipSnap) {
      var x = self.x,
          y = self.y,
          snappedValue;

      if (!target._gsTransform && (xyMode || rotationMode)) {
        //just in case the _gsTransform got wiped, like if the user called clearProps on the transform or something (very rare), doing an x tween forces a re-parsing of the transforms and population of the _gsTransform.
        _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(target, {
          x: "+=0",
          overwrite: false,
          data: "_draggable"
        });
      }

      if (xyMode) {
        self.y = target._gsTransform.y;
        self.x = target._gsTransform.x;
      } else if (rotationMode) {
        self.x = self.rotation = target._gsTransform.rotation;
      } else if (scrollProxy) {
        self.y = scrollProxy.top();
        self.x = scrollProxy.left();
      } else {
        self.y = parseInt(target.style.top, 10) || 0;
        self.x = parseInt(target.style.left, 10) || 0;
      }

      if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
        if (snapXY) {
          _temp1.x = self.x;
          _temp1.y = self.y;
          snappedValue = snapXY(_temp1);

          if (snappedValue.x !== self.x) {
            self.x = snappedValue.x;
            dirty = true;
          }

          if (snappedValue.y !== self.y) {
            self.y = snappedValue.y;
            dirty = true;
          }
        }

        if (snapX) {
          snappedValue = snapX(self.x);

          if (snappedValue !== self.x) {
            self.x = snappedValue;

            if (rotationMode) {
              self.rotation = snappedValue;
            }

            dirty = true;
          }
        }

        if (snapY) {
          snappedValue = snapY(self.y);

          if (snappedValue !== self.y) {
            self.y = snappedValue;
          }

          dirty = true;
        }
      }

      if (dirty) {
        render(true);
      }

      if (!skipOnUpdate) {
        self.deltaX = self.x - x;
        self.deltaY = self.y - y;

        _dispatchEvent(self, "throwupdate", "onThrowUpdate");
      }
    },
        calculateBounds = function calculateBounds() {
      var bounds, targetBounds, snap, snapIsRaw;
      hasBounds = false;

      if (scrollProxy) {
        scrollProxy.calibrate();
        self.minX = minX = -scrollProxy.maxScrollLeft();
        self.minY = minY = -scrollProxy.maxScrollTop();
        self.maxX = maxX = self.maxY = maxY = 0;
        hasBounds = true;
      } else if (!!vars.bounds) {
        bounds = _getBounds(vars.bounds, target.parentNode); //could be a selector/jQuery object or a DOM element or a generic object like {top:0, left:100, width:1000, height:800} or {minX:100, maxX:1100, minY:0, maxY:800}

        if (rotationMode) {
          self.minX = minX = bounds.left;
          self.maxX = maxX = bounds.left + bounds.width;
          self.minY = minY = self.maxY = maxY = 0;
        } else if (vars.bounds.maxX !== undefined || vars.bounds.maxY !== undefined) {
          bounds = vars.bounds;
          self.minX = minX = bounds.minX;
          self.minY = minY = bounds.minY;
          self.maxX = maxX = bounds.maxX;
          self.maxY = maxY = bounds.maxY;
        } else {
          targetBounds = _getBounds(target, target.parentNode);
          self.minX = minX = _getStyle(target, xProp) + bounds.left - targetBounds.left;
          self.minY = minY = _getStyle(target, yProp) + bounds.top - targetBounds.top;
          self.maxX = maxX = minX + (bounds.width - targetBounds.width);
          self.maxY = maxY = minY + (bounds.height - targetBounds.height);
        }

        if (minX > maxX) {
          self.minX = maxX;
          self.maxX = maxX = minX;
          minX = self.minX;
        }

        if (minY > maxY) {
          self.minY = maxY;
          self.maxY = maxY = minY;
          minY = self.minY;
        }

        if (rotationMode) {
          self.minRotation = minX;
          self.maxRotation = maxX;
        }

        hasBounds = true;
      }

      if (vars.liveSnap) {
        snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
        snapIsRaw = snap instanceof Array || typeof snap === "function";

        if (rotationMode) {
          snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
          snapY = null;
        } else {
          if (snap.points) {
            snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
          } else {
            if (allowX) {
              snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
            }

            if (allowY) {
              snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
            }
          }
        }
      }
    },
        onThrowComplete = function onThrowComplete() {
      self.isThrowing = false;

      _dispatchEvent(self, "throwcomplete", "onThrowComplete");
    },
        onThrowOverwrite = function onThrowOverwrite() {
      self.isThrowing = false;
    },
        animate = function animate(throwProps, forceZeroVelocity) {
      var snap, snapIsRaw, tween, overshootTolerance;

      if (throwProps && ThrowPropsPlugin) {
        if (throwProps === true) {
          snap = vars.snap || vars.liveSnap || {};
          snapIsRaw = snap instanceof Array || typeof snap === "function";
          throwProps = {
            resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
          };

          if (rotationMode) {
            throwProps.rotation = _parseThrowProps(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
          } else {
            if (allowX) {
              throwProps[xProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.x || snap.left || snap.scrollLeft, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
            }

            if (allowY) {
              throwProps[yProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.y || snap.top || snap.scrollTop, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
            }

            if (snap.points || snap instanceof Array && _typeof(snap[0]) === "object") {
              throwProps.linkedProps = xProp + "," + yProp;
              throwProps.radius = snap.radius; //note: we also disable liveSnapping while throwing if there's a "radius" defined, otherwise it looks weird to have the item thrown past a snapping point but live-snapping mid-tween. We do this by altering the onUpdateParams so that "skipSnap" parameter is true for syncXY.
            }
          }
        }

        self.isThrowing = true;
        overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
        self.tween = tween = ThrowPropsPlugin.to(scrollProxy || target, {
          throwProps: throwProps,
          data: "_draggable",
          ease: vars.ease || _globals.Power3.easeOut,
          onComplete: onThrowComplete,
          onOverwrite: onThrowOverwrite,
          onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
          onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : _emptyArray
        }, Math.max(vars.minDuration || 0, vars.maxDuration || 0) || 2, !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _typeof(throwProps) === "object" && throwProps.resistance > 1000 ? 0 : 0.5, overshootTolerance);

        if (!vars.fastMode) {
          //to populate the end values, we just scrub the tween to the end, record the values, and then jump back to the beginning.
          if (scrollProxy) {
            scrollProxy._suspendTransforms = true; //Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
          }

          tween.render(tween.duration(), true, true);
          syncXY(true, true);
          self.endX = self.x;
          self.endY = self.y;

          if (rotationMode) {
            self.endRotation = self.x;
          }

          tween.play(0);
          syncXY(true, true);

          if (scrollProxy) {
            scrollProxy._suspendTransforms = false;
          }
        }
      } else if (hasBounds) {
        self.applyBounds();
      }
    },
        updateMatrix = function updateMatrix(shiftStart) {
      var start = matrix || [1, 0, 0, 1, 0, 0],
          a,
          b,
          c,
          d,
          tx,
          ty,
          determinant,
          pointerX,
          pointerY;
      matrix = _getConcatenatedMatrix(target.parentNode, true);

      if (shiftStart && self.isPressed && start.join(",") !== matrix.join(",")) {
        //if the matrix changes WHILE the element is pressed, we must adjust the startPointerX and startPointerY accordingly, so we invert the original matrix and figure out where the pointerX and pointerY were in the global space, then apply the new matrix to get the updated coordinates.
        a = start[0];
        b = start[1];
        c = start[2];
        d = start[3];
        tx = start[4];
        ty = start[5];
        determinant = a * d - b * c;
        pointerX = startPointerX * (d / determinant) + startPointerY * (-c / determinant) + (c * ty - d * tx) / determinant;
        pointerY = startPointerX * (-b / determinant) + startPointerY * (a / determinant) + -(a * ty - b * tx) / determinant;
        startPointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
        startPointerX = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
      }

      if (!matrix[1] && !matrix[2] && matrix[0] == 1 && matrix[3] == 1 && matrix[4] == 0 && matrix[5] == 0) {
        //if there are no transforms, we can optimize performance by not factoring in the matrix
        matrix = null;
      }
    },
        recordStartPositions = function recordStartPositions() {
      var edgeTolerance = 1 - self.edgeResistance;
      updateMatrix(false);

      if (matrix) {
        startPointerX = self.pointerX * matrix[0] + self.pointerY * matrix[2] + matrix[4]; //translate to local coordinate system

        startPointerY = self.pointerX * matrix[1] + self.pointerY * matrix[3] + matrix[5];
      }

      if (dirty) {
        setPointerPosition(self.pointerX, self.pointerY);
        render(true);
      }

      if (scrollProxy) {
        calculateBounds();
        startElementY = scrollProxy.top();
        startElementX = scrollProxy.left();
      } else {
        //if the element is in the process of tweening, don't force snapping to occur because it could make it jump. Imagine the user throwing, then before it's done, clicking on the element in its inbetween state.
        if (isTweening()) {
          syncXY(true, true);
          calculateBounds();
        } else {
          self.applyBounds();
        }

        if (rotationMode) {
          rotationOrigin = self.rotationOrigin = _localToGlobal(target, {
            x: 0,
            y: 0
          });
          syncXY(true, true);
          startElementX = self.x; //starting rotation (x always refers to rotation in type:"rotation", measured in degrees)

          startElementY = self.y = Math.atan2(rotationOrigin.y - self.pointerY, self.pointerX - rotationOrigin.x) * _RAD2DEG;
        } else {
          startScrollTop = target.parentNode ? target.parentNode.scrollTop || 0 : 0;
          startScrollLeft = target.parentNode ? target.parentNode.scrollLeft || 0 : 0;
          startElementY = _getStyle(target, yProp); //record the starting top and left values so that we can just add the mouse's movement to them later.

          startElementX = _getStyle(target, xProp);
        }
      }

      if (hasBounds && edgeTolerance) {
        if (startElementX > maxX) {
          startElementX = maxX + (startElementX - maxX) / edgeTolerance;
        } else if (startElementX < minX) {
          startElementX = minX - (minX - startElementX) / edgeTolerance;
        }

        if (!rotationMode) {
          if (startElementY > maxY) {
            startElementY = maxY + (startElementY - maxY) / edgeTolerance;
          } else if (startElementY < minY) {
            startElementY = minY - (minY - startElementY) / edgeTolerance;
          }
        }
      }

      self.startX = startElementX;
      self.startY = startElementY;
    },
        isTweening = function isTweening() {
      return self.tween && self.tween.isActive();
    },
        removePlaceholder = function removePlaceholder() {
      if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
        //_placeholderDiv just props open auto-scrolling containers so they don't collapse as the user drags left/up. We remove it after dragging (and throwing, if necessary) finishes.
        _placeholderDiv.parentNode.removeChild(_placeholderDiv);
      }
    },
        buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
      if (typeof snap === "function") {
        return function (n) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)

          return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
        };
      }

      if (snap instanceof Array) {
        return function (n) {
          var i = snap.length,
              closest = 0,
              absDif = _max,
              val,
              dif;

          while (--i > -1) {
            val = snap[i];
            dif = val - n;

            if (dif < 0) {
              dif = -dif;
            }

            if (dif < absDif && val >= min && val <= max) {
              closest = i;
              absDif = dif;
            }
          }

          return snap[closest];
        };
      }

      return isNaN(snap) ? function (n) {
        return n;
      } : function () {
        return snap * factor;
      };
    },
        buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
      radius = radius && radius < _max ? radius * radius : _max; //so we don't have to Math.sqrt() in the functions. Performance optimization.

      if (typeof snap === "function") {
        return function (point) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
              x = point.x,
              y = point.y,
              result,
              dx,
              dy; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)

          point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
          point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
          result = snap.call(self, point);

          if (result !== point) {
            point.x = result.x;
            point.y = result.y;
          }

          if (factor !== 1) {
            point.x *= factor;
            point.y *= factor;
          }

          if (radius < _max) {
            dx = point.x - x;
            dy = point.y - y;

            if (dx * dx + dy * dy > radius) {
              point.x = x;
              point.y = y;
            }
          }

          return point;
        };
      }

      if (snap instanceof Array) {
        return function (p) {
          var i = snap.length,
              closest = 0,
              minDist = _max,
              x,
              y,
              point,
              dist;

          while (--i > -1) {
            point = snap[i];
            x = point.x - p.x;
            y = point.y - p.y;
            dist = x * x + y * y;

            if (dist < minDist) {
              closest = i;
              minDist = dist;
            }
          }

          return minDist <= radius ? snap[closest] : p;
        };
      }

      return function (n) {
        return n;
      };
    },
        //called when the mouse is pressed (or touch starts)
    onPress = function onPress(e, force) {
      var i;

      if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
        //when we DON'T preventDefault() in order to accommodate touch-scrolling and the user just taps, many browsers also fire a mousedown/mouseup sequence AFTER the touchstart/touchend sequence, thus it'd result in two quick "click" events being dispatched. This line senses that condition and halts it on the subsequent mousedown.
        return;
      }

      interrupted = isTweening();
      self.pointerEvent = e;

      if (_touchEventLookup[e.type]) {
        //note: on iOS, BOTH touchmove and mousemove are dispatched, but the mousemove has pageY and pageX of 0 which would mess up the calculations and needlessly hurt performance.
        touchEventTarget = e.type.indexOf("touch") !== -1 ? e.currentTarget || e.target : _doc; //pointer-based touches (for Microsoft browsers) don't remain locked to the original target like other browsers, so we must use the document instead. The event type would be "MSPointerDown" or "pointerdown".

        _addListener(touchEventTarget, "touchend", onRelease);

        _addListener(touchEventTarget, "touchmove", onMove);

        _addListener(touchEventTarget, "touchcancel", onRelease);

        _addListener(_doc, "touchstart", _onMultiTouchDocument);
      } else {
        touchEventTarget = null;

        _addListener(_doc, "mousemove", onMove); //attach these to the document instead of the box itself so that if the user's mouse moves too quickly (and off of the box), things still work.

      }

      touchDragAxis = null;

      _addListener(_doc, "mouseup", onRelease);

      if (e && e.target) {
        _addListener(e.target, "mouseup", onRelease); //we also have to listen directly on the element because some browsers don't bubble up the event to the _doc on elements with contentEditable="true"

      }

      isClicking = isClickable.call(self, e.target) && !vars.dragClickables && !force;

      if (isClicking) {
        _addListener(e.target, "change", onRelease); //in some browsers, when you mousedown on a <select> element, no mouseup gets dispatched! So we listen for a "change" event instead.


        _dispatchEvent(self, "pressInit", "onPressInit");

        _dispatchEvent(self, "press", "onPress");

        _setSelectable(triggers, true); //accommodates things like inputs and elements with contentEditable="true" (otherwise user couldn't drag to select text)


        return;
      }

      allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x"; //note: in Chrome, right-clicking (for a context menu) fires onPress and it doesn't have the event.which set properly, so we must look for event.ctrlKey. If the user wants to allow context menus we should of course sense it here and not allow native touch scrolling.

      if (_isOldIE) {
        e = _populateIEEvent(e, true);
      } else if (!allowNativeTouchScrolling && !self.allowEventDefault) {
        e.preventDefault();

        if (e.preventManipulation) {
          e.preventManipulation(); //for some Microsoft browsers
        }
      }

      if (e.changedTouches) {
        //touch events store the data slightly differently
        e = touch = e.changedTouches[0];
        touchID = e.identifier;
      } else if (e.pointerId) {
        touchID = e.pointerId; //for some Microsoft browsers
      } else {
        touch = touchID = null;
      }

      _dragCount++;

      _addToRenderQueue(render); //causes the Draggable to render on each "tick" of TweenLite.ticker (performance optimization - updating values in a mousemove can cause them to happen too frequently, like multiple times between frame redraws which is wasteful, and it also prevents values from updating properly in IE8)


      startPointerY = self.pointerY = e.pageY; //record the starting x and y so that we can calculate the movement from the original in _onMouseMove

      startPointerX = self.pointerX = e.pageX;

      _dispatchEvent(self, "pressInit", "onPressInit");

      if (allowNativeTouchScrolling || self.autoScroll) {
        _recordMaxScrolls(target.parentNode);
      }

      if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
        //add a placeholder div to prevent the parent container from collapsing when the user drags the element left.
        _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
        target.parentNode.appendChild(_placeholderDiv);
      }

      recordStartPositions();

      if (self.tween) {
        self.tween.kill();
      }

      self.isThrowing = false;
      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf(scrollProxy || target, true, killProps); //in case the user tries to drag it before the last tween is done.

      if (scrollProxy) {
        _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf(target, true, {
          scrollTo: 1
        }); //just in case the original target's scroll position is being tweened somewhere else.
      }

      self.tween = self.lockedAxis = null;

      if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
        target.style.zIndex = Draggable.zIndex++;
      }

      self.isPressed = true;
      hasDragCallback = !!(vars.onDrag || self._listeners.drag);

      if (!rotationMode) {
        i = triggers.length;

        while (--i > -1) {
          _setStyle(triggers[i], "cursor", vars.cursor || "move");
        }
      }

      _dispatchEvent(self, "press", "onPress");
    },
        //called every time the mouse/touch moves
    onMove = function onMove(e) {
      var originalEvent = e,
          touches,
          pointerX,
          pointerY,
          i,
          dx,
          dy;

      if (!enabled || _isMultiTouching || !self.isPressed || !e) {
        return;
      }

      self.pointerEvent = e;
      touches = e.changedTouches;

      if (touches) {
        //touch events store the data slightly differently
        e = touches[0];

        if (e !== touch && e.identifier !== touchID) {
          //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
          i = touches.length;

          while (--i > -1 && (e = touches[i]).identifier !== touchID) {}

          if (i < 0) {
            return;
          }
        }
      } else if (e.pointerId && touchID && e.pointerId !== touchID) {
        //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
        return;
      }

      if (_isOldIE) {
        e = _populateIEEvent(e, true);
      } else {
        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          //Android browsers force us to decide on the first "touchmove" event if we should allow the default (scrolling) behavior or preventDefault(). Otherwise, a "touchcancel" will be fired and then no "touchmove" or "touchend" will fire during the scrolling (no good).
          pointerX = e.pageX;
          pointerY = e.pageY;

          if (matrix) {
            i = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
            pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
            pointerX = i;
          }

          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);

          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";

            if (self.vars.lockAxisOnTouchScroll !== false) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";

              if (typeof self.vars.onLockAxis === "function") {
                self.vars.onLockAxis.call(self, originalEvent);
              }
            }

            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }

        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          originalEvent.preventDefault();

          if (originalEvent.preventManipulation) {
            //for some Microsoft browsers
            originalEvent.preventManipulation();
          }
        }
      }

      if (self.autoScroll) {
        checkAutoScrollBounds = true;
      }

      setPointerPosition(e.pageX, e.pageY);
    },
        setPointerPosition = function setPointerPosition(pointerX, pointerY) {
      var dragTolerance = 1 - self.dragResistance,
          edgeTolerance = 1 - self.edgeResistance,
          xChange,
          yChange,
          x,
          y,
          dif,
          temp;
      self.pointerX = pointerX;
      self.pointerY = pointerY;

      if (rotationMode) {
        y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
        dif = self.y - y;

        if (dif > 180) {
          startElementY -= 360;
          self.y = y;
        } else if (dif < -180) {
          startElementY += 360;
          self.y = y;
        }

        if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
          self.y = y;
          x = startElementX + (startElementY - y) * dragTolerance;
        } else {
          x = startElementX;
        }
      } else {
        if (matrix) {
          temp = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
          pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
          pointerX = temp;
        }

        yChange = pointerY - startPointerY;
        xChange = pointerX - startPointerX;

        if (yChange < minimumMovement && yChange > -minimumMovement) {
          yChange = 0;
        }

        if (xChange < minimumMovement && xChange > -minimumMovement) {
          xChange = 0;
        }

        if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
          temp = self.lockedAxis;

          if (!temp) {
            self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

            if (temp && typeof self.vars.onLockAxis === "function") {
              self.vars.onLockAxis.call(self, self.pointerEvent);
            }
          }

          if (temp === "y") {
            yChange = 0;
          } else if (temp === "x") {
            xChange = 0;
          }
        }

        x = startElementX + xChange * dragTolerance;
        y = startElementY + yChange * dragTolerance;
      }

      if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
        if (snapXY) {
          _temp1.x = x;
          _temp1.y = y;
          temp = snapXY(_temp1);
          x = temp.x;
          y = temp.y;
        }

        if (snapX) {
          x = snapX(x);
        }

        if (snapY) {
          y = snapY(y);
        }
      } else if (hasBounds) {
        if (x > maxX) {
          x = maxX + (x - maxX) * edgeTolerance;
        } else if (x < minX) {
          x = minX + (x - minX) * edgeTolerance;
        }

        if (!rotationMode) {
          if (y > maxY) {
            y = maxY + (y - maxY) * edgeTolerance;
          } else if (y < minY) {
            y = minY + (y - minY) * edgeTolerance;
          }
        }
      }

      if (!rotationMode && !matrix) {
        x = Math.round(x); //helps work around an issue with some Win Touch devices

        y = Math.round(y);
      }

      if (self.x !== x || self.y !== y && !rotationMode) {
        if (rotationMode) {
          self.endRotation = self.x = self.endX = x;
          dirty = true;
        } else {
          if (allowY) {
            self.y = self.endY = y;
            dirty = true; //a flag that indicates we need to render the target next time the TweenLite.ticker dispatches a "tick" event (typically on a requestAnimationFrame) - this is a performance optimization (we shouldn't render on every move because sometimes many move events can get dispatched between screen refreshes, and that'd be wasteful to render every time)
          }

          if (allowX) {
            self.x = self.endX = x;
            dirty = true;
          }
        }

        if (!self.isDragging && self.isPressed) {
          self.isDragging = true;

          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      }
    },
        //called when the mouse/touch is released
    onRelease = function onRelease(e, force) {
      if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
        //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
        return;
      }

      self.isPressed = false;
      var originalEvent = e,
          wasDragging = self.isDragging,
          isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
          placeholderDelayedCall = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, removePlaceholder),
          touches,
          i,
          syntheticEvent,
          eventTarget,
          syntheticClick;

      if (touchEventTarget) {
        _removeListener(touchEventTarget, "touchend", onRelease);

        _removeListener(touchEventTarget, "touchmove", onMove);

        _removeListener(touchEventTarget, "touchcancel", onRelease);

        _removeListener(_doc, "touchstart", _onMultiTouchDocument);
      } else {
        _removeListener(_doc, "mousemove", onMove);
      }

      _removeListener(_doc, "mouseup", onRelease);

      if (e && e.target) {
        _removeListener(e.target, "mouseup", onRelease);
      }

      dirty = false;

      if (isClicking && !isContextMenuRelease) {
        if (e) {
          _removeListener(e.target, "change", onRelease);

          self.pointerEvent = originalEvent;
        }

        _setSelectable(triggers, false);

        _dispatchEvent(self, "release", "onRelease");

        _dispatchEvent(self, "click", "onClick");

        isClicking = false;
        return;
      }

      _removeFromRenderQueue(render);

      if (!rotationMode) {
        i = triggers.length;

        while (--i > -1) {
          _setStyle(triggers[i], "cursor", vars.cursor || "move");
        }
      }

      if (wasDragging) {
        dragEndTime = _lastDragTime = _getTime();
        self.isDragging = false;
      }

      _dragCount--;

      if (e) {
        if (_isOldIE) {
          e = _populateIEEvent(e, false);
        }

        touches = e.changedTouches;

        if (touches) {
          //touch events store the data slightly differently
          e = touches[0];

          if (e !== touch && e.identifier !== touchID) {
            //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
            i = touches.length;

            while (--i > -1 && (e = touches[i]).identifier !== touchID) {}

            if (i < 0) {
              return;
            }
          }
        }

        self.pointerEvent = originalEvent;
        self.pointerX = e.pageX;
        self.pointerY = e.pageY;
      }

      if (isContextMenuRelease && originalEvent) {
        originalEvent.preventDefault();

        if (originalEvent.preventManipulation) {
          originalEvent.preventManipulation(); //for some Microsoft browsers
        }

        _dispatchEvent(self, "release", "onRelease");
      } else if (originalEvent && !wasDragging) {
        if (interrupted && (vars.snap || vars.bounds)) {
          //otherwise, if the user clicks on the object while it's animating to a snapped position, and then releases without moving 3 pixels, it will just stay there (it should animate/snap)
          animate(vars.throwProps);
        }

        _dispatchEvent(self, "release", "onRelease");

        if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
          //to accommodate native scrolling on Android devices, we have to immediately call onRelease() on the first touchmove event, but that shouldn't trigger a "click".
          _dispatchEvent(self, "click", "onClick");

          if (_getTime() - clickTime < 300) {
            _dispatchEvent(self, "doubleclick", "onDoubleClick");
          }

          eventTarget = originalEvent.target || originalEvent.srcElement || target; //old IE uses srcElement

          clickTime = _getTime();

          syntheticClick = function syntheticClick() {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (clickTime !== clickDispatch && self.enabled() && !self.isPressed) {
              if (eventTarget.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                eventTarget.click();
              } else if (_doc.createEvent) {
                syntheticEvent = _doc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, window, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                eventTarget.dispatchEvent(syntheticEvent);
              }
            }
          };

          if (!_isAndroid && !originalEvent.defaultPrevented) {
            //iOS Safari requires the synthetic click to happen immediately or else it simply won't work, but Android doesn't play nice.
            _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.00001, syntheticClick); //in addition to the iOS bug workaround, there's a Firefox issue with clicking on things like a video to play, so we must fake a click event in a slightly delayed fashion. Previously, we listened for the "click" event with "capture" false which solved the video-click-to-play issue, but it would allow the "click" event to be dispatched twice like if you were using a jQuery.click() because that was handled in the capture phase, thus we had to switch to the capture phase to avoid the double-dispatching, but do the delayed synthetic click.
          }
        }
      } else {
        animate(vars.throwProps); //will skip if throwProps isn't defined or ThrowPropsPlugin isn't loaded.

        if (!_isOldIE && !self.allowEventDefault && originalEvent && (vars.dragClickables || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
          originalEvent.preventDefault();

          if (originalEvent.preventManipulation) {
            originalEvent.preventManipulation(); //for some Microsoft browsers
          }
        }

        _dispatchEvent(self, "release", "onRelease");
      }

      if (isTweening()) {
        placeholderDelayedCall.duration(self.tween.duration()); //sync the timing so that the placeholder DIV gets
      }

      if (wasDragging) {
        _dispatchEvent(self, "dragend", "onDragEnd");
      }

      return true;
    },
        updateScroll = function updateScroll(e) {
      if (e && self.isDragging && !scrollProxy) {
        var parent = e.target || e.srcElement || target.parentNode,
            deltaX = parent.scrollLeft - parent._gsScrollX,
            deltaY = parent.scrollTop - parent._gsScrollY;

        if (deltaX || deltaY) {
          if (matrix) {
            startPointerX -= deltaX * matrix[0] + deltaY * matrix[2];
            startPointerY -= deltaY * matrix[3] + deltaX * matrix[1];
          } else {
            startPointerX -= deltaX;
            startPointerY -= deltaY;
          }

          parent._gsScrollX += deltaX;
          parent._gsScrollY += deltaY;
          setPointerPosition(self.pointerX, self.pointerY);
        }
      }
    },
        onClick = function onClick(e) {
      //this was a huge pain in the neck to align all the various browsers and their behaviors. Chrome, Firefox, Safari, Opera, Android, and Microsoft Edge all handle events differently! Some will only trigger native behavior (like checkbox toggling) from trusted events. Others don't even support isTrusted, but require 2 events to flow through before triggering native behavior. Edge treats everything as trusted but also mandates that 2 flow through to trigger the correct native behavior.
      var time = _getTime(),
          recentlyClicked = time - clickTime < 40,
          recentlyDragged = time - dragEndTime < 40,
          alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
          isModern = !!e.preventDefault,
          defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
          alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
          trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched; //note: Safari doesn't support isTrusted, and it won't properly execute native behavior (like toggling checkboxes) on the first synthetic "click" event - we must wait for the 2nd and treat it as trusted (but stop propagation at that point). Confusing, I know. Don't you love cross-browser compatibility challenges?


      if (isModern && (alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false)) {
        e.stopImmediatePropagation();
      }

      if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted !== alreadyDispatchedTrusted)) {
        //let the first click pass through unhindered. Let the next one only if it's trusted, then no more (stop quick-succession ones)
        if (trusted && alreadyDispatched) {
          trustedClickDispatch = clickTime;
        }

        clickDispatch = clickTime;
        return;
      }

      if (self.isPressed || recentlyDragged || recentlyClicked) {
        if (!isModern) {
          e.returnValue = false;
        } else if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
          e.preventDefault();

          if (e.preventManipulation) {
            e.preventManipulation(); //for some Microsoft browsers
          }
        }
      }
    },
        localizePoint = function localizePoint(p) {
      return matrix ? {
        x: p.x * matrix[0] + p.y * matrix[2] + matrix[4],
        y: p.x * matrix[1] + p.y * matrix[3] + matrix[5]
      } : {
        x: p.x,
        y: p.y
      };
    };

    old = Draggable.get(this.target);

    if (old) {
      old.kill(); // avoids duplicates (an element can only be controlled by one Draggable)
    } //give the user access to start/stop dragging...


    this.startDrag = function (e, align) {
      var r1, r2, p1, p2;
      onPress(e || self.pointerEvent, true); //if the pointer isn't on top of the element, adjust things accordingly

      if (align && !self.hitTest(e || self.pointerEvent)) {
        r1 = _parseRect(e || self.pointerEvent);
        r2 = _parseRect(target);
        p1 = localizePoint({
          x: r1.left + r1.width / 2,
          y: r1.top + r1.height / 2
        });
        p2 = localizePoint({
          x: r2.left + r2.width / 2,
          y: r2.top + r2.height / 2
        });
        startPointerX -= p1.x - p2.x;
        startPointerY -= p1.y - p2.y;
      }

      if (!self.isDragging) {
        self.isDragging = true;

        _dispatchEvent(self, "dragstart", "onDragStart");
      }
    };

    this.drag = onMove;

    this.endDrag = function (e) {
      onRelease(e || self.pointerEvent, true);
    };

    this.timeSinceDrag = function () {
      return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
    };

    this.timeSinceClick = function () {
      return (_getTime() - clickTime) / 1000;
    };

    this.hitTest = function (target, threshold) {
      return Draggable.hitTest(self.target, target, threshold);
    };

    this.getDirection = function (from, diagonalThreshold) {
      //from can be "start" (default), "velocity", or an element
      var mode = from === "velocity" && ThrowPropsPlugin ? from : _typeof(from) === "object" && !rotationMode ? "element" : "start",
          xChange,
          yChange,
          ratio,
          direction,
          r1,
          r2;

      if (mode === "element") {
        r1 = _parseRect(self.target);
        r2 = _parseRect(from);
      }

      xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? ThrowPropsPlugin.getVelocity(this.target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

      if (rotationMode) {
        return xChange < 0 ? "counter-clockwise" : "clockwise";
      } else {
        diagonalThreshold = diagonalThreshold || 2;
        yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? ThrowPropsPlugin.getVelocity(this.target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
        ratio = Math.abs(xChange / yChange);
        direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

        if (ratio < diagonalThreshold) {
          if (direction !== "") {
            direction += "-";
          }

          direction += yChange < 0 ? "up" : "down";
        }
      }

      return direction;
    };

    this.applyBounds = function (newBounds) {
      var x, y, forceZeroVelocity, e, parent, isRoot;

      if (newBounds && vars.bounds !== newBounds) {
        vars.bounds = newBounds;
        return self.update(true);
      }

      syncXY(true);
      calculateBounds();

      if (hasBounds) {
        x = self.x;
        y = self.y;

        if (x > maxX) {
          x = maxX;
        } else if (x < minX) {
          x = minX;
        }

        if (y > maxY) {
          y = maxY;
        } else if (y < minY) {
          y = minY;
        }

        if (self.x !== x || self.y !== y) {
          forceZeroVelocity = true;
          self.x = self.endX = x;

          if (rotationMode) {
            self.endRotation = x;
          } else {
            self.y = self.endY = y;
          }

          dirty = true;
          render(true);

          if (self.autoScroll && !self.isDragging) {
            _recordMaxScrolls(target.parentNode);

            e = target;
            _windowProxy.scrollTop = window.pageYOffset != null ? window.pageYOffset : _docElement.scrollTop != null ? _docElement.scrollTop : _doc.body.scrollTop;
            _windowProxy.scrollLeft = window.pageXOffset != null ? window.pageXOffset : _docElement.scrollLeft != null ? _docElement.scrollLeft : _doc.body.scrollLeft;

            while (e && !isRoot) {
              //walk up the chain and sense wherever the scrollTop/scrollLeft exceeds the maximum.
              isRoot = _isRoot(e.parentNode);
              parent = isRoot ? _windowProxy : e.parentNode;

              if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                parent.scrollTop = parent._gsMaxScrollY;
              }

              if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                parent.scrollLeft = parent._gsMaxScrollX;
              }

              e = parent;
            }
          }
        }

        if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
          animate(vars.throwProps, forceZeroVelocity);
        }
      }

      return self;
    };

    this.update = function (applyBounds, sticky, ignoreExternalChanges) {
      var x = self.x,
          y = self.y;
      updateMatrix(!sticky);

      if (applyBounds) {
        self.applyBounds();
      } else {
        if (dirty && ignoreExternalChanges) {
          render(true);
        }

        syncXY(true);
      }

      if (sticky) {
        setPointerPosition(self.pointerX, self.pointerY);

        if (dirty) {
          render(true);
        }
      }

      if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
        recordStartPositions();
      }

      if (self.autoScroll) {
        _recordMaxScrolls(target.parentNode);

        checkAutoScrollBounds = self.isDragging;
        render(true);
      }

      if (self.autoScroll) {
        //in case reparenting occurred.
        _removeScrollListener(target, updateScroll);

        _addScrollListener(target, updateScroll);
      }

      return self;
    };

    this.enable = function (type) {
      var id, i, trigger;

      if (type !== "soft") {
        i = triggers.length;

        while (--i > -1) {
          trigger = triggers[i];

          _addListener(trigger, "mousedown", onPress);

          _addListener(trigger, "touchstart", onPress);

          _addListener(trigger, "click", onClick, true); //note: used to pass true for capture but it prevented click-to-play-video functionality in Firefox.


          if (!rotationMode) {
            _setStyle(trigger, "cursor", vars.cursor || "move");
          }

          _setStyle(trigger, "touchCallout", "none");

          _setStyle(trigger, "touchAction", allowX === allowY ? "none" : allowX ? "pan-y" : "pan-x");

          if (_isSVG(trigger)) {
            // a bug in chrome doesn't respect touch-action on SVG elements - it only works if we set it on the parent SVG.
            _setStyle(trigger.ownerSVGElement || trigger, "touchAction", allowX === allowY ? "none" : allowX ? "pan-y" : "pan-x");
          }

          if (!this.vars.allowContextMenu) {
            _addListener(trigger, "contextmenu", onContextMenu);
          }
        }

        _setSelectable(triggers, false);
      }

      _addScrollListener(target, updateScroll);

      enabled = true;

      if (ThrowPropsPlugin && type !== "soft") {
        ThrowPropsPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      }

      if (scrollProxy) {
        scrollProxy.enable();
      }

      target._gsDragID = id = "d" + _lookupCount++;
      _lookup[id] = this;

      if (scrollProxy) {
        scrollProxy.element._gsDragID = id;
      }

      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(target, {
        x: "+=0",
        overwrite: false,
        data: "_draggable"
      }); //simply ensures that there's a _gsTransform on the element.

      applyObj = {
        t: target,
        data: _isOldIE ? cssVars : target._gsTransform,
        tween: {},
        setRatio: _isOldIE ? function () {
          _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(target, tempVars);
        } : _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["default"]._internals.setTransformRatio || _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["default"]._internals.set3DTransformRatio
      };
      recordStartPositions();
      self.update(true);
      return self;
    };

    this.disable = function (type) {
      var dragging = self.isDragging,
          i,
          trigger;

      if (!rotationMode) {
        i = triggers.length;

        while (--i > -1) {
          _setStyle(triggers[i], "cursor", null);
        }
      }

      if (type !== "soft") {
        i = triggers.length;

        while (--i > -1) {
          trigger = triggers[i];

          _setStyle(trigger, "touchCallout", null);

          _setStyle(trigger, "touchAction", null);

          _removeListener(trigger, "mousedown", onPress);

          _removeListener(trigger, "touchstart", onPress);

          _removeListener(trigger, "click", onClick);

          _removeListener(trigger, "contextmenu", onContextMenu);
        }

        _setSelectable(triggers, true);

        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchcancel", onRelease);

          _removeListener(touchEventTarget, "touchend", onRelease);

          _removeListener(touchEventTarget, "touchmove", onMove);
        }

        _removeListener(_doc, "mouseup", onRelease);

        _removeListener(_doc, "mousemove", onMove);
      }

      _removeScrollListener(target, updateScroll);

      enabled = false;

      if (ThrowPropsPlugin && type !== "soft") {
        ThrowPropsPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      }

      if (scrollProxy) {
        scrollProxy.disable();
      }

      _removeFromRenderQueue(render);

      self.isDragging = self.isPressed = isClicking = false;

      if (dragging) {
        _dispatchEvent(self, "dragend", "onDragEnd");
      }

      return self;
    };

    this.enabled = function (value, type) {
      return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
    };

    this.kill = function () {
      self.isThrowing = false;
      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf(scrollProxy || target, true, killProps);
      self.disable();
      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(triggers, {
        clearProps: "userSelect"
      });
      delete _lookup[target._gsDragID];
      return self;
    };

    if (type.indexOf("scroll") !== -1) {
      scrollProxy = this.scrollProxy = new ScrollProxy(target, _extend({
        onKill: function onKill() {
          //ScrollProxy's onKill() gets called if/when the ScrollProxy senses that the user interacted with the scroll position manually (like using the scrollbar). IE9 doesn't fire the "mouseup" properly when users drag the scrollbar of an element, so this works around that issue.
          if (self.isPressed) {
            onRelease(null);
          }
        }
      }, vars)); //a bug in many Android devices' stock browser causes scrollTop to get forced back to 0 after it is altered via JS, so we set overflow to "hidden" on mobile/touch devices (they hide the scroll bar anyway). That works around the bug. (This bug is discussed at https://code.google.com/p/android/issues/detail?id=19625)

      target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
      target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
      target = scrollProxy.content;
    }

    if (vars.force3D !== false) {
      _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(target, {
        force3D: true
      }); //improve performance by forcing a GPU layer when possible
    }

    if (rotationMode) {
      killProps.rotation = 1;
    } else {
      if (allowX) {
        killProps[xProp] = 1;
      }

      if (allowY) {
        killProps[yProp] = 1;
      }
    }

    if (rotationMode) {
      tempVars = _tempVarsRotation;
      cssVars = tempVars.css;
      tempVars.overwrite = false;
    } else if (xyMode) {
      tempVars = allowX && allowY ? _tempVarsXY : allowX ? _tempVarsX : _tempVarsY;
      cssVars = tempVars.css;
      tempVars.overwrite = false;
    }

    this.enable();
  },
      p = Draggable.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]();

  p.constructor = Draggable;
  p.pointerX = p.pointerY = p.startX = p.startY = p.deltaX = p.deltaY = 0;
  p.isDragging = p.isPressed = false;
  Draggable.version = "0.16.5";
  Draggable.zIndex = 1000;

  _addListener(_doc, "touchcancel", function () {//some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document. Very strange indeed.
  });

  _addListener(_doc, "contextmenu", function (e) {
    var p;

    for (p in _lookup) {
      if (_lookup[p].isPressed) {
        _lookup[p].endDrag();
      }
    }
  });

  Draggable.create = function (targets, vars) {
    if (typeof targets === "string") {
      targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets);
    }

    var a = !targets || targets.length === 0 ? [] : _isArrayLike(targets) ? _flattenArray(targets) : [targets],
        i = a.length;

    while (--i > -1) {
      a[i] = new Draggable(a[i], vars);
    }

    return a;
  };

  Draggable.get = function (target) {
    return _lookup[(_unwrapElement(target) || {})._gsDragID];
  };

  Draggable.timeSinceDrag = function () {
    return (_getTime() - _lastDragTime) / 1000;
  };

  var _tempRect = {},
      //reuse to reduce garbage collection tasks
  _oldIERect = function _oldIERect(e) {
    //IE8 doesn't support getBoundingClientRect(), so we use this as a backup.
    var top = 0,
        left = 0,
        width,
        height;
    e = _unwrapElement(e);
    width = e.offsetWidth;
    height = e.offsetHeight;

    while (e) {
      top += e.offsetTop;
      left += e.offsetLeft;
      e = e.offsetParent;
    }

    return {
      top: top,
      left: left,
      width: width,
      height: height
    };
  },
      _parseRect = function _parseRect(e, undefined) {
    //accepts a DOM element, a mouse event, or a rectangle object and returns the corresponding rectangle with left, right, width, height, top, and bottom properties
    if (e === window) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _doc.body.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _doc.body.clientHeight || 0;
      return _tempRect;
    }

    var r = e.pageX !== undefined ? {
      left: e.pageX - _getDocScrollLeft(),
      top: e.pageY - _getDocScrollTop(),
      right: e.pageX - _getDocScrollLeft() + 1,
      bottom: e.pageY - _getDocScrollTop() + 1
    } : !e.nodeType && e.left !== undefined && e.top !== undefined ? e : _isOldIE ? _oldIERect(e) : _unwrapElement(e).getBoundingClientRect();

    if (r.right === undefined && r.width !== undefined) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (r.width === undefined) {
      //some browsers don't include width and height properties. We can't just set them directly on r because some browsers throw errors, so create a new generic object.
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }

    return r;
  };

  Draggable.hitTest = function (obj1, obj2, threshold) {
    if (obj1 === obj2) {
      return false;
    }

    var r1 = _parseRect(obj1),
        r2 = _parseRect(obj2),
        isOutside = r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top,
        overlap,
        area,
        isRatio;

    if (isOutside || !threshold) {
      return !isOutside;
    }

    isRatio = (threshold + "").indexOf("%") !== -1;
    threshold = parseFloat(threshold) || 0;
    overlap = {
      left: Math.max(r1.left, r2.left),
      top: Math.max(r1.top, r2.top)
    };
    overlap.width = Math.min(r1.right, r2.right) - overlap.left;
    overlap.height = Math.min(r1.bottom, r2.bottom) - overlap.top;

    if (overlap.width < 0 || overlap.height < 0) {
      return false;
    }

    if (isRatio) {
      threshold *= 0.01;
      area = overlap.width * overlap.height;
      return area >= r1.width * r1.height * threshold || area >= r2.width * r2.height * threshold;
    }

    return overlap.width > threshold && overlap.height > threshold;
  };

  _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;";
  return Draggable;
}, true);

var Draggable = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Draggable;


/***/ }),

/***/ "./node_modules/gsap/EasePack.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/EasePack.js ***!
  \***************************************/
/*! exports provided: Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase, Linear, Power0, Power1, Power2, Power3, Power4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return Elastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return RoughEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return SlowMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return SteppedEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return Circ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return Expo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return Sine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return ExpoScaleEase; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("easing.Back", ["easing.Ease"], function () {
  var w = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].GreenSockGlobals || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"],
      gs = w.com.greensock,
      _2PI = Math.PI * 2,
      _HALF_PI = Math.PI / 2,
      _class = gs._class,
      _create = function _create(n, f) {
    var C = _class("easing." + n, function () {}, true),
        p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();

    p.constructor = C;
    p.getRatio = f;
    return C;
  },
      _easeReg = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].register || function () {},
      //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
  _wrap = function _wrap(name, EaseOut, EaseIn, EaseInOut, aliases) {
    var C = _class("easing." + name, {
      easeOut: new EaseOut(),
      easeIn: new EaseIn(),
      easeInOut: new EaseInOut()
    }, true);

    _easeReg(C, name);

    return C;
  },
      EasePoint = function EasePoint(time, value, next) {
    this.t = time;
    this.v = value;

    if (next) {
      this.next = next;
      next.prev = this;
      this.c = next.v - value;
      this.gap = next.t - time;
    }
  },
      //Back
  _createBack = function _createBack(n, f) {
    var C = _class("easing." + n, function (overshoot) {
      this._p1 = overshoot || overshoot === 0 ? overshoot : 1.70158;
      this._p2 = this._p1 * 1.525;
    }, true),
        p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();

    p.constructor = C;
    p.getRatio = f;

    p.config = function (overshoot) {
      return new C(overshoot);
    };

    return C;
  },
      Back = _wrap("Back", _createBack("BackOut", function (p) {
    return (p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
  }), _createBack("BackIn", function (p) {
    return p * p * ((this._p1 + 1) * p - this._p1);
  }), _createBack("BackInOut", function (p) {
    return (p *= 2) < 1 ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
  })),
      //SlowMo
  SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
    power = power || power === 0 ? power : 0.7;

    if (linearRatio == null) {
      linearRatio = 0.7;
    } else if (linearRatio > 1) {
      linearRatio = 1;
    }

    this._p = linearRatio !== 1 ? power : 0;
    this._p1 = (1 - linearRatio) / 2;
    this._p2 = linearRatio;
    this._p3 = this._p1 + this._p2;
    this._calcEnd = yoyoMode === true;
  }, true),
      p = SlowMo.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](),
      SteppedEase,
      ExpoScaleEase,
      RoughEase,
      _createElastic;

  p.constructor = SlowMo;

  p.getRatio = function (p) {
    var r = p + (0.5 - p) * this._p;

    if (p < this._p1) {
      return this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r;
    } else if (p > this._p3) {
      return this._calcEnd ? p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p; //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
    }

    return this._calcEnd ? 1 : r;
  };

  SlowMo.ease = new SlowMo(0.7, 0.7);

  p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
    return new SlowMo(linearRatio, power, yoyoMode);
  }; //SteppedEase


  SteppedEase = _class("easing.SteppedEase", function (steps, immediateStart) {
    steps = steps || 1;
    this._p1 = 1 / steps;
    this._p2 = steps + (immediateStart ? 0 : 1);
    this._p3 = immediateStart ? 1 : 0;
  }, true);
  p = SteppedEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
  p.constructor = SteppedEase;

  p.getRatio = function (p) {
    if (p < 0) {
      p = 0;
    } else if (p >= 1) {
      p = 0.999999999;
    }

    return ((this._p2 * p | 0) + this._p3) * this._p1;
  };

  p.config = SteppedEase.config = function (steps, immediateStart) {
    return new SteppedEase(steps, immediateStart);
  }; //ExpoScaleEase


  ExpoScaleEase = _class("easing.ExpoScaleEase", function (start, end, ease) {
    this._p1 = Math.log(end / start);
    this._p2 = end - start;
    this._p3 = start;
    this._ease = ease;
  }, true);
  p = ExpoScaleEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
  p.constructor = ExpoScaleEase;

  p.getRatio = function (p) {
    if (this._ease) {
      p = this._ease.getRatio(p);
    }

    return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
  };

  p.config = ExpoScaleEase.config = function (start, end, ease) {
    return new ExpoScaleEase(start, end, ease);
  }; //RoughEase


  RoughEase = _class("easing.RoughEase", function (vars) {
    vars = vars || {};
    var taper = vars.taper || "none",
        a = [],
        cnt = 0,
        points = (vars.points || 20) | 0,
        i = points,
        randomize = vars.randomize !== false,
        clamp = vars.clamp === true,
        template = vars.template instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"] ? vars.template : null,
        strength = typeof vars.strength === "number" ? vars.strength * 0.4 : 0.4,
        x,
        y,
        bump,
        invX,
        obj,
        pnt;

    while (--i > -1) {
      x = randomize ? Math.random() : 1 / points * i;
      y = template ? template.getRatio(x) : x;

      if (taper === "none") {
        bump = strength;
      } else if (taper === "out") {
        invX = 1 - x;
        bump = invX * invX * strength;
      } else if (taper === "in") {
        bump = x * x * strength;
      } else if (x < 0.5) {
        //"both" (start)
        invX = x * 2;
        bump = invX * invX * 0.5 * strength;
      } else {
        //"both" (end)
        invX = (1 - x) * 2;
        bump = invX * invX * 0.5 * strength;
      }

      if (randomize) {
        y += Math.random() * bump - bump * 0.5;
      } else if (i % 2) {
        y += bump * 0.5;
      } else {
        y -= bump * 0.5;
      }

      if (clamp) {
        if (y > 1) {
          y = 1;
        } else if (y < 0) {
          y = 0;
        }
      }

      a[cnt++] = {
        x: x,
        y: y
      };
    }

    a.sort(function (a, b) {
      return a.x - b.x;
    });
    pnt = new EasePoint(1, 1, null);
    i = points;

    while (--i > -1) {
      obj = a[i];
      pnt = new EasePoint(obj.x, obj.y, pnt);
    }

    this._prev = new EasePoint(0, 0, pnt.t !== 0 ? pnt : pnt.next);
  }, true);
  p = RoughEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
  p.constructor = RoughEase;

  p.getRatio = function (p) {
    var pnt = this._prev;

    if (p > pnt.t) {
      while (pnt.next && p >= pnt.t) {
        pnt = pnt.next;
      }

      pnt = pnt.prev;
    } else {
      while (pnt.prev && p <= pnt.t) {
        pnt = pnt.prev;
      }
    }

    this._prev = pnt;
    return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
  };

  p.config = function (vars) {
    return new RoughEase(vars);
  };

  RoughEase.ease = new RoughEase(); //Bounce

  _wrap("Bounce", _create("BounceOut", function (p) {
    if (p < 1 / 2.75) {
      return 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    }

    return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
  }), _create("BounceIn", function (p) {
    if ((p = 1 - p) < 1 / 2.75) {
      return 1 - 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
    } else if (p < 2.5 / 2.75) {
      return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
    }

    return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
  }), _create("BounceInOut", function (p) {
    var invert = p < 0.5;

    if (invert) {
      p = 1 - p * 2;
    } else {
      p = p * 2 - 1;
    }

    if (p < 1 / 2.75) {
      p = 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    } else {
      p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }

    return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
  })); //CIRC


  _wrap("Circ", _create("CircOut", function (p) {
    return Math.sqrt(1 - (p = p - 1) * p);
  }), _create("CircIn", function (p) {
    return -(Math.sqrt(1 - p * p) - 1);
  }), _create("CircInOut", function (p) {
    return (p *= 2) < 1 ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
  })); //Elastic


  _createElastic = function _createElastic(n, f, def) {
    var C = _class("easing." + n, function (amplitude, period) {
      this._p1 = amplitude >= 1 ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.

      this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
      this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
      this._p2 = _2PI / this._p2; //precalculate to optimize
    }, true),
        p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();

    p.constructor = C;
    p.getRatio = f;

    p.config = function (amplitude, period) {
      return new C(amplitude, period);
    };

    return C;
  };

  _wrap("Elastic", _createElastic("ElasticOut", function (p) {
    return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
  }, 0.3), _createElastic("ElasticIn", function (p) {
    return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
  }, 0.3), _createElastic("ElasticInOut", function (p) {
    return (p *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
  }, 0.45)); //Expo


  _wrap("Expo", _create("ExpoOut", function (p) {
    return 1 - Math.pow(2, -10 * p);
  }), _create("ExpoIn", function (p) {
    return Math.pow(2, 10 * (p - 1)) - 0.001;
  }), _create("ExpoInOut", function (p) {
    return (p *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  })); //Sine


  _wrap("Sine", _create("SineOut", function (p) {
    return Math.sin(p * _HALF_PI);
  }), _create("SineIn", function (p) {
    return -Math.cos(p * _HALF_PI) + 1;
  }), _create("SineInOut", function (p) {
    return -0.5 * (Math.cos(Math.PI * p) - 1);
  }));

  _class("easing.EaseLookup", {
    find: function find(s) {
      return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[s];
    }
  }, true); //register the non-standard eases


  _easeReg(w.SlowMo, "SlowMo", "ease,");

  _easeReg(RoughEase, "RoughEase", "ease,");

  _easeReg(SteppedEase, "SteppedEase", "ease,");

  return Back;
}, true);

var Back = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Back;
var Elastic = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Elastic;
var Bounce = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Bounce;
var RoughEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].RoughEase;
var SlowMo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].SlowMo;
var SteppedEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].SteppedEase;
var Circ = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Circ;
var Expo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Expo;
var Sine = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Sine;
var ExpoScaleEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].ExpoScaleEase;


/***/ }),

/***/ "./node_modules/gsap/EaselPlugin.js":
/*!******************************************!*\
  !*** ./node_modules/gsap/EaselPlugin.js ***!
  \******************************************/
/*! exports provided: EaselPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EaselPlugin", function() { return EaselPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EaselPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 0.2.2
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


var _numExp = /(\d|\.)+/g,
    _ColorFilter,
    _ColorMatrixFilter,
    _colorProps = ["redMultiplier", "greenMultiplier", "blueMultiplier", "alphaMultiplier", "redOffset", "greenOffset", "blueOffset", "alphaOffset"],
    _colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
},
    _parseColor = function _parseColor(color) {
  if (color === "" || color == null || color === "none") {
    return _colorLookup.transparent;
  } else if (_colorLookup[color]) {
    return _colorLookup[color];
  } else if (typeof color === "number") {
    return [color >> 16, color >> 8 & 255, color & 255];
  } else if (color.charAt(0) === "#") {
    if (color.length === 4) {
      //for shorthand like #9F0
      color = "#" + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2) + color.charAt(3) + color.charAt(3);
    }

    color = parseInt(color.substr(1), 16);
    return [color >> 16, color >> 8 & 255, color & 255];
  }

  return color.match(_numExp) || _colorLookup.transparent;
},
    _parseColorFilter = function _parseColorFilter(t, v, pg) {
  if (!_ColorFilter) {
    _ColorFilter = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].ColorFilter || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].createjs.ColorFilter;

    if (!_ColorFilter) {
      throw "EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.";
    }
  }

  var filters = t.filters || [],
      i = filters.length,
      c,
      s,
      e,
      a,
      p;

  while (--i > -1) {
    if (filters[i] instanceof _ColorFilter) {
      s = filters[i];
      break;
    }
  }

  if (!s) {
    s = new _ColorFilter();
    filters.push(s);
    t.filters = filters;
  }

  e = s.clone();

  if (v.tint != null) {
    c = _parseColor(v.tint);
    a = v.tintAmount != null ? Number(v.tintAmount) : 1;
    e.redOffset = Number(c[0]) * a;
    e.greenOffset = Number(c[1]) * a;
    e.blueOffset = Number(c[2]) * a;
    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
  } else {
    for (p in v) {
      if (p !== "exposure") if (p !== "brightness") {
        e[p] = Number(v[p]);
      }
    }
  }

  if (v.exposure != null) {
    e.redOffset = e.greenOffset = e.blueOffset = 255 * (Number(v.exposure) - 1);
    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
  } else if (v.brightness != null) {
    a = Number(v.brightness) - 1;
    e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
  }

  i = 8;

  while (--i > -1) {
    p = _colorProps[i];

    if (s[p] !== e[p]) {
      pg._addTween(s, p, s[p], e[p], "easel_colorFilter");
    }
  }

  pg._overwriteProps.push("easel_colorFilter");

  if (!t.cacheID) {
    throw "EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. " + t;
  }
},
    _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    _lumR = 0.212671,
    _lumG = 0.715160,
    _lumB = 0.072169,
    _applyMatrix = function _applyMatrix(m, m2) {
  if (!(m instanceof Array) || !(m2 instanceof Array)) {
    return m2;
  }

  var temp = [],
      i = 0,
      z = 0,
      y,
      x;

  for (y = 0; y < 4; y++) {
    for (x = 0; x < 5; x++) {
      z = x === 4 ? m[i + 4] : 0;
      temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
    }

    i += 5;
  }

  return temp;
},
    _setSaturation = function _setSaturation(m, n) {
  if (isNaN(n)) {
    return m;
  }

  var inv = 1 - n,
      r = inv * _lumR,
      g = inv * _lumG,
      b = inv * _lumB;
  return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
},
    _colorize = function _colorize(m, color, amount) {
  if (isNaN(amount)) {
    amount = 1;
  }

  var c = _parseColor(color),
      r = c[0] / 255,
      g = c[1] / 255,
      b = c[2] / 255,
      inv = 1 - amount;

  return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
},
    _setHue = function _setHue(m, n) {
  if (isNaN(n)) {
    return m;
  }

  n *= Math.PI / 180;
  var c = Math.cos(n),
      s = Math.sin(n);
  return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
},
    _setContrast = function _setContrast(m, n) {
  if (isNaN(n)) {
    return m;
  }

  n += 0.01;
  return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
},
    _parseColorMatrixFilter = function _parseColorMatrixFilter(t, v, pg) {
  if (!_ColorMatrixFilter) {
    _ColorMatrixFilter = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].ColorMatrixFilter || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].createjs.ColorMatrixFilter;

    if (!_ColorMatrixFilter) {
      throw "EaselPlugin error: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.";
    }
  }

  var filters = t.filters || [],
      i = filters.length,
      matrix,
      startMatrix,
      s;

  while (--i > -1) {
    if (filters[i] instanceof _ColorMatrixFilter) {
      s = filters[i];
      break;
    }
  }

  if (!s) {
    s = new _ColorMatrixFilter(_idMatrix.slice());
    filters.push(s);
    t.filters = filters;
  }

  startMatrix = s.matrix;
  matrix = _idMatrix.slice();

  if (v.colorize != null) {
    matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
  }

  if (v.contrast != null) {
    matrix = _setContrast(matrix, Number(v.contrast));
  }

  if (v.hue != null) {
    matrix = _setHue(matrix, Number(v.hue));
  }

  if (v.saturation != null) {
    matrix = _setSaturation(matrix, Number(v.saturation));
  }

  i = matrix.length;

  while (--i > -1) {
    if (matrix[i] !== startMatrix[i]) {
      pg._addTween(startMatrix, i, startMatrix[i], matrix[i], "easel_colorMatrixFilter");
    }
  }

  pg._overwriteProps.push("easel_colorMatrixFilter");

  if (!t.cacheID) {
    throw "EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. " + t;
  }

  pg._matrix = startMatrix;
};

var EaselPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "easel",
  priority: -1,
  version: "0.2.2",
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween, index) {
    this._target = target;
    var p, pt, tint, colorMatrix, end, labels, i;

    for (p in value) {
      end = value[p];

      if (typeof end === "function") {
        end = end(index, target);
      }

      if (p === "colorFilter" || p === "tint" || p === "tintAmount" || p === "exposure" || p === "brightness") {
        if (!tint) {
          _parseColorFilter(target, value.colorFilter || value, this);

          tint = true;
        }
      } else if (p === "saturation" || p === "contrast" || p === "hue" || p === "colorize" || p === "colorizeAmount") {
        if (!colorMatrix) {
          _parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);

          colorMatrix = true;
        }
      } else if (p === "frame") {
        this._firstPT = pt = {
          _next: this._firstPT,
          t: target,
          p: "gotoAndStop",
          s: target.currentFrame,
          f: true,
          n: "frame",
          pr: 0,
          type: 0,
          m: Math.round
        };

        if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
          for (i = 0; i < labels.length; i++) {
            if (labels[i].label === end) {
              end = labels[i].position;
            }
          }
        }

        pt.c = typeof end === "number" ? end - pt.s : parseFloat((end + "").split("=").join(""));

        if (pt._next) {
          pt._next._prev = pt;
        }
      } else if (target[p] != null) {
        this._firstPT = pt = {
          _next: this._firstPT,
          t: target,
          p: p,
          f: typeof target[p] === "function",
          n: p,
          pr: 0,
          type: 0
        };
        pt.s = !pt.f ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
        pt.c = typeof end === "number" ? end - pt.s : typeof end === "string" ? parseFloat(end.split("=").join("")) : 0;

        if (pt._next) {
          pt._next._prev = pt;
        }
      }
    }

    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(v) {
    var pt = this._firstPT,
        min = 0.000001,
        val;

    while (pt) {
      val = pt.c * v + pt.s;

      if (pt.m) {
        val = pt.m(val, pt.t);
      } else if (val < min && val > -min) {
        val = 0;
      }

      if (pt.f) {
        pt.t[pt.p](val);
      } else {
        pt.t[pt.p] = val;
      }

      pt = pt._next;
    }

    if (this._target.cacheID) {
      this._target.updateCache();
    }
  }
});



/***/ }),

/***/ "./node_modules/gsap/EndArrayPlugin.js":
/*!*********************************************!*\
  !*** ./node_modules/gsap/EndArrayPlugin.js ***!
  \*********************************************/
/*! exports provided: EndArrayPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndArrayPlugin", function() { return EndArrayPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EndArrayPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 0.1.3
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

var EndArrayPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "endArray",
  API: 2,
  version: "0.1.3",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween) {
    var i = value.length,
        a = this.a = [],
        start,
        end;
    this.target = target;
    this._mod = 0;

    if (!i) {
      return false;
    }

    while (--i > -1) {
      start = target[i];
      end = value[i];

      if (start !== end) {
        a.push({
          i: i,
          s: start,
          c: end - start
        });
      }
    }

    return true;
  },
  mod: function mod(lookup) {
    if (typeof lookup.endArray === "function") {
      this._mod = lookup.endArray;
    }
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(ratio) {
    var target = this.target,
        a = this.a,
        i = a.length,
        mod = this._mod,
        e,
        val;

    if (mod) {
      while (--i > -1) {
        e = a[i];
        target[e.i] = mod(e.s + e.c * ratio, target);
      }
    } else {
      while (--i > -1) {
        e = a[i];
        val = e.s + e.c * ratio;
        target[e.i] = val < 0.000001 && val > -0.000001 ? 0 : val;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/gsap/ModifiersPlugin.js":
/*!**********************************************!*\
  !*** ./node_modules/gsap/ModifiersPlugin.js ***!
  \**********************************************/
/*! exports provided: ModifiersPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifiersPlugin", function() { return ModifiersPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModifiersPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 0.0.4
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


var _cssRatioSetter = function _cssRatioSetter(pt, cssp, mod) {
  //Takes an individual CSSPropTween and converts it into a type:2 that has a setRatio that does everything the regular CSSPlugin.setRatio() method does but applying the mod() too. We do this to keep the main CSSPlugin.setRatio() as fast as possible (the vast majority of times, no mod() will be necessary)
  var type = pt.type,
      oldSetRatio = pt.setRatio,
      tween = cssp._tween,
      target = cssp._target;
  pt.type = 2;
  pt.m = mod;

  pt.setRatio = function (v) {
    var min = 0.000001,
        val,
        str,
        i;

    if (v === 1 && (tween._time === tween._duration || tween._time === 0)) {
      if (type !== 2) {
        if (pt.r && type !== -1) {
          val = Math.round(pt.s + pt.c);

          if (!type) {
            pt.t[pt.p] = mod.call(tween, val + pt.xs0, target, tween);
          } else if (type === 1) {
            str = pt.xs0 + val + pt.xs1;

            for (i = 1; i < pt.l; i++) {
              str += pt["xn" + i] + pt["xs" + (i + 1)];
            }

            pt.t[pt.p] = mod.call(tween, str, target, tween);
          }
        } else {
          pt.t[pt.p] = mod.call(tween, pt.e, target, tween);
        }
      } else {
        oldSetRatio.call(pt, v);
      }
    } else if (v || !(tween._time === tween._duration || tween._time === 0) || tween._rawPrevTime === -0.000001) {
      val = pt.c * v + pt.s;

      if (pt.r) {
        val = Math.round(val);
      } else if (val < min) if (val > -min) {
        val = 0;
      }

      if (!type) {
        pt.t[pt.p] = mod.call(tween, val + pt.xs0, target, tween);
      } else if (type === 1) {
        str = pt.xs0 + val + pt.xs1;

        for (i = 1; i < pt.l; i++) {
          str += pt["xn" + i] + pt["xs" + (i + 1)];
        }

        pt.t[pt.p] = mod.call(tween, str, target, tween);
      } else if (type === -1) {
        //non-tweening value
        pt.t[pt.p] = mod.call(tween, pt.xs0, target, tween);
      } else if (oldSetRatio) {
        oldSetRatio.call(pt, v);
      }
    } else {
      if (type !== 2) {
        pt.t[pt.p] = mod.call(tween, pt.b, target, tween);
      } else {
        oldSetRatio.call(pt, v);
      }
    }
  };
},
    _modCSS = function _modCSS(lookup, cssp) {
  var pt = cssp._firstPT,
      hasBezier = lookup.rotation && cssp._overwriteProps.join("").indexOf("bezier") !== -1; //when a Bezier tween is applying autoRotation, it's a very special case we need to handle differently.

  if (lookup.scale) {
    lookup.scaleX = lookup.scaleY = lookup.scale;
  } else if (lookup.rotationZ) {
    lookup.rotation = lookup.rotationZ;
  }

  while (pt) {
    if (typeof lookup[pt.p] === "function") {
      _cssRatioSetter(pt, cssp, lookup[pt.p]);
    } else if (hasBezier && pt.n === "bezier" && pt.plugin._overwriteProps.join("").indexOf("rotation") !== -1) {
      pt.data.mod = lookup.rotation;
    }

    pt = pt._next;
  }
},
    ModifiersPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "modifiers",
  version: "0.0.4",
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween) {
    this._tween = tween;
    this._vars = value;
    return true;
  },
  initAll: function initAll() {
    var tween = this._tween,
        lookup = this._vars,
        mpt = this,
        pt = tween._firstPT,
        val,
        next; //initAll() gets called for each and every ModifiersPlugin instance in a tween, so if there are multiple targets, there will be multiple instances. Since we're ripping through the whole tween (and all the PropTweens), we only need to run this code ONCE. So we're setting a toggle on the first PropTween that just tells us if we've done it already. We don't set it on the tween instance because if it gets invalidated, we don't want to have to track this property and reset it. PropTweens get blown away when a tween is invalidated.

    if (pt._modInitted) {
      return false;
    } else {
      pt._modInitted = 1;
    }

    while (pt) {
      next = pt._next; //record here, because it may get removed

      val = lookup[pt.n];

      if (pt.pg) {
        if (pt.t._propName === "css") {
          //handle CSSPlugin uniquely (for performance, due to the fact that the values almost always are a concatenation of numbers and strings, like suffixes, and we don't want to slow down the regular CSSPlugin setRatio() performance with conditional checks for if the value needs to be modded, so we pull any modding prop out and change it to a type:2 one that simply calls a setRatio() method where we encapsulate the modding and update all together. That way, it says in the main CSSProp linked list and just has some custom logic applied to it inside its setRatio())
          _modCSS(lookup, pt.t);
        } else if (pt.t !== mpt) {
          //don't run modProps on modProps :)
          val = lookup[pt.t._propName];
          pt.t._tween = tween;

          pt.t._mod(_typeof(val) === "object" ? val : lookup);
        }
      } else if (typeof val === "function") {
        if (pt.f === 2 && pt.t) {
          //a blob (text containing multiple numeric values)
          pt.t._applyPT.m = val;
          pt.t._tween = tween;
        } else {
          this._add(pt.t, pt.p, pt.s, pt.c, val); //remove from linked list


          if (next) {
            next._prev = pt._prev;
          }

          if (pt._prev) {
            pt._prev._next = next;
          } else if (tween._firstPT === pt) {
            tween._firstPT = next;
          }

          pt._next = pt._prev = null;
          tween._propLookup[pt.n] = mpt;
        }
      }

      pt = next;
    }

    return false;
  }
}),
    p = ModifiersPlugin.prototype;

p._add = function (target, p, s, c, mod) {
  this._addTween(target, p, s, s + c, p, mod);

  this._overwriteProps.push(p);
};

p = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals.TweenLite.version.split(".");

if (Number(p[0]) <= 1 && Number(p[1]) < 19 && _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].console) {
  console.log("ModifiersPlugin requires GSAP 1.19.0 or later.");
}



/***/ }),

/***/ "./node_modules/gsap/PixiPlugin.js":
/*!*****************************************!*\
  !*** ./node_modules/gsap/PixiPlugin.js ***!
  \*****************************************/
/*! exports provided: PixiPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixiPlugin", function() { return PixiPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixiPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 0.2.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * PixiPlugin is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */


var _numExp = /(\d|\.)+/g,
    _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
    _colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
},

/**
 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if "format" parameter is "hsl", it will populate the array with hue, saturation, and lightness values. Or if "format" is "number", it'll return a number like 0xFF0000 instead of an array. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
 * @param {(string)} format If "hsl", an hsl() or hsla() value will be returned instead of rgb() or rgba(). Or if "number", then a numeric value will be returned, like 0xFF0000. Default is rgb.
 * @return {(array|number)} An array containing red, green, and blue (and optionally alpha) in that order, or if the format parameter was "hsl", the array will contain hue, saturation and lightness (and optionally alpha) in that order. Or if "format" is defined as "number", it'll return a number like 0xFF0000. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and "format" is "hsl".
 */
_parseColor = function _parseColor(v, format) {
  var toHSL = format === "hsl",
      a,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!v) {
    a = _colorLookup.black;
  } else if (typeof v === "number") {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length === 4) {
        //for shorthand like #9F0
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b;
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_numExp);

      if (!toHSL) {
        h = Number(a[0]) % 360 / 360;
        s = Number(a[1]) / 100;
        l = Number(a[2]) / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;

        if (a.length > 3) {
          a[3] = Number(v[3]);
        }

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (v.indexOf("=") !== -1) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        return v.match(_relNumExp);
      }
    } else {
      a = v.match(_numExp) || _colorLookup.transparent;
    }

    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);

    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }

  if (toHSL && !wasHSL) {
    r = a[0] / 255;
    g = a[1] / 255;
    b = a[2] / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = h + 0.5 | 0;
    a[1] = s * 100 + 0.5 | 0;
    a[2] = l * 100 + 0.5 | 0;
  }

  return format === "number" ? a[0] << 16 | a[1] << 8 | a[2] : a;
},
    _formatColors = function _formatColors(s, toHSL) {
  var colors = (s + "").match(_colorExp) || [],
      charIndex = 0,
      parsed = "",
      i,
      color,
      temp;

  if (!colors.length) {
    return s;
  }

  for (i = 0; i < colors.length; i++) {
    color = colors[i];
    temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
    charIndex += temp.length + color.length;
    color = _parseColor(color, toHSL ? "hsl" : "rgb");

    if (color.length === 3) {
      color.push(1);
    }

    parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
  }

  return parsed + s.substr(charIndex);
},
    _colorStringFilter,
    TweenLite = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].GreenSockGlobals || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]).TweenLite,
    _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
    //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.
_idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    _lumR = 0.212671,
    _lumG = 0.715160,
    _lumB = 0.072169,
    _applyMatrix = function _applyMatrix(m, m2) {
  var temp = [],
      i = 0,
      z = 0,
      y,
      x;

  for (y = 0; y < 4; y++) {
    for (x = 0; x < 5; x++) {
      z = x === 4 ? m[i + 4] : 0;
      temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
    }

    i += 5;
  }

  return temp;
},
    _setSaturation = function _setSaturation(m, n) {
  var inv = 1 - n,
      r = inv * _lumR,
      g = inv * _lumG,
      b = inv * _lumB;
  return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
},
    _colorize = function _colorize(m, color, amount) {
  var c = _parseColor(color),
      r = c[0] / 255,
      g = c[1] / 255,
      b = c[2] / 255,
      inv = 1 - amount;

  return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
},
    _setHue = function _setHue(m, n) {
  n *= Math.PI / 180;
  var c = Math.cos(n),
      s = Math.sin(n);
  return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
},
    _setContrast = function _setContrast(m, n) {
  return _applyMatrix([n, 0, 0, 0, 0.5 * (1 - n), 0, n, 0, 0, 0.5 * (1 - n), 0, 0, n, 0, 0.5 * (1 - n), 0, 0, 0, 1, 0], m);
},
    _getFilter = function _getFilter(t, type) {
  var filterClass = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].PIXI.filters[type],
      filters = t.filters || [],
      i = filters.length,
      filter;

  if (!filterClass) {
    throw "PixiPlugin error: " + type + " isn't present.";
  }

  while (--i > -1) {
    if (filters[i] instanceof filterClass) {
      return filters[i];
    }
  }

  filter = new filterClass();

  if (type === "BlurFilter") {
    filter.blur = 0;
  }

  filters.push(filter);
  t.filters = filters;
  return filter;
},
    _addColorMatrixFilterCacheTween = function _addColorMatrixFilterCacheTween(p, pg, cache, vars) {
  //we cache the ColorMatrixFilter components in a _gsColorMatrixFilter object attached to the target object so that it's easy to grab the current value at any time.
  pg._addTween(cache, p, cache[p], vars[p], p);

  pg._overwriteProps.push(p);
},
    _applyBrightnessToMatrix = function _applyBrightnessToMatrix(brightness, matrix) {
  var temp = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].PIXI.filters.ColorMatrixFilter();
  temp.matrix = matrix;
  temp.brightness(brightness, true);
  return temp.matrix;
},
    _CMFdefaults = {
  contrast: 1,
  saturation: 1,
  colorizeAmount: 0,
  colorize: "rgb(255,255,255)",
  hue: 0,
  brightness: 1
},
    _parseColorMatrixFilter = function _parseColorMatrixFilter(t, v, pg) {
  var filter = _getFilter(t, "ColorMatrixFilter"),
      cache = t._gsColorMatrixFilter = t._gsColorMatrixFilter || {
    contrast: 1,
    saturation: 1,
    colorizeAmount: 0,
    colorize: "rgb(255,255,255)",
    hue: 0,
    brightness: 1
  },
      combine = v.combineCMF && !("colorMatrixFilter" in v && !v.colorMatrixFilter),
      i,
      matrix,
      startMatrix;

  startMatrix = filter.matrix;

  if (v.resolution) {
    filter.resolution = v.resolution;
  }

  if (v.matrix && v.matrix.length === startMatrix.length) {
    matrix = v.matrix;

    if (cache.contrast !== 1) {
      _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
    }

    if (cache.hue) {
      _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
    }

    if (cache.brightness !== 1) {
      _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
    }

    if (cache.colorizeAmount) {
      _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);

      _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
    }

    if (cache.saturation !== 1) {
      _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
    }
  } else {
    matrix = _idMatrix.slice();

    if (v.contrast != null) {
      matrix = _setContrast(matrix, Number(v.contrast));

      _addColorMatrixFilterCacheTween("contrast", pg, cache, v);
    } else if (cache.contrast !== 1) {
      if (combine) {
        matrix = _setContrast(matrix, cache.contrast);
      } else {
        _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
      }
    }

    if (v.hue != null) {
      matrix = _setHue(matrix, Number(v.hue));

      _addColorMatrixFilterCacheTween("hue", pg, cache, v);
    } else if (cache.hue) {
      if (combine) {
        matrix = _setHue(matrix, cache.hue);
      } else {
        _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
      }
    }

    if (v.brightness != null) {
      matrix = _applyBrightnessToMatrix(Number(v.brightness), matrix);

      _addColorMatrixFilterCacheTween("brightness", pg, cache, v);
    } else if (cache.brightness !== 1) {
      if (combine) {
        matrix = _applyBrightnessToMatrix(cache.brightness, matrix);
      } else {
        _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
      }
    }

    if (v.colorize != null) {
      v.colorizeAmount = "colorizeAmount" in v ? Number(v.colorizeAmount) : 1;
      matrix = _colorize(matrix, v.colorize, v.colorizeAmount);

      _addColorMatrixFilterCacheTween("colorize", pg, cache, v);

      _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, v);
    } else if (cache.colorizeAmount) {
      if (combine) {
        matrix = _colorize(matrix, cache.colorize, cache.colorizeAmount);
      } else {
        _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);

        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
      }
    }

    if (v.saturation != null) {
      matrix = _setSaturation(matrix, Number(v.saturation));

      _addColorMatrixFilterCacheTween("saturation", pg, cache, v);
    } else if (cache.saturation !== 1) {
      if (combine) {
        matrix = _setSaturation(matrix, cache.saturation);
      } else {
        _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
      }
    }
  }

  i = matrix.length;

  while (--i > -1) {
    if (matrix[i] !== startMatrix[i]) {
      pg._addTween(startMatrix, i, startMatrix[i], matrix[i], "colorMatrixFilter");
    }
  }

  pg._overwriteProps.push("colorMatrixFilter");
},
    _addColorTween = function _addColorTween(target, p, value, colorSetter, plugin) {
  var pt = colorSetter._firstPT = {
    _next: colorSetter._firstPT,
    t: target,
    p: p,
    proxy: {},
    f: typeof target[p] === "function"
  };
  pt.proxy[p] = "rgb(" + _parseColor(!pt.f ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]()).join(",") + ")";

  plugin._addTween(pt.proxy, p, "get", typeof value === "number" ? "rgb(" + _parseColor(value, false).join(",") + ")" : value, p, null, null, _colorStringFilter);
},
    //to improve performance, when a color is sensed, we hijack the setRatio() method of the plugin instance with a new function that this method spits back. This is a special method that handles parsing color values on-the-fly and turns them into numeric values which PixiJS requires. In other words, instead of "rgb(255, 0, 0)", PixiJS wants 0xFF0000. This also works with hsl() values.
_buildColorSetter = function _buildColorSetter(tween, plugin) {
  var setRatio = plugin.setRatio,
      //save the original (super) setRatio() function
  func = function func(v) {
    var pt = func._firstPT,
        val;
    setRatio.call(plugin, v);

    while (pt) {
      val = _parseColor(pt.proxy[pt.p], "number");

      if (pt.f) {
        pt.t[pt.p](val);
      } else {
        pt.t[pt.p] = val;
      }

      pt = pt._next;
    }

    if (func.graphics) {
      //in order for PixiJS to actually redraw GraphicsData, we've gotta increment the "dirty" and "clearDirty" values. If we don't do this, the values will be tween properly, but not rendered.
      func.graphics.dirty++;
      func.graphics.clearDirty++;
    }
  };

  plugin.setRatio = func;
  return func;
},
    _colorProps = {
  tint: 1,
  lineColor: 1,
  fillColor: 1
},
    _xyContexts = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
    _contexts = {
  x: "position",
  y: "position",
  tileX: "tilePosition",
  tileY: "tilePosition"
},
    _colorMatrixFilterProps = {
  colorMatrixFilter: 1,
  saturation: 1,
  contrast: 1,
  hue: 1,
  colorize: 1,
  colorizeAmount: 1,
  brightness: 1,
  combineCMF: 1
},
    _DEG2RAD = Math.PI / 180,
    _degreesToRadians = function _degreesToRadians(value) {
  return typeof value === "string" && value.charAt(1) === "=" ? value.substr(0, 2) + parseFloat(value.substr(2)) * _DEG2RAD : value * _DEG2RAD;
},
    i,
    p; //context setup...


for (i = 0; i < _xyContexts.length; i++) {
  p = _xyContexts[i];
  _contexts[p + "X"] = p;
  _contexts[p + "Y"] = p;
} //color parsing setup...


for (p in _colorLookup) {
  _colorExp += "|" + p + "\\b";
}

_colorExp = new RegExp(_colorExp + ")", "gi");

_colorStringFilter = function _colorStringFilter(a) {
  var combined = a[0] + " " + a[1],
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
    a[0] = _formatColors(a[0], toHSL);
    a[1] = _formatColors(a[1], toHSL);
  }
};

if (!TweenLite.defaultStringFilter) {
  TweenLite.defaultStringFilter = _colorStringFilter;
}

var PixiPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "pixi",
  priority: 0,
  API: 2,
  global: true,
  version: "0.2.1",
  init: function init(target, values, tween, index) {
    if (!target instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].PIXI.DisplayObject) {
      return false;
    }

    var context, axis, value, colorMatrix, filter, p, padding, colorSetter, i, data, pt;

    for (p in values) {
      context = _contexts[p];
      value = values[p];

      if (typeof value === "function") {
        value = value(index || 0, target);
      }

      if (context) {
        axis = p.charAt(p.length - 1).toLowerCase().indexOf("x") !== -1 ? "x" : "y";

        this._addTween(target[context], axis, target[context][axis], context === "skew" ? _degreesToRadians(value) : value, p);
      } else if (p === "scale" || p === "anchor" || p === "pivot" || p === "tileScale") {
        this._addTween(target[p], "x", target[p].x, value, p + "X");

        this._addTween(target[p], "y", target[p].y, value, p + "Y");
      } else if (p === "rotation") {
        //PIXI expects rotation in radians, but as a convenience we let folks define it in degrees and we do the conversion.
        this._addTween(target, p, target.rotation, _degreesToRadians(value), p);
      } else if (_colorMatrixFilterProps[p]) {
        if (!colorMatrix) {
          _parseColorMatrixFilter(target, values.colorMatrixFilter || values, this);

          colorMatrix = true;
        }
      } else if (p === "blur" || p === "blurX" || p === "blurY" || p === "blurPadding") {
        filter = _getFilter(target, "BlurFilter");

        this._addTween(filter, p, filter[p], value, p);

        if (values.blurPadding !== 0) {
          padding = values.blurPadding || Math.max(filter[p], value) * 2;
          i = target.filters.length;

          while (--i > -1) {
            target.filters[i].padding = Math.max(target.filters[i].padding, padding); //if we don't expand the padding on all the filters, it can look clipped.
          }
        }
      } else if (_colorProps[p]) {
        if (!colorSetter) {
          colorSetter = _buildColorSetter(tween, this);
        }

        if ((p === "lineColor" || p === "fillColor") && target instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].PIXI.Graphics) {
          data = target.graphicsData;
          i = data.length;

          while (--i > -1) {
            _addColorTween(data[i], p, value, colorSetter, this);
          }

          colorSetter.graphics = target;
        } else {
          _addColorTween(target, p, value, colorSetter, this);
        }
      } else if (p === "autoAlpha") {
        this._firstPT = pt = {
          t: {
            setRatio: function setRatio() {
              target.visible = !!target.alpha;
            }
          },
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          pg: 0,
          n: "visible",
          pr: 0,
          m: 0,
          _next: this._firstPT
        };

        if (pt._next) {
          pt._next._prev = pt;
        }

        this._addTween(target, "alpha", target.alpha, value, "alpha");

        this._overwriteProps.push("alpha", "visible");
      } else {
        this._addTween(target, p, target[p], value, p);
      }

      this._overwriteProps.push(p);
    }

    return true;
  }
});

PixiPlugin.colorProps = _colorProps;
PixiPlugin.parseColor = _parseColor;
PixiPlugin.formatColors = _formatColors;
PixiPlugin.colorStringFilter = _colorStringFilter;


/***/ }),

/***/ "./node_modules/gsap/RoundPropsPlugin.js":
/*!***********************************************!*\
  !*** ./node_modules/gsap/RoundPropsPlugin.js ***!
  \***********************************************/
/*! exports provided: RoundPropsPlugin, _getRoundFunc, _roundLinkedList, p, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return RoundPropsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getRoundFunc", function() { return _getRoundFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_roundLinkedList", function() { return _roundLinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundPropsPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var RoundPropsPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "roundProps",
  version: "1.7.0",
  priority: -1,
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween) {
    this._tween = tween;
    return true;
  }
}),
    _getRoundFunc = function _getRoundFunc(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()

  return function (n) {
    return (Math.round(n / v) * v * p | 0) / p;
  };
},
    _roundLinkedList = function _roundLinkedList(node, mod) {
  while (node) {
    if (!node.f && !node.blob) {
      node.m = mod || Math.round;
    }

    node = node._next;
  }
},
    p = RoundPropsPlugin.prototype;

p._onInitAllProps = function () {
  var tween = this._tween,
      rp = tween.vars.roundProps,
      lookup = {},
      rpt = tween._propLookup.roundProps,
      pt,
      next,
      i,
      p;

  if (_typeof(rp) === "object" && !rp.push) {
    for (p in rp) {
      lookup[p] = _getRoundFunc(rp[p]);
    }
  } else {
    if (typeof rp === "string") {
      rp = rp.split(",");
    }

    i = rp.length;

    while (--i > -1) {
      lookup[rp[i]] = Math.round;
    }
  }

  for (p in lookup) {
    pt = tween._firstPT;

    while (pt) {
      next = pt._next; //record here, because it may get removed

      if (pt.pg) {
        pt.t._mod(lookup);
      } else if (pt.n === p) {
        if (pt.f === 2 && pt.t) {
          //a blob (text containing multiple numeric values)
          _roundLinkedList(pt.t._firstPT, lookup[p]);
        } else {
          this._add(pt.t, p, pt.s, pt.c, lookup[p]); //remove from linked list


          if (next) {
            next._prev = pt._prev;
          }

          if (pt._prev) {
            pt._prev._next = next;
          } else if (tween._firstPT === pt) {
            tween._firstPT = next;
          }

          pt._next = pt._prev = null;
          tween._propLookup[p] = rpt;
        }
      }

      pt = next;
    }
  }

  return false;
};

p._add = function (target, p, s, c, mod) {
  this._addTween(target, p, s, s + c, p, mod || Math.round);

  this._overwriteProps.push(p);
};



/***/ }),

/***/ "./node_modules/gsap/ScrollToPlugin.js":
/*!*********************************************!*\
  !*** ./node_modules/gsap/ScrollToPlugin.js ***!
  \*********************************************/
/*! exports provided: ScrollToPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToPlugin", function() { return ScrollToPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollToPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 1.9.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


var _doc = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document || {}).documentElement,
    _window = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"],
    _max = function _max(element, axis) {
  var dim = axis === "x" ? "Width" : "Height",
      scroll = "scroll" + dim,
      client = "client" + dim,
      body = document.body;
  return element === _window || element === _doc || element === body ? Math.max(_doc[scroll], body[scroll]) - (_window["inner" + dim] || _doc[client] || body[client]) : element[scroll] - element["offset" + dim];
},
    _unwrapElement = function _unwrapElement(value) {
  if (typeof value === "string") {
    value = TweenLite.selector(value);
  }

  if (value.length && value !== _window && value[0] && value[0].style && !value.nodeType) {
    value = value[0];
  }

  return value === _window || value.nodeType && value.style ? value : null;
},
    _buildGetter = function _buildGetter(e, axis) {
  //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
  var p = "scroll" + (axis === "x" ? "Left" : "Top");

  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else if (_doc[p] != null) {
      e = _doc;
    } else {
      e = document.body;
    }
  }

  return function () {
    return e[p];
  };
},
    _getOffset = function _getOffset(element, container) {
  var rect = _unwrapElement(element).getBoundingClientRect(),
      b = document.body,
      isRoot = !container || container === _window || container === b,
      cRect = isRoot ? {
    top: _doc.clientTop - (window.pageYOffset || _doc.scrollTop || b.scrollTop || 0),
    left: _doc.clientLeft - (window.pageXOffset || _doc.scrollLeft || b.scrollLeft || 0)
  } : container.getBoundingClientRect(),
      offsets = {
    x: rect.left - cRect.left,
    y: rect.top - cRect.top
  };

  if (!isRoot && container) {
    //only add the current scroll position if it's not the window/body.
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }

  return offsets;
  /*	PREVIOUS
  var rect = _unwrapElement(element).getBoundingClientRect(),
  	isRoot = (!container || container === _window || container === document.body),
  	cRect = (isRoot ? _doc : container).getBoundingClientRect(),
  	offsets = {x: rect.left - cRect.left, y: rect.top - cRect.top};
  if (!isRoot && container) { //only add the current scroll position if it's not the window/body.
  	offsets.x += _buildGetter(container, "x")();
  	offsets.y += _buildGetter(container, "y")();
  }
  return offsets;
  */
},
    _parseVal = function _parseVal(value, target, axis) {
  var type = _typeof(value);

  return !isNaN(value) ? parseFloat(value) : type === "number" || type === "string" && value.charAt(1) === "=" ? value : value === "max" ? _max(target, axis) : Math.min(_max(target, axis), _getOffset(value, target)[axis]);
},
    ScrollToPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "scrollTo",
  API: 2,
  global: true,
  version: "1.9.1",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween) {
    this._wdw = target === _window;
    this._target = target;
    this._tween = tween;

    if (_typeof(value) !== "object") {
      value = {
        y: value
      }; //if we don't receive an object as the parameter, assume the user intends "y".

      if (typeof value.y === "string" && value.y !== "max" && value.y.charAt(1) !== "=") {
        value.x = value.y;
      }
    } else if (value.nodeType) {
      value = {
        y: value,
        x: value
      };
    }

    this.vars = value;
    this._autoKill = value.autoKill !== false;
    this.getX = _buildGetter(target, "x");
    this.getY = _buildGetter(target, "y");
    this.x = this.xPrev = this.getX();
    this.y = this.yPrev = this.getY();

    if (value.x != null) {
      this._addTween(this, "x", this.x, _parseVal(value.x, target, "x") - (value.offsetX || 0), "scrollTo_x", true);

      this._overwriteProps.push("scrollTo_x");
    } else {
      this.skipX = true;
    }

    if (value.y != null) {
      this._addTween(this, "y", this.y, _parseVal(value.y, target, "y") - (value.offsetY || 0), "scrollTo_y", true);

      this._overwriteProps.push("scrollTo_y");
    } else {
      this.skipY = true;
    }

    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(v) {
    this._super.setRatio.call(this, v);

    var x = this._wdw || !this.skipX ? this.getX() : this.xPrev,
        y = this._wdw || !this.skipY ? this.getY() : this.yPrev,
        yDif = y - this.yPrev,
        xDif = x - this.xPrev,
        threshold = ScrollToPlugin.autoKillThreshold;

    if (this.x < 0) {
      //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this._autoKill) {
      //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
      if (!this.skipX && (xDif > threshold || xDif < -threshold) && x < _max(this._target, "x")) {
        this.skipX = true; //if the user scrolls separately, we should stop tweening!
      }

      if (!this.skipY && (yDif > threshold || yDif < -threshold) && y < _max(this._target, "y")) {
        this.skipY = true; //if the user scrolls separately, we should stop tweening!
      }

      if (this.skipX && this.skipY) {
        this._tween.kill();

        if (this.vars.onAutoKill) {
          this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []);
        }
      }
    }

    if (this._wdw) {
      _window.scrollTo(!this.skipX ? this.x : x, !this.skipY ? this.y : y);
    } else {
      if (!this.skipY) {
        this._target.scrollTop = this.y;
      }

      if (!this.skipX) {
        this._target.scrollLeft = this.x;
      }
    }

    this.xPrev = this.x;
    this.yPrev = this.y;
  }
}),
    p = ScrollToPlugin.prototype;

ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
ScrollToPlugin.autoKillThreshold = 7;

p._kill = function (lookup) {
  if (lookup.scrollTo_x) {
    this.skipX = true;
  }

  if (lookup.scrollTo_y) {
    this.skipY = true;
  }

  return this._super._kill.call(this, lookup);
};



/***/ }),

/***/ "./node_modules/gsap/TextPlugin.js":
/*!*****************************************!*\
  !*** ./node_modules/gsap/TextPlugin.js ***!
  \*****************************************/
/*! exports provided: TextPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPlugin", function() { return TextPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 0.6.2
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */


var _getText = function _getText(e) {
  var type = e.nodeType,
      result = "";

  if (type === 1 || type === 9 || type === 11) {
    if (typeof e.textContent === "string") {
      return e.textContent;
    } else {
      for (e = e.firstChild; e; e = e.nextSibling) {
        result += _getText(e);
      }
    }
  } else if (type === 3 || type === 4) {
    return e.nodeValue;
  }

  return result;
},
    _emoji = "[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D]|[\uD800-\uDBFF][\uDC00-\uDFFF]",
    _emojiExp = new RegExp(_emoji),
    _emojiAndCharsExp = new RegExp(_emoji + "|.", "g"),
    _emojiSafeSplit = function _emojiSafeSplit(text, delimiter) {
  return (delimiter === "" || !delimiter) && _emojiExp.test(text) ? text.match(_emojiAndCharsExp) : text.split(delimiter || "");
},

/* //previous emoji-related splitting. New method above is faster and more concise.
_emojiStart = 0xD800,
_emojiEnd = 0xDBFF,
_emojiLowStart = 0xDC00,
_emojiRegionStart = 0x1F1E6,
_emojiRegionEnd = 0x1F1FF,
_emojiModStart = 0x1f3fb,
_emojiModEnd = 0x1f3ff,
_emojiPairCode = function(s) {
	return ((s.charCodeAt(0) - _emojiStart) << 10) + (s.charCodeAt(1) - _emojiLowStart) + 0x10000;
},
_emojiSafeSplit = function(text, delimiter) { //like calling String.split(delimiter) except that it keeps emoji characters together.
	if (delimiter !== "") {
		return text.split(delimiter);
	}
	var l = text.length,
		a = [],
		character, i, emojiPair1, emojiPair2, j;
	for (i = 0; i < l; i++) {
		character = text.charAt(i);
		if ((character.charCodeAt(0) >= _emojiStart && character.charCodeAt(0) <= _emojiEnd) || (text.charCodeAt(i+1) >= 0xFE00 && text.charCodeAt(i+1) <= 0xFE0F)) { //special emoji characters use 2 or 4 unicode characters that we must keep together.
			emojiPair1 = _emojiPairCode(text.substr(i, 2));
			emojiPair2 = _emojiPairCode(text.substr(i + 2, 2));
			j = ((emojiPair1 >= _emojiRegionStart && emojiPair1 <= _emojiRegionEnd && emojiPair2 >= _emojiRegionStart && emojiPair2 <= _emojiRegionEnd) || (emojiPair2 >= _emojiModStart && emojiPair2 <= _emojiModEnd)) ? 4 : 2;
			a.push(text.substr(i, j));
			i += j - 1;
		} else {
			a.push(character);
		}
	}
	return a;
},
*/
TextPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
  propName: "text",
  API: 2,
  version: "0.6.2",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function init(target, value, tween, index) {
    var i = target.nodeName.toUpperCase(),
        shrt;

    if (typeof value === "function") {
      value = value(index, target);
    }

    this._svg = target.getBBox && (i === "TEXT" || i === "TSPAN");

    if (!("innerHTML" in target) && !this._svg) {
      return false;
    }

    this._target = target;

    if (_typeof(value) !== "object") {
      value = {
        value: value
      };
    }

    if (value.value === undefined) {
      this._text = this._original = [""];
      return true;
    }

    this._delimiter = value.delimiter || "";
    this._original = _emojiSafeSplit(_getText(target).replace(/\s+/g, " "), this._delimiter);
    this._text = _emojiSafeSplit(value.value.replace(/\s+/g, " "), this._delimiter);
    this._runBackwards = tween.vars.runBackwards === true;

    if (this._runBackwards) {
      i = this._original;
      this._original = this._text;
      this._text = i;
    }

    if (typeof value.newClass === "string") {
      this._newClass = value.newClass;
      this._hasClass = true;
    }

    if (typeof value.oldClass === "string") {
      this._oldClass = value.oldClass;
      this._hasClass = true;
    }

    i = this._original.length - this._text.length;
    shrt = i < 0 ? this._original : this._text;
    this._fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");

    if (i < 0) {
      i = -i;
    }

    while (--i > -1) {
      shrt.push(this._fillChar);
    }

    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function set(ratio) {
    if (ratio > 1) {
      ratio = 1;
    } else if (ratio < 0) {
      ratio = 0;
    }

    if (this._runBackwards) {
      ratio = 1 - ratio;
    }

    var l = this._text.length,
        i = ratio * l + 0.5 | 0,
        applyNew,
        applyOld,
        str;

    if (this._hasClass) {
      applyNew = this._newClass && i !== 0;
      applyOld = this._oldClass && i !== l;
      str = (applyNew ? "<span class='" + this._newClass + "'>" : "") + this._text.slice(0, i).join(this._delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + this._oldClass + "'>" : "") + this._delimiter + this._original.slice(i).join(this._delimiter) + (applyOld ? "</span>" : "");
    } else {
      str = this._text.slice(0, i).join(this._delimiter) + this._delimiter + this._original.slice(i).join(this._delimiter);
    }

    if (this._svg) {
      //SVG text elements don't have an "innerHTML" in Microsoft browsers.
      this._target.textContent = str;
    } else {
      this._target.innerHTML = this._fillChar === "&nbsp;" && str.indexOf("  ") !== -1 ? str.split("  ").join("&nbsp;&nbsp;") : str;
    }
  }
}),
    p = TextPlugin.prototype;

p._newClass = p._oldClass = p._delimiter = "";


/***/ }),

/***/ "./node_modules/gsap/TimelineLite.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/TimelineLite.js ***!
  \*******************************************/
/*! exports provided: TimelineLite, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return TimelineLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineLite; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
  var TimelineLite = function TimelineLite(vars) {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].call(this, vars);
    this._labels = {};
    this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
    this.smoothChildTiming = this.vars.smoothChildTiming === true;
    this._sortChildren = true;
    this._onUpdate = this.vars.onUpdate;
    var v = this.vars,
        val,
        p;

    for (p in v) {
      val = v[p];
      if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
        v[p] = this._swapSelfInParams(val);
      }
    }

    if (_isArray(v.tweens)) {
      this.add(v.tweens, 0, v.align, v.stagger);
    }
  },
      _tinyNum = 0.0000000001,
      TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
      _internals = TimelineLite._internals = {},
      _isSelector = TweenLiteInternals.isSelector,
      _isArray = TweenLiteInternals.isArray,
      _lazyTweens = TweenLiteInternals.lazyTweens,
      _lazyRender = TweenLiteInternals.lazyRender,
      _globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
      _copy = function _copy(vars) {
    var copy = {},
        p;

    for (p in vars) {
      copy[p] = vars[p];
    }

    return copy;
  },
      _applyCycle = function _applyCycle(vars, targets, i) {
    var alt = vars.cycle,
        p,
        val;

    for (p in alt) {
      val = alt[p];
      vars[p] = typeof val === "function" ? val(i, targets[i]) : val[i % val.length];
    }

    delete vars.cycle;
  },
      _pauseCallback = _internals.pauseCallback = function () {},
      _slice = function _slice(a) {
    //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
    var b = [],
        l = a.length,
        i;

    for (i = 0; i !== l; b.push(a[i++])) {
      ;
    }

    return b;
  },
      p = TimelineLite.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]();

  TimelineLite.version = "2.0.2";
  p.constructor = TimelineLite;
  p.kill()._gc = p._forcingPlayhead = p._hasPause = false;
  /* might use later...
  //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
  function localToGlobal(time, animation) {
  	while (animation) {
  		time = (time / animation._timeScale) + animation._startTime;
  		animation = animation.timeline;
  	}
  	return time;
  }
  	//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
  function globalToLocal(time, animation) {
  	var scale = 1;
  	time -= localToGlobal(0, animation);
  	while (animation) {
  		scale *= animation._timeScale;
  		animation = animation.timeline;
  	}
  	return time * scale;
  }
  */

  p.to = function (target, duration, vars, position) {
    var Engine = vars.repeat && _globals.TweenMax || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
  };

  p.from = function (target, duration, vars, position) {
    return this.add((vars.repeat && _globals.TweenMax || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]).from(target, duration, vars), position);
  };

  p.fromTo = function (target, duration, fromVars, toVars, position) {
    var Engine = toVars.repeat && _globals.TweenMax || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
  };

  p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
    var tl = new TimelineLite({
      onComplete: onCompleteAll,
      onCompleteParams: onCompleteAllParams,
      callbackScope: onCompleteAllScope,
      smoothChildTiming: this.smoothChildTiming
    }),
        cycle = vars.cycle,
        copy,
        i;

    if (typeof targets === "string") {
      targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
    }

    targets = targets || [];

    if (_isSelector(targets)) {
      //senses if the targets object is a selector. If it is, we should translate it into an array.
      targets = _slice(targets);
    }

    stagger = stagger || 0;

    if (stagger < 0) {
      targets = _slice(targets);
      targets.reverse();
      stagger *= -1;
    }

    for (i = 0; i < targets.length; i++) {
      copy = _copy(vars);

      if (copy.startAt) {
        copy.startAt = _copy(copy.startAt);

        if (copy.startAt.cycle) {
          _applyCycle(copy.startAt, targets, i);
        }
      }

      if (cycle) {
        _applyCycle(copy, targets, i);

        if (copy.duration != null) {
          duration = copy.duration;
          delete copy.duration;
        }
      }

      tl.to(targets[i], duration, copy, i * stagger);
    }

    return this.add(tl, position);
  };

  p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
    vars.immediateRender = vars.immediateRender != false;
    vars.runBackwards = true;
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  };

  p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
    toVars.startAt = fromVars;
    toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  };

  p.call = function (callback, params, scope, position) {
    return this.add(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
  };

  p.set = function (target, vars, position) {
    position = this._parseTimeOrLabel(position, 0, true);

    if (vars.immediateRender == null) {
      vars.immediateRender = position === this._time && !this._paused;
    }

    return this.add(new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"](target, 0, vars), position);
  };

  TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
    vars = vars || {};

    if (vars.smoothChildTiming == null) {
      vars.smoothChildTiming = true;
    }

    var tl = new TimelineLite(vars),
        root = tl._timeline,
        hasNegativeStart,
        time,
        tween,
        next;

    if (ignoreDelayedCalls == null) {
      ignoreDelayedCalls = true;
    }

    root._remove(tl, true);

    tl._startTime = 0;
    tl._rawPrevTime = tl._time = tl._totalTime = root._time;
    tween = root._first;

    while (tween) {
      next = tween._next;

      if (!ignoreDelayedCalls || !(tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"] && tween.target === tween.vars.onComplete)) {
        time = tween._startTime - tween._delay;

        if (time < 0) {
          hasNegativeStart = 1;
        }

        tl.add(tween, time);
      }

      tween = next;
    }

    root.add(tl, 0);

    if (hasNegativeStart) {
      //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
      tl.totalDuration();
    }

    return tl;
  };

  p.add = function (value, position, align, stagger) {
    var curTime, l, i, child, tl, beforeRawTime;

    if (typeof position !== "number") {
      position = this._parseTimeOrLabel(position, 0, true, value);
    }

    if (!(value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"])) {
      if (value instanceof Array || value && value.push && _isArray(value)) {
        align = align || "normal";
        stagger = stagger || 0;
        curTime = position;
        l = value.length;

        for (i = 0; i < l; i++) {
          if (_isArray(child = value[i])) {
            child = new TimelineLite({
              tweens: child
            });
          }

          this.add(child, curTime);

          if (typeof child !== "string" && typeof child !== "function") {
            if (align === "sequence") {
              curTime = child._startTime + child.totalDuration() / child._timeScale;
            } else if (align === "start") {
              child._startTime -= child.delay();
            }
          }

          curTime += stagger;
        }

        return this._uncache(true);
      } else if (typeof value === "string") {
        return this.addLabel(value, position);
      } else if (typeof value === "function") {
        value = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, value);
      } else {
        throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
      }
    }

    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype.add.call(this, value, position);

    if (value._time) {
      //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
      curTime = Math.max(0, Math.min(value.totalDuration(), (this.rawTime() - value._startTime) * value._timeScale));

      if (Math.abs(curTime - value._totalTime) > 0.00001) {
        //if an onComplete restarts the tween in a nested timeline, for example, there could be an endless loop without this logic (v2.0.2), like var masterTL = new TimelineMax({autoRemoveChildren: true}), tl = new TimelineMax(); tl.eventCallback("onComplete", function() { tl.restart() } );tl.fromTo('div', 1.1, { rotation: 0 }, { rotation: 360 }, 0);masterTL.add(tl);
        value.render(curTime, false, false);
      }
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


    if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
      //in case any of the ancestors had completed but should now be enabled...
      tl = this;
      beforeRawTime = tl.rawTime() > value._startTime; //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.

      while (tl._timeline) {
        if (beforeRawTime && tl._timeline.smoothChildTiming) {
          tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
        } else if (tl._gc) {
          tl._enabled(true, false);
        }

        tl = tl._timeline;
      }
    }
    return this;
  };

  p.remove = function (value) {
    if (value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]) {
      this._remove(value, false);

      var tl = value._timeline = value.vars.useFrames ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.

      value._startTime = (value._paused ? value._pauseTime : tl._time) - (!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale; //ensure that if it gets played again, the timing is correct.

      return this;
    } else if (value instanceof Array || value && value.push && _isArray(value)) {
      var i = value.length;

      while (--i > -1) {
        this.remove(value[i]);
      }

      return this;
    } else if (typeof value === "string") {
      return this.removeLabel(value);
    }

    return this.kill(null, value);
  };

  p._remove = function (tween, skipDisable) {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._remove.call(this, tween, skipDisable);

    var last = this._last;

    if (!last) {
      this._time = this._totalTime = this._duration = this._totalDuration = 0;
    } else if (this._time > this.duration()) {
      this._time = this._duration;
      this._totalTime = this._totalDuration;
    }

    return this;
  };

  p.append = function (value, offsetOrLabel) {
    return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
  };

  p.insert = p.insertMultiple = function (value, position, align, stagger) {
    return this.add(value, position || 0, align, stagger);
  };

  p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
    return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
  };

  p.addLabel = function (label, position) {
    this._labels[label] = this._parseTimeOrLabel(position);
    return this;
  };

  p.addPause = function (position, callback, params, scope) {
    var t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, _pauseCallback, params, scope || this);
    t.vars.onComplete = t.vars.onReverseComplete = callback;
    t.data = "isPause";
    this._hasPause = true;
    return this.add(t, position);
  };

  p.removeLabel = function (label) {
    delete this._labels[label];
    return this;
  };

  p.getLabelTime = function (label) {
    return this._labels[label] != null ? this._labels[label] : -1;
  };

  p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
    var clippedDuration, i; //if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().

    if (ignore instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore.timeline === this) {
      this.remove(ignore);
    } else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
      i = ignore.length;

      while (--i > -1) {
        if (ignore[i] instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore[i].timeline === this) {
          this.remove(ignore[i]);
        }
      }
    }

    clippedDuration = typeof timeOrLabel === "number" && !offsetOrLabel ? 0 : this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.

    if (typeof offsetOrLabel === "string") {
      return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && typeof timeOrLabel === "number" && this._labels[offsetOrLabel] == null ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
    }

    offsetOrLabel = offsetOrLabel || 0;

    if (typeof timeOrLabel === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
      //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
      i = timeOrLabel.indexOf("=");

      if (i === -1) {
        if (this._labels[timeOrLabel] == null) {
          return appendIfAbsent ? this._labels[timeOrLabel] = clippedDuration + offsetOrLabel : offsetOrLabel;
        }

        return this._labels[timeOrLabel] + offsetOrLabel;
      }

      offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
      timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : clippedDuration;
    } else if (timeOrLabel == null) {
      timeOrLabel = clippedDuration;
    }

    return Number(timeOrLabel) + offsetOrLabel;
  };

  p.seek = function (position, suppressEvents) {
    return this.totalTime(typeof position === "number" ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
  };

  p.stop = function () {
    return this.paused(true);
  };

  p.gotoAndPlay = function (position, suppressEvents) {
    return this.play(position, suppressEvents);
  };

  p.gotoAndStop = function (position, suppressEvents) {
    return this.pause(position, suppressEvents);
  };

  p.render = function (time, suppressEvents, force) {
    if (this._gc) {
      this._enabled(true, false);
    }

    var prevTime = this._time,
        totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
        prevStart = this._startTime,
        prevTimeScale = this._timeScale,
        prevPaused = this._paused,
        tween,
        isComplete,
        next,
        callback,
        internalForce,
        pauseTween,
        curTime;

    if (prevTime !== this._time) {
      //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
      time += this._time - prevTime;
    }

    if (time >= totalDur - 0.0000001 && time >= 0) {
      //to work around occasional floating point math artifacts.
      this._totalTime = this._time = totalDur;
      if (!this._reversed) if (!this._hasPausedChild()) {
        isComplete = true;
        callback = "onComplete";
        internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.

        if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
          internalForce = true;

          if (this._rawPrevTime > _tinyNum) {
            callback = "onReverseComplete";
          }
        }
      }
      this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

      time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
    } else if (time < 0.0000001) {
      //to work around occasional floating point math artifacts, round super small values to 0.
      this._totalTime = this._time = 0;

      if (prevTime !== 0 || this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || time < 0 && this._rawPrevTime >= 0)) {
        callback = "onReverseComplete";
        isComplete = this._reversed;
      }

      if (time < 0) {
        this._active = false;

        if (this._timeline.autoRemoveChildren && this._reversed) {
          //ensures proper GC if a timeline is resumed after it's finished reversing.
          internalForce = isComplete = true;
          callback = "onReverseComplete";
        } else if (this._rawPrevTime >= 0 && this._first) {
          //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
          internalForce = true;
        }

        this._rawPrevTime = time;
      } else {
        this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

        if (time === 0 && isComplete) {
          //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
          tween = this._first;

          while (tween && tween._startTime === 0) {
            if (!tween._duration) {
              isComplete = false;
            }

            tween = tween._next;
          }
        }

        time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)

        if (!this._initted) {
          internalForce = true;
        }
      }
    } else {
      if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
        if (time >= prevTime) {
          tween = this._first;

          while (tween && tween._startTime <= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
              pauseTween = tween;
            }
            tween = tween._next;
          }
        } else {
          tween = this._last;

          while (tween && tween._startTime >= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
              pauseTween = tween;
            }
            tween = tween._prev;
          }
        }

        if (pauseTween) {
          this._time = time = pauseTween._startTime;
          this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
        }
      }

      this._totalTime = this._time = this._rawPrevTime = time;
    }

    if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
      return;
    } else if (!this._initted) {
      this._initted = true;
    }

    if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
      this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
    }
    if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
      this._callback("onStart");
    }
    curTime = this._time;

    if (curTime >= prevTime) {
      tween = this._first;

      while (tween) {
        next = tween._next; //record it here because the value could change after rendering...

        if (curTime !== this._time || this._paused && !prevPaused) {
          //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
          break;
        } else if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
          if (pauseTween === tween) {
            this.pause();
          }

          if (!tween._reversed) {
            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
          } else {
            tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
          }
        }

        tween = next;
      }
    } else {
      tween = this._last;

      while (tween) {
        next = tween._prev; //record it here because the value could change after rendering...

        if (curTime !== this._time || this._paused && !prevPaused) {
          //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
          break;
        } else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
          if (pauseTween === tween) {
            pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.

            while (pauseTween && pauseTween.endTime() > this._time) {
              pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
              pauseTween = pauseTween._prev;
            }

            pauseTween = null;
            this.pause();
          }

          if (!tween._reversed) {
            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
          } else {
            tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
          }
        }

        tween = next;
      }
    }

    if (this._onUpdate) if (!suppressEvents) {
      if (_lazyTweens.length) {
        //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
        _lazyRender();
      }

      this._callback("onUpdate");
    }
    if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
      //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
      if (isComplete) {
        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
          _lazyRender();
        }

        if (this._timeline.autoRemoveChildren) {
          this._enabled(false, false);
        }

        this._active = false;
      }

      if (!suppressEvents && this.vars[callback]) {
        this._callback(callback);
      }
    }
  };

  p._hasPausedChild = function () {
    var tween = this._first;

    while (tween) {
      if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
        return true;
      }

      tween = tween._next;
    }

    return false;
  };

  p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
    ignoreBeforeTime = ignoreBeforeTime || -9999999999;
    var a = [],
        tween = this._first,
        cnt = 0;

    while (tween) {
      if (tween._startTime < ignoreBeforeTime) {//do nothing
      } else if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        if (tweens !== false) {
          a[cnt++] = tween;
        }
      } else {
        if (timelines !== false) {
          a[cnt++] = tween;
        }

        if (nested !== false) {
          a = a.concat(tween.getChildren(true, tweens, timelines));
          cnt = a.length;
        }
      }

      tween = tween._next;
    }

    return a;
  };

  p.getTweensOf = function (target, nested) {
    var disabled = this._gc,
        a = [],
        cnt = 0,
        tweens,
        i;

    if (disabled) {
      this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.

    }

    tweens = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target);
    i = tweens.length;

    while (--i > -1) {
      if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
        a[cnt++] = tweens[i];
      }
    }

    if (disabled) {
      this._enabled(false, true);
    }

    return a;
  };

  p.recent = function () {
    return this._recent;
  };

  p._contains = function (tween) {
    var tl = tween.timeline;

    while (tl) {
      if (tl === this) {
        return true;
      }

      tl = tl.timeline;
    }

    return false;
  };

  p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
    ignoreBeforeTime = ignoreBeforeTime || 0;
    var tween = this._first,
        labels = this._labels,
        p;

    while (tween) {
      if (tween._startTime >= ignoreBeforeTime) {
        tween._startTime += amount;
      }

      tween = tween._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return this._uncache(true);
  };

  p._kill = function (vars, target) {
    if (!vars && !target) {
      return this._enabled(false, false);
    }

    var tweens = !target ? this.getChildren(true, true, false) : this.getTweensOf(target),
        i = tweens.length,
        changed = false;

    while (--i > -1) {
      if (tweens[i]._kill(vars, target)) {
        changed = true;
      }
    }

    return changed;
  };

  p.clear = function (labels) {
    var tweens = this.getChildren(false, true, true),
        i = tweens.length;
    this._time = this._totalTime = 0;

    while (--i > -1) {
      tweens[i]._enabled(false, false);
    }

    if (labels !== false) {
      this._labels = {};
    }

    return this._uncache(true);
  };

  p.invalidate = function () {
    var tween = this._first;

    while (tween) {
      tween.invalidate();
      tween = tween._next;
    }

    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.invalidate.call(this);
    ;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (enabled === this._gc) {
      var tween = this._first;

      while (tween) {
        tween._enabled(enabled, true);

        tween = tween._next;
      }
    }

    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._enabled.call(this, enabled, ignoreTimeline);
  };

  p.totalTime = function (time, suppressEvents, uncapped) {
    this._forcingPlayhead = true;
    var val = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.totalTime.apply(this, arguments);
    this._forcingPlayhead = false;
    return val;
  };

  p.duration = function (value) {
    if (!arguments.length) {
      if (this._dirty) {
        this.totalDuration(); //just triggers recalculation
      }

      return this._duration;
    }

    if (this.duration() !== 0 && value !== 0) {
      this.timeScale(this._duration / value);
    }

    return this;
  };

  p.totalDuration = function (value) {
    if (!arguments.length) {
      if (this._dirty) {
        var max = 0,
            tween = this._last,
            prevStart = 999999999999,
            prev,
            end;

        while (tween) {
          prev = tween._prev; //record it here in case the tween changes position in the sequence...

          if (tween._dirty) {
            tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
          }

          if (tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration) {
            //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
            this._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().

            this.add(tween, tween._startTime - tween._delay);
            this._calculatingDuration = 0;
          } else {
            prevStart = tween._startTime;
          }

          if (tween._startTime < 0 && !tween._paused) {
            //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
            max -= tween._startTime;

            if (this._timeline.smoothChildTiming) {
              this._startTime += tween._startTime / this._timeScale;
              this._time -= tween._startTime;
              this._totalTime -= tween._startTime;
              this._rawPrevTime -= tween._startTime;
            }

            this.shiftChildren(-tween._startTime, false, -9999999999);
            prevStart = 0;
          }

          end = tween._startTime + tween._totalDuration / tween._timeScale;

          if (end > max) {
            max = end;
          }

          tween = prev;
        }

        this._duration = this._totalDuration = max;
        this._dirty = false;
      }

      return this._totalDuration;
    }

    return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
  };

  p.paused = function (value) {
    if (!value) {
      //if there's a pause directly at the spot from where we're unpausing, skip it.
      var tween = this._first,
          time = this._time;

      while (tween) {
        if (tween._startTime === time && tween.data === "isPause") {
          tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
        }

        tween = tween._next;
      }
    }

    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.paused.apply(this, arguments);
  };

  p.usesFrames = function () {
    var tl = this._timeline;

    while (tl._timeline) {
      tl = tl._timeline;
    }

    return tl === _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline;
  };

  p.rawTime = function (wrapRepeats) {
    return wrapRepeats && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
  };

  return TimelineLite;
}, true);

var TimelineLite = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].TimelineLite;


/***/ }),

/***/ "./node_modules/gsap/TimelineMax.js":
/*!******************************************!*\
  !*** ./node_modules/gsap/TimelineMax.js ***!
  \******************************************/
/*! exports provided: TimelineMax, TimelineLite, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return TimelineMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineLite.js */ "./node_modules/gsap/TimelineLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function () {
  var TimelineMax = function TimelineMax(vars) {
    _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, vars);
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._cycle = 0;
    this._yoyo = this.vars.yoyo === true;
    this._dirty = true;
  },
      _tinyNum = 0.0000000001,
      TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
      _lazyTweens = TweenLiteInternals.lazyTweens,
      _lazyRender = TweenLiteInternals.lazyRender,
      _globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
      _easeNone = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](null, null, 1, 0),
      p = TimelineMax.prototype = new _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

  p.constructor = TimelineMax;
  p.kill()._gc = false;
  TimelineMax.version = "2.0.2";

  p.invalidate = function () {
    this._yoyo = this.vars.yoyo === true;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;

    this._uncache(true);

    return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
  };

  p.addCallback = function (callback, position, params, scope) {
    return this.add(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
  };

  p.removeCallback = function (callback, position) {
    if (callback) {
      if (position == null) {
        this._kill(null, callback);
      } else {
        var a = this.getTweensOf(callback, false),
            i = a.length,
            time = this._parseTimeOrLabel(position);

        while (--i > -1) {
          if (a[i]._startTime === time) {
            a[i]._enabled(false, false);
          }
        }
      }
    }

    return this;
  };

  p.removePause = function (position) {
    return this.removeCallback(_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]._internals.pauseCallback, position);
  };

  p.tweenTo = function (position, vars) {
    vars = vars || {};
    var copy = {
      ease: _easeNone,
      useFrames: this.usesFrames(),
      immediateRender: false,
      lazy: false
    },
        Engine = vars.repeat && _globals.TweenMax || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        duration,
        p,
        t;

    for (p in vars) {
      copy[p] = vars[p];
    }

    copy.time = this._parseTimeOrLabel(position);
    duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || 0.001;
    t = new Engine(this, duration, copy);

    copy.onStart = function () {
      t.target.paused(true);

      if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) {
        //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
        t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
      }

      if (vars.onStart) {
        //in case the user had an onStart in the vars - we don't want to overwrite it.
        vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
      }
    };

    return t;
  };

  p.tweenFromTo = function (fromPosition, toPosition, vars) {
    vars = vars || {};
    fromPosition = this._parseTimeOrLabel(fromPosition);
    vars.startAt = {
      onComplete: this.seek,
      onCompleteParams: [fromPosition],
      callbackScope: this
    };
    vars.immediateRender = vars.immediateRender !== false;
    var t = this.tweenTo(toPosition, vars);
    t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)

    return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || 0.001);
  };

  p.render = function (time, suppressEvents, force) {
    if (this._gc) {
      this._enabled(true, false);
    }

    var prevTime = this._time,
        totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
        dur = this._duration,
        prevTotalTime = this._totalTime,
        prevStart = this._startTime,
        prevTimeScale = this._timeScale,
        prevRawPrevTime = this._rawPrevTime,
        prevPaused = this._paused,
        prevCycle = this._cycle,
        tween,
        isComplete,
        next,
        callback,
        internalForce,
        cycleDuration,
        pauseTween,
        curTime;

    if (prevTime !== this._time) {
      //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
      time += this._time - prevTime;
    }

    if (time >= totalDur - 0.0000001 && time >= 0) {
      //to work around occasional floating point math artifacts.
      if (!this._locked) {
        this._totalTime = totalDur;
        this._cycle = this._repeat;
      }

      if (!this._reversed) if (!this._hasPausedChild()) {
        isComplete = true;
        callback = "onComplete";
        internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.

        if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
          internalForce = true;

          if (prevRawPrevTime > _tinyNum) {
            callback = "onReverseComplete";
          }
        }
      }
      this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

      if (this._yoyo && (this._cycle & 1) !== 0) {
        this._time = time = 0;
      } else {
        this._time = dur;
        time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
      }
    } else if (time < 0.0000001) {
      //to work around occasional floating point math artifacts, round super small values to 0.
      if (!this._locked) {
        this._totalTime = this._cycle = 0;
      }

      this._time = 0;

      if (prevTime !== 0 || dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !this._locked) {
        //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
        callback = "onReverseComplete";
        isComplete = this._reversed;
      }

      if (time < 0) {
        this._active = false;

        if (this._timeline.autoRemoveChildren && this._reversed) {
          internalForce = isComplete = true;
          callback = "onReverseComplete";
        } else if (prevRawPrevTime >= 0 && this._first) {
          //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
          internalForce = true;
        }

        this._rawPrevTime = time;
      } else {
        this._rawPrevTime = dur || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

        if (time === 0 && isComplete) {
          //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
          tween = this._first;

          while (tween && tween._startTime === 0) {
            if (!tween._duration) {
              isComplete = false;
            }

            tween = tween._next;
          }
        }

        time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)

        if (!this._initted) {
          internalForce = true;
        }
      }
    } else {
      if (dur === 0 && prevRawPrevTime < 0) {
        //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
        internalForce = true;
      }

      this._time = this._rawPrevTime = time;

      if (!this._locked) {
        this._totalTime = time;

        if (this._repeat !== 0) {
          cycleDuration = dur + this._repeatDelay;
          this._cycle = this._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)

          if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
            this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
          }
          this._time = this._totalTime - this._cycle * cycleDuration;
          if (this._yoyo) if ((this._cycle & 1) !== 0) {
            this._time = dur - this._time;
          }

          if (this._time > dur) {
            this._time = dur;
            time = dur + 0.0001; //to avoid occasional floating point rounding error
          } else if (this._time < 0) {
            this._time = time = 0;
          } else {
            time = this._time;
          }
        }
      }

      if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
        time = this._time;

        if (time >= prevTime || this._repeat && prevCycle !== this._cycle) {
          tween = this._first;

          while (tween && tween._startTime <= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
              pauseTween = tween;
            }
            tween = tween._next;
          }
        } else {
          tween = this._last;

          while (tween && tween._startTime >= time && !pauseTween) {
            if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
              pauseTween = tween;
            }
            tween = tween._prev;
          }
        }

        if (pauseTween && pauseTween._startTime < dur) {
          this._time = time = pauseTween._startTime;
          this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
        }
      }
    }

    if (this._cycle !== prevCycle) if (!this._locked) {
      /*
      make sure children at the end/beginning of the timeline are rendered properly. If, for example, 
      a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
      would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
      could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So 
      we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
      ensure that zero-duration tweens at the very beginning or end of the TimelineMax work. 
      */
      var backwards = this._yoyo && (prevCycle & 1) !== 0,
          wrap = backwards === (this._yoyo && (this._cycle & 1) !== 0),
          recTotalTime = this._totalTime,
          recCycle = this._cycle,
          recRawPrevTime = this._rawPrevTime,
          recTime = this._time;
      this._totalTime = prevCycle * dur;

      if (this._cycle < prevCycle) {
        backwards = !backwards;
      } else {
        this._totalTime += dur;
      }

      this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

      this._rawPrevTime = dur === 0 ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
      this._cycle = prevCycle;
      this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()

      prevTime = backwards ? 0 : dur;
      this.render(prevTime, suppressEvents, dur === 0);
      if (!suppressEvents) if (!this._gc) {
        if (this.vars.onRepeat) {
          this._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.

          this._locked = false;

          this._callback("onRepeat");
        }
      }

      if (prevTime !== this._time) {
        //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
        return;
      }

      if (wrap) {
        this._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.

        this._locked = true;
        prevTime = backwards ? dur + 0.0001 : -0.0001;
        this.render(prevTime, true, false);
      }

      this._locked = false;

      if (this._paused && !prevPaused) {
        //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
        return;
      }

      this._time = recTime;
      this._totalTime = recTotalTime;
      this._cycle = recCycle;
      this._rawPrevTime = recRawPrevTime;
    }

    if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
      if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) {
        //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
        this._callback("onUpdate");
      }
      return;
    } else if (!this._initted) {
      this._initted = true;
    }

    if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
      this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
    }
    if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
      this._callback("onStart");
    }
    curTime = this._time;

    if (curTime >= prevTime) {
      tween = this._first;

      while (tween) {
        next = tween._next; //record it here because the value could change after rendering...

        if (curTime !== this._time || this._paused && !prevPaused) {
          //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
          break;
        } else if (tween._active || tween._startTime <= this._time && !tween._paused && !tween._gc) {
          if (pauseTween === tween) {
            this.pause();
          }

          if (!tween._reversed) {
            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
          } else {
            tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
          }
        }

        tween = next;
      }
    } else {
      tween = this._last;

      while (tween) {
        next = tween._prev; //record it here because the value could change after rendering...

        if (curTime !== this._time || this._paused && !prevPaused) {
          //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
          break;
        } else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
          if (pauseTween === tween) {
            pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.

            while (pauseTween && pauseTween.endTime() > this._time) {
              pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
              pauseTween = pauseTween._prev;
            }

            pauseTween = null;
            this.pause();
          }

          if (!tween._reversed) {
            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
          } else {
            tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
          }
        }

        tween = next;
      }
    }

    if (this._onUpdate) if (!suppressEvents) {
      if (_lazyTweens.length) {
        //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
        _lazyRender();
      }

      this._callback("onUpdate");
    }
    if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
      //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
      if (isComplete) {
        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
          _lazyRender();
        }

        if (this._timeline.autoRemoveChildren) {
          this._enabled(false, false);
        }

        this._active = false;
      }

      if (!suppressEvents && this.vars[callback]) {
        this._callback(callback);
      }
    }
  };

  p.getActive = function (nested, tweens, timelines) {
    if (nested == null) {
      nested = true;
    }

    if (tweens == null) {
      tweens = true;
    }

    if (timelines == null) {
      timelines = false;
    }

    var a = [],
        all = this.getChildren(nested, tweens, timelines),
        cnt = 0,
        l = all.length,
        i,
        tween;

    for (i = 0; i < l; i++) {
      tween = all[i];

      if (tween.isActive()) {
        a[cnt++] = tween;
      }
    }

    return a;
  };

  p.getLabelAfter = function (time) {
    if (!time) if (time !== 0) {
      //faster than isNan()
      time = this._time;
    }
    var labels = this.getLabelsArray(),
        l = labels.length,
        i;

    for (i = 0; i < l; i++) {
      if (labels[i].time > time) {
        return labels[i].name;
      }
    }

    return null;
  };

  p.getLabelBefore = function (time) {
    if (time == null) {
      time = this._time;
    }

    var labels = this.getLabelsArray(),
        i = labels.length;

    while (--i > -1) {
      if (labels[i].time < time) {
        return labels[i].name;
      }
    }

    return null;
  };

  p.getLabelsArray = function () {
    var a = [],
        cnt = 0,
        p;

    for (p in this._labels) {
      a[cnt++] = {
        time: this._labels[p],
        name: p
      };
    }

    a.sort(function (a, b) {
      return a.time - b.time;
    });
    return a;
  };

  p.invalidate = function () {
    this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat

    return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
  }; //---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------


  p.progress = function (value, suppressEvents) {
    return !arguments.length ? this._time / this.duration() || 0 : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
  };

  p.totalProgress = function (value, suppressEvents) {
    return !arguments.length ? this._totalTime / this.totalDuration() || 0 : this.totalTime(this.totalDuration() * value, suppressEvents);
  };

  p.totalDuration = function (value) {
    if (!arguments.length) {
      if (this._dirty) {
        _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.totalDuration.call(this); //just forces refresh
        //Instead of Infinity, we use 999999999999 so that we can accommodate reverses.

        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
      }

      return this._totalDuration;
    }

    return this._repeat === -1 || !value ? this : this.timeScale(this.totalDuration() / value);
  };

  p.time = function (value, suppressEvents) {
    if (!arguments.length) {
      return this._time;
    }

    if (this._dirty) {
      this.totalDuration();
    }

    if (value > this._duration) {
      value = this._duration;
    }

    if (this._yoyo && (this._cycle & 1) !== 0) {
      value = this._duration - value + this._cycle * (this._duration + this._repeatDelay);
    } else if (this._repeat !== 0) {
      value += this._cycle * (this._duration + this._repeatDelay);
    }

    return this.totalTime(value, suppressEvents);
  };

  p.repeat = function (value) {
    if (!arguments.length) {
      return this._repeat;
    }

    this._repeat = value;
    return this._uncache(true);
  };

  p.repeatDelay = function (value) {
    if (!arguments.length) {
      return this._repeatDelay;
    }

    this._repeatDelay = value;
    return this._uncache(true);
  };

  p.yoyo = function (value) {
    if (!arguments.length) {
      return this._yoyo;
    }

    this._yoyo = value;
    return this;
  };

  p.currentLabel = function (value) {
    if (!arguments.length) {
      return this.getLabelBefore(this._time + 0.00000001);
    }

    return this.seek(value, true);
  };

  return TimelineMax;
}, true);

var TimelineMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].TimelineMax;


/***/ }),

/***/ "./node_modules/gsap/TweenLite.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/TweenLite.js ***!
  \****************************************/
/*! exports provided: _gsScope, TweenLite, globals, default, SimpleTimeline, Animation, Ease, Linear, Power0, Power1, Power2, Power3, Power4, TweenPlugin, EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _gsScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimeline", function() { return SimpleTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return TweenPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

/* ES6 changes:
	- declare and export _gsScope at top.
	- set var TweenLite = the result of the main function
	- export default TweenLite at the bottom
	- return TweenLite at the bottom of the main function
	- pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
	- remove the "export to multiple environments" in Definition().
 */
var _gsScope = typeof window !== "undefined" ? window :  true && module.exports && typeof global !== "undefined" ? global : undefined || {};
var TweenLite = function (window, moduleName) {
  "use strict";

  var _exports = {},
      _doc = window.document,
      _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;

  if (_globals.TweenLite) {
    return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
  }

  var _namespace = function _namespace(ns) {
    var a = ns.split("."),
        p = _globals,
        i;

    for (i = 0; i < a.length; i++) {
      p[a[i]] = p = p[a[i]] || {};
    }

    return p;
  },
      gs = _namespace("com.greensock"),
      _tinyNum = 0.0000000001,
      _slice = function _slice(a) {
    //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
    var b = [],
        l = a.length,
        i;

    for (i = 0; i !== l; b.push(a[i++])) {}

    return b;
  },
      _emptyFunc = function _emptyFunc() {},
      _isArray = function () {
    //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
    var toString = Object.prototype.toString,
        array = toString.call([]);
    return function (obj) {
      return obj != null && (obj instanceof Array || _typeof(obj) === "object" && !!obj.push && toString.call(obj) === array);
    };
  }(),
      a,
      i,
      p,
      _ticker,
      _tickerActive,
      _defLookup = {},

  /**
   * @constructor
   * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
   * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
   * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
   * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
   *
   * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
   * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
   * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
   * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
   * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
   * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
   * sandbox the banner one like:
   *
   * <script>
   *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
   * </script>
   * <script src="js/greensock/v1.7/TweenMax.js"></script>
   * <script>
   *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
   * </script>
   * <script src="js/greensock/v1.6/TweenMax.js"></script>
   * <script>
   *     gs.TweenLite.to(...); //would use v1.7
   *     TweenLite.to(...); //would use v1.6
   * </script>
   *
   * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
   * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
   * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
   * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
   */
  Definition = function Definition(ns, dependencies, func, global) {
    this.sc = _defLookup[ns] ? _defLookup[ns].sc : []; //subclasses

    _defLookup[ns] = this;
    this.gsClass = null;
    this.func = func;
    var _classes = [];

    this.check = function (init) {
      var i = dependencies.length,
          missing = i,
          cur,
          a,
          n,
          cl;

      while (--i > -1) {
        if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
          _classes[i] = cur.gsClass;
          missing--;
        } else if (init) {
          cur.sc.push(this);
        }
      }

      if (missing === 0 && func) {
        a = ("com.greensock." + ns).split(".");
        n = a.pop();
        cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes); //exports to multiple environments

        if (global) {
          _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)

          /*
          if (typeof(module) !== "undefined" && module.exports) { //node
          	if (ns === moduleName) {
          		module.exports = _exports[moduleName] = cl;
          		for (i in _exports) {
          			cl[i] = _exports[i];
          		}
          	} else if (_exports[moduleName]) {
          		_exports[moduleName][n] = cl;
          	}
          } else if (typeof(define) === "function" && define.amd){ //AMD
          	define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
          }
          */
        }

        for (i = 0; i < this.sc.length; i++) {
          this.sc[i].check();
        }
      }
    };

    this.check(true);
  },
      //used to create Definition instances (which basically registers a class that has dependencies).
  _gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
    return new Definition(ns, dependencies, func, global);
  },
      //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
  _class = gs._class = function (ns, func, global) {
    func = func || function () {};

    _gsDefine(ns, [], function () {
      return func;
    }, global);

    return func;
  };

  _gsDefine.globals = _globals;
  /*
   * ----------------------------------------------------------------
   * Ease
   * ----------------------------------------------------------------
   */

  var _baseParams = [0, 0, 1, 1],
      Ease = _class("easing.Ease", function (func, extraParams, type, power) {
    this._func = func;
    this._type = type || 0;
    this._power = power || 0;
    this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
  }, true),
      _easeMap = Ease.map = {},
      _easeReg = Ease.register = function (ease, names, types, create) {
    var na = names.split(","),
        i = na.length,
        ta = (types || "easeIn,easeOut,easeInOut").split(","),
        e,
        name,
        j,
        type;

    while (--i > -1) {
      name = na[i];
      e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
      j = ta.length;

      while (--j > -1) {
        type = ta[j];
        _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
      }
    }
  };

  p = Ease.prototype;
  p._calcEnd = false;

  p.getRatio = function (p) {
    if (this._func) {
      this._params[0] = p;
      return this._func.apply(null, this._params);
    }

    var t = this._type,
        pw = this._power,
        r = t === 1 ? 1 - p : t === 2 ? p : p < 0.5 ? p * 2 : (1 - p) * 2;

    if (pw === 1) {
      r *= r;
    } else if (pw === 2) {
      r *= r * r;
    } else if (pw === 3) {
      r *= r * r * r;
    } else if (pw === 4) {
      r *= r * r * r * r;
    }

    return t === 1 ? 1 - r : t === 2 ? r : p < 0.5 ? r / 2 : 1 - r / 2;
  }; //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)


  a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
  i = a.length;

  while (--i > -1) {
    p = a[i] + ",Power" + i;

    _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);

    _easeReg(new Ease(null, null, 2, i), p, "easeIn" + (i === 0 ? ",easeNone" : ""));

    _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
  }

  _easeMap.linear = gs.easing.Linear.easeIn;
  _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks

  /*
   * ----------------------------------------------------------------
   * EventDispatcher
   * ----------------------------------------------------------------
   */

  var EventDispatcher = _class("events.EventDispatcher", function (target) {
    this._listeners = {};
    this._eventTarget = target || this;
  });

  p = EventDispatcher.prototype;

  p.addEventListener = function (type, callback, scope, useParam, priority) {
    priority = priority || 0;
    var list = this._listeners[type],
        index = 0,
        listener,
        i;

    if (this === _ticker && !_tickerActive) {
      _ticker.wake();
    }

    if (list == null) {
      this._listeners[type] = list = [];
    }

    i = list.length;

    while (--i > -1) {
      listener = list[i];

      if (listener.c === callback && listener.s === scope) {
        list.splice(i, 1);
      } else if (index === 0 && listener.pr < priority) {
        index = i + 1;
      }
    }

    list.splice(index, 0, {
      c: callback,
      s: scope,
      up: useParam,
      pr: priority
    });
  };

  p.removeEventListener = function (type, callback) {
    var list = this._listeners[type],
        i;

    if (list) {
      i = list.length;

      while (--i > -1) {
        if (list[i].c === callback) {
          list.splice(i, 1);
          return;
        }
      }
    }
  };

  p.dispatchEvent = function (type) {
    var list = this._listeners[type],
        i,
        t,
        listener;

    if (list) {
      i = list.length;

      if (i > 1) {
        list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
      }

      t = this._eventTarget;

      while (--i > -1) {
        listener = list[i];

        if (listener) {
          if (listener.up) {
            listener.c.call(listener.s || t, {
              type: type,
              target: t
            });
          } else {
            listener.c.call(listener.s || t);
          }
        }
      }
    }
  };
  /*
   * ----------------------------------------------------------------
   * Ticker
   * ----------------------------------------------------------------
   */


  var _reqAnimFrame = window.requestAnimationFrame,
      _cancelAnimFrame = window.cancelAnimationFrame,
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _lastUpdate = _getTime(); //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.


  a = ["ms", "moz", "webkit", "o"];
  i = a.length;

  while (--i > -1 && !_reqAnimFrame) {
    _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
    _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
  }

  _class("Ticker", function (fps, useRAF) {
    var _self = this,
        _startTime = _getTime(),
        _useRAF = useRAF !== false && _reqAnimFrame ? "auto" : false,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _tickWord = "tick",
        //helps reduce gc burden
    _fps,
        _req,
        _id,
        _gap,
        _nextTime,
        _tick = function _tick(manual) {
      var elapsed = _getTime() - _lastUpdate,
          overlap,
          dispatch;

      if (elapsed > _lagThreshold) {
        _startTime += elapsed - _adjustedLag;
      }

      _lastUpdate += elapsed;
      _self.time = (_lastUpdate - _startTime) / 1000;
      overlap = _self.time - _nextTime;

      if (!_fps || overlap > 0 || manual === true) {
        _self.frame++;
        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
        dispatch = true;
      }

      if (manual !== true) {
        //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        _id = _req(_tick);
      }

      if (dispatch) {
        _self.dispatchEvent(_tickWord);
      }
    };

    EventDispatcher.call(_self);
    _self.time = _self.frame = 0;

    _self.tick = function () {
      _tick(true);
    };

    _self.lagSmoothing = function (threshold, adjustedLag) {
      if (!arguments.length) {
        //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
        return _lagThreshold < 1 / _tinyNum;
      }

      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    };

    _self.sleep = function () {
      if (_id == null) {
        return;
      }

      if (!_useRAF || !_cancelAnimFrame) {
        clearTimeout(_id);
      } else {
        _cancelAnimFrame(_id);
      }

      _req = _emptyFunc;
      _id = null;

      if (_self === _ticker) {
        _tickerActive = false;
      }
    };

    _self.wake = function (seamless) {
      if (_id !== null) {
        _self.sleep();
      } else if (seamless) {
        _startTime += -_lastUpdate + (_lastUpdate = _getTime());
      } else if (_self.frame > 10) {
        //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
        _lastUpdate = _getTime() - _lagThreshold + 5;
      }

      _req = _fps === 0 ? _emptyFunc : !_useRAF || !_reqAnimFrame ? function (f) {
        return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
      } : _reqAnimFrame;

      if (_self === _ticker) {
        _tickerActive = true;
      }

      _tick(2);
    };

    _self.fps = function (value) {
      if (!arguments.length) {
        return _fps;
      }

      _fps = value;
      _gap = 1 / (_fps || 60);
      _nextTime = this.time + _gap;

      _self.wake();
    };

    _self.useRAF = function (value) {
      if (!arguments.length) {
        return _useRAF;
      }

      _self.sleep();

      _useRAF = value;

      _self.fps(_fps);
    };

    _self.fps(fps); //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.


    setTimeout(function () {
      if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
        _self.useRAF(false);
      }
    }, 1500);
  });

  p = gs.Ticker.prototype = new gs.events.EventDispatcher();
  p.constructor = gs.Ticker;
  /*
   * ----------------------------------------------------------------
   * Animation
   * ----------------------------------------------------------------
   */

  var Animation = _class("core.Animation", function (duration, vars) {
    this.vars = vars = vars || {};
    this._duration = this._totalDuration = duration || 0;
    this._delay = Number(vars.delay) || 0;
    this._timeScale = 1;
    this._active = vars.immediateRender === true;
    this.data = vars.data;
    this._reversed = vars.reversed === true;

    if (!_rootTimeline) {
      return;
    }

    if (!_tickerActive) {
      //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
      _ticker.wake();
    }

    var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
    tl.add(this, tl._time);

    if (this.vars.paused) {
      this.paused(true);
    }
  });

  _ticker = Animation.ticker = new gs.Ticker();
  p = Animation.prototype;
  p._dirty = p._gc = p._initted = p._paused = false;
  p._totalTime = p._time = 0;
  p._rawPrevTime = -1;
  p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
  p._paused = false; //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.

  var _checkTimeout = function _checkTimeout() {
    if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) {
      //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
      _ticker.wake();
    }

    var t = setTimeout(_checkTimeout, 2000);

    if (t.unref) {
      // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
      t.unref();
    }
  };

  _checkTimeout();

  p.play = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from, suppressEvents);
    }

    return this.reversed(false).paused(false);
  };

  p.pause = function (atTime, suppressEvents) {
    if (atTime != null) {
      this.seek(atTime, suppressEvents);
    }

    return this.paused(true);
  };

  p.resume = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from, suppressEvents);
    }

    return this.paused(false);
  };

  p.seek = function (time, suppressEvents) {
    return this.totalTime(Number(time), suppressEvents !== false);
  };

  p.restart = function (includeDelay, suppressEvents) {
    return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
  };

  p.reverse = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from || this.totalDuration(), suppressEvents);
    }

    return this.reversed(true).paused(false);
  };

  p.render = function (time, suppressEvents, force) {//stub - we override this method in subclasses.
  };

  p.invalidate = function () {
    this._time = this._totalTime = 0;
    this._initted = this._gc = false;
    this._rawPrevTime = -1;

    if (this._gc || !this.timeline) {
      this._enabled(true);
    }

    return this;
  };

  p.isActive = function () {
    var tl = this._timeline,
        //the 2 root timelines won't have a _timeline; they're always active.
    startTime = this._startTime,
        rawTime;
    return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    this._gc = !enabled;
    this._active = this.isActive();

    if (ignoreTimeline !== true) {
      if (enabled && !this.timeline) {
        this._timeline.add(this, this._startTime - this._delay);
      } else if (!enabled && this.timeline) {
        this._timeline._remove(this, true);
      }
    }

    return false;
  };

  p._kill = function (vars, target) {
    return this._enabled(false, false);
  };

  p.kill = function (vars, target) {
    this._kill(vars, target);

    return this;
  };

  p._uncache = function (includeSelf) {
    var tween = includeSelf ? this : this.timeline;

    while (tween) {
      tween._dirty = true;
      tween = tween.timeline;
    }

    return this;
  };

  p._swapSelfInParams = function (params) {
    var i = params.length,
        copy = params.concat();

    while (--i > -1) {
      if (params[i] === "{self}") {
        copy[i] = this;
      }
    }

    return copy;
  };

  p._callback = function (type) {
    var v = this.vars,
        callback = v[type],
        params = v[type + "Params"],
        scope = v[type + "Scope"] || v.callbackScope || this,
        l = params ? params.length : 0;

    switch (l) {
      //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
      case 0:
        callback.call(scope);
        break;

      case 1:
        callback.call(scope, params[0]);
        break;

      case 2:
        callback.call(scope, params[0], params[1]);
        break;

      default:
        callback.apply(scope, params);
    }
  }; //----Animation getters/setters --------------------------------------------------------


  p.eventCallback = function (type, callback, params, scope) {
    if ((type || "").substr(0, 2) === "on") {
      var v = this.vars;

      if (arguments.length === 1) {
        return v[type];
      }

      if (callback == null) {
        delete v[type];
      } else {
        v[type] = callback;
        v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
        v[type + "Scope"] = scope;
      }

      if (type === "onUpdate") {
        this._onUpdate = callback;
      }
    }

    return this;
  };

  p.delay = function (value) {
    if (!arguments.length) {
      return this._delay;
    }

    if (this._timeline.smoothChildTiming) {
      this.startTime(this._startTime + value - this._delay);
    }

    this._delay = value;
    return this;
  };

  p.duration = function (value) {
    if (!arguments.length) {
      this._dirty = false;
      return this._duration;
    }

    this._duration = this._totalDuration = value;

    this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.


    if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
      this.totalTime(this._totalTime * (value / this._duration), true);
    }
    return this;
  };

  p.totalDuration = function (value) {
    this._dirty = false;
    return !arguments.length ? this._totalDuration : this.duration(value);
  };

  p.time = function (value, suppressEvents) {
    if (!arguments.length) {
      return this._time;
    }

    if (this._dirty) {
      this.totalDuration();
    }

    return this.totalTime(value > this._duration ? this._duration : value, suppressEvents);
  };

  p.totalTime = function (time, suppressEvents, uncapped) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    if (!arguments.length) {
      return this._totalTime;
    }

    if (this._timeline) {
      if (time < 0 && !uncapped) {
        time += this.totalDuration();
      }

      if (this._timeline.smoothChildTiming) {
        if (this._dirty) {
          this.totalDuration();
        }

        var totalDuration = this._totalDuration,
            tl = this._timeline;

        if (time > totalDuration && !uncapped) {
          time = totalDuration;
        }

        this._startTime = (this._paused ? this._pauseTime : tl._time) - (!this._reversed ? time : totalDuration - time) / this._timeScale;

        if (!tl._dirty) {
          //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
          this._uncache(false);
        } //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.


        if (tl._timeline) {
          while (tl._timeline) {
            if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
              tl.totalTime(tl._totalTime, true);
            }

            tl = tl._timeline;
          }
        }
      }

      if (this._gc) {
        this._enabled(true, false);
      }

      if (this._totalTime !== time || this._duration === 0) {
        if (_lazyTweens.length) {
          _lazyRender();
        }

        this.render(time, suppressEvents, false);

        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
          _lazyRender();
        }
      }
    }

    return this;
  };

  p.progress = p.totalProgress = function (value, suppressEvents) {
    var duration = this.duration();
    return !arguments.length ? duration ? this._time / duration : this.ratio : this.totalTime(duration * value, suppressEvents);
  };

  p.startTime = function (value) {
    if (!arguments.length) {
      return this._startTime;
    }

    if (value !== this._startTime) {
      this._startTime = value;
      if (this.timeline) if (this.timeline._sortChildren) {
        this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
      }
    }

    return this;
  };

  p.endTime = function (includeRepeats) {
    return this._startTime + (includeRepeats != false ? this.totalDuration() : this.duration()) / this._timeScale;
  };

  p.timeScale = function (value) {
    if (!arguments.length) {
      return this._timeScale;
    }

    var pauseTime, t;
    value = value || _tinyNum; //can't allow zero because it'll throw the math off

    if (this._timeline && this._timeline.smoothChildTiming) {
      pauseTime = this._pauseTime;
      t = pauseTime || pauseTime === 0 ? pauseTime : this._timeline.totalTime();
      this._startTime = t - (t - this._startTime) * this._timeScale / value;
    }

    this._timeScale = value;
    t = this.timeline;

    while (t && t.timeline) {
      //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      t._dirty = true;
      t.totalDuration();
      t = t.timeline;
    }

    return this;
  };

  p.reversed = function (value) {
    if (!arguments.length) {
      return this._reversed;
    }

    if (value != this._reversed) {
      this._reversed = value;
      this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
    }

    return this;
  };

  p.paused = function (value) {
    if (!arguments.length) {
      return this._paused;
    }

    var tl = this._timeline,
        raw,
        elapsed;
    if (value != this._paused) if (tl) {
      if (!_tickerActive && !value) {
        _ticker.wake();
      }

      raw = tl.rawTime();
      elapsed = raw - this._pauseTime;

      if (!value && tl.smoothChildTiming) {
        this._startTime += elapsed;

        this._uncache(false);
      }

      this._pauseTime = value ? raw : null;
      this._paused = value;
      this._active = this.isActive();

      if (!value && elapsed !== 0 && this._initted && this.duration()) {
        raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
        this.render(raw, raw === this._totalTime, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
      }
    }

    if (this._gc && !value) {
      this._enabled(true, false);
    }

    return this;
  };
  /*
   * ----------------------------------------------------------------
   * SimpleTimeline
   * ----------------------------------------------------------------
   */


  var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
    Animation.call(this, 0, vars);
    this.autoRemoveChildren = this.smoothChildTiming = true;
  });

  p = SimpleTimeline.prototype = new Animation();
  p.constructor = SimpleTimeline;
  p.kill()._gc = false;
  p._first = p._last = p._recent = null;
  p._sortChildren = false;

  p.add = p.insert = function (child, position, align, stagger) {
    var prevTween, st;
    child._startTime = Number(position || 0) + child._delay;
    if (child._paused) if (this !== child._timeline) {
      //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
      child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
    }

    if (child.timeline) {
      child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.

    }

    child.timeline = child._timeline = this;

    if (child._gc) {
      child._enabled(true, true);
    }

    prevTween = this._last;

    if (this._sortChildren) {
      st = child._startTime;

      while (prevTween && prevTween._startTime > st) {
        prevTween = prevTween._prev;
      }
    }

    if (prevTween) {
      child._next = prevTween._next;
      prevTween._next = child;
    } else {
      child._next = this._first;
      this._first = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      this._last = child;
    }

    child._prev = prevTween;
    this._recent = child;

    if (this._timeline) {
      this._uncache(true);
    }

    return this;
  };

  p._remove = function (tween, skipDisable) {
    if (tween.timeline === this) {
      if (!skipDisable) {
        tween._enabled(false, true);
      }

      if (tween._prev) {
        tween._prev._next = tween._next;
      } else if (this._first === tween) {
        this._first = tween._next;
      }

      if (tween._next) {
        tween._next._prev = tween._prev;
      } else if (this._last === tween) {
        this._last = tween._prev;
      }

      tween._next = tween._prev = tween.timeline = null;

      if (tween === this._recent) {
        this._recent = this._last;
      }

      if (this._timeline) {
        this._uncache(true);
      }
    }

    return this;
  };

  p.render = function (time, suppressEvents, force) {
    var tween = this._first,
        next;
    this._totalTime = this._time = this._rawPrevTime = time;

    while (tween) {
      next = tween._next; //record it here because the value could change after rendering...

      if (tween._active || time >= tween._startTime && !tween._paused && !tween._gc) {
        if (!tween._reversed) {
          tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
        } else {
          tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
        }
      }

      tween = next;
    }
  };

  p.rawTime = function () {
    if (!_tickerActive) {
      _ticker.wake();
    }

    return this._totalTime;
  };
  /*
   * ----------------------------------------------------------------
   * TweenLite
   * ----------------------------------------------------------------
   */


  var TweenLite = _class("TweenLite", function (target, duration, vars) {
    Animation.call(this, duration, vars);
    this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

    if (target == null) {
      throw "Cannot tween a null target.";
    }

    this.target = target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
    var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
        overwrite = this.vars.overwrite,
        i,
        targ,
        targets;
    this._overwrite = overwrite = overwrite == null ? _overwriteLookup[TweenLite.defaultOverwrite] : typeof overwrite === "number" ? overwrite >> 0 : _overwriteLookup[overwrite];

    if ((isSelector || target instanceof Array || target.push && _isArray(target)) && typeof target[0] !== "number") {
      this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()

      this._propLookup = [];
      this._siblings = [];

      for (i = 0; i < targets.length; i++) {
        targ = targets[i];

        if (!targ) {
          targets.splice(i--, 1);
          continue;
        } else if (typeof targ === "string") {
          targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings

          if (typeof targ === "string") {
            targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
          }

          continue;
        } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType)) {
          //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
          targets.splice(i--, 1);
          this._targets = targets = targets.concat(_slice(targ));
          continue;
        }

        this._siblings[i] = _register(targ, this, false);
        if (overwrite === 1) if (this._siblings[i].length > 1) {
          _applyOverwrite(targ, this, null, 1, this._siblings[i]);
        }
      }
    } else {
      this._propLookup = {};
      this._siblings = _register(target, this, false);
      if (overwrite === 1) if (this._siblings.length > 1) {
        _applyOverwrite(target, this, null, 1, this._siblings);
      }
    }

    if (this.vars.immediateRender || duration === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
      this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      this.render(Math.min(0, -this._delay)); //in case delay is negative
    }
  }, true),
      _isSelector = function _isSelector(v) {
    return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
  },
      _autoCSS = function _autoCSS(vars, target) {
    var css = {},
        p;

    for (p in vars) {
      if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
        //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
        css[p] = vars[p];
        delete vars[p];
      }
    }

    vars.css = css;
  };

  p = TweenLite.prototype = new Animation();
  p.constructor = TweenLite;
  p.kill()._gc = false; //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

  p.ratio = 0;
  p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
  p._notifyPluginsOfEnabled = p._lazy = false;
  TweenLite.version = "2.0.2";
  TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
  TweenLite.defaultOverwrite = "auto";
  TweenLite.ticker = _ticker;
  TweenLite.autoSleep = 120;

  TweenLite.lagSmoothing = function (threshold, adjustedLag) {
    _ticker.lagSmoothing(threshold, adjustedLag);
  };

  TweenLite.selector = window.$ || window.jQuery || function (e) {
    var selector = window.$ || window.jQuery;

    if (selector) {
      TweenLite.selector = selector;
      return selector(e);
    }

    if (!_doc) {
      //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
      _doc = window.document;
    }

    return !_doc ? e : _doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
  };

  var _lazyTweens = [],
      _lazyLookup = {},
      _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
      _relExp = /[\+-]=-?[\.\d]/,
      //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
  _setRatio = function _setRatio(v) {
    var pt = this._firstPT,
        min = 0.000001,
        val;

    while (pt) {
      val = !pt.blob ? pt.c * v + pt.s : v === 1 && this.end != null ? this.end : v ? this.join("") : this.start;

      if (pt.m) {
        val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
      } else if (val < min) if (val > -min && !pt.blob) {
        //prevents issues with converting very small numbers to strings in the browser
        val = 0;
      }

      if (!pt.f) {
        pt.t[pt.p] = val;
      } else if (pt.fp) {
        pt.t[pt.p](pt.fp, val);
      } else {
        pt.t[pt.p](val);
      }

      pt = pt._next;
    }
  },
      //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
  _blobDif = function _blobDif(start, end, filter, pt) {
    var a = [],
        charIndex = 0,
        s = "",
        color = 0,
        startNums,
        endNums,
        num,
        i,
        l,
        nonNumbers,
        currentNum;
    a.start = start;
    a.end = end;
    start = a[0] = start + ""; //ensure values are strings

    end = a[1] = end + "";

    if (filter) {
      filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

      start = a[0];
      end = a[1];
    }

    a.length = 0;
    startNums = start.match(_numbersExp) || [];
    endNums = end.match(_numbersExp) || [];

    if (pt) {
      pt._next = null;
      pt.blob = 1;
      a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
    }

    l = endNums.length;

    for (i = 0; i < l; i++) {
      currentNum = endNums[i];
      nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
      s += nonNumbers || !i ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.

      charIndex += nonNumbers.length;

      if (color) {
        //sense rgba() values and round them.
        color = (color + 1) % 5;
      } else if (nonNumbers.substr(-5) === "rgba(") {
        color = 1;
      }

      if (currentNum === startNums[i] || startNums.length <= i) {
        s += currentNum;
      } else {
        if (s) {
          a.push(s);
          s = "";
        }

        num = parseFloat(startNums[i]);
        a.push(num);
        a._firstPT = {
          _next: a._firstPT,
          t: a,
          p: a.length - 1,
          s: num,
          c: (currentNum.charAt(1) === "=" ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0,
          f: 0,
          m: color && color < 4 ? Math.round : 0
        }; //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
      }

      charIndex += currentNum.length;
    }

    s += end.substr(charIndex);

    if (s) {
      a.push(s);
    }

    a.setRatio = _setRatio;

    if (_relExp.test(end)) {
      //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
      a.end = null;
    }

    return a;
  },
      //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
  _addPropTween = function _addPropTween(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
    if (typeof end === "function") {
      end = end(index || 0, target);
    }

    var type = _typeof(target[prop]),
        getterName = type !== "function" ? "" : prop.indexOf("set") || typeof target["get" + prop.substr(3)] !== "function" ? prop : "get" + prop.substr(3),
        s = start !== "get" ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
        isRelative = typeof end === "string" && end.charAt(1) === "=",
        pt = {
      t: target,
      p: prop,
      s: s,
      f: type === "function",
      pg: 0,
      n: overwriteProp || prop,
      m: !mod ? 0 : typeof mod === "function" ? mod : Math.round,
      pr: 0,
      c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0
    },
        blob;

    if (typeof s !== "number" || typeof end !== "number" && !isRelative) {
      if (funcParam || isNaN(s) || !isRelative && isNaN(end) || typeof s === "boolean" || typeof end === "boolean") {
        //a blob (string that has multiple numbers in it)
        pt.fp = funcParam;
        blob = _blobDif(s, isRelative ? parseFloat(pt.s) + pt.c + (pt.s + "").replace(/[0-9\-\.]/g, "") : end, stringFilter || TweenLite.defaultStringFilter, pt);
        pt = {
          t: blob,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: overwriteProp || prop,
          pr: 0,
          m: 0
        }; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
      } else {
        pt.s = parseFloat(s);

        if (!isRelative) {
          pt.c = parseFloat(end) - pt.s || 0;
        }
      }
    }

    if (pt.c) {
      //only add it to the linked list if there's a change.
      if (pt._next = this._firstPT) {
        pt._next._prev = pt;
      }

      this._firstPT = pt;
      return pt;
    }
  },
      _internals = TweenLite._internals = {
    isArray: _isArray,
    isSelector: _isSelector,
    lazyTweens: _lazyTweens,
    blobDif: _blobDif
  },
      //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
  _plugins = TweenLite._plugins = {},
      _tweenLookup = _internals.tweenLookup = {},
      _tweenLookupNum = 0,
      _reservedProps = _internals.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1
  },
      _overwriteLookup = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    "true": 1,
    "false": 0
  },
      _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
      _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
      _nextGCFrame = 30,
      _lazyRender = _internals.lazyRender = function () {
    var i = _lazyTweens.length,
        tween;
    _lazyLookup = {};

    while (--i > -1) {
      tween = _lazyTweens[i];

      if (tween && tween._lazy !== false) {
        tween.render(tween._lazy[0], tween._lazy[1], true);
        tween._lazy = false;
      }
    }

    _lazyTweens.length = 0;
  };

  _rootTimeline._startTime = _ticker.time;
  _rootFramesTimeline._startTime = _ticker.frame;
  _rootTimeline._active = _rootFramesTimeline._active = true;
  setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

  Animation._updateRoot = TweenLite.render = function () {
    var i, a, p;

    if (_lazyTweens.length) {
      //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
      _lazyRender();
    }

    _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);

    _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);

    if (_lazyTweens.length) {
      _lazyRender();
    }

    if (_ticker.frame >= _nextGCFrame) {
      //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
      _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);

      for (p in _tweenLookup) {
        a = _tweenLookup[p].tweens;
        i = a.length;

        while (--i > -1) {
          if (a[i]._gc) {
            a.splice(i, 1);
          }
        }

        if (a.length === 0) {
          delete _tweenLookup[p];
        }
      } //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly


      p = _rootTimeline._first;
      if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
        while (p && p._paused) {
          p = p._next;
        }

        if (!p) {
          _ticker.sleep();
        }
      }
    }
  };

  _ticker.addEventListener("tick", Animation._updateRoot);

  var _register = function _register(target, tween, scrub) {
    var id = target._gsTweenID,
        a,
        i;

    if (!_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)]) {
      _tweenLookup[id] = {
        target: target,
        tweens: []
      };
    }

    if (tween) {
      a = _tweenLookup[id].tweens;
      a[i = a.length] = tween;

      if (scrub) {
        while (--i > -1) {
          if (a[i] === tween) {
            a.splice(i, 1);
          }
        }
      }
    }

    return _tweenLookup[id].tweens;
  },
      _onOverwrite = function _onOverwrite(overwrittenTween, overwritingTween, target, killedProps) {
    var func = overwrittenTween.vars.onOverwrite,
        r1,
        r2;

    if (func) {
      r1 = func(overwrittenTween, overwritingTween, target, killedProps);
    }

    func = TweenLite.onOverwrite;

    if (func) {
      r2 = func(overwrittenTween, overwritingTween, target, killedProps);
    }

    return r1 !== false && r2 !== false;
  },
      _applyOverwrite = function _applyOverwrite(target, tween, props, mode, siblings) {
    var i, changed, curTween, l;

    if (mode === 1 || mode >= 4) {
      l = siblings.length;

      for (i = 0; i < l; i++) {
        if ((curTween = siblings[i]) !== tween) {
          if (!curTween._gc) {
            if (curTween._kill(null, target, tween)) {
              changed = true;
            }
          }
        } else if (mode === 5) {
          break;
        }
      }

      return changed;
    } //NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)


    var startTime = tween._startTime + _tinyNum,
        overlaps = [],
        oCount = 0,
        zeroDur = tween._duration === 0,
        globalStart;
    i = siblings.length;

    while (--i > -1) {
      if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {//ignore
      } else if (curTween._timeline !== tween._timeline) {
        globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);

        if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
          overlaps[oCount++] = curTween;
        }
      } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
        overlaps[oCount++] = curTween;
      }
    }

    i = oCount;

    while (--i > -1) {
      curTween = overlaps[i];
      l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278

      if (mode === 2) if (curTween._kill(props, target, tween)) {
        changed = true;
      }

      if (mode !== 2 || !curTween._firstPT && curTween._initted && l) {
        if (mode !== 2 && !_onOverwrite(curTween, tween)) {
          continue;
        }

        if (curTween._enabled(false, false)) {
          //if all property tweens have been overwritten, kill the tween.
          changed = true;
        }
      }
    }

    return changed;
  },
      _checkOverlap = function _checkOverlap(tween, reference, zeroDur) {
    var tl = tween._timeline,
        ts = tl._timeScale,
        t = tween._startTime;

    while (tl._timeline) {
      t += tl._startTime;
      ts *= tl._timeScale;

      if (tl._paused) {
        return -100;
      }

      tl = tl._timeline;
    }

    t /= ts;
    return t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
  }; //---- TweenLite instance methods -----------------------------------------------------------------------------


  p._init = function () {
    var v = this.vars,
        op = this._overwrittenProps,
        dur = this._duration,
        immediate = !!v.immediateRender,
        ease = v.ease,
        i,
        initPlugins,
        pt,
        p,
        startVars,
        l;

    if (v.startAt) {
      if (this._startAt) {
        this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.


        this._startAt.kill();
      }

      startVars = {};

      for (p in v.startAt) {
        //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
        startVars[p] = v.startAt[p];
      }

      startVars.data = "isStart";
      startVars.overwrite = false;
      startVars.immediateRender = true;
      startVars.lazy = immediate && v.lazy !== false;
      startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).

      startVars.onUpdate = v.onUpdate;
      startVars.onUpdateParams = v.onUpdateParams;
      startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
      this._startAt = TweenLite.to(this.target || {}, 0, startVars);

      if (immediate) {
        if (this._time > 0) {
          this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
        } else if (dur !== 0) {
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (v.runBackwards && dur !== 0) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (this._startAt) {
        this._startAt.render(-1, true);

        this._startAt.kill();

        this._startAt = null;
      } else {
        if (this._time !== 0) {
          //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
          immediate = false;
        }

        pt = {};

        for (p in v) {
          //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
          if (!_reservedProps[p] || p === "autoCSS") {
            pt[p] = v[p];
          }
        }

        pt.overwrite = 0;
        pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.

        pt.lazy = immediate && v.lazy !== false;
        pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)

        this._startAt = TweenLite.to(this.target, 0, pt);

        if (!immediate) {
          this._startAt._init(); //ensures that the initial values are recorded


          this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.


          if (this.vars.immediateRender) {
            this._startAt = null;
          }
        } else if (this._time === 0) {
          return;
        }
      }
    }

    this._ease = ease = !ease ? TweenLite.defaultEase : ease instanceof Ease ? ease : typeof ease === "function" ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;

    if (v.easeParams instanceof Array && ease.config) {
      this._ease = ease.config.apply(ease, v.easeParams);
    }

    this._easeType = this._ease._type;
    this._easePower = this._ease._power;
    this._firstPT = null;

    if (this._targets) {
      l = this._targets.length;

      for (i = 0; i < l; i++) {
        if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
          initPlugins = true;
        }
      }
    } else {
      initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
    }

    if (initPlugins) {
      TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite

    }

    if (op) if (!this._firstPT) if (typeof this.target !== "function") {
      //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
      this._enabled(false, false);
    }

    if (v.runBackwards) {
      pt = this._firstPT;

      while (pt) {
        pt.s += pt.c;
        pt.c = -pt.c;
        pt = pt._next;
      }
    }

    this._onUpdate = v.onUpdate;
    this._initted = true;
  };

  p._initProps = function (target, propLookup, siblings, overwrittenProps, index) {
    var p, i, initPlugins, plugin, pt, v;

    if (target == null) {
      return false;
    }

    if (_lazyLookup[target._gsTweenID]) {
      _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

    }

    if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) {
      //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
      _autoCSS(this.vars, target);
    }

    for (p in this.vars) {
      v = this.vars[p];

      if (_reservedProps[p]) {
        if (v) if (v instanceof Array || v.push && _isArray(v)) if (v.join("").indexOf("{self}") !== -1) {
          this.vars[p] = v = this._swapSelfInParams(v, this);
        }
      } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {
        //t - target 		[object]
        //p - property 		[string]
        //s - start			[number]
        //c - change		[number]
        //f - isFunction	[boolean]
        //n - name			[string]
        //pg - isPlugin 	[boolean]
        //pr - priority		[number]
        //m - mod           [function | 0]
        this._firstPT = pt = {
          _next: this._firstPT,
          t: plugin,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: p,
          pg: 1,
          pr: plugin._priority,
          m: 0
        };
        i = plugin._overwriteProps.length;

        while (--i > -1) {
          propLookup[plugin._overwriteProps[i]] = this._firstPT;
        }

        if (plugin._priority || plugin._onInitAllProps) {
          initPlugins = true;
        }

        if (plugin._onDisable || plugin._onEnable) {
          this._notifyPluginsOfEnabled = true;
        }

        if (pt._next) {
          pt._next._prev = pt;
        }
      } else {
        propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
      }
    }

    if (overwrittenProps) if (this._kill(overwrittenProps, target)) {
      //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
      return this._initProps(target, propLookup, siblings, overwrittenProps, index);
    }
    if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
      this._kill(propLookup, target);

      return this._initProps(target, propLookup, siblings, overwrittenProps, index);
    }
    if (this._firstPT) if (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) {
      //zero duration tweens don't lazy render by default; everything else does.
      _lazyLookup[target._gsTweenID] = true;
    }
    return initPlugins;
  };

  p.render = function (time, suppressEvents, force) {
    var prevTime = this._time,
        duration = this._duration,
        prevRawPrevTime = this._rawPrevTime,
        isComplete,
        callback,
        pt,
        rawPrevTime;

    if (time >= duration - 0.0000001 && time >= 0) {
      //to work around occasional floating point math artifacts.
      this._totalTime = this._time = duration;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;

      if (!this._reversed) {
        isComplete = true;
        callback = "onComplete";
        force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
      }

      if (duration === 0) if (this._initted || !this.vars.lazy || force) {
        //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
        if (this._startTime === this._timeline._duration) {
          //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
          time = 0;
        }

        if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
          //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
          force = true;

          if (prevRawPrevTime > _tinyNum) {
            callback = "onReverseComplete";
          }
        }
        this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
      }
    } else if (time < 0.0000001) {
      //to work around occasional floating point math artifacts, round super small values to 0.
      this._totalTime = this._time = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;

      if (prevTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
        callback = "onReverseComplete";
        isComplete = this._reversed;
      }

      if (time < 0) {
        this._active = false;
        if (duration === 0) if (this._initted || !this.vars.lazy || force) {
          //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
          if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
            force = true;
          }

          this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
        }
      }

      if (!this._initted || this._startAt && this._startAt.progress()) {
        //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
        force = true;
      }
    } else {
      this._totalTime = this._time = time;

      if (this._easeType) {
        var r = time / duration,
            type = this._easeType,
            pow = this._easePower;

        if (type === 1 || type === 3 && r >= 0.5) {
          r = 1 - r;
        }

        if (type === 3) {
          r *= 2;
        }

        if (pow === 1) {
          r *= r;
        } else if (pow === 2) {
          r *= r * r;
        } else if (pow === 3) {
          r *= r * r * r;
        } else if (pow === 4) {
          r *= r * r * r * r;
        }

        if (type === 1) {
          this.ratio = 1 - r;
        } else if (type === 2) {
          this.ratio = r;
        } else if (time / duration < 0.5) {
          this.ratio = r / 2;
        } else {
          this.ratio = 1 - r / 2;
        }
      } else {
        this.ratio = this._ease.getRatio(time / duration);
      }
    }

    if (this._time === prevTime && !force) {
      return;
    } else if (!this._initted) {
      this._init();

      if (!this._initted || this._gc) {
        //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
        return;
      } else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
        this._time = this._totalTime = prevTime;
        this._rawPrevTime = prevRawPrevTime;

        _lazyTweens.push(this);

        this._lazy = [time, suppressEvents];
        return;
      } //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.


      if (this._time && !isComplete) {
        this.ratio = this._ease.getRatio(this._time / duration);
      } else if (isComplete && this._ease._calcEnd) {
        this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
      }
    }

    if (this._lazy !== false) {
      //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
      this._lazy = false;
    }

    if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
      this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
    }

    if (prevTime === 0) {
      if (this._startAt) {
        if (time >= 0) {
          this._startAt.render(time, true, force);
        } else if (!callback) {
          callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
        }
      }

      if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
        this._callback("onStart");
      }
    }

    pt = this._firstPT;

    while (pt) {
      if (pt.f) {
        pt.t[pt.p](pt.c * this.ratio + pt.s);
      } else {
        pt.t[pt.p] = pt.c * this.ratio + pt.s;
      }

      pt = pt._next;
    }

    if (this._onUpdate) {
      if (time < 0) if (this._startAt && time !== -0.0001) {
        //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
        this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

      }
      if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
        this._callback("onUpdate");
      }
    }

    if (callback) if (!this._gc || force) {
      //check _gc because there's a chance that kill() could be called in an onUpdate
      if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) {
        //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
        this._startAt.render(time, true, force);
      }

      if (isComplete) {
        if (this._timeline.autoRemoveChildren) {
          this._enabled(false, false);
        }

        this._active = false;
      }

      if (!suppressEvents && this.vars[callback]) {
        this._callback(callback);
      }

      if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
        //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
        this._rawPrevTime = 0;
      }
    }
  };

  p._kill = function (vars, target, overwritingTween) {
    if (vars === "all") {
      vars = null;
    }

    if (vars == null) if (target == null || target === this.target) {
      this._lazy = false;
      return this._enabled(false, false);
    }
    target = typeof target !== "string" ? target || this._targets || this.target : TweenLite.selector(target) || target;
    var simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline,
        firstPT = this._firstPT,
        i,
        overwrittenProps,
        p,
        pt,
        propLookup,
        changed,
        killProps,
        record,
        killed;

    if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
      i = target.length;

      while (--i > -1) {
        if (this._kill(vars, target[i], overwritingTween)) {
          changed = true;
        }
      }
    } else {
      if (this._targets) {
        i = this._targets.length;

        while (--i > -1) {
          if (target === this._targets[i]) {
            propLookup = this._propLookup[i] || {};
            this._overwrittenProps = this._overwrittenProps || [];
            overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
            break;
          }
        }
      } else if (target !== this.target) {
        return false;
      } else {
        propLookup = this._propLookup;
        overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
      }

      if (propLookup) {
        killProps = vars || propLookup;
        record = vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (_typeof(vars) !== "object" || !vars._tempKill); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)

        if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
          for (p in killProps) {
            if (propLookup[p]) {
              if (!killed) {
                killed = [];
              }

              killed.push(p);
            }
          }

          if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
            //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
            return false;
          }
        }

        for (p in killProps) {
          if (pt = propLookup[p]) {
            if (simultaneousOverwrite) {
              //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
              if (pt.f) {
                pt.t[pt.p](pt.s);
              } else {
                pt.t[pt.p] = pt.s;
              }

              changed = true;
            }

            if (pt.pg && pt.t._kill(killProps)) {
              changed = true; //some plugins need to be notified so they can perform cleanup tasks first
            }

            if (!pt.pg || pt.t._overwriteProps.length === 0) {
              if (pt._prev) {
                pt._prev._next = pt._next;
              } else if (pt === this._firstPT) {
                this._firstPT = pt._next;
              }

              if (pt._next) {
                pt._next._prev = pt._prev;
              }

              pt._next = pt._prev = null;
            }

            delete propLookup[p];
          }

          if (record) {
            overwrittenProps[p] = 1;
          }
        }

        if (!this._firstPT && this._initted && firstPT) {
          //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
          this._enabled(false, false);
        }
      }
    }

    return changed;
  };

  p.invalidate = function () {
    if (this._notifyPluginsOfEnabled) {
      TweenLite._onPluginEvent("_onDisable", this);
    }

    this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
    this._notifyPluginsOfEnabled = this._active = this._lazy = false;
    this._propLookup = this._targets ? {} : [];
    Animation.prototype.invalidate.call(this);

    if (this.vars.immediateRender) {
      this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      this.render(Math.min(0, -this._delay)); //in case delay is negative.
    }

    return this;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    if (enabled && this._gc) {
      var targets = this._targets,
          i;

      if (targets) {
        i = targets.length;

        while (--i > -1) {
          this._siblings[i] = _register(targets[i], this, true);
        }
      } else {
        this._siblings = _register(this.target, this, true);
      }
    }

    Animation.prototype._enabled.call(this, enabled, ignoreTimeline);

    if (this._notifyPluginsOfEnabled) if (this._firstPT) {
      return TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
    }
    return false;
  }; //----TweenLite static methods -----------------------------------------------------


  TweenLite.to = function (target, duration, vars) {
    return new TweenLite(target, duration, vars);
  };

  TweenLite.from = function (target, duration, vars) {
    vars.runBackwards = true;
    vars.immediateRender = vars.immediateRender != false;
    return new TweenLite(target, duration, vars);
  };

  TweenLite.fromTo = function (target, duration, fromVars, toVars) {
    toVars.startAt = fromVars;
    toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
    return new TweenLite(target, duration, toVars);
  };

  TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
    return new TweenLite(callback, 0, {
      delay: delay,
      onComplete: callback,
      onCompleteParams: params,
      callbackScope: scope,
      onReverseComplete: callback,
      onReverseCompleteParams: params,
      immediateRender: false,
      lazy: false,
      useFrames: useFrames,
      overwrite: 0
    });
  };

  TweenLite.set = function (target, vars) {
    return new TweenLite(target, 0, vars);
  };

  TweenLite.getTweensOf = function (target, onlyActive) {
    if (target == null) {
      return [];
    }

    target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
    var i, a, j, t;

    if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
      i = target.length;
      a = [];

      while (--i > -1) {
        a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
      }

      i = a.length; //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)

      while (--i > -1) {
        t = a[i];
        j = i;

        while (--j > -1) {
          if (t === a[j]) {
            a.splice(i, 1);
          }
        }
      }
    } else if (target._gsTweenID) {
      a = _register(target).concat();
      i = a.length;

      while (--i > -1) {
        if (a[i]._gc || onlyActive && !a[i].isActive()) {
          a.splice(i, 1);
        }
      }
    }

    return a || [];
  };

  TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
    if (_typeof(onlyActive) === "object") {
      vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)

      onlyActive = false;
    }

    var a = TweenLite.getTweensOf(target, onlyActive),
        i = a.length;

    while (--i > -1) {
      a[i]._kill(vars, target);
    }
  };
  /*
   * ----------------------------------------------------------------
   * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
   * ----------------------------------------------------------------
   */


  var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
    this._overwriteProps = (props || "").split(",");
    this._propName = this._overwriteProps[0];
    this._priority = priority || 0;
    this._super = TweenPlugin.prototype;
  }, true);

  p = TweenPlugin.prototype;
  TweenPlugin.version = "1.19.0";
  TweenPlugin.API = 2;
  p._firstPT = null;
  p._addTween = _addPropTween;
  p.setRatio = _setRatio;

  p._kill = function (lookup) {
    var a = this._overwriteProps,
        pt = this._firstPT,
        i;

    if (lookup[this._propName] != null) {
      this._overwriteProps = [];
    } else {
      i = a.length;

      while (--i > -1) {
        if (lookup[a[i]] != null) {
          a.splice(i, 1);
        }
      }
    }

    while (pt) {
      if (lookup[pt.n] != null) {
        if (pt._next) {
          pt._next._prev = pt._prev;
        }

        if (pt._prev) {
          pt._prev._next = pt._next;
          pt._prev = null;
        } else if (this._firstPT === pt) {
          this._firstPT = pt._next;
        }
      }

      pt = pt._next;
    }

    return false;
  };

  p._mod = p._roundProps = function (lookup) {
    var pt = this._firstPT,
        val;

    while (pt) {
      val = lookup[this._propName] || pt.n != null && lookup[pt.n.split(this._propName + "_").join("")];

      if (val && typeof val === "function") {
        //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
        if (pt.f === 2) {
          pt.t._applyPT.m = val;
        } else {
          pt.m = val;
        }
      }

      pt = pt._next;
    }
  };

  TweenLite._onPluginEvent = function (type, tween) {
    var pt = tween._firstPT,
        changed,
        pt2,
        first,
        last,
        next;

    if (type === "_onInitAllProps") {
      //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
      while (pt) {
        next = pt._next;
        pt2 = first;

        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }

        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }

        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }

        pt = next;
      }

      pt = tween._firstPT = first;
    }

    while (pt) {
      if (pt.pg) if (typeof pt.t[type] === "function") if (pt.t[type]()) {
        changed = true;
      }
      pt = pt._next;
    }

    return changed;
  };

  TweenPlugin.activate = function (plugins) {
    var i = plugins.length;

    while (--i > -1) {
      if (plugins[i].API === TweenPlugin.API) {
        _plugins[new plugins[i]()._propName] = plugins[i];
      }
    }

    return true;
  }; //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.


  _gsDefine.plugin = function (config) {
    if (!config || !config.propName || !config.init || !config.API) {
      throw "illegal plugin definition.";
    }

    var propName = config.propName,
        priority = config.priority || 0,
        overwriteProps = config.overwriteProps,
        map = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    },
        Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
      TweenPlugin.call(this, propName, priority);
      this._overwriteProps = overwriteProps || [];
    }, config.global === true),
        p = Plugin.prototype = new TweenPlugin(propName),
        prop;

    p.constructor = Plugin;
    Plugin.API = config.API;

    for (prop in map) {
      if (typeof config[prop] === "function") {
        p[map[prop]] = config[prop];
      }
    }

    Plugin.version = config.version;
    TweenPlugin.activate([Plugin]);
    return Plugin;
  }; //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.


  a = window._gsQueue;

  if (a) {
    for (i = 0; i < a.length; i++) {
      a[i]();
    }

    for (p in _defLookup) {
      if (!_defLookup[p].func) {
        window.console.log("GSAP encountered missing dependency: " + p);
      }
    }
  }

  _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

  return TweenLite;
}(_gsScope, "TweenLite");
var globals = _gsScope.GreenSockGlobals;
var nonGlobals = globals.com.greensock;

var SimpleTimeline = nonGlobals.core.SimpleTimeline;
var Animation = nonGlobals.core.Animation;
var Ease = globals.Ease;
var Linear = globals.Linear;
var Power0 = Linear;
var Power1 = globals.Power1;
var Power2 = globals.Power2;
var Power3 = globals.Power3;
var Power4 = globals.Power4;
var TweenPlugin = globals.TweenPlugin;
var EventDispatcher = nonGlobals.events.EventDispatcher;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/gsap/TweenMaxBase.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/TweenMaxBase.js ***!
  \*******************************************/
/*! exports provided: TweenMax, TweenMaxBase, default, TweenLite, Ease, Power0, Power1, Power2, Power3, Power4, Linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMaxBase", function() { return TweenMaxBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
  var _slice = function _slice(a) {
    //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
    var b = [],
        l = a.length,
        i;

    for (i = 0; i !== l; b.push(a[i++])) {
      ;
    }

    return b;
  },
      _applyCycle = function _applyCycle(vars, targets, i) {
    var alt = vars.cycle,
        p,
        val;

    for (p in alt) {
      val = alt[p];
      vars[p] = typeof val === "function" ? val(i, targets[i]) : val[i % val.length];
    }

    delete vars.cycle;
  },
      TweenMax = function TweenMax(target, duration, vars) {
    _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, target, duration, vars);
    this._cycle = 0;
    this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;

    if (this._repeat) {
      this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.

    }

    this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
  },
      _tinyNum = 0.0000000001,
      TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
      _isSelector = TweenLiteInternals.isSelector,
      _isArray = TweenLiteInternals.isArray,
      p = TweenMax.prototype = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to({}, 0.1, {}),
      _blankArray = [];

  TweenMax.version = "2.0.2";
  p.constructor = TweenMax;
  p.kill()._gc = false;
  TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf;
  TweenMax.getTweensOf = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf;
  TweenMax.lagSmoothing = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].lagSmoothing;
  TweenMax.ticker = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker;
  TweenMax.render = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].render;

  p.invalidate = function () {
    this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
    this._repeat = this.vars.repeat || 0;
    this._repeatDelay = this.vars.repeatDelay || 0;
    this._yoyoEase = null;

    this._uncache(true);

    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.invalidate.call(this);
  };

  p.updateTo = function (vars, resetDuration) {
    var curRatio = this.ratio,
        immediate = this.vars.immediateRender || vars.immediateRender,
        p;

    if (resetDuration && this._startTime < this._timeline._time) {
      this._startTime = this._timeline._time;

      this._uncache(false);

      if (this._gc) {
        this._enabled(true, false);
      } else {
        this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.

      }
    }

    for (p in vars) {
      this.vars[p] = vars[p];
    }

    if (this._initted || immediate) {
      if (resetDuration) {
        this._initted = false;

        if (immediate) {
          this.render(0, true, true);
        }
      } else {
        if (this._gc) {
          this._enabled(true, false);
        }

        if (this._notifyPluginsOfEnabled && this._firstPT) {
          _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks

        }

        if (this._time / this._duration > 0.998) {
          //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
          var prevTime = this._totalTime;
          this.render(0, true, false);
          this._initted = false;
          this.render(prevTime, true, false);
        } else {
          this._initted = false;

          this._init();

          if (this._time > 0 || immediate) {
            var inv = 1 / (1 - curRatio),
                pt = this._firstPT,
                endValue;

            while (pt) {
              endValue = pt.s + pt.c;
              pt.c *= inv;
              pt.s = endValue - pt.c;
              pt = pt._next;
            }
          }
        }
      }
    }

    return this;
  };

  p.render = function (time, suppressEvents, force) {
    if (!this._initted) if (this._duration === 0 && this.vars.repeat) {
      //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
      this.invalidate();
    }
    var totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
        prevTime = this._time,
        prevTotalTime = this._totalTime,
        prevCycle = this._cycle,
        duration = this._duration,
        prevRawPrevTime = this._rawPrevTime,
        isComplete,
        callback,
        pt,
        cycleDuration,
        r,
        type,
        pow,
        rawPrevTime,
        yoyoEase;

    if (time >= totalDur - 0.0000001 && time >= 0) {
      //to work around occasional floating point math artifacts.
      this._totalTime = totalDur;
      this._cycle = this._repeat;

      if (this._yoyo && (this._cycle & 1) !== 0) {
        this._time = 0;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
      } else {
        this._time = duration;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
      }

      if (!this._reversed) {
        isComplete = true;
        callback = "onComplete";
        force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
      }

      if (duration === 0) if (this._initted || !this.vars.lazy || force) {
        //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
        if (this._startTime === this._timeline._duration) {
          //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
          time = 0;
        }

        if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
          //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
          force = true;

          if (prevRawPrevTime > _tinyNum) {
            callback = "onReverseComplete";
          }
        }
        this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
      }
    } else if (time < 0.0000001) {
      //to work around occasional floating point math artifacts, round super small values to 0.
      this._totalTime = this._time = this._cycle = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;

      if (prevTotalTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
        callback = "onReverseComplete";
        isComplete = this._reversed;
      }

      if (time < 0) {
        this._active = false;
        if (duration === 0) if (this._initted || !this.vars.lazy || force) {
          //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
          if (prevRawPrevTime >= 0) {
            force = true;
          }

          this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
        }
      }

      if (!this._initted) {
        //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        force = true;
      }
    } else {
      this._totalTime = this._time = time;

      if (this._repeat !== 0) {
        cycleDuration = duration + this._repeatDelay;
        this._cycle = this._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
          this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
        }
        this._time = this._totalTime - this._cycle * cycleDuration;
        if (this._yoyo) if ((this._cycle & 1) !== 0) {
          this._time = duration - this._time;
          yoyoEase = this._yoyoEase || this.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.

          if (yoyoEase) {
            if (!this._yoyoEase) {
              if (yoyoEase === true && !this._initted) {
                //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
                yoyoEase = this.vars.ease;
                this._yoyoEase = yoyoEase = !yoyoEase ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase : yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"] ? yoyoEase : typeof yoyoEase === "function" ? new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](yoyoEase, this.vars.easeParams) : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase] || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase;
              } else {
                this._yoyoEase = yoyoEase = yoyoEase === true ? this._ease : yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"] ? yoyoEase : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase];
              }
            }

            this.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - this._time) / duration) : 0;
          }
        }

        if (this._time > duration) {
          this._time = duration;
        } else if (this._time < 0) {
          this._time = 0;
        }
      }

      if (this._easeType && !yoyoEase) {
        r = this._time / duration;
        type = this._easeType;
        pow = this._easePower;

        if (type === 1 || type === 3 && r >= 0.5) {
          r = 1 - r;
        }

        if (type === 3) {
          r *= 2;
        }

        if (pow === 1) {
          r *= r;
        } else if (pow === 2) {
          r *= r * r;
        } else if (pow === 3) {
          r *= r * r * r;
        } else if (pow === 4) {
          r *= r * r * r * r;
        }

        if (type === 1) {
          this.ratio = 1 - r;
        } else if (type === 2) {
          this.ratio = r;
        } else if (this._time / duration < 0.5) {
          this.ratio = r / 2;
        } else {
          this.ratio = 1 - r / 2;
        }
      } else if (!yoyoEase) {
        this.ratio = this._ease.getRatio(this._time / duration);
      }
    }

    if (prevTime === this._time && !force && prevCycle === this._cycle) {
      if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) {
        //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
        this._callback("onUpdate");
      }
      return;
    } else if (!this._initted) {
      this._init();

      if (!this._initted || this._gc) {
        //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
        return;
      } else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
        //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
        this._time = prevTime;
        this._totalTime = prevTotalTime;
        this._rawPrevTime = prevRawPrevTime;
        this._cycle = prevCycle;
        TweenLiteInternals.lazyTweens.push(this);
        this._lazy = [time, suppressEvents];
        return;
      } //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.


      if (this._time && !isComplete && !yoyoEase) {
        this.ratio = this._ease.getRatio(this._time / duration);
      } else if (isComplete && this._ease._calcEnd && !yoyoEase) {
        this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
      }
    }

    if (this._lazy !== false) {
      this._lazy = false;
    }

    if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
      this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
    }

    if (prevTotalTime === 0) {
      if (this._initted === 2 && time > 0) {
        //this.invalidate();
        this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true

      }

      if (this._startAt) {
        if (time >= 0) {
          this._startAt.render(time, true, force);
        } else if (!callback) {
          callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
        }
      }

      if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
        this._callback("onStart");
      }
    }

    pt = this._firstPT;

    while (pt) {
      if (pt.f) {
        pt.t[pt.p](pt.c * this.ratio + pt.s);
      } else {
        pt.t[pt.p] = pt.c * this.ratio + pt.s;
      }

      pt = pt._next;
    }

    if (this._onUpdate) {
      if (time < 0) if (this._startAt && this._startTime) {
        //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
        this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

      }
      if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
        this._callback("onUpdate");
      }
    }

    if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
      this._callback("onRepeat");
    }
    if (callback) if (!this._gc || force) {
      //check gc because there's a chance that kill() could be called in an onUpdate
      if (time < 0 && this._startAt && !this._onUpdate && this._startTime) {
        //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
        this._startAt.render(time, true, force);
      }

      if (isComplete) {
        if (this._timeline.autoRemoveChildren) {
          this._enabled(false, false);
        }

        this._active = false;
      }

      if (!suppressEvents && this.vars[callback]) {
        this._callback(callback);
      }

      if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
        //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
        this._rawPrevTime = 0;
      }
    }
  }; //---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------


  TweenMax.to = function (target, duration, vars) {
    return new TweenMax(target, duration, vars);
  };

  TweenMax.from = function (target, duration, vars) {
    vars.runBackwards = true;
    vars.immediateRender = vars.immediateRender != false;
    return new TweenMax(target, duration, vars);
  };

  TweenMax.fromTo = function (target, duration, fromVars, toVars) {
    toVars.startAt = fromVars;
    toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
    return new TweenMax(target, duration, toVars);
  };

  TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
    stagger = stagger || 0;

    var delay = 0,
        a = [],
        finalComplete = function finalComplete() {
      if (vars.onComplete) {
        vars.onComplete.apply(vars.onCompleteScope || this, arguments);
      }

      onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
    },
        cycle = vars.cycle,
        fromCycle = vars.startAt && vars.startAt.cycle,
        l,
        copy,
        i,
        p;

    if (!_isArray(targets)) {
      if (typeof targets === "string") {
        targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
      }

      if (_isSelector(targets)) {
        targets = _slice(targets);
      }
    }

    targets = targets || [];

    if (stagger < 0) {
      targets = _slice(targets);
      targets.reverse();
      stagger *= -1;
    }

    l = targets.length - 1;

    for (i = 0; i <= l; i++) {
      copy = {};

      for (p in vars) {
        copy[p] = vars[p];
      }

      if (cycle) {
        _applyCycle(copy, targets, i);

        if (copy.duration != null) {
          duration = copy.duration;
          delete copy.duration;
        }
      }

      if (fromCycle) {
        fromCycle = copy.startAt = {};

        for (p in vars.startAt) {
          fromCycle[p] = vars.startAt[p];
        }

        _applyCycle(copy.startAt, targets, i);
      }

      copy.delay = delay + (copy.delay || 0);

      if (i === l && onCompleteAll) {
        copy.onComplete = finalComplete;
      }

      a[i] = new TweenMax(targets[i], duration, copy);
      delay += stagger;
    }

    return a;
  };

  TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
    vars.runBackwards = true;
    vars.immediateRender = vars.immediateRender != false;
    return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  };

  TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
    toVars.startAt = fromVars;
    toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
    return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  };

  TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
    return new TweenMax(callback, 0, {
      delay: delay,
      onComplete: callback,
      onCompleteParams: params,
      callbackScope: scope,
      onReverseComplete: callback,
      onReverseCompleteParams: params,
      immediateRender: false,
      useFrames: useFrames,
      overwrite: 0
    });
  };

  TweenMax.set = function (target, vars) {
    return new TweenMax(target, 0, vars);
  };

  TweenMax.isTweening = function (target) {
    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target, true).length > 0;
  };

  var _getChildrenOf = function _getChildrenOf(timeline, includeTimelines) {
    var a = [],
        cnt = 0,
        tween = timeline._first;

    while (tween) {
      if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        a[cnt++] = tween;
      } else {
        if (includeTimelines) {
          a[cnt++] = tween;
        }

        a = a.concat(_getChildrenOf(tween, includeTimelines));
        cnt = a.length;
      }

      tween = tween._next;
    }

    return a;
  },
      getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
    return _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline, includeTimelines).concat(_getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline, includeTimelines));
  };

  TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
    if (tweens == null) {
      tweens = true;
    }

    if (delayedCalls == null) {
      delayedCalls = true;
    }

    var a = getAllTweens(timelines != false),
        l = a.length,
        allTrue = tweens && delayedCalls && timelines,
        isDC,
        tween,
        i;

    for (i = 0; i < l; i++) {
      tween = a[i];

      if (allTrue || tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"] || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
        if (complete) {
          tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
        } else {
          tween._enabled(false, false);
        }
      }
    }
  };

  TweenMax.killChildTweensOf = function (parent, complete) {
    if (parent == null) {
      return;
    }

    var tl = TweenLiteInternals.tweenLookup,
        a,
        curParent,
        p,
        i,
        l;

    if (typeof parent === "string") {
      parent = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(parent) || parent;
    }

    if (_isSelector(parent)) {
      parent = _slice(parent);
    }

    if (_isArray(parent)) {
      i = parent.length;

      while (--i > -1) {
        TweenMax.killChildTweensOf(parent[i], complete);
      }

      return;
    }

    a = [];

    for (p in tl) {
      curParent = tl[p].target.parentNode;

      while (curParent) {
        if (curParent === parent) {
          a = a.concat(tl[p].tweens);
        }

        curParent = curParent.parentNode;
      }
    }

    l = a.length;

    for (i = 0; i < l; i++) {
      if (complete) {
        a[i].totalTime(a[i].totalDuration());
      }

      a[i]._enabled(false, false);
    }
  };

  var _changePause = function _changePause(pause, tweens, delayedCalls, timelines) {
    tweens = tweens !== false;
    delayedCalls = delayedCalls !== false;
    timelines = timelines !== false;
    var a = getAllTweens(timelines),
        allTrue = tweens && delayedCalls && timelines,
        i = a.length,
        isDC,
        tween;

    while (--i > -1) {
      tween = a[i];

      if (allTrue || tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"] || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
        tween.paused(pause);
      }
    }
  };

  TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
    _changePause(true, tweens, delayedCalls, timelines);
  };

  TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
    _changePause(false, tweens, delayedCalls, timelines);
  };

  TweenMax.globalTimeScale = function (value) {
    var tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline,
        t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.time;

    if (!arguments.length) {
      return tl._timeScale;
    }

    value = value || _tinyNum; //can't allow zero because it'll throw the math off

    tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
    tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline;
    t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
    tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
    tl._timeScale = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline._timeScale = value;
    return value;
  }; //---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------


  p.progress = function (value, suppressEvents) {
    return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
  };

  p.totalProgress = function (value, suppressEvents) {
    return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
  };

  p.time = function (value, suppressEvents) {
    if (!arguments.length) {
      return this._time;
    }

    if (this._dirty) {
      this.totalDuration();
    }

    if (value > this._duration) {
      value = this._duration;
    }

    if (this._yoyo && (this._cycle & 1) !== 0) {
      value = this._duration - value + this._cycle * (this._duration + this._repeatDelay);
    } else if (this._repeat !== 0) {
      value += this._cycle * (this._duration + this._repeatDelay);
    }

    return this.totalTime(value, suppressEvents);
  };

  p.duration = function (value) {
    if (!arguments.length) {
      return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
    }

    return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.duration.call(this, value);
  };

  p.totalDuration = function (value) {
    if (!arguments.length) {
      if (this._dirty) {
        //instead of Infinity, we use 999999999999 so that we can accommodate reverses
        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
        this._dirty = false;
      }

      return this._totalDuration;
    }

    return this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1));
  };

  p.repeat = function (value) {
    if (!arguments.length) {
      return this._repeat;
    }

    this._repeat = value;
    return this._uncache(true);
  };

  p.repeatDelay = function (value) {
    if (!arguments.length) {
      return this._repeatDelay;
    }

    this._repeatDelay = value;
    return this._uncache(true);
  };

  p.yoyo = function (value) {
    if (!arguments.length) {
      return this._yoyo;
    }

    this._yoyo = value;
    return this;
  };

  return TweenMax;
}, true);

var TweenMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].TweenMax;
var TweenMaxBase = TweenMax;



/***/ }),

/***/ "./node_modules/gsap/all.js":
/*!**********************************!*\
  !*** ./node_modules/gsap/all.js ***!
  \**********************************/
/*! exports provided: TweenLite, TweenMax, TimelineLite, TimelineMax, _gsScope, AttrPlugin, BezierPlugin, ColorPropsPlugin, CSSPlugin, CSSRulePlugin, DirectionalRotationPlugin, EaselPlugin, EndArrayPlugin, ModifiersPlugin, PixiPlugin, RoundPropsPlugin, ScrollToPlugin, TextPlugin, Draggable, Ease, Power0, Power1, Power2, Power3, Power4, Linear, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony import */ var _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TweenMaxBase.js */ "./node_modules/gsap/TweenMaxBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineLite.js */ "./node_modules/gsap/TimelineLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TimelineMax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimelineMax.js */ "./node_modules/gsap/TimelineMax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _TimelineMax_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AttrPlugin.js */ "./node_modules/gsap/AttrPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BezierPlugin.js */ "./node_modules/gsap/BezierPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ColorPropsPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorPropsPlugin.js */ "./node_modules/gsap/ColorPropsPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPropsPlugin", function() { return _ColorPropsPlugin_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _CSSRulePlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSRulePlugin.js */ "./node_modules/gsap/CSSRulePlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSRulePlugin", function() { return _CSSRulePlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DirectionalRotationPlugin.js */ "./node_modules/gsap/DirectionalRotationPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _EaselPlugin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EaselPlugin.js */ "./node_modules/gsap/EaselPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EaselPlugin", function() { return _EaselPlugin_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _EndArrayPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EndArrayPlugin.js */ "./node_modules/gsap/EndArrayPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EndArrayPlugin", function() { return _EndArrayPlugin_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ModifiersPlugin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModifiersPlugin.js */ "./node_modules/gsap/ModifiersPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModifiersPlugin", function() { return _ModifiersPlugin_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _PixiPlugin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PixiPlugin.js */ "./node_modules/gsap/PixiPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixiPlugin", function() { return _PixiPlugin_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RoundPropsPlugin.js */ "./node_modules/gsap/RoundPropsPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ScrollToPlugin.js */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollToPlugin", function() { return _ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _TextPlugin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TextPlugin.js */ "./node_modules/gsap/TextPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPlugin", function() { return _TextPlugin_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Draggable_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Draggable.js */ "./node_modules/gsap/Draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _Draggable_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _EasePack_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EasePack.js */ "./node_modules/gsap/EasePack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["RoughEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["SlowMo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["Circ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_18__["ExpoScaleEase"]; });

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/



 // plugins













 // utils

 // easing

 // bonus tools

/*
import DrawSVGPlugin from "./DrawSVGPlugin.js";
import MorphSVGPlugin from "./MorphSVGPlugin.js";
import Physics2DPlugin from "./Physics2DPlugin.js";
import PhysicsPropsPlugin from "./PhysicsPropsPlugin.js";
import ScrambleTextPlugin from "./ScrambleTextPlugin.js";
import ThrowPropsPlugin from "./ThrowPropsPlugin.js";
import GSDevTools from "./GSDevTools.js";
import SplitText from "./SplitText.js";
import CustomBounce from "./CustomBounce.js";
import CustomEase from "./CustomEase.js";
import CustomWiggle from "./CustomWiggle.js";

export {
	DrawSVGPlugin,
	MorphSVGPlugin,
	Physics2DPlugin,
	PhysicsPropsPlugin,
	ScrambleTextPlugin,
	ThrowPropsPlugin,
	GSDevTools,
	SplitText,
	CustomBounce,
	CustomEase,
	CustomWiggle
}
*/



/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    noModule: true
  };

  function DOMEval(code, doc, node) {
    doc = doc || document;
    var i,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        if (node[i]) {
          script[i] = node[i];
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.3.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name]; // Prevent never-ending loop

          if (target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && Array.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      /* eslint-disable no-unused-vars */
      // See https://github.com/eslint/eslint/issues/6125
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function globalEval(code) {
      DOMEval(code);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        disabledAncestor = addCombinator(function (elem) {
      return elem.disabled === true && ("form" in elem || "label" in elem);
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector; // qSA looks outside Element context, which is not what we want
              // Thanks to Andrew Dupont for this workaround technique
              // Support: IE <=8
              // Exclude object elements
            } else if (context.nodeName.toLowerCase() !== "object") {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      } // Make sure that attribute selectors are quoted


      expr = expr.replace(rattributeQuotes, "='$1']");

      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (nodeName(elem, "iframe")) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function swap(elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      contains = jQuery.contains(elem.ownerDocument, elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (contains) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var documentElement = document.documentElement;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 only
  // See #13393 for more info


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // Triggered event must either 1) have no namespace, or 2) have namespace(s)
          // a subset or equal to those in the bound event (both can have no namespace).
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function trigger() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        // For checkbox, fire native event so checked state will be right
        trigger: function trigger() {
          if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        // For cross-browser consistency, don't fire native .click() on links
        _default: function _default(event) {
          return nodeName(event.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  };

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)

      div.style.position = "absolute";
      scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property

  function vendorPropName(name) {
    // Shortcut for names that are not vendor prefixed
    if (name in emptyStyle) {
      return name;
    } // Check for vendor prefixed names


    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a property mapped along what jQuery.cssProps suggests or to
  // a vendor prefixed property.


  function finalPropName(name) {
    var ret = jQuery.cssProps[name];

    if (!ret) {
      ret = jQuery.cssProps[name] = vendorPropName(name) || name;
    }

    return ret;
  }

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        val = curCSS(elem, dimension, styles),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox; // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style


    valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]); // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)

    if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {
      val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)]; // offsetWidth/offsetHeight provide border-box values

      valueIsBorderBox = true;
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)


        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles); // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && support.scrollboxSize() === styles.position) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    }; // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase()] = match[2];
              }
            }

            match = responseHeaders[key.toLowerCase()];
          }

          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain requests
    if (s.crossDomain) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vh-check/dist/vh-check.js":
/*!************************************************!*\
  !*** ./node_modules/vh-check/dist/vh-check.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  }; // don't know a better way to get the size of a CSS 100vh…


  function createTestElement() {
    var testElement = document.createElement('div');
    testElement.style.cssText = 'position: fixed; top: 0; height: 100vh; pointer-events: none;';
    document.documentElement.insertBefore(testElement, document.documentElement.firstChild);
    return testElement;
  }

  function removeTestElement(element) {
    document.documentElement.removeChild(element);
  } //  in some browsers this will be bigger than window.innerHeight


  function checkSizes() {
    var vhTest = createTestElement();
    var windowHeight = window.innerHeight;
    var vh = vhTest.offsetHeight;
    var offset = vh - windowHeight;
    removeTestElement(vhTest);
    return {
      vh: vh,
      windowHeight: windowHeight,
      offset: offset,
      isNeeded: offset !== 0,
      value: 0
    };
  } // export


  function noop() {}

  function computeDifference() {
    var sizes = checkSizes();
    sizes.value = sizes.offset;
    return sizes;
  }

  function redefineVhUnit() {
    var sizes = checkSizes();
    sizes.value = sizes.windowHeight * 0.01;
    return sizes;
  }

  var methods =
  /*#__PURE__*/
  Object.freeze({
    noop: noop,
    computeDifference: computeDifference,
    redefineVhUnit: redefineVhUnit
  });

  function isString(text) {
    return typeof text === "string" && text.length > 0;
  }

  function isFunction(f) {
    return typeof f === "function";
  }

  var defaultOptions = Object.freeze({
    cssVarName: 'vh-offset',
    redefineVh: false,
    method: computeDifference,
    force: false,
    bind: true,
    updateOnTouch: false,
    onUpdate: noop
  });

  function getOptions(options) {
    // old options handling: only redefine the CSS var name
    if (isString(options)) {
      return _assign({}, defaultOptions, {
        cssVarName: options
      });
    } // be sure to have a configuration object


    if (_typeof(options) !== 'object') return defaultOptions; // make sure we have the right options to start with

    var finalOptions = {
      force: options.force === true,
      bind: options.bind !== false,
      updateOnTouch: options.updateOnTouch === true,
      onUpdate: isFunction(options.onUpdate) ? options.onUpdate : noop
    }; // method change

    var redefineVh = options.redefineVh === true;
    finalOptions.method = methods[redefineVh ? 'redefineVhUnit' : 'computeDifference'];
    finalOptions.cssVarName = isString(options.cssVarName) ? options.cssVarName : redefineVh ?
    /*
    when redefining vh unit we follow this article name convention
    https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    */
    'vh' : defaultOptions.cssVarName;
    return finalOptions;
  } // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support


  var passiveSupported = false;
  var eventListeners = [];
  /* istanbul ignore next */

  try {
    var options = Object.defineProperty({}, "passive", {
      get: function get() {
        passiveSupported = true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }

  function addListener(eventName, callback) {
    eventListeners.push({
      eventName: eventName,
      callback: callback
    });
    window.addEventListener(eventName, callback,
    /* istanbul ignore next */
    passiveSupported ? {
      passive: true
    } : false);
  }

  function removeAll() {
    eventListeners.forEach(function (config) {
      window.removeEventListener(config.eventName, config.callback);
    });
    eventListeners = [];
  }

  function updateCssVar(cssVarName, result) {
    document.documentElement.style.setProperty("--" + cssVarName, result.value + "px");
  }

  function formatResult(sizes, options) {
    return _assign({}, sizes, {
      unbind: removeAll,
      recompute: options.method
    });
  }

  function vhCheck(options) {
    var config = Object.freeze(getOptions(options));
    var result = formatResult(config.method(), config); // usefulness check

    if (!result.isNeeded && !config.force) {
      return result;
    }

    updateCssVar(config.cssVarName, result);
    config.onUpdate(result); // enabled by default

    if (!config.bind) return result;

    function onWindowChange() {
      window.requestAnimationFrame(function () {
        var sizes = config.method();
        updateCssVar(config.cssVarName, sizes);
        config.onUpdate(formatResult(sizes, config));
      });
    } // be sure we don't duplicates events listeners


    result.unbind(); // listen for orientation change
    // - this can't be configured
    // - because it's convenient and not a real performance bottleneck

    addListener('orientationchange', onWindowChange); // listen to touch move for scrolling
    // – disabled by default
    // - listening to scrolling can be expansive…

    if (config.updateOnTouch) {
      addListener('touchmove', onWindowChange);
    }

    return result;
  }

  return vhCheck;
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/what-input/dist/what-input.js":
/*!****************************************************!*\
  !*** ./node_modules/what-input/dist/what-input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.1.3
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports) {
      'use strict';

      module.exports = function () {
        /*
         * bail out if there is no document or window
         * (i.e. in a node/non-DOM environment)
         *
         * Return a stubbed API instead
         */
        if (typeof document === 'undefined' || typeof window === 'undefined') {
          return {
            // always return "initial" because no interaction will ever be detected
            ask: function ask() {
              return 'initial';
            },
            // always return null
            element: function element() {
              return null;
            },
            // no-op
            ignoreKeys: function ignoreKeys() {},
            // no-op
            specificKeys: function specificKeys() {},
            // no-op
            registerOnChange: function registerOnChange() {},
            // no-op
            unRegisterOnChange: function unRegisterOnChange() {}
          };
        }
        /*
         * variables
         */
        // cache document.documentElement


        var docElem = document.documentElement; // currently focused dom element

        var currentElement = null; // last used input type

        var currentInput = 'initial'; // last used input intent

        var currentIntent = currentInput; // check for sessionStorage support
        // then check for session variables and use if available

        try {
          if (window.sessionStorage.getItem('what-input')) {
            currentInput = window.sessionStorage.getItem('what-input');
          }

          if (window.sessionStorage.getItem('what-intent')) {
            currentIntent = window.sessionStorage.getItem('what-intent');
          }
        } catch (e) {} // event buffer timer


        var eventTimer = null; // form input types

        var formInputs = ['input', 'select', 'textarea']; // empty array for holding callback functions

        var functionList = []; // list of modifier keys commonly used with the mouse and
        // can be safely ignored to prevent false keyboard detection

        var ignoreMap = [16, // shift
        17, // control
        18, // alt
        91, // Windows key / left Apple cmd
        93 // Windows menu / right Apple cmd
        ];
        var specificMap = []; // mapping of events to input types

        var inputMap = {
          keydown: 'keyboard',
          keyup: 'keyboard',
          mousedown: 'mouse',
          mousemove: 'mouse',
          MSPointerDown: 'pointer',
          MSPointerMove: 'pointer',
          pointerdown: 'pointer',
          pointermove: 'pointer',
          touchstart: 'touch' // boolean: true if touch buffer is active

        };
        var isBuffering = false; // boolean: true if the page is being scrolled

        var isScrolling = false; // store current mouse position

        var mousePos = {
          x: null,
          y: null // map of IE 10 pointer events

        };
        var pointerMap = {
          2: 'touch',
          3: 'touch',
          // treat pen like touch
          4: 'mouse' // check support for passive event listeners

        };
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('test', null, opts);
        } catch (e) {}
        /*
         * set up
         */


        var setUp = function setUp() {
          // add correct mouse wheel event mapping to `inputMap`
          inputMap[detectWheel()] = 'mouse';
          addListeners();
          doUpdate('input');
          doUpdate('intent');
        };
        /*
         * events
         */


        var addListeners = function addListeners() {
          // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
          // can only demonstrate potential, but not actual, interaction
          // and are treated separately
          var options = supportsPassive ? {
            passive: true
          } : false; // pointer events (mouse, pen, touch)

          if (window.PointerEvent) {
            window.addEventListener('pointerdown', setInput);
            window.addEventListener('pointermove', setIntent);
          } else if (window.MSPointerEvent) {
            window.addEventListener('MSPointerDown', setInput);
            window.addEventListener('MSPointerMove', setIntent);
          } else {
            // mouse events
            window.addEventListener('mousedown', setInput);
            window.addEventListener('mousemove', setIntent); // touch events

            if ('ontouchstart' in window) {
              window.addEventListener('touchstart', eventBuffer, options);
              window.addEventListener('touchend', setInput);
            }
          } // mouse wheel


          window.addEventListener(detectWheel(), setIntent, options); // keyboard events

          window.addEventListener('keydown', eventBuffer);
          window.addEventListener('keyup', eventBuffer); // focus events

          window.addEventListener('focusin', setElement);
          window.addEventListener('focusout', clearElement);
        }; // checks conditions before updating new input


        var setInput = function setInput(event) {
          // only execute if the event buffer timer isn't running
          if (!isBuffering) {
            var eventKey = event.which;
            var value = inputMap[event.type];

            if (value === 'pointer') {
              value = pointerType(event);
            }

            var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
            var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
            var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

            if (currentInput !== value && shouldUpdate) {
              currentInput = value;

              try {
                window.sessionStorage.setItem('what-input', currentInput);
              } catch (e) {}

              doUpdate('input');
            }

            if (currentIntent !== value && shouldUpdate) {
              // preserve intent for keyboard typing in form fields
              var activeElem = document.activeElement;
              var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

              if (notFormInput) {
                currentIntent = value;

                try {
                  window.sessionStorage.setItem('what-intent', currentIntent);
                } catch (e) {}

                doUpdate('intent');
              }
            }
          }
        }; // updates the doc and `inputTypes` array with new input


        var doUpdate = function doUpdate(which) {
          docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);
          fireFunctions(which);
        }; // updates input intent for `mousemove` and `pointermove`


        var setIntent = function setIntent(event) {
          // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
          detectScrolling(event); // only execute if the event buffer timer isn't running
          // or scrolling isn't happening

          if (!isBuffering && !isScrolling) {
            var value = inputMap[event.type];

            if (value === 'pointer') {
              value = pointerType(event);
            }

            if (currentIntent !== value) {
              currentIntent = value;

              try {
                window.sessionStorage.setItem('what-intent', currentIntent);
              } catch (e) {}

              doUpdate('intent');
            }
          }
        };

        var setElement = function setElement(event) {
          if (!event.target.nodeName) {
            // If nodeName is undefined, clear the element
            // This can happen if click inside an <svg> element.
            clearElement();
            return;
          }

          currentElement = event.target.nodeName.toLowerCase();
          docElem.setAttribute('data-whatelement', currentElement);

          if (event.target.classList && event.target.classList.length) {
            docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
          }
        };

        var clearElement = function clearElement() {
          currentElement = null;
          docElem.removeAttribute('data-whatelement');
          docElem.removeAttribute('data-whatclasses');
        }; // buffers events that frequently also fire mouse events


        var eventBuffer = function eventBuffer(event) {
          // set the current input
          setInput(event); // clear the timer if it happens to be running

          window.clearTimeout(eventTimer); // set the isBuffering to `true`

          isBuffering = true; // run the timer

          eventTimer = window.setTimeout(function () {
            // if the timer runs out, set isBuffering back to `false`
            isBuffering = false;
          }, 100);
        };
        /*
         * utilities
         */


        var pointerType = function pointerType(event) {
          if (typeof event.pointerType === 'number') {
            return pointerMap[event.pointerType];
          } else {
            // treat pen like touch
            return event.pointerType === 'pen' ? 'touch' : event.pointerType;
          }
        }; // detect version of mouse wheel event to use
        // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel


        var detectWheel = function detectWheel() {
          var wheelType = void 0; // Modern browsers support "wheel"

          if ('onwheel' in document.createElement('div')) {
            wheelType = 'wheel';
          } else {
            // Webkit and IE support at least "mousewheel"
            // or assume that remaining browsers are older Firefox
            wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
          }

          return wheelType;
        }; // runs callback functions


        var fireFunctions = function fireFunctions(type) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].type === type) {
              functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
            }
          }
        }; // finds matching element in an object


        var objPos = function objPos(match) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].fn === match) {
              return i;
            }
          }
        };

        var detectScrolling = function detectScrolling(event) {
          if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
            isScrolling = false;
            mousePos['x'] = event.screenX;
            mousePos['y'] = event.screenY;
          } else {
            isScrolling = true;
          }
        };
        /*
         * init
         */
        // don't start script unless browser cuts the mustard
        // (also passes if polyfills are used)


        if ('addEventListener' in window && Array.prototype.indexOf) {
          setUp();
        }
        /*
         * api
         */


        return {
          // returns string: the current input type
          // opt: 'intent'|'input'
          // 'input' (default): returns the same value as the `data-whatinput` attribute
          // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
          ask: function ask(opt) {
            return opt === 'intent' ? currentIntent : currentInput;
          },
          // returns string: the currently focused element or null
          element: function element() {
            return currentElement;
          },
          // overwrites ignored keys with provided array
          ignoreKeys: function ignoreKeys(arr) {
            ignoreMap = arr;
          },
          // overwrites specific char keys to update on
          specificKeys: function specificKeys(arr) {
            specificMap = arr;
          },
          // attach functions to input and intent "events"
          // funct: function to fire on change
          // eventType: 'input'|'intent'
          registerOnChange: function registerOnChange(fn, eventType) {
            functionList.push({
              fn: fn,
              type: eventType || 'input'
            });
          },
          unRegisterOnChange: function unRegisterOnChange(fn) {
            var position = objPos(fn);

            if (position || position === 0) {
              functionList.splice(position, 1);
            }
          }
        };
      }();
      /***/

    }])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vh-check */ "./node_modules/vh-check/dist/vh-check.js");
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vh_check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _modules_contactPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contactPanel */ "./src/assets/js/modules/contactPanel.js");
/* harmony import */ var _modules_Shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Shapes */ "./src/assets/js/modules/Shapes.js");


window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a; // import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
// $(document).foundation();


var vhTest = vh_check__WEBPACK_IMPORTED_MODULE_2___default()();

var gsap_references = [gsap_all__WEBPACK_IMPORTED_MODULE_3__["TweenLite"], gsap_all__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"], gsap_all__WEBPACK_IMPORTED_MODULE_3__["ScrollToPlugin"], gsap_all__WEBPACK_IMPORTED_MODULE_3__["Power4"]];
var $scrollToElements = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll-to]');
$scrollToElements.click(function (e) {
  e.preventDefault();
  gsap_all__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].to(window, 1.5, {
    scrollTo: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),
    offsetY: 200,
    ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Power4"].easeOut
  });
});

var contact_panel = new _modules_contactPanel__WEBPACK_IMPORTED_MODULE_4__["default"]();

var shapes = new _modules_Shapes__WEBPACK_IMPORTED_MODULE_5__["default"](); // Loading overlay

var $loading = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loading');
var $loadingLogo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loading__center');
var $navItems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__menu-item, .nav__lang-item, .hero__bottom-line, .cta2');
var $mainCta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maincta');
var $icons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bal-01-wr, .bal-02-wr, .hang-01-wr');
var loadingTl = new gsap_all__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]({
  paused: true
});
loadingTl.to($loadingLogo, 0.6, {
  opacity: 0,
  y: -500,
  delay: 0.5
});
loadingTl.to($loading, 0.3, {
  y: '-100%'
});
loadingTl.staggerFromTo($navItems, 0.6, {
  opacity: 0,
  y: 20
}, {
  opacity: 1,
  y: 0
}, 0.1);
loadingTl.from($mainCta, 1, {
  opacity: 0,
  y: '200%'
}, '-=0.6');
loadingTl.staggerFromTo($icons, 0.6, {
  opacity: 0,
  y: 50,
  scale: 0
}, {
  opacity: 1,
  y: 0,
  scale: 1
}, 0.2);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  loadingTl.play();
});

/***/ }),

/***/ "./src/assets/js/modules/Shapes.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/Shapes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shapes; });
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var basicscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! basicscroll */ "./node_modules/basicscroll/dist/basicScroll.min.js");
/* harmony import */ var basicscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(basicscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Shapes =
/*#__PURE__*/
function () {
  function Shapes() {
    _classCallCheck(this, Shapes);

    this.init();
  }

  _createClass(Shapes, [{
    key: "init",
    value: function init() {
      // console.log('Shapes init');
      var bsInstances = [];
      document.querySelectorAll('.transformed-shape').forEach(function (elem, i) {
        bsInstances.push(basicscroll__WEBPACK_IMPORTED_MODULE_1__["create"]({
          elem: elem,
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--ty': {
              from: '-100px',
              to: '100px'
            },
            '--r': {
              from: '0',
              to: '.5turn'
            },
            '--s': {
              from: '.5',
              to: '1.2'
            }
          }
        }));
      });
      document.querySelectorAll('.transformed-shape-2').forEach(function (elem, i) {
        bsInstances.push(basicscroll__WEBPACK_IMPORTED_MODULE_1__["create"]({
          elem: elem,
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--s': {
              from: '2',
              to: '.5'
            }
          }
        }));
      });
      document.querySelectorAll('.transformed-shape-3').forEach(function (elem, i) {
        bsInstances.push(basicscroll__WEBPACK_IMPORTED_MODULE_1__["create"]({
          elem: elem,
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--ty': {
              from: '-100px',
              to: '100px'
            }
          }
        }));
      });
      bsInstances.forEach(function (instance) {
        instance.start();
      });
      $(window).on('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        bsInstances.forEach(function (instance) {
          instance.calculate();
          instance.update();
        });
      }, 150));
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }]);

  return Shapes;
}();



/***/ }),

/***/ "./src/assets/js/modules/contactPanel.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/contactPanel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contactPanel; });
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var contactPanel =
/*#__PURE__*/
function () {
  function contactPanel() {
    _classCallCheck(this, contactPanel);

    this.$contactPanel = $('.contactpanel');
    this.$mainCta = $('.maincta');
    this.$contactPanelToStaggerElements1 = this.$contactPanel.find('.-to-stagger-1');
    this.$contactPanelToStaggerElements2 = this.$contactPanel.find('.-to-stagger-2');
    this.$contactPanelToggles = $('[data-contactpanel-toggle]');
    this.isVisible = false;
    this.init();
  }

  _createClass(contactPanel, [{
    key: "init",
    value: function init() {
      // console.log('contactPanel init');
      this.tl = new gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineLite"]({
        paused: true,
        onComplete: function onComplete() {}
      });
      this.tl.from(this.$contactPanel, 0.6, {
        x: '-100%',
        ease: gsap_all__WEBPACK_IMPORTED_MODULE_0__["Expo"].easeOut
      }); // this.tl.staggerFrom(
      // 	this.$contactPanelToStaggerElements1,
      // 	0.3,
      // 	{ opacity: 0, y: 10 },
      // 	0.1
      // );
      // this.tl.staggerFrom(
      // 	this.$contactPanelToStaggerElements2,
      // 	0.6,
      // 	{ opacity: 0, y: 10 },
      // 	0.1
      // );
      // this.tl.from(this.$contactPanelCloseElement, 0.6, { scale: 0, y: 10 });

      this.bindEvents();
    }
  }, {
    key: "showContactPanel",
    value: function showContactPanel() {
      this.isVisible = true;
      this.$mainCta.addClass('is-state-2');
      this.tl.timeScale(1);
      this.tl.play();
    }
  }, {
    key: "hideContactPanel",
    value: function hideContactPanel() {
      this.isVisible = false;
      this.$mainCta.removeClass('is-state-2');
      this.tl.timeScale(2);
      this.tl.reverse();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.$contactPanelToggles.click(function () {
        if (_this.isVisible) {
          _this.hideContactPanel();
        } else {
          _this.showContactPanel();
        }
      }); // close if click outside element

      $(document).on('click', function (e) {
        if (_this.isVisible && !$(e.target).closest('.contactpanel').length && !$(e.target).closest('.maincta').length) {
          _this.hideContactPanel();
        }
      });
    }
  }]);

  return contactPanel;
}();



/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/in-your-shoes/src/assets/js/app.js */"./src/assets/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map