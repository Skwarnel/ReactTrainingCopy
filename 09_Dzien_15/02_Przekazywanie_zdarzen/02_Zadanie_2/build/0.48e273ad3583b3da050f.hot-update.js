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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
      id: 888,
      title: "fdjsak;l"
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    cart = _useState4[0],
    setCart = _useState4[1];
  var productBuy = function productBuy(item) {
    console.log(item);
    setCart(function (prevCart) {
      return [].concat(_toConsumableArray(prevCart), [item]);
    });
    // console.log("Działam");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tutaj jest Shop a poni\u017Cej shop item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, shopItemList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      onBuy: productBuy
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You have bought:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, cart.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.id,
      item: item
    }, item.title);
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf0142c97027eb2523d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OGUyNzNhZDM1ODNiM2RhMDUwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ1Y7QUFFbEMsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBZTtFQUVyQixJQUFBQyxTQUFBLEdBQW9DSiwrQ0FBUSxDQUFDLENBQ3pDO01BQUNLLEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQVksQ0FBQyxFQUM1QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBYSxDQUFDLEVBQzdCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQVMsQ0FBQyxDQUM1QixDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBTktLLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFRaEMsSUFBQUksVUFBQSxHQUF3QlgsK0NBQVEsQ0FBQyxDQUFDO01BQUNLLEVBQUUsRUFBQyxHQUFHO01BQUVDLEtBQUssRUFBRTtJQUFVLENBQUMsQ0FBQyxDQUFDO0lBQUFNLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXhERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBRXBCLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFHQyxJQUFJLEVBQUk7SUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7SUFDakJGLE9BQU8sQ0FBQyxVQUFBSyxRQUFRO01BQUEsVUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFRRixRQUFRLElBQUVILElBQUk7SUFBQSxDQUFDLENBQUM7SUFDeEM7RUFDSixDQUFDOztFQUVELG9CQUNJakIsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksMENBQXVDLENBQUMsZUFDNUNBLDBEQUFBLGFBQ0tVLFlBQVksQ0FBQ2MsR0FBRyxDQUFDLFVBQUFQLElBQUksRUFBSTtJQUNsQixvQkFBT2pCLDBEQUFBLENBQUNHLGlEQUFRO01BQUNzQixHQUFHLEVBQUVSLElBQUksQ0FBQ1gsRUFBRztNQUFDVyxJQUFJLEVBQUVBLElBQUs7TUFBQ1MsS0FBSyxFQUFFVjtJQUFXLENBQUMsQ0FBQztFQUNuRSxDQUNKLENBQ0EsQ0FBQyxlQUNMaEIsMERBQUEsY0FBSyxrQkFFRCxlQUFBQSwwREFBQSxhQUNLYyxJQUFJLENBQUNVLEdBQUcsQ0FBQyxVQUFBUCxJQUFJLEVBQUk7SUFDVixvQkFBT2pCLDBEQUFBO01BQUl5QixHQUFHLEVBQUVSLElBQUksQ0FBQ1gsRUFBRztNQUFDVyxJQUFJLEVBQUVBO0lBQUssR0FBRUEsSUFBSSxDQUFDVixLQUFVLENBQUM7RUFDMUQsQ0FDSixDQUNBLENBQ0gsQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSCxJQUFJOzs7Ozs7OztVQzVDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL1Nob3AuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcblxuY29uc3QgU2hvcCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IFtzaG9wSXRlbUxpc3QsIHNldFNob3BJdGVtXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge2lkOiAxLCB0aXRsZTogJ01hY0Jvb2sgUHJvJ30sXG4gICAgICAgIHtpZDogMiwgdGl0bGU6ICdEZWxsIFg1NTAwJ30sXG4gICAgICAgIHtpZDogMywgdGl0bGU6ICdBc3VzIE5UNjAwMCd9LFxuICAgICAgICB7aWQ6IDQsIHRpdGxlOiAnRGVsbCBDYXJtZW4nfSxcbiAgICAgICAge2lkOiA1LCB0aXRsZTogJ1BvbnRpYWMnfVxuICAgIF0pO1xuXG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW3tpZDo4ODgsIHRpdGxlOiBcImZkanNhaztsXCJ9XSk7XG5cbiAgICBjb25zdCBwcm9kdWN0QnV5ID0gaXRlbSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICBzZXRDYXJ0KHByZXZDYXJ0ID0+IFsuLi5wcmV2Q2FydCwgaXRlbV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkR6aWHFgmFtXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VHV0YWogamVzdCBTaG9wIGEgcG9uacW8ZWogc2hvcCBpdGVtPC9oMT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7c2hvcEl0ZW1MaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2hvcEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBvbkJ1eT17cHJvZHVjdEJ1eX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFlvdSBoYXZlIGJvdWdodDpcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0+e2l0ZW0udGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZjAxNDJjOTcwMjdlYjI1MjNkOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNob3BJdGVtIiwiU2hvcCIsIl91c2VTdGF0ZSIsImlkIiwidGl0bGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG9wSXRlbUxpc3QiLCJzZXRTaG9wSXRlbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0QnV5IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2Q2FydCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJrZXkiLCJvbkJ1eSJdLCJzb3VyY2VSb290IjoiIn0=