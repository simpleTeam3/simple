(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("simple", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["simple"] = factory(require("vue"));
	else
		root["simple"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_82__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(49);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insideOf = insideOf;
exports.getOneStyle = getOneStyle;
function insideOf(value, list) {
	for (var i = 0; i < list.length; i++) {
		if (value == list[i]) return true;
	}
	return false;
}

function camelCase(data) {
	if (!data) return null;
	var REGEXP_KEBAB_CASE = /[\:\-]+(.)/g;
	return data.replace(REGEXP_KEBAB_CASE, function (match, $1, offset) {
		return offset ? $1.toUpperCase() : $1;
	});
}

function getOneStyle(element, cssParam) {
	if (!element || !cssParam) return null;
	element = typeof element == 'string' ? document.querySelector(element) : element;
	cssParam = camelCase(cssParam);
	if (cssParam == 'flot') {
		cssParam = 'cssFloat';
	}
	var allStyle = document.defaultView.getComputedStyle(element, null);
	return element.style[cssParam] || allStyle ? allStyle[cssParam] : null;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(2);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(25);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(30);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(12);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        alignClass: function alignClass(column) {
            var _ref;

            return [(_ref = {}, (0, _defineProperty3.default)(_ref, "" + column.className, column.className), (0, _defineProperty3.default)(_ref, this.prefixClass + "-column-" + column.align, column.align), _ref)];
        },
        getCellWidth: function getCellWidth(column, index) {
            var width = "";
            if (column.width) {
                width = column.width + "px";
            } else {}
            return width;
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(42);

var _keys2 = _interopRequireDefault(_keys);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(53);

var _button2 = _interopRequireDefault(_button);

var _table = __webpack_require__(57);

var _table2 = _interopRequireDefault(_table);

var _switch = __webpack_require__(68);

var _switch2 = _interopRequireDefault(_switch);

var _inputNumber = __webpack_require__(72);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _icon = __webpack_require__(76);

var _icon2 = _interopRequireDefault(_icon);

var _message = __webpack_require__(80);

var _message2 = _interopRequireDefault(_message);

var _toolTip = __webpack_require__(86);

var _toolTip2 = _interopRequireDefault(_toolTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Simple = {
	Input: _input2.default,
	Button: _button2.default,
	Table: _table2.default,
	Switch: _switch2.default,
	InputNumber: _inputNumber2.default,
	Icon: _icon2.default,
	Message: _message2.default,
	ToolTip: _toolTip2.default
};

var install = function install(Vue) {
	(0, _keys2.default)(Simple).forEach(function (key) {
		Vue.component(Simple[key].name, Simple[key]);
	});

	Vue.prototype.$Message = _message2.default;
};

if (window && window.Vue) {
	install(window.Vue);
}

exports.default = (0, _assign2.default)(Simple, { install: install });

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(29) });


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(28);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(7).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(10);
var gOPS = __webpack_require__(40);
var pIE = __webpack_require__(41);
var toObject = __webpack_require__(15);
var IObject = __webpack_require__(12);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(31);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(33)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(35);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys');
var uid = __webpack_require__(38);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(15);
var $keys = __webpack_require__(10);

__webpack_require__(45)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6);
var core = __webpack_require__(2);
var fails = __webpack_require__(4);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(47);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _input2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixClass = "vut-input";
exports.default = {
	name: 'vut-input',
	props: {
		type: {
			type: String,
			default: 'text'
		},
		size: {
			type: String
		},
		placeholder: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number
		},
		rows: {
			type: Number,
			default: 2
		},
		hideBorder: {
			type: Boolean,
			default: false
		},
		value: String,
		inputStyle: String
	},
	data: function data() {
		return {
			prefixClass: prefixClass,
			prepend: true,
			append: true
		};
	},

	computed: {
		wrapClass: function wrapClass() {
			var _ref;

			return [prefixClass + '-wrap', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixClass + '-wrap-' + this.size, !!this.size && this.size !== 'default'), (0, _defineProperty3.default)(_ref, prefixClass + '-group', this.prepend || this.append), (0, _defineProperty3.default)(_ref, prefixClass + '-prepend', this.prepend), (0, _defineProperty3.default)(_ref, prefixClass + '-append', this.append), _ref)];
		},
		getClass: function getClass() {
			var _ref2;

			return [prefixClass, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixClass + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref2, prefixClass + '-hide-border', this.hideBorder), _ref2)];
		}
	},
	mounted: function mounted() {
		if (this.type !== 'textarea') {
			this.prepend = !!this.$slots.prepend;
			this.append = !!this.$slots.append;
		} else {
			this.prepend = false;
			this.append = false;
		}
	},

	methods: {
		handleEnterFn: function handleEnterFn(event) {
			this.$emit('on-enter', event);
		},
		handleFocusFn: function handleFocusFn(event) {
			this.$emit('on-focus', event);
		},
		handleBlurFn: function handleBlurFn(event) {
			this.$emit('on-blur', event);
		},
		handleInputFn: function handleInputFn(event) {
			var value = event.target.value;
			this.$emit('input', value);
			this.$emit('on-change', event);
		}
	}
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.wrapClass
    }, [_vm.type !== 'textarea' ? [_vm.prepend ? _c('div', {
      class: _vm.prefixClass + '-group-prepend'
    }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _c('input', {
      class: _vm.getClass,
      style: _vm.inputStyle,
      attrs: {
        "type": _vm.type,
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled,
        "readonly": _vm.readonly,
        "maxlength": _vm.maxlength
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "keyup": function keyup($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) {
            return null;
          }
          _vm.handleEnterFn($event);
        },
        "focus": _vm.handleFocusFn,
        "blur": _vm.handleBlurFn,
        "input": _vm.handleInputFn
      }
    }), _vm._v(" "), _vm.append ? _c('div', {
      class: _vm.prefixClass + '-group-append'
    }, [_vm._t("append")], 2) : _vm._e()] : _c('textarea', {
      class: _vm.getClass,
      style: _vm.inputStyle,
      attrs: {
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled,
        "readonly": _vm.readonly,
        "maxlength": _vm.maxlength,
        "rows": _vm.rows
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "keyup": function keyup($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) {
            return null;
          }
          _vm.handleEnterFn($event);
        },
        "focus": _vm.handleFocusFn,
        "blur": _vm.handleBlurFn,
        "input": _vm.handleInputFn
      }
    })], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(54);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tools = __webpack_require__(5);

