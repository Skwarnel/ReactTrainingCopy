"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _data_fakeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  login: function login(data) {
    var username = data.username,
      password = data.password;
    return new Promise(function (resolve, reject) {
      if (username === "coderslab" && password === "qwerty") {
        resolve({
          username: username,
          name: "Jan",
          surname: "Kowalski",
          lastLogin: new Date("04/08/2019 13:20:22")
        });
      } else {
        reject("Hasło lub login są nieprawidłowe!");
      }
    });
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c0b9d8d7129ea7553939")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yY2JlZmIzZjk2OGQyMjAwMmUyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBQ1Q7QUFHckMsSUFBTUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHTCw0REFBVSxDQUFDRSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDUCwwREFBQSxDQUFDUyxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1BwQixpRUFBZTtFQUNiQyxLQUFLLEVBQUUsU0FBQUEsTUFBQUMsSUFBSSxFQUFJO0lBQ2IsSUFBT0MsUUFBUSxHQUFjRCxJQUFJLENBQTFCQyxRQUFRO01BQUVDLFFBQVEsR0FBSUYsSUFBSSxDQUFoQkUsUUFBUTtJQUN6QixPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztNQUN0QyxJQUFJSixRQUFRLEtBQUssV0FBVyxJQUFJQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ3JERSxPQUFPLENBQUM7VUFDTkgsUUFBUSxFQUFSQSxRQUFRO1VBQ1JLLElBQUksRUFBRSxLQUFLO1VBQ1hDLE9BQU8sRUFBRSxVQUFVO1VBQ25CQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTEosTUFBTSxDQUFDLG1DQUFtQyxDQUFDO01BQzdDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDOzs7Ozs7OztVQ2hCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAyX1phZGFuaWVfMi9qcy9kYXRhL2Zha2VBUEkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBGYWtlQVBJIGZyb20gXCIuL2RhdGEvZmFrZUFQSVwiO1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW46IGRhdGEgPT4ge1xuICAgIGNvbnN0IHt1c2VybmFtZSwgcGFzc3dvcmR9ID0gZGF0YTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHVzZXJuYW1lID09PSBcImNvZGVyc2xhYlwiICYmIHBhc3N3b3JkID09PSBcInF3ZXJ0eVwiKSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIG5hbWU6IFwiSmFuXCIsXG4gICAgICAgICAgc3VybmFtZTogXCJLb3dhbHNraVwiLFxuICAgICAgICAgIGxhc3RMb2dpbjogbmV3IERhdGUoXCIwNC8wOC8yMDE5IDEzOjIwOjIyXCIpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KFwiSGFzxYJvIGx1YiBsb2dpbiBzxIUgbmllcHJhd2lkxYJvd2UhXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzBiOWQ4ZDcxMjllYTc1NTM5MzlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiRmFrZUFQSSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIkFwcCIsImxvZ2luIiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hbWUiLCJzdXJuYW1lIiwibGFzdExvZ2luIiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=