"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Chat() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name, roomID } = router.query;\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [userCount, setUserCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedChunks, setRecordedChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!roomID || !name) {\n            router.push(\"/\");\n            return;\n        }\n        const ws = new WebSocket(\"ws://localhost:8080/ws?roomID=\".concat(encodeURIComponent(name)));\n        ws.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(event.data);\n            if (data.type === \"userCount\") {\n                setUserCount(data.count);\n            }\n        };\n        const mediaConstraints = {\n            audio: true\n        };\n        navigator.mediaDevices.getUserMedia(mediaConstraints).then((stream)=>{\n            audioRef.current.srcObject = stream;\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            recorder.ondataavailable = (event)=>{\n                if (event.data.size > 0) {\n                    setRecordedChunks((prev)=>[\n                            ...prev,\n                            event.data\n                        ]);\n                }\n            };\n        }).catch((error)=>console.error(\"Error accessing media devices.\", error));\n        // Cleanup on unmount\n        return ()=>{\n            mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.stop();\n            recordedChunks.forEach((chunk)=>URL.revokeObjectURL(chunk));\n            ws.close();\n        };\n    }, [\n        roomID,\n        name\n    ]);\n    const toggleMute = ()=>{\n        const audioTrack = audioRef.current.srcObject.getAudioTracks()[0];\n        audioTrack.enabled = !isMuted;\n        setIsMuted(!isMuted);\n    };\n    const startRecording = ()=>{\n        setRecordedChunks([]);\n        mediaRecorder.start();\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        mediaRecorder.stop();\n        setRecording(false);\n    };\n    const saveRecording = ()=>{\n        const blob = new Blob(recordedChunks, {\n            type: \"audio/webm\"\n        });\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement(\"a\");\n        a.href = url;\n        a.download = \"recording_\".concat(new Date().toISOString(), \".webm\");\n        document.body.appendChild(a);\n        a.click();\n        setTimeout(()=>{\n            document.body.removeChild(a);\n            window.URL.revokeObjectURL(url);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        align: \"center\",\n        p: 5,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Room: \",\n                    roomID\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Welcome \",\n                    name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    \"User count: \",\n                    userCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 97,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                spacing: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: toggleMute,\n                        children: isMuted ? \"Unmute\" : \"Mute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: recording ? stopRecording : startRecording,\n                        children: recording ? \"Stop Recording\" : \"Start Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: saveRecording,\n                        disabled: recordedChunks.length === 0,\n                        children: \"Save Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                mt: 10,\n                children: [\n                    Array.from({\n                        length: userCount\n                    }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            p: 5,\n                            shadow: \"md\",\n                            borderWidth: \"1px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        name: name || \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: name || \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        colorScheme: \"blue\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Leave Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 118,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 108,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"AtTxMHTgkX95CLoHfpxrn+KJ0Gc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztrREFDdEMsOERBQUM3RixrREFBSUE7a0RBQUVNLFFBQVEsUUFBa0IsT0FBVnVGLFFBQVE7Ozs7Ozs7Ozs7OzsyQkFIekJBOzs7OztrQ0FPWiw4REFBQzFGLG9EQUFNQTs7Ozs7a0NBQ1QsOERBQUNOLG9EQUFNQTt3QkFBQ21HLGFBQVk7d0JBQU9YLFNBQVMsSUFBTWhGLE9BQU9lLElBQUksQ0FBQztrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxFO0dBOUd3QmhCOztRQUNQVCxrREFBU0E7OztLQURGUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBWU3RhY2ssXHJcbiAgSGVhZGluZyxcclxuICBUZXh0LFxyXG4gIEhTdGFjayxcclxuICBBdmF0YXIsXHJcbiAgU3BhY2VyXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbmFtZSwgcm9vbUlEIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbdXNlckNvdW50LCBzZXRVc2VyQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3JlY29yZGVkQ2h1bmtzLCBzZXRSZWNvcmRlZENodW5rc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNdXRlZCwgc2V0SXNNdXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJvb21JRCB8fCAhbmFtZSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KGB3czovL2xvY2FsaG9zdDo4MDgwL3dzP3Jvb21JRD0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcclxuICAgIHdzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuZGF0YSlcclxuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VzZXJDb3VudCcpIHtcclxuICAgICAgICBzZXRVc2VyQ291bnQoZGF0YS5jb3VudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWVkaWFDb25zdHJhaW50cyA9IHsgYXVkaW86IHRydWUgfTtcclxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG1lZGlhQ29uc3RyYWludHMpXHJcbiAgICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgYXVkaW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xyXG4gICAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xyXG5cclxuICAgICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC5kYXRhLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlY29yZGVkQ2h1bmtzKHByZXYgPT4gWy4uLnByZXYsIGV2ZW50LmRhdGFdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBtZWRpYSBkZXZpY2VzLlwiLCBlcnJvcikpO1xyXG5cclxuICAgIC8vIENsZWFudXAgb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbWVkaWFSZWNvcmRlcj8uc3RvcCgpO1xyXG4gICAgICByZWNvcmRlZENodW5rcy5mb3JFYWNoKGNodW5rID0+IFVSTC5yZXZva2VPYmplY3RVUkwoY2h1bmspKTtcclxuICAgICAgd3MuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgfSwgW3Jvb21JRCwgbmFtZV0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVNdXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW9UcmFjayA9IGF1ZGlvUmVmLmN1cnJlbnQuc3JjT2JqZWN0LmdldEF1ZGlvVHJhY2tzKClbMF07XHJcbiAgICBhdWRpb1RyYWNrLmVuYWJsZWQgPSAhaXNNdXRlZDtcclxuICAgIHNldElzTXV0ZWQoIWlzTXV0ZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0UmVjb3JkZWRDaHVua3MoW10pO1xyXG4gICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xyXG4gICAgc2V0UmVjb3JkaW5nKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgIHNldFJlY29yZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihyZWNvcmRlZENodW5rcywgeyB0eXBlOiAnYXVkaW8vd2VibScgfSk7XHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIGEuZG93bmxvYWQgPSBgcmVjb3JkaW5nXyR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfS53ZWJtYDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgc3BhY2luZz17NH0gYWxpZ249XCJjZW50ZXJcIiBwPXs1fT5cclxuICAgIDxIZWFkaW5nPlJvb206IHtyb29tSUR9PC9IZWFkaW5nPlxyXG4gICAgICA8SGVhZGluZz5XZWxjb21lIHtuYW1lfSE8L0hlYWRpbmc+XHJcblx0PFRleHQ+VXNlciBjb3VudDoge3VzZXJDb3VudH08L1RleHQ+XHJcbiAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBhdXRvUGxheSAvPlxyXG4gICAgICA8SFN0YWNrIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlTXV0ZX0+e2lzTXV0ZWQgPyAnVW5tdXRlJyA6ICdNdXRlJ308L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3JlY29yZGluZyA/IHN0b3BSZWNvcmRpbmcgOiBzdGFydFJlY29yZGluZ30+XHJcbiAgICAgICAgICB7cmVjb3JkaW5nID8gJ1N0b3AgUmVjb3JkaW5nJyA6ICdTdGFydCBSZWNvcmRpbmcnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c2F2ZVJlY29yZGluZ30gZGlzYWJsZWQ9e3JlY29yZGVkQ2h1bmtzLmxlbmd0aCA9PT0gMH0+XHJcbiAgICAgICAgICBTYXZlIFJlY29yZGluZ1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0hTdGFjaz5cclxuPFZTdGFjayBtdD17MTB9PlxyXG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiB1c2VyQ291bnQgfSkubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSBwPXs1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XHJcbiAgICAgICAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtuYW1lIHx8IGBVc2VyICR7aW5kZXggKyAxfWB9IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e25hbWUgfHwgYFVzZXIgJHtpbmRleCArIDF9YH08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxyXG4gICAgICAgIExlYXZlIFJvb21cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9WU3RhY2s+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJCb3giLCJCdXR0b24iLCJWU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIkhTdGFjayIsIkF2YXRhciIsIlNwYWNlciIsIkNoYXQiLCJyb3V0ZXIiLCJuYW1lIiwicm9vbUlEIiwicXVlcnkiLCJhdWRpb1JlZiIsInVzZXJDb3VudCIsInNldFVzZXJDb3VudCIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwicmVjb3JkZWRDaHVua3MiLCJzZXRSZWNvcmRlZENodW5rcyIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsImlzTXV0ZWQiLCJzZXRJc011dGVkIiwicHVzaCIsIndzIiwiV2ViU29ja2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib25tZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJjb3VudCIsIm1lZGlhQ29uc3RyYWludHMiLCJhdWRpbyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwic2l6ZSIsInByZXYiLCJjYXRjaCIsImVycm9yIiwic3RvcCIsImZvckVhY2giLCJjaHVuayIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNsb3NlIiwidG9nZ2xlTXV0ZSIsImF1ZGlvVHJhY2siLCJnZXRBdWRpb1RyYWNrcyIsImVuYWJsZWQiLCJzdGFydFJlY29yZGluZyIsInN0YXJ0Iiwic3RvcFJlY29yZGluZyIsInNhdmVSZWNvcmRpbmciLCJibG9iIiwiQmxvYiIsInVybCIsImNyZWF0ZU9iamVjdFVSTCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIndpbmRvdyIsInNwYWNpbmciLCJhbGlnbiIsInAiLCJyZWYiLCJhdXRvUGxheSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImxlbmd0aCIsIm10IiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiXyIsImluZGV4Iiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJjb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n"));

/***/ })

});