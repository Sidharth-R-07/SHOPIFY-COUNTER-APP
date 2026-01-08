module.exports = [
"[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themeNameDefault",
    ()=>themeNameDefault,
    "themeNameLight",
    ()=>themeNameLight,
    "themeNames",
    ()=>themeNames
]);
var themeNameLight = 'light';
var themeNameDefault = themeNameLight;
var themeNames = [
    themeNameLight,
    'light-mobile',
    'light-high-contrast-experimental',
    'dark-experimental'
];
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayLikeToArray",
    ()=>_arrayLikeToArray,
    "arrayWithHoles",
    ()=>_arrayWithHoles,
    "iterableToArrayLimit",
    ()=>_iterableToArrayLimit,
    "nonIterableRest",
    ()=>_nonIterableRest,
    "slicedToArray",
    ()=>_slicedToArray,
    "taggedTemplateLiteralLoose",
    ()=>_taggedTemplateLiteralLoose,
    "unsupportedIterableToArray",
    ()=>_unsupportedIterableToArray
]);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteralLoose(e, t) {
    return t || (t = e.slice(0)), e.raw = t, e;
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMetaThemeBase",
    ()=>createMetaThemeBase,
    "createVar",
    ()=>createVar,
    "createVarName",
    ()=>createVarName,
    "getMediaConditions",
    ()=>getMediaConditions,
    "getThemeVarNames",
    ()=>getThemeVarNames,
    "getTokenNames",
    ()=>getTokenNames,
    "getUnit",
    ()=>getUnit,
    "rem",
    ()=>rem,
    "toEm",
    ()=>toEm,
    "toPx",
    ()=>toPx,
    "toPxs",
    ()=>toPxs,
    "toRem",
    ()=>toRem,
    "tokenGroupNamesToRems",
    ()=>tokenGroupNamesToRems,
    "tokenGroupToRems",
    ()=>tokenGroupToRems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs [app-ssr] (ecmascript)");
;
var _templateObject;
var BASE_FONT_SIZE = 16;
var UNIT_PX = 'px';
var UNIT_EM = 'em';
var UNIT_REM = 'rem';
// https://regex101.com/r/zvY2bu/1
var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taggedTemplateLiteralLoose"])([
    "-?d+(?:.d+|d*)"
], [
    "-?\\d+(?:\\.\\d+|\\d*)"
]))));
var UNIT_REGEX = new RegExp(UNIT_PX + "|" + UNIT_EM + "|" + UNIT_REM);
function getUnit(value) {
    if (value === void 0) {
        value = '';
    }
    var unit = value.match(new RegExp(DIGIT_REGEX.source + "(" + UNIT_REGEX.source + ")"));
    return unit && unit[1];
}
function toPx(value) {
    if (value === void 0) {
        value = '';
    }
    var unit = getUnit(value);
    if (!unit) return value;
    if (unit === UNIT_PX) {
        return value;
    }
    if (unit === UNIT_EM || unit === UNIT_REM) {
        return "" + parseFloat(value) * BASE_FONT_SIZE + UNIT_PX;
    }
}
function toPxs(value) {
    return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_EM + "|" + UNIT_REM + ")", 'g'), function(emOrRem) {
        var _toPx;
        return (_toPx = toPx(emOrRem)) != null ? _toPx : emOrRem;
    });
}
function toEm(value, fontSize) {
    if (value === void 0) {
        value = '';
    }
    if (fontSize === void 0) {
        fontSize = BASE_FONT_SIZE;
    }
    var unit = getUnit(value);
    if (!unit) return value;
    if (unit === UNIT_EM) {
        return value;
    }
    if (unit === UNIT_PX) {
        return "" + parseFloat(value) / fontSize + UNIT_EM;
    }
    if (unit === UNIT_REM) {
        return "" + parseFloat(value) * BASE_FONT_SIZE / fontSize + UNIT_EM;
    }
}
function toRem(value) {
    if (value === void 0) {
        value = '';
    }
    var unit = getUnit(value);
    if (!unit) return value;
    if (unit === UNIT_REM) {
        return value;
    }
    if (unit === UNIT_EM) {
        return "" + parseFloat(value) + UNIT_REM;
    }
    if (unit === UNIT_PX) {
        return "" + parseFloat(value) / BASE_FONT_SIZE + UNIT_REM;
    }
}
function rem(value) {
    return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_PX + ")", 'g'), function(px) {
        var _toRem;
        return (_toRem = toRem(px)) != null ? _toRem : px;
    });
}
function tokenGroupToRems(metaTokenGroup) {
    return Object.fromEntries(Object.entries(metaTokenGroup).map(function(_ref) {
        var _ref2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slicedToArray"])(_ref, 2), tokenName = _ref2[0], tokenProperties = _ref2[1];
        return [
            tokenName,
            Object.assign(Object.assign({}, tokenProperties), {}, {
                value: rem(tokenProperties.value)
            })
        ];
    }));
}
function createVarName(tokenName) {
    return "--p-" + tokenName;
}
function createVar(tokenName) {
    return "var(" + createVarName(tokenName) + ")";
}
function getTokenNames(theme) {
    return Object.values(theme).flatMap(function(tokenGroup) {
        return Object.keys(tokenGroup);
    });
}
/**
 * Allowed Polaris token custom properties.
 *
 * Result: ['--p-color-bg', '--p-color-text', etc...]
 */ function getThemeVarNames(theme) {
    return getTokenNames(theme).map(createVarName);
}
/**
 * Alias direction used for composing Polaris `breakpoints` utilities.
 */ /**
 * A collection of directional media conditions for a given Polaris `breakpoints` alias.
 */ /**
 * Media conditions for all Polaris `breakpoints` aliases.
 */ function getMediaConditions(breakpoints) {
    var breakpointEntries = Object.entries(breakpoints);
    var lastBreakpointIndex = breakpointEntries.length - 1;
    return Object.fromEntries(breakpointEntries.map(function(entry, index) {
        var _ref3 = entry, _ref4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slicedToArray"])(_ref3, 2), breakpointsTokenName = _ref4[0], breakpoint = _ref4[1];
        var upMediaCondition = getUpMediaCondition(breakpoint);
        var downMediaCondition = getDownMediaCondition(breakpoint);
        var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : upMediaCondition + " and " + getDownMediaCondition(breakpointEntries[index + 1][1]);
        return [
            breakpointsTokenName,
            {
                // Media condition for the current breakpoint and up
                up: upMediaCondition,
                // Media condition for current breakpoint and down
                down: downMediaCondition,
                // Media condition for only the current breakpoint
                only: onlyMediaCondition
            }
        ];
    }));
}
function getUpMediaCondition(breakpoint) {
    return "(min-width: " + toEm(breakpoint) + ")";
}
/**
 * Down media condition breakpoints are being subtracted by 0.04px to prevent
 * them from overwriting up media queries. We experimented with multiple offsets
 * and felt that 0.04px would be the safest across different pixel densities,
 * while being representable in ems with 4 decimal places of precision.
 */ function getDownMediaCondition(breakpoint) {
    var _toPx2;
    var offsetBreakpoint = parseFloat((_toPx2 = toPx(breakpoint)) != null ? _toPx2 : '') - 0.04;
    return "(max-width: " + toEm(offsetBreakpoint + "px") + ")";
}
var tokenGroupNamesToRems = [
    'border',
    'breakpoints',
    'font',
    'height',
    'shadow',
    'space',
    'text',
    'width'
];
/**
 * Mimics the behavior of an identity function:
 * - Validates the input matches the `MetaThemeShape` type exactly
 * - Converts all `px` values to `rem`
 * - Infers all members
 *
 * @example
 * ```
 * const example = createMetaThemeBase({
 *   color: {
 *     bg: {value: '#fff'},
 *   },
 * })
 * ```
 *
 * Where `typeof example` is inferred as `{ color: { bg: { value: string } } }`
 */ function createMetaThemeBase(metaTheme) {
    return Object.fromEntries(Object.entries(metaTheme).map(function(_ref5) {
        var _ref6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slicedToArray"])(_ref5, 2), tokenGroupName = _ref6[0], tokenGroup = _ref6[1];
        return [
            tokenGroupName,
            tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup
        ];
    }));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "size",
    ()=>size
]);
var size = {
    '0': '0px',
    '0165': '0.66px',
    '025': '1px',
    '050': '2px',
    '100': '4px',
    '150': '6px',
    '200': '8px',
    '275': '11px',
    '300': '12px',
    '325': '13px',
    '350': '14px',
    '400': '16px',
    '450': '18px',
    '500': '20px',
    '550': '22px',
    '600': '24px',
    '700': '28px',
    '750': '30px',
    '800': '32px',
    '900': '36px',
    '1000': '40px',
    '1200': '48px',
    '1600': '64px',
    '2000': '80px',
    '2400': '96px',
    '2800': '112px',
    '3200': '128px'
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/border.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "border",
    ()=>border
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs [app-ssr] (ecmascript)");
;
var border = {
    'border-radius-0': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][0]
    },
    'border-radius-050': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['050']
    },
    'border-radius-100': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][100]
    },
    'border-radius-150': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][150]
    },
    'border-radius-200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][200]
    },
    'border-radius-300': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][300]
    },
    'border-radius-400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][400]
    },
    'border-radius-500': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][500]
    },
    'border-radius-750': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][750]
    },
    'border-radius-full': {
        value: '9999px'
    },
    'border-width-0': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['0']
    },
    'border-width-0165': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['0165']
    },
    'border-width-025': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['025']
    },
    'border-width-050': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['050']
    },
    'border-width-100': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][100]
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "breakpoints",
    ()=>breakpoints,
    "breakpointsAliases",
    ()=>breakpointsAliases
]);
// NOTE: Order is important here: smallest -> largest
// Exporting as const means it will be typed as a Tuple instead of string[]
var breakpointsAliases = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
];
// Convert the Tuple to a union
var breakpoints = {
    'breakpoints-xs': {
        value: '0px',
        description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
    },
    'breakpoints-sm': {
        value: '490px',
        description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
    },
    'breakpoints-md': {
        value: '768px',
        description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
    },
    'breakpoints-lg': {
        value: '1040px',
        description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
    },
    'breakpoints-xl': {
        value: '1440px',
        description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/colors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "azure",
    ()=>azure,
    "blackAlpha",
    ()=>blackAlpha,
    "blue",
    ()=>blue,
    "gray",
    ()=>gray,
    "green",
    ()=>green,
    "lime",
    ()=>lime,
    "magenta",
    ()=>magenta,
    "orange",
    ()=>orange,
    "purple",
    ()=>purple,
    "red",
    ()=>red,
    "rose",
    ()=>rose,
    "teal",
    ()=>teal,
    "whiteAlpha",
    ()=>whiteAlpha,
    "yellow",
    ()=>yellow
]);
var gray = {
    1: 'rgba(255, 255, 255, 1)',
    2: 'rgba(253, 253, 253, 1)',
    3: 'rgba(250, 250, 250, 1)',
    4: 'rgba(247, 247, 247, 1)',
    5: 'rgba(243, 243, 243, 1)',
    6: 'rgba(241, 241, 241, 1)',
    7: 'rgba(235, 235, 235, 1)',
    8: 'rgba(227, 227, 227, 1)',
    9: 'rgba(212, 212, 212, 1)',
    10: 'rgba(204, 204, 204, 1)',
    11: 'rgba(181, 181, 181, 1)',
    12: 'rgba(138, 138, 138, 1)',
    13: 'rgba(97, 97, 97, 1)',
    14: 'rgba(74, 74, 74, 1)',
    15: 'rgba(48, 48, 48, 1)',
    16: 'rgba(26, 26, 26, 1)'
};
var azure = {
    '1': 'rgba(251, 253, 255, 1)',
    '2': 'rgba(242, 249, 255, 1)',
    '3': 'rgba(234, 244, 255, 1)',
    '4': 'rgba(224, 240, 255, 1)',
    '5': 'rgba(213, 235, 255, 1)',
    '6': 'rgba(202, 230, 255, 1)',
    '7': 'rgba(192, 225, 255, 1)',
    '8': 'rgba(168, 216, 255, 1)',
    '9': 'rgba(145, 208, 255, 1)',
    '10': 'rgba(81, 192, 255, 1)',
    '11': 'rgba(0, 148, 213, 1)',
    '12': 'rgba(0, 124, 180, 1)',
    '13': 'rgba(0, 103, 155, 1)',
    '14': 'rgba(0, 82, 124, 1)',
    '15': 'rgba(0, 58, 90, 1)',
    '16': 'rgba(0, 33, 51, 1)'
};
var blue = {
    '1': 'rgba(252, 253, 255, 1)',
    '2': 'rgba(246, 248, 255, 1)',
    '3': 'rgba(240, 242, 255, 1)',
    '4': 'rgba(234, 237, 255, 1)',
    '5': 'rgba(226, 231, 255, 1)',
    '6': 'rgba(219, 225, 255, 1)',
    '7': 'rgba(213, 220, 255, 1)',
    '8': 'rgba(197, 208, 255, 1)',
    '9': 'rgba(186, 199, 255, 1)',
    '10': 'rgba(151, 173, 255, 1)',
    '11': 'rgba(65, 136, 255, 1)',
    '12': 'rgba(0, 113, 233, 1)',
    '13': 'rgba(0, 91, 211, 1)',
    '14': 'rgba(0, 66, 153, 1)',
    '15': 'rgba(0, 46, 106, 1)',
    '16': 'rgba(0, 22, 51, 1)'
};
var green = {
    '1': 'rgba(250, 255, 251, 1)',
    '2': 'rgba(230, 254, 234, 1)',
    '3': 'rgba(205, 254, 212, 1)',
    '4': 'rgba(175, 254, 191, 1)',
    '5': 'rgba(146, 252, 172, 1)',
    '6': 'rgba(110, 247, 153, 1)',
    '7': 'rgba(82, 244, 144, 1)',
    '8': 'rgba(44, 237, 131, 1)',
    '9': 'rgba(17, 223, 123, 1)',
    '10': 'rgba(24, 191, 121, 1)',
    '11': 'rgba(13, 156, 106, 1)',
    '12': 'rgba(4, 123, 93, 1)',
    '13': 'rgba(3, 94, 76, 1)',
    '14': 'rgba(1, 75, 64, 1)',
    '15': 'rgba(7, 54, 48, 1)',
    '16': 'rgba(2, 38, 34, 1)'
};
var lime = {
    '1': 'rgba(250, 255, 250, 1)',
    '2': 'rgba(228, 255, 229, 1)',
    '3': 'rgba(208, 255, 209, 1)',
    '4': 'rgba(187, 254, 190, 1)',
    '5': 'rgba(157, 254, 160, 1)',
    '6': 'rgba(119, 254, 122, 1)',
    '7': 'rgba(56, 254, 62, 1)',
    '8': 'rgba(40, 242, 47, 1)',
    '9': 'rgba(37, 232, 43, 1)',
    '10': 'rgba(32, 207, 39, 1)',
    '11': 'rgba(24, 168, 29, 1)',
    '12': 'rgba(17, 135, 21, 1)',
    '13': 'rgba(12, 113, 15, 1)',
    '14': 'rgba(11, 85, 13, 1)',
    '15': 'rgba(3, 61, 5, 1)',
    '16': 'rgba(3, 33, 4, 1)'
};
var magenta = {
    '1': 'rgba(255, 253, 255, 1)',
    '2': 'rgba(255, 245, 255, 1)',
    '3': 'rgba(253, 239, 253, 1)',
    '4': 'rgba(254, 231, 254, 1)',
    '5': 'rgba(252, 223, 252, 1)',
    '6': 'rgba(251, 215, 251, 1)',
    '7': 'rgba(251, 207, 251, 1)',
    '8': 'rgba(249, 190, 249, 1)',
    '9': 'rgba(248, 177, 248, 1)',
    '10': 'rgba(246, 141, 246, 1)',
    '11': 'rgba(225, 86, 225, 1)',
    '12': 'rgba(197, 48, 197, 1)',
    '13': 'rgba(159, 38, 159, 1)',
    '14': 'rgba(121, 26, 121, 1)',
    '15': 'rgba(86, 16, 86, 1)',
    '16': 'rgba(52, 6, 52, 1)'
};
var orange = {
    '1': 'rgba(255, 253, 250, 1)',
    '2': 'rgba(255, 247, 238, 1)',
    '3': 'rgba(255, 241, 227, 1)',
    '4': 'rgba(255, 235, 213, 1)',
    '5': 'rgba(255, 228, 198, 1)',
    '6': 'rgba(255, 221, 182, 1)',
    '7': 'rgba(255, 214, 164, 1)',
    '8': 'rgba(255, 200, 121, 1)',
    '9': 'rgba(255, 184, 0, 1)',
    '10': 'rgba(229, 165, 0, 1)',
    '11': 'rgba(178, 132, 0, 1)',
    '12': 'rgba(149, 111, 0, 1)',
    '13': 'rgba(124, 88, 0, 1)',
    '14': 'rgba(94, 66, 0, 1)',
    '15': 'rgba(65, 45, 0, 1)',
    '16': 'rgba(37, 26, 0, 1)'
};
var purple = {
    '1': 'rgba(253, 253, 255, 1)',
    '2': 'rgba(248, 247, 255, 1)',
    '3': 'rgba(243, 241, 255, 1)',
    '4': 'rgba(239, 236, 255, 1)',
    '5': 'rgba(233, 229, 255, 1)',
    '6': 'rgba(228, 222, 255, 1)',
    '7': 'rgba(223, 217, 255, 1)',
    '8': 'rgba(212, 204, 255, 1)',
    '9': 'rgba(199, 188, 255, 1)',
    '10': 'rgba(170, 149, 255, 1)',
    '11': 'rgba(148, 116, 255, 1)',
    '12': 'rgba(128, 81, 255, 1)',
    '13': 'rgba(113, 38, 255, 1)',
    '14': 'rgba(87, 0, 209, 1)',
    '15': 'rgba(59, 0, 147, 1)',
    '16': 'rgba(28, 0, 79, 1)'
};
var red = {
    '1': 'rgba(255, 250, 251, 1)',
    '2': 'rgba(255, 246, 248, 1)',
    '3': 'rgba(255, 236, 239, 1)',
    '4': 'rgba(254, 232, 235, 1)',
    '5': 'rgba(254, 225, 230, 1)',
    '6': 'rgba(254, 217, 223, 1)',
    '7': 'rgba(254, 209, 215, 1)',
    '8': 'rgba(254, 193, 199, 1)',
    '9': 'rgba(253, 172, 177, 1)',
    '10': 'rgba(247, 128, 134, 1)',
    '11': 'rgba(226, 44, 56, 1)',
    '12': 'rgba(199, 10, 36, 1)',
    '13': 'rgba(163, 10, 36, 1)',
    '14': 'rgba(142, 11, 33, 1)',
    '15': 'rgba(95, 7, 22, 1)',
    '16': 'rgba(47, 4, 11, 1)'
};
var rose = {
    '1': 'rgba(255, 253, 253, 1)',
    '2': 'rgba(255, 246, 248, 1)',
    '3': 'rgba(255, 239, 243, 1)',
    '4': 'rgba(255, 232, 238, 1)',
    '5': 'rgba(255, 225, 232, 1)',
    '6': 'rgba(255, 217, 227, 1)',
    '7': 'rgba(254, 209, 221, 1)',
    '8': 'rgba(254, 193, 210, 1)',
    '9': 'rgba(254, 181, 202, 1)',
    '10': 'rgba(254, 142, 177, 1)',
    '11': 'rgba(253, 75, 146, 1)',
    '12': 'rgba(227, 12, 118, 1)',
    '13': 'rgba(185, 7, 95, 1)',
    '14': 'rgba(141, 4, 72, 1)',
    '15': 'rgba(100, 2, 49, 1)',
    '16': 'rgba(62, 1, 28, 1)'
};
var teal = {
    '1': 'rgba(248, 255, 254, 1)',
    '2': 'rgba(232, 252, 250, 1)',
    '3': 'rgba(215, 250, 247, 1)',
    '4': 'rgba(195, 247, 242, 1)',
    '5': 'rgba(170, 246, 239, 1)',
    '6': 'rgba(137, 245, 236, 1)',
    '7': 'rgba(112, 240, 229, 1)',
    '8': 'rgba(90, 230, 219, 1)',
    '9': 'rgba(44, 224, 212, 1)',
    '10': 'rgba(30, 199, 188, 1)',
    '11': 'rgba(0, 161, 152, 1)',
    '12': 'rgba(18, 131, 124, 1)',
    '13': 'rgba(12, 106, 100, 1)',
    '14': 'rgba(12, 83, 79, 1)',
    '15': 'rgba(3, 60, 57, 1)',
    '16': 'rgba(6, 44, 41, 1)'
};
var yellow = {
    '1': 'rgba(255, 253, 246, 1)',
    '2': 'rgba(255, 248, 219, 1)',
    '3': 'rgba(255, 244, 191, 1)',
    '4': 'rgba(255, 239, 157, 1)',
    '5': 'rgba(255, 235, 120, 1)',
    '6': 'rgba(255, 230, 0, 1)',
    '7': 'rgba(247, 223, 0, 1)',
    '8': 'rgba(234, 211, 0, 1)',
    '9': 'rgba(225, 203, 0, 1)',
    '10': 'rgba(197, 178, 0, 1)',
    '11': 'rgba(153, 138, 0, 1)',
    '12': 'rgba(130, 117, 0, 1)',
    '13': 'rgba(105, 95, 0, 1)',
    '14': 'rgba(79, 71, 0, 1)',
    '15': 'rgba(51, 46, 0, 1)',
    '16': 'rgba(31, 28, 0, 1)'
};
var blackAlpha = {
    1: 'rgba(0, 0, 0, 0)',
    2: 'rgba(0, 0, 0, 0.01)',
    3: 'rgba(0, 0, 0, 0.02)',
    4: 'rgba(0, 0, 0, 0.03)',
    5: 'rgba(0, 0, 0, 0.05)',
    6: 'rgba(0, 0, 0, 0.06)',
    7: 'rgba(0, 0, 0, 0.08)',
    8: 'rgba(0, 0, 0, 0.11)',
    9: 'rgba(0, 0, 0, 0.17)',
    10: 'rgba(0, 0, 0, 0.20)',
    11: 'rgba(0, 0, 0, 0.29)',
    12: 'rgba(0, 0, 0, 0.46)',
    13: 'rgba(0, 0, 0, 0.62)',
    14: 'rgba(0, 0, 0, 0.71)',
    15: 'rgba(0, 0, 0, 0.81)',
    16: 'rgba(0, 0, 0, 0.90)'
};
var whiteAlpha = {
    1: 'rgba(255, 255, 255, 0.01)',
    2: 'rgba(255, 255, 255, 0.02)',
    3: 'rgba(255, 255, 255, 0.03)',
    4: 'rgba(255, 255, 255, 0.04)',
    5: 'rgba(255, 255, 255, 0.05)',
    6: 'rgba(255, 255, 255, 0.06)',
    7: 'rgba(255, 255, 255, 0.08)',
    8: 'rgba(255, 255, 255, 0.11)',
    9: 'rgba(255, 255, 255, 0.14)',
    10: 'rgba(255, 255, 255, 0.17)',
    11: 'rgba(255, 255, 255, 0.22)',
    12: 'rgba(255, 255, 255, 0.29)',
    13: 'rgba(255, 255, 255, 0.44)',
    14: 'rgba(255, 255, 255, 0.6)',
    15: 'rgba(255, 255, 255, 0.7)',
    16: 'rgba(255, 255, 255, 0.8)'
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/color.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "color",
    ()=>color
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/colors.mjs [app-ssr] (ecmascript)");
;
var color = {
    'color-scheme': {
        value: 'light'
    },
    'color-bg': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6],
        description: 'The default background color of the admin.'
    },
    'color-bg-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][16],
        description: 'Use for high contrast page or component backgrounds.'
    },
    'color-bg-surface': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1],
        description: 'The background color for elements with the highest level of prominence, like a card.'
    },
    'color-bg-surface-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][4],
        description: 'The hover state color for elements with the highest level of prominence.'
    },
    'color-bg-surface-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][5],
        description: 'The active state (on press) color for elements with the highest level of prominence.'
    },
    'color-bg-surface-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6],
        description: 'The selected state color for elements with the highest level of prominence.'
    },
    'color-bg-surface-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][5],
        description: 'The disabled state color for elements.'
    },
    'color-bg-surface-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][4],
        description: 'The background color for elements with a secondary level of prominence.'
    },
    'color-bg-surface-secondary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6],
        description: 'The hover state color for elements with a secondary level of prominence.'
    },
    'color-bg-surface-secondary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The active state (on press) color for elements with a secondary level of prominence.'
    },
    'color-bg-surface-secondary-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The selected state color for elements with a secondary level of prominence.'
    },
    'color-bg-surface-tertiary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][5],
        description: 'The background color for elements with a third level of prominence.'
    },
    'color-bg-surface-tertiary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The hover state color for elements with a third level of prominence.'
    },
    'color-bg-surface-tertiary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The active state (on press) color for elements with a third level of prominence.'
    },
    'color-bg-surface-brand': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'Use to apply the key color to elements.'
    },
    'color-bg-surface-brand-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The hover state color for key elements.'
    },
    'color-bg-surface-brand-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6],
        description: 'The active state (on press) color for key elements.'
    },
    'color-bg-surface-brand-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6],
        description: 'The selected state color for key elements.'
    },
    'color-bg-surface-info': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][3],
        description: 'Use for backgrounds communicating important information, like banners.'
    },
    'color-bg-surface-info-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][4],
        description: 'The hover state color for communicating important information.'
    },
    'color-bg-surface-info-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][6],
        description: 'The active state (on press) color for communicating important information.'
    },
    'color-bg-surface-success': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][3],
        description: 'Use for backgrounds communicating success, like banners.'
    },
    'color-bg-surface-success-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][4],
        description: 'The hover state color for communicating success.'
    },
    'color-bg-surface-success-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][5],
        description: 'The active state (on press) color for communicating success.'
    },
    'color-bg-surface-caution': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][2],
        description: 'Use for backgrounds communicating caution, like banners.'
    },
    'color-bg-surface-caution-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][3],
        description: 'The hover state for communicating caution.'
    },
    'color-bg-surface-caution-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][4],
        description: 'The active state (on press) color for communicating caution.'
    },
    'color-bg-surface-warning': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][3],
        description: 'Use for backgrounds communicating warning, like banners.'
    },
    'color-bg-surface-warning-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][4],
        description: 'The hover state color for communicating warning.'
    },
    'color-bg-surface-warning-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][5],
        description: 'The active state (on press) color for communicating warning.'
    },
    'color-bg-surface-critical': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][4],
        description: 'Use for backgrounds communicating critical information, like banners or input errors.'
    },
    'color-bg-surface-critical-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][5],
        description: 'The hover state color for communicating critical information.'
    },
    'color-bg-surface-critical-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][6],
        description: 'The active state (on press) color for communicating critical information.'
    },
    'color-bg-surface-emphasis': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][3],
        description: 'Use for backgrounds indicating areas of focus in editors, such as the theme editor.'
    },
    'color-bg-surface-emphasis-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][4],
        description: 'The hover state color for elements indicating areas of focus in editors.'
    },
    'color-bg-surface-emphasis-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][5],
        description: 'The active state (on press) color for elements indicating areas of focus in editors.'
    },
    'color-bg-surface-magic': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][2],
        description: 'Use for backgrounds of elements suggested by magic AI.'
    },
    'color-bg-surface-magic-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][3],
        description: 'The hover state color for elements suggested by magic AI.'
    },
    'color-bg-surface-magic-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][5],
        description: 'The active state (on press) color for elements suggested by magic AI.'
    },
    'color-bg-surface-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'Use for elements on bg-inverse.'
    },
    'color-bg-surface-transparent': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][1],
        description: 'Use for elements that need a fully transparent background.'
    },
    'color-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1],
        description: 'The background color of contained elements with a smaller surface area, like a button.'
    },
    'color-bg-fill-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][3],
        description: 'The hover state color of contained elements with a smaller surface area, like a button.'
    },
    'color-bg-fill-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][4],
        description: 'The active state (on press) color of contained elements with a smaller surface area, like a button.'
    },
    'color-bg-fill-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The selected state color of contained elements with a smaller surface area, like a button or checkbox.'
    },
    'color-bg-fill-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][5],
        description: 'The disabled state color of contained elements with a smaller surface area, like a button.'
    },
    'color-bg-fill-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6],
        description: 'The background color of elements with a smaller surface area and a secondary level of prominence.'
    },
    'color-bg-fill-secondary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The hover state color of elements with a smaller surface area and a secondary level of prominence.'
    },
    'color-bg-fill-secondary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The active state (on press) color of elements with a smaller surface area and a secondary level of prominence.'
    },
    'color-bg-fill-secondary-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The selected state (on press) color of elements with a smaller surface area and a secondary level of prominence.'
    },
    'color-bg-fill-tertiary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The background color of elements with a smaller surface area and a third level of prominence.'
    },
    'color-bg-fill-tertiary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][9],
        description: 'The hover state color of elements with a smaller surface area and a third level of prominence.'
    },
    'color-bg-fill-tertiary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The active state (on press) color of elements with a smaller surface area and a third level of prominence.'
    },
    'color-bg-fill-brand': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'The background color of main actions, like primary buttons.'
    },
    'color-bg-fill-brand-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][16],
        description: 'The hover state color of main actions, like primary buttons.'
    },
    'color-bg-fill-brand-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][16],
        description: 'The active state (on press) color of main actions, like primary buttons.'
    },
    'color-bg-fill-brand-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'The selected state color of main actions, like primary buttons.'
    },
    'color-bg-fill-brand-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][9],
        description: 'The disabled state color of main actions, like primary buttons.'
    },
    'color-bg-fill-info': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][9],
        description: 'Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button.'
    },
    'color-bg-fill-info-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][10],
        description: 'The hover state color for communicating important information on elements with a smaller surface area.'
    },
    'color-bg-fill-info-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][11],
        description: 'The active state (on press) color for communicating important information on elements with a smaller surface area.'
    },
    'color-bg-fill-info-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][5],
        description: 'Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence.'
    },
    'color-bg-fill-success': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][12],
        description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner."
    },
    'color-bg-fill-success-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][13],
        description: 'The hover state color for communicating success on elements with a smaller surface area.'
    },
    'color-bg-fill-success-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][14],
        description: 'The active state (on press) color for communicating success on elements with a smaller surface area.'
    },
    'color-bg-fill-success-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][4],
        description: 'Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence.'
    },
    'color-bg-fill-warning': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][9],
        description: 'Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner.'
    },
    'color-bg-fill-warning-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][10],
        description: 'The hover state color for communicating warning on elements with a smaller surface area.'
    },
    'color-bg-fill-warning-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][11],
        description: 'The active state (on press) color for communicating warning on elements with a smaller surface area.'
    },
    'color-bg-fill-warning-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][7],
        description: 'Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence.'
    },
    'color-bg-fill-caution': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][6],
        description: 'Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner.'
    },
    'color-bg-fill-caution-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][8],
        description: 'The hover state color for communicating caution on elements with a smaller surface area.'
    },
    'color-bg-fill-caution-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][9],
        description: 'The active state (on press) color for communicating caution on elements with a smaller surface area.'
    },
    'color-bg-fill-caution-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][5],
        description: 'Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence.'
    },
    'color-bg-fill-critical': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][12],
        description: 'Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner.'
    },
    'color-bg-fill-critical-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][13],
        description: 'The hover state color for communicating critical information on elements with a smaller surface area.'
    },
    'color-bg-fill-critical-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][14],
        description: 'The active state (on press) color for communicating critical information on elements with a smaller surface area.'
    },
    'color-bg-fill-critical-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][14],
        description: 'The selected state color for communicating critical information on elements with a smaller surface area.'
    },
    'color-bg-fill-critical-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][7],
        description: 'Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence.'
    },
    'color-bg-fill-emphasis': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][13],
        description: 'Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge.'
    },
    'color-bg-fill-emphasis-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][14],
        description: 'The hover state color for indicating areas of focus in editors on elements with a smaller surface area.'
    },
    'color-bg-fill-emphasis-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][15],
        description: 'The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area.'
    },
    'color-bg-fill-magic': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][12],
        description: 'The background color of elements suggested by magic AI, like a badge or a banner.'
    },
    'color-bg-fill-magic-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][5],
        description: 'The background color of elements suggested by magic AI, with a secondary level of prominence.'
    },
    'color-bg-fill-magic-secondary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][6],
        description: 'The hover state color of elements suggested by magic AI, with a secondary level of prominence.'
    },
    'color-bg-fill-magic-secondary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][7],
        description: 'The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence.'
    },
    'color-bg-fill-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'The background color of elements with a smaller surface area on an inverse background.'
    },
    'color-bg-fill-inverse-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][14],
        description: 'The hover state color of elements with a smaller surface area on an inverse background.'
    },
    'color-bg-fill-inverse-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][13],
        description: 'The active state (on press) color of elements with a smaller surface area on an inverse background.'
    },
    'color-bg-fill-transparent': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][3],
        description: 'The background color of elements that need to sit on different background colors, like tabs.'
    },
    'color-bg-fill-transparent-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][5],
        description: 'The hover state color of elements that need to sit on different background colors, like tabs.'
    },
    'color-bg-fill-transparent-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][7],
        description: 'The active state (on press) color of elements that need to sit on different background colors, like tabs.'
    },
    'color-bg-fill-transparent-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][7],
        description: 'The selected state color of elements that need to sit on different background colors, like tabs.'
    },
    'color-bg-fill-transparent-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][6],
        description: 'The background color of elements that need to sit on different background colors, with a secondary level of prominence.'
    },
    'color-bg-fill-transparent-secondary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][7],
        description: 'The hover state color of elements that need to sit on different background colors, with a secondary level of prominence.'
    },
    'color-bg-fill-transparent-secondary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][8],
        description: 'The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence.'
    },
    'color-text': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'The default text color.'
    },
    'color-text-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][13],
        description: 'Use for text with a secondary level of prominence.'
    },
    'color-text-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][11],
        description: 'Use for text in a disabled state.'
    },
    'color-text-link': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][13],
        description: 'Use for text links.'
    },
    'color-text-link-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][14],
        description: 'The hover state color for text links.'
    },
    'color-text-link-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][15],
        description: 'The active state (on press) color for text links.'
    },
    'color-text-brand': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][14],
        description: 'Use for text that needs to pull attention.'
    },
    'color-text-brand-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'The hover state color for text that needs to pull attention.'
    },
    'color-text-brand-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1],
        description: 'Use for text on bg-fill-brand, like primary buttons.'
    },
    'color-text-brand-on-bg-fill-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The hover state color for text on bg-fill-brand-hover.'
    },
    'color-text-brand-on-bg-fill-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The active state (on press) color for text on bg-fill-brand.'
    },
    'color-text-brand-on-bg-fill-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1],
        description: 'The disabled state color for text on bg-fill-brand-disabled.'
    },
    'color-text-info': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][15],
        description: 'Use for text communicating important information.'
    },
    'color-text-info-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][15],
        description: 'The hover state color for text communicating important information.'
    },
    'color-text-info-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][16],
        description: 'The active state (on press) color for text communicating important information.'
    },
    'color-text-info-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][12],
        description: 'Use for text communicating important information with a secondary level of prominence.'
    },
    'color-text-info-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][16],
        description: 'Use for text and icons on bg-fill-info.'
    },
    'color-text-success': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][14],
        description: 'Use for text communicating success.'
    },
    'color-text-success-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][15],
        description: 'The hover state color for text communicating success.'
    },
    'color-text-success-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][16],
        description: 'The active state (on press) color for text communicating success.'
    },
    'color-text-success-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][12],
        description: 'Use for text communicating success with a secondary level of prominence.'
    },
    'color-text-success-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][1],
        description: 'Use for text and icons on bg-fill-success.'
    },
    'color-text-caution': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][14],
        description: 'Use for text communicating caution.'
    },
    'color-text-caution-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][15],
        description: 'The hover state color for text communicating caution.'
    },
    'color-text-caution-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][16],
        description: 'The active state (on press) color for text communicating caution.'
    },
    'color-text-caution-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][12],
        description: 'Use for text communicating caution with a secondary level of prominence.'
    },
    'color-text-caution-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][15],
        description: 'Use for text and icons on bg-fill-caution.'
    },
    'color-text-warning': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][14],
        description: 'Use for text communicating warning.'
    },
    'color-text-warning-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][15],
        description: 'The hover state color for text communicating warning.'
    },
    'color-text-warning-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][16],
        description: 'The active state (on press) color for text communicating warning.'
    },
    'color-text-warning-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][12],
        description: 'Use for text communicating warning with a secondary level of prominence.'
    },
    'color-text-warning-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][16],
        description: 'Use for text and icons on bg-fill-warning.'
    },
    'color-text-critical': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][14],
        description: 'Use for text communicating critical information.'
    },
    'color-text-critical-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][15],
        description: 'The hover state color for text communicating critical information.'
    },
    'color-text-critical-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][16],
        description: 'The active state (on press) color for text communicating critical information.'
    },
    'color-text-critical-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][12],
        description: 'Use for text communicating critical information with a secondary level of prominence.'
    },
    'color-text-critical-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][1],
        description: 'Use for text and icons on bg-fill-critical.'
    },
    'color-text-emphasis': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][13],
        description: 'Use for text indicating areas of focus in editors, like the theme editor.'
    },
    'color-text-emphasis-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][14],
        description: 'The hover state color for text indicating areas of focus.'
    },
    'color-text-emphasis-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][15],
        description: 'The active state (on press) color for text indicating areas of focus.'
    },
    'color-text-emphasis-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][1],
        description: 'Use for text and icons on bg-fill-emphasis.'
    },
    'color-text-emphasis-on-bg-fill-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][5],
        description: 'Use for text and icons on bg-fill-emphasis-hover.'
    },
    'color-text-emphasis-on-bg-fill-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][7],
        description: 'Use for text and icons on bg-fill-emphasis-active.'
    },
    'color-text-magic': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][14],
        description: 'Use for text suggested by magic AI.'
    },
    'color-text-magic-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][13],
        description: 'Use for text suggested by magic AI with a secondary level of prominence.'
    },
    'color-text-magic-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][1],
        description: 'Use for text and icons on bg-fill-magic.'
    },
    'color-text-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'Use for text on an inverse background.'
    },
    'color-text-inverse-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][11],
        description: 'Use for secondary text on an inverse background.'
    },
    'color-text-link-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][8],
        description: 'Use for text links on an inverse background.'
    },
    'color-border': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The default color for borders on any element.'
    },
    'color-border-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The hover color for borders on any element.'
    },
    'color-border-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The disabled color for borders on any element.'
    },
    'color-border-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7],
        description: 'The color for hr elements or any visual dividers.'
    },
    'color-border-tertiary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary.'
    },
    'color-border-focus': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][13],
        description: 'The focus ring for any interactive element in a focused state.'
    },
    'color-border-brand': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'Use for borders paired with brand colors.'
    },
    'color-border-info': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][8],
        description: 'Use for borders communicating information.'
    },
    'color-border-success': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][5],
        description: 'Use for borders communicating success.'
    },
    'color-border-caution': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][5],
        description: 'Use for borders communicating caution.'
    },
    'color-border-warning': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][8],
        description: 'Use for borders communicating warning.'
    },
    'color-border-critical': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][8],
        description: 'Use for borders communicating critical information.'
    },
    'color-border-critical-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][14],
        description: 'Use for borders communicating critical information, such as borders on invalid text fields.'
    },
    'color-border-emphasis': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][13],
        description: 'Use for borders indicating areas of focus.'
    },
    'color-border-emphasis-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][14],
        description: 'The hover state color for borders indicating areas of focus.'
    },
    'color-border-emphasis-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][15],
        description: 'The active state (on press) color for borders indicating areas of focus.'
    },
    'color-border-magic': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][6],
        description: 'Use for borders suggested by magic AI.'
    },
    'color-border-magic-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][11],
        description: 'Use for borders suggested by magic AI, such as borders on text fields.'
    },
    'color-border-magic-secondary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][12],
        description: 'Use for borders suggested by magic AI, such as borders on text fields.'
    },
    'color-border-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][13],
        description: 'Use for borders on an inverse background, such as borders on the global search.'
    },
    'color-border-inverse-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The hover state color for borders on an inverse background.'
    },
    'color-border-inverse-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The active state (on press) color for borders on an inverse background.'
    },
    'color-tooltip-tail-down-border': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][9],
        description: 'The border color for tooltip tails pointing down.'
    },
    'color-tooltip-tail-up-border': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'The border color for tooltip tails pointing up.'
    },
    'color-icon': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][14],
        description: 'The default color for icons.'
    },
    'color-icon-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][15],
        description: 'The hover state color for icons.'
    },
    'color-icon-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][16],
        description: 'The active state (on press) color for icons.'
    },
    'color-icon-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][10],
        description: 'The disabled state color for icons.'
    },
    'color-icon-secondary': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][12],
        description: 'Use for secondary icons.'
    },
    'color-icon-secondary-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][13],
        description: 'The hover state color for secondary icons.'
    },
    'color-icon-secondary-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][14],
        description: 'The active state (on press) color for secondary icons.'
    },
    'color-icon-brand': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][16],
        description: 'Use for icons that need to pull more focus.'
    },
    'color-icon-info': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][11],
        description: 'Use for icons communicating information.'
    },
    'color-icon-success': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][12],
        description: 'Use for icons communicating success.'
    },
    'color-icon-caution': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yellow"][11],
        description: 'Use for icons communicating caution.'
    },
    'color-icon-warning': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orange"][11],
        description: 'Use for icons communicating warning.'
    },
    'color-icon-critical': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["red"][11],
        description: 'Use for icons communicating critical information.'
    },
    'color-icon-emphasis': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][13],
        description: 'Use for icons indicating areas of focus in editors, like the theme editor.'
    },
    'color-icon-emphasis-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][14],
        description: 'The hover color for icons indicating areas of focus in editors.'
    },
    'color-icon-emphasis-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blue"][15],
        description: 'The active state (on press) color for icons indicating areas of focus in editors.'
    },
    'color-icon-magic': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][12],
        description: 'Use for icons suggested by magic AI.'
    },
    'color-icon-inverse': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][8],
        description: 'Use for icons on an inverse background.'
    },
    'color-avatar-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][11]
    },
    'color-avatar-five-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rose"][11]
    },
    'color-avatar-five-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rose"][2]
    },
    'color-avatar-four-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][10]
    },
    'color-avatar-four-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azure"][16]
    },
    'color-avatar-one-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["magenta"][12]
    },
    'color-avatar-one-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["magenta"][3]
    },
    'color-avatar-seven-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][11]
    },
    'color-avatar-seven-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["purple"][2]
    },
    'color-avatar-six-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lime"][9]
    },
    'color-avatar-six-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lime"][15]
    },
    'color-avatar-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1]
    },
    'color-avatar-three-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teal"][9]
    },
    'color-avatar-three-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teal"][15]
    },
    'color-avatar-two-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][7]
    },
    'color-avatar-two-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["green"][14]
    },
    'color-backdrop-bg': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][14]
    },
    'color-button-gradient-bg-fill': {
        value: 'linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)'
    },
    'color-checkbox-bg-surface-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][7]
    },
    'color-checkbox-icon-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1]
    },
    'color-input-bg-surface': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][2]
    },
    'color-input-bg-surface-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][3]
    },
    'color-input-bg-surface-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][4]
    },
    'color-input-border': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][12]
    },
    'color-input-border-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][13]
    },
    'color-input-border-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][16]
    },
    'color-nav-bg': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][7]
    },
    'color-nav-bg-surface': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][3]
    },
    'color-nav-bg-surface-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][6]
    },
    'color-nav-bg-surface-active': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][3]
    },
    'color-nav-bg-surface-selected': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][3]
    },
    'color-radio-button-bg-surface-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][7]
    },
    'color-radio-button-icon-disabled': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1]
    },
    'color-video-thumbnail-play-button-bg-fill-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][15]
    },
    'color-video-thumbnail-play-button-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackAlpha"][14]
    },
    'color-video-thumbnail-play-button-text-on-bg-fill': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][1]
    },
    'color-scrollbar-thumb-bg-hover': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][12]
    },
    'color-scrollbar-thumb-bg': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gray"][11]
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/font.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "font",
    ()=>font
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs [app-ssr] (ecmascript)");
;
var font = {
    'font-family-sans': {
        value: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    },
    'font-family-mono': {
        value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
    },
    'font-size-275': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][275]
    },
    'font-size-300': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][300]
    },
    'font-size-325': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][325]
    },
    'font-size-350': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][350]
    },
    'font-size-400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][400]
    },
    'font-size-450': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][450]
    },
    'font-size-500': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][500]
    },
    'font-size-550': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][550]
    },
    'font-size-600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][600]
    },
    'font-size-750': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][750]
    },
    'font-size-800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][800]
    },
    'font-size-900': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][900]
    },
    'font-size-1000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1000]
    },
    'font-weight-regular': {
        value: '450'
    },
    'font-weight-medium': {
        value: '550'
    },
    'font-weight-semibold': {
        value: '650'
    },
    'font-weight-bold': {
        value: '700'
    },
    'font-letter-spacing-densest': {
        value: '-0.54px'
    },
    'font-letter-spacing-denser': {
        value: '-0.3px'
    },
    'font-letter-spacing-dense': {
        value: '-0.2px'
    },
    'font-letter-spacing-normal': {
        value: '0px'
    },
    'font-line-height-300': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][300]
    },
    'font-line-height-400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][400]
    },
    'font-line-height-500': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][500]
    },
    'font-line-height-600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][600]
    },
    'font-line-height-700': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][700]
    },
    'font-line-height-800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][800]
    },
    'font-line-height-1000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1000]
    },
    'font-line-height-1200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1200]
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/height.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "height",
    ()=>height
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs [app-ssr] (ecmascript)");
;
var height = {
    'height-0': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][0]
    },
    'height-025': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['025']
    },
    'height-050': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['050']
    },
    'height-100': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][100]
    },
    'height-150': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][150]
    },
    'height-200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][200]
    },
    'height-300': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][300]
    },
    'height-400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][400]
    },
    'height-500': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][500]
    },
    'height-600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][600]
    },
    'height-700': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][700]
    },
    'height-800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][800]
    },
    'height-900': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][900]
    },
    'height-1000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1000]
    },
    'height-1200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1200]
    },
    'height-1600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1600]
    },
    'height-2000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2000]
    },
    'height-2400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2400]
    },
    'height-2800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2800]
    },
    'height-3200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][3200]
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/motion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "motion",
    ()=>motion
]);
var motion = {
    'motion-duration-0': {
        value: '0ms'
    },
    'motion-duration-50': {
        value: '50ms'
    },
    'motion-duration-100': {
        value: '100ms'
    },
    'motion-duration-150': {
        value: '150ms'
    },
    'motion-duration-200': {
        value: '200ms'
    },
    'motion-duration-250': {
        value: '250ms'
    },
    'motion-duration-300': {
        value: '300ms'
    },
    'motion-duration-350': {
        value: '350ms'
    },
    'motion-duration-400': {
        value: '400ms'
    },
    'motion-duration-450': {
        value: '450ms'
    },
    'motion-duration-500': {
        value: '500ms'
    },
    'motion-duration-5000': {
        value: '5000ms'
    },
    'motion-ease': {
        value: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        description: 'Responds quickly and finishes with control. A great default for any user interaction.'
    },
    'motion-ease-in': {
        value: 'cubic-bezier(0.42, 0, 1, 1)',
        description: 'Starts slowly and finishes at top speed. Use sparingly.'
    },
    'motion-ease-out': {
        value: 'cubic-bezier(0.19, 0.91, 0.38, 1)',
        description: 'Starts at top speed and finishes slowly. Use sparingly.'
    },
    'motion-ease-in-out': {
        value: 'cubic-bezier(0.42, 0, 0.58, 1)',
        description: 'Starts and finishes with equal speed. A good default for transitions triggered by the system.'
    },
    'motion-linear': {
        value: 'cubic-bezier(0, 0, 1, 1)',
        description: 'Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners.'
    },
    'motion-keyframes-bounce': {
        value: '{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }'
    },
    'motion-keyframes-fade-in': {
        value: '{ to { opacity: 1 } }'
    },
    'motion-keyframes-pulse': {
        value: '{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }'
    },
    'motion-keyframes-spin': {
        value: '{ to { transform: rotate(1turn) } }'
    },
    'motion-keyframes-appear-above': {
        value: '{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }'
    },
    'motion-keyframes-appear-below': {
        value: '{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }'
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/shadow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shadow",
    ()=>shadow
]);
var shadow = {
    'shadow-0': {
        value: 'none'
    },
    'shadow-100': {
        value: '0px 1px 0px 0px rgba(26, 26, 26, 0.07)'
    },
    'shadow-200': {
        value: '0px 3px 1px -1px rgba(26, 26, 26, 0.07)'
    },
    'shadow-300': {
        value: '0px 4px 6px -2px rgba(26, 26, 26, 0.20)'
    },
    'shadow-400': {
        value: '0px 8px 16px -4px rgba(26, 26, 26, 0.22)'
    },
    'shadow-500': {
        value: '0px 12px 20px -8px rgba(26, 26, 26, 0.24)'
    },
    'shadow-600': {
        value: '0px 20px 20px -8px rgba(26, 26, 26, 0.28)'
    },
    'shadow-bevel-100': {
        value: '1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.5) inset'
    },
    'shadow-inset-100': {
        value: '0px 1px 2px 0px rgba(26, 26, 26, 0.15) inset, 0px 1px 1px 0px rgba(26, 26, 26, 0.15) inset'
    },
    'shadow-inset-200': {
        value: '0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset'
    },
    'shadow-button': {
        value: '0px -1px 0px 0px #b5b5b5 inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset, 0px 0.5px 0px 1.5px #FFF inset'
    },
    'shadow-button-hover': {
        value: '0px 1px 0px 0px #EBEBEB inset, -1px 0px 0px 0px #EBEBEB inset, 1px 0px 0px 0px #EBEBEB inset, 0px -1px 0px 0px #CCC inset'
    },
    'shadow-button-inset': {
        value: '-1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 0px 2px 1px 0px rgba(26, 26, 26, 0.2) inset'
    },
    'shadow-button-primary': {
        value: '0px -1px 0px 1px rgba(0, 0, 0, 0.8) inset, 0px 0px 0px 1px rgba(48, 48, 48, 1) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.25) inset'
    },
    'shadow-button-primary-hover': {
        value: '0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px #000 inset, 0px -1px 0px 1px #1A1A1A'
    },
    'shadow-button-primary-inset': {
        value: '0px 3px 0px 0px rgb(0, 0, 0) inset'
    },
    'shadow-button-primary-critical': {
        value: '0px -1px 0px 1px rgba(142, 31, 11, 0.8) inset, 0px 0px 0px 1px rgba(181, 38, 11, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.349) inset'
    },
    'shadow-button-primary-critical-hover': {
        value: '0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset'
    },
    'shadow-button-primary-critical-inset': {
        value: '-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset'
    },
    'shadow-button-primary-success': {
        value: '0px -1px 0px 1px rgba(12, 81, 50, 0.8) inset, 0px 0px 0px 1px rgba(19, 111, 69, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.251) inset'
    },
    'shadow-button-primary-success-hover': {
        value: '0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset'
    },
    'shadow-button-primary-success-inset': {
        value: '-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset'
    },
    'shadow-border-inset': {
        value: '0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset'
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/space.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "space",
    ()=>space
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs [app-ssr] (ecmascript)");
;
;
var space = {
    'space-0': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][0]
    },
    'space-025': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['025']
    },
    'space-050': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['050']
    },
    'space-100': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][100]
    },
    'space-150': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][150]
    },
    'space-200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][200]
    },
    'space-300': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][300]
    },
    'space-400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][400]
    },
    'space-500': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][500]
    },
    'space-600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][600]
    },
    'space-800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][800]
    },
    'space-1000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1000]
    },
    'space-1200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1200]
    },
    'space-1600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1600]
    },
    'space-2000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2000]
    },
    'space-2400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2400]
    },
    'space-2800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2800]
    },
    'space-3200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][3200]
    },
    'space-button-group-gap': {
        value: createVar('space-200')
    },
    'space-card-gap': {
        value: createVar('space-400')
    },
    'space-card-padding': {
        value: createVar('space-400')
    },
    'space-table-cell-padding': {
        value: createVar('space-150')
    }
};
function createVar(spaceTokenName) {
    return "var(" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarName"])(spaceTokenName) + ")";
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/text.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs [app-ssr] (ecmascript)");
;
var text = {
    // heading-3xl
    'text-heading-3xl-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-3xl-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-900')
    },
    'text-heading-3xl-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-bold')
    },
    'text-heading-3xl-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-densest')
    },
    'text-heading-3xl-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-1200')
    },
    // heading-2xl
    'text-heading-2xl-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-2xl-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-750')
    },
    'text-heading-2xl-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-bold')
    },
    'text-heading-2xl-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-denser')
    },
    'text-heading-2xl-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-1000')
    },
    // heading-xl
    'text-heading-xl-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-xl-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-600')
    },
    'text-heading-xl-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-bold')
    },
    'text-heading-xl-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-dense')
    },
    'text-heading-xl-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-800')
    },
    // heading-lg
    'text-heading-lg-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-lg-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-500')
    },
    'text-heading-lg-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-semibold')
    },
    'text-heading-lg-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-dense')
    },
    'text-heading-lg-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-600')
    },
    // heading-md
    'text-heading-md-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-md-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-350')
    },
    'text-heading-md-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-semibold')
    },
    'text-heading-md-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-heading-md-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-500')
    },
    // heading-sm
    'text-heading-sm-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-sm-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-325')
    },
    'text-heading-sm-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-semibold')
    },
    'text-heading-sm-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-heading-sm-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-500')
    },
    // heading-xs
    'text-heading-xs-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-heading-xs-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-300')
    },
    'text-heading-xs-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-semibold')
    },
    'text-heading-xs-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-heading-xs-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-400')
    },
    // body-lg
    'text-body-lg-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-body-lg-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-350')
    },
    'text-body-lg-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-regular')
    },
    'text-body-lg-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-body-lg-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-500')
    },
    // body-md
    'text-body-md-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-body-md-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-325')
    },
    'text-body-md-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-regular')
    },
    'text-body-md-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-body-md-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-500')
    },
    // body-sm
    'text-body-sm-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-body-sm-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-300')
    },
    'text-body-sm-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-regular')
    },
    'text-body-sm-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-body-sm-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-400')
    },
    // body-xs
    'text-body-xs-font-family': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-family-sans')
    },
    'text-body-xs-font-size': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-size-275')
    },
    'text-body-xs-font-weight': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-weight-regular')
    },
    'text-body-xs-font-letter-spacing': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-letter-spacing-normal')
    },
    'text-body-xs-font-line-height': {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVar"])('font-line-height-300')
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/width.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "width",
    ()=>width
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs [app-ssr] (ecmascript)");
;
var width = {
    'width-0': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][0]
    },
    'width-025': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['025']
    },
    'width-050': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]['050']
    },
    'width-100': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][100]
    },
    'width-150': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][150]
    },
    'width-200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][200]
    },
    'width-300': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][300]
    },
    'width-400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][400]
    },
    'width-500': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][500]
    },
    'width-600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][600]
    },
    'width-700': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][700]
    },
    'width-800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][800]
    },
    'width-900': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][900]
    },
    'width-1000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1000]
    },
    'width-1200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1200]
    },
    'width-1600': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][1600]
    },
    'width-2000': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2000]
    },
    'width-2400': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2400]
    },
    'width-2800': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][2800]
    },
    'width-3200': {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"][3200]
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/zIndex.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zIndex",
    ()=>zIndex
]);
var zIndex = {
    'z-index-0': {
        value: 'auto'
    },
    'z-index-1': {
        value: '100'
    },
    'z-index-2': {
        value: '400'
    },
    'z-index-3': {
        value: '510'
    },
    'z-index-4': {
        value: '512'
    },
    'z-index-5': {
        value: '513'
    },
    'z-index-6': {
        value: '514'
    },
    'z-index-7': {
        value: '515'
    },
    'z-index-8': {
        value: '516'
    },
    'z-index-9': {
        value: '517'
    },
    'z-index-10': {
        value: '518'
    },
    'z-index-11': {
        value: '519'
    },
    'z-index-12': {
        value: '520'
    }
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metaThemeBase",
    ()=>metaThemeBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$border$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/border.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$font$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/font.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$height$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/height.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/shadow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/space.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$width$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/width.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$zIndex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/zIndex.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
var metaThemeBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMetaThemeBase"])({
    border: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$border$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["border"],
    breakpoints: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breakpoints"],
    color: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"],
    font: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$font$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["font"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$height$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["height"],
    motion: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"],
    shadow: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadow"],
    space: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"],
    width: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$width$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["width"],
    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$zIndex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zIndex"]
});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createIsTokenName",
    ()=>createIsTokenName,
    "createMetaTheme",
    ()=>createMetaTheme,
    "createMetaThemePartial",
    ()=>createMetaThemePartial,
    "createThemeClassName",
    ()=>createThemeClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Mimics the behavior of an identity function:
 * - Validates the input matches the `MetaThemeShape` type exactly
 * - Converts all `px` values to `rem`
 * - Infers all members
 *
 * @example
 * ```
 * const example = createMetaThemePartial({
 *   color: {
 *     bg: {value: '#fff'},
 *   },
 * })
 * ```
 *
 * Where `typeof example` is inferred as `{ color: { bg: { value: string } } }`
 */ function createMetaThemePartial(metaThemePartial) {
    return Object.fromEntries(Object.entries(metaThemePartial).map(function(_ref) {
        var _ref2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slicedToArray"])(_ref, 2), tokenGroupName = _ref2[0], tokenGroup = _ref2[1];
        return [
            tokenGroupName,
            tokenGroup && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenGroupNamesToRems"].includes(tokenGroupName) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenGroupToRems"])(tokenGroup) : tokenGroup
        ];
    }));
}
function createMetaTheme(metaThemePartial) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["metaThemeBase"], metaThemePartial);
}
function createThemeClassName(themeName) {
    return "p-theme-" + themeName;
}
function createIsTokenName(theme) {
    var tokenNames = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTokenNames"])(theme));
    return function(tokenName) {
        return tokenNames.has(tokenName);
    };
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTokenName",
    ()=>isTokenName,
    "themeDefault",
    ()=>themeDefault,
    "themes",
    ()=>themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var themes = {
    "light": {
        "border": {
            "border-radius-0": "0rem",
            "border-radius-050": "0.125rem",
            "border-radius-100": "0.25rem",
            "border-radius-150": "0.375rem",
            "border-radius-200": "0.5rem",
            "border-radius-300": "0.75rem",
            "border-radius-400": "1rem",
            "border-radius-500": "1.25rem",
            "border-radius-750": "1.875rem",
            "border-radius-full": "624.9375rem",
            "border-width-0": "0rem",
            "border-width-0165": "0.04125rem",
            "border-width-025": "0.0625rem",
            "border-width-050": "0.125rem",
            "border-width-100": "0.25rem"
        },
        "breakpoints": {
            "breakpoints-xs": "0rem",
            "breakpoints-sm": "30.625rem",
            "breakpoints-md": "48rem",
            "breakpoints-lg": "65rem",
            "breakpoints-xl": "90rem"
        },
        "color": {
            "color-scheme": "light",
            "color-bg": "rgba(241, 241, 241, 1)",
            "color-bg-inverse": "rgba(26, 26, 26, 1)",
            "color-bg-surface": "rgba(255, 255, 255, 1)",
            "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
            "color-bg-surface-active": "rgba(243, 243, 243, 1)",
            "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
            "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
            "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
            "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
            "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
            "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
            "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
            "color-bg-surface-info": "rgba(234, 244, 255, 1)",
            "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
            "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
            "color-bg-surface-success": "rgba(205, 254, 212, 1)",
            "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
            "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
            "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
            "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
            "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
            "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
            "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
            "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
            "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
            "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
            "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
            "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
            "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
            "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
            "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
            "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
            "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
            "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
            "color-bg-fill": "rgba(255, 255, 255, 1)",
            "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
            "color-bg-fill-active": "rgba(247, 247, 247, 1)",
            "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
            "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
            "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
            "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
            "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
            "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
            "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
            "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
            "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
            "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
            "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
            "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
            "color-bg-fill-info": "rgba(145, 208, 255, 1)",
            "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
            "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
            "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
            "color-bg-fill-success": "rgba(4, 123, 93, 1)",
            "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
            "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
            "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
            "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
            "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
            "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
            "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
            "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
            "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
            "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
            "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
            "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
            "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
            "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
            "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
            "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
            "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
            "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
            "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
            "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
            "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
            "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
            "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
            "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
            "color-text": "rgba(48, 48, 48, 1)",
            "color-text-secondary": "rgba(97, 97, 97, 1)",
            "color-text-disabled": "rgba(181, 181, 181, 1)",
            "color-text-link": "rgba(0, 91, 211, 1)",
            "color-text-link-hover": "rgba(0, 66, 153, 1)",
            "color-text-link-active": "rgba(0, 46, 106, 1)",
            "color-text-brand": "rgba(74, 74, 74, 1)",
            "color-text-brand-hover": "rgba(48, 48, 48, 1)",
            "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
            "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
            "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
            "color-text-info": "rgba(0, 58, 90, 1)",
            "color-text-info-hover": "rgba(0, 58, 90, 1)",
            "color-text-info-active": "rgba(0, 33, 51, 1)",
            "color-text-info-secondary": "rgba(0, 124, 180, 1)",
            "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-text-success": "rgba(1, 75, 64, 1)",
            "color-text-success-hover": "rgba(7, 54, 48, 1)",
            "color-text-success-active": "rgba(2, 38, 34, 1)",
            "color-text-success-secondary": "rgba(4, 123, 93, 1)",
            "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
            "color-text-caution": "rgba(79, 71, 0, 1)",
            "color-text-caution-hover": "rgba(51, 46, 0, 1)",
            "color-text-caution-active": "rgba(31, 28, 0, 1)",
            "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
            "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
            "color-text-warning": "rgba(94, 66, 0, 1)",
            "color-text-warning-hover": "rgba(65, 45, 0, 1)",
            "color-text-warning-active": "rgba(37, 26, 0, 1)",
            "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
            "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
            "color-text-critical": "rgba(142, 11, 33, 1)",
            "color-text-critical-hover": "rgba(95, 7, 22, 1)",
            "color-text-critical-active": "rgba(47, 4, 11, 1)",
            "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
            "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
            "color-text-emphasis": "rgba(0, 91, 211, 1)",
            "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
            "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
            "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
            "color-text-magic": "rgba(87, 0, 209, 1)",
            "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
            "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
            "color-text-inverse": "rgba(227, 227, 227, 1)",
            "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
            "color-text-link-inverse": "rgba(197, 208, 255, 1)",
            "color-border": "rgba(227, 227, 227, 1)",
            "color-border-hover": "rgba(204, 204, 204, 1)",
            "color-border-disabled": "rgba(235, 235, 235, 1)",
            "color-border-secondary": "rgba(235, 235, 235, 1)",
            "color-border-tertiary": "rgba(204, 204, 204, 1)",
            "color-border-focus": "rgba(0, 91, 211, 1)",
            "color-border-brand": "rgba(227, 227, 227, 1)",
            "color-border-info": "rgba(168, 216, 255, 1)",
            "color-border-success": "rgba(146, 252, 172, 1)",
            "color-border-caution": "rgba(255, 235, 120, 1)",
            "color-border-warning": "rgba(255, 200, 121, 1)",
            "color-border-critical": "rgba(254, 193, 199, 1)",
            "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
            "color-border-emphasis": "rgba(0, 91, 211, 1)",
            "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-border-magic": "rgba(228, 222, 255, 1)",
            "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
            "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
            "color-border-inverse": "rgba(97, 97, 97, 1)",
            "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
            "color-border-inverse-active": "rgba(227, 227, 227, 1)",
            "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
            "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
            "color-icon": "rgba(74, 74, 74, 1)",
            "color-icon-hover": "rgba(48, 48, 48, 1)",
            "color-icon-active": "rgba(26, 26, 26, 1)",
            "color-icon-disabled": "rgba(204, 204, 204, 1)",
            "color-icon-secondary": "rgba(138, 138, 138, 1)",
            "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
            "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
            "color-icon-brand": "rgba(26, 26, 26, 1)",
            "color-icon-info": "rgba(0, 148, 213, 1)",
            "color-icon-success": "rgba(4, 123, 93, 1)",
            "color-icon-caution": "rgba(153, 138, 0, 1)",
            "color-icon-warning": "rgba(178, 132, 0, 1)",
            "color-icon-critical": "rgba(226, 44, 56, 1)",
            "color-icon-emphasis": "rgba(0, 91, 211, 1)",
            "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-icon-magic": "rgba(128, 81, 255, 1)",
            "color-icon-inverse": "rgba(227, 227, 227, 1)",
            "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
            "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
            "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
            "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
            "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
            "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
            "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
            "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
            "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
            "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
            "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
            "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
            "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
            "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
            "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
            "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
            "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-input-bg-surface": "rgba(253, 253, 253, 1)",
            "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
            "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
            "color-input-border": "rgba(138, 138, 138, 1)",
            "color-input-border-hover": "rgba(97, 97, 97, 1)",
            "color-input-border-active": "rgba(26, 26, 26, 1)",
            "color-nav-bg": "rgba(235, 235, 235, 1)",
            "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
            "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
            "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
            "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
            "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
            "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
            "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
            "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
        },
        "font": {
            "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
            "font-size-275": "0.6875rem",
            "font-size-300": "0.75rem",
            "font-size-325": "0.8125rem",
            "font-size-350": "0.875rem",
            "font-size-400": "1rem",
            "font-size-450": "1.125rem",
            "font-size-500": "1.25rem",
            "font-size-550": "1.375rem",
            "font-size-600": "1.5rem",
            "font-size-750": "1.875rem",
            "font-size-800": "2rem",
            "font-size-900": "2.25rem",
            "font-size-1000": "2.5rem",
            "font-weight-regular": "450",
            "font-weight-medium": "550",
            "font-weight-semibold": "650",
            "font-weight-bold": "700",
            "font-letter-spacing-densest": "-0.03375rem",
            "font-letter-spacing-denser": "-0.01875rem",
            "font-letter-spacing-dense": "-0.0125rem",
            "font-letter-spacing-normal": "0rem",
            "font-line-height-300": "0.75rem",
            "font-line-height-400": "1rem",
            "font-line-height-500": "1.25rem",
            "font-line-height-600": "1.5rem",
            "font-line-height-700": "1.75rem",
            "font-line-height-800": "2rem",
            "font-line-height-1000": "2.5rem",
            "font-line-height-1200": "3rem"
        },
        "height": {
            "height-0": "0rem",
            "height-025": "0.0625rem",
            "height-050": "0.125rem",
            "height-100": "0.25rem",
            "height-150": "0.375rem",
            "height-200": "0.5rem",
            "height-300": "0.75rem",
            "height-400": "1rem",
            "height-500": "1.25rem",
            "height-600": "1.5rem",
            "height-700": "1.75rem",
            "height-800": "2rem",
            "height-900": "2.25rem",
            "height-1000": "2.5rem",
            "height-1200": "3rem",
            "height-1600": "4rem",
            "height-2000": "5rem",
            "height-2400": "6rem",
            "height-2800": "7rem",
            "height-3200": "8rem"
        },
        "motion": {
            "motion-duration-0": "0ms",
            "motion-duration-50": "50ms",
            "motion-duration-100": "100ms",
            "motion-duration-150": "150ms",
            "motion-duration-200": "200ms",
            "motion-duration-250": "250ms",
            "motion-duration-300": "300ms",
            "motion-duration-350": "350ms",
            "motion-duration-400": "400ms",
            "motion-duration-450": "450ms",
            "motion-duration-500": "500ms",
            "motion-duration-5000": "5000ms",
            "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
            "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
            "motion-linear": "cubic-bezier(0, 0, 1, 1)",
            "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
            "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
            "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
            "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
            "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
            "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
        },
        "shadow": {
            "shadow-0": "none",
            "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
            "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
            "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
            "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
            "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
            "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
            "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
            "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
            "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
            "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
            "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
            "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
            "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset",
            "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
            "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
            "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
            "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
            "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
            "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
            "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
            "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
            "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
        },
        "space": {
            "space-0": "0rem",
            "space-025": "0.0625rem",
            "space-050": "0.125rem",
            "space-100": "0.25rem",
            "space-150": "0.375rem",
            "space-200": "0.5rem",
            "space-300": "0.75rem",
            "space-400": "1rem",
            "space-500": "1.25rem",
            "space-600": "1.5rem",
            "space-800": "2rem",
            "space-1000": "2.5rem",
            "space-1200": "3rem",
            "space-1600": "4rem",
            "space-2000": "5rem",
            "space-2400": "6rem",
            "space-2800": "7rem",
            "space-3200": "8rem",
            "space-button-group-gap": "0.5rem",
            "space-card-gap": "1rem",
            "space-card-padding": "1rem",
            "space-table-cell-padding": "0.375rem"
        },
        "text": {
            "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-3xl-font-size": "2.25rem",
            "text-heading-3xl-font-weight": "700",
            "text-heading-3xl-font-letter-spacing": "-0.03375rem",
            "text-heading-3xl-font-line-height": "3rem",
            "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-2xl-font-size": "1.875rem",
            "text-heading-2xl-font-weight": "700",
            "text-heading-2xl-font-letter-spacing": "-0.01875rem",
            "text-heading-2xl-font-line-height": "2.5rem",
            "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xl-font-size": "1.5rem",
            "text-heading-xl-font-weight": "700",
            "text-heading-xl-font-letter-spacing": "-0.0125rem",
            "text-heading-xl-font-line-height": "2rem",
            "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-lg-font-size": "1.25rem",
            "text-heading-lg-font-weight": "650",
            "text-heading-lg-font-letter-spacing": "-0.0125rem",
            "text-heading-lg-font-line-height": "1.5rem",
            "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-md-font-size": "0.875rem",
            "text-heading-md-font-weight": "650",
            "text-heading-md-font-letter-spacing": "0rem",
            "text-heading-md-font-line-height": "1.25rem",
            "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-sm-font-size": "0.8125rem",
            "text-heading-sm-font-weight": "650",
            "text-heading-sm-font-letter-spacing": "0rem",
            "text-heading-sm-font-line-height": "1.25rem",
            "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xs-font-size": "0.75rem",
            "text-heading-xs-font-weight": "650",
            "text-heading-xs-font-letter-spacing": "0rem",
            "text-heading-xs-font-line-height": "1rem",
            "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-lg-font-size": "0.875rem",
            "text-body-lg-font-weight": "450",
            "text-body-lg-font-letter-spacing": "0rem",
            "text-body-lg-font-line-height": "1.25rem",
            "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-md-font-size": "0.8125rem",
            "text-body-md-font-weight": "450",
            "text-body-md-font-letter-spacing": "0rem",
            "text-body-md-font-line-height": "1.25rem",
            "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-sm-font-size": "0.75rem",
            "text-body-sm-font-weight": "450",
            "text-body-sm-font-letter-spacing": "0rem",
            "text-body-sm-font-line-height": "1rem",
            "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-xs-font-size": "0.6875rem",
            "text-body-xs-font-weight": "450",
            "text-body-xs-font-letter-spacing": "0rem",
            "text-body-xs-font-line-height": "0.75rem"
        },
        "width": {
            "width-0": "0rem",
            "width-025": "0.0625rem",
            "width-050": "0.125rem",
            "width-100": "0.25rem",
            "width-150": "0.375rem",
            "width-200": "0.5rem",
            "width-300": "0.75rem",
            "width-400": "1rem",
            "width-500": "1.25rem",
            "width-600": "1.5rem",
            "width-700": "1.75rem",
            "width-800": "2rem",
            "width-900": "2.25rem",
            "width-1000": "2.5rem",
            "width-1200": "3rem",
            "width-1600": "4rem",
            "width-2000": "5rem",
            "width-2400": "6rem",
            "width-2800": "7rem",
            "width-3200": "8rem"
        },
        "zIndex": {
            "z-index-0": "auto",
            "z-index-1": "100",
            "z-index-2": "400",
            "z-index-3": "510",
            "z-index-4": "512",
            "z-index-5": "513",
            "z-index-6": "514",
            "z-index-7": "515",
            "z-index-8": "516",
            "z-index-9": "517",
            "z-index-10": "518",
            "z-index-11": "519",
            "z-index-12": "520"
        }
    },
    "light-mobile": {
        "border": {
            "border-radius-0": "0rem",
            "border-radius-050": "0.125rem",
            "border-radius-100": "0.25rem",
            "border-radius-150": "0.375rem",
            "border-radius-200": "0.5rem",
            "border-radius-300": "0.75rem",
            "border-radius-400": "1rem",
            "border-radius-500": "1.25rem",
            "border-radius-750": "1.875rem",
            "border-radius-full": "624.9375rem",
            "border-width-0": "0rem",
            "border-width-0165": "0.04125rem",
            "border-width-025": "0.0625rem",
            "border-width-050": "0.125rem",
            "border-width-100": "0.25rem"
        },
        "breakpoints": {
            "breakpoints-xs": "0rem",
            "breakpoints-sm": "30.625rem",
            "breakpoints-md": "48rem",
            "breakpoints-lg": "65rem",
            "breakpoints-xl": "90rem"
        },
        "color": {
            "color-scheme": "light",
            "color-bg": "rgba(241, 241, 241, 1)",
            "color-bg-inverse": "rgba(26, 26, 26, 1)",
            "color-bg-surface": "rgba(255, 255, 255, 1)",
            "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
            "color-bg-surface-active": "rgba(243, 243, 243, 1)",
            "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
            "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
            "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
            "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
            "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
            "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
            "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
            "color-bg-surface-info": "rgba(234, 244, 255, 1)",
            "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
            "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
            "color-bg-surface-success": "rgba(205, 254, 212, 1)",
            "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
            "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
            "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
            "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
            "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
            "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
            "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
            "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
            "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
            "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
            "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
            "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
            "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
            "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
            "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
            "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
            "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
            "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
            "color-bg-fill": "rgba(255, 255, 255, 1)",
            "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
            "color-bg-fill-active": "rgba(247, 247, 247, 1)",
            "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
            "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
            "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
            "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
            "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
            "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
            "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
            "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
            "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
            "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
            "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
            "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
            "color-bg-fill-info": "rgba(145, 208, 255, 1)",
            "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
            "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
            "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
            "color-bg-fill-success": "rgba(4, 123, 93, 1)",
            "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
            "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
            "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
            "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
            "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
            "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
            "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
            "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
            "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
            "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
            "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
            "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
            "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
            "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
            "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
            "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
            "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
            "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
            "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
            "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
            "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
            "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
            "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
            "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
            "color-text": "rgba(48, 48, 48, 1)",
            "color-text-secondary": "rgba(97, 97, 97, 1)",
            "color-text-disabled": "rgba(181, 181, 181, 1)",
            "color-text-link": "rgba(0, 91, 211, 1)",
            "color-text-link-hover": "rgba(0, 66, 153, 1)",
            "color-text-link-active": "rgba(0, 46, 106, 1)",
            "color-text-brand": "rgba(74, 74, 74, 1)",
            "color-text-brand-hover": "rgba(48, 48, 48, 1)",
            "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
            "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
            "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
            "color-text-info": "rgba(0, 58, 90, 1)",
            "color-text-info-hover": "rgba(0, 58, 90, 1)",
            "color-text-info-active": "rgba(0, 33, 51, 1)",
            "color-text-info-secondary": "rgba(0, 124, 180, 1)",
            "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-text-success": "rgba(1, 75, 64, 1)",
            "color-text-success-hover": "rgba(7, 54, 48, 1)",
            "color-text-success-active": "rgba(2, 38, 34, 1)",
            "color-text-success-secondary": "rgba(4, 123, 93, 1)",
            "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
            "color-text-caution": "rgba(79, 71, 0, 1)",
            "color-text-caution-hover": "rgba(51, 46, 0, 1)",
            "color-text-caution-active": "rgba(31, 28, 0, 1)",
            "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
            "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
            "color-text-warning": "rgba(94, 66, 0, 1)",
            "color-text-warning-hover": "rgba(65, 45, 0, 1)",
            "color-text-warning-active": "rgba(37, 26, 0, 1)",
            "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
            "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
            "color-text-critical": "rgba(142, 11, 33, 1)",
            "color-text-critical-hover": "rgba(95, 7, 22, 1)",
            "color-text-critical-active": "rgba(47, 4, 11, 1)",
            "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
            "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
            "color-text-emphasis": "rgba(0, 91, 211, 1)",
            "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
            "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
            "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
            "color-text-magic": "rgba(87, 0, 209, 1)",
            "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
            "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
            "color-text-inverse": "rgba(227, 227, 227, 1)",
            "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
            "color-text-link-inverse": "rgba(197, 208, 255, 1)",
            "color-border": "rgba(227, 227, 227, 1)",
            "color-border-hover": "rgba(204, 204, 204, 1)",
            "color-border-disabled": "rgba(235, 235, 235, 1)",
            "color-border-secondary": "rgba(235, 235, 235, 1)",
            "color-border-tertiary": "rgba(204, 204, 204, 1)",
            "color-border-focus": "rgba(0, 91, 211, 1)",
            "color-border-brand": "rgba(227, 227, 227, 1)",
            "color-border-info": "rgba(168, 216, 255, 1)",
            "color-border-success": "rgba(146, 252, 172, 1)",
            "color-border-caution": "rgba(255, 235, 120, 1)",
            "color-border-warning": "rgba(255, 200, 121, 1)",
            "color-border-critical": "rgba(254, 193, 199, 1)",
            "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
            "color-border-emphasis": "rgba(0, 91, 211, 1)",
            "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-border-magic": "rgba(228, 222, 255, 1)",
            "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
            "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
            "color-border-inverse": "rgba(97, 97, 97, 1)",
            "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
            "color-border-inverse-active": "rgba(227, 227, 227, 1)",
            "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
            "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
            "color-icon": "rgba(74, 74, 74, 1)",
            "color-icon-hover": "rgba(48, 48, 48, 1)",
            "color-icon-active": "rgba(26, 26, 26, 1)",
            "color-icon-disabled": "rgba(204, 204, 204, 1)",
            "color-icon-secondary": "rgba(138, 138, 138, 1)",
            "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
            "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
            "color-icon-brand": "rgba(26, 26, 26, 1)",
            "color-icon-info": "rgba(0, 148, 213, 1)",
            "color-icon-success": "rgba(4, 123, 93, 1)",
            "color-icon-caution": "rgba(153, 138, 0, 1)",
            "color-icon-warning": "rgba(178, 132, 0, 1)",
            "color-icon-critical": "rgba(226, 44, 56, 1)",
            "color-icon-emphasis": "rgba(0, 91, 211, 1)",
            "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-icon-magic": "rgba(128, 81, 255, 1)",
            "color-icon-inverse": "rgba(227, 227, 227, 1)",
            "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
            "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
            "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
            "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
            "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
            "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
            "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
            "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
            "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
            "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
            "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
            "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
            "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
            "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
            "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
            "color-button-gradient-bg-fill": "none",
            "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-input-bg-surface": "rgba(253, 253, 253, 1)",
            "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
            "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
            "color-input-border": "rgba(138, 138, 138, 1)",
            "color-input-border-hover": "rgba(97, 97, 97, 1)",
            "color-input-border-active": "rgba(26, 26, 26, 1)",
            "color-nav-bg": "rgba(235, 235, 235, 1)",
            "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
            "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
            "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
            "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
            "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
            "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
            "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
            "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
        },
        "font": {
            "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
            "font-size-275": "0.6875rem",
            "font-size-300": "0.75rem",
            "font-size-325": "0.8125rem",
            "font-size-350": "0.875rem",
            "font-size-400": "1rem",
            "font-size-450": "1.125rem",
            "font-size-500": "1.25rem",
            "font-size-550": "1.375rem",
            "font-size-600": "1.5rem",
            "font-size-750": "1.875rem",
            "font-size-800": "2rem",
            "font-size-900": "2.25rem",
            "font-size-1000": "2.5rem",
            "font-weight-regular": "450",
            "font-weight-medium": "550",
            "font-weight-semibold": "650",
            "font-weight-bold": "700",
            "font-letter-spacing-densest": "-0.03375rem",
            "font-letter-spacing-denser": "-0.01875rem",
            "font-letter-spacing-dense": "-0.0125rem",
            "font-letter-spacing-normal": "0rem",
            "font-line-height-300": "0.75rem",
            "font-line-height-400": "1rem",
            "font-line-height-500": "1.25rem",
            "font-line-height-600": "1.5rem",
            "font-line-height-700": "1.75rem",
            "font-line-height-800": "2rem",
            "font-line-height-1000": "2.5rem",
            "font-line-height-1200": "3rem"
        },
        "height": {
            "height-0": "0rem",
            "height-025": "0.0625rem",
            "height-050": "0.125rem",
            "height-100": "0.25rem",
            "height-150": "0.375rem",
            "height-200": "0.5rem",
            "height-300": "0.75rem",
            "height-400": "1rem",
            "height-500": "1.25rem",
            "height-600": "1.5rem",
            "height-700": "1.75rem",
            "height-800": "2rem",
            "height-900": "2.25rem",
            "height-1000": "2.5rem",
            "height-1200": "3rem",
            "height-1600": "4rem",
            "height-2000": "5rem",
            "height-2400": "6rem",
            "height-2800": "7rem",
            "height-3200": "8rem"
        },
        "motion": {
            "motion-duration-0": "0ms",
            "motion-duration-50": "50ms",
            "motion-duration-100": "100ms",
            "motion-duration-150": "150ms",
            "motion-duration-200": "200ms",
            "motion-duration-250": "250ms",
            "motion-duration-300": "300ms",
            "motion-duration-350": "350ms",
            "motion-duration-400": "400ms",
            "motion-duration-450": "450ms",
            "motion-duration-500": "500ms",
            "motion-duration-5000": "5000ms",
            "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
            "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
            "motion-linear": "cubic-bezier(0, 0, 1, 1)",
            "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
            "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
            "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
            "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
            "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
            "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
        },
        "shadow": {
            "shadow-0": "none",
            "shadow-100": "none",
            "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
            "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
            "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
            "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
            "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
            "shadow-bevel-100": "none",
            "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
            "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
            "shadow-button": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
            "shadow-button-hover": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
            "shadow-button-inset": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
            "shadow-button-primary": "none",
            "shadow-button-primary-hover": "none",
            "shadow-button-primary-inset": "none",
            "shadow-button-primary-critical": "none",
            "shadow-button-primary-critical-hover": "none",
            "shadow-button-primary-critical-inset": "none",
            "shadow-button-primary-success": "none",
            "shadow-button-primary-success-hover": "none",
            "shadow-button-primary-success-inset": "none",
            "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
        },
        "space": {
            "space-0": "0rem",
            "space-025": "0.0625rem",
            "space-050": "0.125rem",
            "space-100": "0.25rem",
            "space-150": "0.375rem",
            "space-200": "0.5rem",
            "space-300": "0.75rem",
            "space-400": "1rem",
            "space-500": "1.25rem",
            "space-600": "1.5rem",
            "space-800": "2rem",
            "space-1000": "2.5rem",
            "space-1200": "3rem",
            "space-1600": "4rem",
            "space-2000": "5rem",
            "space-2400": "6rem",
            "space-2800": "7rem",
            "space-3200": "8rem",
            "space-button-group-gap": "0.5rem",
            "space-card-gap": "0.5rem",
            "space-card-padding": "1rem",
            "space-table-cell-padding": "0.375rem"
        },
        "text": {
            "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-3xl-font-size": "2.25rem",
            "text-heading-3xl-font-weight": "700",
            "text-heading-3xl-font-letter-spacing": "-0.03375rem",
            "text-heading-3xl-font-line-height": "3rem",
            "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-2xl-font-size": "2rem",
            "text-heading-2xl-font-weight": "700",
            "text-heading-2xl-font-letter-spacing": "-0.01875rem",
            "text-heading-2xl-font-line-height": "2.5rem",
            "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xl-font-size": "1.375rem",
            "text-heading-xl-font-weight": "700",
            "text-heading-xl-font-letter-spacing": "-0.0125rem",
            "text-heading-xl-font-line-height": "1.75rem",
            "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-lg-font-size": "1.125rem",
            "text-heading-lg-font-weight": "650",
            "text-heading-lg-font-letter-spacing": "-0.0125rem",
            "text-heading-lg-font-line-height": "1.5rem",
            "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-md-font-size": "1rem",
            "text-heading-md-font-weight": "650",
            "text-heading-md-font-letter-spacing": "0rem",
            "text-heading-md-font-line-height": "1.25rem",
            "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-sm-font-size": "0.875rem",
            "text-heading-sm-font-weight": "650",
            "text-heading-sm-font-letter-spacing": "0rem",
            "text-heading-sm-font-line-height": "1.25rem",
            "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xs-font-size": "0.75rem",
            "text-heading-xs-font-weight": "650",
            "text-heading-xs-font-letter-spacing": "0rem",
            "text-heading-xs-font-line-height": "1rem",
            "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-lg-font-size": "1.125rem",
            "text-body-lg-font-weight": "450",
            "text-body-lg-font-letter-spacing": "0rem",
            "text-body-lg-font-line-height": "1.75rem",
            "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-md-font-size": "1rem",
            "text-body-md-font-weight": "450",
            "text-body-md-font-letter-spacing": "0rem",
            "text-body-md-font-line-height": "1.5rem",
            "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-sm-font-size": "0.875rem",
            "text-body-sm-font-weight": "450",
            "text-body-sm-font-letter-spacing": "0rem",
            "text-body-sm-font-line-height": "1.25rem",
            "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-xs-font-size": "0.75rem",
            "text-body-xs-font-weight": "450",
            "text-body-xs-font-letter-spacing": "0rem",
            "text-body-xs-font-line-height": "1rem"
        },
        "width": {
            "width-0": "0rem",
            "width-025": "0.0625rem",
            "width-050": "0.125rem",
            "width-100": "0.25rem",
            "width-150": "0.375rem",
            "width-200": "0.5rem",
            "width-300": "0.75rem",
            "width-400": "1rem",
            "width-500": "1.25rem",
            "width-600": "1.5rem",
            "width-700": "1.75rem",
            "width-800": "2rem",
            "width-900": "2.25rem",
            "width-1000": "2.5rem",
            "width-1200": "3rem",
            "width-1600": "4rem",
            "width-2000": "5rem",
            "width-2400": "6rem",
            "width-2800": "7rem",
            "width-3200": "8rem"
        },
        "zIndex": {
            "z-index-0": "auto",
            "z-index-1": "100",
            "z-index-2": "400",
            "z-index-3": "510",
            "z-index-4": "512",
            "z-index-5": "513",
            "z-index-6": "514",
            "z-index-7": "515",
            "z-index-8": "516",
            "z-index-9": "517",
            "z-index-10": "518",
            "z-index-11": "519",
            "z-index-12": "520"
        }
    },
    "light-high-contrast-experimental": {
        "border": {
            "border-radius-0": "0rem",
            "border-radius-050": "0.125rem",
            "border-radius-100": "0.25rem",
            "border-radius-150": "0.375rem",
            "border-radius-200": "0.5rem",
            "border-radius-300": "0.75rem",
            "border-radius-400": "1rem",
            "border-radius-500": "1.25rem",
            "border-radius-750": "1.875rem",
            "border-radius-full": "624.9375rem",
            "border-width-0": "0rem",
            "border-width-0165": "0.04125rem",
            "border-width-025": "0.0625rem",
            "border-width-050": "0.125rem",
            "border-width-100": "0.25rem"
        },
        "breakpoints": {
            "breakpoints-xs": "0rem",
            "breakpoints-sm": "30.625rem",
            "breakpoints-md": "48rem",
            "breakpoints-lg": "65rem",
            "breakpoints-xl": "90rem"
        },
        "color": {
            "color-scheme": "light",
            "color-bg": "rgba(241, 241, 241, 1)",
            "color-bg-inverse": "rgba(26, 26, 26, 1)",
            "color-bg-surface": "rgba(255, 255, 255, 1)",
            "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
            "color-bg-surface-active": "rgba(243, 243, 243, 1)",
            "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
            "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
            "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
            "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
            "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
            "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
            "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
            "color-bg-surface-info": "rgba(234, 244, 255, 1)",
            "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
            "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
            "color-bg-surface-success": "rgba(205, 254, 212, 1)",
            "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
            "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
            "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
            "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
            "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
            "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
            "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
            "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
            "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
            "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
            "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
            "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
            "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
            "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
            "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
            "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
            "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
            "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
            "color-bg-fill": "rgba(255, 255, 255, 1)",
            "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
            "color-bg-fill-active": "rgba(247, 247, 247, 1)",
            "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
            "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
            "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
            "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
            "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
            "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
            "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
            "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
            "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
            "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
            "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
            "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
            "color-bg-fill-info": "rgba(145, 208, 255, 1)",
            "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
            "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
            "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
            "color-bg-fill-success": "rgba(4, 123, 93, 1)",
            "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
            "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
            "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
            "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
            "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
            "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
            "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
            "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
            "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
            "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
            "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
            "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
            "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
            "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
            "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
            "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
            "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
            "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
            "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
            "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
            "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
            "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
            "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
            "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
            "color-text": "rgba(26, 26, 26, 1)",
            "color-text-secondary": "rgba(26, 26, 26, 1)",
            "color-text-disabled": "rgba(181, 181, 181, 1)",
            "color-text-link": "rgba(0, 91, 211, 1)",
            "color-text-link-hover": "rgba(0, 66, 153, 1)",
            "color-text-link-active": "rgba(0, 46, 106, 1)",
            "color-text-brand": "rgba(26, 26, 26, 1)",
            "color-text-brand-hover": "rgba(48, 48, 48, 1)",
            "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
            "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
            "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
            "color-text-info": "rgba(0, 58, 90, 1)",
            "color-text-info-hover": "rgba(0, 58, 90, 1)",
            "color-text-info-active": "rgba(0, 33, 51, 1)",
            "color-text-info-secondary": "rgba(0, 124, 180, 1)",
            "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-text-success": "rgba(1, 75, 64, 1)",
            "color-text-success-hover": "rgba(7, 54, 48, 1)",
            "color-text-success-active": "rgba(2, 38, 34, 1)",
            "color-text-success-secondary": "rgba(4, 123, 93, 1)",
            "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
            "color-text-caution": "rgba(79, 71, 0, 1)",
            "color-text-caution-hover": "rgba(51, 46, 0, 1)",
            "color-text-caution-active": "rgba(31, 28, 0, 1)",
            "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
            "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
            "color-text-warning": "rgba(94, 66, 0, 1)",
            "color-text-warning-hover": "rgba(65, 45, 0, 1)",
            "color-text-warning-active": "rgba(37, 26, 0, 1)",
            "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
            "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
            "color-text-critical": "rgba(142, 11, 33, 1)",
            "color-text-critical-hover": "rgba(95, 7, 22, 1)",
            "color-text-critical-active": "rgba(47, 4, 11, 1)",
            "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
            "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
            "color-text-emphasis": "rgba(0, 91, 211, 1)",
            "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
            "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
            "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
            "color-text-magic": "rgba(87, 0, 209, 1)",
            "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
            "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
            "color-text-inverse": "rgba(227, 227, 227, 1)",
            "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
            "color-text-link-inverse": "rgba(197, 208, 255, 1)",
            "color-border": "rgba(138, 138, 138, 1)",
            "color-border-hover": "rgba(204, 204, 204, 1)",
            "color-border-disabled": "rgba(235, 235, 235, 1)",
            "color-border-secondary": "rgba(138, 138, 138, 1)",
            "color-border-tertiary": "rgba(204, 204, 204, 1)",
            "color-border-focus": "rgba(0, 91, 211, 1)",
            "color-border-brand": "rgba(227, 227, 227, 1)",
            "color-border-info": "rgba(168, 216, 255, 1)",
            "color-border-success": "rgba(146, 252, 172, 1)",
            "color-border-caution": "rgba(255, 235, 120, 1)",
            "color-border-warning": "rgba(255, 200, 121, 1)",
            "color-border-critical": "rgba(254, 193, 199, 1)",
            "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
            "color-border-emphasis": "rgba(0, 91, 211, 1)",
            "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-border-magic": "rgba(228, 222, 255, 1)",
            "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
            "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
            "color-border-inverse": "rgba(97, 97, 97, 1)",
            "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
            "color-border-inverse-active": "rgba(227, 227, 227, 1)",
            "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
            "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
            "color-icon": "rgba(74, 74, 74, 1)",
            "color-icon-hover": "rgba(48, 48, 48, 1)",
            "color-icon-active": "rgba(26, 26, 26, 1)",
            "color-icon-disabled": "rgba(204, 204, 204, 1)",
            "color-icon-secondary": "rgba(74, 74, 74, 1)",
            "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
            "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
            "color-icon-brand": "rgba(26, 26, 26, 1)",
            "color-icon-info": "rgba(0, 148, 213, 1)",
            "color-icon-success": "rgba(4, 123, 93, 1)",
            "color-icon-caution": "rgba(153, 138, 0, 1)",
            "color-icon-warning": "rgba(178, 132, 0, 1)",
            "color-icon-critical": "rgba(226, 44, 56, 1)",
            "color-icon-emphasis": "rgba(0, 91, 211, 1)",
            "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-icon-magic": "rgba(128, 81, 255, 1)",
            "color-icon-inverse": "rgba(227, 227, 227, 1)",
            "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
            "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
            "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
            "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
            "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
            "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
            "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
            "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
            "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
            "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
            "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
            "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
            "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
            "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
            "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
            "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
            "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-input-bg-surface": "rgba(253, 253, 253, 1)",
            "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
            "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
            "color-input-border": "rgba(74, 74, 74, 1)",
            "color-input-border-hover": "rgba(97, 97, 97, 1)",
            "color-input-border-active": "rgba(26, 26, 26, 1)",
            "color-nav-bg": "rgba(235, 235, 235, 1)",
            "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
            "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
            "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
            "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
            "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
            "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
            "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
            "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
        },
        "font": {
            "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
            "font-size-275": "0.6875rem",
            "font-size-300": "0.75rem",
            "font-size-325": "0.8125rem",
            "font-size-350": "0.875rem",
            "font-size-400": "1rem",
            "font-size-450": "1.125rem",
            "font-size-500": "1.25rem",
            "font-size-550": "1.375rem",
            "font-size-600": "1.5rem",
            "font-size-750": "1.875rem",
            "font-size-800": "2rem",
            "font-size-900": "2.25rem",
            "font-size-1000": "2.5rem",
            "font-weight-regular": "450",
            "font-weight-medium": "550",
            "font-weight-semibold": "650",
            "font-weight-bold": "700",
            "font-letter-spacing-densest": "-0.03375rem",
            "font-letter-spacing-denser": "-0.01875rem",
            "font-letter-spacing-dense": "-0.0125rem",
            "font-letter-spacing-normal": "0rem",
            "font-line-height-300": "0.75rem",
            "font-line-height-400": "1rem",
            "font-line-height-500": "1.25rem",
            "font-line-height-600": "1.5rem",
            "font-line-height-700": "1.75rem",
            "font-line-height-800": "2rem",
            "font-line-height-1000": "2.5rem",
            "font-line-height-1200": "3rem"
        },
        "height": {
            "height-0": "0rem",
            "height-025": "0.0625rem",
            "height-050": "0.125rem",
            "height-100": "0.25rem",
            "height-150": "0.375rem",
            "height-200": "0.5rem",
            "height-300": "0.75rem",
            "height-400": "1rem",
            "height-500": "1.25rem",
            "height-600": "1.5rem",
            "height-700": "1.75rem",
            "height-800": "2rem",
            "height-900": "2.25rem",
            "height-1000": "2.5rem",
            "height-1200": "3rem",
            "height-1600": "4rem",
            "height-2000": "5rem",
            "height-2400": "6rem",
            "height-2800": "7rem",
            "height-3200": "8rem"
        },
        "motion": {
            "motion-duration-0": "0ms",
            "motion-duration-50": "50ms",
            "motion-duration-100": "100ms",
            "motion-duration-150": "150ms",
            "motion-duration-200": "200ms",
            "motion-duration-250": "250ms",
            "motion-duration-300": "300ms",
            "motion-duration-350": "350ms",
            "motion-duration-400": "400ms",
            "motion-duration-450": "450ms",
            "motion-duration-500": "500ms",
            "motion-duration-5000": "5000ms",
            "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
            "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
            "motion-linear": "cubic-bezier(0, 0, 1, 1)",
            "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
            "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
            "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
            "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
            "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
            "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
        },
        "shadow": {
            "shadow-0": "none",
            "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
            "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
            "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
            "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
            "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
            "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
            "shadow-bevel-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
            "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
            "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
            "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
            "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
            "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
            "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset",
            "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
            "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
            "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
            "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
            "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
            "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
            "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
            "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
            "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
        },
        "space": {
            "space-0": "0rem",
            "space-025": "0.0625rem",
            "space-050": "0.125rem",
            "space-100": "0.25rem",
            "space-150": "0.375rem",
            "space-200": "0.5rem",
            "space-300": "0.75rem",
            "space-400": "1rem",
            "space-500": "1.25rem",
            "space-600": "1.5rem",
            "space-800": "2rem",
            "space-1000": "2.5rem",
            "space-1200": "3rem",
            "space-1600": "4rem",
            "space-2000": "5rem",
            "space-2400": "6rem",
            "space-2800": "7rem",
            "space-3200": "8rem",
            "space-button-group-gap": "0.5rem",
            "space-card-gap": "1rem",
            "space-card-padding": "1rem",
            "space-table-cell-padding": "0.375rem"
        },
        "text": {
            "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-3xl-font-size": "2.25rem",
            "text-heading-3xl-font-weight": "700",
            "text-heading-3xl-font-letter-spacing": "-0.03375rem",
            "text-heading-3xl-font-line-height": "3rem",
            "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-2xl-font-size": "1.875rem",
            "text-heading-2xl-font-weight": "700",
            "text-heading-2xl-font-letter-spacing": "-0.01875rem",
            "text-heading-2xl-font-line-height": "2.5rem",
            "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xl-font-size": "1.5rem",
            "text-heading-xl-font-weight": "700",
            "text-heading-xl-font-letter-spacing": "-0.0125rem",
            "text-heading-xl-font-line-height": "2rem",
            "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-lg-font-size": "1.25rem",
            "text-heading-lg-font-weight": "650",
            "text-heading-lg-font-letter-spacing": "-0.0125rem",
            "text-heading-lg-font-line-height": "1.5rem",
            "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-md-font-size": "0.875rem",
            "text-heading-md-font-weight": "650",
            "text-heading-md-font-letter-spacing": "0rem",
            "text-heading-md-font-line-height": "1.25rem",
            "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-sm-font-size": "0.8125rem",
            "text-heading-sm-font-weight": "650",
            "text-heading-sm-font-letter-spacing": "0rem",
            "text-heading-sm-font-line-height": "1.25rem",
            "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xs-font-size": "0.75rem",
            "text-heading-xs-font-weight": "650",
            "text-heading-xs-font-letter-spacing": "0rem",
            "text-heading-xs-font-line-height": "1rem",
            "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-lg-font-size": "0.875rem",
            "text-body-lg-font-weight": "450",
            "text-body-lg-font-letter-spacing": "0rem",
            "text-body-lg-font-line-height": "1.25rem",
            "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-md-font-size": "0.8125rem",
            "text-body-md-font-weight": "450",
            "text-body-md-font-letter-spacing": "0rem",
            "text-body-md-font-line-height": "1.25rem",
            "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-sm-font-size": "0.75rem",
            "text-body-sm-font-weight": "450",
            "text-body-sm-font-letter-spacing": "0rem",
            "text-body-sm-font-line-height": "1rem",
            "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-xs-font-size": "0.6875rem",
            "text-body-xs-font-weight": "450",
            "text-body-xs-font-letter-spacing": "0rem",
            "text-body-xs-font-line-height": "0.75rem"
        },
        "width": {
            "width-0": "0rem",
            "width-025": "0.0625rem",
            "width-050": "0.125rem",
            "width-100": "0.25rem",
            "width-150": "0.375rem",
            "width-200": "0.5rem",
            "width-300": "0.75rem",
            "width-400": "1rem",
            "width-500": "1.25rem",
            "width-600": "1.5rem",
            "width-700": "1.75rem",
            "width-800": "2rem",
            "width-900": "2.25rem",
            "width-1000": "2.5rem",
            "width-1200": "3rem",
            "width-1600": "4rem",
            "width-2000": "5rem",
            "width-2400": "6rem",
            "width-2800": "7rem",
            "width-3200": "8rem"
        },
        "zIndex": {
            "z-index-0": "auto",
            "z-index-1": "100",
            "z-index-2": "400",
            "z-index-3": "510",
            "z-index-4": "512",
            "z-index-5": "513",
            "z-index-6": "514",
            "z-index-7": "515",
            "z-index-8": "516",
            "z-index-9": "517",
            "z-index-10": "518",
            "z-index-11": "519",
            "z-index-12": "520"
        }
    },
    "dark-experimental": {
        "border": {
            "border-radius-0": "0rem",
            "border-radius-050": "0.125rem",
            "border-radius-100": "0.25rem",
            "border-radius-150": "0.375rem",
            "border-radius-200": "0.5rem",
            "border-radius-300": "0.75rem",
            "border-radius-400": "1rem",
            "border-radius-500": "1.25rem",
            "border-radius-750": "1.875rem",
            "border-radius-full": "624.9375rem",
            "border-width-0": "0rem",
            "border-width-0165": "0.04125rem",
            "border-width-025": "0.0625rem",
            "border-width-050": "0.125rem",
            "border-width-100": "0.25rem"
        },
        "breakpoints": {
            "breakpoints-xs": "0rem",
            "breakpoints-sm": "30.625rem",
            "breakpoints-md": "48rem",
            "breakpoints-lg": "65rem",
            "breakpoints-xl": "90rem"
        },
        "color": {
            "color-scheme": "dark",
            "color-bg": "rgba(26, 26, 26, 1)",
            "color-bg-inverse": "rgba(26, 26, 26, 1)",
            "color-bg-surface": "rgba(48, 48, 48, 1)",
            "color-bg-surface-hover": "rgba(74, 74, 74, 1)",
            "color-bg-surface-active": "rgba(97, 97, 97, 1)",
            "color-bg-surface-selected": "rgba(97, 97, 97, 1)",
            "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
            "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
            "color-bg-surface-secondary-hover": "rgba(255, 255, 255, 0.06)",
            "color-bg-surface-secondary-active": "rgba(255, 255, 255, 0.14)",
            "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary": "rgba(255, 255, 255, 0.08)",
            "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
            "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
            "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
            "color-bg-surface-brand-selected": "rgba(74, 74, 74, 1)",
            "color-bg-surface-info": "rgba(234, 244, 255, 1)",
            "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
            "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
            "color-bg-surface-success": "rgba(205, 254, 212, 1)",
            "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
            "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
            "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
            "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
            "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
            "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
            "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
            "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
            "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
            "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
            "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
            "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
            "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
            "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
            "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
            "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
            "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
            "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
            "color-bg-fill": "rgba(48, 48, 48, 1)",
            "color-bg-fill-hover": "rgba(255, 255, 255, 0.05)",
            "color-bg-fill-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-selected": "rgba(97, 97, 97, 1)",
            "color-bg-fill-disabled": "rgba(255, 255, 255, 0.05)",
            "color-bg-fill-secondary": "rgba(255, 255, 255, 0.08)",
            "color-bg-fill-secondary-hover": "rgba(255, 255, 255, 0.11)",
            "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
            "color-bg-fill-secondary-selected": "rgba(255, 255, 255, 0.17)",
            "color-bg-fill-tertiary": "rgba(48, 48, 48, 1)",
            "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
            "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
            "color-bg-fill-brand": "rgba(255, 255, 255, 1)",
            "color-bg-fill-brand-hover": "rgba(243, 243, 243, 1)",
            "color-bg-fill-brand-active": "rgba(247, 247, 247, 1)",
            "color-bg-fill-brand-selected": "rgba(212, 212, 212, 1)",
            "color-bg-fill-brand-disabled": "rgba(255, 255, 255, 0.22)",
            "color-bg-fill-info": "rgba(145, 208, 255, 1)",
            "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
            "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
            "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
            "color-bg-fill-success": "rgba(4, 123, 93, 1)",
            "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
            "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
            "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
            "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
            "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
            "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
            "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
            "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
            "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
            "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
            "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
            "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
            "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
            "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
            "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
            "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
            "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
            "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
            "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
            "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
            "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
            "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
            "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-transparent": "rgba(255, 255, 255, 0.11)",
            "color-bg-fill-transparent-hover": "rgba(255, 255, 255, 0.14)",
            "color-bg-fill-transparent-active": "rgba(255, 255, 255, 0.17)",
            "color-bg-fill-transparent-selected": "rgba(255, 255, 255, 0.22)",
            "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
            "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
            "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
            "color-text": "rgba(227, 227, 227, 1)",
            "color-text-secondary": "rgba(181, 181, 181, 1)",
            "color-text-disabled": "rgba(74, 74, 74, 1)",
            "color-text-link": "rgba(0, 91, 211, 1)",
            "color-text-link-hover": "rgba(0, 66, 153, 1)",
            "color-text-link-active": "rgba(0, 46, 106, 1)",
            "color-text-brand": "rgba(74, 74, 74, 1)",
            "color-text-brand-hover": "rgba(48, 48, 48, 1)",
            "color-text-brand-on-bg-fill": "rgba(48, 48, 48, 1)",
            "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
            "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
            "color-text-brand-on-bg-fill-disabled": "rgba(138, 138, 138, 1)",
            "color-text-info": "rgba(0, 58, 90, 1)",
            "color-text-info-hover": "rgba(0, 58, 90, 1)",
            "color-text-info-active": "rgba(0, 33, 51, 1)",
            "color-text-info-secondary": "rgba(0, 124, 180, 1)",
            "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-text-success": "rgba(1, 75, 64, 1)",
            "color-text-success-hover": "rgba(7, 54, 48, 1)",
            "color-text-success-active": "rgba(2, 38, 34, 1)",
            "color-text-success-secondary": "rgba(4, 123, 93, 1)",
            "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
            "color-text-caution": "rgba(79, 71, 0, 1)",
            "color-text-caution-hover": "rgba(51, 46, 0, 1)",
            "color-text-caution-active": "rgba(31, 28, 0, 1)",
            "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
            "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
            "color-text-warning": "rgba(94, 66, 0, 1)",
            "color-text-warning-hover": "rgba(65, 45, 0, 1)",
            "color-text-warning-active": "rgba(37, 26, 0, 1)",
            "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
            "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
            "color-text-critical": "rgba(142, 11, 33, 1)",
            "color-text-critical-hover": "rgba(95, 7, 22, 1)",
            "color-text-critical-active": "rgba(47, 4, 11, 1)",
            "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
            "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
            "color-text-emphasis": "rgba(0, 91, 211, 1)",
            "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
            "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
            "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
            "color-text-magic": "rgba(87, 0, 209, 1)",
            "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
            "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
            "color-text-inverse": "rgba(227, 227, 227, 1)",
            "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
            "color-text-link-inverse": "rgba(197, 208, 255, 1)",
            "color-border": "rgba(227, 227, 227, 1)",
            "color-border-hover": "rgba(204, 204, 204, 1)",
            "color-border-disabled": "rgba(235, 235, 235, 1)",
            "color-border-secondary": "rgba(74, 74, 74, 1)",
            "color-border-tertiary": "rgba(204, 204, 204, 1)",
            "color-border-focus": "rgba(0, 91, 211, 1)",
            "color-border-brand": "rgba(227, 227, 227, 1)",
            "color-border-info": "rgba(168, 216, 255, 1)",
            "color-border-success": "rgba(146, 252, 172, 1)",
            "color-border-caution": "rgba(255, 235, 120, 1)",
            "color-border-warning": "rgba(255, 200, 121, 1)",
            "color-border-critical": "rgba(254, 193, 199, 1)",
            "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
            "color-border-emphasis": "rgba(0, 91, 211, 1)",
            "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-border-magic": "rgba(228, 222, 255, 1)",
            "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
            "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
            "color-border-inverse": "rgba(97, 97, 97, 1)",
            "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
            "color-border-inverse-active": "rgba(227, 227, 227, 1)",
            "color-tooltip-tail-down-border": "rgba(60, 60, 60, 1)",
            "color-tooltip-tail-up-border": "rgba(71, 71, 71, 1)",
            "color-icon": "rgba(227, 227, 227, 1)",
            "color-icon-hover": "rgba(48, 48, 48, 1)",
            "color-icon-active": "rgba(26, 26, 26, 1)",
            "color-icon-disabled": "rgba(74, 74, 74, 1)",
            "color-icon-secondary": "rgba(181, 181, 181, 1)",
            "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
            "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
            "color-icon-brand": "rgba(74, 74, 74, 1)",
            "color-icon-info": "rgba(0, 148, 213, 1)",
            "color-icon-success": "rgba(4, 123, 93, 1)",
            "color-icon-caution": "rgba(153, 138, 0, 1)",
            "color-icon-warning": "rgba(178, 132, 0, 1)",
            "color-icon-critical": "rgba(226, 44, 56, 1)",
            "color-icon-emphasis": "rgba(0, 91, 211, 1)",
            "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
            "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
            "color-icon-magic": "rgba(128, 81, 255, 1)",
            "color-icon-inverse": "rgba(227, 227, 227, 1)",
            "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
            "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
            "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
            "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
            "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
            "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
            "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
            "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
            "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
            "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
            "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
            "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
            "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
            "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
            "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
            "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
            "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
            "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-input-bg-surface": "rgba(253, 253, 253, 1)",
            "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
            "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
            "color-input-border": "rgba(138, 138, 138, 1)",
            "color-input-border-hover": "rgba(97, 97, 97, 1)",
            "color-input-border-active": "rgba(26, 26, 26, 1)",
            "color-nav-bg": "rgba(235, 235, 235, 1)",
            "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
            "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
            "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
            "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
            "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
            "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
            "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
            "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
            "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
            "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
            "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
        },
        "font": {
            "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
            "font-size-275": "0.6875rem",
            "font-size-300": "0.75rem",
            "font-size-325": "0.8125rem",
            "font-size-350": "0.875rem",
            "font-size-400": "1rem",
            "font-size-450": "1.125rem",
            "font-size-500": "1.25rem",
            "font-size-550": "1.375rem",
            "font-size-600": "1.5rem",
            "font-size-750": "1.875rem",
            "font-size-800": "2rem",
            "font-size-900": "2.25rem",
            "font-size-1000": "2.5rem",
            "font-weight-regular": "450",
            "font-weight-medium": "550",
            "font-weight-semibold": "650",
            "font-weight-bold": "700",
            "font-letter-spacing-densest": "-0.03375rem",
            "font-letter-spacing-denser": "-0.01875rem",
            "font-letter-spacing-dense": "-0.0125rem",
            "font-letter-spacing-normal": "0rem",
            "font-line-height-300": "0.75rem",
            "font-line-height-400": "1rem",
            "font-line-height-500": "1.25rem",
            "font-line-height-600": "1.5rem",
            "font-line-height-700": "1.75rem",
            "font-line-height-800": "2rem",
            "font-line-height-1000": "2.5rem",
            "font-line-height-1200": "3rem"
        },
        "height": {
            "height-0": "0rem",
            "height-025": "0.0625rem",
            "height-050": "0.125rem",
            "height-100": "0.25rem",
            "height-150": "0.375rem",
            "height-200": "0.5rem",
            "height-300": "0.75rem",
            "height-400": "1rem",
            "height-500": "1.25rem",
            "height-600": "1.5rem",
            "height-700": "1.75rem",
            "height-800": "2rem",
            "height-900": "2.25rem",
            "height-1000": "2.5rem",
            "height-1200": "3rem",
            "height-1600": "4rem",
            "height-2000": "5rem",
            "height-2400": "6rem",
            "height-2800": "7rem",
            "height-3200": "8rem"
        },
        "motion": {
            "motion-duration-0": "0ms",
            "motion-duration-50": "50ms",
            "motion-duration-100": "100ms",
            "motion-duration-150": "150ms",
            "motion-duration-200": "200ms",
            "motion-duration-250": "250ms",
            "motion-duration-300": "300ms",
            "motion-duration-350": "350ms",
            "motion-duration-400": "400ms",
            "motion-duration-450": "450ms",
            "motion-duration-500": "500ms",
            "motion-duration-5000": "5000ms",
            "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
            "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
            "motion-linear": "cubic-bezier(0, 0, 1, 1)",
            "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
            "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
            "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
            "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
            "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
            "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
        },
        "shadow": {
            "shadow-0": "none",
            "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
            "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
            "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
            "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
            "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
            "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
            "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, -0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem -0.0625rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.16) inset",
            "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
            "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
            "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
            "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
            "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
            "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset",
            "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
            "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
            "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
            "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
            "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
            "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
            "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
            "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
            "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
        },
        "space": {
            "space-0": "0rem",
            "space-025": "0.0625rem",
            "space-050": "0.125rem",
            "space-100": "0.25rem",
            "space-150": "0.375rem",
            "space-200": "0.5rem",
            "space-300": "0.75rem",
            "space-400": "1rem",
            "space-500": "1.25rem",
            "space-600": "1.5rem",
            "space-800": "2rem",
            "space-1000": "2.5rem",
            "space-1200": "3rem",
            "space-1600": "4rem",
            "space-2000": "5rem",
            "space-2400": "6rem",
            "space-2800": "7rem",
            "space-3200": "8rem",
            "space-button-group-gap": "0.5rem",
            "space-card-gap": "1rem",
            "space-card-padding": "1rem",
            "space-table-cell-padding": "0.375rem"
        },
        "text": {
            "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-3xl-font-size": "2.25rem",
            "text-heading-3xl-font-weight": "700",
            "text-heading-3xl-font-letter-spacing": "-0.03375rem",
            "text-heading-3xl-font-line-height": "3rem",
            "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-2xl-font-size": "1.875rem",
            "text-heading-2xl-font-weight": "700",
            "text-heading-2xl-font-letter-spacing": "-0.01875rem",
            "text-heading-2xl-font-line-height": "2.5rem",
            "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xl-font-size": "1.5rem",
            "text-heading-xl-font-weight": "700",
            "text-heading-xl-font-letter-spacing": "-0.0125rem",
            "text-heading-xl-font-line-height": "2rem",
            "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-lg-font-size": "1.25rem",
            "text-heading-lg-font-weight": "650",
            "text-heading-lg-font-letter-spacing": "-0.0125rem",
            "text-heading-lg-font-line-height": "1.5rem",
            "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-md-font-size": "0.875rem",
            "text-heading-md-font-weight": "650",
            "text-heading-md-font-letter-spacing": "0rem",
            "text-heading-md-font-line-height": "1.25rem",
            "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-sm-font-size": "0.8125rem",
            "text-heading-sm-font-weight": "650",
            "text-heading-sm-font-letter-spacing": "0rem",
            "text-heading-sm-font-line-height": "1.25rem",
            "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-heading-xs-font-size": "0.75rem",
            "text-heading-xs-font-weight": "650",
            "text-heading-xs-font-letter-spacing": "0rem",
            "text-heading-xs-font-line-height": "1rem",
            "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-lg-font-size": "0.875rem",
            "text-body-lg-font-weight": "450",
            "text-body-lg-font-letter-spacing": "0rem",
            "text-body-lg-font-line-height": "1.25rem",
            "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-md-font-size": "0.8125rem",
            "text-body-md-font-weight": "450",
            "text-body-md-font-letter-spacing": "0rem",
            "text-body-md-font-line-height": "1.25rem",
            "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-sm-font-size": "0.75rem",
            "text-body-sm-font-weight": "450",
            "text-body-sm-font-letter-spacing": "0rem",
            "text-body-sm-font-line-height": "1rem",
            "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            "text-body-xs-font-size": "0.6875rem",
            "text-body-xs-font-weight": "450",
            "text-body-xs-font-letter-spacing": "0rem",
            "text-body-xs-font-line-height": "0.75rem"
        },
        "width": {
            "width-0": "0rem",
            "width-025": "0.0625rem",
            "width-050": "0.125rem",
            "width-100": "0.25rem",
            "width-150": "0.375rem",
            "width-200": "0.5rem",
            "width-300": "0.75rem",
            "width-400": "1rem",
            "width-500": "1.25rem",
            "width-600": "1.5rem",
            "width-700": "1.75rem",
            "width-800": "2rem",
            "width-900": "2.25rem",
            "width-1000": "2.5rem",
            "width-1200": "3rem",
            "width-1600": "4rem",
            "width-2000": "5rem",
            "width-2400": "6rem",
            "width-2800": "7rem",
            "width-3200": "8rem"
        },
        "zIndex": {
            "z-index-0": "auto",
            "z-index-1": "100",
            "z-index-2": "400",
            "z-index-3": "510",
            "z-index-4": "512",
            "z-index-5": "513",
            "z-index-6": "514",
            "z-index-7": "515",
            "z-index-8": "516",
            "z-index-9": "517",
            "z-index-10": "518",
            "z-index-11": "519",
            "z-index-12": "520"
        }
    }
};
var themeDefault = themes[__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeNameDefault"]];
var isTokenName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIsTokenName"])(themes[__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeNameDefault"]]);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-theme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext,
    "ThemeNameContext",
    ()=>ThemeNameContext,
    "UseTheme",
    ()=>UseTheme,
    "getTheme",
    ()=>getTheme,
    "useTheme",
    ()=>useTheme,
    "useThemeName",
    ()=>useThemeName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const ThemeNameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function getTheme(themeName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["themes"][themeName];
}
function useTheme() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!theme) {
        throw new Error('No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.');
    }
    return theme;
}
function useThemeName() {
    const themeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeNameContext);
    if (!themeName) {
        throw new Error('No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.');
    }
    return themeName;
}
function UseTheme(props) {
    const theme = useTheme();
    return props.children(theme);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/debounce.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debounce",
    ()=>debounce
]);
function debounce(func, waitArg, options) {
    let lastArgs;
    let lastThis;
    let maxWait;
    let result;
    let timerId;
    let lastCallTime;
    let lastInvokeTime = 0;
    let leading = false;
    let maxing = false;
    let trailing = true;
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    const useRAF = !waitArg && waitArg !== 0;
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    const wait = waitArg || 0;
    if (typeof options === 'object') {
        leading = Boolean(options.leading);
        maxing = 'maxWait' in options;
        maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : undefined;
        trailing = 'trailing' in options ? Boolean(options.trailing) : trailing;
    }
    function invokeFunc(time) {
        const args = lastArgs;
        const thisArg = lastThis;
        lastArgs = undefined;
        lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function startTimer(pendingFunc, wait) {
        if (useRAF) {
            cancelAnimationFrame(timerId);
            return requestAnimationFrame(pendingFunc);
        }
        return setTimeout(pendingFunc, wait);
    }
    function cancelTimer(id) {
        if (useRAF) {
            return cancelAnimationFrame(id);
        }
        clearTimeout(id);
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = startTimer(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;
        return maxing && maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && maxWait && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = startTimer(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        // eslint-disable-next-line no-multi-assign
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            cancelTimer(timerId);
        }
        lastInvokeTime = 0;
        // eslint-disable-next-line no-multi-assign
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now());
    }
    function pending() {
        return timerId !== undefined;
    }
    function debounced(...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);
        lastArgs = args;
        // eslint-disable-next-line consistent-this, @typescript-eslint/no-this-alias
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = startTimer(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.pending = pending;
    return debounced;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/shared.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_ATTRIBUTE",
    ()=>DATA_ATTRIBUTE,
    "dataPolarisTopBar",
    ()=>dataPolarisTopBar,
    "headerCell",
    ()=>headerCell,
    "layer",
    ()=>layer,
    "overlay",
    ()=>overlay,
    "portal",
    ()=>portal,
    "scrollable",
    ()=>scrollable,
    "unstyled",
    ()=>unstyled
]);
const scrollable = {
    props: {
        'data-polaris-scrollable': true
    },
    selector: '[data-polaris-scrollable]'
};
const overlay = {
    props: {
        'data-polaris-overlay': true
    },
    selector: '[data-polaris-overlay]'
};
const layer = {
    props: {
        'data-polaris-layer': true
    },
    selector: '[data-polaris-layer]'
};
const unstyled = {
    props: {
        'data-polaris-unstyled': true
    },
    selector: '[data-polaris-unstyled]'
};
const dataPolarisTopBar = {
    props: {
        'data-polaris-top-bar': true
    },
    selector: '[data-polaris-top-bar]'
};
const headerCell = {
    props: {
        'data-polaris-header-cell': true
    },
    selector: '[data-polaris-header-cell]'
};
const portal = {
    props: [
        'data-portal-id'
    ],
    selector: '[data-portal-id]'
};
const DATA_ATTRIBUTE = {
    overlay,
    layer
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/target.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isServer",
    ()=>isServer
]);
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined' || typeof document === 'undefined';
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/target.js [app-ssr] (ecmascript)");
;
;
// eslint-disable-next-line no-restricted-imports
const useIsomorphicLayoutEffect = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"];
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBreakpointsQueryEntries",
    ()=>getBreakpointsQueryEntries,
    "navigationBarCollapsed",
    ()=>navigationBarCollapsed,
    "stackedContent",
    ()=>stackedContent,
    "useBreakpoints",
    ()=>useBreakpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/target.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js [app-ssr] (ecmascript)");
