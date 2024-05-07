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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Chat() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name, roomID } = router.query;\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [userCount, setUserCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedChunks, setRecordedChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!roomID || !name) {\n            router.push(\"/\");\n            return;\n        }\n        const ws = new WebSocket(\"ws://localhost:8080/ws?roomID=\".concat(encodeURIComponent(roomID)));\n        ws.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(event.data);\n            if (data.type === \"userCount\") {\n                setUserCount(data.count);\n            }\n        };\n        const mediaConstraints = {\n            audio: true\n        };\n        navigator.mediaDevices.getUserMedia(mediaConstraints).then((stream)=>{\n            audioRef.current.srcObject = stream;\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            recorder.ondataavailable = (event)=>{\n                if (event.data.size > 0) {\n                    setRecordedChunks((prev)=>[\n                            ...prev,\n                            event.data\n                        ]);\n                }\n            };\n            recorder.onstop = ()=>{\n                console.log(recordedChunks.length);\n            // if (recordedChunks.length === 0) {\n            //   toast({\n            //     title: \"No recording to save\",\n            //     description: \"You did not record any audio.\",\n            //     status: \"warning\",\n            //     duration: 2000,\n            //     isClosable: true,\n            //   });\n            // }\n            };\n        }).catch((error)=>{\n            console.error(\"Error accessing media devices.\", error);\n            toast({\n                title: \"Error accessing media devices\",\n                description: \"Unable to access microphone. Please check permissions.\",\n                status: \"error\",\n                duration: 2000,\n                isClosable: true\n            });\n        });\n        // Cleanup on unmount\n        return ()=>{\n            mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.stop();\n            recordedChunks.forEach((chunk)=>URL.revokeObjectURL(chunk));\n            ws.close();\n        };\n    }, [\n        name,\n        roomID\n    ]);\n    const toggleMute = ()=>{\n        const audioTrack = audioRef.current.srcObject.getAudioTracks()[0];\n        audioTrack.enabled = isMuted;\n        setIsMuted(!isMuted);\n    };\n    const startRecording = ()=>{\n        setRecordedChunks([]);\n        mediaRecorder.start();\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        mediaRecorder.stop();\n        setRecording(false);\n    };\n    const saveRecording = ()=>{\n        const blob = new Blob(recordedChunks, {\n            type: \"audio/webm\"\n        });\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement(\"a\");\n        a.href = url;\n        a.download = \"recording_\".concat(new Date().toISOString(), \".webm\");\n        document.body.appendChild(a);\n        a.click();\n        setTimeout(()=>{\n            document.body.removeChild(a);\n            window.URL.revokeObjectURL(url);\n        }, 100);\n    };\n    console.log(recordedChunks.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        align: \"center\",\n        p: 5,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Room: \",\n                    roomID\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 126,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Welcome \",\n                    name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    \"User count: \",\n                    userCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 128,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                spacing: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: toggleMute,\n                        children: isMuted ? \"Unmute\" : \"Mute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: recording ? stopRecording : startRecording,\n                        children: recording ? \"Stop Recording\" : \"Start Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: saveRecording,\n                        disabled: recordedChunks === 0,\n                        children: \"Save Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                mt: 10,\n                children: [\n                    Array.from({\n                        length: userCount\n                    }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            p: 25,\n                            shadow: \"md\",\n                            borderWidth: \"1px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        name: \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        colorScheme: \"blue\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Leave Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 149,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 139,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"5EMCULdf9m4jgmxex/3RqFjVevQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BCLG9EQUFNQTt3QkFBQ2lHLFNBQVN2Qjt3QkFBZXdCLFVBQVVoRixtQkFBbUI7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFJeEUsOERBQUNqQixvREFBTUE7Z0JBQUNrRyxJQUFJOztvQkFDWEMsTUFBTUMsSUFBSSxDQUFDO3dCQUFFaEQsUUFBUXZDO29CQUFVLEdBQUd3RixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQ2pDLDhEQUFDekcsaURBQUdBOzRCQUFhK0YsR0FBRzs0QkFBSVcsUUFBTzs0QkFBS0MsYUFBWTtzQ0FDOUMsNEVBQUN0RyxvREFBTUE7O2tEQUNMLDhEQUFDQyxvREFBTUE7d0NBQUNLLE1BQU0sUUFBa0IsT0FBVjhGLFFBQVE7Ozs7OztrREFDOUIsOERBQUNyRyxrREFBSUE7a0RBQUUsUUFBa0IsT0FBVnFHLFFBQVE7Ozs7Ozs7Ozs7OzsyQkFIakJBOzs7OztrQ0FPWiw4REFBQ2xHLG9EQUFNQTs7Ozs7a0NBQ1QsOERBQUNOLG9EQUFNQTt3QkFBQzJHLGFBQVk7d0JBQU9WLFNBQVMsSUFBTXhGLE9BQU9nQixJQUFJLENBQUM7a0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRTtHQTVJd0JqQjs7UUFDUFYsa0RBQVNBO1FBUVZTLHNEQUFRQTs7O0tBVEFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIFZTdGFjayxcclxuICBIZWFkaW5nLFxyXG4gIFRleHQsXHJcbiAgSFN0YWNrLFxyXG4gIEF2YXRhcixcclxuICBTcGFjZXIsXHJcbiAgdXNlVG9hc3RcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBuYW1lLCByb29tSUQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFt1c2VyQ291bnQsIHNldFVzZXJDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbWVkaWFSZWNvcmRlciwgc2V0TWVkaWFSZWNvcmRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcmVjb3JkZWRDaHVua3MsIHNldFJlY29yZGVkQ2h1bmtzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVjb3JkaW5nLCBzZXRSZWNvcmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc011dGVkLCBzZXRJc011dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJvb21JRCB8fCAhbmFtZSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vbG9jYWxob3N0OjgwODAvd3M/cm9vbUlEPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJvb21JRCl9YCk7XHJcbiAgICB3cy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpXHJcbiAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd1c2VyQ291bnQnKSB7XHJcbiAgICAgICAgc2V0VXNlckNvdW50KGRhdGEuY291bnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1lZGlhQ29uc3RyYWludHMgPSB7IGF1ZGlvOiB0cnVlIH07XHJcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShtZWRpYUNvbnN0cmFpbnRzKVxyXG4gICAgICAudGhlbihzdHJlYW0gPT4ge1xyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcclxuICAgICAgICBzZXRNZWRpYVJlY29yZGVyKHJlY29yZGVyKTtcclxuXHJcbiAgICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBzZXRSZWNvcmRlZENodW5rcyhwcmV2ID0+IFsuLi5wcmV2LCBldmVudC5kYXRhXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVjb3JkZWRDaHVua3MubGVuZ3RoKVxyXG4gICAgICAgICAgLy8gaWYgKHJlY29yZGVkQ2h1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gICB0b2FzdCh7XHJcbiAgICAgICAgICAvLyAgICAgdGl0bGU6IFwiTm8gcmVjb3JkaW5nIHRvIHNhdmVcIixcclxuICAgICAgICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCJZb3UgZGlkIG5vdCByZWNvcmQgYW55IGF1ZGlvLlwiLFxyXG4gICAgICAgICAgLy8gICAgIHN0YXR1czogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAvLyAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAvLyAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXNzaW5nIG1lZGlhIGRldmljZXMuXCIsIGVycm9yKTtcclxuICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvciBhY2Nlc3NpbmcgbWVkaWEgZGV2aWNlc1wiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVW5hYmxlIHRvIGFjY2VzcyBtaWNyb3Bob25lLiBQbGVhc2UgY2hlY2sgcGVybWlzc2lvbnMuXCIsXHJcbiAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBDbGVhbnVwIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG1lZGlhUmVjb3JkZXI/LnN0b3AoKTtcclxuICAgICAgcmVjb3JkZWRDaHVua3MuZm9yRWFjaChjaHVuayA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGNodW5rKSk7XHJcbiAgICAgIHdzLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtuYW1lLCByb29tSURdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTXV0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGF1ZGlvVHJhY2sgPSBhdWRpb1JlZi5jdXJyZW50LnNyY09iamVjdC5nZXRBdWRpb1RyYWNrcygpWzBdO1xyXG4gICAgYXVkaW9UcmFjay5lbmFibGVkID0gaXNNdXRlZDtcclxuICAgIHNldElzTXV0ZWQoIWlzTXV0ZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0UmVjb3JkZWRDaHVua3MoW10pO1xyXG4gICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xyXG4gICAgc2V0UmVjb3JkaW5nKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgIHNldFJlY29yZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihyZWNvcmRlZENodW5rcywgeyB0eXBlOiAnYXVkaW8vd2VibScgfSk7XHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIGEuZG93bmxvYWQgPSBgcmVjb3JkaW5nXyR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfS53ZWJtYDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVjb3JkZWRDaHVua3MubGVuZ3RoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj1cImNlbnRlclwiIHA9ezV9PlxyXG4gICAgPEhlYWRpbmc+Um9vbToge3Jvb21JRH08L0hlYWRpbmc+XHJcbiAgICAgIDxIZWFkaW5nPldlbGNvbWUge25hbWV9ITwvSGVhZGluZz5cclxuXHQ8VGV4dD5Vc2VyIGNvdW50OiB7dXNlckNvdW50fTwvVGV4dD5cclxuICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IGF1dG9QbGF5IC8+XHJcbiAgICAgIDxIU3RhY2sgc3BhY2luZz17NH0+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNdXRlfT57aXNNdXRlZCA/ICdVbm11dGUnIDogJ011dGUnfTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17cmVjb3JkaW5nID8gc3RvcFJlY29yZGluZyA6IHN0YXJ0UmVjb3JkaW5nfT5cclxuICAgICAgICAgIHtyZWNvcmRpbmcgPyAnU3RvcCBSZWNvcmRpbmcnIDogJ1N0YXJ0IFJlY29yZGluZyd9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzYXZlUmVjb3JkaW5nfSBkaXNhYmxlZD17cmVjb3JkZWRDaHVua3MgPT09IDB9PlxyXG4gICAgICAgICAgU2F2ZSBSZWNvcmRpbmdcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9IU3RhY2s+XHJcbjxWU3RhY2sgbXQ9ezEwfT5cclxue0FycmF5LmZyb20oeyBsZW5ndGg6IHVzZXJDb3VudCB9KS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHA9ezI1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XHJcbiAgICAgICAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtgVXNlciAke2luZGV4ICsgMX1gfSAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0PntgVXNlciAke2luZGV4ICsgMX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgTGVhdmUgUm9vbVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkJveCIsIkJ1dHRvbiIsIlZTdGFjayIsIkhlYWRpbmciLCJUZXh0IiwiSFN0YWNrIiwiQXZhdGFyIiwiU3BhY2VyIiwidXNlVG9hc3QiLCJDaGF0Iiwicm91dGVyIiwibmFtZSIsInJvb21JRCIsInF1ZXJ5IiwiYXVkaW9SZWYiLCJ1c2VyQ291bnQiLCJzZXRVc2VyQ291bnQiLCJtZWRpYVJlY29yZGVyIiwic2V0TWVkaWFSZWNvcmRlciIsInJlY29yZGVkQ2h1bmtzIiwic2V0UmVjb3JkZWRDaHVua3MiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJpc011dGVkIiwic2V0SXNNdXRlZCIsInRvYXN0IiwicHVzaCIsIndzIiwiV2ViU29ja2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib25tZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJjb3VudCIsIm1lZGlhQ29uc3RyYWludHMiLCJhdWRpbyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwicmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwic2l6ZSIsInByZXYiLCJvbnN0b3AiLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsInN0b3AiLCJmb3JFYWNoIiwiY2h1bmsiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJjbG9zZSIsInRvZ2dsZU11dGUiLCJhdWRpb1RyYWNrIiwiZ2V0QXVkaW9UcmFja3MiLCJlbmFibGVkIiwic3RhcnRSZWNvcmRpbmciLCJzdGFydCIsInN0b3BSZWNvcmRpbmciLCJzYXZlUmVjb3JkaW5nIiwiYmxvYiIsIkJsb2IiLCJ1cmwiLCJjcmVhdGVPYmplY3RVUkwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJ3aW5kb3ciLCJzcGFjaW5nIiwiYWxpZ24iLCJwIiwicmVmIiwiYXV0b1BsYXkiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJtdCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIl8iLCJpbmRleCIsInNoYWRvdyIsImJvcmRlcldpZHRoIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n"));

/***/ })

});