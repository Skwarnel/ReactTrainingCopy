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

  // const [cart, setCart] = useState([]);
  //
  // const productBuy = item => {
  //     setCart(prevCart => [...prevCart, item]);
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tutaj jest Shop a poni\u017Cej shop item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, shopItemList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      onBuy: productBuy
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b5fa465beea81e292fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mM2E0MWI2NWU3N2UxNjBkN2JhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDVjtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFlO0VBRXJCLElBQUFDLFNBQUEsR0FBb0NKLCtDQUFRLENBQUMsQ0FDekM7TUFBQ0ssRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBWSxDQUFDLEVBQzVCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQzVCLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFKLFNBQUE7SUFOS0ssWUFBWSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTs7RUFRaEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxvQkFDSVIsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksMENBQXVDLENBQUMsZUFDNUNBLDBEQUFBLGFBQ0tVLFlBQVksQ0FBQ0csR0FBRyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUNsQixvQkFBT2QsMERBQUEsQ0FBQ0csaURBQVE7TUFBQ1ksR0FBRyxFQUFFRCxJQUFJLENBQUNSLEVBQUc7TUFBQ1EsSUFBSSxFQUFFQSxJQUFLO01BQUNFLEtBQUssRUFBRUM7SUFBVyxDQUFDLENBQUM7RUFDbkUsQ0FDSixDQUNBLENBVUgsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZWIsSUFBSTs7Ozs7Ozs7VUMxQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9TaG9wLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IFNob3AgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBbc2hvcEl0ZW1MaXN0LCBzZXRTaG9wSXRlbV0gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGl0bGU6ICdNYWNCb29rIFBybyd9LFxuICAgICAgICB7aWQ6IDIsIHRpdGxlOiAnRGVsbCBYNTUwMCd9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiAnQXN1cyBOVDYwMDAnfSxcbiAgICAgICAge2lkOiA0LCB0aXRsZTogJ0RlbGwgQ2FybWVuJ30sXG4gICAgICAgIHtpZDogNSwgdGl0bGU6ICdQb250aWFjJ31cbiAgICBdKTtcblxuICAgIC8vIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IHByb2R1Y3RCdXkgPSBpdGVtID0+IHtcbiAgICAvLyAgICAgc2V0Q2FydChwcmV2Q2FydCA9PiBbLi4ucHJldkNhcnQsIGl0ZW1dKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlR1dGFqIGplc3QgU2hvcCBhIHBvbmnFvGVqIHNob3AgaXRlbTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Nob3BJdGVtTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNob3BJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gb25CdXk9e3Byb2R1Y3RCdXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgey8qPGRpdj4qL31cbiAgICAgICAgICAgIHsvKiAgICBZb3UgaGF2ZSBib3VnaHQ6Ki99XG4gICAgICAgICAgICB7LyogICAgPHVsPiovfVxuICAgICAgICAgICAgey8qICAgICAgICB7Y2FydC5tYXAoaXRlbSA9PiB7Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgcmV0dXJuIDxTaG9wSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19Lz4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIH0qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgKX0qL31cbiAgICAgICAgICAgIHsvKiAgICA8L3VsPiovfVxuICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YjVmYTQ2NWJlZWE4MWUyOTJmYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNob3BJdGVtIiwiU2hvcCIsIl91c2VTdGF0ZSIsImlkIiwidGl0bGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG9wSXRlbUxpc3QiLCJzZXRTaG9wSXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJpdGVtIiwia2V5Iiwib25CdXkiLCJwcm9kdWN0QnV5Il0sInNvdXJjZVJvb3QiOiIifQ==