;
;
;
;
const Breakpoints = {
    // TODO: Update to smDown
    navigationBarCollapsed: '767.95px',
    // TODO: Update to lgDown
    stackedContent: '1039.95px'
};
const noWindowMatches = {
    media: '',
    addListener: noop,
    removeListener: noop,
    matches: false,
    onchange: noop,
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: (_)=>true
};
function noop() {}
function navigationBarCollapsed() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}
function stackedContent() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}
/**
 * Directional alias for each Polaris `breakpoints` token.
 *
 * @example 'smUp' | 'smDown' | 'smOnly' | 'mdUp' | etc.
 */ /**
 * Match results for each directional Polaris `breakpoints` alias.
 */ const hookCallbacks = new Set();
const breakpointsQueryEntries = getBreakpointsQueryEntries(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["themeDefault"].breakpoints);
if (!__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"]) {
    breakpointsQueryEntries.forEach(([breakpointAlias, query])=>{
        const eventListener = (event)=>{
            for (const hookCallback of hookCallbacks){
                hookCallback(breakpointAlias, event.matches);
            }
        };
        const mql = window.matchMedia(query);
        if (mql.addListener) {
            mql.addListener(eventListener);
        } else {
            mql.addEventListener('change', eventListener);
        }
    });
}
function getDefaultMatches(defaults) {
    return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias])=>[
            directionAlias,
            typeof defaults === 'boolean' ? defaults : defaults?.[directionAlias] ?? false
        ]));
}
function getLiveMatches() {
    return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias, query])=>[
            directionAlias,
            window.matchMedia(query).matches
        ]));
}
/**
 * Retrieves media query matches for each directional Polaris `breakpoints` alias.
 *
 * @example
 * const {smUp} = useBreakpoints();
 * return smUp && 'Hello world';
 *
 * @example
 * const {mdUp} = useBreakpoints({defaults: {mdUp: true}});
 * mdUp //=> `true` during SSR
 *
 * @example
 * const breakpoints = useBreakpoints({defaults: true});
 * breakpoints //=> All values will be `true` during SSR
 */ function useBreakpoints(options) {
    // On SSR, and initial CSR, we force usage of the defaults to avoid a
    // hydration mismatch error.
    // Later, in the effect, we will call this again on the client side without
    // any defaults to trigger a more accurate client side evaluation.
    const [breakpoints, setBreakpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDefaultMatches(options?.defaults));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        // Now that we're client side, get the real values
        setBreakpoints(getLiveMatches());
        // Register a callback to set the breakpoints object whenever there's a
        // change in the future
        const callback = (breakpointAlias, matches)=>{
            setBreakpoints((prevBreakpoints)=>({
                    ...prevBreakpoints,
                    [breakpointAlias]: matches
                }));
        };
        hookCallbacks.add(callback);
        return ()=>{
            hookCallbacks.delete(callback);
        };
    }, []);
    return breakpoints;
}
/**
 * Converts `breakpoints` tokens into directional media query entries.
 *
 * @example
 * const breakpointsQueryEntries = getBreakpointsQueryEntries(breakpoints);
 * breakpointsQueryEntries === [
 *   ['xsUp', '(min-width: ...)'],
 *   ['xsDown', '(max-width: ...)'],
 *   ['xsOnly', '(min-width: ...) and (max-width: ...)'],
 *   ['smUp', '(min-width: ...) and (max-width: ...)'],
 *   ['mdUp', '(min-width: ...) and (max-width: ...)'],
 *   // etc.
 * ]
 */ function getBreakpointsQueryEntries(breakpoints) {
    const mediaConditionEntries = Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMediaConditions"])(breakpoints));
    return mediaConditionEntries.map(([breakpointsToken, mediaConditions])=>Object.entries(mediaConditions).map(([direction, mediaCondition])=>{
            const breakpointsAlias = breakpointsToken.split('-')[1];
            // e.g. smUp, smDown, smOnly, etc.
            const directionAlias = `${breakpointsAlias}${capitalize(direction)}`;
            return [
                directionAlias,
                mediaCondition
            ];
        })).flat();
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/geometry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rect",
    ()=>Rect,
    "getRectForNode",
    ()=>getRectForNode
]);
class Rect {
    static get zero() {
        return new Rect();
    }
    constructor({ top = 0, left = 0, width = 0, height = 0 } = {}){
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    get center() {
        return {
            x: this.left + this.width / 2,
            y: this.top + this.height / 2
        };
    }
}
function getRectForNode(node) {
    /**
   * NOTE: We cannot do node instanceof Element because it will fail when inside of an iframe.
   * Technically we can do `node instanceof node.ownerDocument.defaultView.Element`but this will
   * fail when node isn't an Element. We might as well try to run `getBoundingClientRect` and then
   * have a fallback for when that breaks.
   */ try {
        const rect = node.getBoundingClientRect();
        return new Rect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        });
    } catch (_) {
        return new Rect({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickyManager",
    ()=>StickyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/shared.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/geometry.js [app-ssr] (ecmascript)");
;
;
;
;
;
const SIXTY_FPS = 1000 / 60;
class StickyManager {
    constructor(container){
        this.stickyItems = [];
        this.stuckItems = [];
        this.container = null;
        this.topBarOffset = 0;
        this.handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(()=>{
            this.manageStickyItems();
        }, SIXTY_FPS, {
            leading: true,
            trailing: true,
            maxWait: SIXTY_FPS
        });
        this.handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(()=>{
            this.manageStickyItems();
        }, SIXTY_FPS, {
            leading: true,
            trailing: true,
            maxWait: SIXTY_FPS
        });
        if (container) {
            this.setContainer(container);
        }
    }
    registerStickyItem(stickyItem) {
        this.stickyItems.push(stickyItem);
    }
    unregisterStickyItem(nodeToRemove) {
        const nodeIndex = this.stickyItems.findIndex(({ stickyNode })=>nodeToRemove === stickyNode);
        this.stickyItems.splice(nodeIndex, 1);
    }
    getStickyItem(node) {
        return this.stickyItems.find(({ stickyNode })=>node === stickyNode);
    }
    setContainer(el) {
        this.container = el;
        if (isDocument(el)) {
            this.setTopBarOffset(el);
        }
        this.container.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        this.manageStickyItems();
    }
    removeScrollListener() {
        if (this.container) {
            this.container.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }
    manageStickyItems() {
        if (this.stickyItems.length <= 0) {
            return;
        }
        const scrollTop = this.container ? scrollTopFor(this.container) : 0;
        const containerTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectForNode"])(this.container).top + this.topBarOffset;
        this.stickyItems.forEach((stickyItem)=>{
            const { handlePositioning } = stickyItem;
            const { sticky, top, left, width } = this.evaluateStickyItem(stickyItem, scrollTop, containerTop);
            this.updateStuckItems(stickyItem, sticky);
            handlePositioning(sticky, top, left, width);
        });
    }
    evaluateStickyItem(stickyItem, scrollTop, containerTop) {
        const { stickyNode, placeHolderNode, boundingElement, offset, disableWhenStacked } = stickyItem;
        if (disableWhenStacked && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stackedContent"])().matches) {
            return {
                sticky: false,
                top: 0,
                left: 0,
                width: 'auto'
            };
        }
        const stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(// Important: This will not update when the active theme changes.
        // Update this to `useTheme` once converted to a function component.
        __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$build$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["themeDefault"].space['space-500'], 10) : this.getOffset(stickyNode);
        const scrollPosition = scrollTop + stickyOffset;
        const placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop;
        const top = containerTop + stickyOffset;
        const width = placeHolderNode.getBoundingClientRect().width;
        const left = placeHolderNode.getBoundingClientRect().left;
        let sticky;
        if (boundingElement == null) {
            sticky = scrollPosition >= placeHolderNodeCurrentTop;
        } else {
            const stickyItemHeight = stickyNode.getBoundingClientRect().height || stickyNode.firstElementChild?.getBoundingClientRect().height || 0;
            const stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
            sticky = scrollPosition >= placeHolderNodeCurrentTop && scrollPosition < stickyItemBottomPosition;
        }
        return {
            sticky,
            top,
            left,
            width
        };
    }
    updateStuckItems(item, sticky) {
        const { stickyNode } = item;
        if (sticky && !this.isNodeStuck(stickyNode)) {
            this.addStuckItem(item);
        } else if (!sticky && this.isNodeStuck(stickyNode)) {
            this.removeStuckItem(item);
        }
    }
    addStuckItem(stickyItem) {
        this.stuckItems.push(stickyItem);
    }
    removeStuckItem(stickyItem) {
        const { stickyNode: nodeToRemove } = stickyItem;
        const nodeIndex = this.stuckItems.findIndex(({ stickyNode })=>nodeToRemove === stickyNode);
        this.stuckItems.splice(nodeIndex, 1);
    }
    getOffset(node) {
        if (this.stuckItems.length === 0) {
            return 0;
        }
        let offset = 0;
        let count = 0;
        const stuckNodesLength = this.stuckItems.length;
        const nodeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectForNode"])(node);
        while(count < stuckNodesLength){
            const stuckNode = this.stuckItems[count].stickyNode;
            if (stuckNode !== node) {
                const stuckNodeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectForNode"])(stuckNode);
                if (!horizontallyOverlaps(nodeRect, stuckNodeRect)) {
                    offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectForNode"])(stuckNode).height;
                }
            } else {
                break;
            }
            count++;
        }
        return offset;
    }
    isNodeStuck(node) {
        const nodeFound = this.stuckItems.findIndex(({ stickyNode })=>node === stickyNode);
        return nodeFound >= 0;
    }
    setTopBarOffset(container) {
        const topbarElement = container.querySelector(`:not(${__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollable"].selector}) ${__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataPolarisTopBar"].selector}`);
        this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
    }
}
function isDocument(node) {
    return node === document;
}
function scrollTopFor(container) {
    return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
}
function horizontallyOverlaps(rect1, rect2) {
    const rect1Left = rect1.left;
    const rect1Right = rect1.left + rect1.width;
    const rect2Left = rect2.left;
    const rect2Right = rect2.left + rect2.width;
    return rect2Right < rect1Left || rect1Right < rect2Left;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/scroll-lock-manager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCROLL_LOCKING_ATTRIBUTE",
    ()=>SCROLL_LOCKING_ATTRIBUTE,
    "ScrollLockManager",
    ()=>ScrollLockManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/target.js [app-ssr] (ecmascript)");
;
const SCROLL_LOCKING_ATTRIBUTE = 'data-lock-scrolling';
const SCROLL_LOCKING_HIDDEN_ATTRIBUTE = 'data-lock-scrolling-hidden';
const SCROLL_LOCKING_WRAPPER_ATTRIBUTE = 'data-lock-scrolling-wrapper';
let scrollPosition = 0;
function isScrollBarVisible() {
    const { body } = document;
    return body.scrollHeight > body.clientHeight;
}
class ScrollLockManager {
    constructor(){
        this.scrollLocks = 0;
        this.locked = false;
    }
    registerScrollLock() {
        this.scrollLocks += 1;
        this.handleScrollLocking();
    }
    unregisterScrollLock() {
        this.scrollLocks -= 1;
        this.handleScrollLocking();
    }
    handleScrollLocking() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"]) return;
        const { scrollLocks } = this;
        const { body } = document;
        const wrapper = body.firstElementChild;
        if (scrollLocks === 0) {
            body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE);
            body.removeAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE);
            if (wrapper) {
                wrapper.removeAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE);
            }
            window.scroll(0, scrollPosition);
            this.locked = false;
        } else if (scrollLocks > 0 && !this.locked) {
            scrollPosition = window.pageYOffset;
            body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, '');
            if (!isScrollBarVisible()) {
                body.setAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE, '');
            }
            if (wrapper) {
                wrapper.setAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE, '');
                wrapper.scrollTop = scrollPosition;
            }
            this.locked = true;
        }
    }
    resetScrollPosition() {
        scrollPosition = 0;
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/get.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get
]);
const OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
    if (obj == null) return undefined;
    const keys = Array.isArray(keypath) ? keypath : getKeypath(keypath);
    let acc = obj;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < keys.length; i++){
        const val = acc[keys[i]];
        if (val === undefined) return defaultValue;
        acc = val;
    }
    return acc;
}
function getKeypath(str) {
    const path = [];
    let result;
    while(result = OBJECT_NOTATION_MATCHER.exec(str)){
        const [, first, second] = result;
        path.push(first || second);
    }
    return path;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "merge",
    ()=>merge
]);
// Unfortunately, this is how we have to type this at the moment.
// There is currently a proposal to support variadic kinds.
// https://github.com/Microsoft/TypeScript/issues/5453
function merge(...objs) {
    let final = {};
    for (const obj of objs){
        final = mergeRecursively(final, obj);
    }
    return final;
}
function mergeRecursively(inputObjA, objB) {
    const objA = Array.isArray(inputObjA) ? [
        ...inputObjA
    ] : {
        ...inputObjA
    };
    for(const key in objB){
        if (!Object.prototype.hasOwnProperty.call(objB, key)) {
            continue;
        } else if (isMergeableValue(objB[key]) && isMergeableValue(objA[key])) {
            objA[key] = mergeRecursively(objA[key], objB[key]);
        } else {
            objA[key] = objB[key];
        }
    }
    return objA;
}
function isMergeableValue(value) {
    return value !== null && typeof value === 'object';
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/I18n.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18n",
    ()=>I18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/merge.js [app-ssr] (ecmascript)");
;
;
const REPLACE_REGEX = /{([^}]*)}/g;
class I18n {
    /**
   * @param translation A locale object or array of locale objects that overrides default translations. If specifying an array then your desired language dictionary should come first, followed by your fallback language dictionaries
   */ constructor(translation){
        this.translation = {};
        // slice the array to make a shallow copy of it, so we don't accidentally
        // modify the original translation array
        this.translation = Array.isArray(translation) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(...translation.slice().reverse()) : translation;
    }
    translate(id, replacements) {
        const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.translation, id, '');
        if (!text) {
            return '';
        }
        if (replacements) {
            return text.replace(REPLACE_REGEX, (match)=>{
                const replacement = match.substring(1, match.length - 1);
                if (replacements[replacement] === undefined) {
                    const replacementData = JSON.stringify(replacements);
                    throw new Error(`Error in translation for key '${id}'. No replacement found for key '${replacement}'. The following replacements were passed: '${replacementData}'`);
                }
                // This could be a string or a number, but JS doesn't mind which it gets
                // and can handle that cast internally. So let it, to save us calling
                // toString() on what's already a string in 90% of cases.
                return replacements[replacement];
            });
        }
        return text;
    }
    translationKeyExists(path) {
        return Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.translation, path));
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/features/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesContext",
    ()=>FeaturesContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const FeaturesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nContext",
    ()=>I18nContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollLockManagerContext",
    ()=>ScrollLockManagerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ScrollLockManagerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickyManagerContext",
    ()=>StickyManagerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const StickyManagerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/link/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkContext",
    ()=>LinkContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const LinkContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaQueryContext",
    ()=>MediaQueryContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// This is internal, but TS throws a build-time error if we don't export it
const MediaQueryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventListener",
    ()=>EventListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/** @deprecated Use the useEventListener hook instead. */ class EventListener extends __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"] {
    componentDidMount() {
        this.attachListener();
    }
    componentDidUpdate({ passive, ...detachProps }) {
        this.detachListener(detachProps);
        this.attachListener();
    }
    componentWillUnmount() {
        this.detachListener();
    }
    render() {
        return null;
    }
    attachListener() {
        const { event, handler, capture, passive, window: customWindow } = this.props;
        const window = customWindow || globalThis.window;
        window.addEventListener(event, handler, {
            capture,
            passive
        });
    }
    detachListener(prevProps) {
        const { event, handler, capture, window: customWindow } = prevProps || this.props;
        const window = customWindow || globalThis.window;
        window.removeEventListener(event, handler, capture);
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaQueryProvider",
    ()=>MediaQueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$media$2d$query$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EventListener$2f$EventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js [app-ssr] (ecmascript)");
;
;
;
;
;
const MediaQueryProvider = function MediaQueryProvider({ children }) {
    const [isNavigationCollapsed, setIsNavigationCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(()=>{
        if (isNavigationCollapsed !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigationBarCollapsed"])().matches) {
            setIsNavigationCollapsed(!isNavigationCollapsed);
        }
    }, 40, {
        trailing: true,
        leading: true,
        maxWait: 40
    }), [
        isNavigationCollapsed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsNavigationCollapsed((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigationBarCollapsed"])().matches);
    }, []);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isNavigationCollapsed
        }), [
        isNavigationCollapsed
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$media$2d$query$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaQueryContext"].Provider, {
        value: context
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EventListener$2f$EventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventListener"], {
        event: "resize",
        handler: handleResize
    }), children);
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsAfterInitialMount",
    ()=>useIsAfterInitialMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * useIsAfterInitialMount will trigger a re-render to provide
 * you with an updated value. Using this you enhance server-side
 * code that can only run on the client.
 * @returns MutableRefObject<T> - Returns a ref object with the
 * results from invoking initial value
 * @example
 * function ComponentExample({children}) {
 *  const isMounted = useIsAfterInitialMount();
 *  const content = isMounted ? children : null;
 *
 *  return <>{content}</>;
 * }
 */ function useIsAfterInitialMount() {
    const [isAfterInitialMount, setIsAfterInitialMount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsAfterInitialMount(true);
    }, []);
    return isAfterInitialMount;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/portals/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalsManagerContext",
    ()=>PortalsManagerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const PortalsManagerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/PortalsManager/components/PortalsContainer/PortalsContainer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalsContainer",
    ()=>PortalsContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function PortalsContainerComponent(_props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "PolarisPortalsContainer",
        ref: ref
    });
}
const PortalsContainer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(PortalsContainerComponent);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalsManager",
    ()=>PortalsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$portals$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/portals/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$PortalsManager$2f$components$2f$PortalsContainer$2f$PortalsContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/PortalsManager/components/PortalsContainer/PortalsContainer.js [app-ssr] (ecmascript)");