exports.default = {
	name: 'vutButton',
	props: {
		htmlType: {
			default: 'button',
			validator: function validator(value) {
				return (0, _tools.insideOf)(value, ['button', 'submit', 'reset']);
			}
		}
	},
	data: function data() {
		return {};
	}
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('button', {
      staticClass: "test",
      attrs: {
        "type": _vm.htmlType
      }
    }, [_vm.showSlot ? _c('span', {
      ref: "slot"
    }, [_vm._t("default")], 2) : _vm._e()]);
  }, staticRenderFns: [] };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = __webpack_require__(58);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _table2.default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _tools = __webpack_require__(5);

var _tableHead = __webpack_require__(60);

var _tableHead2 = _interopRequireDefault(_tableHead);

var _tableBody = __webpack_require__(63);

var _tableBody2 = _interopRequireDefault(_tableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixClass = "vut-table";
exports.default = {
    name: 'vut-table',
    components: {
        'vut-table-head': _tableHead2.default,
        'vut-table-body': _tableBody2.default
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        columns: {
            type: Array,
            default: []
        },
        size: {
            type: String,
            default: 'default'
        },
        border: {
            type: Boolean,
            default: false
        },
        stripe: {
            type: Boolean,
            default: false
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        emptyDataText: {
            type: String,
            default: '暂无数据'
        },
        width: [Number, String],
        height: [Number, String]
    },
    data: function data() {
        return {
            prefixClass: prefixClass,
            bodyStyles: {
                height: null
            }
        };
    },

    computed: {
        wrapClass: function wrapClass() {
            return [this.prefixClass + '-wrap'];
        },
        getClass: function getClass() {
            var _ref;

            return [this.prefixClass, (_ref = {}, (0, _defineProperty3.default)(_ref, this.prefixClass + '-' + this.size, this.size !== 'default' && !!this.size), (0, _defineProperty3.default)(_ref, this.prefixClass + '-border', this.border), (0, _defineProperty3.default)(_ref, this.prefixClass + '-stripe', this.stripe), _ref)];
        },
        getStyles: function getStyles() {
            var styles = {};
            if (this.width) {
                styles.width = this.width + 'px';
            }

            if (this.height) {
                styles.height = this.height + 'px';
            }

            return styles;
        }
    },
    watch: {
        height: function height() {
            this.getBodyStyles();
        }
    },
    mounted: function mounted() {
        this.handleResize();
        this.getBodyStyles();
    },

    methods: {
        getBodyStyles: function getBodyStyles() {
            var _this = this;

            this.$nextTick(function () {
                if (_this.height) {
                    var headerHeight = (0, _tools.getOneStyle)(_this.$refs.header.$el, "height");
                    _this.bodyStyles.height = _this.height - parseInt(headerHeight) + 'px';
                }
            });
        },
        handleResize: function handleResize() {}
    }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(16);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'vut-table-head',
    mixins: [_mixins2.default],
    props: {
        columns: Array,
        prefixClass: String
    },
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    computed: {},
    methods: {}
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.prefixClass + '-header'
    }, [_c('table', {
      attrs: {
        "cellspacing": "0",
        "cellpadding": "0",
        "border": "0"
      }
    }, [_c('colgroup', _vm._l(_vm.columns, function (column, index) {
      return _c('col', {
        attrs: {
          "width": _vm.getCellWidth(column, index)
        }
      });
    })), _vm._v(" "), _c('thead', [_c('tr', _vm._l(_vm.columns, function (column, index) {
      return _c('th', {
        class: _vm.alignClass(column)
      }, [_c('div', {
        class: _vm.prefixClass + '-cell'
      }, [_c('span', {
        domProps: {
          "innerHTML": _vm._s(column.label || '#')
        }
      })])]);
    }))])])]);
  }, staticRenderFns: [] };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(16);

