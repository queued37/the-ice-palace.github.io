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
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js";






var action = 'https://queuedlab.us20.list-manage.com/subscribe/post?u=1ad46e8d8503e34118a3b3b2d&amp;id=af66b5bc1d';

var Form = function Form(onSubmit, status, message) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      steamId = _useState4[0],
      setSteamId = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]) + " " + "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Email Address (Required)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "email",
    placeholder: "your_email@example.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Steam Profile Link or ID (Optional)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: steamId,
    onChange: function onChange(e) {
      return setSteamId(e.target.value);
    },
    type: "text",
    placeholder: "https://steamcommunity.com/id/your_steam_profile/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]) + " " + "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, status === "sending" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), status === "success" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "green"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Subscribed!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3795603213", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Subscribe!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3795603213",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)],
    __self: this
  }, ".form.__jsx-style-dynamic-selector{padding:16px 16px;background-color:".concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, ";}label.__jsx-style-dynamic-selector{display:block;margin:0 0 16px 0;font-size:20px;line-height:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, ";}input.__jsx-style-dynamic-selector{width:100%;padding:2px 4px;font-size:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, ";border:2px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";border-radius:0;-webkit-appearance:none;}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::-moz-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}button.__jsx-style-dynamic-selector{display:block;margin:24px auto 8px auto;padding:16px 32px;font-size:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, ";}button.__jsx-style-dynamic-selector:hover{background-color:").concat(chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), ";}button.__jsx-style-dynamic-selector:active{background-color:").concat(chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUc2QixBQUlKLEFBT0gsQUFVd0IsQUFHckIsQUFRZ0MsQUFHQSxXQXZCOUIsR0FQRSxBQW9CUSxJQXZCN0IsU0FXa0IsS0FQQSxHQWdCakIsS0FJb0IsRUFaaUIsSUFtQnJDLEFBR0EsQ0E3Qm1CLFdBb0JGLE1BekJqQixBQU1xQyxTQW9CQSxJQWJXLHNCQU5oRCxTQW9CZ0QsZUFiQSwrQkFjaEQsZUFia0IsZ0JBQ1Esd0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tICdyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlJ1xuaW1wb3J0IGNocm9tYSBmcm9tICdjaHJvbWEtanMnXG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBhY3Rpb24gPSAnaHR0cHM6Ly9xdWV1ZWRsYWIudXMyMC5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT0xYWQ0NmU4ZDg1MDNlMzQxMThhM2IzYjJkJmFtcDtpZD1hZjY2YjViYzFkJ1xuXG5jb25zdCBGb3JtID0gKG9uU3VibWl0LCBzdGF0dXMsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N0ZWFtSWQsIHNldFN0ZWFtSWRdID0gdXNlU3RhdGUoJycpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBFbWFpbCBBZGRyZXNzIChSZXF1aXJlZClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXJfZW1haWxAZXhhbXBsZS5jb21cIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTdGVhbSBQcm9maWxlIExpbmsgb3IgSUQgKE9wdGlvbmFsKVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3N0ZWFtSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3RlYW1JZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vaWQveW91cl9zdGVhbV9wcm9maWxlL1wiXG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXNcIj5cbiAgICAgICAge3N0YXR1cyA9PT0gXCJzZW5kaW5nXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+U2VuZGluZy4uLjwvZGl2Pn1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG1lc3NhZ2V9fS8+fVxuICAgICAgICB7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+U3Vic2NyaWJlZCE8L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25TdWJtaXR9PlxuICAgICAgICBTdWJzY3JpYmUhXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0fVxuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmtlc3R9O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUud2hpdGV9O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5LmxpZ2h0fTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheS5saWdodH07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDI0cHggYXV0byA4cHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXJ9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya2VzdH07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Nocm9tYShwYWxldHRlLmljZS5kYXJrZXN0KS5icmlnaHRlbigwLjIpfTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Nocm9tYShwYWxldHRlLmljZS5kYXJrZXN0KS5kYXJrZW4oMC4yKX07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxNYWlsY2hpbXBTdWJzY3JpYmVcbiAgICB1cmw9e2FjdGlvbn1cbiAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtmb3JtRGF0YSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxuICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIC8+XG4gICAgKX1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: action,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
        onSubmit: function onSubmit(formData) {
          return subscribe(formData);
        },
        status: status,
        message: message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.c7c569172c5de7f09974.hot-update.js.map