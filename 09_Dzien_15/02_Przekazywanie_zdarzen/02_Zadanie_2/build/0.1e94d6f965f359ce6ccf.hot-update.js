"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Shop() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  var handleCounter = function handleCounter() {
    setCounter(function (prev) {
      return prev + 1;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    onHandleCounter: handleCounter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    onHandleCounter: handleCounter
  }));
}
function ShopItem(_ref) {
  var onHandleCounter = _ref.onHandleCounter;
  var handleClick = function handleClick() {
    if (typeof onHandleCounter === 'function') {
      onHandleCounter();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Click");
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonCounter, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f8e8a1fff10a0f48b1c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZTk0ZDZmOTY1ZjM1OWNlNmNjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUU5QyxTQUFTRyxJQUFJQSxDQUFBLEVBQUc7RUFDWixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFuQ0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUUzQixJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztJQUN4QkQsVUFBVSxDQUFDLFVBQUFFLElBQUk7TUFBQSxPQUFJQSxJQUFJLEdBQUcsQ0FBQztJQUFBLEVBQUM7RUFDaEMsQ0FBQztFQUVELG9CQUNJViwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsYUFBTU8sT0FBYSxDQUFDLGVBQ3BCUCwwREFBQSxDQUFDYSxRQUFRO0lBQUNDLGVBQWUsRUFBRUw7RUFBYyxDQUFFLENBQUMsZUFDNUNULDBEQUFBLENBQUNhLFFBQVE7SUFBQ0MsZUFBZSxFQUFFTDtFQUFjLENBQUUsQ0FDN0MsQ0FBQztBQUVYO0FBRUEsU0FBU0ksUUFBUUEsQ0FBQUUsSUFBQSxFQUFzQjtFQUFBLElBQW5CRCxlQUFlLEdBQUFDLElBQUEsQ0FBZkQsZUFBZTtFQUUvQixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCLElBQUksT0FBT0YsZUFBZSxLQUFLLFVBQVUsRUFBRTtNQUN2Q0EsZUFBZSxDQUFDLENBQUM7SUFDckI7RUFDSixDQUFDO0VBRUQsb0JBQU9kLDBEQUFBO0lBQVFpQixPQUFPLEVBQUVEO0VBQVksR0FBQyxPQUFhLENBQUM7QUFDdkQ7QUFFQSxTQUFTRSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2xCLDBEQUFBLENBQUNtQixhQUFhLE1BQUUsQ0FBQztBQUM1QjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3JCLDREQUFVLENBQUNrQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDeEIsMERBQUEsQ0FBQ2tCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDcENwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2hvcCgpIHtcbiAgICBjb25zdCBbIGNvdW50ZXIsIHNldENvdW50ZXIgXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlQ291bnRlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcihwcmV2ID0+IHByZXYgKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPnsgY291bnRlciB9PC9oMT5cbiAgICAgICAgICAgIDxTaG9wSXRlbSBvbkhhbmRsZUNvdW50ZXI9e2hhbmRsZUNvdW50ZXJ9IC8+XG4gICAgICAgICAgICA8U2hvcEl0ZW0gb25IYW5kbGVDb3VudGVyPXtoYW5kbGVDb3VudGVyfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHsgb25IYW5kbGVDb3VudGVyIH0pIHtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9uSGFuZGxlQ291bnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25IYW5kbGVDb3VudGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2s8L2J1dHRvbj47XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPEJ1dHRvbkNvdW50ZXIgLz47XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlmOGU4YTFmZmYxMGEwZjQ4YjFjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU2hvcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiaGFuZGxlQ291bnRlciIsInByZXYiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJTaG9wSXRlbSIsIm9uSGFuZGxlQ291bnRlciIsIl9yZWYiLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJBcHAiLCJCdXR0b25Db3VudGVyIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9