;
;
;
;
function PortalsManager({ children, container }) {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsAfterInitialMount"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (container) {
            return {
                container
            };
        } else if (isMounted) {
            return {
                container: ref.current
            };
        } else {
            return {
                container: null
            };
        }
    }, [
        container,
        isMounted
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$portals$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortalsManagerContext"].Provider, {
        value: contextValue
    }, children, container ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$PortalsManager$2f$components$2f$PortalsContainer$2f$PortalsContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortalsContainer"], {
        ref: ref
    }));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusManagerContext",
    ()=>FocusManagerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const FocusManagerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js [app-ssr] (ecmascript)");
;
;
function FocusManager({ children }) {
    const [trapFocusList, setTrapFocusList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setTrapFocusList((list)=>[
                ...list,
                id
            ]);
    }, []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        let removed = true;
        setTrapFocusList((list)=>{
            const clone = [
                ...list
            ];
            const index = clone.indexOf(id);
            if (index === -1) {
                removed = false;
            } else {
                clone.splice(index, 1);
            }
            return clone;
        });
        return removed;
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            trapFocusList,
            add,
            remove
        }), [
        add,
        trapFocusList,
        remove
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusManagerContext"].Provider, {
        value: value
    }, children);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EphemeralPresenceManagerContext",
    ()=>EphemeralPresenceManagerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const EphemeralPresenceManagerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EphemeralPresenceManager",
    ()=>EphemeralPresenceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$ephemeral$2d$presence$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js [app-ssr] (ecmascript)");