var _mixins2 = _interopRequireDefault(_mixins);

var _render = __webpack_require__(65);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "vut-table-body",
    mixins: [_mixins2.default],
    components: {
        Cell: _render2.default
    },
    props: {
        data: Array,
        columns: Array,
        prefixClass: String
    },
    data: function data() {
        return {};
    },

    computed: {},
    mounted: function mounted() {
        this.expandRender();
    },

    methods: {
        expandRender: function expandRender() {}
    }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "Cell",
    functional: true,
    props: {
        index: Number,
        row: Object,
        column: Object,
        render: Function
    },
    render: function render(h, context) {
        var prarms = {
            row: context.props.row,
            column: context.props.column,
            index: context.props.index
        };
        return context.props.render(h, prarms);
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.prefixClass + '-body'
    }, [_c('table', {
      attrs: {
        "cellspacing": "0",
        "cellpadding": "0",
        "border": "0"
      }
    }, [_c('colgroup', _vm._l(_vm.columns, function (column, index) {
      return _c('col', {
        attrs: {
          "width": _vm.getCellWidth(column, index)
        }
      });
    })), _vm._v(" "), _c('tbody', _vm._l(_vm.data, function (item) {
      return _c('tr', _vm._l(_vm.columns, function (column, index) {
        return _c('td', {
          class: _vm.alignClass(column)
        }, [_c('div', {
          class: _vm.prefixClass + '-cell'
        }, [column.render ? [_c('Cell', {
          attrs: {
            "render": column.render,
            "index": index,
            "row": item,
            "column": column
          }
        })] : [_c('span', [_vm._v(_vm._s(item[column.prop]))])]], 2)]);
      }));
    }))])]);
  }, staticRenderFns: [] };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.wrapClass,
      style: _vm.getStyles
    }, [_c('div', {
      class: _vm.getClass
    }, [_vm.showHeader ? _c('vut-table-head', {
      ref: "header",
      attrs: {
        "columns": _vm.columns,
        "prefixClass": _vm.prefixClass
      }
    }) : _vm._e(), _vm._v(" "), _c('vut-table-body', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.data.length > 0,
        expression: "data.length>0"
      }],
      ref: "body",
      style: _vm.bodyStyles,
      attrs: {
        "columns": _vm.columns,
        "data": _vm.data,
        "prefixClass": _vm.prefixClass
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.data || _vm.data.length < 1,
        expression: "(!data || data.length < 1)"
      }],
      class: _vm.prefixClass + '-tip'
    }, [_c('table', {
      attrs: {
        "cellspacing": "0",
        "cellpadding": "0",
        "border": "0"
      }
    }, [_c('tbody', [_c('tr', [_c('td', [_c('span', [_vm._v(_vm._s(_vm.emptyDataText))])])])])])])], 1)]);
  }, staticRenderFns: [] };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = __webpack_require__(69);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _switch2.default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixClass = "vut-switch";
