"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const joinRoom = ()=>{\n        if (!name) {\n            toast({\n                title: \"Error\",\n                description: \"Name cannot be empty.\",\n                status: \"error\",\n                duration: 9000,\n                isClosable: true\n            });\n            return;\n        }\n        router.push(\"/chat?name=\".concat(encodeURIComponent(name), \"&roomID=defaultRoom\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        justify: \"center\",\n        align: \"center\",\n        height: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: \"Welcome to the Chat Room\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: \"Enter your name to join the room:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"Your Name\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        mt: 5,\n                        colorScheme: \"teal\",\n                        onClick: joinRoom,\n                        disabled: !name.trim(),\n                        children: \"Join Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6gKWbZPB+ocK7Jn7WGP2vqHtwDw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlCQUFpQjs7O0FBQ2U7QUFDTztBQVNkO0FBRVYsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNWSxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTVksUUFBUUwsMERBQVFBO0lBRXRCLE1BQU1NLFdBQVc7UUFDZixJQUFJLENBQUNKLE1BQU07WUFDVEcsTUFBTTtnQkFDSkUsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsWUFBWTtZQUNkO1lBQ0E7UUFDRjtRQUNBUCxPQUFPUSxJQUFJLENBQUMsY0FBdUMsT0FBekJDLG1CQUFtQlgsT0FBTTtJQUNyRDtJQUVBLHFCQUNFLDhEQUFDTCxvREFBTUE7UUFBQ2lCLFNBQVM7UUFBR0MsU0FBUTtRQUFTQyxPQUFNO1FBQVNDLFFBQU87OzBCQUN6RCw4REFBQ25CLHFEQUFPQTswQkFBQzs7Ozs7OzBCQUNULDhEQUFDQyxrREFBSUE7MEJBQUM7Ozs7OzswQkFDTiw4REFBQ0wsaURBQUdBOztrQ0FDRiw4REFBQ0UsbURBQUtBO3dCQUNKc0IsYUFBWTt3QkFDWkMsT0FBT2pCO3dCQUNQa0IsVUFBVSxDQUFDQyxJQUFNbEIsUUFBUWtCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUV6Qyw4REFBQ3hCLG9EQUFNQTt3QkFBQzRCLElBQUk7d0JBQUdDLGFBQVk7d0JBQU9DLFNBQVNuQjt3QkFBVW9CLFVBQVUsQ0FBQ3hCLEtBQUt5QixJQUFJO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckY7R0FqQ3dCMUI7O1FBRVBSLGtEQUFTQTtRQUNWTyxzREFBUUE7OztLQUhBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIFZTdGFjayxcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgdXNlVG9hc3QsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcblxuICBjb25zdCBqb2luUm9vbSA9ICgpID0+IHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmFtZSBjYW5ub3QgYmUgZW1wdHkuXCIsXG4gICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgICBkdXJhdGlvbjogOTAwMCxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvdXRlci5wdXNoKGAvY2hhdD9uYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfSZyb29tSUQ9ZGVmYXVsdFJvb21gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICA8SGVhZGluZz5XZWxjb21lIHRvIHRoZSBDaGF0IFJvb208L0hlYWRpbmc+XG4gICAgICA8VGV4dD5FbnRlciB5b3VyIG5hbWUgdG8gam9pbiB0aGUgcm9vbTo8L1RleHQ+XG4gICAgICA8Qm94PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiBtdD17NX0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgb25DbGljaz17am9pblJvb219IGRpc2FibGVkPXshbmFtZS50cmltKCl9PkpvaW4gUm9vbTwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9WU3RhY2s+XG4gIClcbn1cblxuXG5cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJWU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsInVzZVRvYXN0IiwiSG9tZSIsIm5hbWUiLCJzZXROYW1lIiwicm91dGVyIiwidG9hc3QiLCJqb2luUm9vbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3BhY2luZyIsImp1c3RpZnkiLCJhbGlnbiIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtdCIsImNvbG9yU2NoZW1lIiwib25DbGljayIsImRpc2FibGVkIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});