module.exports = [
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
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-interface.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInterface",
    ()=>isInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function isInterface(x) {
    return !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(x) && x !== undefined;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-react-element.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isReactElement",
    ()=>isReactElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function isReactElement(x) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(x) && x !== undefined;
}
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
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/within-filter-context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WithinFilterContext",
    ()=>WithinFilterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const WithinFilterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEphemeralPresenceManager",
    ()=>useEphemeralPresenceManager,
    "useReadOnlyEphemeralPresenceManager",
    ()=>useReadOnlyEphemeralPresenceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$ephemeral$2d$presence$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js [app-ssr] (ecmascript)");
;
;
function useEphemeralPresenceManager() {
    const ephemeralPresenceManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$ephemeral$2d$presence$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EphemeralPresenceManagerContext"]);
    if (!ephemeralPresenceManager) {
        throw new Error('No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.');
    }
    return ephemeralPresenceManager;
}
function useReadOnlyEphemeralPresenceManager() {
    const { presenceList, presenceCounter } = useEphemeralPresenceManager();
    return {
        presenceList,
        presenceCounter
    };
}
;
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
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/media-query/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$media$2d$query$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js [app-ssr] (ecmascript)");
;
;
function useMediaQuery() {
    const mediaQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$media$2d$query$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaQueryContext"]);
    if (!mediaQuery) {
        throw new Error('No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.');
    }
    return mediaQuery;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-input-focused.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInputFocused",
    ()=>isInputFocused
]);
var EditableTarget = /*#__PURE__*/ function(EditableTarget) {
    EditableTarget["Input"] = "INPUT";
    EditableTarget["Textarea"] = "TEXTAREA";
    EditableTarget["Select"] = "SELECT";
    EditableTarget["ContentEditable"] = "contenteditable";
    return EditableTarget;
}(EditableTarget || {});
function isInputFocused() {
    if (document == null || document.activeElement == null) {
        return false;
    }
    const { tagName } = document.activeElement;
    return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStickyManager",
    ()=>useStickyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js [app-ssr] (ecmascript)");
;
;
;
function useStickyManager() {
    const stickyManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$sticky$2d$manager$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyManagerContext"]);
    if (!stickyManager) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingAppProviderError"]('No StickyManager was provided.');
    }
    return stickyManager;
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
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/clamp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(number, min, max) {
    if (number < min) return min;
    if (number > max) return max;
    return number;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/roundNumberToDecimalPlaces.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "roundNumberToDecimalPlaces",
    ()=>roundNumberToDecimalPlaces
]);
// Because everything is a float in JS, Number.toFixed sometimes rounds in the
// "wrong" direction because of float imprecision. For instance:
// `(1.005).toFixed(2)` is `1.00`, NOT `1.01` because 1.005 in floating point is
// actually 1.004999995. By using exponentiation tricks here we can work around
// this imprecision, so `roundNumberToDecimalPlaces(1.005)` returns the expected
// value of `1.01`
// See https://www.jacklmoore.com/notes/rounding-in-javascript/
function roundNumberToDecimalPlaces(value, decimals) {
    const exponent = Number(`${value}e${decimals}`);
    const roundedExponent = Math.round(exponent);
    const numberWithDecimalPlaces = Number(`${roundedExponent}e-${decimals}`);
    return numberWithDecimalPlaces;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/color-transformers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hexToRgb",
    ()=>hexToRgb,
    "hsbToHex",
    ()=>hsbToHex,
    "hsbToRgb",
    ()=>hsbToRgb,
    "hslToRgb",
    ()=>hslToRgb,
    "rgbString",
    ()=>rgbString,
    "rgbToHex",
    ()=>rgbToHex,
    "rgbToHsb",
    ()=>rgbToHsb,
    "rgbToHsl",
    ()=>rgbToHsl,
    "rgbaString",
    ()=>rgbaString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/clamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/roundNumberToDecimalPlaces.js [app-ssr] (ecmascript)");
;
;
function rgbString(color) {
    const { red, green, blue } = color;
    if ('alpha' in color) {
        return `rgba(${red}, ${green}, ${blue}, ${color.alpha})`;
    } else {
        return `rgb(${red}, ${green}, ${blue})`;
    }
}
const rgbaString = rgbString;
function rgbToHex({ red, green, blue }) {
    return `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
}
function componentToHex(component) {
    const hex = component.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function hsbToHex(color) {
    return rgbToHex(hsbToRgb(color));
}
function rgbFromHueAndChroma(hue, chroma) {
    const huePrime = hue / 60;
    const hueDelta = 1 - Math.abs(huePrime % 2 - 1);
    const intermediateValue = chroma * hueDelta;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (huePrime >= 0 && huePrime <= 1) {
        red = chroma;
        green = intermediateValue;
        blue = 0;
    }
    if (huePrime >= 1 && huePrime <= 2) {
        red = intermediateValue;
        green = chroma;
        blue = 0;
    }
    if (huePrime >= 2 && huePrime <= 3) {
        red = 0;
        green = chroma;
        blue = intermediateValue;
    }
    if (huePrime >= 3 && huePrime <= 4) {
        red = 0;
        green = intermediateValue;
        blue = chroma;
    }
    if (huePrime >= 4 && huePrime <= 5) {
        red = intermediateValue;
        green = 0;
        blue = chroma;
    }
    if (huePrime >= 5 && huePrime <= 6) {
        red = chroma;
        green = 0;
        blue = intermediateValue;
    }
    return {
        red,
        green,
        blue
    };
}
// implements https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
function hsbToRgb(color) {
    const { hue, saturation, brightness, alpha = 1 } = color;
    const chroma = brightness * saturation;
    let { red, green, blue } = rgbFromHueAndChroma(hue, chroma);
    const chromaBrightnessDelta = brightness - chroma;
    red += chromaBrightnessDelta;
    green += chromaBrightnessDelta;
    blue += chromaBrightnessDelta;
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}
// implements https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
function hslToRgb(color) {
    const { hue, saturation, lightness, alpha = 1 } = color;
    const chroma = (1 - Math.abs(2 * (lightness / 100) - 1)) * (saturation / 100);
    let { red, green, blue } = rgbFromHueAndChroma(hue, chroma);
    const lightnessVal = lightness / 100 - chroma / 2;
    red += lightnessVal;
    green += lightnessVal;
    blue += lightnessVal;
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}
// ref https://en.wikipedia.org/wiki/HSL_and_HSV
function rgbToHsbl(color, type = 'b') {
    const { alpha = 1 } = color;
    const red = color.red / 255;
    const green = color.green / 255;
    const blue = color.blue / 255;
    const largestComponent = Math.max(red, green, blue);
    const smallestComponent = Math.min(red, green, blue);
    const delta = largestComponent - smallestComponent;
    const lightness = (largestComponent + smallestComponent) / 2;
    let saturation = 0;
    if (largestComponent === 0) {
        saturation = 0;
    } else if (type === 'b') {
        saturation = delta / largestComponent;
    } else if (type === 'l') {
        const baseSaturation = lightness > 0.5 ? delta / (2 - largestComponent - smallestComponent) : delta / (largestComponent + smallestComponent);
        saturation = isNaN(baseSaturation) ? 0 : baseSaturation;
    }
    let huePercentage = 0;
    switch(largestComponent){
        case red:
            huePercentage = (green - blue) / delta + (green < blue ? 6 : 0);
            break;
        case green:
            huePercentage = (blue - red) / delta + 2;
            break;
        case blue:
            huePercentage = (red - green) / delta + 4;
    }
    const hue = huePercentage / 6 * 360;
    const clampedHue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(hue, 0, 360);
    return {
        hue: clampedHue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])(clampedHue, 2) : 0,
        saturation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(saturation, 0, 1), 4),
        brightness: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(largestComponent, 0, 1), 4),
        lightness: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])(lightness, 4),
        alpha: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])(alpha, 4)
    };
}
function rgbToHsb(color) {
    const { hue, saturation, brightness, alpha = 1 } = rgbToHsbl(color, 'b');
    return {
        hue,
        saturation,
        brightness,
        alpha
    };
}
function rgbToHsl(color) {
    const { hue, saturation: rawSaturation, lightness: rawLightness, alpha = 1 } = rgbToHsbl(color, 'l');
    const saturation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])(rawSaturation * 100, 2);
    const lightness = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$roundNumberToDecimalPlaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundNumberToDecimalPlaces"])(rawLightness * 100, 2);
    return {
        hue,
        saturation,
        lightness,
        alpha
    };
}
function hexToRgb(color) {
    if (color.length === 4) {
        const repeatHex = (hex1, hex2)=>color.slice(hex1, hex2).repeat(2);
        const red = parseInt(repeatHex(1, 2), 16);
        const green = parseInt(repeatHex(2, 3), 16);
        const blue = parseInt(repeatHex(3, 4), 16);
        return {
            red,
            green,
            blue
        };
    }
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);
    return {
        red,
        green,
        blue
    };
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-copy-to-clipboard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyToClipboard",
    ()=>useCopyToClipboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Copy text to the native clipboard using the `navigator.clipboard` API
 * Adapted from https://www.benmvp.com/blog/copy-to-clipboard-react-custom-hook
 */ function useCopyToClipboard(options = {}) {
    const { defaultValue = '', timeout = 1500 } = options;
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('inactive');
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        navigator.clipboard.writeText(typeof value === 'string' ? value : defaultValue).then(()=>setStatus('copied'), ()=>setStatus('failed')).catch((error)=>{
            throw error;
        });
    }, [
        defaultValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === 'inactive') return;
        const timeoutId = setTimeout(()=>setStatus('inactive'), timeout);
        return ()=>clearTimeout(timeoutId);
    }, [
        status,
        timeout
    ]);
    return [
        copy,
        status
    ];
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-focus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocus",
    ()=>useFocus,
    "useFocusIn",
    ()=>useFocusIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js [app-ssr] (ecmascript)");
;
;
function useFocus(/**
 * The target element for the focus event.
 */ ref) {
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsFocused(true), []);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsFocused(false), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('focus', handleFocus, ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('blur', handleBlur, ref);
    return isFocused;
}
function useFocusIn(/**
 * The target element for the focusin event.
 */ ref) {
    const [isFocusedIn, setIsFocusedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const deferredFocusOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFocusIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (deferredFocusOut.current) {
            clearTimeout(deferredFocusOut.current);
            deferredFocusOut.current = null;
        }
        setIsFocusedIn(true);
    }, []);
    const handleFocusOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Push focusout state update to the end of the event queue to
        // allow subsequent focusin events to persist the isFocusedIn state
        deferredFocusOut.current = setTimeout(()=>{
            setIsFocusedIn(false);
        }, 0);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('focusin', handleFocusIn, ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('focusout', handleFocusOut, ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (deferredFocusOut.current) clearTimeout(deferredFocusOut.current);
        }, []);
    return isFocusedIn;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-hover.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHover",
    ()=>useHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js [app-ssr] (ecmascript)");
;
;
function useHover(/**
 * The target element for the mouseenter event.
 */ ref) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsHovered(true), []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsHovered(false), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('mouseenter', handleMouseEnter, ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('mouseleave', handleMouseLeave, ref);
    return isHovered;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-media-query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryAliases",
    ()=>queryAliases,
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/target.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js [app-ssr] (ecmascript)");
;
;
;
// Adapted from https://usehooks-ts.com/react-hook/use-media-query
// Derived from https://github.com/argyleink/open-props/blob/09e70c03c0a2533d06ec823f47490f018eb27f23/src/props.media.css#L21-L24
const queryAliases = {
    touch: '(hover: none) and (pointer: coarse)',
    stylus: '(hover: none) and (pointer: fine)',
    pointer: '(hover) and (pointer: coarse)',
    mouse: '(hover) and (pointer: fine)'
};
const isQueryAlias = (queryOrAlias)=>Object.prototype.hasOwnProperty.call(queryAliases, queryOrAlias);
// Prevents TS from widening union types to `string`
// eslint-disable-next-line @typescript-eslint/ban-types
function useMediaQuery(queryOrAlias, options = {}) {
    const { defaultValue = false, initializeWithValue = false } = options;
    const query = isQueryAlias(queryOrAlias) ? queryAliases[queryOrAlias] : queryOrAlias;
    const getMatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((query)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"]) return defaultValue;
        return window.matchMedia(query).matches;
    }, [
        defaultValue
    ]);
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (initializeWithValue) return getMatches(query);
        return defaultValue;
    });
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMatches(getMatches(query));
    }, [
        getMatches,
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(()=>{
        const mediaQueryList = window.matchMedia(query);
        // Triggered at the first client-side load and if query changes
        handleChange();
        // Use deprecated `addListener` and `removeListener` to support Safari < 14
        // (https://github.com/juliencrn/usehooks-ts/pull/135)
        if (mediaQueryList.addListener) {
            mediaQueryList.addListener(handleChange);
        } else {
            mediaQueryList.addEventListener('change', handleChange);
        }
        return ()=>{
            if (mediaQueryList.removeListener) {
                mediaQueryList.removeListener(handleChange);
            } else {
                mediaQueryList.removeEventListener('change', handleChange);
            }
        };
    }, [
        query
    ]);
    return matches;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-index-resource-state.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionType",
    ()=>SelectionType,
    "useIndexResourceState",
    ()=>useIndexResourceState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
let SelectionType = /*#__PURE__*/ function(SelectionType) {
    SelectionType["All"] = "all";
    SelectionType["Page"] = "page";
    SelectionType["Multi"] = "multi";
    SelectionType["Single"] = "single";
    SelectionType["Range"] = "range";
    return SelectionType;
}({});
function defaultResourceIDResolver(resource) {
    if ('id' in resource) {
        return resource.id;
    }
    throw new Error('Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`');
}
function useIndexResourceState(resources, { selectedResources: initSelectedResources = [], allResourcesSelected: initAllResourcesSelected = false, resourceIDResolver = defaultResourceIDResolver, resourceFilter = undefined } = {
    selectedResources: [],
    allResourcesSelected: false,
    resourceIDResolver: defaultResourceIDResolver,
    resourceFilter: undefined
}) {
    const [selectedResources, setSelectedResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initSelectedResources);
    const [allResourcesSelected, setAllResourcesSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initAllResourcesSelected);
    const handleSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectionType, isSelecting, selection, _position)=>{
        if (selectionType === SelectionType.All) {
            setAllResourcesSelected(isSelecting);
        } else if (allResourcesSelected) {
            setAllResourcesSelected(false);
        }
        switch(selectionType){
            case SelectionType.Single:
                setSelectedResources((newSelectedResources)=>isSelecting ? [
                        ...newSelectedResources,
                        selection
                    ] : newSelectedResources.filter((id)=>id !== selection));
                break;
            case SelectionType.All:
            case SelectionType.Page:
                if (resourceFilter) {
                    const filteredResources = resources.filter(resourceFilter);
                    setSelectedResources(isSelecting && selectedResources.length < filteredResources.length ? filteredResources.map(resourceIDResolver) : []);
                } else {
                    setSelectedResources(isSelecting ? resources.map(resourceIDResolver) : []);
                }
                break;
            case SelectionType.Multi:
                if (!selection) break;
                setSelectedResources((currentSelectedResources)=>{
                    const ids = [];
                    const filteredResources = resourceFilter ? resources.filter(resourceFilter) : resources;
                    for(let i = selection[0]; i <= selection[1]; i++){
                        if (filteredResources.includes(resources[i])) {
                            const id = resourceIDResolver(resources[i]);
                            if (isSelecting && !currentSelectedResources.includes(id) || !isSelecting && currentSelectedResources.includes(id)) {
                                ids.push(id);
                            }
                        }
                    }
                    return isSelecting ? [
                        ...currentSelectedResources,
                        ...ids
                    ] : currentSelectedResources.filter((id)=>!ids.includes(id));
                });
                break;
            case SelectionType.Range:
                if (!selection) break;
                setSelectedResources((currentSelectedResources)=>{
                    const filteredResources = resourceFilter ? resources.filter(resourceFilter) : resources;
                    const resourceIds = filteredResources.map(resourceIDResolver);
                    const selectedIds = resourceIds.slice(Number(selection[0]), Number(selection[1]) + 1);
                    const isIndeterminate = selectedIds.some((id)=>{
                        return selectedResources.includes(id);
                    });
                    const isChecked = selectedIds.every((id)=>{
                        return selectedResources.includes(id);
                    });
                    const isSelectingAllInRange = !isChecked && (isSelecting || isIndeterminate);
                    const nextSelectedResources = isSelectingAllInRange ? [
                        ...new Set([
                            ...currentSelectedResources,
                            ...selectedIds
                        ]).values()
                    ] : currentSelectedResources.filter((id)=>!selectedIds.includes(id));
                    return nextSelectedResources;
                });
                break;
        }
    }, [
        allResourcesSelected,
        resourceFilter,
        selectedResources,
        resources,
        resourceIDResolver
    ]);
    const clearSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSelectedResources([]);
        setAllResourcesSelected(false);
    }, []);
    const removeSelectedResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((removeResources)=>{
        const selectedResourcesCopy = [
            ...selectedResources
        ];
        const newSelectedResources = selectedResourcesCopy.filter((resource)=>!removeResources.includes(resource));
        setSelectedResources(newSelectedResources);
        if (newSelectedResources.length === 0) {
            setAllResourcesSelected(false);
        }
    }, [
        selectedResources
    ]);
    return {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange,
        clearSelection,
        removeSelectedResources
    };
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/options.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSection",
    ()=>isSection
]);
function isSection(arr) {
    return typeof arr[0] === 'object' && Object.prototype.hasOwnProperty.call(arr[0], 'options');
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/combobox/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComboboxListboxContext",
    ()=>ComboboxListboxContext,
    "ComboboxListboxOptionContext",
    ()=>ComboboxListboxOptionContext,
    "ComboboxTextFieldContext",
    ()=>ComboboxTextFieldContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ComboboxTextFieldContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ComboboxListboxContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const ComboboxListboxOptionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/combobox/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComboboxListbox",
    ()=>useComboboxListbox,
    "useComboboxTextField",
    ()=>useComboboxTextField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$combobox$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/combobox/context.js [app-ssr] (ecmascript)");
;
;
function useComboboxTextField() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$combobox$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComboboxTextFieldContext"]);
    if (!context) {
        throw new Error('No Combobox was provided. Your component must be wrapped in a <Combobox> component.');
    }
    return context;
}
function useComboboxListbox() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$combobox$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComboboxListboxContext"]);
    return context;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/listbox/utilities.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollOptionIntoView",
    ()=>scrollOptionIntoView
]);
function scrollOptionIntoView(option, scrollable) {
    const listTop = scrollable.scrollTop;
    const listBottom = listTop + scrollable.clientHeight;
    const { offsetHeight: optionHeight } = option;
    const { offsetTop: optionTop } = option;
    const optionBottom = optionTop + optionHeight;
    const isVisible = optionTop > listTop && optionBottom < listBottom;
    if (!isVisible) {
        let top = 0;
        if (optionBottom > listBottom) {
            top = optionBottom + optionHeight * 0.85 - listBottom;
        } else if (optionTop < listTop) {
            top = optionTop - optionHeight * 0.15 - listTop;
        }
        requestAnimationFrame(()=>{
            scrollable.scrollBy({
                top,
                behavior: 'auto'
            });
        });
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/listbox/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionContext",
    ()=>ActionContext,
    "ListboxContext",
    ()=>ListboxContext,
    "WithinListboxContext",
    ()=>WithinListboxContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ListboxContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const WithinListboxContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
const ActionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/listbox/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useListbox",
    ()=>useListbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$listbox$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/listbox/context.js [app-ssr] (ecmascript)");
;
;
function useListbox() {
    const listbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$listbox$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListboxContext"]);
    if (!listbox) {
        throw new Error('No Listbox was provided. Listbox components must be wrapped in a Listbox');
    }
    return listbox;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/autocomplete/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MappedActionContext",
    ()=>MappedActionContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MappedActionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/banner-context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerContext",
    ()=>BannerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const BannerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
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
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/dates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dateIsInRange",
    ()=>dateIsInRange,
    "dateIsSelected",
    ()=>dateIsSelected,
    "getNewRange",
    ()=>getNewRange,
    "getNextDisplayMonth",
    ()=>getNextDisplayMonth,
    "getNextDisplayYear",
    ()=>getNextDisplayYear,
    "getOrderedWeekdays",
    ()=>getOrderedWeekdays,
    "getPreviousDisplayMonth",
    ()=>getPreviousDisplayMonth,
    "getPreviousDisplayYear",
    ()=>getPreviousDisplayYear,
    "getWeeksForMonth",
    ()=>getWeeksForMonth,
    "isDateAfter",
    ()=>isDateAfter,
    "isDateBefore",
    ()=>isDateBefore,
    "isDateDisabled",
    ()=>isDateDisabled,
    "isSameDay",
    ()=>isSameDay
]);
const WEEK_LENGTH = 7;
function getWeeksForMonth(month, year, weekStartsOn = 0) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [
        []
    ];
    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;
    const orderedWeekday = getOrderedWeekdays(weekStartsOn);
    for(let i = 0; i < orderedWeekday.indexOf(firstDayOfWeek); i++){
        currentWeek.push(null);
    }
    while(currentDate.getMonth() === month){
        if (currentWeek.length === WEEK_LENGTH) {
            currentWeek = [];
            weeks.push(currentWeek);
        }
        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1);
    }
    while(currentWeek.length < 7){
        currentWeek.push(null);
    }
    return weeks;
}
function dateIsInRange(day, range) {
    if (day == null) {
        return false;
    }
    const { start, end } = range;
    return Boolean(start && day > start && end && day < end);
}
function dateIsSelected(day, range) {
    if (day == null) {
        return false;
    }
    const { start, end } = range;
    return Boolean(start && isSameDay(start, day) || end && isSameDay(end, day));
}
function isSameDay(day1, day2) {
    return day1.getDate() === day2.getDate() && day1.getMonth() === day2.getMonth() && day1.getFullYear() === day2.getFullYear();
}
function getNewRange(range, selected) {
    if (range == null) {
        return {
            start: selected,
            end: selected
        };
    }
    const { start, end } = range;
    if (end && (isDateAfter(start, end) || isDateBefore(start, end))) {
        return {
            start: selected,
            end: selected
        };
    }
    if (start) {
        if (isDateBefore(selected, start)) {
            return {
                start: selected,
                end: selected
            };
        }
        return {
            start,
            end: selected
        };
    }
    if (end) {
        if (isDateBefore(selected, end)) {
            return {
                start: selected,
                end
            };
        }
        return {
            start: start || end,
            end: selected
        };
    }
    return {
        start: selected,
        end: selected
    };
}
function getNextDisplayMonth(month) {
    if (month === 11) {
        return 0;
    }
    return month + 1;
}
function getNextDisplayYear(month, year) {
    if (month === 11) {
        return year + 1;
    }
    return year;
}
function getPreviousDisplayMonth(month) {
    if (month === 0) {
        return 11;
    }
    return month - 1;
}
function getPreviousDisplayYear(month, year) {
    if (month === 0) {
        return year - 1;
    }
    return year;
}
function isDateAfter(date, dateToCompare) {
    return date.getTime() > dateToCompare.getTime();
}
function isDateBefore(date, dateToCompare) {
    return date.getTime() < dateToCompare.getTime();
}
function isDateDisabled(date, datesToCompare) {
    return datesToCompare.some((dateToCompare)=>{
        return date.getTime() === dateToCompare.getTime();
    });
}
const WEEKDAYS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];
function getOrderedWeekdays(weekStartsOn) {
    const weekDays = [
        ...WEEKDAYS
    ];
    const restOfDays = weekDays.splice(weekStartsOn);
    return [
        ...restOfDays,
        ...weekDays
    ];
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/capitalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalize",
    ()=>capitalize
]);
function capitalize(word = '') {
    const wordLower = word.toLowerCase();
    return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-on-value-change.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnValueChange",
    ()=>useOnValueChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useOnValueChange(value, onChange) {
    const tracked = __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const oldValue = tracked.current;
        if (value !== tracked.current) {
            tracked.current = value;
            onChange(value, oldValue);
        }
    }, [
        value,
        onChange
    ]);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/set-root-property.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setRootProperty",
    ()=>setRootProperty
]);
function setRootProperty(name, value, node) {
    if (!document) return;
    const element = node || document.documentElement;
    element.style.setProperty(name, value);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-mounted-ref.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMountedRef",
    ()=>useIsMountedRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Returns a MutatableRefObject containing a boolean value that
 * represents a components mounted status.
 * @returns MutableRefObject<boolean> The mounted status
 */ function useIsMountedRef() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isMounted.current = true;
        return ()=>{
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/pluck-deep.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluckDeep",
    ()=>pluckDeep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/is-object.js [app-ssr] (ecmascript)");
;
function pluckDeep(obj, key) {
    if (!obj) {
        return null;
    }
    const keys = Object.keys(obj);
    for (const currKey of keys){
        if (currKey === key) {
            return obj[key];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$is$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(obj[currKey])) {
            const plucked = pluckDeep(obj[currKey], key);
            if (plucked) {
                return plucked;
            }
        }
    }
    return null;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/get-width.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWidth",
    ()=>getWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$pluck$2d$deep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/pluck-deep.js [app-ssr] (ecmascript)");
;
function getWidth(value = {}, defaultWidth = 0, key = 'width') {
    const width = typeof value === 'number' ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$pluck$2d$deep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pluckDeep"])(value, key);
    return width ? `${width}px` : `${defaultWidth}px`;
}
;
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
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-deep-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepCallback",
    ()=>useDeepCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$deep$2d$compare$2d$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-deep-compare-ref.js [app-ssr] (ecmascript)");
;
;
/**
 * A replacement for React's useCallback that'll allow for custom and deep compares.
 * @see {@link https://reactjs.org/docs/hooks-reference.html#usecallback}
 * @param callback Accepts a callback that's forwarded to React's useCallback
 * @param dependencies A dependency array similar to React's useCallback however it utilizes a deep compare
 * @param customCompare Opportunity to provide a custom compare function
 * @returns A memoized callback
 * @example
 * const Child = memo(function Child({onClick}) {
 *   console.log('Child has rendered.');
 *   return <button onClick={onClick}>Click me</button>;
 * });
 *
 * function ComponentExample() {
 *   const [timesClicked, setTimesClicked] = useState(0);
 *
 *   const handleClick = useDeepCallback(() => {
 *     setTimesClicked((timesClicked) => timesClicked + 1);
 *     // New reference every render
 *   }, [{}]);
 *
 *   return (
 *     <>
 *       <div>Times clicked: {timesClicked}</div>
 *       <Child onClick={handleClick} />
 *     </>
 *   );
 * }
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function useDeepCallback(callback, dependencies, customCompare) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(callback, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$deep$2d$compare$2d$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeepCompareRef"])(dependencies, customCompare));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-touch-device.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsTouchDevice",
    ()=>useIsTouchDevice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js [app-ssr] (ecmascript)");
;
;
function useIsTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsTouchDevice(true), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventListener"])('touchstart', handleTouchStart);
    return isTouchDevice;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-previous.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePrevious",
    ()=>usePrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Returns the previous value of a variable.
 */ function usePrevious(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-provider/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SELECT_ALL_ITEMS",
    ()=>SELECT_ALL_ITEMS,
    "SelectionType",
    ()=>SelectionType
]);
const SELECT_ALL_ITEMS = 'All';
let SelectionType = /*#__PURE__*/ function(SelectionType) {
    SelectionType["All"] = "all";
    SelectionType["Page"] = "page";
    SelectionType["Multi"] = "multi";
    SelectionType["Single"] = "single";
    SelectionType["Range"] = "range";
    return SelectionType;
}({});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-provider/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndexContext",
    ()=>IndexContext,
    "IndexRowContext",
    ()=>IndexRowContext,
    "IndexSelectionChangeContext",
    ()=>IndexSelectionChangeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const IndexContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const IndexSelectionChangeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const IndexRowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-provider/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBulkSelectionData",
    ()=>useBulkSelectionData,
    "useHandleBulkSelection",
    ()=>useHandleBulkSelection,
    "useIndexRow",
    ()=>useIndexRow,
    "useIndexSelectionChange",
    ()=>useIndexSelectionChange,
    "useIndexValue",
    ()=>useIndexValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-provider/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-ssr] (ecmascript)");
;
;
;
;
function useIndexSelectionChange() {
    const onSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexSelectionChangeContext"]);
    if (!onSelectionChange) {
        throw new Error(`Missing IndexProvider context`);
    }
    return onSelectionChange;
}
function useIndexRow() {
    const indexRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexRowContext"]);
    if (!indexRow) {
        throw new Error(`Missing IndexProvider context`);
    }
    return indexRow;
}
function useIndexValue() {
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexContext"]);
    if (!index) {
        throw new Error(`Missing IndexProvider context`);
    }
    return index;
}
function useBulkSelectionData({ selectedItemsCount, itemCount, hasMoreItems, resourceName: passedResourceName, defaultPaginatedSelectAllText }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const selectable = Boolean(selectedItemsCount);
    const selectMode = selectedItemsCount === 'All' || selectedItemsCount > 0;
    const defaultResourceName = {
        singular: i18n.translate('Polaris.IndexProvider.defaultItemSingular'),
        plural: i18n.translate('Polaris.IndexProvider.defaultItemPlural')
    };
    const resourceName = passedResourceName ? passedResourceName : defaultResourceName;
    const paginatedSelectAllText = getPaginatedSelectAllText();
    const bulkActionsLabel = getBulkActionsLabel();
    const bulkActionsAccessibilityLabel = getBulkActionsAccessibilityLabel();
    let bulkSelectState = 'indeterminate';
    if (!selectedItemsCount || selectedItemsCount === 0) {
        bulkSelectState = undefined;
    } else if (selectedItemsCount === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELECT_ALL_ITEMS"] || selectedItemsCount === itemCount) {
        bulkSelectState = true;
    }
    return {
        paginatedSelectAllText,
        bulkActionsLabel,
        bulkActionsAccessibilityLabel,
        resourceName,
        selectMode,
        bulkSelectState,
        selectable
    };
    //TURBOPACK unreachable
    ;
    function getPaginatedSelectAllText() {
        if (!selectable || !hasMoreItems) {
            return;
        }
        if (selectedItemsCount === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELECT_ALL_ITEMS"]) {
            if (defaultPaginatedSelectAllText) {
                return defaultPaginatedSelectAllText;
            }
            return i18n.translate('Polaris.IndexProvider.allItemsSelected', {
                itemsLength: itemCount,
                resourceNamePlural: resourceName.plural.toLocaleLowerCase()
            });
        }
    }
    function getBulkActionsLabel() {
        const selectedItemsCountLabel = selectedItemsCount === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELECT_ALL_ITEMS"] ? `${itemCount}+` : selectedItemsCount;
        return i18n.translate('Polaris.IndexProvider.selected', {
            selectedItemsCount: selectedItemsCountLabel
        });
    }
    function getBulkActionsAccessibilityLabel() {
        const totalItemsCount = itemCount;
        const allSelected = selectedItemsCount === totalItemsCount;
        if (totalItemsCount === 1 && allSelected) {
            return i18n.translate('Polaris.IndexProvider.a11yCheckboxDeselectAllSingle', {
                resourceNameSingular: resourceName.singular
            });
        } else if (totalItemsCount === 1) {
            return i18n.translate('Polaris.IndexProvider.a11yCheckboxSelectAllSingle', {
                resourceNameSingular: resourceName.singular
            });
        } else if (allSelected) {
            return i18n.translate('Polaris.IndexProvider.a11yCheckboxDeselectAllMultiple', {
                itemsLength: itemCount,
                resourceNamePlural: resourceName.plural
            });
        } else {
            return i18n.translate('Polaris.IndexProvider.a11yCheckboxSelectAllMultiple', {
                itemsLength: itemCount,
                resourceNamePlural: resourceName.plural
            });
        }
    }
}
function useHandleBulkSelection({ onSelectionChange = ()=>{} }) {
    const lastSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectionType, toggleType, selection, sortOrder)=>{
        const prevSelected = lastSelected.current;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Multi && typeof sortOrder === 'number') {
            lastSelected.current = sortOrder;
        }
        if (selectionType === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Single || selectionType === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Multi && (typeof prevSelected !== 'number' || typeof sortOrder !== 'number')) {
            onSelectionChange(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Single, toggleType, selection);
        } else if (selectionType === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Multi) {
            const min = Math.min(prevSelected, sortOrder);
            const max = Math.max(prevSelected, sortOrder);
            onSelectionChange(selectionType, toggleType, [
                min,
                max
            ]);
        } else if (selectionType === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Page || selectionType === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].All) {
            onSelectionChange(selectionType, toggleType);
        } else if (selectionType === __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Range) {
            onSelectionChange(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$provider$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionType"].Range, toggleType, selection);
        }
    }, [
        onSelectionChange
    ]);
    return handleSelectionChange;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-table/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RowContext",
    ()=>RowContext,
    "RowHoveredContext",
    ()=>RowHoveredContext,
    "ScrollContext",
    ()=>ScrollContext,
    "scrollDefaultContext",
    ()=>scrollDefaultContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const RowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const RowHoveredContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const scrollDefaultContext = {
    scrollableContainer: null,
    canScrollLeft: false,
    canScrollRight: false
};
const ScrollContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(scrollDefaultContext);
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/resource-list/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceListContext",
    ()=>ResourceListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// This is internal, but TS throws a build-time error if we don't export it
const ResourceListContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/arrays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arraysAreEqual",
    ()=>arraysAreEqual
]);
function arraysAreEqual(firstArray, secondArray, comparator) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    return firstArray.every((firstItem, index)=>{
        const secondItem = secondArray[index];
        if (comparator != null) {
            return comparator(firstItem, secondItem);
        }
        return firstItem === secondItem;
    });
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeRegex",
    ()=>escapeRegex
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/resource-list/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SELECT_ALL_ITEMS",
    ()=>SELECT_ALL_ITEMS
]);
const SELECT_ALL_ITEMS = 'All';
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/duration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureTwoDigits",
    ()=>ensureTwoDigits,
    "secondsToDurationTranslationKey",
    ()=>secondsToDurationTranslationKey,
    "secondsToTimeComponents",
    ()=>secondsToTimeComponents,
    "secondsToTimestamp",
    ()=>secondsToTimestamp
]);
const MINUTE = 60;
const HOUR = MINUTE * 60;
function ensureTwoDigits(num) {
    return num > 9 ? String(num) : `0${num}`;
}
function secondsToTimeComponents(seconds) {
    return {
        hours: Math.floor(seconds / HOUR),
        minutes: Math.floor(seconds % HOUR / MINUTE),
        seconds: seconds % MINUTE
    };
}
function secondsToTimestamp(numSeconds) {
    const { hours, minutes, seconds } = secondsToTimeComponents(numSeconds);
    const hasHours = numSeconds > HOUR;
    const hoursText = hasHours ? `${hours}:` : '';
    const minutesText = `${hasHours ? ensureTwoDigits(minutes) : minutes}:`;
    const secondsText = `${ensureTwoDigits(seconds)}`;
    return `${hoursText}${minutesText}${secondsText}`;
}
function secondsToDurationTranslationKey(numSeconds) {
    const { hours, minutes, seconds } = secondsToTimeComponents(numSeconds);
    let durationKey = 'Polaris.VideoThumbnail.playButtonA11yLabel.duration';
    if (hours) {
        durationKey += `.hours.${hours > 1 ? 'other' : 'one'}`;
        if (seconds) {
            if (minutes > 1) {
                durationKey += `${seconds > 1 ? '.minutesAndSeconds' : '.minutesAndSecond'}`;
            } else if (minutes === 1) {
                durationKey += `${seconds > 1 ? '.minuteAndSeconds' : '.minuteAndSecond'}`;
            } else {
                durationKey += `${seconds > 1 ? '.andSeconds' : '.andSecond'}`;
            }
        } else if (minutes) {
            durationKey += `${minutes > 1 ? '.andMinutes' : '.andMinute'}`;
        } else {
            durationKey += '.only';
        }
    } else if (minutes) {
        durationKey += `.minutes.${minutes > 1 ? 'other' : 'one'}`;
        if (seconds) {
            durationKey += `${seconds > 1 ? '.andSeconds' : '.andSecond'}`;
        } else {
            durationKey += '.only';
        }
    } else if (seconds) {
        durationKey += seconds > 1 ? '.seconds.other' : '.seconds.one';
    }
    return durationKey;
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-table/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContainerScroll",
    ()=>useContainerScroll,
    "useRowHovered",
    ()=>useRowHovered,
    "useRowSelected",
    ()=>useRowSelected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$table$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/index-table/context.js [app-ssr] (ecmascript)");
;
;
function useRowHovered() {
    const hovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$table$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RowHoveredContext"]);
    return hovered;
}
function useRowSelected() {
    const { selected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$table$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RowContext"]);
    return selected;
}
function useContainerScroll() {
    const scrolledContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$index$2d$table$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollContext"]);
    return scrolledContainerRef;
}
;
}),
];

//# sourceMappingURL=bb515_%40shopify_polaris_build_esm_utilities_d02caf69._.js.map