exports.default = {
  name: "vut-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    onColor: String,
    offColor: String,
    onText: String,
    offText: String
  },
  data: function data() {
    return {
      currentValue: this.value,
      textActive: true
    };
  },

  computed: {
    wrapClass: function wrapClass() {
      var _ref;

      return ["" + prefixClass, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixClass + "-checked", this.currentValue), (0, _defineProperty3.default)(_ref, prefixClass + "-disabled", this.disabled), (0, _defineProperty3.default)(_ref, prefixClass + "-" + this.size, this.size), _ref)];
    },
    innerClass: function innerClass() {
      return prefixClass + "-inner";
    },
    outClass: function outClass() {
      return prefixClass + "-out";
    }
  },
  watch: {
    currentValue: function currentValue() {
      this.setBackgroundColor();
    }
  },
  mounted: function mounted() {
    this.textActive = this.size !== "small";
    this.setBackgroundColor();
  },

  methods: {
    handleDirection: function handleDirection() {},
    handleToggleFn: function handleToggleFn() {
      if (this.disabled) {
        return false;
      }
      this.currentValue = this.currentValue ? false : true;
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    },
    setBackgroundColor: function setBackgroundColor() {
      var customColor = this.currentValue ? this.onColor : this.offColor;
      this.$refs.core.style.backgroundColor = customColor;
    }
  }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('span', {
      ref: "core",
      class: _vm.wrapClass,
      on: {
        "mouseup": _vm.handleToggleFn
      }
    }, [_c('input', {
      attrs: {
        "type": "hidden"
      },
      domProps: {
        "value": _vm.currentValue
      }
    }), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.textActive,
        expression: "textActive"
      }],
      class: _vm.innerClass
    }, [_vm.currentValue ? _vm._t("on") : _vm._t("off")], 2), _vm._v(" "), _c('span', {
      class: _vm.outClass
    }, [_vm.currentValue ? [_vm._v(_vm._s(_vm.onText))] : [_vm._v(_vm._s(_vm.offText))]], 2)]);
  }, staticRenderFns: [] };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = __webpack_require__(73);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inputNumber2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixClass = "vut-input-number";
