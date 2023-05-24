"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _ShopItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Shop = function Shop() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      title: 'MacBook Pro'
    }, {
      id: 2,
      title: 'Dell X5500'
    }, {
      id: 3,
      title: 'Asus NT6000'
    }, {
      id: 4,
      title: 'Dell Carmen'
    }, {
      id: 5,
      title: 'Pontiac'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    shopItemList = _useState2[0],
    setShopItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 55,
      title: 'true'
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    boughtItemList = _useState4[0],
    setBoughtItem = _useState4[1];
  var handleBuy = function handleBuy(id) {
    setBoughtItem(function (prevState) {
      prevState.push({
        id: 999,
        title: 'fdsajfk'
      });
      console.log(prevState);
      return prevState;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tutaj jest Shop a poni\u017Cej shop item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, shopItemList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      onBuy: handleBuy
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You have bought:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, boughtItemList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item
    });
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e6b435b09e1f15c8e92")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41Zjk5ZTc5MzFhMmVlNzMyNjA4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDVjtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFlO0VBQ3JCLElBQUFDLFNBQUEsR0FBb0NKLCtDQUFRLENBQUMsQ0FDekM7TUFBQ0ssRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBWSxDQUFDLEVBQzVCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQzVCLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFKLFNBQUE7SUFOS0ssWUFBWSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQVFoQyxJQUFBSSxVQUFBLEdBQXdDWCwrQ0FBUSxDQUFDLENBQUM7TUFBQ0ssRUFBRSxFQUFFLEVBQUU7TUFBRUMsS0FBSyxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUM7SUFBQU0sVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcEVFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFFcEMsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUdWLEVBQUUsRUFBSTtJQUNwQlMsYUFBYSxDQUFDLFVBQUFFLFNBQVMsRUFBSTtNQUN2QkEsU0FBUyxDQUFDQyxJQUFJLENBQUM7UUFBQ1osRUFBRSxFQUFFLEdBQUc7UUFBRUMsS0FBSyxFQUFFO01BQVMsQ0FBQyxDQUFDO01BQzNDWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsU0FBUyxDQUFDO01BQ3RCLE9BQU9BLFNBQVM7SUFDcEIsQ0FBQyxDQUFDO0VBRU4sQ0FBQztFQUdELG9CQUNJakIsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksMENBQXVDLENBQUMsZUFDNUNBLDBEQUFBLGFBQ0tVLFlBQVksQ0FBQ1ksR0FBRyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUNsQixvQkFBT3ZCLDBEQUFBLENBQUNHLGlEQUFRO01BQUNxQixHQUFHLEVBQUVELElBQUksQ0FBQ2pCLEVBQUc7TUFBQ2lCLElBQUksRUFBRUEsSUFBSztNQUFDRSxLQUFLLEVBQUVUO0lBQVUsQ0FBQyxDQUFDO0VBQ2xFLENBQ0osQ0FDQSxDQUFDLGVBQ0xoQiwwREFBQSxjQUFLLGtCQUVELGVBQUFBLDBEQUFBLGFBQ0tjLGNBQWMsQ0FBQ1EsR0FBRyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUNwQixvQkFBT3ZCLDBEQUFBLENBQUNHLGlEQUFRO01BQUNxQixHQUFHLEVBQUVELElBQUksQ0FBQ2pCLEVBQUc7TUFBQ2lCLElBQUksRUFBRUE7SUFBSyxDQUFDLENBQUM7RUFDaEQsQ0FDSixDQUNBLENBQ0gsQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlbkIsSUFBSTs7Ozs7Ozs7VUMvQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9TaG9wLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IFNob3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgW3Nob3BJdGVtTGlzdCwgc2V0U2hvcEl0ZW1dID0gdXNlU3RhdGUoW1xuICAgICAgICB7aWQ6IDEsIHRpdGxlOiAnTWFjQm9vayBQcm8nfSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogJ0RlbGwgWDU1MDAnfSxcbiAgICAgICAge2lkOiAzLCB0aXRsZTogJ0FzdXMgTlQ2MDAwJ30sXG4gICAgICAgIHtpZDogNCwgdGl0bGU6ICdEZWxsIENhcm1lbid9LFxuICAgICAgICB7aWQ6IDUsIHRpdGxlOiAnUG9udGlhYyd9XG4gICAgXSk7XG5cbiAgICBjb25zdCBbYm91Z2h0SXRlbUxpc3QsIHNldEJvdWdodEl0ZW1dID0gdXNlU3RhdGUoW3tpZDogNTUsIHRpdGxlOiAndHJ1ZSd9XSk7XG5cbiAgICBjb25zdCBoYW5kbGVCdXkgPSBpZCA9PiB7XG4gICAgICAgIHNldEJvdWdodEl0ZW0ocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHByZXZTdGF0ZS5wdXNoKHtpZDogOTk5LCB0aXRsZTogJ2Zkc2FqZmsnfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2U3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VHV0YWogamVzdCBTaG9wIGEgcG9uacW8ZWogc2hvcCBpdGVtPC9oMT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7c2hvcEl0ZW1MaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2hvcEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBvbkJ1eT17aGFuZGxlQnV5fS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgWW91IGhhdmUgYm91Z2h0OlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2JvdWdodEl0ZW1MaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNob3BJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllNmI0MzViMDllMWYxNWM4ZTkyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU2hvcEl0ZW0iLCJTaG9wIiwiX3VzZVN0YXRlIiwiaWQiLCJ0aXRsZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3BJdGVtTGlzdCIsInNldFNob3BJdGVtIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJib3VnaHRJdGVtTGlzdCIsInNldEJvdWdodEl0ZW0iLCJoYW5kbGVCdXkiLCJwcmV2U3RhdGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJpdGVtIiwia2V5Iiwib25CdXkiXSwic291cmNlUm9vdCI6IiJ9