;
;
const defaultState = {
    tooltip: 0,
    hovercard: 0
};
function EphemeralPresenceManager({ children }) {
    const [presenceCounter, setPresenceCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultState);
    const addPresence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        setPresenceCounter((prevList)=>({
                ...prevList,
                [key]: prevList[key] + 1
            }));
    }, []);
    const removePresence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        setPresenceCounter((prevList)=>({
                ...prevList,
                [key]: prevList[key] - 1
            }));
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            presenceList: Object.entries(presenceCounter).reduce((previousValue, currentValue)=>{
                const [key, value] = currentValue;
                return {
                    ...previousValue,
                    [key]: value >= 1
                };
            }, {}),
            presenceCounter,
            addPresence,
            removePresence
        }), [
        addPresence,
        removePresence,
        presenceCounter
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$ephemeral$2d$presence$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EphemeralPresenceManagerContext"].Provider, {
        value: value
    }, children);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$sticky$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$scroll$2d$lock$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/scroll-lock-manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$I18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/I18n.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$features$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/features/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$link$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/link/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$MediaQueryProvider$2f$MediaQueryProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$PortalsManager$2f$PortalsManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FocusManager$2f$FocusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EphemeralPresenceManager$2f$EphemeralPresenceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MAX_SCROLLBAR_WIDTH = 20;
const SCROLLBAR_TEST_ELEMENT_PARENT_SIZE = 30;
const SCROLLBAR_TEST_ELEMENT_CHILD_SIZE = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE + 10;
function measureScrollbars() {
    const parentEl = document.createElement('div');
    parentEl.setAttribute('style', `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px; height:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px;`);
    const child = document.createElement('div');
    child.setAttribute('style', `width:100%; height: ${SCROLLBAR_TEST_ELEMENT_CHILD_SIZE}; overflow:scroll; scrollbar-width: thin;`);
    parentEl.appendChild(child);
    document.body.appendChild(parentEl);
    const scrollbarWidth = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE - (parentEl.firstElementChild?.clientWidth ?? 0);
    const scrollbarWidthWithSafetyHatch = Math.min(scrollbarWidth, MAX_SCROLLBAR_WIDTH);
    document.documentElement.style.setProperty('--pc-app-provider-scrollbar-width', `${scrollbarWidthWithSafetyHatch}px`);
    document.body.removeChild(parentEl);
}
class AppProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.setBodyStyles = ()=>{
            document.body.style.backgroundColor = 'var(--p-color-bg)';
            document.body.style.color = 'var(--p-color-text)';
        };
        this.setRootAttributes = ()=>{
            const activeThemeName = this.getThemeName();
            __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeNames"].forEach((themeName)=>{
                document.documentElement.classList.toggle((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createThemeClassName"])(themeName), themeName === activeThemeName);
            });
        };
        this.getThemeName = ()=>this.props.theme ?? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeNameDefault"];
        this.stickyManager = new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$sticky$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyManager"]();
        this.scrollLockManager = new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$scroll$2d$lock$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollLockManager"]();
        const { i18n, linkComponent } = this.props;
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            link: linkComponent,
            intl: new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$I18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18n"](i18n)
        };
    }
    componentDidMount() {
        if (document != null) {
            this.stickyManager.setContainer(document);
            this.setBodyStyles();
            this.setRootAttributes();
            const isSafari16 = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome') && (navigator.userAgent.includes('Version/16.1') || navigator.userAgent.includes('Version/16.2') || navigator.userAgent.includes('Version/16.3'));
            const isMobileApp16 = navigator.userAgent.includes('Shopify Mobile/iOS') && (navigator.userAgent.includes('OS 16_1') || navigator.userAgent.includes('OS 16_2') || navigator.userAgent.includes('OS 16_3'));
            if (isSafari16 || isMobileApp16) {
                document.documentElement.classList.add('Polaris-Safari-16-Font-Optical-Sizing-Patch');
            }
        }
        measureScrollbars();
    }
    componentDidUpdate({ i18n: prevI18n, linkComponent: prevLinkComponent }) {
        const { i18n, linkComponent } = this.props;
        this.setRootAttributes();
        if (i18n === prevI18n && linkComponent === prevLinkComponent) {
            return;
        }
        this.setState({
            link: linkComponent,
            intl: new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$I18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18n"](i18n)
        });
    }
    render() {
        const { children, features = {} } = this.props;
        const themeName = this.getThemeName();
        const { intl, link } = this.state;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeNameContext"].Provider, {
            value: themeName
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeContext"].Provider, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTheme"])(themeName)
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$features$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeaturesContext"].Provider, {
            value: features
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContext"].Provider, {
            value: intl
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollLockManagerContext"].Provider, {
            value: this.scrollLockManager
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyManagerContext"].Provider, {
            value: this.stickyManager
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$link$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkContext"].Provider, {
            value: link
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$MediaQueryProvider$2f$MediaQueryProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaQueryProvider"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$PortalsManager$2f$PortalsManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortalsManager"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FocusManager$2f$FocusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusManager"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EphemeralPresenceManager$2f$EphemeralPresenceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EphemeralPresenceManager"], null, children)))))))))));
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Polaris\":{\"ActionMenu\":{\"Actions\":{\"moreActions\":\"More actions\"},\"RollupActions\":{\"rollupButton\":\"View actions\"}},\"ActionList\":{\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\",\"placeholder\":\"Search actions\"}},\"Avatar\":{\"label\":\"Avatar\",\"labelWithInitials\":\"Avatar with initials {initials}\"},\"Autocomplete\":{\"spinnerAccessibilityLabel\":\"Loading\",\"ellipsis\":\"{content}…\"},\"Badge\":{\"PROGRESS_LABELS\":{\"incomplete\":\"Incomplete\",\"partiallyComplete\":\"Partially complete\",\"complete\":\"Complete\"},\"TONE_LABELS\":{\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"attention\":\"Attention\",\"new\":\"New\",\"readOnly\":\"Read-only\",\"enabled\":\"Enabled\"},\"progressAndTone\":\"{toneLabel} {progressLabel}\"},\"Banner\":{\"dismissButton\":\"Dismiss notification\"},\"Button\":{\"spinnerAccessibilityLabel\":\"Loading\"},\"Common\":{\"checkbox\":\"checkbox\",\"undo\":\"Undo\",\"cancel\":\"Cancel\",\"clear\":\"Clear\",\"close\":\"Close\",\"submit\":\"Submit\",\"more\":\"More\"},\"ContextualSaveBar\":{\"save\":\"Save\",\"discard\":\"Discard\"},\"DataTable\":{\"sortAccessibilityLabel\":\"sort {direction} by\",\"navAccessibilityLabel\":\"Scroll table {direction} one column\",\"totalsRowHeading\":\"Totals\",\"totalRowHeading\":\"Total\"},\"DatePicker\":{\"previousMonth\":\"Show previous month, {previousMonthName} {showPreviousYear}\",\"nextMonth\":\"Show next month, {nextMonth} {nextYear}\",\"today\":\"Today \",\"start\":\"Start of range\",\"end\":\"End of range\",\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"days\":{\"monday\":\"Monday\",\"tuesday\":\"Tuesday\",\"wednesday\":\"Wednesday\",\"thursday\":\"Thursday\",\"friday\":\"Friday\",\"saturday\":\"Saturday\",\"sunday\":\"Sunday\"},\"daysAbbreviated\":{\"monday\":\"Mo\",\"tuesday\":\"Tu\",\"wednesday\":\"We\",\"thursday\":\"Th\",\"friday\":\"Fr\",\"saturday\":\"Sa\",\"sunday\":\"Su\"}},\"DiscardConfirmationModal\":{\"title\":\"Discard all unsaved changes\",\"message\":\"If you discard changes, you’ll delete any edits you made since you last saved.\",\"primaryAction\":\"Discard changes\",\"secondaryAction\":\"Continue editing\"},\"DropZone\":{\"single\":{\"overlayTextFile\":\"Drop file to upload\",\"overlayTextImage\":\"Drop image to upload\",\"overlayTextVideo\":\"Drop video to upload\",\"actionTitleFile\":\"Add file\",\"actionTitleImage\":\"Add image\",\"actionTitleVideo\":\"Add video\",\"actionHintFile\":\"or drop file to upload\",\"actionHintImage\":\"or drop image to upload\",\"actionHintVideo\":\"or drop video to upload\",\"labelFile\":\"Upload file\",\"labelImage\":\"Upload image\",\"labelVideo\":\"Upload video\"},\"allowMultiple\":{\"overlayTextFile\":\"Drop files to upload\",\"overlayTextImage\":\"Drop images to upload\",\"overlayTextVideo\":\"Drop videos to upload\",\"actionTitleFile\":\"Add files\",\"actionTitleImage\":\"Add images\",\"actionTitleVideo\":\"Add videos\",\"actionHintFile\":\"or drop files to upload\",\"actionHintImage\":\"or drop images to upload\",\"actionHintVideo\":\"or drop videos to upload\",\"labelFile\":\"Upload files\",\"labelImage\":\"Upload images\",\"labelVideo\":\"Upload videos\"},\"errorOverlayTextFile\":\"File type is not valid\",\"errorOverlayTextImage\":\"Image type is not valid\",\"errorOverlayTextVideo\":\"Video type is not valid\"},\"EmptySearchResult\":{\"altText\":\"Empty search results\"},\"Frame\":{\"skipToContent\":\"Skip to content\",\"navigationLabel\":\"Navigation\",\"Navigation\":{\"closeMobileNavigationLabel\":\"Close navigation\"}},\"FullscreenBar\":{\"back\":\"Back\",\"accessibilityLabel\":\"Exit fullscreen mode\"},\"Filters\":{\"moreFilters\":\"More filters\",\"moreFiltersWithCount\":\"More filters ({count})\",\"filter\":\"Filter {resourceName}\",\"noFiltersApplied\":\"No filters applied\",\"cancel\":\"Cancel\",\"done\":\"Done\",\"clearAllFilters\":\"Clear all filters\",\"clear\":\"Clear\",\"clearLabel\":\"Clear {filterName}\",\"addFilter\":\"Add filter\",\"clearFilters\":\"Clear all\",\"searchInView\":\"in:{viewName}\"},\"FilterPill\":{\"clear\":\"Clear\",\"unsavedChanges\":\"Unsaved changes - {label}\"},\"IndexFilters\":{\"searchFilterTooltip\":\"Search and filter\",\"searchFilterTooltipWithShortcut\":\"Search and filter (F)\",\"searchFilterAccessibilityLabel\":\"Search and filter results\",\"sort\":\"Sort your results\",\"addView\":\"Add a new view\",\"newView\":\"Custom search\",\"SortButton\":{\"ariaLabel\":\"Sort the results\",\"tooltip\":\"Sort\",\"title\":\"Sort by\",\"sorting\":{\"asc\":\"Ascending\",\"desc\":\"Descending\",\"az\":\"A-Z\",\"za\":\"Z-A\"}},\"EditColumnsButton\":{\"tooltip\":\"Edit columns\",\"accessibilityLabel\":\"Customize table column order and visibility\"},\"UpdateButtons\":{\"cancel\":\"Cancel\",\"update\":\"Update\",\"save\":\"Save\",\"saveAs\":\"Save as\",\"modal\":{\"title\":\"Save view as\",\"label\":\"Name\",\"sameName\":\"A view with this name already exists. Please choose a different name.\",\"save\":\"Save\",\"cancel\":\"Cancel\"}}},\"IndexProvider\":{\"defaultItemSingular\":\"Item\",\"defaultItemPlural\":\"Items\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} are selected\",\"selected\":\"{selectedItemsCount} selected\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\"},\"IndexTable\":{\"emptySearchTitle\":\"No {resourceNamePlural} found\",\"emptySearchDescription\":\"Try changing the filters or search term\",\"onboardingBadgeText\":\"New\",\"resourceLoadingAccessibilityLabel\":\"Loading {resourceNamePlural}…\",\"selectAllLabel\":\"Select all {resourceNamePlural}\",\"selected\":\"{selectedItemsCount} selected\",\"undo\":\"Undo\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural}\",\"selectItem\":\"Select {resourceName}\",\"selectButtonText\":\"Select\",\"sortAccessibilityLabel\":\"sort {direction} by\"},\"Loading\":{\"label\":\"Page loading bar\"},\"Modal\":{\"iFrameTitle\":\"body markup\",\"modalWarning\":\"These required properties are missing from Modal: {missingProps}\"},\"Page\":{\"Header\":{\"rollupActionsLabel\":\"View actions for {title}\",\"pageReadyAccessibilityLabel\":\"{title}. This page is ready\"}},\"Pagination\":{\"previous\":\"Previous\",\"next\":\"Next\",\"pagination\":\"Pagination\"},\"ProgressBar\":{\"negativeWarningMessage\":\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\",\"exceedWarningMessage\":\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\"},\"ResourceList\":{\"sortingLabel\":\"Sort by\",\"defaultItemSingular\":\"item\",\"defaultItemPlural\":\"items\",\"showing\":\"Showing {itemsCount} {resource}\",\"showingTotalCount\":\"Showing {itemsCount} of {totalItemsCount} {resource}\",\"loading\":\"Loading {resource}\",\"selected\":\"{selectedItemsCount} selected\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in your store are selected\",\"allFilteredItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in this filter are selected\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural} in your store\",\"selectAllFilteredItems\":\"Select all {itemsLength}+ {resourceNamePlural} in this filter\",\"emptySearchResultTitle\":\"No {resourceNamePlural} found\",\"emptySearchResultDescription\":\"Try changing the filters or search term\",\"selectButtonText\":\"Select\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\",\"Item\":{\"actionsDropdownLabel\":\"Actions for {accessibilityLabel}\",\"actionsDropdown\":\"Actions dropdown\",\"viewItem\":\"View details for {itemName}\"},\"BulkActions\":{\"actionsActivatorLabel\":\"Actions\",\"moreActionsActivatorLabel\":\"More actions\"}},\"SkeletonPage\":{\"loadingLabel\":\"Page loading\"},\"Tabs\":{\"newViewAccessibilityLabel\":\"Create new view\",\"newViewTooltip\":\"Create view\",\"toggleTabsLabel\":\"More views\",\"Tab\":{\"rename\":\"Rename view\",\"duplicate\":\"Duplicate view\",\"edit\":\"Edit view\",\"editColumns\":\"Edit columns\",\"delete\":\"Delete view\",\"copy\":\"Copy of {name}\",\"deleteModal\":{\"title\":\"Delete view?\",\"description\":\"This can’t be undone. {viewName} view will no longer be available in your admin.\",\"cancel\":\"Cancel\",\"delete\":\"Delete view\"}},\"RenameModal\":{\"title\":\"Rename view\",\"label\":\"Name\",\"cancel\":\"Cancel\",\"create\":\"Save\",\"errors\":{\"sameName\":\"A view with this name already exists. Please choose a different name.\"}},\"DuplicateModal\":{\"title\":\"Duplicate view\",\"label\":\"Name\",\"cancel\":\"Cancel\",\"create\":\"Create view\",\"errors\":{\"sameName\":\"A view with this name already exists. Please choose a different name.\"}},\"CreateViewModal\":{\"title\":\"Create new view\",\"label\":\"Name\",\"cancel\":\"Cancel\",\"create\":\"Create view\",\"errors\":{\"sameName\":\"A view with this name already exists. Please choose a different name.\"}}},\"Tag\":{\"ariaLabel\":\"Remove {children}\"},\"TextField\":{\"characterCount\":\"{count} characters\",\"characterCountWithMaxLength\":\"{count} of {limit} characters used\"},\"TooltipOverlay\":{\"accessibilityLabel\":\"Tooltip: {label}\"},\"TopBar\":{\"toggleMenuLabel\":\"Toggle menu\",\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\"}},\"MediaCard\":{\"dismissButton\":\"Dismiss\",\"popoverButton\":\"Actions\"},\"VideoThumbnail\":{\"playButtonA11yLabel\":{\"default\":\"Play video\",\"defaultWithDuration\":\"Play video of length {duration}\",\"duration\":{\"hours\":{\"other\":{\"only\":\"{hourCount} hours\",\"andMinutes\":\"{hourCount} hours and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hours and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hours and {secondCount} seconds\",\"andSecond\":\"{hourCount} hours and {secondCount} second\"},\"one\":{\"only\":\"{hourCount} hour\",\"andMinutes\":\"{hourCount} hour and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hour and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hour and {secondCount} seconds\",\"andSecond\":\"{hourCount} hour and {secondCount} second\"}},\"minutes\":{\"other\":{\"only\":\"{minuteCount} minutes\",\"andSeconds\":\"{minuteCount} minutes and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minutes and {secondCount} second\"},\"one\":{\"only\":\"{minuteCount} minute\",\"andSeconds\":\"{minuteCount} minute and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minute and {secondCount} second\"}},\"seconds\":{\"other\":\"{secondCount} seconds\",\"one\":\"{secondCount} second\"}}}}}}"));}),
"[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/shopify_counter_app/client/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/shopify_counter_app/client/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}),
"[project]/shopify_counter_app/client/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/shopify_counter_app/client/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/shopify_counter_app/client/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/shopify_counter_app/client/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/shopify_counter_app/client/node_modules/prop-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/ChildMapping.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildMapping",
    ()=>getChildMapping,
    "getInitialChildMapping",
    ()=>getInitialChildMapping,
    "getNextChildMapping",
    ()=>getNextChildMapping,
    "mergeChildMappings",
    ()=>mergeChildMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
        return mapFn && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, function(c) {
        return c;
    }).forEach(function(child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
    });
    return result;
}
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for(var prevKey in prev){
        if (prevKey in next) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for(var nextKey in next){
        if (nextKeysPending[nextKey]) {
            for(i = 0; i < nextKeysPending[nextKey].length; i++){
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
    for(i = 0; i < pendingKeys.length; i++){
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            onExited: onExited.bind(null, child),
            in: true,
            appear: getProp(child, 'appear', props),
            enter: getProp(child, 'enter', props),
            exit: getProp(child, 'exit', props)
        });
    });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
            // console.log('entering', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        } else if (!hasNext && hasPrev && !isLeaving) {
            // item is old (exiting)
            // console.log('leaving', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                in: false
            });
        } else if (hasNext && hasPrev && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild)) {
            // item hasn't changed transition states
            // copy over the last transition props;
            // console.log('unchanged', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        }
    });
    return children;
}
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/ChildMapping.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
        return child;
    }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */ var TransitionGroup = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this)); // Initial children should all be entering, dependent on appear
        _this.state = {
            contextValue: {
                isMounting: true
            },
            handleExited: handleExited,
            firstRender: true
        };
        return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
            contextValue: {
                isMounting: false
            }
        });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
            children: firstRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialChildMapping"])(nextProps, handleExited) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
            firstRender: false
        };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildMapping"])(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
            child.props.onExited(node);
        }
        if (this.mounted) {
            this.setState(function(state) {
                var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, state.children);
                delete children[child.key];
                return {
                    children: children
                };
            });
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "component",
            "childFactory"
        ]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: contextValue
            }, children);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextValue
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, props, children));
    };
    return TransitionGroup;
}(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
TransitionGroup.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */ childFactory: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable";
TransitionGroup.defaultProps = defaultProps;
const __TURBOPACK__default__export__ = TransitionGroup;
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript) <export default as TransitionGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-element-in-viewport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementInViewport",
    ()=>isElementInViewport
]);
function isElementInViewport(element) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const window = element.ownerDocument.defaultView || globalThis.window;
    return top >= 0 && right <= window.innerWidth && bottom <= window.innerHeight && left >= 0;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findFirstFocusableNode",
    ()=>findFirstFocusableNode,
    "findFirstFocusableNodeIncludingDisabled",
    ()=>findFirstFocusableNodeIncludingDisabled,
    "findFirstKeyboardFocusableNode",
    ()=>findFirstKeyboardFocusableNode,
    "findLastKeyboardFocusableNode",
    ()=>findLastKeyboardFocusableNode,
    "focusFirstFocusableNode",
    ()=>focusFirstFocusableNode,
    "focusFirstKeyboardFocusableNode",
    ()=>focusFirstKeyboardFocusableNode,
    "focusLastKeyboardFocusableNode",
    ()=>focusLastKeyboardFocusableNode,
    "focusNextFocusableNode",
    ()=>focusNextFocusableNode,
    "handleMouseUpByBlurring",
    ()=>handleMouseUpByBlurring,
    "nextFocusableNode",
    ()=>nextFocusableNode,
    "wrapFocusNextFocusableMenuItem",
    ()=>wrapFocusNextFocusableMenuItem,
    "wrapFocusPreviousFocusableMenuItem",
    ()=>wrapFocusPreviousFocusableMenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$element$2d$in$2d$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-element-in-viewport.js [app-ssr] (ecmascript)");
