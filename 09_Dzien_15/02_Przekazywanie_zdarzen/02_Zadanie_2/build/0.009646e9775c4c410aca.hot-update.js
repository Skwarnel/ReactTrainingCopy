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
    setTasks(function (prevState) {
      return prevState.filter(function (task) {
        return task.id !== id;
      });
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
/******/ 	__webpack_require__.h = () => ("13354573378327388d12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMDk2NDZlOTc3NWM0YzQxMGFjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDVjtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFlO0VBQ3JCLElBQUFDLFNBQUEsR0FBb0NKLCtDQUFRLENBQUMsQ0FDekM7TUFBQ0ssRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBWSxDQUFDLEVBQzVCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQzVCLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFKLFNBQUE7SUFOS0ssWUFBWSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQVFoQyxJQUFBSSxVQUFBLEdBQXdDWCwrQ0FBUSxDQUFDLENBQUM7TUFBQ0ssRUFBRSxFQUFFLEVBQUU7TUFBRUMsS0FBSyxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUM7SUFBQU0sVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcEVFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFFcEMsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUdWLEVBQUUsRUFBSTtJQUNwQlcsUUFBUSxDQUFDLFVBQUFDLFNBQVMsRUFBSTtNQUNsQixPQUFPQSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7UUFDNUIsT0FBT0EsSUFBSSxDQUFDZCxFQUFFLEtBQUtBLEVBQUU7TUFDekIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUdELG9CQUNJTiwwREFBQSwyQkFDSUEsMERBQUEsYUFBSSwwQ0FBdUMsQ0FBQyxlQUM1Q0EsMERBQUEsYUFDS1UsWUFBWSxDQUFDWSxHQUFHLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ2xCLG9CQUFPdkIsMERBQUEsQ0FBQ0csaURBQVE7TUFBQ3FCLEdBQUcsRUFBRUQsSUFBSSxDQUFDakIsRUFBRztNQUFDaUIsSUFBSSxFQUFFQSxJQUFLO01BQUNFLEtBQUssRUFBRVQ7SUFBVSxDQUFDLENBQUM7RUFDbEUsQ0FDSixDQUNBLENBQUMsZUFDTGhCLDBEQUFBLGNBQUssa0JBRUQsZUFBQUEsMERBQUEsYUFDS2MsY0FBYyxDQUFDUSxHQUFHLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ3BCLG9CQUFPdkIsMERBQUEsQ0FBQ0csaURBQVE7TUFBQ3FCLEdBQUcsRUFBRUQsSUFBSSxDQUFDakIsRUFBRztNQUFDaUIsSUFBSSxFQUFFQTtJQUFLLENBQUMsQ0FBQztFQUNoRCxDQUNKLENBQ0EsQ0FDSCxDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVuQixJQUFJOzs7Ozs7OztVQzlDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL1Nob3AuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcblxuY29uc3QgU2hvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBbc2hvcEl0ZW1MaXN0LCBzZXRTaG9wSXRlbV0gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGl0bGU6ICdNYWNCb29rIFBybyd9LFxuICAgICAgICB7aWQ6IDIsIHRpdGxlOiAnRGVsbCBYNTUwMCd9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiAnQXN1cyBOVDYwMDAnfSxcbiAgICAgICAge2lkOiA0LCB0aXRsZTogJ0RlbGwgQ2FybWVuJ30sXG4gICAgICAgIHtpZDogNSwgdGl0bGU6ICdQb250aWFjJ31cbiAgICBdKTtcblxuICAgIGNvbnN0IFtib3VnaHRJdGVtTGlzdCwgc2V0Qm91Z2h0SXRlbV0gPSB1c2VTdGF0ZShbe2lkOiA1NSwgdGl0bGU6ICd0cnVlJ31dKTtcblxuICAgIGNvbnN0IGhhbmRsZUJ1eSA9IGlkID0+IHtcbiAgICAgICAgc2V0VGFza3MocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLmlkICE9PSBpZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlR1dGFqIGplc3QgU2hvcCBhIHBvbmnFvGVqIHNob3AgaXRlbTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Nob3BJdGVtTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNob3BJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gb25CdXk9e2hhbmRsZUJ1eX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFlvdSBoYXZlIGJvdWdodDpcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtib3VnaHRJdGVtTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTaG9wSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMzM1NDU3MzM3ODMyNzM4OGQxMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNob3BJdGVtIiwiU2hvcCIsIl91c2VTdGF0ZSIsImlkIiwidGl0bGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG9wSXRlbUxpc3QiLCJzZXRTaG9wSXRlbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYm91Z2h0SXRlbUxpc3QiLCJzZXRCb3VnaHRJdGVtIiwiaGFuZGxlQnV5Iiwic2V0VGFza3MiLCJwcmV2U3RhdGUiLCJmaWx0ZXIiLCJ0YXNrIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJvbkJ1eSJdLCJzb3VyY2VSb290IjoiIn0=