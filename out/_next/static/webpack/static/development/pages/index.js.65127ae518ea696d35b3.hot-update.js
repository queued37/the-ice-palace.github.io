webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SubscriptionForm.js":
/*!****************************************!*\
  !*** ./components/SubscriptionForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js";





var action = 'https://queuedlab.us20.list-manage.com/subscribe/post?u=1ad46e8d8503e34118a3b3b2d&amp;id=af66b5bc1d';

var Form = function Form(onSubmitted, status, message) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      steamId = _useState4[0],
      setSteamId = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Email Address (Required)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "email",
    placeholder: "your_email@example.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Steam Profile Link or ID (Optional)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: steamId,
    onChange: function onChange(e) {
      return setSteamId(e.target.value);
    },
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]) + " " + "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, status === "sending" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), status === "success" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "green"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2399760418", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Subscribed!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2399760418",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light],
    __self: this
  }, "label.__jsx-style-dynamic-selector{display:block;margin:16px;font-size:20px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.dark, ";}input.__jsx-style-dynamic-selector{width:100%;padding:2px 4px;border:2px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";font-size:24px;background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, ";}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::-moz-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUd5QixBQU1ILEFBT3dCLFdBTm5CLEdBTkosWUFDRyxDQU0rQixRQU1oRCxNQVhxQyxnQ0FNcEIsR0FMakIsWUFNZ0QsOENBQ2hEIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tICdyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlJ1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgYWN0aW9uID0gJ2h0dHBzOi8vcXVldWVkbGFiLnVzMjAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9MWFkNDZlOGQ4NTAzZTM0MTE4YTNiM2IyZCZhbXA7aWQ9YWY2NmI1YmMxZCdcblxuY29uc3QgRm9ybSA9IChvblN1Ym1pdHRlZCwgc3RhdHVzLCBtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdGVhbUlkLCBzZXRTdGVhbUlkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBFbWFpbCBBZGRyZXNzIChSZXF1aXJlZClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXJfZW1haWxAZXhhbXBsZS5jb21cIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTdGVhbSBQcm9maWxlIExpbmsgb3IgSUQgKE9wdGlvbmFsKVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3N0ZWFtSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3RlYW1JZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG4gICAgICAgIHtzdGF0dXMgPT09IFwic2VuZGluZ1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PlNlbmRpbmcuLi48L2Rpdj59XG4gICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtZXNzYWdlfX0vPn1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PlN1YnNjcmliZWQhPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheS5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3BhbGV0dGUuZ3JheS5saWdodH07XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS53aGl0ZX07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXkubGlnaHR9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgdXJsPXthY3Rpb259XG4gICAgcmVuZGVyPXsoeyBzdWJzY3JpYmUsIHN0YXR1cywgbWVzc2FnZSB9KSA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdHRlZD17Zm9ybURhdGEgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgc3RhdHVzPXtzdGF0dXN9XG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAvPlxuICAgICl9XG4gIC8+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: action,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
        onSubmitted: function onSubmitted(formData) {
          return subscribe(formData);
        },
        status: status,
        message: message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.65127ae518ea696d35b3.hot-update.js.map