;
const FOCUSABLE_SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]';
const KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])';
const MENUITEM_FOCUSABLE_SELECTORS = 'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';
const handleMouseUpByBlurring = ({ currentTarget })=>currentTarget.blur();
function nextFocusableNode(node, filter) {
    const allFocusableElements = [
        ...document.querySelectorAll(FOCUSABLE_SELECTOR)
    ];
    const sliceLocation = allFocusableElements.indexOf(node) + 1;
    const focusableElementsAfterNode = allFocusableElements.slice(sliceLocation);
    for (const focusableElement of focusableElementsAfterNode){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$element$2d$in$2d$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElementInViewport"])(focusableElement) && (!filter || filter && filter(focusableElement))) {
            return focusableElement;
        }
    }
    return null;
}
function findFirstFocusableNode(element, onlyDescendants = true) {
    if (!onlyDescendants && matches(element, FOCUSABLE_SELECTOR)) {
        return element;
    }
    return element.querySelector(FOCUSABLE_SELECTOR);
}
// Popover needs to be able to find its activator even if it is disabled, which FOCUSABLE_SELECTOR doesn't support.
function findFirstFocusableNodeIncludingDisabled(element) {
    const focusableSelector = `a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]`;
    if (matches(element, focusableSelector)) {
        return element;
    }
    return element.querySelector(focusableSelector);
}
function focusFirstFocusableNode(element, onlyDescendants = true) {
    findFirstFocusableNode(element, onlyDescendants)?.focus();
}
function focusNextFocusableNode(node, filter) {
    const nextFocusable = nextFocusableNode(node, filter);
    if (nextFocusable && nextFocusable instanceof HTMLElement) {
        nextFocusable.focus();
        return true;
    }
    return false;
}
function findFirstKeyboardFocusableNode(element, onlyDescendants = true) {
    if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
        return element;
    }
    return element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
}
function focusFirstKeyboardFocusableNode(element, onlyDescendants = true) {
    const firstFocusable = findFirstKeyboardFocusableNode(element, onlyDescendants);
    if (firstFocusable) {
        firstFocusable.focus();
        return true;
    }
    return false;
}
function findLastKeyboardFocusableNode(element, onlyDescendants = true) {
    if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
        return element;
    }
    const allFocusable = element.querySelectorAll(KEYBOARD_FOCUSABLE_SELECTORS);
    return allFocusable[allFocusable.length - 1];
}
function focusLastKeyboardFocusableNode(element, onlyDescendants = true) {
    const lastFocusable = findLastKeyboardFocusableNode(element, onlyDescendants);
    if (lastFocusable) {
        lastFocusable.focus();
        return true;
    }
    return false;
}
function wrapFocusPreviousFocusableMenuItem(parentElement, currentFocusedElement) {
    const allFocusableChildren = getMenuFocusableDescendants(parentElement);
    const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
    if (currentItemIdx === -1) {
        allFocusableChildren[0].focus();
    } else {
        allFocusableChildren[(currentItemIdx - 1 + allFocusableChildren.length) % allFocusableChildren.length].focus();
    }
}
function wrapFocusNextFocusableMenuItem(parentElement, currentFocusedElement) {
    const allFocusableChildren = getMenuFocusableDescendants(parentElement);
    const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
    if (currentItemIdx === -1) {
        allFocusableChildren[0].focus();
    } else {
        allFocusableChildren[(currentItemIdx + 1) % allFocusableChildren.length].focus();
    }
}
function getMenuFocusableDescendants(element) {
    return element.querySelectorAll(MENUITEM_FOCUSABLE_SELECTORS);
}
function getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement) {
    let currentItemIdx = 0;
    for (const focusableChild of allFocusableChildren){
        if (focusableChild === currentFocusedElement) {
            break;
        }
        currentItemIdx++;
    }
    return currentItemIdx === allFocusableChildren.length ? -1 : currentItemIdx;
}
function matches(node, selector) {
    if (node.matches) {
        return node.matches(selector);
    }
    const matches = (node.ownerDocument || document).querySelectorAll(selector);
    let i = matches.length;
    while(--i >= 0 && matches.item(i) !== node)return i > -1;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/within-content-context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WithinContentContext",
    ()=>WithinContentContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const WithinContentContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/components.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConditionalRender",
    ()=>ConditionalRender,
    "ConditionalWrapper",
    ()=>ConditionalWrapper,
    "elementChildren",
    ()=>elementChildren,
    "isElementOfType",
    ()=>isElementOfType,
    "wrapWithComponent",
    ()=>wrapWithComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// Wraps `element` in `Component`, if it is not already an instance of
// `Component`. If `props` is passed, those will be added as props on the
// wrapped component. If `element` is null, the component is not wrapped.
function wrapWithComponent(element, Component, props) {
    if (element == null) {
        return null;
    }
    return isElementOfType(element, Component) ? element : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, props, element);
}
// In development, we compare based on the name of the function because
// React Hot Loader proxies React components in order to make updates. In
// production we can simply compare the components for equality.
const isComponent = ("TURBOPACK compile-time truthy", 1) ? hotReloadComponentCheck : "TURBOPACK unreachable";
// Checks whether `element` is a React element of type `Component` (or one of
// the passed components, if `Component` is an array of React components).
function isElementOfType(element, Component) {
    if (element == null || !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(element) || typeof element.type === 'string') {
        return false;
    }
    const { type: defaultType } = element;
    // Type override allows components to bypass default wrapping behavior. Ex: Stack, ResourceList...
    // See https://github.com/Shopify/app-extension-libs/issues/996#issuecomment-710437088
    const overrideType = element.props?.__type__;
    const type = overrideType || defaultType;
    const Components = Array.isArray(Component) ? Component : [
        Component
    ];
    return Components.some((AComponent)=>typeof type !== 'string' && isComponent(AComponent, type));
}
// Returns all children that are valid elements as an array. Can optionally be
// filtered by passing `predicate`.
function elementChildren(children, predicate = ()=>true) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child) && predicate(child));
}
function ConditionalWrapper({ condition, wrapper, children }) {
    return condition ? wrapper(children) : children;
}
function ConditionalRender({ condition, children }) {
    return condition ? children : null;
}
function hotReloadComponentCheck(AComponent, AnotherComponent) {
    const componentName = AComponent.name;
    const anotherComponentName = AnotherComponent.displayName;
    return AComponent === AnotherComponent || Boolean(componentName) && componentName === anotherComponentName;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Body": "Polaris-Modal__Body",
    "NoScrollBody": "Polaris-Modal__NoScrollBody",
    "IFrame": "Polaris-Modal__IFrame"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-object.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNames",
    ()=>classNames,
    "getResponsiveProps",
    ()=>getResponsiveProps,
    "getResponsiveValue",
    ()=>getResponsiveValue,
    "sanitizeCustomProperties",
    ()=>sanitizeCustomProperties,
    "variationName",
    ()=>variationName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-object.js [app-ssr] (ecmascript)");
;
;
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function variationName(name, value) {
    return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function sanitizeCustomProperties(styles) {
    const nonNullValues = Object.entries(styles).filter(([_, value])=>value != null);
    return nonNullValues.length ? Object.fromEntries(nonNullValues) : undefined;
}
/**
 * Given params like so:
 * (
 *   'button',
 *   'padding',
 *   'spacing',
 *   {
 *     sm: "4",
 *     lg: "6"
 *   }
 * )
 * Converts it to an object like so:
 * {
 *   '--pc-button-padding-sm': 'var(--p-spacing-4)',
 *   '--pc-button-padding-lg': 'var(--p-spacing-6)'
 * }
 *
 */ function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
    if (!responsiveProp) return {};
    let result;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(responsiveProp)) {
        result = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breakpointsAliases"][0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`
        };
    } else {
        result = Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale])=>[
                breakpointAlias,
                `var(--p-${tokenSubgroup}-${aliasOrScale})`
            ]));
    }
    // Prefix each responsive key with the correct token name
    return Object.fromEntries(Object.entries(result).map(([breakpointAlias, value])=>[
            `--pc-${componentName}-${componentProp}-${breakpointAlias}`,
            value
        ]));
}
function getResponsiveValue(componentName, componentProp, responsiveProp) {
    if (!responsiveProp) return {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(responsiveProp)) {
        return {
            [`--pc-${componentName}-${componentProp}-${__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$base$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breakpointsAliases"][0]}`]: responsiveProp
        };
    }
    return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue])=>[
            `--pc-${componentName}-${componentProp}-${breakpointAlias}`,
            responsiveValue
        ]));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Section": "Polaris-Modal-Section",
    "titleHidden": "Polaris-Modal-Section--titleHidden"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "listReset": "Polaris-Box--listReset",
    "Box": "Polaris-Box",
    "visuallyHidden": "Polaris-Box--visuallyHidden",
    "printHidden": "Polaris-Box--printHidden"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>Box
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.css.js [app-ssr] (ecmascript)");
;
;
;
const Box = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ as = 'div', background, borderColor, borderStyle, borderWidth, borderBlockStartWidth, borderBlockEndWidth, borderInlineStartWidth, borderInlineEndWidth, borderRadius, borderEndStartRadius, borderEndEndRadius, borderStartStartRadius, borderStartEndRadius, children, color, id, minHeight, minWidth, maxWidth, overflowX, overflowY, outlineColor, outlineStyle, outlineWidth, padding, paddingBlock, paddingBlockStart, paddingBlockEnd, paddingInline, paddingInlineStart, paddingInlineEnd, role, shadow, tabIndex, width, printHidden, visuallyHidden, position, insetBlockStart, insetBlockEnd, insetInlineStart, insetInlineEnd, zIndex, opacity, ...restProps }, ref)=>{
    // eslint-disable-next-line no-nested-ternary
    const borderStyleValue = borderStyle ? borderStyle : borderColor || borderWidth || borderBlockStartWidth || borderBlockEndWidth || borderInlineStartWidth || borderInlineEndWidth ? 'solid' : undefined;
    // eslint-disable-next-line no-nested-ternary
    const outlineStyleValue = outlineStyle ? outlineStyle : outlineColor || outlineWidth ? 'solid' : undefined;
    const style = {
        '--pc-box-color': color ? `var(--p-color-${color})` : undefined,
        '--pc-box-background': background ? `var(--p-color-${background})` : undefined,
        // eslint-disable-next-line no-nested-ternary
        '--pc-box-border-color': borderColor ? borderColor === 'transparent' ? 'transparent' : `var(--p-color-${borderColor})` : undefined,
        '--pc-box-border-style': borderStyleValue,
        '--pc-box-border-radius': borderRadius ? `var(--p-border-radius-${borderRadius})` : undefined,
        '--pc-box-border-end-start-radius': borderEndStartRadius ? `var(--p-border-radius-${borderEndStartRadius})` : undefined,
        '--pc-box-border-end-end-radius': borderEndEndRadius ? `var(--p-border-radius-${borderEndEndRadius})` : undefined,
        '--pc-box-border-start-start-radius': borderStartStartRadius ? `var(--p-border-radius-${borderStartStartRadius})` : undefined,
        '--pc-box-border-start-end-radius': borderStartEndRadius ? `var(--p-border-radius-${borderStartEndRadius})` : undefined,
        '--pc-box-border-width': borderWidth ? `var(--p-border-width-${borderWidth})` : undefined,
        '--pc-box-border-block-start-width': borderBlockStartWidth ? `var(--p-border-width-${borderBlockStartWidth})` : undefined,
        '--pc-box-border-block-end-width': borderBlockEndWidth ? `var(--p-border-width-${borderBlockEndWidth})` : undefined,
        '--pc-box-border-inline-start-width': borderInlineStartWidth ? `var(--p-border-width-${borderInlineStartWidth})` : undefined,
        '--pc-box-border-inline-end-width': borderInlineEndWidth ? `var(--p-border-width-${borderInlineEndWidth})` : undefined,
        '--pc-box-min-height': minHeight,
        '--pc-box-min-width': minWidth,
        '--pc-box-max-width': maxWidth,
        '--pc-box-outline-color': outlineColor ? `var(--p-color-${outlineColor})` : undefined,
        '--pc-box-outline-style': outlineStyleValue,
        '--pc-box-outline-width': outlineWidth ? `var(--p-border-width-${outlineWidth})` : undefined,
        '--pc-box-overflow-x': overflowX,
        '--pc-box-overflow-y': overflowY,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveProps"])('box', 'padding-block-start', 'space', paddingBlockStart || paddingBlock || padding),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveProps"])('box', 'padding-block-end', 'space', paddingBlockEnd || paddingBlock || padding),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveProps"])('box', 'padding-inline-start', 'space', paddingInlineStart || paddingInline || padding),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveProps"])('box', 'padding-inline-end', 'space', paddingInlineEnd || paddingInline || padding),
        '--pc-box-shadow': shadow ? `var(--p-shadow-${shadow})` : undefined,
        '--pc-box-width': width,
        position,
        '--pc-box-inset-block-start': insetBlockStart ? `var(--p-space-${insetBlockStart})` : undefined,
        '--pc-box-inset-block-end': insetBlockEnd ? `var(--p-space-${insetBlockEnd})` : undefined,
        '--pc-box-inset-inline-start': insetInlineStart ? `var(--p-space-${insetInlineStart})` : undefined,
        '--pc-box-inset-inline-end': insetInlineEnd ? `var(--p-space-${insetInlineEnd})` : undefined,
        zIndex,
        opacity
    };
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Box, visuallyHidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].visuallyHidden, printHidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].printHidden, as === 'ul' && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].listReset);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(as, {
        className,
        id,
        ref,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeCustomProperties"])(style),
        role,
        tabIndex,
        ...restProps
    }, children);
});
Box.displayName = 'Box';
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Section$2f$Section$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-ssr] (ecmascript)");
;
;
;
;
function Section({ children, flush = false, subdued = false, titleHidden = false }) {
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Section$2f$Section$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Section, titleHidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Section$2f$Section$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].titleHidden);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], Object.assign({
        as: "section",
        padding: flush ? '0' : '400'
    }, titleHidden && {
        paddingInlineEnd: '0'
    }, subdued && {
        background: 'bg-surface-tertiary'
    }), children));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/PropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/reflow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/PropTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/reflow.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript) <export default as Transition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/dom-helpers/esm/hasClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ __turbopack_context__.s([
    "default",
    ()=>hasClass
]);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
}),
"[project]/shopify_counter_app/client/node_modules/dom-helpers/esm/addClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/dom-helpers/esm/hasClass.js [app-ssr] (ecmascript)");
;
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;
    else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
}),
"[project]/shopify_counter_app/client/node_modules/dom-helpers/esm/removeClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>removeClass
]);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
    } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
}
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/CSSTransition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/dom-helpers/esm/addClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/dom-helpers/esm/removeClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/PropTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/utils/reflow.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
var _addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
var removeClass = function removeClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */ var CSSTransition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(CSSTransition, _React$Component);
    function CSSTransition() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        _this.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
        };
        _this.onEnter = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, appearing ? 'appear' : 'enter', 'base');
            if (_this.props.onEnter) {
                _this.props.onEnter(maybeNode, maybeAppearing);
            }
        };
        _this.onEntering = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
            var type = appearing ? 'appear' : 'enter';
            _this.addClass(node, type, 'active');
            if (_this.props.onEntering) {
                _this.props.onEntering(maybeNode, maybeAppearing);
            }
        };
        _this.onEntered = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
            var type = appearing ? 'appear' : 'enter';
            _this.removeClasses(node, type);
            _this.addClass(node, type, 'done');
            if (_this.props.onEntered) {
                _this.props.onEntered(maybeNode, maybeAppearing);
            }
        };
        _this.onExit = function(maybeNode) {
            var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
            _this.removeClasses(node, 'appear');
            _this.removeClasses(node, 'enter');
            _this.addClass(node, 'exit', 'base');
            if (_this.props.onExit) {
                _this.props.onExit(maybeNode);
            }
        };
        _this.onExiting = function(maybeNode) {
            var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
            _this.addClass(node, 'exit', 'active');
            if (_this.props.onExiting) {
                _this.props.onExiting(maybeNode);
            }
        };
        _this.onExited = function(maybeNode) {
            var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, 'exit', 'done');
            if (_this.props.onExited) {
                _this.props.onExited(maybeNode);
            }
        };
        _this.resolveArguments = function(maybeNode, maybeAppearing) {
            return _this.props.nodeRef ? [
                _this.props.nodeRef.current,
                maybeNode
            ] // here `maybeNode` is actually `appearing`
             : [
                maybeNode,
                maybeAppearing
            ];
        };
        _this.getClassNames = function(type) {
            var classNames = _this.props.classNames;
            var isStringClassNames = typeof classNames === 'string';
            var prefix = isStringClassNames && classNames ? classNames + "-" : '';
            var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
            var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
            var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
            return {
                baseClassName: baseClassName,
                activeClassName: activeClassName,
                doneClassName: doneClassName
            };
        };
        return _this;
    }
    var _proto = CSSTransition.prototype;
    _proto.addClass = function addClass(node, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];
        var _this$getClassNames = this.getClassNames('enter'), doneClassName = _this$getClassNames.doneClassName;
        if (type === 'appear' && phase === 'done' && doneClassName) {
            className += " " + doneClassName;
        } // This is to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        if (phase === 'active') {
            if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forceReflow"])(node);
        }
        if (className) {
            this.appliedClasses[type][phase] = className;
            _addClass(node, className);
        }
    };
    _proto.removeClasses = function removeClasses(node, type) {
        var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};
        if (baseClassName) {
            removeClass(node, baseClassName);
        }
        if (activeClassName) {
            removeClass(node, activeClassName);
        }
        if (doneClassName) {
            removeClass(node, doneClassName);
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, _ = _this$props.classNames, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "classNames"
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        }));
    };
    return CSSTransition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
CSSTransition.defaultProps = {
    classNames: ''
};
CSSTransition.propTypes = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].propTypes, {
    /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */ classNames: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNamesShape"],
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
}) : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CSSTransition;
}),
"[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/CSSTransition.js [app-ssr] (ecmascript) <export default as CSSTransition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/CSSTransition.js [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Key",
    ()=>Key
]);
/* eslint-disable @shopify/strict-component-boundaries */ /* eslint-enable @shopify/strict-component-boundaries */ let Key = /*#__PURE__*/ function(Key) {
    Key[Key["Backspace"] = 8] = "Backspace";
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Shift"] = 16] = "Shift";
    Key[Key["Ctrl"] = 17] = "Ctrl";
    Key[Key["Alt"] = 18] = "Alt";
    Key[Key["Pause"] = 19] = "Pause";
    Key[Key["CapsLock"] = 20] = "CapsLock";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["LeftArrow"] = 37] = "LeftArrow";
    Key[Key["UpArrow"] = 38] = "UpArrow";
    Key[Key["RightArrow"] = 39] = "RightArrow";
    Key[Key["DownArrow"] = 40] = "DownArrow";
    Key[Key["Insert"] = 45] = "Insert";
    Key[Key["Delete"] = 46] = "Delete";
    Key[Key["Key0"] = 48] = "Key0";
    Key[Key["Key1"] = 49] = "Key1";
    Key[Key["Key2"] = 50] = "Key2";
    Key[Key["Key3"] = 51] = "Key3";
    Key[Key["Key4"] = 52] = "Key4";
    Key[Key["Key5"] = 53] = "Key5";
    Key[Key["Key6"] = 54] = "Key6";
    Key[Key["Key7"] = 55] = "Key7";
    Key[Key["Key8"] = 56] = "Key8";
    Key[Key["Key9"] = 57] = "Key9";
    Key[Key["KeyA"] = 65] = "KeyA";
    Key[Key["KeyB"] = 66] = "KeyB";
    Key[Key["KeyC"] = 67] = "KeyC";
    Key[Key["KeyD"] = 68] = "KeyD";
    Key[Key["KeyE"] = 69] = "KeyE";
    Key[Key["KeyF"] = 70] = "KeyF";
    Key[Key["KeyG"] = 71] = "KeyG";
    Key[Key["KeyH"] = 72] = "KeyH";
    Key[Key["KeyI"] = 73] = "KeyI";
    Key[Key["KeyJ"] = 74] = "KeyJ";
    Key[Key["KeyK"] = 75] = "KeyK";
    Key[Key["KeyL"] = 76] = "KeyL";
    Key[Key["KeyM"] = 77] = "KeyM";
    Key[Key["KeyN"] = 78] = "KeyN";
    Key[Key["KeyO"] = 79] = "KeyO";
    Key[Key["KeyP"] = 80] = "KeyP";
    Key[Key["KeyQ"] = 81] = "KeyQ";
    Key[Key["KeyR"] = 82] = "KeyR";
    Key[Key["KeyS"] = 83] = "KeyS";
    Key[Key["KeyT"] = 84] = "KeyT";
    Key[Key["KeyU"] = 85] = "KeyU";
    Key[Key["KeyV"] = 86] = "KeyV";
    Key[Key["KeyW"] = 87] = "KeyW";
    Key[Key["KeyX"] = 88] = "KeyX";
    Key[Key["KeyY"] = 89] = "KeyY";
    Key[Key["KeyZ"] = 90] = "KeyZ";
    Key[Key["LeftMeta"] = 91] = "LeftMeta";
    Key[Key["RightMeta"] = 92] = "RightMeta";
    Key[Key["Select"] = 93] = "Select";
    Key[Key["Numpad0"] = 96] = "Numpad0";
    Key[Key["Numpad1"] = 97] = "Numpad1";
    Key[Key["Numpad2"] = 98] = "Numpad2";
    Key[Key["Numpad3"] = 99] = "Numpad3";
    Key[Key["Numpad4"] = 100] = "Numpad4";
    Key[Key["Numpad5"] = 101] = "Numpad5";
    Key[Key["Numpad6"] = 102] = "Numpad6";
    Key[Key["Numpad7"] = 103] = "Numpad7";
    Key[Key["Numpad8"] = 104] = "Numpad8";
    Key[Key["Numpad9"] = 105] = "Numpad9";
    Key[Key["Multiply"] = 106] = "Multiply";
    Key[Key["Add"] = 107] = "Add";
    Key[Key["Subtract"] = 109] = "Subtract";
    Key[Key["Decimal"] = 110] = "Decimal";
    Key[Key["Divide"] = 111] = "Divide";
    Key[Key["F1"] = 112] = "F1";
    Key[Key["F2"] = 113] = "F2";
    Key[Key["F3"] = 114] = "F3";
    Key[Key["F4"] = 115] = "F4";
    Key[Key["F5"] = 116] = "F5";
    Key[Key["F6"] = 117] = "F6";
    Key[Key["F7"] = 118] = "F7";
    Key[Key["F8"] = 119] = "F8";
    Key[Key["F9"] = 120] = "F9";
    Key[Key["F10"] = 121] = "F10";
    Key[Key["F11"] = 122] = "F11";
    Key[Key["F12"] = 123] = "F12";
    Key[Key["NumLock"] = 144] = "NumLock";
    Key[Key["ScrollLock"] = 145] = "ScrollLock";
    Key[Key["Semicolon"] = 186] = "Semicolon";
    Key[Key["Equals"] = 187] = "Equals";
    Key[Key["Comma"] = 188] = "Comma";
    Key[Key["Dash"] = 189] = "Dash";
    Key[Key["Period"] = 190] = "Period";
    Key[Key["ForwardSlash"] = 191] = "ForwardSlash";
    Key[Key["GraveAccent"] = 192] = "GraveAccent";
    Key[Key["OpenBracket"] = 219] = "OpenBracket";
    Key[Key["BackSlash"] = 220] = "BackSlash";
    Key[Key["CloseBracket"] = 221] = "CloseBracket";
    Key[Key["SingleQuote"] = 222] = "SingleQuote";
    return Key;
}({});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Container": "Polaris-Modal-Dialog__Container",
    "Dialog": "Polaris-Modal-Dialog",
    "Modal": "Polaris-Modal-Dialog__Modal",
    "limitHeight": "Polaris-Modal-Dialog--limitHeight",
    "sizeSmall": "Polaris-Modal-Dialog--sizeSmall",
    "sizeLarge": "Polaris-Modal-Dialog--sizeLarge",
    "sizeFullScreen": "Polaris-Modal-Dialog--sizeFullScreen",
    "animateFadeUp": "Polaris-Modal-Dialog--animateFadeUp",
    "entering": "Polaris-Modal-Dialog--entering",
    "exiting": "Polaris-Modal-Dialog--exiting",
    "exited": "Polaris-Modal-Dialog--exited",
    "entered": "Polaris-Modal-Dialog--entered"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/frame/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrameContext",
    ()=>FrameContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// This is internal, but TS throws a build-time error if we don't export it
const FrameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingAppProviderError",
    ()=>MissingAppProviderError
]);
class MissingAppProviderError extends Error {
    constructor(message = ''){
        super(`${message ? `${message} ` : message}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`);
        this.name = 'MissingAppProviderError';
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus-manager/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusManager",
    ()=>useFocusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js [app-ssr] (ecmascript)");
;
;
;
function useFocusManager({ trapping }) {
    const focusManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusManagerContext"]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    if (!focusManager) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingAppProviderError"]('No FocusManager was provided.');
    }
    const { trapFocusList, add: addFocusItem, remove: removeFocusItem } = focusManager;
    const canSafelyFocus = trapFocusList[0] === id;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            canSafelyFocus
        }), [
        canSafelyFocus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!trapping) return;
        addFocusItem(id);
        return ()=>{
            removeFocusItem(id);
        };
    }, [
        addFocusItem,
        id,
        removeFocusItem,
        trapping
    ]);
    return value;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Focus/Focus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Focus",
    ()=>Focus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)");
;
;
const Focus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Focus({ children, disabled, root }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (disabled || !root) {
            return;
        }
        const node = isRef(root) ? root.current : root;
        if (!node || node.querySelector('[autofocus]')) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(node, false);
    }, [
        disabled,
        root
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
});
function isRef(ref) {
    return ref.current !== undefined;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeypressListener",
    ()=>KeypressListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js [app-ssr] (ecmascript)");
;
;
function KeypressListener({ keyCode, handler, keyEvent = 'keyup', options, useCapture, document: ownerDocument = globalThis.document }) {
    const tracked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        handler,
        keyCode
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        tracked.current = {
            handler,
            keyCode
        };
    }, [
        handler,
        keyCode
    ]);
    const handleKeyEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const { handler, keyCode } = tracked.current;
        if (event.keyCode === keyCode) {
            handler(event);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ownerDocument.addEventListener(keyEvent, handleKeyEvent, useCapture || options);
        return ()=>{
            ownerDocument.removeEventListener(keyEvent, handleKeyEvent, useCapture || options);
        };
    }, [
        keyEvent,
        handleKeyEvent,
        useCapture,
        options,
        ownerDocument
    ]);
    return null;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TrapFocus/TrapFocus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrapFocus",
    ()=>TrapFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/shared.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2d$manager$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus-manager/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Focus$2f$Focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Focus/Focus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EventListener$2f$EventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$KeypressListener$2f$KeypressListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function TrapFocus({ trapping = true, children }) {
    const { canSafelyFocus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2d$manager$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusManager"])({
        trapping
    });
    const focusTrapWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [disableFocus, setDisableFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const disable = canSafelyFocus && !(focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement)) ? !trapping : true;
        setDisableFocus(disable);
    }, [
        canSafelyFocus,
        trapping
    ]);
    const handleFocusIn = (event)=>{
        const containerContentsHaveFocus = focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement);
        if (trapping === false || !focusTrapWrapper.current || containerContentsHaveFocus || event.target instanceof Element && event.target.matches(`${__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portal"].selector} *`)) {
            return;
        }
        if (canSafelyFocus && event.target instanceof HTMLElement && focusTrapWrapper.current !== event.target && !focusTrapWrapper.current.contains(event.target)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(focusTrapWrapper.current);
        }
    };
    const handleTab = (event)=>{
        if (trapping === false || !focusTrapWrapper.current) {
            return;
        }
        const firstFocusableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findFirstKeyboardFocusableNode"])(focusTrapWrapper.current);
        const lastFocusableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findLastKeyboardFocusableNode"])(focusTrapWrapper.current);
        if (event.target === lastFocusableNode && !event.shiftKey) {
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusFirstKeyboardFocusableNode"])(focusTrapWrapper.current);
        }
        if (event.target === firstFocusableNode && event.shiftKey) {
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusLastKeyboardFocusableNode"])(focusTrapWrapper.current);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Focus$2f$Focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Focus"], {
        disabled: disableFocus,
        root: focusTrapWrapper.current
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: focusTrapWrapper
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EventListener$2f$EventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventListener"], {
        event: "focusin",
        handler: handleFocusIn
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$KeypressListener$2f$KeypressListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeypressListener"], {
        keyCode: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].Tab,
        keyEvent: "keydown",
        handler: handleTab
    }), children));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "root": "Polaris-Text--root",
    "block": "Polaris-Text--block",
    "truncate": "Polaris-Text--truncate",
    "visuallyHidden": "Polaris-Text--visuallyHidden",
    "start": "Polaris-Text--start",
    "center": "Polaris-Text--center",
    "end": "Polaris-Text--end",
    "justify": "Polaris-Text--justify",
    "base": "Polaris-Text--base",
    "inherit": "Polaris-Text--inherit",
    "disabled": "Polaris-Text--disabled",
    "success": "Polaris-Text--success",
    "critical": "Polaris-Text--critical",
    "caution": "Polaris-Text--caution",
    "subdued": "Polaris-Text--subdued",
    "magic": "Polaris-Text--magic",
    "magic-subdued": "Polaris-Text__magic--subdued",
    "text-inverse": "Polaris-Text__text--inverse",
    "text-inverse-secondary": "Polaris-Text--textInverseSecondary",
    "headingXs": "Polaris-Text--headingXs",
    "headingSm": "Polaris-Text--headingSm",
    "headingMd": "Polaris-Text--headingMd",
    "headingLg": "Polaris-Text--headingLg",
    "headingXl": "Polaris-Text--headingXl",
    "heading2xl": "Polaris-Text--heading2xl",
    "heading3xl": "Polaris-Text--heading3xl",
    "bodyXs": "Polaris-Text--bodyXs",
    "bodySm": "Polaris-Text--bodySm",
    "bodyMd": "Polaris-Text--bodyMd",
    "bodyLg": "Polaris-Text--bodyLg",
    "regular": "Polaris-Text--regular",
    "medium": "Polaris-Text--medium",
    "semibold": "Polaris-Text--semibold",
    "bold": "Polaris-Text--bold",
    "break": "Polaris-Text--break",
    "numeric": "Polaris-Text--numeric",
    "line-through": "Polaris-Text__line--through"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.css.js [app-ssr] (ecmascript)");
;
;
;
const deprecatedVariants = {
    heading3xl: 'heading2xl'
};
const Text = ({ alignment, as, breakWord, children, tone, fontWeight, id, numeric = false, truncate = false, variant, visuallyHidden = false, textDecorationLine })=>{
    if (("TURBOPACK compile-time value", "development") === 'development' && variant && Object.prototype.hasOwnProperty.call(deprecatedVariants, variant)) {
        // eslint-disable-next-line no-console
        console.warn(`Deprecation: <Text variant="${variant}" />. The value "${variant}" will be removed in a future major version of Polaris. Use "${deprecatedVariants[variant]}" instead.`);
    }
    const Component = as || (visuallyHidden ? 'span' : 'p');
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].root, variant && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][variant], fontWeight && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][fontWeight], (alignment || truncate) && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].block, alignment && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][alignment], breakWord && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].break, tone && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][tone], numeric && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].numeric, truncate && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].truncate, visuallyHidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].visuallyHidden, textDecorationLine && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][textDecorationLine]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, Object.assign({
        className: className
    }, id && {
        id
    }), children);
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transition$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript) <export default as Transition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSTransition$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/CSSTransition.js [app-ssr] (ecmascript) <export default as CSSTransition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$frame$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/frame/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TrapFocus$2f$TrapFocus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TrapFocus/TrapFocus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$KeypressListener$2f$KeypressListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function Dialog({ instant, labelledBy, children, limitHeight, size, onClose, onExited, onEntered, setClosing, hasToasts, ...props }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const containerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$frame$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FrameContext"]);
    let toastMessages;
    if (frameContext) {
        toastMessages = frameContext.toastMessages;
    }
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Modal, size && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('size', size)], limitHeight && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].limitHeight);
    const TransitionChild = instant ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transition$3e$__["Transition"] : FadeUp;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        containerNode.current && !containerNode.current.contains(document.activeElement) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(containerNode.current);
    }, []);
    const handleKeyDown = ()=>{
        if (setClosing) {
            setClosing(true);
        }
    };
    const handleKeyUp = ()=>{
        if (setClosing) {
            setClosing(false);
        }
        onClose();
    };
    const ariaLiveAnnouncements = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "aria-live": "assertive"
    }, toastMessages ? toastMessages.map((toastMessage)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
            visuallyHidden: true,
            as: "p",
            key: toastMessage.id
        }, toastMessage.content)) : null);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(TransitionChild, Object.assign({}, props, {
        nodeRef: containerNode,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: parseInt(theme.motion['motion-duration-200'], 10),
        onEntered: onEntered,
        onExited: onExited
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Container,
        "data-polaris-layer": true,
        "data-polaris-overlay": true,
        ref: containerNode
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TrapFocus$2f$TrapFocus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrapFocus"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        role: "dialog",
        "aria-modal": true,
        "aria-label": labelledBy,
        "aria-labelledby": labelledBy,
        tabIndex: -1,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Dialog
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: classes
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$KeypressListener$2f$KeypressListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeypressListener"], {
        keyCode: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].Escape,
        keyEvent: "keydown",
        handler: handleKeyDown
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$KeypressListener$2f$KeypressListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeypressListener"], {
        keyCode: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].Escape,
        handler: handleKeyUp
    }), children), ariaLiveAnnouncements))));
}
const fadeUpClasses = {
    appear: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].animateFadeUp, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].entering),
    appearActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].animateFadeUp, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].entered),
    enter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].animateFadeUp, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].entering),
    enterActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].animateFadeUp, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].entered),
    exit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].animateFadeUp, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].exiting),
    exitActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].animateFadeUp, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].exited)
};
function FadeUp({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSTransition$3e$__["CSSTransition"], Object.assign({}, props, {
        classNames: fadeUpClasses
    }), children);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgXIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgXIcon = function SvgXIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
    }));
};
SvgXIcon.displayName = "XIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs [app-ssr] (ecmascript) <export S as XIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js [app-ssr] (ecmascript)");
;
;
;
function useI18n() {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContext"]);
    if (!i18n) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingAppProviderError"]('No i18n was provided.');
    }
    return i18n;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgSelectIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgSelectIcon = function SvgSelectIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"
    }));
};
SvgSelectIcon.displayName = "SelectIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs [app-ssr] (ecmascript) <export S as SelectIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SelectIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SelectIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgChevronDownIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgChevronDownIcon = function SvgChevronDownIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
    }));
};
SvgChevronDownIcon.displayName = "ChevronDownIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgChevronUpIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgChevronUpIcon = function SvgChevronUpIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
    }));
};
SvgChevronUpIcon.displayName = "ChevronUpIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChevronUpIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUpIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronUpIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronUpIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/Button.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Button": "Polaris-Button",
    "disabled": "Polaris-Button--disabled",
    "pressed": "Polaris-Button--pressed",
    "variantPrimary": "Polaris-Button--variantPrimary",
    "variantSecondary": "Polaris-Button--variantSecondary",
    "variantTertiary": "Polaris-Button--variantTertiary",
    "variantPlain": "Polaris-Button--variantPlain",
    "removeUnderline": "Polaris-Button--removeUnderline",
    "variantMonochromePlain": "Polaris-Button--variantMonochromePlain",
    "toneSuccess": "Polaris-Button--toneSuccess",
    "toneCritical": "Polaris-Button--toneCritical",
    "sizeMicro": "Polaris-Button--sizeMicro",
    "sizeSlim": "Polaris-Button--sizeSlim",
    "sizeMedium": "Polaris-Button--sizeMedium",
    "sizeLarge": "Polaris-Button--sizeLarge",
    "textAlignCenter": "Polaris-Button--textAlignCenter",
    "textAlignStart": "Polaris-Button--textAlignStart",
    "textAlignLeft": "Polaris-Button--textAlignLeft",
    "textAlignEnd": "Polaris-Button--textAlignEnd",
    "textAlignRight": "Polaris-Button--textAlignRight",
    "fullWidth": "Polaris-Button--fullWidth",
    "iconOnly": "Polaris-Button--iconOnly",
    "iconWithText": "Polaris-Button--iconWithText",
    "disclosure": "Polaris-Button--disclosure",
    "loading": "Polaris-Button--loading",
    "pressable": "Polaris-Button--pressable",
    "hidden": "Polaris-Button--hidden",
    "Icon": "Polaris-Button__Icon",
    "Spinner": "Polaris-Button__Spinner"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Icon": "Polaris-Icon",
    "toneInherit": "Polaris-Icon--toneInherit",
    "toneBase": "Polaris-Icon--toneBase",
    "toneSubdued": "Polaris-Icon--toneSubdued",
    "toneCaution": "Polaris-Icon--toneCaution",
    "toneWarning": "Polaris-Icon--toneWarning",
    "toneCritical": "Polaris-Icon--toneCritical",
    "toneInteractive": "Polaris-Icon--toneInteractive",
    "toneInfo": "Polaris-Icon--toneInfo",
    "toneSuccess": "Polaris-Icon--toneSuccess",
    "tonePrimary": "Polaris-Icon--tonePrimary",
    "toneEmphasis": "Polaris-Icon--toneEmphasis",
    "toneMagic": "Polaris-Icon--toneMagic",
    "toneTextCaution": "Polaris-Icon--toneTextCaution",
    "toneTextWarning": "Polaris-Icon--toneTextWarning",
    "toneTextCritical": "Polaris-Icon--toneTextCritical",
    "toneTextInfo": "Polaris-Icon--toneTextInfo",
    "toneTextPrimary": "Polaris-Icon--toneTextPrimary",
    "toneTextSuccess": "Polaris-Icon--toneTextSuccess",
    "toneTextMagic": "Polaris-Icon--toneTextMagic",
    "Svg": "Polaris-Icon__Svg",
    "Img": "Polaris-Icon__Img",
    "Placeholder": "Polaris-Icon__Placeholder"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Icon({ source, tone, accessibilityLabel }) {
    let sourceType;
    if (typeof source === 'function') {
        sourceType = 'function';
    } else if (source === 'placeholder') {
        sourceType = 'placeholder';
    } else {
        sourceType = 'external';
    }
    if (tone && sourceType === 'external' && ("TURBOPACK compile-time value", "development") === 'development') {
        // eslint-disable-next-line no-console
        console.warn('Recoloring external SVGs is not supported. Set the intended color on your SVG instead.');
    }
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon, tone && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('tone', tone)]);
    const { mdDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBreakpoints"])();
    const SourceComponent = source;
    const contentMarkup = {
        function: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SourceComponent, Object.assign({
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Svg,
            focusable: "false",
            "aria-hidden": "true"
        }, mdDown ? {
            viewBox: '1 1 18 18'
        } : {})),
        placeholder: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Placeholder
        }),
        external: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Img,
            src: `data:image/svg+xml;utf8,${source}`,
            alt: "",
            "aria-hidden": "true"
        })
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: className
    }, accessibilityLabel && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        visuallyHidden: true
    }, accessibilityLabel), contentMarkup[sourceType]);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Spinner": "Polaris-Spinner",
    "sizeSmall": "Polaris-Spinner--sizeSmall",
    "sizeLarge": "Polaris-Spinner--sizeLarge"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Spinner({ size = 'large', accessibilityLabel, hasFocusableParent }) {
    const isAfterInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsAfterInitialMount"])();
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Spinner, size && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('size', size)]);
    const spinnerSVGMarkup = size === 'large' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
    })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
    }));
    const spanAttributes = {
        ...!hasFocusableParent && {
            role: 'status'
        }
    };
    const accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        visuallyHidden: true
    }, accessibilityLabel);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: className
    }, spinnerSVGMarkup), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", spanAttributes, accessibilityLabelMarkup));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-disable-interaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisableClick",
    ()=>useDisableClick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * useDisableInteraction provides the original event handler but disables interaction
 * if the boolean passed is true.
 * @param disabled - A boolean value that determines if the button should
 * be disabled
 * @param handleEvent - The original event handler
 * @returns Function - The original event handler but with interactions disabled if the
 * provided boolean is true
 * @example
 * function ComponentExample() {
 * const handleClick = () => {
 *  console.log('disable me');
 * };
 * const handleClickEvent = useDisableInteraction(true, handleClick);
 * return <button onClick={handleClickEvent}>Im Disabled</button>;
 * }
 */ function useDisableClick(disabled, handleClick) {
    const handleClickWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, [
        disabled
    ]);
    if (!disabled) {
        return handleClick;
    }
    return handleClickWrapper;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLink",
    ()=>useLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$link$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/link/context.js [app-ssr] (ecmascript)");
