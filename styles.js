(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/@angular-devkit/build-angular/node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/@angular-devkit/build-angular/node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Segoe UI\", \"Helvetica Neue\", \"Arial\", sans-serif;\n  margin: 0;\n  background-color: #2a3f50;\n}\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n}\n/* Breakpoint mixins */\n/* Media  Mixins */\n.grid {\n  display: grid;\n}\n.flex {\n  display: flex;\n}\n.white {\n  color: white;\n}\n.max-700 {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.align-center {\n  align-items: center;\n}\n.title {\n  color: #ed4e6e;\n  text-transform: capitalize;\n  font-size: 40px;\n}\n.space-between {\n  justify-content: space-between;\n}\n.wrap {\n  flex-wrap: wrap;\n}\n.space-around {\n  justify-content: space-around;\n}\n.center {\n  text-align: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.capi {\n  text-transform: capitalize;\n}\n.bold {\n  font-weight: bold;\n}\n.column {\n  flex-direction: column;\n}\n.right {\n  text-align: right !important;\n}\n.align-self {\n  align-self: center;\n}\n.square-ratio {\n  position: relative;\n  overflow: hidden;\n}\n.square-ratio:before {\n  display: block;\n  content: \"\";\n  width: 100%;\n  padding-top: 100%;\n}\n.square-ratio > * {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.square-ratio > img {\n  object-fit: cover;\n}\n.video-ratio {\n  position: relative;\n  overflow: hidden;\n}\n.video-ratio:before {\n  display: block;\n  content: \"\";\n  width: 100%;\n  padding-top: 56.25%;\n}\n.video-ratio > * {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.video-ratio > img {\n  object-fit: cover;\n}\n.poster-ratio {\n  position: relative;\n  overflow: hidden;\n}\n.poster-ratio:before {\n  display: block;\n  content: \"\";\n  width: 100%;\n  padding-top: 150%;\n}\n.poster-ratio > * {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.poster-ratio > img {\n  object-fit: cover;\n}\n.bitcoin-input {\n  color: white;\n  width: 260px;\n  margin-bottom: 6px;\n  border: none;\n  height: 40px;\n  background-color: #101a23;\n  outline: none;\n  border-radius: 3px;\n}\n.bitcoin-input::placeholder {\n  font-size: 18px;\n  color: #5a5f65;\n}\n.bitcoin-input:focus {\n  color: #ed4e6e;\n}\n.bitcoin-btn {\n  font-size: 20px;\n  padding: 5px 10px;\n  border-radius: 2px;\n  background-color: #ed4e6e;\n  color: white;\n}", "",{"version":3,"sources":["styles.scss","scss/setup/_mixin.scss","scss/basics/_helpers.scss","scss/basics/_buttons.scss"],"names":[],"mappings":"AAAA,8EAAA;AAMA;EACI,sBAAA;AAJJ;AASA;EACI,8DAAA;EACA,SAAA;EACA,yBAAA;AANJ;AAUA;EACI,oBAAA;EACA,eAAA;EACA,YAAA;AAPJ;ACfA,sBAAA;AAwCE,kBAAA;ACxCF;EACI,aAAA;AFoBJ;AEhBA;EACI,aAAA;AFmBJ;AEhBA;EACI,YAAA;AFmBJ;AEhBA;EACI,gBAAA;EACA,cAAA;AFmBJ;AEhBA;EACI,iBAAA;EACA,cAAA;AFmBJ;AEbA;EACI,mBAAA;AFgBJ;AEbA;EACI,cAAA;EACA,0BAAA;EACA,eAAA;AFgBJ;AEbA;EACI,8BAAA;AFgBJ;AEbA;EACI,eAAA;AFgBJ;AEbA;EACI,6BAAA;AFgBJ;AEbA;EACI,kBAAA;AFgBJ;AEbA;EACI,uBAAA;AFgBJ;AEbA;EACI,0BAAA;AFgBJ;AEbA;EACI,iBAAA;AFgBJ;AEbA;EACI,sBAAA;AFgBJ;AEbA;EACI,4BAAA;AFgBJ;AEbA;EACI,kBAAA;AFgBJ;AEVA;EDrCI,kBAAA;EACA,gBAAA;ADmDJ;AClDI;EACE,cAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;ADoDN;AClDI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;ADoDN;ACjDI;EACE,iBAAA;ADmDN;AE3BA;EDzCI,kBAAA;EACA,gBAAA;ADwEJ;ACvEI;EACE,cAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;ADyEN;ACvEI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;ADyEN;ACtEI;EACE,iBAAA;ADwEN;AE5CA;ED7CI,kBAAA;EACA,gBAAA;AD6FJ;AC5FI;EACE,cAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;AD8FN;AC5FI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;AD8FN;AC3FI;EACE,iBAAA;AD6FN;AGxJA;EAEI,YAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;AH0JJ;AGxJI;EACI,eAAA;EACA,cAAA;AH0JR;AGvJI;EACI,cAAA;AHyJR;AGlJA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;AHqJJ","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\n// app\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    font-family: 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif;\r\n    margin: 0;\r\n    background-color: rgb(42, 63, 80);\r\n    \r\n}\r\n\r\nbutton {\r\n    font-family: inherit;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n\r\n// setup\r\n@import './scss/setup/_variables.scss';\r\n@import './scss/setup/_functions.scss';\r\n@import './scss/setup/_mixin.scss';\r\n@import './scss/setup/_typography.scss';\r\n\r\n\r\n// basics\r\n@import './scss/basics/_helpers.scss';\r\n@import './scss/basics/_layout.scss';\r\n@import './scss/basics/_buttons.scss';\r\n@import './scss/basics/_links.scss';\r\n@import './scss/basics/_base.scss';","/* Breakpoint mixins */\r\n\r\n@mixin for-mobile-layout {\r\n    @media (max-width: $mobile-breakpoint) {\r\n      @content;\r\n    }\r\n  }\r\n  \r\n  @mixin for-narrow-layout {\r\n    @media (max-width: $narrow-breakpoint) {\r\n      @content;\r\n    }\r\n  }\r\n  \r\n  @mixin for-normal-layout {\r\n    @media (max-width: $normal-breakpoint) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n  @mixin for-1100-layout {\r\n    @media (max-width: 1100px) {\r\n      @content;\r\n    }\r\n  }\r\n  \r\n  @mixin for-wide-layout {\r\n    @media (max-width: $wide-breakpoint) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n\r\n  @mixin for-1400-layout {\r\n    @media (max-width: 1400px) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n  \r\n  /* Media  Mixins */\r\n  @mixin aspect-ratio($width, $height) {\r\n    position: relative;\r\n    overflow: hidden;\r\n    &:before {\r\n      display: block;\r\n      content: \"\";\r\n      width: 100%;\r\n      padding-top: ($height / $width) * 100%;\r\n    }\r\n    > * {\r\n      position: absolute;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: 0;\r\n    }\r\n  \r\n    > img {\r\n      object-fit: cover;\r\n    }\r\n  }\r\n  \r\n  // Mixin for removing hover efects on iphone screen\r\n  @mixin hover-supported {\r\n    @media not all and (pointer: coarse) {\r\n      &:hover {\r\n        @content;\r\n      }\r\n    }\r\n  }\r\n  \r\n  //\r\n  @mixin blockBtn($bgColor: gray, $color: white) {\r\n    display: inline-block;\r\n    border: 1px solid #000;\r\n    padding: 16px 32px;\r\n    background-color: $bgColor;\r\n    color: $color;\r\n  }\r\n  ",".grid {\r\n    display: grid;\r\n}\r\n\r\n//flex-helper\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.white {\r\n    color: white\r\n}\r\n\r\n.max-700 {\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container {\r\n    max-width: 1280px;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n\r\n.align-center {\r\n    align-items: center;\r\n}\r\n\r\n.title {\r\n    color: rgb(237, 78, 110);\r\n    text-transform: capitalize;\r\n    font-size: 40px;\r\n}\r\n\r\n.space-between {\r\n    justify-content: space-between;\r\n}\r\n\r\n.wrap {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.space-around {\r\n    justify-content: space-around;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n.justify-center {\r\n    justify-content: center;\r\n}\r\n\r\n.capi {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.column {\r\n    flex-direction: column;\r\n}\r\n\r\n.right {\r\n    text-align: right !important;\r\n}\r\n\r\n.align-self {\r\n    align-self: center;\r\n}\r\n\r\n\r\n\r\n// media-helpers\r\n.square-ratio {\r\n    @include aspect-ratio(1, 1);\r\n}\r\n\r\n.video-ratio {\r\n    @include aspect-ratio(16, 9);\r\n}\r\n\r\n.poster-ratio {\r\n    @include aspect-ratio(1, 1.5);\r\n}",".bitcoin-input {\r\n\r\n    color: white;\r\n    width: 260px;\r\n    margin-bottom: 6px;\r\n    border: none;\r\n    height: 40px;\r\n    background-color: #101a23;\r\n    outline: none;\r\n    border-radius: 3px;\r\n\r\n    &::placeholder {\r\n        font-size: 18px;\r\n        color: rgb(90, 95, 101);\r\n    }\r\n\r\n    &:focus {\r\n        color: #ed4e6e;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n.bitcoin-btn {\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    border-radius: 2px;\r\n    background-color: #ed4e6e;\r\n    color: white;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/@angular-devkit/build-angular/node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/@angular-devkit/build-angular/node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adipeled\Desktop\bitcoin\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map