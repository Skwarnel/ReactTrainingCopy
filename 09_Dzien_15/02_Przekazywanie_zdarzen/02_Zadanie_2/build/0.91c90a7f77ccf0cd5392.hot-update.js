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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    boughtItemList = _useState4[0],
    setBoughtItem = _useState4[1];
  var handleBuy = function handleBuy(id) {
    var boughtList = [];
    console.log("Działam doskonale. Kliknąłeś w " + id);
    setBoughtItem(function (prevState) {
      prevState.push(shopItemList.filter(function (item) {
        return item.id === id;
      }));
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
/******/ 	__webpack_require__.h = () => ("4c6f56a7fe1107772cc2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MWM5MGE3Zjc3Y2NmMGNkNTM5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDVjtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFlO0VBQ3JCLElBQUFDLFNBQUEsR0FBb0NKLCtDQUFRLENBQUMsQ0FDekM7TUFBQ0ssRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBWSxDQUFDLEVBQzVCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQzVCLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFKLFNBQUE7SUFOS0ssWUFBWSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQVFoQyxJQUFBSSxVQUFBLEdBQXdDWCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBWSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE3Q0UsY0FBYyxHQUFBRCxVQUFBO0lBQUVFLGFBQWEsR0FBQUYsVUFBQTtFQUVwQyxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBR1YsRUFBRSxFQUFJO0lBQ3BCLElBQU1XLFVBQVUsR0FBRyxFQUFFO0lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBR2IsRUFBRSxDQUFDO0lBQ25EUyxhQUFhLENBQUMsVUFBQUssU0FBUyxFQUFJO01BQ3ZCQSxTQUFTLENBQUNDLElBQUksQ0FBQ1gsWUFBWSxDQUFDWSxNQUFNLENBQUUsVUFBQUMsSUFBSSxFQUFJO1FBQ3hDLE9BQU9BLElBQUksQ0FBQ2pCLEVBQUUsS0FBS0EsRUFBRTtNQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSU4sMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksMENBQXVDLENBQUMsZUFDNUNBLDBEQUFBLGFBQ0tVLFlBQVksQ0FBQ2UsR0FBRyxDQUFDLFVBQUFGLElBQUksRUFBSTtJQUNsQixvQkFBT3ZCLDBEQUFBLENBQUNHLGlEQUFRO01BQUN1QixHQUFHLEVBQUVILElBQUksQ0FBQ2pCLEVBQUc7TUFBQ2lCLElBQUksRUFBRUEsSUFBSztNQUFDSSxLQUFLLEVBQUVYO0lBQVUsQ0FBQyxDQUFDO0VBQ2xFLENBQ0osQ0FDQSxDQUFDLGVBQ0xoQiwwREFBQSxjQUFLLGtCQUVELGVBQUFBLDBEQUFBLGFBQ0tjLGNBQWMsQ0FBQ1csR0FBRyxDQUFDLFVBQUFGLElBQUksRUFBSTtJQUNwQixvQkFBT3ZCLDBEQUFBLENBQUNHLGlEQUFRO01BQUN1QixHQUFHLEVBQUVILElBQUksQ0FBQ2pCLEVBQUc7TUFBQ2lCLElBQUksRUFBRUE7SUFBSyxDQUFDLENBQUM7RUFDaEQsQ0FDSixDQUNBLENBQ0gsQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlbkIsSUFBSTs7Ozs7Ozs7VUMvQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9TaG9wLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IFNob3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgW3Nob3BJdGVtTGlzdCwgc2V0U2hvcEl0ZW1dID0gdXNlU3RhdGUoW1xuICAgICAgICB7aWQ6IDEsIHRpdGxlOiAnTWFjQm9vayBQcm8nfSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogJ0RlbGwgWDU1MDAnfSxcbiAgICAgICAge2lkOiAzLCB0aXRsZTogJ0FzdXMgTlQ2MDAwJ30sXG4gICAgICAgIHtpZDogNCwgdGl0bGU6ICdEZWxsIENhcm1lbid9LFxuICAgICAgICB7aWQ6IDUsIHRpdGxlOiAnUG9udGlhYyd9XG4gICAgXSk7XG5cbiAgICBjb25zdCBbYm91Z2h0SXRlbUxpc3QsIHNldEJvdWdodEl0ZW1dID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQnV5ID0gaWQgPT4ge1xuICAgICAgICBjb25zdCBib3VnaHRMaXN0ID0gW107XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHppYcWCYW0gZG9za29uYWxlLiBLbGlrbsSFxYJlxZsgdyBcIiArIGlkKTtcbiAgICAgICAgc2V0Qm91Z2h0SXRlbShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcHJldlN0YXRlLnB1c2goc2hvcEl0ZW1MaXN0LmZpbHRlciggaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IGlkO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UdXRhaiBqZXN0IFNob3AgYSBwb25pxbxlaiBzaG9wIGl0ZW08L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzaG9wSXRlbUxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTaG9wSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IG9uQnV5PXtoYW5kbGVCdXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBZb3UgaGF2ZSBib3VnaHQ6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7Ym91Z2h0SXRlbUxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2hvcEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3A7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGM2ZjU2YTdmZTExMDc3NzJjYzJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTaG9wSXRlbSIsIlNob3AiLCJfdXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvcEl0ZW1MaXN0Iiwic2V0U2hvcEl0ZW0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImJvdWdodEl0ZW1MaXN0Iiwic2V0Qm91Z2h0SXRlbSIsImhhbmRsZUJ1eSIsImJvdWdodExpc3QiLCJjb25zb2xlIiwibG9nIiwicHJldlN0YXRlIiwicHVzaCIsImZpbHRlciIsIml0ZW0iLCJjcmVhdGVFbGVtZW50IiwibWFwIiwia2V5Iiwib25CdXkiXSwic291cmNlUm9vdCI6IiJ9