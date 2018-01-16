// { "framework": "Vue" }

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\myth\\weex-slide-to-edit\\src\\Index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-496680d5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Index = __webpack_require__(0);

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create the app instance.
new Vue(Vue.util.extend({ el: '#weex' }, _Index2.default));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAAGyfyt9AAAAAXNSR0IArs4c6QAAAZNJREFUaAXtWW0OwiAMVeMx9EIeVG+mvzyDtkYIa9pSCC5kvibLgH6/Flh0t+ulfVJ8EaUxv/dEeS6ZzDhkrjLIqqXmwqSi1Ln08VX6YTuqryRkhn5MISTJNJ/xrcUo18xMvYS6lDyDf8VTW19DQG1RFpRF1JR5ratOkyvlHfhN+qaBYSJnIYV1E4HcrqZEwZDFaCmE6kgaLHyFhi0BhAwOE+LMmCIGa3JdezbiWMrAkUQkPJcH10KR25SKfK0VmpQe9JwXypgAgf9BQL0mrPTlfpryOlAzkpFbGVrrWqarnd5WUOuuRyFkOSYvutWggyOvDC4P0LnweMztQed+bjEUtR1fwHUrxm1DcnKi587OKnRtswxpIAAEgMD2EFA/h0ekyQewZ0f7ZPbko7zVLtdoQJATCIRbrtZCwu7w6a9adHigMFhBINxy0k7ZgqPaYYTNzZ1ySEi23mxzVGi2ish4UCGJyGxzVKioCP+39iG6EC9p3PsWNrLtXnvNehQA//j0pGc0sc1Tc0BQAAJAAAhoCLwBrUcCvV2fGCYAAAAASUVORK5CYII="

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\myth\\weex-slide-to-edit\\src\\SlideToEdit.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f40340e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//

var _SlideToEdit = __webpack_require__(4);

var _SlideToEdit2 = _interopRequireDefault(_SlideToEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWeb = function isWeb() {
  var platform = weex.config.env.platform;

  return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
};

var isIPhoneX = function isIPhoneX() {
  var deviceHeight = weex.config.env.deviceHeight;

  if (isWeb()) {
    return typeof window !== 'undefined' && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
  }
  return isIOS() && deviceHeight === 2436;
};

exports.default = {
  components: { SlideToEdit: _SlideToEdit2.default },
  computed: {
    pageHeight: function pageHeight() {
      var env = weex.config.env;

      var navHeight = isWeb() ? 0 : isIPhoneX() ? 84 : 40;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    }
  },

  created: function created() {},


  methods: {
    handler: function handler(e) {
      console.log(e);
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
// var modal = weex.requireModule('modal')
var currentX = 0;
// let isHorizontal = false

exports.default = {
  name: 'slide-to-edit',
  props: {},
  data: function data() {
    return {
      startX: 0,
      maxX: 280,
      lastX: 0,
      editIcon: __webpack_require__(2),
      hideIcon: __webpack_require__(3)
    };
  },

  methods: {
    handler: function handler(e) {
      console.log(e, e.changedTouches[0]);
    },
    restore: function restore() {
      this.lastX = 0;
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: 'translateX(0px)'
        },
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1.2)',
        delay: 0,
        duration: 200
      }, function () {});
    },
    gotoEdit: function gotoEdit() {
      this.lastX = 280;
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: 'translateX(-280px)'
        },
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1.2)',
        delay: 0,
        duration: 200
      }, function () {});
    },
    onTouchStart: function onTouchStart(e) {
      this.startX = e.changedTouches[0].pageX;
    },
    onTouchMove: function onTouchMove(e) {
      // buggie, event conflicting on list
      var moveX = e.changedTouches[0].pageX - this.startX - this.lastX;
      if (moveX > 0) {
        moveX = 0;
      }
      if (moveX < -280) {
        moveX = -280;
      }
      currentX = moveX;
      animation.transition(this.$refs.labelLayer, {
        styles: {
          transform: 'translateX(' + moveX + 'px)'
        },
        timingFunction: 'ease',
        delay: 0,
        duration: 0
      }, function () {});
    },
    onTouchEnd: function onTouchEnd(e) {
      if (Math.abs(currentX) > this.maxX / 2) {
        this.gotoEdit();
      } else {
        this.restore();
      }
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "edit-layer": {
    "position": "absolute",
    "display": "flex",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end"
  },
  "edit": {
    "backgroundColor": "#EDEDED",
    "backgroundColor:active": "#DDD7D7",
    "width": "140",
    "textAlign": "center",
    "height": "104",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "del": {
    "backgroundColor": "#F64A4E",
    "backgroundColor:active": "#DB4144",
    "width": "140",
    "textAlign": "center",
    "height": "104",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "edit-label": {
    "color": "#7D7D7D",
    "fontSize": "24"
  },
  "del-label": {
    "color": "#FFFFFF",
    "fontSize": "24"
  },
  "edit-icon": {
    "height": "52",
    "width": "52"
  },
  "del-icon": {
    "height": "52",
    "width": "52"
  },
  "label-layer": {
    "backgroundColor": "#ffffff"
  },
  "slide-to-edit": {
    "height": "104",
    "overflow": "hidden"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "index-info": {
    "paddingTop": "20",
    "backgroundColor": "#f4f4f4"
  },
  "edit-panel": {
    "height": "80",
    "alignItems": "center"
  },
  "slot": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "height": "104",
    "width": "750",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderRadius": "12"
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["slide-to-edit"]
  }, [_c('div', {
    staticClass: ["edit-layer"]
  }, [_c('div', {
    staticClass: ["edit"]
  }, [_c('image', {
    staticClass: ["edit-icon"],
    attrs: {
      "src": _vm.hideIcon
    }
  }), _c('text', {
    staticClass: ["edit-label"],
    on: {
      "click": function($event) {
        _vm.$emit('onedit', 'onedit')
      }
    }
  }, [_vm._v("hide")])]), _c('div', {
    staticClass: ["del"]
  }, [_c('image', {
    staticClass: ["del-icon"],
    attrs: {
      "src": _vm.editIcon
    }
  }), _c('text', {
    staticClass: ["del-label"],
    on: {
      "click": function($event) {
        _vm.$emit('ondelete', 'ondelete')
      }
    }
  }, [_vm._v("delete")])])]), _c('div', {
    ref: "labelLayer",
    staticClass: ["label-layer"],
    on: {
      "panstart": function($event) {
        _vm.onTouchStart($event)
      },
      "panmove": function($event) {
        _vm.onTouchMove($event)
      },
      "panend": function($event) {
        _vm.onTouchEnd($event)
      }
    }
  }, [_vm._t("container")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["index-view"],
    style: {
      height: _vm.pageHeight + 'px'
    }
  }, [_c('div', {
    staticClass: ["index-info"],
    style: {
      height: _vm.pageHeight + 'px'
    }
  }, [_c('slide-to-edit', [_c('div', {
    staticClass: ["slot"],
    attrs: {
      "slot": "container"
    },
    slot: "container"
  }, [_c('text', {
    staticClass: ["exp"]
  }, [_vm._v("Hello")]), _c('text', {
    staticClass: ["date"]
  }, [_vm._v("2007.9-2011.7")])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);