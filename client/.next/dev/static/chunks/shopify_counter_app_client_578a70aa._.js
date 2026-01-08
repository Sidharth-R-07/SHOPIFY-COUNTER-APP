(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopify_counter_app/client/app/providers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$AppProvider$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../styles/globals.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$AppProvider$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/shopify_counter_app/client/app/providers.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/components/timers/TimerTable.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimerTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function TimerTable({ timers = [], onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full divide-y divide-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                children: "Timer"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                children: "Start"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                children: "End"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-right text-sm font-semibold text-gray-700",
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: timers.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-800",
                                    children: t.timerName
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-600",
                                    children: t.promotionDescription || "—"
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-600",
                                    children: t.startDateTime
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-600",
                                    children: t.endDateTime
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${t.status === "active" ? "bg-green-100 text-green-800" : t.status === "scheduled" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`,
                                        children: t.status?.charAt(0).toUpperCase() + (t.status?.slice(1) || "")
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-right table-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "edit mr-2",
                                            onClick: ()=>onEdit(t),
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "delete",
                                            onClick: ()=>onDelete(t),
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t.id || t._id, true, {
                            fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shopify_counter_app/client/components/timers/TimerTable.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TimerTable;
var _c;
__turbopack_context__.k.register(_c, "TimerTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ColorPicker = ({ value, onChange })=>{
    _s();
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hue, setHue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120);
    const [saturation, setSaturation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [lightness, setLightness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorPicker.useEffect": ()=>{
            if (value && value.startsWith("#")) {
                const rgb = hexToRgb(value);
                if (rgb) {
                    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
                    setHue(hsl.h);
                    setSaturation(hsl.s);
                    setLightness(hsl.l);
                }
            }
        }
    }["ColorPicker.useEffect"], [
        value
    ]);
    const hexToRgb = (hex)=>{
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };
    const rgbToHsl = (r, g, b)=>{
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r:
                    h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                    break;
                case g:
                    h = ((b - r) / d + 2) / 6;
                    break;
                case b:
                    h = ((r - g) / d + 4) / 6;
                    break;
            }
        }
        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    };
    const hslToHex = (h, s, l)=>{
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n)=>{
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, "0");
        };
        return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
    };
    const handleHueChange = (e)=>{
        const newHue = parseInt(e.target.value);
        setHue(newHue);
        onChange(hslToHex(newHue, saturation, lightness));
    };
    const handleSaturationLightnessChange = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newSat = Math.round(x / rect.width * 100);
        const newLight = Math.round((1 - y / rect.height) * 100);
        setSaturation(newSat);
        setLightness(newLight);
        onChange(hslToHex(hue, newSat, newLight));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "8px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setShowPicker(!showPicker),
                style: {
                    width: "100%",
                    height: "40px",
                    backgroundColor: value || "#00FF00",
                    border: "1px solid #c4cdd5",
                    borderRadius: "4px",
                    cursor: "pointer"
                }
            }, void 0, false, {
                fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "8px",
                    padding: "12px",
                    border: "1px solid #c4cdd5",
                    borderRadius: "4px",
                    backgroundColor: "white"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: "150px",
                            background: `linear-gradient(to bottom, white, black), linear-gradient(to right, white, hsl(${hue}, 100%, 50%))`,
                            backgroundBlendMode: "multiply",
                            position: "relative",
                            cursor: "crosshair",
                            borderRadius: "4px"
                        },
                        onMouseDown: handleSaturationLightnessChange,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: `${saturation}%`,
                                top: `${100 - lightness}%`,
                                width: "12px",
                                height: "12px",
                                border: "2px solid white",
                                borderRadius: "50%",
                                transform: "translate(-50%, -50%)",
                                boxShadow: "0 0 0 1px black"
                            }
                        }, void 0, false, {
                            fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "12px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: "0",
                            max: "360",
                            value: hue,
                            onChange: handleHueChange,
                            style: {
                                width: "100%",
                                background: "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ColorPicker, "0pbC9eX1dOOKr7HK8/LZEsJDCLc=");
_c = ColorPicker;
const __TURBOPACK__default__export__ = ColorPicker;
var _c;
__turbopack_context__.k.register(_c, "ColorPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/utils/dateUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineDateTime",
    ()=>combineDateTime,
    "formatDateForInput",
    ()=>formatDateForInput,
    "formatDateTime",
    ()=>formatDateTime,
    "formatTimeForInput",
    ()=>formatTimeForInput
]);
const formatDateTime = (dateTime)=>{
    if (!dateTime) return "";
    const date = new Date(dateTime);
    return date.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};
const formatDateForInput = (dateTime)=>{
    if (!dateTime) return "";
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
};
const formatTimeForInput = (dateTime)=>{
    if (!dateTime) return "";
    const date = new Date(dateTime);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};
const combineDateTime = (dateStr, timeStr)=>{
    if (!dateStr || !timeStr) return null;
    const [month, day, year] = dateStr.split("/");
    const [hours, minutes] = timeStr.split(":");
    return new Date(year, month - 1, day, hours, minutes).toISOString();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/components/timers/TimerModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Select/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$ColorPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/components/timers/ColorPicker.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/utils/dateUtils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const TimerModal = ({ active, timer, onClose, onSave })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        timerName: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        promotionDescription: "",
        timerColor: "#00FF00",
        timerSize: "Medium",
        timerPosition: "Top",
        urgencyNotification: "Color pulse",
        isActive: true
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimerModal.useEffect": ()=>{
            if (timer) {
                setFormData({
                    timerName: timer.timerName || "",
                    startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateForInput"])(timer.startDateTime),
                    startTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeForInput"])(timer.startDateTime),
                    endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateForInput"])(timer.endDateTime),
                    endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeForInput"])(timer.endDateTime),
                    promotionDescription: timer.promotionDescription || "",
                    timerColor: timer.timerColor || "#00FF00",
                    timerSize: timer.timerSize || "Medium",
                    timerPosition: timer.timerPosition || "Top",
                    urgencyNotification: timer.urgencyNotification || "Color pulse",
                    isActive: timer.isActive !== undefined ? timer.isActive : true
                });
            } else {
                setFormData({
                    timerName: "",
                    startDate: "",
                    startTime: "",
                    endDate: "",
                    endTime: "",
                    promotionDescription: "",
                    timerColor: "#00FF00",
                    timerSize: "Medium",
                    timerPosition: "Top",
                    urgencyNotification: "Color pulse",
                    isActive: true
                });
            }
        }
    }["TimerModal.useEffect"], [
        timer
    ]);
    const validate = ()=>{
        const newErrors = {};
        if (!formData.timerName.trim()) newErrors.timerName = "Timer name is required";
        if (!formData.startDate) newErrors.startDate = "Start date is required";
        if (!formData.startTime) newErrors.startTime = "Start time is required";
        if (!formData.endDate) newErrors.endDate = "End date is required";
        if (!formData.endTime) newErrors.endTime = "End time is required";
        if (formData.startDate && formData.startTime && formData.endDate && formData.endTime) {
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineDateTime"])(formData.startDate, formData.startTime);
            const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineDateTime"])(formData.endDate, formData.endTime);
            if (new Date(start) >= new Date(end)) {
                newErrors.endDate = "End must be after start";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async ()=>{
        if (!validate()) return;
        setLoading(true);
        try {
            const payload = {
                timerName: formData.timerName,
                startDateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineDateTime"])(formData.startDate, formData.startTime),
                endDateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineDateTime"])(formData.endDate, formData.endTime),
                promotionDescription: formData.promotionDescription,
                timerColor: formData.timerColor,
                timerSize: formData.timerSize,
                timerPosition: formData.timerPosition,
                urgencyNotification: formData.urgencyNotification,
                isActive: formData.isActive
            };
            await onSave(payload);
            onClose();
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: active,
        onClose: onClose,
        title: timer ? "Edit Timer" : "Create New Timer",
        primaryAction: {
            content: timer ? "Update timer" : "Create timer",
            onAction: handleSubmit,
            loading
        },
        secondaryActions: [
            {
                content: "Cancel",
                onAction: onClose
            }
        ],
        large: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].Section, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Timer name"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                value: formData.timerName,
                                onChange: (value)=>setFormData({
                                        ...formData,
                                        timerName: value
                                    }),
                                placeholder: "Enter timer name",
                                error: errors.timerName
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Start date"
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                        value: formData.startDate,
                                        onChange: (value)=>setFormData({
                                                ...formData,
                                                startDate: value
                                            }),
                                        placeholder: "MM/DD/YYYY",
                                        error: errors.startDate
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Start time"
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                        value: formData.startTime,
                                        onChange: (value)=>setFormData({
                                                ...formData,
                                                startTime: value
                                            }),
                                        placeholder: "HH:MM",
                                        error: errors.startTime
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "End date"
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                        value: formData.endDate,
                                        onChange: (value)=>setFormData({
                                                ...formData,
                                                endDate: value
                                            }),
                                        placeholder: "MM/DD/YYYY",
                                        error: errors.endDate
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "End time"
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                        value: formData.endTime,
                                        onChange: (value)=>setFormData({
                                                ...formData,
                                                endTime: value
                                            }),
                                        placeholder: "HH:MM",
                                        error: errors.endTime
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Promotion description"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                value: formData.promotionDescription,
                                onChange: (value)=>setFormData({
                                        ...formData,
                                        promotionDescription: value
                                    }),
                                multiline: 4,
                                placeholder: "Enter promotion details"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Timer color"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$ColorPicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: formData.timerColor,
                                    onChange: (c)=>setFormData({
                                            ...formData,
                                            timerColor: c
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Timer size"
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        options: [
                                            {
                                                label: "Small",
                                                value: "Small"
                                            },
                                            {
                                                label: "Medium",
                                                value: "Medium"
                                            },
                                            {
                                                label: "Large",
                                                value: "Large"
                                            }
                                        ],
                                        value: formData.timerSize,
                                        onChange: (v)=>setFormData({
                                                ...formData,
                                                timerSize: v
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Timer position"
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        options: [
                                            {
                                                label: "Top",
                                                value: "Top"
                                            },
                                            {
                                                label: "Below Title",
                                                value: "Below Title"
                                            },
                                            {
                                                label: "Above Buy Button",
                                                value: "Above Buy Button"
                                            }
                                        ],
                                        value: formData.timerPosition,
                                        onChange: (v)=>setFormData({
                                                ...formData,
                                                timerPosition: v
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Urgency notification"
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                options: [
                                    {
                                        label: "None",
                                        value: "None"
                                    },
                                    {
                                        label: "Color pulse",
                                        value: "Color pulse"
                                    },
                                    {
                                        label: "Blink",
                                        value: "Blink"
                                    },
                                    {
                                        label: "Shake",
                                        value: "Shake"
                                    }
                                ],
                                value: formData.urgencyNotification,
                                onChange: (v)=>setFormData({
                                        ...formData,
                                        urgencyNotification: v
                                    })
                            }, void 0, false, {
                                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopify_counter_app/client/components/timers/TimerModal.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TimerModal, "sRlqRcso85c9U8+g6wJnwLrkXds=");
_c = TimerModal;
const __TURBOPACK__default__export__ = TimerModal;
var _c;
__turbopack_context__.k.register(_c, "TimerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/components/timers/DeleteTimerModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteTimerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-client] (ecmascript)");
;
;
;
function DeleteTimerModal({ open, timer, onClose, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: open,
        onClose: onClose,
        title: "Delete timer",
        primaryAction: {
            content: "Delete",
            destructive: true,
            onAction: onDelete
        },
        secondaryActions: [
            {
                content: "Cancel",
                onAction: onClose
            }
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].Section, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Are you sure you want to delete ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: timer?.timerName
                    }, void 0, false, {
                        fileName: "[project]/shopify_counter_app/client/components/timers/DeleteTimerModal.jsx",
                        lineNumber: 19,
                        columnNumber: 43
                    }, this),
                    "? This action cannot be undone."
                ]
            }, void 0, true, {
                fileName: "[project]/shopify_counter_app/client/components/timers/DeleteTimerModal.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/shopify_counter_app/client/components/timers/DeleteTimerModal.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shopify_counter_app/client/components/timers/DeleteTimerModal.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = DeleteTimerModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteTimerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyStateView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function EmptyStateView({ onAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/empty-illustration.svg",
                alt: "Empty",
                className: "mx-auto w-48 h-48 mb-6"
            }, void 0, false, {
                fileName: "[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900 mb-2",
                children: "No timers yet"
            }, void 0, false, {
                fileName: "[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-6",
                children: "Create countdown timers to promote your sales and special offers."
            }, void 0, false, {
                fileName: "[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-primary",
                onClick: onAction,
                children: "Create timer"
            }, void 0, false, {
                fileName: "[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = EmptyStateView;
var _c;
__turbopack_context__.k.register(_c, "EmptyStateView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/components/common/LoadingState.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js [app-client] (ecmascript)");
;
;
;
const LoadingState = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            padding: "40px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
            size: "large"
        }, void 0, false, {
            fileName: "[project]/shopify_counter_app/client/components/common/LoadingState.jsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shopify_counter_app/client/components/common/LoadingState.jsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LoadingState;
const __TURBOPACK__default__export__ = LoadingState;
var _c;
__turbopack_context__.k.register(_c, "LoadingState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/services/timerApi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const API_BASE_URL = "http://localhost:5000";
const timerApi = {
    getAll: async ()=>{
        const response = await fetch(`${API_BASE_URL}/api/timers`);
        if (!response.ok) throw new Error("Failed to fetch timers");
        return response.json();
    },
    getById: async (id)=>{
        const response = await fetch(`${API_BASE_URL}/api/timers/${id}`);
        if (!response.ok) throw new Error("Failed to fetch timer");
        return response.json();
    },
    create: async (data)=>{
        const response = await fetch(`${API_BASE_URL}/api/timers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Failed to create timer");
        return response.json();
    },
    update: async (id, data)=>{
        const response = await fetch(`${API_BASE_URL}/api/timers/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Failed to update timer");
        return response.json();
    },
    delete: async (id)=>{
        const response = await fetch(`${API_BASE_URL}/api/timers/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error("Failed to delete timer");
        return response.json();
    }
};
const __TURBOPACK__default__export__ = timerApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/hooks/useTimers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$services$2f$timerApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/services/timerApi.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTimers = ()=>{
    _s();
    const [timers, setTimers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimers.useCallback[fetchTimers]": async ()=>{
            setLoading(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$services$2f$timerApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAll();
                setTimers(Array.isArray(data) ? data : []);
                setError(null);
            } catch (err) {
                setError("Failed to load timers");
                setTimers([]);
            } finally{
                setLoading(false);
            }
        }
    }["useTimers.useCallback[fetchTimers]"], []);
    const createTimer = async (payload)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$services$2f$timerApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(payload);
        fetchTimers();
    };
    const updateTimer = async (id, payload)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$services$2f$timerApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].update(id, payload);
        fetchTimers();
    };
    const deleteTimer = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$services$2f$timerApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(id);
        fetchTimers();
    };
    return {
        timers,
        loading,
        error,
        fetchTimers,
        createTimer,
        updateTimer,
        deleteTimer
    };
};
_s(useTimers, "mbA+CDv6AZ83ad1yAexDlRmOe1E=");
const __TURBOPACK__default__export__ = useTimers;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shopify_counter_app/client/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/app/providers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$TimerTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/components/timers/TimerTable.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$TimerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/components/timers/TimerModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$DeleteTimerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/components/timers/DeleteTimerModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$common$2f$EmptyStateView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/components/common/EmptyStateView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$common$2f$LoadingState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/components/common/LoadingState.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$hooks$2f$useTimers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/hooks/useTimers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/utils/dateUtils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const { timers = [], loading, fetchTimers, createTimer, updateTimer, deleteTimer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$hooks$2f$useTimers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modalActive, setModalActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTimer, setSelectedTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toastActive, setToastActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deleteModalActive, setDeleteModalActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timerToDelete, setTimerToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCreateTimer = ()=>{
        setSelectedTimer(null);
        setModalActive(true);
    };
    const handleEditTimer = (t)=>{
        setSelectedTimer(t);
        setModalActive(true);
    };
    const handleDeleteClick = (t)=>{
        setTimerToDelete(t);
        setDeleteModalActive(true);
    };
    const handleSaveTimer = async (payload)=>{
        if (selectedTimer) await updateTimer(selectedTimer.id || selectedTimer._id, payload);
        else await createTimer(payload);
        fetchTimers();
        setModalActive(false);
    };
    const handleDeleteConfirm = async ()=>{
        if (!timerToDelete) return;
        await deleteTimer(timerToDelete.id || timerToDelete._id);
        fetchTimers();
        setDeleteModalActive(false);
        setTimerToDelete(null);
    };
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[filtered]": ()=>timers.filter({
                "Home.useMemo[filtered]": (t)=>(t.timerName || "").toLowerCase().includes(searchQuery.toLowerCase())
            }["Home.useMemo[filtered]"])
    }["Home.useMemo[filtered]"], [
        timers,
        searchQuery
    ]);
    const mapped = filtered.map((t)=>({
            ...t,
            startDateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(t.startDateTime),
            endDateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$utils$2f$dateUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(t.endDateTime),
            status: t.startDateTime && t.endDateTime ? new Date() < new Date(t.startDateTime) ? "scheduled" : new Date() <= new Date(t.endDateTime) ? "active" : "expired" : "scheduled"
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$app$2f$providers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto py-8 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: "Countdown Timer Manager"
                                        }, void 0, false, {
                                            fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Create and manage countdown timers for your promotions"
                                        }, void 0, false, {
                                            fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-primary",
                                        onClick: ()=>handleCreateTimer(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: "Create Timer"
                                            }, void 0, false, {
                                                fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-4 py-2 border border-gray-200 rounded-md",
                                        placeholder: "Search timers",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$common$2f$LoadingState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this) : mapped.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$common$2f$EmptyStateView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onAction: ()=>handleCreateTimer()
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$TimerTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    timers: mapped,
                                    onEdit: handleEditTimer,
                                    onDelete: handleDeleteClick
                                }, void 0, false, {
                                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$TimerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    active: modalActive,
                    timer: selectedTimer,
                    onClose: ()=>setModalActive(false),
                    onSave: handleSaveTimer
                }, void 0, false, {
                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$components$2f$timers$2f$DeleteTimerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    open: deleteModalActive,
                    timer: timerToDelete,
                    onClose: ()=>setDeleteModalActive(false),
                    onDelete: handleDeleteConfirm
                }, void 0, false, {
                    fileName: "[project]/shopify_counter_app/client/app/page.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/shopify_counter_app/client/app/page.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shopify_counter_app/client/app/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Home, "FpJIBFx63Lp+EU6z8MYv6eaoIdg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$hooks$2f$useTimers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=shopify_counter_app_client_578a70aa._.js.map