;
;
function useLink() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$link$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkContext"]);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnstyledLink",
    ()=>UnstyledLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/shared.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$link$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js [app-ssr] (ecmascript)");
;
;
;
// The script in the styleguide that generates the Props Explorer data expects
// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.
// Wrapping forwardRef in a memo gets a name set since
// https://github.com/facebook/react/issues/16722
// but eslint-plugin-react doesn't know that just yet
// eslint-disable-next-line react/display-name
const UnstyledLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function UnstyledLink(props, _ref) {
    const LinkComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$link$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLink"])();
    if (LinkComponent) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(LinkComponent, Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unstyled"].props, props, {
            ref: _ref
        }));
    }
    const { external, url, target: targetProp, ...rest } = props;
    let target;
    if (external) {
        target = '_blank';
    } else {
        target = targetProp ?? undefined;
    }
    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("a", Object.assign({
        target: target
    }, rest, {
        href: url,
        rel: rel
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unstyled"].props, {
        ref: _ref
    }));
}));
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnstyledButton",
    ()=>UnstyledButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$disable$2d$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-disable-interaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledLink$2f$UnstyledLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js [app-ssr] (ecmascript)");
;
;
;
;
function UnstyledButton({ id, children, className, url, external, target, download, submit, disabled, loading, pressed, accessibilityLabel, role, ariaControls, ariaExpanded, ariaDescribedBy, ariaChecked, onClick, onFocus, onBlur, onKeyDown, onKeyPress, onKeyUp, onMouseEnter, onTouchStart, ...rest }) {
    let buttonMarkup;
    const commonProps = {
        id,
        className,
        'aria-label': accessibilityLabel
    };
    const interactiveProps = {
        ...commonProps,
        role,
        onClick,
        onFocus,
        onBlur,
        onMouseUp: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleMouseUpByBlurring"],
        onMouseEnter,
        onTouchStart
    };
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$disable$2d$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisableClick"])(disabled, onClick);
    if (url) {
        buttonMarkup = disabled ? /*#__PURE__*/ // Render an `<a>` so toggling disabled/enabled state changes only the
        // `href` attribute instead of replacing the whole element.
        __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("a", commonProps, children) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledLink$2f$UnstyledLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledLink"], Object.assign({}, interactiveProps, {
            url: url,
            external: external,
            target: target,
            download: download
        }, rest), children);
    } else {
        buttonMarkup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", Object.assign({}, interactiveProps, {
            "aria-disabled": disabled,
            type: submit ? 'submit' : 'button',
            "aria-busy": loading ? true : undefined,
            "aria-controls": ariaControls,
            "aria-expanded": ariaExpanded,
            "aria-describedby": ariaDescribedBy,
            "aria-checked": ariaChecked,
            "aria-pressed": pressed,
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp,
            onKeyPress: onKeyPress,
            onClick: handleClick,
            tabIndex: disabled ? -1 : undefined
        }, rest), children);
    }
    return buttonMarkup;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/Button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SelectIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SelectIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs [app-ssr] (ecmascript) <export S as SelectIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronUpIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/Button.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function Button({ id, children, url, disabled, external, download, target, submit, loading, pressed, accessibilityLabel, role, ariaControls, ariaExpanded, ariaDescribedBy, ariaChecked, onClick, onFocus, onBlur, onKeyDown, onKeyPress, onKeyUp, onMouseEnter, onTouchStart, onPointerDown, icon, disclosure, removeUnderline, size = 'medium', textAlign = 'center', fullWidth, dataPrimaryLink, tone, variant = 'secondary' }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const isDisabled = disabled || loading;
    const { mdUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBreakpoints"])();
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Button, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pressable, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('variant', variant)], __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('size', size)], __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('textAlign', textAlign)], fullWidth && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fullWidth, disclosure && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disclosure, icon && children && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].iconWithText, icon && children == null && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].iconOnly, isDisabled && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled, loading && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading, pressed && !disabled && !url && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pressed, removeUnderline && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].removeUnderline, tone && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('tone', tone)]);
    const disclosureMarkup = disclosure ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hidden : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: loading ? 'placeholder' : getDisclosureIconSource(disclosure, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronUpIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronUpIcon$3e$__["ChevronUpIcon"], __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__["ChevronDownIcon"])
    })) : null;
    const iconSource = isIconSource(icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: loading ? 'placeholder' : icon
    }) : icon;
    const iconMarkup = iconSource ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hidden : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon
    }, iconSource) : null;
    const hasPlainText = [
        'plain',
        'monochromePlain'
    ].includes(variant);
    let textFontWeight = 'medium';
    if (hasPlainText) {
        textFontWeight = 'regular';
    } else if (variant === 'primary') {
        textFontWeight = mdUp ? 'medium' : 'semibold';
    }
    let textVariant = 'bodySm';
    if (size === 'large' || hasPlainText && size !== 'micro') {
        textVariant = 'bodyMd';
    }
    const childMarkup = children ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: textVariant,
        fontWeight: textFontWeight,
        key: disabled ? 'text-disabled' : 'text'
    }, children) : null;
    const spinnerSVGMarkup = loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Spinner
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
        size: "small",
        accessibilityLabel: i18n.translate('Polaris.Button.spinnerAccessibilityLabel')
    })) : null;
    const commonProps = {
        id,
        className,
        accessibilityLabel,
        ariaDescribedBy,
        role,
        onClick,
        onFocus,
        onBlur,
        onMouseUp: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleMouseUpByBlurring"],
        onMouseEnter,
        onTouchStart,
        'data-primary-link': dataPrimaryLink
    };
    const linkProps = {
        url,
        external,
        download,
        target
    };
    const actionProps = {
        submit,
        disabled: isDisabled,
        loading,
        ariaControls,
        ariaExpanded,
        ariaChecked,
        pressed,
        onKeyDown,
        onKeyUp,
        onKeyPress,
        onPointerDown
    };
    const buttonMarkup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], Object.assign({}, commonProps, linkProps, actionProps), spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup);
    return buttonMarkup;
}
function isIconSource(x) {
    return typeof x === 'string' || typeof x === 'object' && x.body || typeof x === 'function';
}
function getDisclosureIconSource(disclosure, upIcon, downIcon) {
    if (disclosure === 'select') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SelectIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SelectIcon$3e$__["SelectIcon"];
    }
    return disclosure === 'up' ? upIcon : downIcon;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/CloseButton/CloseButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__XIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs [app-ssr] (ecmascript) <export S as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/Button.js [app-ssr] (ecmascript)");
;
;
;
;
function CloseButton({ pressed, onClick }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        variant: "tertiary",
        pressed: pressed,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__XIcon$3e$__["XIcon"],
        onClick: onClick,
        accessibilityLabel: i18n.translate('Polaris.Common.close')
    });
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "InlineGrid": "Polaris-InlineGrid"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineGrid",
    ()=>InlineGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineGrid$2f$InlineGrid$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.css.js [app-ssr] (ecmascript)");
;
;
;
function InlineGrid({ children, columns, gap, alignItems }) {
    const style = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveValue"])('inline-grid', 'grid-template-columns', formatInlineGrid(columns)),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveProps"])('inline-grid', 'gap', 'space', gap),
        '--pc-inline-grid-align-items': alignItems
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineGrid$2f$InlineGrid$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].InlineGrid,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeCustomProperties"])(style)
    }, children);
}
function formatInlineGrid(columns) {
    if (typeof columns === 'object' && columns !== null && !Array.isArray(columns)) {
        return Object.fromEntries(Object.entries(columns).map(([breakpointAlias, breakpointInlineGrid])=>[
                breakpointAlias,
                getColumnValue(breakpointInlineGrid)
            ]));
    }
    return getColumnValue(columns);
}
function getColumnValue(columns) {
    if (!columns) return undefined;
    if (typeof columns === 'number' || !isNaN(Number(columns))) {
        return `repeat(${Number(columns)}, minmax(0, 1fr))`;
    }
    if (typeof columns === 'string') return columns;
    return columns.map((column)=>{
        switch(column){
            case 'oneThird':
                return 'minmax(0, 1fr)';
            case 'oneHalf':
                return 'minmax(0, 1fr)';
            case 'twoThirds':
                return 'minmax(0, 2fr)';
        }
    }).join(' ');
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "InlineStack": "Polaris-InlineStack"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineStack",
    ()=>InlineStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.css.js [app-ssr] (ecmascript)");
;
;
;
const InlineStack = function InlineStack({ as: Element = 'div', align, direction = 'row', blockAlign, gap, wrap = true, children }) {
    const style = {
        '--pc-inline-stack-align': align,
        '--pc-inline-stack-block-align': blockAlign,
        '--pc-inline-stack-wrap': wrap ? 'wrap' : 'nowrap',
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveProps"])('inline-stack', 'gap', 'space', gap),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveValue"])('inline-stack', 'flex-direction', direction)
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Element, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].InlineStack,
        style: style
    }, children);
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Header/Header.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$CloseButton$2f$CloseButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/CloseButton/CloseButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineGrid$2f$InlineGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function Header({ id, children, closing, titleHidden, onClose }) {
    const headerPaddingInline = '400';
    const headerPaddingBlock = '400';
    if (titleHidden || !children) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            position: "absolute",
            insetInlineEnd: headerPaddingInline,
            insetBlockStart: headerPaddingBlock,
            zIndex: "1"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$CloseButton$2f$CloseButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
            onClick: onClose
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        paddingBlockStart: "400",
        paddingBlockEnd: "400",
        paddingInlineStart: headerPaddingInline,
        paddingInlineEnd: headerPaddingInline,
        borderBlockEndWidth: "025",
        borderColor: "border",
        background: "bg-surface-tertiary"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineGrid$2f$InlineGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineGrid"], {
        columns: {
            xs: '1fr auto'
        },
        gap: "400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStack"], {
        gap: "400",
        blockAlign: "center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        id: id,
        as: "h2",
        variant: "headingMd",
        breakWord: true
    }, children)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$CloseButton$2f$CloseButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
        pressed: closing,
        onClick: onClose
    })));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Backdrop": "Polaris-Backdrop",
    "transparent": "Polaris-Backdrop--transparent",
    "belowNavigation": "Polaris-Backdrop--belowNavigation"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollLockManager",
    ()=>useScrollLockManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js [app-ssr] (ecmascript)");
;
;
;
function useScrollLockManager() {
    const scrollLockManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollLockManagerContext"]);
    if (!scrollLockManager) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingAppProviderError"]('No ScrollLockManager was provided.');
    }
    return scrollLockManager;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ScrollLock/ScrollLock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollLock",
    ()=>ScrollLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/hooks.js [app-ssr] (ecmascript)");
;
;
;
// Even though this has no args, reference ScrollLockProps so the prop explorer
// in the styleguide works without warnings about unfound props
function ScrollLock(_) {
    const scrollLockManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$scroll$2d$lock$2d$manager$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollLockManager"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollLockManager.registerScrollLock();
        return ()=>{
            scrollLockManager.unregisterScrollLock();
        };
    }, [
        scrollLockManager
    ]);
    return null;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backdrop",
    ()=>Backdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Backdrop$2f$Backdrop$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ScrollLock$2f$ScrollLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ScrollLock/ScrollLock.js [app-ssr] (ecmascript)");
;
;
;
;
function Backdrop(props) {
    const { onClick, onTouchStart, belowNavigation, transparent, setClosing } = props;
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Backdrop$2f$Backdrop$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Backdrop, belowNavigation && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Backdrop$2f$Backdrop$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].belowNavigation, transparent && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Backdrop$2f$Backdrop$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].transparent);
    const handleMouseDown = ()=>{
        if (setClosing) {
            setClosing(true);
        }
    };
    const handleClick = ()=>{
        if (setClosing) {
            setClosing(false);
        }
        if (onClick) {
            onClick();
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ScrollLock$2f$ScrollLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollLock"], null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className,
        onClick: handleClick,
        onTouchStart: onTouchStart,
        onMouseDown: handleMouseDown
    }));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonFrom",
    ()=>buttonFrom,
    "buttonsFrom",
    ()=>buttonsFrom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/Button.js [app-ssr] (ecmascript)");
;
;
function buttonsFrom(actions, overrides = {}) {
    if (Array.isArray(actions)) {
        return actions.map((action, index)=>buttonFrom(action, overrides, index));
    } else {
        const action = actions;
        return buttonFrom(action, overrides);
    }
}
function buttonFrom({ content, onAction, plain, destructive, ...action }, overrides, key) {
    const plainVariant = plain ? 'plain' : undefined;
    const destructiveVariant = destructive ? 'primary' : undefined;
    const tone = !overrides?.tone && destructive ? 'critical' : overrides?.tone;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], Object.assign({
        key: key,
        onClick: onAction,
        tone: tone,
        variant: plainVariant || destructiveVariant
    }, action, overrides), content);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Footer/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-ssr] (ecmascript)");
;
;
;
;
function Footer({ primaryAction, secondaryActions, children }) {
    const primaryActionButton = primaryAction && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonsFrom"])(primaryAction, {
        variant: 'primary'
    }) || null;
    const secondaryActionButtons = secondaryActions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonsFrom"])(secondaryActions) || null;
    const actions = primaryActionButton || secondaryActionButtons ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStack"], {
        gap: "200"
    }, secondaryActionButtons, primaryActionButton) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStack"], {
        gap: "400",
        blockAlign: "center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        borderColor: "border",
        borderBlockStartWidth: "025",
        padding: "400",
        width: "100%"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStack"], {
        gap: "400",
        blockAlign: "center",
        align: "space-between"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], null, children), actions)));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-lazy-ref.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyRef",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const UNIQUE_IDENTIFIER = Symbol('unique_identifier');
/**
 * useLazyRef provides a lazy initial value, similar to lazy
 * initial state the initialValue is the value used during
 * initialization and disregarded after that. Use this hook
 * for expensive initialization.
 * @param initialValue - A function that will return the initial
 * value and be disregarded after that
 * @returns MutableRefObject<T> - Returns a ref object with the
 * results from invoking initial value
 * @example
 * function ComponentExample() {
 *  const title = useLazyRef(() => someExpensiveComputation());
 *  return <h1>{title.current}</h1>;
 * }
 */ function useLazyRef(initialValue) {
    const lazyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(UNIQUE_IDENTIFIER);
    if (lazyRef.current === UNIQUE_IDENTIFIER) {
        lazyRef.current = initialValue();
    }
    return lazyRef;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComponentDidMount",
    ()=>useComponentDidMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js [app-ssr] (ecmascript)");
;
;
/**
 * Similarly to the life-cycle method componentDidMount, useComponentDidMount
 * will be invoked after the component has mounted, and only the initial mount.
 * @param callback Defines a callback to invoke once the component has
 * initially mounted.
 * @example
 * function Playground({active}) {
 *  useComponentDidMount(() => {
 *    if (active) {
 *      console.warning(`Component has mounted.`);
 *    }
 *  });
 *
 *  return null;
 * }
 */ function useComponentDidMount(callback) {
    const isAfterInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsAfterInitialMount"])();
    const hasInvokedLifeCycle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
        hasInvokedLifeCycle.current = true;
        return callback();
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollableContext",
    ()=>ScrollableContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ScrollableContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Scrollable": "Polaris-Scrollable",
    "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
    "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow",
    "horizontal": "Polaris-Scrollable--horizontal",
    "vertical": "Polaris-Scrollable--vertical",
    "scrollbarWidthThin": "Polaris-Scrollable--scrollbarWidthThin",
    "scrollbarWidthNone": "Polaris-Scrollable--scrollbarWidthNone",
    "scrollbarWidthAuto": "Polaris-Scrollable--scrollbarWidthAuto",
    "scrollbarGutterStable": "Polaris-Scrollable--scrollbarGutterStable",
    "scrollbarGutterStableboth-edges": "Polaris-Scrollable__scrollbarGutterStableboth--edges"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/components/ScrollTo/ScrollTo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollTo",
    ()=>ScrollTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js [app-ssr] (ecmascript)");
;
;
function ScrollTo() {
    const anchorNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollableContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scrollToPosition || !anchorNode.current) {
            return;
        }
        scrollToPosition(anchorNode.current.offsetTop);
    }, [
        scrollToPosition
    ]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        id: id,
        ref: anchorNode
    });
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scrollable",
    ()=>Scrollable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/shared.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$lazy$2d$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-lazy-ref.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$component$2d$did$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$components$2f$ScrollTo$2f$ScrollTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/components/ScrollTo/ScrollTo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$sticky$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const MAX_SCROLL_HINT_DISTANCE = 100;
const LOW_RES_BUFFER = 2;
const ScrollableComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, className, horizontal = true, vertical = true, shadow, hint, focusable, scrollbarWidth = 'thin', scrollbarGutter, onScrolledToBottom, ...rest }, forwardedRef)=>{
    const [topShadow, setTopShadow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bottomShadow, setBottomShadow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const stickyManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$lazy$2d$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLazyRef"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$sticky$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyManager"]());
    const scrollArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((scrollY, options = {})=>{
        const optionsBehavior = options.behavior || 'smooth';
        const behavior = prefersReducedMotion() ? 'auto' : optionsBehavior;
        // @ts-expect-error TS removed "instant" option but browsers support it.
        scrollArea.current?.scrollTo({
            top: scrollY,
            behavior
        });
    }, []);
    const defaultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef || defaultRef, ()=>({
            scrollTo
        }));
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const currentScrollArea = scrollArea.current;
        if (!currentScrollArea) {
            return;
        }
        requestAnimationFrame(()=>{
            const { scrollTop, clientHeight, scrollHeight } = currentScrollArea;
            const canScroll = Boolean(scrollHeight > clientHeight);
            const isBelowTopOfScroll = Boolean(scrollTop > 0);
            const isAtBottomOfScroll = Boolean(scrollTop + clientHeight >= scrollHeight - LOW_RES_BUFFER);
            setTopShadow(isBelowTopOfScroll);
            setBottomShadow(!isAtBottomOfScroll);
            if (canScroll && isAtBottomOfScroll && onScrolledToBottom) {
                onScrolledToBottom();
            }
        });
    }, [
        onScrolledToBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$component$2d$did$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentDidMount"])(()=>{
        handleScroll();
        if (hint) {
            requestAnimationFrame(()=>performScrollHint(scrollArea.current));
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentScrollArea = scrollArea.current;
        if (!currentScrollArea) {
            return;
        }
        const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(handleScroll, 50, {
            trailing: true
        });
        stickyManager.current?.setContainer(currentScrollArea);
        currentScrollArea.addEventListener('scroll', handleScroll);
        globalThis.addEventListener('resize', handleResize);
        return ()=>{
            currentScrollArea.removeEventListener('scroll', handleScroll);
            globalThis.removeEventListener('resize', handleResize);
        };
    }, [
        stickyManager,
        handleScroll
    ]);
    const finalClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(className, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Scrollable, vertical && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].vertical, horizontal && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].horizontal, shadow && topShadow && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasTopShadow, shadow && bottomShadow && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasBottomShadow, scrollbarWidth && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('scrollbarWidth', scrollbarWidth)], scrollbarGutter && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('scrollbarGutter', scrollbarGutter.replace(' ', ''))]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollableContext"].Provider, {
        value: scrollTo
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyManagerContext"].Provider, {
        value: stickyManager.current
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({
        className: finalClassName
    }, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollable"].props, rest, {
        ref: scrollArea,
        tabIndex: focusable ? 0 : undefined
    }), children)));
});
ScrollableComponent.displayName = 'Scrollable';
function prefersReducedMotion() {
    try {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (err) {
        return false;
    }
}
function performScrollHint(elem) {
    if (!elem || prefersReducedMotion()) {
        return;
    }
    const scrollableDistance = elem.scrollHeight - elem.clientHeight;
    const distanceToPeek = Math.min(MAX_SCROLL_HINT_DISTANCE, scrollableDistance) - LOW_RES_BUFFER;
    const goBackToTop = ()=>{
        requestAnimationFrame(()=>{
            if (elem.scrollTop >= distanceToPeek) {
                elem.removeEventListener('scroll', goBackToTop);
                elem.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    };
    elem.addEventListener('scroll', goBackToTop);
    elem.scrollTo({
        top: MAX_SCROLL_HINT_DISTANCE,
        behavior: 'smooth'
    });
}
const forNode = (node)=>{
    const closestElement = node.closest(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollable"].selector);
    return closestElement instanceof HTMLElement ? closestElement : document;
};
// @ts-expect-error - expected functions/sub-components are assigned after declaration
const Scrollable = ScrollableComponent;
Scrollable.ScrollTo = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$components$2f$ScrollTo$2f$ScrollTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTo"];
Scrollable.forNode = forNode;
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/portals/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePortalsManager",
    ()=>usePortalsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$portals$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/portals/context.js [app-ssr] (ecmascript)");
;
;
function usePortalsManager() {
    const portalsManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$portals$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortalsManagerContext"]);
    if (!portalsManager) {
        throw new Error('No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.');
    }
    return portalsManager;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "themeContainer": "Polaris-ThemeProvider--themeContainer"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "isThemeNameLocal",
    ()=>isThemeNameLocal,
    "themeNamesLocal",
    ()=>themeNamesLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeProvider$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.css.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * Allowlist of local themes
 * TODO: Replace `as const` with `satisfies ThemeName[]`
 */ const themeNamesLocal = [
    'light',
    'dark-experimental'
];
const isThemeNameLocal = (name)=>themeNamesLocal.includes(name);
function ThemeProvider(props) {
    const { as: ThemeContainer = 'div', children, className, theme: themeName = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeNameDefault"] } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeNameContext"].Provider, {
        value: themeName
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeContext"].Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTheme"])(themeName)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ThemeContainer, {
        "data-portal-id": props['data-portal-id'],
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createThemeClassName"])(themeName), __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeProvider$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].themeContainer, className)
    }, children)));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$portals$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/portals/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function Portal({ children, idPrefix = '', onPortalCreated = noop }) {
    const themeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeName"])();
    const { container } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$portals$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePortalsManager"])();
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const portalId = idPrefix !== '' ? `${idPrefix}-${uniqueId}` : uniqueId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onPortalCreated();
    }, [
        onPortalCreated
    ]);
    return container ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isThemeNameLocal"])(themeName) ? themeName : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$tokens$2f$dist$2f$esm$2f$src$2f$themes$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeNameDefault"],
        "data-portal-id": portalId
    }, children), container) : null;
}
function noop() {}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript) <export default as TransitionGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$within$2d$content$2d$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/within-content-context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$components$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/components.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Section$2f$Section$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Header$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Header/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Backdrop$2f$Backdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Footer$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/components/Footer/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const IFRAME_LOADING_HEIGHT = 200;
const DEFAULT_IFRAME_CONTENT_HEIGHT = 400;
const Modal = function Modal({ children, title, titleHidden = false, src, iFrameName, open, instant, sectioned, loading, size, limitHeight, footer, primaryAction, secondaryActions, onScrolledToBottom, activator, activatorWrapper = 'div', onClose, onIFrameLoad, onTransitionEnd, noScroll }) {
    const [iframeHeight, setIframeHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(IFRAME_LOADING_HEIGHT);
    const [closing, setClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const activatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const iframeTitle = i18n.translate('Polaris.Modal.iFrameTitle');
    let dialog;
    let backdrop;
    const handleEntered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (onTransitionEnd) {
            onTransitionEnd();
        }
    }, [
        onTransitionEnd
    ]);
    const handleExited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIframeHeight(IFRAME_LOADING_HEIGHT);
        const activatorElement = activator && isRef(activator) ? activator && activator.current : activatorRef.current;
        if (activatorElement) {
            requestAnimationFrame(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(activatorElement));
        }
    }, [
        activator
    ]);
    const handleIFrameLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((evt)=>{
        const iframe = evt.target;
        if (iframe && iframe.contentWindow) {
            try {
                setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
            } catch (_error) {
                setIframeHeight(DEFAULT_IFRAME_CONTENT_HEIGHT);
            }
        }
        if (onIFrameLoad != null) {
            onIFrameLoad(evt);
        }
    }, [
        onIFrameLoad
    ]);
    if (open) {
        const footerMarkup = !footer && !primaryAction && !secondaryActions ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Footer$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {
            primaryAction: primaryAction,
            secondaryActions: secondaryActions
        }, footer);
        const content = sectioned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$components$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapWithComponent"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Section$2f$Section$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
            titleHidden
        }) : children;
        const body = loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            padding: "400"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStack"], {
            gap: "400",
            align: "center",
            blockAlign: "center"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], null))) : content;
        const scrollContainerMarkup = noScroll ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NoScrollBody
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            width: "100%",
            overflowX: "hidden",
            overflowY: "hidden"
        }, body)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Scrollable$2f$Scrollable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollable"], {
            shadow: true,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body,
            onScrolledToBottom: onScrolledToBottom
        }, body);
        const bodyMarkup = src ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("iframe", {
            name: iFrameName,
            title: iframeTitle,
            src: src,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].IFrame,
            onLoad: handleIFrameLoad,
            style: {
                height: `${iframeHeight}px`
            }
        }) : scrollContainerMarkup;
        dialog = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
            instant: instant,
            labelledBy: headerId,
            onClose: onClose,
            onEntered: handleEntered,
            onExited: handleExited,
            size: size,
            limitHeight: limitHeight,
            setClosing: setClosing
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Header$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
            titleHidden: titleHidden,
            id: headerId,
            closing: closing,
            onClose: onClose
        }, title), bodyMarkup, footerMarkup);
        backdrop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Backdrop$2f$Backdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Backdrop"], {
            setClosing: setClosing,
            onClick: onClose
        });
    }
    const animated = !instant;
    const activatorMarkup = activator && !isRef(activator) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref: activatorRef,
        as: activatorWrapper
    }, activator) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$within$2d$content$2d$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinContentContext"].Provider, {
        value: true
    }, activatorMarkup, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        idPrefix: "modal"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TransitionGroup$3e$__["TransitionGroup"], {
        appear: animated,
        enter: animated,
        exit: animated
    }, dialog), backdrop));
};
function isRef(ref) {
    return Object.prototype.hasOwnProperty.call(ref, 'current');
}
Modal.Section = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$components$2f$Section$2f$Section$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"];
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XCircleIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgXCircleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgXCircleIcon = function SvgXCircleIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    }));
};
SvgXCircleIcon.displayName = "XCircleIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XCircleIcon.svg.mjs [app-ssr] (ecmascript) <export S as XCircleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XCircleIcon.svg.mjs [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEventListener",
    ()=>useEventListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js [app-ssr] (ecmascript)");
;
;
/**
 * Acceptable target elements for `useEventListener`.
 */ /**
 * Extracts the target element from a React `RefObject` or returns the input element.
 */ /**
 * Extracts a (lib.dom.ts) EventMap for a given target element.
 */ /**
 * Extracts all event names for a given target element.
 */ /**
 * Extracts the `event` object for a given event type.
 */ /**
 * React hook encapsulating the boilerplate logic for adding and removing event listeners.
 */ function useEventListener(eventName, handler, target, options) {
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(handler);
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(options);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        handlerRef.current = handler;
    }, [
        handler
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        optionsRef.current = options;
    }, [
        options
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!(typeof eventName === 'string' && target !== null)) return;
        let targetElement;
        if (typeof target === 'undefined') {
            targetElement = window;
        } else if ('current' in target) {
            if (target.current === null) return;
            targetElement = target.current;
        } else {
            targetElement = target;
        }
        const eventOptions = optionsRef.current;
        const eventListener = (event)=>handlerRef.current(event);
        targetElement.addEventListener(eventName, eventListener, eventOptions);
        return ()=>{
            targetElement.removeEventListener(eventName, eventListener, eventOptions);
        };
    }, [
        eventName,
        target
    ]);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "TextField": "Polaris-TextField",
    "ClearButton": "Polaris-TextField__ClearButton",
    "Loading": "Polaris-TextField__Loading",
    "disabled": "Polaris-TextField--disabled",
    "error": "Polaris-TextField--error",
    "readOnly": "Polaris-TextField--readOnly",
    "Input": "Polaris-TextField__Input",
    "Backdrop": "Polaris-TextField__Backdrop",
    "multiline": "Polaris-TextField--multiline",
    "hasValue": "Polaris-TextField--hasValue",
    "focus": "Polaris-TextField--focus",
    "VerticalContent": "Polaris-TextField__VerticalContent",
    "InputAndSuffixWrapper": "Polaris-TextField__InputAndSuffixWrapper",
    "toneMagic": "Polaris-TextField--toneMagic",
    "Prefix": "Polaris-TextField__Prefix",
    "Suffix": "Polaris-TextField__Suffix",
    "AutoSizeWrapper": "Polaris-TextField__AutoSizeWrapper",
    "AutoSizeWrapperWithSuffix": "Polaris-TextField__AutoSizeWrapperWithSuffix",
    "suggestion": "Polaris-TextField--suggestion",
    "borderless": "Polaris-TextField--borderless",
    "slim": "Polaris-TextField--slim",
    "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
    "Input-suffixed": "Polaris-TextField__Input--suffixed",
    "Input-alignRight": "Polaris-TextField__Input--alignRight",
    "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
    "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
    "Input-autoSize": "Polaris-TextField__Input--autoSize",
    "PrefixIcon": "Polaris-TextField__PrefixIcon",
    "CharacterCount": "Polaris-TextField__CharacterCount",
    "AlignFieldBottom": "Polaris-TextField__AlignFieldBottom",
    "Spinner": "Polaris-TextField__Spinner",
    "SpinnerIcon": "Polaris-TextField__SpinnerIcon",
    "Resizer": "Polaris-TextField__Resizer",
    "DummyInput": "Polaris-TextField__DummyInput",
    "Segment": "Polaris-TextField__Segment",
    "monospaced": "Polaris-TextField--monospaced"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "hidden": "Polaris-Labelled--hidden",
    "LabelWrapper": "Polaris-Labelled__LabelWrapper",
    "disabled": "Polaris-Labelled--disabled",
    "HelpText": "Polaris-Labelled__HelpText",
    "readOnly": "Polaris-Labelled--readOnly",
    "Error": "Polaris-Labelled__Error",
    "Action": "Polaris-Labelled__Action"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/AlertCircleIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgAlertCircleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgAlertCircleIcon = function SvgAlertCircleIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
    }));
};
SvgAlertCircleIcon.displayName = "AlertCircleIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/AlertCircleIcon.svg.mjs [app-ssr] (ecmascript) <export S as AlertCircleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$AlertCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$AlertCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/AlertCircleIcon.svg.mjs [app-ssr] (ecmascript)");
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "InlineError": "Polaris-InlineError",
    "Icon": "Polaris-InlineError__Icon"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineError",
    ()=>InlineError,
    "errorTextID",
    ()=>errorTextID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$AlertCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__AlertCircleIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/AlertCircleIcon.svg.mjs [app-ssr] (ecmascript) <export S as AlertCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineError$2f$InlineError$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
