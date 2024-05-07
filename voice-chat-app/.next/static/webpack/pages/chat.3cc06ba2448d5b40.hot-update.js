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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Chat() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name, roomID } = router.query;\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [userCount, setUserCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedChunks, setRecordedChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(recordedChunks);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!roomID || !name) {\n            router.push(\"/\");\n            return;\n        }\n        const ws = new WebSocket(\"ws://localhost:8080/ws?roomID=\".concat(encodeURIComponent(roomID)));\n        ws.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(event.data);\n            if (data.type === \"userCount\") {\n                setUserCount(data.count);\n            }\n        };\n        const mediaConstraints = {\n            audio: true\n        };\n        navigator.mediaDevices.getUserMedia(mediaConstraints).then((stream)=>{\n            audioRef.current.srcObject = stream;\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            recorder.ondataavailable = (event)=>{\n                if (event.data.size > 0) {\n                    setRecordedChunks((prev)=>[\n                            ...prev,\n                            event.data\n                        ]);\n                }\n            };\n            recorder.onstop = ()=>{\n                if (recordedChunks.length === 0) {\n                    (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.toast)({\n                        title: \"No recording to save\",\n                        description: \"You did not record any audio.\",\n                        status: \"warning\",\n                        duration: 2000,\n                        isClosable: true\n                    });\n                }\n            };\n        }).catch((error)=>{\n            console.error(\"Error accessing media devices.\", error);\n            (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.toast)({\n                title: \"Error accessing media devices\",\n                description: \"Unable to access microphone. Please check permissions.\",\n                status: \"error\",\n                duration: 2000,\n                isClosable: true\n            });\n        });\n        // Cleanup on unmount\n        return ()=>{\n            mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.stop();\n            recordedChunks.forEach((chunk)=>URL.revokeObjectURL(chunk));\n            ws.close();\n        };\n    }, [\n        name,\n        roomID\n    ]);\n    const toggleMute = ()=>{\n        const audioTrack = audioRef.current.srcObject.getAudioTracks()[0];\n        audioTrack.enabled = !isMuted;\n        setIsMuted(!isMuted);\n    };\n    const startRecording = ()=>{\n        setRecordedChunks([]);\n        mediaRecorder.start();\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        mediaRecorder.stop();\n        setRecording(false);\n    };\n    const saveRecording = ()=>{\n        const blob = new Blob(recordedChunks, {\n            type: \"audio/webm\"\n        });\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement(\"a\");\n        a.href = url;\n        a.download = \"recording_\".concat(new Date().toISOString(), \".webm\");\n        document.body.appendChild(a);\n        a.click();\n        setTimeout(()=>{\n            document.body.removeChild(a);\n            window.URL.revokeObjectURL(url);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        align: \"center\",\n        p: 5,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Room: \",\n                    roomID\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 121,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Welcome \",\n                    name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    \"User count: \",\n                    userCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 123,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                spacing: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: toggleMute,\n                        children: isMuted ? \"Unmute\" : \"Mute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: recording ? stopRecording : startRecording,\n                        children: recording ? \"Stop Recording\" : \"Start Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: saveRecording,\n                        disabled: recordedChunks.length === 0,\n                        children: \"Save Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                mt: 10,\n                children: [\n                    Array.from({\n                        length: userCount\n                    }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            p: 25,\n                            shadow: \"md\",\n                            borderWidth: \"1px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        name: \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        colorScheme: \"blue\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Leave Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 144,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 134,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"AtTxMHTgkX95CLoHfpxrn+KJ0Gc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEtBQUs7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFJL0UsOERBQUNuRCxvREFBTUE7Z0JBQUNpRyxJQUFJOztvQkFDWEMsTUFBTUMsSUFBSSxDQUFDO3dCQUFFaEQsUUFBUXRDO29CQUFVLEdBQUd1RixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQ2pDLDhEQUFDeEcsaURBQUdBOzRCQUFhOEYsR0FBRzs0QkFBSVcsUUFBTzs0QkFBS0MsYUFBWTtzQ0FDOUMsNEVBQUNyRyxvREFBTUE7O2tEQUNMLDhEQUFDQyxvREFBTUE7d0NBQUNLLE1BQU0sUUFBa0IsT0FBVjZGLFFBQVE7Ozs7OztrREFDOUIsOERBQUNwRyxrREFBSUE7a0RBQUUsUUFBa0IsT0FBVm9HLFFBQVE7Ozs7Ozs7Ozs7OzsyQkFIakJBOzs7OztrQ0FPWiw4REFBQ2pHLG9EQUFNQTs7Ozs7a0NBQ1QsOERBQUNOLG9EQUFNQTt3QkFBQzBHLGFBQVk7d0JBQU9WLFNBQVMsSUFBTXZGLE9BQU9pQixJQUFJLENBQUM7a0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRTtHQXZJd0JsQjs7UUFDUFYsa0RBQVNBOzs7S0FERlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgVlN0YWNrLFxyXG4gIEhlYWRpbmcsXHJcbiAgVGV4dCxcclxuICBIU3RhY2ssXHJcbiAgQXZhdGFyLFxyXG4gIFNwYWNlcixcclxuICB0b2FzdFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG5hbWUsIHJvb21JRCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW3VzZXJDb3VudCwgc2V0VXNlckNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttZWRpYVJlY29yZGVyLCBzZXRNZWRpYVJlY29yZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZWNvcmRlZENodW5rcywgc2V0UmVjb3JkZWRDaHVua3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWNvcmRpbmcsIHNldFJlY29yZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTXV0ZWQsIHNldElzTXV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKHJlY29yZGVkQ2h1bmtzKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb29tSUQgfHwgIW5hbWUpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldChgd3M6Ly9sb2NhbGhvc3Q6ODA4MC93cz9yb29tSUQ9JHtlbmNvZGVVUklDb21wb25lbnQocm9vbUlEKX1gKTtcclxuICAgIHdzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuZGF0YSlcclxuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VzZXJDb3VudCcpIHtcclxuICAgICAgICBzZXRVc2VyQ291bnQoZGF0YS5jb3VudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWVkaWFDb25zdHJhaW50cyA9IHsgYXVkaW86IHRydWUgfTtcclxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG1lZGlhQ29uc3RyYWludHMpXHJcbiAgICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgYXVkaW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xyXG4gICAgICAgIHNldE1lZGlhUmVjb3JkZXIocmVjb3JkZXIpO1xyXG5cclxuICAgICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC5kYXRhLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlY29yZGVkQ2h1bmtzKHByZXYgPT4gWy4uLnByZXYsIGV2ZW50LmRhdGFdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVjb3JkZWRDaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJObyByZWNvcmRpbmcgdG8gc2F2ZVwiLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdSBkaWQgbm90IHJlY29yZCBhbnkgYXVkaW8uXCIsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgbWVkaWEgZGV2aWNlcy5cIiwgZXJyb3IpO1xyXG4gICAgICAgIHRvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGFjY2Vzc2luZyBtZWRpYSBkZXZpY2VzXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVbmFibGUgdG8gYWNjZXNzIG1pY3JvcGhvbmUuIFBsZWFzZSBjaGVjayBwZXJtaXNzaW9ucy5cIixcclxuICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIENsZWFudXAgb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbWVkaWFSZWNvcmRlcj8uc3RvcCgpO1xyXG4gICAgICByZWNvcmRlZENodW5rcy5mb3JFYWNoKGNodW5rID0+IFVSTC5yZXZva2VPYmplY3RVUkwoY2h1bmspKTtcclxuICAgICAgd3MuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgfSwgW25hbWUsIHJvb21JRF0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVNdXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW9UcmFjayA9IGF1ZGlvUmVmLmN1cnJlbnQuc3JjT2JqZWN0LmdldEF1ZGlvVHJhY2tzKClbMF07XHJcbiAgICBhdWRpb1RyYWNrLmVuYWJsZWQgPSAhaXNNdXRlZDtcclxuICAgIHNldElzTXV0ZWQoIWlzTXV0ZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0UmVjb3JkZWRDaHVua3MoW10pO1xyXG4gICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xyXG4gICAgc2V0UmVjb3JkaW5nKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgIHNldFJlY29yZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihyZWNvcmRlZENodW5rcywgeyB0eXBlOiAnYXVkaW8vd2VibScgfSk7XHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIGEuZG93bmxvYWQgPSBgcmVjb3JkaW5nXyR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfS53ZWJtYDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgc3BhY2luZz17NH0gYWxpZ249XCJjZW50ZXJcIiBwPXs1fT5cclxuICAgIDxIZWFkaW5nPlJvb206IHtyb29tSUR9PC9IZWFkaW5nPlxyXG4gICAgICA8SGVhZGluZz5XZWxjb21lIHtuYW1lfSE8L0hlYWRpbmc+XHJcblx0PFRleHQ+VXNlciBjb3VudDoge3VzZXJDb3VudH08L1RleHQ+XHJcbiAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBhdXRvUGxheSAvPlxyXG4gICAgICA8SFN0YWNrIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlTXV0ZX0+e2lzTXV0ZWQgPyAnVW5tdXRlJyA6ICdNdXRlJ308L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3JlY29yZGluZyA/IHN0b3BSZWNvcmRpbmcgOiBzdGFydFJlY29yZGluZ30+XHJcbiAgICAgICAgICB7cmVjb3JkaW5nID8gJ1N0b3AgUmVjb3JkaW5nJyA6ICdTdGFydCBSZWNvcmRpbmcnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c2F2ZVJlY29yZGluZ30gZGlzYWJsZWQ9e3JlY29yZGVkQ2h1bmtzLmxlbmd0aCA9PT0gMH0+XHJcbiAgICAgICAgICBTYXZlIFJlY29yZGluZ1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0hTdGFjaz5cclxuPFZTdGFjayBtdD17MTB9PlxyXG57QXJyYXkuZnJvbSh7IGxlbmd0aDogdXNlckNvdW50IH0pLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0gcD17MjV9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIj5cclxuICAgICAgICAgICAgPEhTdGFjaz5cclxuICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e2BVc2VyICR7aW5kZXggKyAxfWB9IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e2BVc2VyICR7aW5kZXggKyAxfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICBMZWF2ZSBSb29tXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQm94IiwiQnV0dG9uIiwiVlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJIU3RhY2siLCJBdmF0YXIiLCJTcGFjZXIiLCJ0b2FzdCIsIkNoYXQiLCJyb3V0ZXIiLCJuYW1lIiwicm9vbUlEIiwicXVlcnkiLCJhdWRpb1JlZiIsInVzZXJDb3VudCIsInNldFVzZXJDb3VudCIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwicmVjb3JkZWRDaHVua3MiLCJzZXRSZWNvcmRlZENodW5rcyIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsImlzTXV0ZWQiLCJzZXRJc011dGVkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ3cyIsIldlYlNvY2tldCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJjb3VudCIsIm1lZGlhQ29uc3RyYWludHMiLCJhdWRpbyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwic2l6ZSIsInByZXYiLCJvbnN0b3AiLCJsZW5ndGgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwiY2F0Y2giLCJlcnJvciIsInN0b3AiLCJmb3JFYWNoIiwiY2h1bmsiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJjbG9zZSIsInRvZ2dsZU11dGUiLCJhdWRpb1RyYWNrIiwiZ2V0QXVkaW9UcmFja3MiLCJlbmFibGVkIiwic3RhcnRSZWNvcmRpbmciLCJzdGFydCIsInN0b3BSZWNvcmRpbmciLCJzYXZlUmVjb3JkaW5nIiwiYmxvYiIsIkJsb2IiLCJ1cmwiLCJjcmVhdGVPYmplY3RVUkwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJ3aW5kb3ciLCJzcGFjaW5nIiwiYWxpZ24iLCJwIiwicmVmIiwiYXV0b1BsYXkiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJtdCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIl8iLCJpbmRleCIsInNoYWRvdyIsImJvcmRlcldpZHRoIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n"));

/***/ })

});