exports.default = {
    name: "vut-input-number",
    props: {
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        step: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        hideControls: {
            type: Boolean,
            default: false
        },
        debounce: {
            type: Number,
            default: 300
        },
        size: String,
        precision: Number,
        controlsPosition: String
    },
    data: function data() {
        return {
            upDisabled: false,
            downDisabled: false,
            currentValue: this.value,
            focused: false,
            debounceTimeout: null
        };
    },

    computed: {
        wrapClass: function wrapClass() {
            var _ref;

            return [prefixClass + "-wrap", (_ref = {}, (0, _defineProperty3.default)(_ref, prefixClass + "-wrap-" + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixClass + "-focused", this.focused), (0, _defineProperty3.default)(_ref, prefixClass + "-disabled", this.disabled), (0, _defineProperty3.default)(_ref, prefixClass + "-readonly", this.readonly), (0, _defineProperty3.default)(_ref, prefixClass + "-hide-controls", this.hideControls), (0, _defineProperty3.default)(_ref, prefixClass + "-edge-controls", this.controlsPosition == "edge"), _ref)];
        },
        innerClass: function innerClass() {
            return [prefixClass + "-inner-wrap"];
        },
        upClass: function upClass() {
            return [prefixClass + "-action", prefixClass + "-up", (0, _defineProperty3.default)({}, prefixClass + "-handler-disabled", this.upDisabled)];
        },
        downClass: function downClass() {
            return [prefixClass + "-action", prefixClass + "-down", (0, _defineProperty3.default)({}, prefixClass + "-handler-disabled", this.downDisabled)];
        },
        inputClass: function inputClass() {
            return [prefixClass + "-inner"];
        },

        precisionValue: {
            get: function get() {
                return !isNaN(this.precision) ? this.currentValue.toFixed(this.precision) : this.currentValue;
            }
        },
        upIcon: function upIcon() {
            if (this.controlsPosition == "edge") {
                return "add";
            }
            return "top-arrow";
        },
        downIcon: function downIcon() {
            if (this.controlsPosition == "edge") {
                return "move";
            }
            return "bottom-arrow";
        }
    },
    mounted: function mounted() {
        this.changeState();
    },

    methods: {
        handleUpFn: function handleUpFn() {
            if (this.upDisabled) return;
            var value = this.calculateStep(this.currentValue, this.step, "up");
            this.setCurrentValue(value, "input");
        },
        handleDownFn: function handleDownFn(event) {
            if (this.downDisabled) return;
            var value = this.calculateStep(this.currentValue, this.step, "down");
            this.setCurrentValue(value, "input");
        },
        handleInputFn: function handleInputFn(event) {
            var _this = this;

            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(function () {
                var value = event.target.value.trim();
                if (value.match(/^\-?\.?$|\.$/)) return;
                if (!isNaN(_this.precision)) {
                    value = _this.toPrecision(value, _this.precision);
                }
                value = Number(value);
                if (!isNaN(value)) {
                    _this.setCurrentValue(value, "input");
                } else {
                    _this.setCurrentValue(_this.currentValue, "input");
                }
                _this.currentValue = value;
            }, this.debounce);
        },
        handleChangeFn: function handleChangeFn(event) {
            var value = event.target.value.trim();
            if (value.match(/^\-?\.?$|\.$/)) return;
            if (!isNaN(this.precision)) {
                value = this.toPrecision(value, this.precision);
            }
            value = Number(value);
            if (!isNaN(value)) {
                this.setCurrentValue(value, "change");
            } else {
                this.setCurrentValue(this.currentValue, "change");
            }
            this.currentValue = value;
        },
        handleBlurFn: function handleBlurFn() {
            this.focused = false;
            this.setCurrentValue(this.currentValue, "on-blur");
        },
        handleFocusFn: function handleFocusFn() {
            this.focused = true;
            this.setCurrentValue(this.currentValue, "on-focus");
        },
        toPrecision: function toPrecision(data, currentPrecision) {
            if (currentPrecision === undefined) currentPrecision = 0;
            return parseFloat(parseFloat(Number(data).toFixed(currentPrecision)));
        },
        getDecimalLen: function getDecimalLen(val) {
            return val.toString().split(".")[1] ? val.toString().split(".")[1].length : 0;
        },
        calculateStep: function calculateStep(val, step, operation) {
            var expandPrecision = null;
            var currentPrecision = null;
            if (isNaN(this.precision)) {
                var decimalVal = this.getDecimalLen(val);
                var decimalStep = this.getDecimalLen(step);
                var maxPrecision = Math.max(decimalVal, decimalStep);
                expandPrecision = Math.pow(10, maxPrecision);
                currentPrecision = maxPrecision;
            } else {
                expandPrecision = Math.pow(10, this.precision);
                currentPrecision = this.precision;
            }
            if (operation == "up") {
                return this.toPrecision((val * expandPrecision + step * expandPrecision) / expandPrecision, currentPrecision);
            } else if (operation == "down") {
                return this.toPrecision((val * expandPrecision - step * expandPrecision) / expandPrecision, currentPrecision);
            }
        },
        setCurrentValue: function setCurrentValue(value, events) {
            var _this2 = this;

            if (this.readonly) return;
            if (value > this.max) {
                value = this.max;
            }
            if (value < this.min) {
                value = this.min;
            }
            this.$nextTick(function () {
                _this2.currentValue = value;
                if (events === "input" || events === "on-change") {
                    _this2.$emit(events, value);
                } else {
                    _this2.$emit(events);
                }
            });
        },
        changeState: function changeState() {
            if (this.min >= this.max) {
                this.upDisabled = this.downDisabled = true;
                return;
            }
            var value = Number(this.currentValue);
            if (!isNaN(value)) {
                this.upDisabled = this.calculateStep(value, this.step, "up") > this.max;
                this.downDisabled = this.calculateStep(value, this.step, "down") < this.min;
            } else {
                this.upDisabled = this.downDisabled = true;
            }
        }
    },
    watch: {
        value: {
            immediate: true,
            handler: function handler(val) {
                var _this3 = this;

                var newVal = Number(val);
                if (isNaN(newVal)) return;
                if (newVal > this.max) {
                    newVal = this.max;
                }
                if (newVal < this.min) {
                    newVal = this.min;
                }
                this.currentValue = newVal;
                this.$nextTick(function () {
                    _this3.$emit("input", newVal);
                });
            }
        },
        currentValue: function currentValue(val) {
            this.changeState();
        },
        max: function max(val) {
            this.changeState();
        },
        min: function min(val) {
            this.changeState();
        }
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.wrapClass
    }, [!_vm.hideControls ? _c('span', {
      class: _vm.upClass,
      on: {
        "click": _vm.handleUpFn
      }
    }, [_c('vut-icon', {
      attrs: {
        "type": _vm.upIcon
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.hideControls ? _c('span', {
      class: _vm.downClass,
      on: {
        "click": _vm.handleDownFn
      }
    }, [_c('vut-icon', {
      attrs: {
        "type": _vm.downIcon
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('div', {
      class: _vm.innerClass
    }, [_c('input', {
      class: _vm.inputClass,
      attrs: {
        "disabled": _vm.disabled,
        "readonly": _vm.readonly
      },
      domProps: {
        "value": _vm.precisionValue
      },
      on: {
        "input": _vm.handleInputFn,
        "change": _vm.handleChangeFn,
        "blur": _vm.handleBlurFn,
        "focus": _vm.handleFocusFn
      }
    })])]);
  }, staticRenderFns: [] };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(77);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var prefixClass = "vut-icon";
exports.default = {
    name: "vut-icon",
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        iconClass: function iconClass() {
            return prefixClass + " " + prefixClass + "-" + this.type;
        },
        getStyles: function getStyles() {
            var styles = {};

            if (this.size) {
                if (this.size) {
                    styles['font-size'] = this.size + "px";
                }
            }

            if (this.color) {
                styles.color = this.color;
            }

            return styles;
        }
    }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('i', {
      class: _vm.iconClass,
      style: _vm.getStyles
    });
  }, staticRenderFns: [] };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(81);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(82);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(83);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageConstructor = _vue2.default.extend(_main2.default);
var instance = null;
var instanceArray = [];
var messageGroup = {
    className: "vut-message-group",
    ref: "message",
    instance: null
};
function creatElementNode() {
    messageGroup.instance = new _vue2.default({
        render: function render(h) {
            return h("div", {
                attrs: {
                    class: messageGroup.className
                },
                ref: messageGroup.ref
            });
        }
    }).$mount();
    document.body.appendChild(messageGroup.instance.$el);
}
function messageFn() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    var diffColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var _option = {};
    if (typeof option == "string" || Number(option)) {
        _option.content = option;
        _option.diffColor = diffColor;
    } else if (option.constructor === Object) {
        if (!option.content) {
            option.content = '';
        }
        _option = option;
    } else {
        _option.content = '';
    }
    _option.type = type;
    if (!instance) {
        creatElementNode();
    }
    instance = new MessageConstructor({
        propsData: _option
    });
    instance.vm = instance.$mount();
    messageGroup.instance.$refs[messageGroup.ref].appendChild(instance.vm.$el);
    instance.vm.isShow = true;
    instanceArray.push(instance.vm);
    return instance.vm;
}

exports.default = {
    name: 'Message',
    info: function info(option) {
        var diffColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        return messageFn(option, "info", diffColor);
    },
    success: function success(option) {
        var diffColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        return messageFn(option, "success", diffColor);
    },
    warning: function warning(option) {
        var diffColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        return messageFn(option, "warning", diffColor);
    },
    error: function error(option) {
        var diffColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        return messageFn(option, "error", diffColor);
    },
    destroy: function destroy() {
        for (var i = 0; i < instanceArray.length; i++) {
            instanceArray[i].close(true);
        }
        instanceArray = [];
    }
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _tools = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixClass = "vut-message";
var iconType = {
    info: "infofill",
    success: "roundcheckfill",
    warning: "warning-fill",
    error: "roundclosefill"
};
var iconDiffColor = {
    info: "#909399",
    success: "#67c23a",
    warning: "#e6a23c",
    error: "#fa6a6a"
};
var iconColor = {
    info: "#2d8cf0",
    success: "#19be6b",
    warning: "#f90",
    error: "#ed3f14"
};

exports.default = {
    props: {
        content: "",
        type: {
            type: String,
            default: "info"
        },
        duration: {
            type: Number,
            default: 3000
        },
        diffColor: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: false
        },
        onClose: Function
    },
    data: function data() {
        return {
            isShow: false,
            timer: null
        };
    },

    computed: {
        wrapClass: function wrapClass() {
            return [prefixClass + "-wrap"];
        },
        conClass: function conClass() {
            var _ref;

            return [prefixClass + "-con", (_ref = {}, (0, _defineProperty3.default)(_ref, prefixClass + "-" + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixClass + "-diff-color", !!this.diffColor), (0, _defineProperty3.default)(_ref, prefixClass + "-closable", this.closable), _ref)];
        },
        iconClass: function iconClass() {
            return prefixClass + "-icon";
        },
        contentClass: function contentClass() {
            return prefixClass + "-content";
        },
        closeClass: function closeClass() {
            return prefixClass + "-close-icon";
        },
        messageIconType: function messageIconType() {
            return iconType[this.type];
        },
        messageIconColor: function messageIconColor() {
            if (this.diffColor) {
                return iconDiffColor[this.type];
            }
            return iconColor[this.type];
        },
        transitionName: function transitionName() {
            return prefixClass + "-fade";
        }
    },
    mounted: function mounted() {
        this.autoDestory();
    },

    watch: {
        isShow: function isShow(value) {
            if (!value) {
                document.addEventListener("transitionend", this.destoryElement);
            }
        }
    },
    methods: {
        handleEnter: function handleEnter(el) {
            el.style.height = (0, _tools.getOneStyle)(el, "height");
        },
        handleLeave: function handleLeave(el) {
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        },
        autoDestory: function autoDestory() {
            var _this = this;

            if (!isNaN(Number(this.duration))) {
                if (this.duration > 0) {
                    this.timer = setTimeout(function () {
                        if (_this.isShow) {
                            _this.close();
                        }
                    }, this.duration);
                }
            }
        },
        close: function close(destory) {
            this.isShow = false;
            clearTimeout(this.timer);
            if (this.onClose && !destory) {
                this.onClose();
            }
        },
        destoryElement: function destoryElement() {
            document.removeEventListener("transitionend", this.destoryElement);
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el);
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('transition', {
      attrs: {
        "name": _vm.transitionName
      },
      on: {
        "enter": _vm.handleEnter,
        "leave": _vm.handleLeave
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isShow,
        expression: "isShow"
      }],
      class: _vm.wrapClass
    }, [_c('div', {
      class: _vm.conClass
    }, [_c('vut-icon', {
      class: _vm.iconClass,
      attrs: {
        "type": _vm.messageIconType,
        "color": _vm.messageIconColor
      }
    }), _vm._v(" "), _c('span', {
      class: _vm.contentClass,
      domProps: {
        "innerHTML": _vm._s(_vm.content)
      }
    }), _vm._v(" "), _vm.closable ? _c('vut-icon', {
      class: _vm.closeClass,
      attrs: {
        "type": "close"
      },
      nativeOn: {
        "click": function click($event) {
          _vm.close($event);
        }
      }
    }) : _vm._e()], 1)])]);
  }, staticRenderFns: [] };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toolTip = __webpack_require__(87);

var _toolTip2 = _interopRequireDefault(_toolTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toolTip2.default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(1);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _tools = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixClass = "vut-tooltip";
exports.default = {
    name: "vut-tooltip",
    props: {
        content: [String, Number],
        placement: {
            type: String,
            default: 'bottom'
        }
    },
    data: function data() {
        return {
            prefixClass: prefixClass
        };
    },

    computed: {
        wrapClass: function wrapClass() {
            return [this.prefixClass + "-wrap", (0, _defineProperty3.default)({}, this.prefixClass + "-placement-" + this.placement, this.placement)];
        },
        getPopperStyle: function getPopperStyle() {
            var styles = {};
            var height = (0, _tools.getOneStyle)(this.$refs.effect, 'height');
            styles.top = height + "px";
            return styles;
        }
    },
    methods: {
        handleMouseOver: function handleMouseOver() {
            console.log("鼠标移上来了");
        },
        handleMouseOut: function handleMouseOut() {
            console.log("鼠标移出去了");
        }
    }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      class: _vm.wrapClass,
      on: {
        "mouseover": _vm.handleMouseOver,
        "mouseout": _vm.handleMouseOut
      }
    }, [_c('div', {
      ref: "effect",
      class: _vm.prefixClass + '-rel'
    }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
      class: _vm.prefixClass + '-popper',
      style: _vm.getPopperStyle
    }, [_c('div', {
      class: _vm.prefixClass + '-content'
    }, [_c('div', {
      class: _vm.prefixClass + '-arrow'
    }), _vm._v(" "), _c('div', {
      class: _vm.prefixClass + '-inner',
      domProps: {
        "textContent": _vm._s(_vm.content)
      }
    })])])]);
  }, staticRenderFns: [] };

/***/ })
/******/ ]);
});
//# sourceMappingURL=simple.js.map