function InlineError({ message, fieldID }) {
    if (!message) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: errorTextID(fieldID),
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineError$2f$InlineError$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].InlineError
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineError$2f$InlineError$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$AlertCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__AlertCircleIcon$3e$__["AlertCircleIcon"]
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodyMd"
    }, message));
}
function errorTextID(id) {
    return `${id}Error`;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Label/Label.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Label": "Polaris-Label",
    "hidden": "Polaris-Label--hidden",
    "Text": "Polaris-Label__Text",
    "RequiredIndicator": "Polaris-Label__RequiredIndicator"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Label/Label.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "labelID",
    ()=>labelID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Label/Label.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
function labelID(id) {
    return `${id}Label`;
}
function Label({ children, id, hidden, requiredIndicator }) {
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Label, hidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hidden);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        id: labelID(id),
        htmlFor: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Text, requiredIndicator && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].RequiredIndicator)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodyMd"
    }, children)));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Labelled",
    ()=>Labelled,
    "helpTextID",
    ()=>helpTextID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineError$2f$InlineError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Label/Label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Button/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Labelled({ id, label, error, action, helpText, children, labelHidden, requiredIndicator, disabled, readOnly, ...rest }) {
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(labelHidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hidden, disabled && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled, readOnly && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].readOnly);
    const actionMarkup = action ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Action
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Button$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonFrom"])(action, {
        variant: 'plain'
    })) : null;
    const helpTextMarkup = helpText ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].HelpText,
        id: helpTextID(id),
        "aria-disabled": disabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        tone: "subdued",
        variant: "bodyMd",
        breakWord: true
    }, helpText)) : null;
    const errorMarkup = error && typeof error !== 'boolean' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Error
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineError$2f$InlineError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineError"], {
        message: error,
        fieldID: id
    }));
    const labelMarkup = label ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].LabelWrapper
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], Object.assign({
        id: id,
        requiredIndicator: requiredIndicator
    }, rest, {
        hidden: false
    }), label), actionMarkup) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className
    }, labelMarkup, children, errorMarkup, helpTextMarkup);
}
function helpTextID(id) {
    return `${id}HelpText`;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/Connected.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Connected": "Polaris-Connected",
    "Item": "Polaris-Connected__Item",
    "Item-primary": "Polaris-Connected__Item--primary",
    "Item-focused": "Polaris-Connected__Item--focused"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToggle",
    ()=>useToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Returns a stateful value, and a set of memoized functions to toggle it,
 * set it to true and set it to false
 */ function useToggle(initialState) {
    const [value, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    return {
        value,
        toggle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setState((state)=>!state), []),
        setTrue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setState(true), []),
        setFalse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setState(false), [])
    };
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/Connected.css.js [app-ssr] (ecmascript)");
;
;
;
;
function Item({ children, position }) {
    const { value: focused, setTrue: forceTrueFocused, setFalse: forceFalseFocused } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToggle"])(false);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Item, focused && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Item-focused'], position === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Item-primary'] : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Item-connection']);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        onBlur: forceFalseFocused,
        onFocus: forceTrueFocused,
        className: className
    }, children);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Connected",
    ()=>Connected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/Connected.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$components$2f$Item$2f$Item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js [app-ssr] (ecmascript)");
;
;
;
function Connected({ children, left, right }) {
    const leftConnectionMarkup = left ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$components$2f$Item$2f$Item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        position: "left"
    }, left) : null;
    const rightConnectionMarkup = right ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$components$2f$Item$2f$Item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        position: "right"
    }, right) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Connected
    }, leftConnectionMarkup, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$components$2f$Item$2f$Item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        position: "primary"
    }, children), rightConnectionMarkup);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/components/Spinner/Spinner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronUpIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-ssr] (ecmascript)");
;
;
;
;
const Spinner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(function Spinner({ onChange, onClick, onMouseDown, onMouseUp, onBlur }, ref) {
    function handleStep(step) {
        return ()=>onChange(step);
    }
    function handleMouseDown(onChange) {
        return (event)=>{
            if (event.button !== 0) return;
            onMouseDown?.(onChange);
        };
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Spinner,
        onClick: onClick,
        "aria-hidden": true,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        role: "button",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Segment,
        tabIndex: -1,
        onClick: handleStep(1),
        onMouseDown: handleMouseDown(handleStep(1)),
        onMouseUp: onMouseUp,
        onBlur: onBlur
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SpinnerIcon
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronUpIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronUpIcon$3e$__["ChevronUpIcon"]
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        role: "button",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Segment,
        tabIndex: -1,
        onClick: handleStep(-1),
        onMouseDown: handleMouseDown(handleStep(-1)),
        onMouseUp: onMouseUp,
        onBlur: onBlur
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SpinnerIcon
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__["ChevronDownIcon"]
    }))));
});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/components/Resizer/Resizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Resizer",
    ()=>Resizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EventListener$2f$EventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js [app-ssr] (ecmascript)");
;
;
;
;
function Resizer({ contents, currentHeight: currentHeightProp = null, minimumLines, onHeightChange }) {
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const minimumLinesNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const currentHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(currentHeightProp);
    if (currentHeightProp !== currentHeight.current) {
        currentHeight.current = currentHeightProp;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);
    const minimumLinesMarkup = minimumLines ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: minimumLinesNode,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DummyInput,
        dangerouslySetInnerHTML: {
            __html: getContentsForMinimumLines(minimumLines)
        }
    }) : null;
    const handleHeightCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (animationFrame.current) {
            cancelAnimationFrame(animationFrame.current);
        }
        animationFrame.current = requestAnimationFrame(()=>{
            if (!contentNode.current || !minimumLinesNode.current) {
                return;
            }
            const newHeight = Math.max(contentNode.current.offsetHeight, minimumLinesNode.current.offsetHeight);
            if (newHeight !== currentHeight.current) {
                onHeightChange(newHeight);
            }
        });
    }, [
        onHeightChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        handleHeightCheck();
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "aria-hidden": true,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Resizer
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$EventListener$2f$EventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventListener"], {
        event: "resize",
        handler: handleHeightCheck
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: contentNode,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DummyInput,
        dangerouslySetInnerHTML: {
            __html: getFinalContents(contents)
        }
    }), minimumLinesMarkup);
}
const ENTITIES_TO_REPLACE = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\n': '<br>',
    '\r': ''
};
const REPLACE_REGEX = new RegExp(`[${Object.keys(ENTITIES_TO_REPLACE).join()}]`, 'g');
function replaceEntity(entity) {
    return ENTITIES_TO_REPLACE[entity];
}
function getContentsForMinimumLines(minimumLines) {
    let content = '';
    for(let line = 0; line < minimumLines; line++){
        content += '<br>';
    }
    return content;
}
function getFinalContents(contents) {
    return contents ? `${contents.replace(REPLACE_REGEX, replaceEntity)}<br>` : '<br>';
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextField",
    ()=>TextField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__XCircleIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/XCircleIcon.svg.mjs [app-ssr] (ecmascript) <export S as XCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/components/Spinner/Spinner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$components$2f$Resizer$2f$Resizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/components/Resizer/Resizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Label/Label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function TextField({ prefix, suffix, verticalContent, placeholder, value = '', helpText, label, labelAction, labelHidden, disabled, clearButton, readOnly, autoFocus, focused, multiline, error, connectedRight, connectedLeft, type = 'text', name, id: idProp, role, step, largeStep, autoComplete, max, maxLength, maxHeight, min, minLength, pattern, inputMode, spellCheck, ariaOwns, ariaControls, ariaExpanded, ariaActiveDescendant, ariaAutocomplete, showCharacterCount, align, requiredIndicator, monospaced, selectTextOnFocus, suggestion, variant = 'inherit', size = 'medium', onClearButtonClick, onChange, onSpinnerChange, onFocus, onBlur, tone, autoSize, loading }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Boolean(focused));
    const isAfterInitial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$after$2d$initial$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsAfterInitialMount"])();
    const uniqId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const id = idProp ?? uniqId;
    const textFieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefixRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suffixRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const verticalContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonPressTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const spinnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return multiline ? textAreaRef.current : inputRef.current;
    }, [
        multiline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const input = getInputRef();
        if (!input || focused === undefined) return;
        focused ? input.focus() : input.blur();
    }, [
        focused,
        verticalContent,
        getInputRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const input = inputRef.current;
        const isSupportedInputType = type === 'text' || type === 'tel' || type === 'search' || type === 'url' || type === 'password';
        if (!input || !isSupportedInputType || !suggestion) {
            return;
        }
        input.setSelectionRange(value.length, suggestion.length);
    }, [
        focus,
        value,
        type,
        suggestion
    ]);
    const normalizedValue = suggestion ? suggestion : value;
    const normalizedStep = step != null ? step : 1;
    const normalizedMax = max != null ? max : Infinity;
    const normalizedMin = min != null ? min : -Infinity;
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].TextField, Boolean(normalizedValue) && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasValue, disabled && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled, readOnly && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].readOnly, error && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error, tone && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('tone', tone)], multiline && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].multiline, focus && !disabled && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].focus, variant !== 'inherit' && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][variant], size === 'slim' && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].slim);
    const inputType = type === 'currency' ? 'text' : type;
    const isNumericType = type === 'number' || type === 'integer';
    const iconPrefix = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(prefix) && prefix.type === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"];
    const prefixMarkup = prefix ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Prefix, iconPrefix && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PrefixIcon),
        id: `${id}-Prefix`,
        ref: prefixRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodyMd"
    }, prefix)) : null;
    const suffixMarkup = suffix ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Suffix,
        id: `${id}-Suffix`,
        ref: suffixRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodyMd"
    }, suffix)) : null;
    const loadingMarkup = loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Loading,
        id: `${id}-Loading`,
        ref: loadingRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
        size: "small"
    })) : null;
    let characterCountMarkup = null;
    if (showCharacterCount) {
        const characterCount = normalizedValue.length;
        const characterCountLabel = maxLength ? i18n.translate('Polaris.TextField.characterCountWithMaxLength', {
            count: characterCount,
            limit: maxLength
        }) : i18n.translate('Polaris.TextField.characterCount', {
            count: characterCount
        });
        const characterCountClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].CharacterCount, multiline && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].AlignFieldBottom);
        const characterCountText = !maxLength ? characterCount : `${characterCount}/${maxLength}`;
        characterCountMarkup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            id: `${id}-CharacterCounter`,
            className: characterCountClassName,
            "aria-label": characterCountLabel,
            "aria-live": focus ? 'polite' : 'off',
            "aria-atomic": "true",
            onClick: handleClickChild
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
            as: "span",
            variant: "bodyMd"
        }, characterCountText));
    }
    const clearButtonVisible = normalizedValue !== '';
    const clearButtonMarkup = clearButton && clearButtonVisible ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "button",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ClearButton,
        onClick: handleClearButtonPress,
        disabled: disabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        visuallyHidden: true
    }, i18n.translate('Polaris.Common.clear')), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XCircleIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__XCircleIcon$3e$__["XCircleIcon"],
        tone: "base"
    })) : null;
    const handleNumberChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((steps, stepAmount = normalizedStep)=>{
        if (onChange == null && onSpinnerChange == null) {
            return;
        }
        // Returns the length of decimal places in a number
        const dpl = (num)=>(num.toString().split('.')[1] || []).length;
        const numericValue = value ? parseFloat(value) : 0;
        if (isNaN(numericValue)) {
            return;
        }
        // Making sure the new value has the same length of decimal places as the
        // step / value has.
        const decimalPlaces = type === 'integer' ? 0 : Math.max(dpl(numericValue), dpl(stepAmount));
        const newValue = Math.min(Number(normalizedMax), Math.max(numericValue + steps * stepAmount, Number(normalizedMin)));
        if (onSpinnerChange != null) {
            onSpinnerChange(String(newValue.toFixed(decimalPlaces)), id);
        } else if (onChange != null) {
            onChange(String(newValue.toFixed(decimalPlaces)), id);
        }
    }, [
        id,
        normalizedMax,
        normalizedMin,
        onChange,
        onSpinnerChange,
        normalizedStep,
        type,
        value
    ]);
    const handleSpinnerButtonRelease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearTimeout(buttonPressTimer.current);
    }, []);
    const handleSpinnerButtonPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onChange)=>{
        const minInterval = 50;
        const decrementBy = 10;
        let interval = 200;
        const onChangeInterval = ()=>{
            if (interval > minInterval) interval -= decrementBy;
            onChange(0);
            buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
        };
        buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
        document.addEventListener('mouseup', handleSpinnerButtonRelease, {
            once: true
        });
    }, [
        handleSpinnerButtonRelease
    ]);
    const spinnerMarkup = isNumericType && step !== 0 && !disabled && !readOnly ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$components$2f$Spinner$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
        onClick: handleClickChild,
        onChange: handleNumberChange,
        onMouseDown: handleSpinnerButtonPress,
        onMouseUp: handleSpinnerButtonRelease,
        ref: spinnerRef,
        onBlur: handleOnBlur
    }) : null;
    const style = multiline && height ? {
        height,
        maxHeight
    } : null;
    const handleExpandingResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((height)=>{
        setHeight(height);
    }, []);
    const resizer = multiline && isAfterInitial ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$components$2f$Resizer$2f$Resizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resizer"], {
        contents: normalizedValue || placeholder,
        currentHeight: height,
        minimumLines: typeof multiline === 'number' ? multiline : 1,
        onHeightChange: handleExpandingResize
    }) : null;
    const describedBy = [];
    if (error) {
        describedBy.push(`${id}Error`);
    }
    if (helpText) {
        describedBy.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["helpTextID"])(id));
    }
    if (showCharacterCount) {
        describedBy.push(`${id}-CharacterCounter`);
    }
    const labelledBy = [];
    if (prefix) {
        labelledBy.push(`${id}-Prefix`);
    }
    if (suffix) {
        labelledBy.push(`${id}-Suffix`);
    }
    if (verticalContent) {
        labelledBy.push(`${id}-VerticalContent`);
    }
    labelledBy.unshift((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Label$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelID"])(id));
    const inputClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Input, align && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('Input-align', align)], suffix && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Input-suffixed'], clearButton && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Input-hasClearButton'], monospaced && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].monospaced, suggestion && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].suggestion, autoSize && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Input-autoSize']);
    const handleOnFocus = (event)=>{
        setFocus(true);
        if (selectTextOnFocus && !suggestion) {
            const input = getInputRef();
            input?.select();
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('wheel', handleOnWheel, inputRef);
    function handleOnWheel(event) {
        if (document.activeElement === event.target && isNumericType) {
            event.stopPropagation();
        }
    }
    const input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(multiline ? 'textarea' : 'input', {
        name,
        id,
        disabled,
        readOnly,
        role,
        autoFocus,
        value: normalizedValue,
        placeholder,
        style,
        autoComplete,
        className: inputClassName,
        ref: multiline ? textAreaRef : inputRef,
        min,
        max,
        step,
        minLength,
        maxLength,
        spellCheck,
        pattern,
        inputMode,
        type: inputType,
        rows: getRows(multiline),
        size: autoSize ? 1 : undefined,
        'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
        'aria-labelledby': labelledBy.join(' '),
        'aria-invalid': Boolean(error),
        'aria-owns': ariaOwns,
        'aria-activedescendant': ariaActiveDescendant,
        'aria-autocomplete': ariaAutocomplete,
        'aria-controls': ariaControls,
        'aria-expanded': ariaExpanded,
        'aria-required': requiredIndicator,
        ...normalizeAriaMultiline(multiline),
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
        onClick: handleClickChild,
        onKeyPress: handleKeyPress,
        onKeyDown: handleKeyDown,
        onChange: !suggestion ? handleChange : undefined,
        onInput: suggestion ? handleChange : undefined,
        // 1Password disable data attribute
        'data-1p-ignore': autoComplete === 'off' || undefined,
        // LastPass disable data attribute
        'data-lpignore': autoComplete === 'off' || undefined,
        // Dashlane disable data attribute
        'data-form-type': autoComplete === 'off' ? 'other' : undefined
    });
    const inputWithVerticalContentMarkup = verticalContent ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].VerticalContent,
        id: `${id}-VerticalContent`,
        ref: verticalContentRef,
        onClick: handleClickChild
    }, verticalContent, input) : null;
    const inputMarkup = verticalContent ? inputWithVerticalContentMarkup : input;
    const backdropMarkup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Backdrop, connectedLeft && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Backdrop-connectedLeft'], connectedRight && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]['Backdrop-connectedRight'])
    });
    const inputAndSuffixMarkup = autoSize ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].InputAndSuffixWrapper
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].AutoSizeWrapper, suffix && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].AutoSizeWrapperWithSuffix),
        "data-auto-size-value": value || placeholder
    }, inputMarkup), suffixMarkup) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, inputMarkup, suffixMarkup);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Labelled"], {
        label: label,
        id: id,
        error: error,
        action: labelAction,
        labelHidden: labelHidden,
        helpText: helpText,
        requiredIndicator: requiredIndicator,
        disabled: disabled,
        readOnly: readOnly
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Connected$2f$Connected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Connected"], {
        left: connectedLeft,
        right: connectedRight
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className,
        onClick: handleClick,
        ref: textFieldRef
    }, prefixMarkup, inputAndSuffixMarkup, characterCountMarkup, loadingMarkup, clearButtonMarkup, spinnerMarkup, backdropMarkup, resizer)));
    //TURBOPACK unreachable
    ;
    function handleChange(event) {
        onChange && onChange(event.currentTarget.value, id);
    }
    function handleClick(event) {
        const { target } = event;
        // For TextFields used with Combobox, focus needs to be set again even
        // if the TextField is already focused to trigger the logic to open the
        // Combobox activator
        const inputRefRole = inputRef?.current?.getAttribute('role');
        if (target === inputRef.current && inputRefRole === 'combobox') {
            inputRef.current?.focus();
            handleOnFocus(event);
            return;
        }
        if (isPrefixOrSuffix(target) || isVerticalContent(target) || isInput(target) || isSpinner(target) || isLoadingSpinner(target) || focus) {
            return;
        }
        getInputRef()?.focus();
    }
    function handleClickChild(event) {
        if (!isSpinner(event.target) && !isInput(event.target)) {
            event.stopPropagation();
        }
        if (isPrefixOrSuffix(event.target) || isVerticalContent(event.target) || isInput(event.target) || isLoadingSpinner(event.target) || focus) {
            return;
        }
        setFocus(true);
        getInputRef()?.focus();
    }
    function handleClearButtonPress() {
        onClearButtonClick && onClearButtonClick(id);
    }
    function handleKeyPress(event) {
        const { key, which } = event;
        const numbersSpec = /[\d.,eE+-]$/;
        const integerSpec = /[\deE+-]$/;
        if (!isNumericType || which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].Enter || type === 'number' && numbersSpec.test(key) || type === 'integer' && integerSpec.test(key)) {
            return;
        }
        event.preventDefault();
    }
    function handleKeyDown(event) {
        if (!isNumericType) {
            return;
        }
        const { key, which } = event;
        if (type === 'integer' && (key === 'ArrowUp' || which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].UpArrow)) {
            handleNumberChange(1);
            event.preventDefault();
        }
        if (type === 'integer' && (key === 'ArrowDown' || which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].DownArrow)) {
            handleNumberChange(-1);
            event.preventDefault();
        }
        if ((which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].Home || key === 'Home') && min !== undefined) {
            if (onSpinnerChange != null) {
                onSpinnerChange(String(min), id);
            } else if (onChange != null) {
                onChange(String(min), id);
            }
        }
        if ((which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].End || key === 'End') && max !== undefined) {
            if (onSpinnerChange != null) {
                onSpinnerChange(String(max), id);
            } else if (onChange != null) {
                onChange(String(max), id);
            }
        }
        if ((which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].PageUp || key === 'PageUp') && largeStep !== undefined) {
            handleNumberChange(1, largeStep);
        }
        if ((which === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key"].PageDown || key === 'PageDown') && largeStep !== undefined) {
            handleNumberChange(-1, largeStep);
        }
    }
    function handleOnBlur(event) {
        setFocus(false);
        // Return early if new focus target is inside the TextField component
        if (textFieldRef.current?.contains(event?.relatedTarget)) {
            return;
        }
        if (onBlur) {
            onBlur(event);
        }
    }
    function isInput(target) {
        const input = getInputRef();
        return target instanceof HTMLElement && input && (input.contains(target) || input.contains(document.activeElement));
    }
    function isPrefixOrSuffix(target) {
        return target instanceof Element && (prefixRef.current && prefixRef.current.contains(target) || suffixRef.current && suffixRef.current.contains(target));
    }
    function isSpinner(target) {
        return target instanceof Element && spinnerRef.current && spinnerRef.current.contains(target);
    }
    function isLoadingSpinner(target) {
        return target instanceof Element && loadingRef.current && loadingRef.current.contains(target);
    }
    function isVerticalContent(target) {
        return target instanceof Element && verticalContentRef.current && (verticalContentRef.current.contains(target) || verticalContentRef.current.contains(document.activeElement));
    }
}
function getRows(multiline) {
    if (!multiline) return undefined;
    return typeof multiline === 'number' ? multiline : 1;
}
function normalizeAriaMultiline(multiline) {
    if (!multiline) return undefined;
    return Boolean(multiline) || typeof multiline === 'number' && multiline > 0 ? {
        'aria-multiline': true
    } : undefined;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Select/Select.css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Select": "Polaris-Select",
    "disabled": "Polaris-Select--disabled",
    "error": "Polaris-Select--error",
    "Backdrop": "Polaris-Select__Backdrop",
    "Input": "Polaris-Select__Input",
    "Content": "Polaris-Select__Content",
    "InlineLabel": "Polaris-Select__InlineLabel",
    "Icon": "Polaris-Select__Icon",
    "SelectedOption": "Polaris-Select__SelectedOption",
    "Prefix": "Polaris-Select__Prefix",
    "hover": "Polaris-Select--hover",
    "toneMagic": "Polaris-Select--toneMagic"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Select/Select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SelectIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SelectIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs [app-ssr] (ecmascript) <export S as SelectIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Select/Select.css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const PLACEHOLDER_VALUE = '';
function Select({ options: optionsProp, label, labelAction, labelHidden: labelHiddenProp, labelInline, disabled, helpText, placeholder, id: idProp, name, value = PLACEHOLDER_VALUE, error, onChange, onFocus, onBlur, requiredIndicator, tone }) {
    const { value: focused, toggle: toggleFocused } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToggle"])(false);
    const uniqId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const id = idProp ?? uniqId;
    const labelHidden = labelInline ? true : labelHiddenProp;
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Select, error && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error, tone && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variationName"])('tone', tone)], disabled && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        toggleFocused();
        onFocus?.(event);
    }, [
        onFocus,
        toggleFocused
    ]);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        toggleFocused();
        onBlur?.(event);
    }, [
        onBlur,
        toggleFocused
    ]);
    const handleChange = onChange ? (event)=>onChange(event.currentTarget.value, id) : undefined;
    const describedBy = [];
    if (helpText) {
        describedBy.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["helpTextID"])(id));
    }
    if (error) {
        describedBy.push(`${id}Error`);
    }
    const options = optionsProp || [];
    let normalizedOptions = options.map(normalizeOption);
    if (placeholder) {
        normalizedOptions = [
            {
                label: placeholder,
                value: PLACEHOLDER_VALUE,
                disabled: true
            },
            ...normalizedOptions
        ];
    }
    const inlineLabelMarkup = labelInline && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        paddingInlineEnd: "100"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodyMd",
        tone: tone && tone === 'magic' && !focused ? 'magic-subdued' : 'subdued',
        truncate: true
    }, label));
    const selectedOption = getSelectedOption(normalizedOptions, value);
    const prefixMarkup = selectedOption.prefix && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Prefix
    }, selectedOption.prefix);
    const contentMarkup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Content,
        "aria-hidden": true,
        "aria-disabled": disabled
    }, inlineLabelMarkup, prefixMarkup, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SelectedOption
    }, selectedOption.label), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SelectIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SelectIcon$3e$__["SelectIcon"]
    })));
    const optionsMarkup = normalizedOptions.map(renderOption);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Labelled$2f$Labelled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Labelled"], {
        id: id,
        label: label,
        error: error,
        action: labelAction,
        labelHidden: labelHidden,
        helpText: helpText,
        requiredIndicator: requiredIndicator,
        disabled: disabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("select", {
        id: id,
        name: name,
        value: value,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Input,
        disabled: disabled,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy.length ? describedBy.join(' ') : undefined,
        "aria-required": requiredIndicator
    }, optionsMarkup), contentMarkup, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Select$2f$Select$2e$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Backdrop
    })));
}
function isString(option) {
    return typeof option === 'string';
}
function isGroup(option) {
    return typeof option === 'object' && 'options' in option && option.options != null;
}
function normalizeStringOption(option) {
    return {
        label: option,
        value: option
    };
}
/**
 * Converts a string option (and each string option in a Group) into
 * an Option object.
 */ function normalizeOption(option) {
    if (isString(option)) {
        return normalizeStringOption(option);
    } else if (isGroup(option)) {
        const { title, options } = option;
        return {
            title,
            options: options.map((option)=>{
                return isString(option) ? normalizeStringOption(option) : option;
            })
        };
    }
    return option;
}
/**
 * Gets the text to display in the UI, for the currently selected option
 */ function getSelectedOption(options, value) {
    const flatOptions = flattenOptions(options);
    let selectedOption = flatOptions.find((option)=>value === option.value);
    if (selectedOption === undefined) {
        // Get the first visible option (not the hidden placeholder)
        selectedOption = flatOptions.find((option)=>!option.hidden);
    }
    return selectedOption || {
        value: '',
        label: ''
    };
}
/**
 * Ungroups an options array
 */ function flattenOptions(options) {
    let flatOptions = [];
    options.forEach((optionOrGroup)=>{
        if (isGroup(optionOrGroup)) {
            flatOptions = flatOptions.concat(optionOrGroup.options);
        } else {
            flatOptions.push(optionOrGroup);
        }
    });
    return flatOptions;
}
function renderSingleOption(option) {
    const { value, label, prefix: _prefix, key, ...rest } = option;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("option", Object.assign({
        key: key ?? value,
        value: value
    }, rest), label);
}
function renderOption(optionOrGroup) {
    if (isGroup(optionOrGroup)) {
        const { title, options } = optionOrGroup;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("optgroup", {
            label: title,
            key: title
        }, options.map(renderSingleOption));
    }
    return renderSingleOption(optionOrGroup);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/react-fast-compare/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */ var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.3
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        // START: Modifications:
        // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
        //    to co-exist with es5.
        // 2. Replace `for of` with es5 compliant iteration using `for`.
        //    Basically, take:
        //
        //    ```js
        //    for (i of a.entries())
        //      if (!b.has(i[0])) return false;
        //    ```
        //
        //    ... and convert to:
        //
        //    ```js
        //    it = a.entries();
        //    while (!(i = it.next()).done)
        //      if (!b.has(i.value[0])) return false;
        //    ```
        //
        //    **Note**: `i` access switches to `i.value`.
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!equal(i.value[1], b.get(i.value[0]))) return false;
            return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            return true;
        }
        // END: Modifications
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        // START: Modifications:
        // Apply guards for `Object.create(null)` handling. See:
        // - https://github.com/FormidableLabs/react-fast-compare/issues/64
        // - https://github.com/epoberezkin/fast-deep-equal/issues/49
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
        // END: Modifications
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        // END: fast-deep-equal
        // START: react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element) return false;
        // custom handling for React/Preact
        for(i = length; i-- !== 0;){
            if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                continue;
            }
            // all other properties should be traversed as usual
            if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        // END: react-fast-compare
        // START: fast-deep-equal
        return true;
    }
    return a !== a && b !== b;
}
// end fast-deep-equal
module.exports = function isEqual(a, b) {
    try {
        return equal(a, b);
    } catch (error) {
        if ((error.message || '').match(/stack|recursion/i)) {
            // warn on circular references, don't crash
            // browsers give this different errors name and messages:
            // chrome/safari: "RangeError", "Maximum call stack size exceeded"
            // firefox: "InternalError", too much recursion"
            // edge: "Error", "Out of stack space"
            console.warn('react-fast-compare cannot handle circular refs');
            return false;
        }
        // some other error. we should definitely know about these
        throw error;
    }
};
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-deep-compare-ref.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepCompareRef",
    ()=>useDeepCompareRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/react-fast-compare/index.js [app-ssr] (ecmascript)");
;
;
/**
 * Allows for custom or deep comparison of a dependency list. Useful to keep a consistent dependency
 * list across reference changes.
 * @param dependencies A dependency array similar to React's useEffect / useCallback / useMemo
 * @param comparator An optional function to compare dependencies that'll default to a deep comparison
 * @returns A dependency list
 * @see {@link https://github.com/Shopify/polaris-react/blob/main/src/utilities/use-deep-effect.tsx}
 * @see {@link https://github.com/Shopify/polaris-react/blob/main/src/utilities/use-deep-callback.tsx}
 * @example
 * function useDeepEffectExample(callback, dependencies, customCompare) {
 *  useEffect(callback, useDeepCompareRef(dependencies, customCompare));
 * }
 */ function useDeepCompareRef(dependencies, comparator = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
    const dependencyList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(dependencies);
    if (!comparator(dependencyList.current, dependencies)) {
        dependencyList.current = dependencies;
    }
    return dependencyList.current;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-deep-effect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepEffect",
    ()=>useDeepEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$deep$2d$compare$2d$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-deep-compare-ref.js [app-ssr] (ecmascript)");
;
;
/**
 * A replacement for React's useEffect that'll allow for custom and deep
 * compares of the dependency list.
 * @see {@link https://reactjs.org/docs/hooks-reference.html#useeffect}
 * @param callback Accepts a callback that's forwarded to React's useEffect
 * @param dependencies A dependency array similar to React's useEffect however it utilizes a deep compare
 * @param customCompare Opportunity to provide a custom compare function
 * @example
 * function ComponentExample() {
 *  const [, forceUpdate] = useState();
 *  const obj = {a: 1};
 *
 *  useDeepEffect(() => {
 *    console.log('useDeepEffect invocation');
 *    forceUpdate(obj);
 *  }, [obj]);
 *
 *  return null;
 * }
 */ function useDeepEffect(callback, dependencies, customCompare) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(callback, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$deep$2d$compare$2d$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeepCompareRef"])(dependencies, customCompare));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/frame/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFrame",
    ()=>useFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$frame$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/frame/context.js [app-ssr] (ecmascript)");
;
;
function useFrame() {
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$frame$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FrameContext"]);
    if (!frame) {
        throw new Error('No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/internal-only/frame for implementation instructions.');
    }
    return frame;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Toast/Toast.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$deep$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-deep-effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$frame$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/frame/hooks.js [app-ssr] (ecmascript)");
;
;
;
// The script in the styleguide that generates the Props Explorer data expects
// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.
const Toast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Toast(props) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const { showToast, hideToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$frame$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFrame"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$deep$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeepEffect"])(()=>{
        showToast({
            id,
            ...props
        });
        return ()=>{
            hideToast({
                id
            });
        };
    }, [
        props
    ]);
    return null;
});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/PlusIcon.svg.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>SvgPlusIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var SvgPlusIcon = function SvgPlusIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10.75 5.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.5h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5Z"
    }));
};
SvgPlusIcon.displayName = "PlusIcon";
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/PlusIcon.svg.mjs [app-ssr] (ecmascript) <export S as PlusIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlusIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PlusIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PlusIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/PlusIcon.svg.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=bb515_d13f51bf._.js.map