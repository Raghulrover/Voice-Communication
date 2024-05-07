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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Chat() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name, roomID } = router.query;\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [userCount, setUserCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mediaRecorder, setMediaRecorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recordedChunks, setRecordedChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!roomID || !name) {\n            router.push(\"/\");\n            return;\n        }\n        const ws = new WebSocket(\"ws://localhost:8080/ws?roomID=\".concat(encodeURIComponent(roomID)));\n        ws.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(event.data);\n            if (data.type === \"userCount\") {\n                setUserCount(data.count);\n            }\n        };\n        const mediaConstraints = {\n            audio: true\n        };\n        navigator.mediaDevices.getUserMedia(mediaConstraints).then((stream)=>{\n            audioRef.current.srcObject = stream;\n            const recorder = new MediaRecorder(stream);\n            setMediaRecorder(recorder);\n            recorder.ondataavailable = (event)=>{\n                if (event.data.size > 0) {\n                    setRecordedChunks((prev)=>[\n                            ...prev,\n                            event.data\n                        ]);\n                }\n            };\n            recorder.onstop = ()=>{\n                console.log(recordedChunks.length);\n                if (recordedChunks.length === 0) {\n                    toast({\n                        title: \"No recording to save\",\n                        description: \"You did not record any audio.\",\n                        status: \"warning\",\n                        duration: 2000,\n                        isClosable: true\n                    });\n                }\n            };\n        }).catch((error)=>{\n            console.error(\"Error accessing media devices.\", error);\n            toast({\n                title: \"Error accessing media devices\",\n                description: \"Unable to access microphone. Please check permissions.\",\n                status: \"error\",\n                duration: 2000,\n                isClosable: true\n            });\n        });\n        // Cleanup on unmount\n        return ()=>{\n            mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.stop();\n            recordedChunks.forEach((chunk)=>URL.revokeObjectURL(chunk));\n            ws.close();\n        };\n    }, [\n        name,\n        roomID\n    ]);\n    const toggleMute = ()=>{\n        const audioTrack = audioRef.current.srcObject.getAudioTracks()[0];\n        audioTrack.enabled = !isMuted;\n        setIsMuted(!isMuted);\n    };\n    const startRecording = ()=>{\n        setRecordedChunks([]);\n        mediaRecorder.start();\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        mediaRecorder.stop();\n        setRecording(false);\n    };\n    const saveRecording = ()=>{\n        const blob = new Blob(recordedChunks, {\n            type: \"audio/webm\"\n        });\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement(\"a\");\n        a.href = url;\n        a.download = \"recording_\".concat(new Date().toISOString(), \".webm\");\n        document.body.appendChild(a);\n        a.click();\n        setTimeout(()=>{\n            document.body.removeChild(a);\n            window.URL.revokeObjectURL(url);\n        }, 100);\n    };\n    console.log(recordedChunks.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        align: \"center\",\n        p: 5,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Room: \",\n                    roomID\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 126,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: [\n                    \"Welcome \",\n                    name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    \"User count: \",\n                    userCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 128,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                spacing: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: toggleMute,\n                        children: isMuted ? \"Unmute\" : \"Mute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: recording ? stopRecording : startRecording,\n                        children: recording ? \"Stop Recording\" : \"Start Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: saveRecording,\n                        disabled: recordedChunks === 0,\n                        children: \"Save Recording\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                mt: 10,\n                children: [\n                    Array.from({\n                        length: userCount\n                    }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            p: 25,\n                            shadow: \"md\",\n                            borderWidth: \"1px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        name: \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: \"User \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        colorScheme: \"blue\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Leave Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                        lineNumber: 149,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n                lineNumber: 139,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\raghu\\\\Desktop\\\\Voice Communication\\\\voice-chat-app\\\\pages\\\\chat.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"5EMCULdf9m4jgmxex/3RqFjVevQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7Ozs7OztrQ0FFbEMsOERBQUNwQixvREFBTUE7d0JBQUNpRyxTQUFTdkI7d0JBQWV3QixVQUFVaEYsbUJBQW1CO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBSXhFLDhEQUFDakIsb0RBQU1BO2dCQUFDa0csSUFBSTs7b0JBQ1hDLE1BQU1DLElBQUksQ0FBQzt3QkFBRWhELFFBQVF2QztvQkFBVSxHQUFHd0YsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUNqQyw4REFBQ3pHLGlEQUFHQTs0QkFBYStGLEdBQUc7NEJBQUlXLFFBQU87NEJBQUtDLGFBQVk7c0NBQzlDLDRFQUFDdEcsb0RBQU1BOztrREFDTCw4REFBQ0Msb0RBQU1BO3dDQUFDSyxNQUFNLFFBQWtCLE9BQVY4RixRQUFROzs7Ozs7a0RBQzlCLDhEQUFDckcsa0RBQUlBO2tEQUFFLFFBQWtCLE9BQVZxRyxRQUFROzs7Ozs7Ozs7Ozs7MkJBSGpCQTs7Ozs7a0NBT1osOERBQUNsRyxvREFBTUE7Ozs7O2tDQUNULDhEQUFDTixvREFBTUE7d0JBQUMyRyxhQUFZO3dCQUFPVixTQUFTLElBQU14RixPQUFPZ0IsSUFBSSxDQUFDO2tDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEU7R0E1SXdCakI7O1FBQ1BWLGtEQUFTQTtRQVFWUyxzREFBUUE7OztLQVRBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBWU3RhY2ssXHJcbiAgSGVhZGluZyxcclxuICBUZXh0LFxyXG4gIEhTdGFjayxcclxuICBBdmF0YXIsXHJcbiAgU3BhY2VyLFxyXG4gIHVzZVRvYXN0XHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbmFtZSwgcm9vbUlEIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbdXNlckNvdW50LCBzZXRVc2VyQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21lZGlhUmVjb3JkZXIsIHNldE1lZGlhUmVjb3JkZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3JlY29yZGVkQ2h1bmtzLCBzZXRSZWNvcmRlZENodW5rc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNdXRlZCwgc2V0SXNNdXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpXHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb29tSUQgfHwgIW5hbWUpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KGB3czovL2xvY2FsaG9zdDo4MDgwL3dzP3Jvb21JRD0ke2VuY29kZVVSSUNvbXBvbmVudChyb29tSUQpfWApO1xyXG4gICAgd3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5kYXRhKVxyXG4gICAgICBpZiAoZGF0YS50eXBlID09PSAndXNlckNvdW50Jykge1xyXG4gICAgICAgIHNldFVzZXJDb3VudChkYXRhLmNvdW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtZWRpYUNvbnN0cmFpbnRzID0geyBhdWRpbzogdHJ1ZSB9O1xyXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEobWVkaWFDb25zdHJhaW50cylcclxuICAgICAgLnRoZW4oc3RyZWFtID0+IHtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XHJcbiAgICAgICAgc2V0TWVkaWFSZWNvcmRlcihyZWNvcmRlcik7XHJcblxyXG4gICAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgc2V0UmVjb3JkZWRDaHVua3MocHJldiA9PiBbLi4ucHJldiwgZXZlbnQuZGF0YV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlY29yZGVkQ2h1bmtzLmxlbmd0aClcclxuICAgICAgICAgIGlmIChyZWNvcmRlZENodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk5vIHJlY29yZGluZyB0byBzYXZlXCIsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiWW91IGRpZCBub3QgcmVjb3JkIGFueSBhdWRpby5cIixcclxuICAgICAgICAgICAgICBzdGF0dXM6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBtZWRpYSBkZXZpY2VzLlwiLCBlcnJvcik7XHJcbiAgICAgICAgdG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3IgYWNjZXNzaW5nIG1lZGlhIGRldmljZXNcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVuYWJsZSB0byBhY2Nlc3MgbWljcm9waG9uZS4gUGxlYXNlIGNoZWNrIHBlcm1pc3Npb25zLlwiLFxyXG4gICAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gQ2xlYW51cCBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtZWRpYVJlY29yZGVyPy5zdG9wKCk7XHJcbiAgICAgIHJlY29yZGVkQ2h1bmtzLmZvckVhY2goY2h1bmsgPT4gVVJMLnJldm9rZU9iamVjdFVSTChjaHVuaykpO1xyXG4gICAgICB3cy5jbG9zZSgpO1xyXG4gICAgfTtcclxuICB9LCBbbmFtZSwgcm9vbUlEXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU11dGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhdWRpb1RyYWNrID0gYXVkaW9SZWYuY3VycmVudC5zcmNPYmplY3QuZ2V0QXVkaW9UcmFja3MoKVswXTtcclxuICAgIGF1ZGlvVHJhY2suZW5hYmxlZCA9ICFpc011dGVkO1xyXG4gICAgc2V0SXNNdXRlZCghaXNNdXRlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRSZWNvcmRlZENodW5rcyhbXSk7XHJcbiAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XHJcbiAgICBzZXRSZWNvcmRpbmcodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpID0+IHtcclxuICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xyXG4gICAgc2V0UmVjb3JkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlUmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKHJlY29yZGVkQ2h1bmtzLCB7IHR5cGU6ICdhdWRpby93ZWJtJyB9KTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5ocmVmID0gdXJsO1xyXG4gICAgYS5kb3dubG9hZCA9IGByZWNvcmRpbmdfJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LndlYm1gO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgIGEuY2xpY2soKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhyZWNvcmRlZENodW5rcy5sZW5ndGgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPVwiY2VudGVyXCIgcD17NX0+XHJcbiAgICA8SGVhZGluZz5Sb29tOiB7cm9vbUlEfTwvSGVhZGluZz5cclxuICAgICAgPEhlYWRpbmc+V2VsY29tZSB7bmFtZX0hPC9IZWFkaW5nPlxyXG5cdDxUZXh0PlVzZXIgY291bnQ6IHt1c2VyQ291bnR9PC9UZXh0PlxyXG4gICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gYXV0b1BsYXkgLz5cclxuICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fT5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU11dGV9Pntpc011dGVkID8gJ1VubXV0ZScgOiAnTXV0ZSd9PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZWNvcmRpbmcgPyBzdG9wUmVjb3JkaW5nIDogc3RhcnRSZWNvcmRpbmd9PlxyXG4gICAgICAgICAge3JlY29yZGluZyA/ICdTdG9wIFJlY29yZGluZycgOiAnU3RhcnQgUmVjb3JkaW5nJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NhdmVSZWNvcmRpbmd9IGRpc2FibGVkPXtyZWNvcmRlZENodW5rcyA9PT0gMH0+XHJcbiAgICAgICAgICBTYXZlIFJlY29yZGluZ1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0hTdGFjaz5cclxuPFZTdGFjayBtdD17MTB9PlxyXG57QXJyYXkuZnJvbSh7IGxlbmd0aDogdXNlckNvdW50IH0pLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0gcD17MjV9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIj5cclxuICAgICAgICAgICAgPEhTdGFjaz5cclxuICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e2BVc2VyICR7aW5kZXggKyAxfWB9IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e2BVc2VyICR7aW5kZXggKyAxfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICBMZWF2ZSBSb29tXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQm94IiwiQnV0dG9uIiwiVlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJIU3RhY2siLCJBdmF0YXIiLCJTcGFjZXIiLCJ1c2VUb2FzdCIsIkNoYXQiLCJyb3V0ZXIiLCJuYW1lIiwicm9vbUlEIiwicXVlcnkiLCJhdWRpb1JlZiIsInVzZXJDb3VudCIsInNldFVzZXJDb3VudCIsIm1lZGlhUmVjb3JkZXIiLCJzZXRNZWRpYVJlY29yZGVyIiwicmVjb3JkZWRDaHVua3MiLCJzZXRSZWNvcmRlZENodW5rcyIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsImlzTXV0ZWQiLCJzZXRJc011dGVkIiwidG9hc3QiLCJwdXNoIiwid3MiLCJXZWJTb2NrZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImNvdW50IiwibWVkaWFDb25zdHJhaW50cyIsImF1ZGlvIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJyZWNvcmRlciIsIk1lZGlhUmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJzaXplIiwicHJldiIsIm9uc3RvcCIsImxlbmd0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJjYXRjaCIsImVycm9yIiwic3RvcCIsImZvckVhY2giLCJjaHVuayIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNsb3NlIiwidG9nZ2xlTXV0ZSIsImF1ZGlvVHJhY2siLCJnZXRBdWRpb1RyYWNrcyIsImVuYWJsZWQiLCJzdGFydFJlY29yZGluZyIsInN0YXJ0Iiwic3RvcFJlY29yZGluZyIsInNhdmVSZWNvcmRpbmciLCJibG9iIiwiQmxvYiIsInVybCIsImNyZWF0ZU9iamVjdFVSTCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIndpbmRvdyIsInNwYWNpbmciLCJhbGlnbiIsInAiLCJyZWYiLCJhdXRvUGxheSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm10IiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiXyIsImluZGV4Iiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJjb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n"));

/***/ })

});