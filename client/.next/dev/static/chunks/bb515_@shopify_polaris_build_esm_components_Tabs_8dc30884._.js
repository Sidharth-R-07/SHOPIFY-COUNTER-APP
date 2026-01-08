(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/utilities.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVisibleAndHiddenTabIndices",
    ()=>getVisibleAndHiddenTabIndices
]);
function getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth) {
    const sumTabWidths = tabWidths.reduce((sum, width)=>sum + width, 0);
    const arrayOfTabIndices = tabs.map((_, index)=>{
        return index;
    });
    const visibleTabs = [];
    const hiddenTabs = [];
    if (containerWidth > sumTabWidths) {
        visibleTabs.push(...arrayOfTabIndices);
    } else {
        visibleTabs.push(selected);
        let tabListWidth = tabWidths[selected];
        arrayOfTabIndices.forEach((currentTabIndex)=>{
            if (currentTabIndex !== selected) {
                const currentTabWidth = tabWidths[currentTabIndex];
                if (tabListWidth + currentTabWidth >= containerWidth - disclosureWidth) {
                    hiddenTabs.push(currentTabIndex);
                    return;
                }
                visibleTabs.push(currentTabIndex);
                tabListWidth += currentTabWidth;
            }
        });
    }
    return {
        visibleTabs,
        hiddenTabs
    };
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>styles
]);
var styles = {
    "Outer": "Polaris-Tabs__Outer",
    "Wrapper": "Polaris-Tabs__Wrapper",
    "WrapperWithNewButton": "Polaris-Tabs__WrapperWithNewButton",
    "ButtonWrapper": "Polaris-Tabs__ButtonWrapper",
    "Tabs": "Polaris-Tabs",
    "Tab": "Polaris-Tabs__Tab",
    "Tab-active": "Polaris-Tabs__Tab--active",
    "Tab-hasActions": "Polaris-Tabs__Tab--hasActions",
    "Tab-iconOnly": "Polaris-Tabs__Tab--iconOnly",
    "fillSpace": "Polaris-Tabs--fillSpace",
    "TabContainer": "Polaris-Tabs__TabContainer",
    "fitted": "Polaris-Tabs--fitted",
    "titleWithIcon": "Polaris-Tabs--titleWithIcon",
    "List": "Polaris-Tabs__List",
    "Item": "Polaris-Tabs__Item",
    "DisclosureTab": "Polaris-Tabs__DisclosureTab",
    "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
    "DisclosureActivator": "Polaris-Tabs__DisclosureActivator",
    "TabsMeasurer": "Polaris-Tabs__TabsMeasurer",
    "NewTab": "Polaris-Tabs__NewTab",
    "ActionListWrap": "Polaris-Tabs__ActionListWrap",
    "Panel": "Polaris-Tabs__Panel",
    "Panel-hidden": "Polaris-Tabs__Panel--hidden"
};
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/components/DuplicateModal/DuplicateModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DuplicateModal",
    ()=>DuplicateModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Form/Form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FormLayout$2f$FormLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/FormLayout/FormLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const MAX_VIEW_NAME_LENGTH = 40;
function DuplicateModal({ open, isModalLoading, name, onClose, onClickPrimaryAction, onClickSecondaryAction, helpText, viewNames }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(name);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasSameNameError = viewNames?.some((viewName)=>viewName.trim().toLowerCase() === value.trim().toLowerCase());
    const isPrimaryActionDisabled = isModalLoading || hasSameNameError || !value || value.length > MAX_VIEW_NAME_LENGTH;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DuplicateModal.useEffect": ()=>{
            if (!container.current) return;
            if (open) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(container.current);
            }
        }
    }["DuplicateModal.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DuplicateModal.useEffect": ()=>{
            if (open) {
                setValue(name.slice(0, MAX_VIEW_NAME_LENGTH));
            }
        }
    }["DuplicateModal.useEffect"], [
        name,
        open
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DuplicateModal.useCallback[handleChange]": (newValue)=>{
            setValue(newValue);
        }
    }["DuplicateModal.useCallback[handleChange]"], []);
    async function handlePrimaryAction() {
        if (isPrimaryActionDisabled) {
            return;
        }
        await onClickPrimaryAction(value);
        setValue('');
        onClose();
    }
    function handleSecondaryAction() {
        onClickSecondaryAction?.();
        setValue(name);
        onClose();
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: open,
        onClose: onClose,
        title: i18n.translate('Polaris.Tabs.DuplicateModal.title'),
        primaryAction: {
            content: i18n.translate('Polaris.Tabs.DuplicateModal.create'),
            onAction: handlePrimaryAction,
            disabled: isPrimaryActionDisabled
        },
        secondaryActions: [
            {
                content: i18n.translate('Polaris.Tabs.DuplicateModal.cancel'),
                onAction: handleSecondaryAction
            }
        ],
        instant: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].Section, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        onSubmit: handlePrimaryAction
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FormLayout$2f$FormLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLayout"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: container
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
        label: i18n.translate('Polaris.Tabs.DuplicateModal.label'),
        value: value,
        onChange: handleChange,
        autoComplete: "off",
        helpText: helpText,
        maxLength: MAX_VIEW_NAME_LENGTH,
        showCharacterCount: true,
        error: hasSameNameError ? i18n.translate('Polaris.Tabs.DuplicateModal.errors.sameName', {
            name: value
        }) : undefined
    }))))));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/components/RenameModal/RenameModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenameModal",
    ()=>RenameModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Form/Form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FormLayout$2f$FormLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/FormLayout/FormLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function RenameModal({ open, isModalLoading, name, onClose, onClickPrimaryAction, onClickSecondaryAction, helpText, viewNames }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(name);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasSameNameError = viewNames?.filter((viewName)=>viewName !== name).some((viewName)=>viewName.trim().toLowerCase() === value.trim().toLowerCase());
    const isPrimaryActionDisabled = isModalLoading || hasSameNameError || value === name || !value;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenameModal.useEffect": ()=>{
            if (!container.current) return;
            if (open) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(container.current);
            }
        }
    }["RenameModal.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenameModal.useEffect": ()=>{
            if (open) {
                setValue(name);
            }
        }
    }["RenameModal.useEffect"], [
        name,
        open
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RenameModal.useCallback[handleChange]": (newValue)=>{
            setValue(newValue);
        }
    }["RenameModal.useCallback[handleChange]"], []);
    async function handlePrimaryAction() {
        if (isPrimaryActionDisabled) {
            return;
        }
        await onClickPrimaryAction(value);
        setValue('');
        onClose();
    }
    function handleSecondaryAction() {
        onClickSecondaryAction?.();
        setValue(name);
        onClose();
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: open,
        onClose: onClose,
        title: i18n.translate('Polaris.Tabs.RenameModal.title'),
        primaryAction: {
            content: i18n.translate('Polaris.Tabs.RenameModal.create'),
            onAction: handlePrimaryAction,
            disabled: isPrimaryActionDisabled
        },
        secondaryActions: [
            {
                content: i18n.translate('Polaris.Tabs.RenameModal.cancel'),
                onAction: handleSecondaryAction
            }
        ],
        instant: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].Section, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        onSubmit: handlePrimaryAction
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FormLayout$2f$FormLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLayout"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: container
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
        label: i18n.translate('Polaris.Tabs.RenameModal.label'),
        value: value,
        onChange: handleChange,
        autoComplete: "off",
        helpText: helpText,
        maxLength: 40,
        showCharacterCount: true,
        error: hasSameNameError ? i18n.translate('Polaris.Tabs.RenameModal.errors.sameName', {
            name: value
        }) : undefined
    }))))));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/Tab.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tab",
    ()=>Tab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$InfoIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__InfoIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/InfoIcon.svg.mjs [app-client] (ecmascript) <export S as InfoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$DuplicateIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__DuplicateIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/DuplicateIcon.svg.mjs [app-client] (ecmascript) <export S as DuplicateIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$EditIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__EditIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/EditIcon.svg.mjs [app-client] (ecmascript) <export S as EditIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$LayoutColumns3Icon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__LayoutColumns3Icon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/LayoutColumns3Icon.svg.mjs [app-client] (ecmascript) <export S as LayoutColumns3Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$DeleteIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__DeleteIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/DeleteIcon.svg.mjs [app-client] (ecmascript) <export S as DeleteIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-client] (ecmascript) <export S as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$components$2f$DuplicateModal$2f$DuplicateModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/components/DuplicateModal/DuplicateModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$components$2f$RenameModal$2f$RenameModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/components/RenameModal/RenameModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ActionList$2f$ActionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledLink$2f$UnstyledLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js [app-client] (ecmascript)");
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
const Tab = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ content, accessibilityLabel, badge, id, panelID, url, onAction, actions, disabled, isModalLoading, icon, siblingTabHasFocus, measuring, focused, selected, onToggleModal, onTogglePopover, viewNames, tabIndexOverride, disclosureZIndexOverride, onFocus }, ref)=>{
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [popoverActive, setPopoverActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeModalType, setActiveModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wasSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selected);
    const panelFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tab.useEffect": ()=>{
            onTogglePopover(popoverActive);
        }
    }["Tab.useEffect"], [
        popoverActive,
        onTogglePopover
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tab.useEffect": ()=>{
            onToggleModal(Boolean(activeModalType));
        }
    }["Tab.useEffect"], [
        activeModalType,
        onToggleModal
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tab.useEffect": ()=>{
            return ({
                "Tab.useEffect": ()=>{
                    onToggleModal(false);
                    onTogglePopover(false);
                }
            })["Tab.useEffect"];
        }
    }["Tab.useEffect"], [
        onToggleModal,
        onTogglePopover
    ]);
    // A tab can start selected when it is moved from the disclosure dropdown into the main list, so we need to send focus from the tab to the panel on mount and update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tab.useEffect": ()=>{
            if (measuring) {
                return;
            }
            // Because of timing issues with the render, we may still have the old, in-disclosure version of the tab that has focus. Check for this as a second indicator of focus
            const itemHadFocus = focused || document.activeElement && document.activeElement.id === id;
            // If we just check for selected, the panel for the active tab will be focused on page load, which we don’t want
            if (itemHadFocus && selected && panelID != null && !panelFocused.current) {
                focusPanelID(panelID);
                panelFocused.current = true;
            }
            if (selected && !wasSelected.current && panelID != null) {
                focusPanelID(panelID);
            } else if (focused && node.current != null && activeModalType == null && !disabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(node.current);
            }
            wasSelected.current = selected;
        }
    }["Tab.useEffect"], [
        focused,
        id,
        content,
        measuring,
        panelID,
        selected,
        activeModalType,
        disabled
    ]);
    let tabIndex;
    if (selected && !siblingTabHasFocus && !measuring) {
        tabIndex = 0;
    } else if (focused && !measuring) {
        tabIndex = 0;
    } else {
        tabIndex = -1;
    }
    if (tabIndexOverride != null) {
        tabIndex = tabIndexOverride;
    }
    const renameAction = actions?.find((action)=>action.type === 'rename');
    const duplicateAction = actions?.find((action)=>action.type === 'duplicate');
    const deleteAction = actions?.find((action)=>action.type === 'delete');
    const togglePopoverActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tab.useCallback[togglePopoverActive]": ()=>{
            if (!actions?.length) {
                return;
            }
            setPopoverActive({
                "Tab.useCallback[togglePopoverActive]": (popoverActive)=>!popoverActive
            }["Tab.useCallback[togglePopoverActive]"]);
        }
    }["Tab.useCallback[togglePopoverActive]"], [
        actions
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tab.useCallback[handleClick]": ()=>{
            if (disabled) {
                return;
            }
            if (selected) {
                togglePopoverActive();
            } else {
                onAction?.();
            }
        }
    }["Tab.useCallback[handleClick]"], [
        selected,
        onAction,
        togglePopoverActive,
        disabled
    ]);
    const handleModalOpen = (type)=>{
        setActiveModalType(type);
    };
    const handleModalClose = ()=>{
        setActiveModalType(null);
    };
    const handleSaveRenameModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tab.useCallback[handleSaveRenameModal]": async (value)=>{
            await renameAction?.onPrimaryAction?.(value);
            setTimeout({
                "Tab.useCallback[handleSaveRenameModal]": ()=>{
                    if (node.current) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(node.current);
                    }
                }
            }["Tab.useCallback[handleSaveRenameModal]"], 250);
        }
    }["Tab.useCallback[handleSaveRenameModal]"], [
        renameAction
    ]);
    const handleConfirmDeleteView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tab.useCallback[handleConfirmDeleteView]": async ()=>{
            await deleteAction?.onPrimaryAction?.(content);
            handleModalClose();
        }
    }["Tab.useCallback[handleConfirmDeleteView]"], [
        deleteAction,
        content
    ]);
    const handleSaveDuplicateModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tab.useCallback[handleSaveDuplicateModal]": async (duplicateName)=>{
            await duplicateAction?.onPrimaryAction?.(duplicateName);
        }
    }["Tab.useCallback[handleSaveDuplicateModal]"], [
        duplicateAction
    ]);
    const actionContent = {
        rename: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$InfoIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__InfoIcon$3e$__["InfoIcon"],
            content: i18n.translate('Polaris.Tabs.Tab.rename')
        },
        duplicate: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$DuplicateIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__DuplicateIcon$3e$__["DuplicateIcon"],
            content: i18n.translate('Polaris.Tabs.Tab.duplicate')
        },
        edit: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$EditIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__EditIcon$3e$__["EditIcon"],
            content: i18n.translate('Polaris.Tabs.Tab.edit')
        },
        'edit-columns': {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$LayoutColumns3Icon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__LayoutColumns3Icon$3e$__["LayoutColumns3Icon"],
            content: i18n.translate('Polaris.Tabs.Tab.editColumns')
        },
        delete: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$DeleteIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__DeleteIcon$3e$__["DeleteIcon"],
            content: i18n.translate('Polaris.Tabs.Tab.delete'),
            destructive: true
        }
    };
    const formattedActions = actions?.map(({ type, onAction, onPrimaryAction, ...additionalOptions })=>{
        const isModalActivator = !type.includes('edit');
        return {
            ...actionContent[type],
            ...additionalOptions,
            onAction: ()=>{
                onAction?.(content);
                togglePopoverActive();
                if (isModalActivator) {
                    handleModalOpen(type);
                }
            }
        };
    });
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tab.useCallback[handleKeyDown]": (event)=>{
            if (event.key === ' ') {
                event.preventDefault();
                handleClick();
            }
        }
    }["Tab.useCallback[handleKeyDown]"], [
        handleClick
    ]);
    const tabContainerClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TabContainer, selected && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Underline);
    const urlIfNotDisabledOrSelected = disabled || selected ? undefined : url;
    const BaseComponent = urlIfNotDisabledOrSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledLink$2f$UnstyledLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledLink"] : __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"];
    const tabClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tab, icon && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['Tab-iconOnly'], popoverActive && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['Tab-popoverActive'], selected && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['Tab-active'], selected && actions?.length && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['Tab-hasActions']);
    const badgeMarkup = badge ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        tone: selected ? undefined : 'new'
    }, badge) : null;
    const disclosureMarkup = selected && actions?.length ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].IconWrap)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__["ChevronDownIcon"]
    })) : null;
    const activator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BaseComponent, {
        id: id,
        className: tabClassName,
        tabIndex: tabIndex,
        "aria-selected": selected,
        "aria-controls": panelID,
        "aria-label": accessibilityLabel,
        role: tabIndexOverride == null ? 'tab' : undefined,
        disabled: disabled,
        url: urlIfNotDisabledOrSelected,
        onFocus: onFocus,
        onMouseUp: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleMouseUpByBlurring"],
        onClick: handleClick,
        onKeyDown: handleKeyDown
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$InlineStack$2f$InlineStack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineStack"], {
        gap: "200",
        align: "center",
        blockAlign: "center",
        wrap: false
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodySm",
        fontWeight: "medium"
    }, icon ?? content), badgeMarkup), disclosureMarkup);
    const isPlainButton = !selected || !actions?.length;
    const renameModal = renameAction ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$components$2f$RenameModal$2f$RenameModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenameModal"], {
        name: content,
        open: activeModalType === 'rename',
        onClose: handleModalClose,
        onClickPrimaryAction: handleSaveRenameModal,
        isModalLoading: isModalLoading,
        viewNames: viewNames
    }) : null;
    const duplicateModal = duplicateAction ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$components$2f$DuplicateModal$2f$DuplicateModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DuplicateModal"], {
        open: activeModalType === 'duplicate',
        name: i18n.translate('Polaris.Tabs.Tab.copy', {
            name: content
        }),
        onClose: handleModalClose,
        onClickPrimaryAction: handleSaveDuplicateModal,
        isModalLoading: isModalLoading,
        viewNames: viewNames || []
    }) : null;
    const deleteModal = deleteAction ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: activeModalType === 'delete',
        onClose: handleModalClose,
        primaryAction: {
            content: i18n.translate('Polaris.Tabs.Tab.deleteModal.delete'),
            onAction: handleConfirmDeleteView,
            destructive: true,
            disabled: isModalLoading
        },
        secondaryActions: [
            {
                content: i18n.translate('Polaris.Tabs.Tab.deleteModal.cancel'),
                onAction: handleModalClose
            }
        ],
        title: i18n.translate('Polaris.Tabs.Tab.deleteModal.title'),
        instant: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].Section, null, i18n.translate('Polaris.Tabs.Tab.deleteModal.description', {
        viewName: content
    }))) : null;
    const markup = isPlainButton || disabled ? activator : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Popover"], {
        active: popoverActive,
        activator: activator,
        autofocusTarget: "first-node",
        onClose: togglePopoverActive,
        zIndexOverride: disclosureZIndexOverride
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ActionListWrap
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$ActionList$2f$ActionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionList"], {
        actionRole: "menuitem",
        items: formattedActions
    }))), renameModal, duplicateModal, deleteModal);
    if (icon) {
        return markup;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        className: tabContainerClassNames,
        ref: mergeRefs([
            node,
            ref
        ]),
        role: "presentation"
    }, markup);
});
Tab.displayName = 'Tab';
function focusPanelID(panelID) {
    const panel = document.getElementById(panelID);
    if (panel) {
        panel.focus({
            preventScroll: true
        });
    }
}
function mergeRefs(refs) {
    return (node)=>{
        for (const ref of refs){
            if (ref != null) {
                ref.current = node;
            }
        }
    };
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Panel/Panel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Panel",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)");
;
;
;
function Panel({ hidden, id, tabID, children }) {
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Panel, hidden && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['Panel-hidden']);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className,
        id: id,
        role: "tabpanel",
        "aria-labelledby": tabID,
        tabIndex: -1
    }, children);
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Item/Item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledLink$2f$UnstyledLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js [app-client] (ecmascript)");
;
;
;
;
const Item = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function Item({ id, focused, children, url, accessibilityLabel, onClick = noop }) {
    const focusedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Item.Item.useEffect": ()=>{
            const focusTarget = focusedNode.current;
            if (focusTarget && focusTarget instanceof HTMLElement && focused) {
                requestAnimationFrame({
                    "Item.Item.useEffect": ()=>{
                        focusTarget.focus();
                    }
                }["Item.Item.useEffect"]);
            }
        }
    }["Item.Item.useEffect"], [
        focusedNode,
        focused
    ]);
    const classname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item);
    const sharedProps = {
        id,
        ref: focusedNode,
        onClick,
        className: classname,
        'aria-selected': false,
        'aria-label': accessibilityLabel
    };
    const markup = url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledLink$2f$UnstyledLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledLink"], Object.assign({}, sharedProps, {
        url: url
    }), children) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", Object.assign({}, sharedProps, {
        ref: focusedNode,
        type: "button"
    }), children);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", null, markup);
});
function noop() {}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/List/List.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>List
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Item$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Item/Item.js [app-client] (ecmascript)");
;
;
;
function List({ focusIndex, disclosureTabs, onClick = noop, onKeyPress = noop }) {
    const tabs = disclosureTabs.map(({ id, content, ...tabProps }, index)=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Item$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], Object.assign({
            key: id
        }, tabProps, {
            id: id,
            focused: index === focusIndex,
            onClick: onClick.bind(null, id)
        }), content);
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].List,
        onKeyDown: handleKeyDown,
        onKeyUp: onKeyPress
    }, tabs);
}
function noop() {}
function handleKeyDown(event) {
    const { key } = event;
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
    }
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/CreateViewModal/CreateViewModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateViewModal",
    ()=>CreateViewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$touch$2d$device$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-is-touch-device.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Form/Form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FormLayout$2f$FormLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/FormLayout/FormLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const MAX_VIEW_NAME_LENGTH = 40;
function CreateViewModal({ activator, open, onClose, onClickPrimaryAction, onClickSecondaryAction, viewNames }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTouchDevice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$is$2d$touch$2d$device$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTouchDevice"])();
    const hasSameNameError = viewNames.some((viewName)=>viewName.trim().toLowerCase() === value.trim().toLowerCase());
    const isPrimaryActionDisabled = !value || hasSameNameError || loading || value.length > MAX_VIEW_NAME_LENGTH;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateViewModal.useEffect": ()=>{
            if (!container.current || isTouchDevice) return;
            if (open) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(container.current);
                const timeout = setTimeout({
                    "CreateViewModal.useEffect.timeout": ()=>{
                        if (!container.current) return;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFirstFocusableNode"])(container.current);
                    }
                }["CreateViewModal.useEffect.timeout"], 50);
                return ({
                    "CreateViewModal.useEffect": ()=>clearTimeout(timeout)
                })["CreateViewModal.useEffect"];
            }
        }
    }["CreateViewModal.useEffect"], [
        open,
        isTouchDevice
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateViewModal.useCallback[handleChange]": (newValue)=>{
            setValue(newValue);
        }
    }["CreateViewModal.useCallback[handleChange]"], []);
    async function handlePrimaryAction() {
        if (hasSameNameError || isPrimaryActionDisabled) {
            return;
        }
        setLoading(true);
        await onClickPrimaryAction(value);
        setLoading(false);
        setValue('');
        onClose();
    }
    function handleSecondaryAction() {
        onClickSecondaryAction?.();
        setValue('');
        onClose();
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        activator: activator,
        open: open,
        onClose: onClose,
        title: i18n.translate('Polaris.Tabs.CreateViewModal.title'),
        primaryAction: {
            content: i18n.translate('Polaris.Tabs.CreateViewModal.create'),
            onAction: handlePrimaryAction,
            disabled: isPrimaryActionDisabled
        },
        secondaryActions: [
            {
                content: i18n.translate('Polaris.Tabs.CreateViewModal.cancel'),
                onAction: handleSecondaryAction
            }
        ]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].Section, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        onSubmit: handlePrimaryAction
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$FormLayout$2f$FormLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLayout"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: container
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
        label: i18n.translate('Polaris.Tabs.CreateViewModal.label'),
        value: value,
        onChange: handleChange,
        autoComplete: "off",
        maxLength: MAX_VIEW_NAME_LENGTH,
        showCharacterCount: true,
        error: hasSameNameError ? i18n.translate('Polaris.Tabs.CreateViewModal.errors.sameName', {
            name: value
        }) : undefined
    }))))));
}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/TabMeasurer/TabMeasurer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabMeasurer",
    ()=>TabMeasurer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$component$2d$did$2d$mount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/Tab.js [app-client] (ecmascript)");
;
;
;
;
;
;
const TabMeasurer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function TabMeasurer({ selected, tabs, activator, tabToFocus, siblingTabHasFocus, handleMeasurement: handleMeasurementProp }) {
    const containerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMeasurement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabMeasurer.TabMeasurer.useCallback[handleMeasurement]": ()=>{
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
            animationFrame.current = requestAnimationFrame({
                "TabMeasurer.TabMeasurer.useCallback[handleMeasurement]": ()=>{
                    if (!containerNode.current) {
                        return;
                    }
                    const containerWidth = containerNode.current.offsetWidth - 20 - 28;
                    const hiddenTabNodes = containerNode.current.children;
                    const hiddenTabNodesArray = Array.from(hiddenTabNodes);
                    const hiddenTabWidths = hiddenTabNodesArray.map({
                        "TabMeasurer.TabMeasurer.useCallback[handleMeasurement].hiddenTabWidths": (node)=>{
                            const buttonWidth = Math.ceil(node.getBoundingClientRect().width);
                            return buttonWidth + 4;
                        }
                    }["TabMeasurer.TabMeasurer.useCallback[handleMeasurement].hiddenTabWidths"]);
                    const disclosureWidth = hiddenTabWidths.pop() || 0;
                    handleMeasurementProp({
                        containerWidth,
                        disclosureWidth,
                        hiddenTabWidths
                    });
                }
            }["TabMeasurer.TabMeasurer.useCallback[handleMeasurement]"]);
        }
    }["TabMeasurer.TabMeasurer.useCallback[handleMeasurement]"], [
        handleMeasurementProp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabMeasurer.TabMeasurer.useEffect": ()=>{
            handleMeasurement();
        }
    }["TabMeasurer.TabMeasurer.useEffect"], [
        handleMeasurement,
        tabs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$component$2d$did$2d$mount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentDidMount"])({
        "TabMeasurer.TabMeasurer.useComponentDidMount": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setTimeout(handleMeasurement, 0);
            }
        }
    }["TabMeasurer.TabMeasurer.useComponentDidMount"]);
    const tabsMarkup = tabs.map((tab, index)=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], {
            measuring: true,
            key: `$${tab.id}Hidden`,
            id: `${tab.id}Measurer`,
            siblingTabHasFocus: siblingTabHasFocus,
            focused: index === tabToFocus,
            selected: index === selected,
            url: tab.url,
            content: tab.content,
            onTogglePopover: noop,
            onToggleModal: noop
        });
    });
    const classname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tabs, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TabsMeasurer);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventListener"])('resize', handleMeasurement);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: classname,
        ref: containerNode
    }, tabsMarkup, activator);
});
function noop() {}
;
}),
"[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs [app-client] (ecmascript) <export S as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PlusIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris-icons/dist/icons/PlusIcon.svg.mjs [app-client] (ecmascript) <export S as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$previous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/use-previous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/utilities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/Tab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Panel$2f$Panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/Panel/Panel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/List/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$CreateViewModal$2f$CreateViewModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/CreateViewModal/CreateViewModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$TabMeasurer$2f$TabMeasurer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tabs/components/TabMeasurer/TabMeasurer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Text/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shopify_counter_app/client/node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js [app-client] (ecmascript)");
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
;
;
const CREATE_NEW_VIEW_ID = 'create-new-view';
const Tabs = ({ tabs, children, selected, newViewAccessibilityLabel, canCreateNewView, disabled, onCreateNewView, onSelect, fitted, disclosureText, disclosureZIndexOverride })=>{
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$i18n$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const { mdDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreakpoints"])();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "Tabs.useReducer": (data, partialData)=>{
            return {
                ...data,
                ...partialData
            };
        }
    }["Tabs.useReducer"], {
        disclosureWidth: 0,
        containerWidth: Infinity,
        tabWidths: [],
        visibleTabs: [],
        hiddenTabs: [],
        showDisclosure: false,
        tabToFocus: -1,
        isNewViewModalActive: false,
        modalSubmitted: false,
        isTabsFocused: false,
        isTabPopoverOpen: false,
        isTabModalOpen: false
    });
    const { tabToFocus, visibleTabs, hiddenTabs, showDisclosure, isNewViewModalActive, modalSubmitted, disclosureWidth, tabWidths, containerWidth, isTabsFocused, isTabModalOpen, isTabPopoverOpen } = state;
    const prevModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$previous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(isTabModalOpen);
    const prevPopoverOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$use$2d$previous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(isTabPopoverOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            const hasModalClosed = prevModalOpen && !isTabModalOpen;
            const hasPopoverClosed = prevPopoverOpen && !isTabPopoverOpen;
            if (hasModalClosed) {
                setState({
                    isTabsFocused: true,
                    tabToFocus: selected
                });
            } else if (hasPopoverClosed && !isTabModalOpen) {
                setState({
                    isTabsFocused: true,
                    tabToFocus: selected
                });
            }
        }
    }["Tabs.useEffect"], [
        prevPopoverOpen,
        isTabPopoverOpen,
        prevModalOpen,
        isTabModalOpen,
        selected,
        tabToFocus
    ]);
    const handleTogglePopover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[handleTogglePopover]": (isOpen)=>setState({
                isTabPopoverOpen: isOpen
            })
    }["Tabs.useCallback[handleTogglePopover]"], []);
    const handleToggleModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[handleToggleModal]": (isOpen)=>setState({
                isTabModalOpen: isOpen
            })
    }["Tabs.useCallback[handleToggleModal]"], []);
    const handleCloseNewViewModal = ()=>{
        setState({
            isNewViewModalActive: false
        });
    };
    const handleSaveNewViewModal = async (value)=>{
        if (!onCreateNewView) {
            return false;
        }
        const hasExecuted = await onCreateNewView?.(value);
        if (hasExecuted) {
            setState({
                modalSubmitted: true
            });
        }
        return hasExecuted;
    };
    const handleClickNewTab = ()=>{
        setState({
            isNewViewModalActive: true
        });
    };
    const handleTabClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[handleTabClick]": (id)=>{
            const tab = tabs.find({
                "Tabs.useCallback[handleTabClick].tab": (aTab)=>aTab.id === id
            }["Tabs.useCallback[handleTabClick].tab"]);
            if (tab == null) {
                return null;
            }
            const selectedIndex = tabs.indexOf(tab);
            onSelect?.(selectedIndex);
        }
    }["Tabs.useCallback[handleTabClick]"], [
        tabs,
        onSelect
    ]);
    const renderTabMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[renderTabMarkup]": (tab, index)=>{
            const handleClick = {
                "Tabs.useCallback[renderTabMarkup].handleClick": ()=>{
                    handleTabClick(tab.id);
                    tab.onAction?.();
                }
            }["Tabs.useCallback[renderTabMarkup].handleClick"];
            const viewNames = tabs.map({
                "Tabs.useCallback[renderTabMarkup].viewNames": ({ content })=>content
            }["Tabs.useCallback[renderTabMarkup].viewNames"]);
            const tabPanelID = tab.panelID || `${tab.id}-panel`;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], Object.assign({}, tab, {
                key: `${index}-${tab.id}`,
                id: tab.id,
                panelID: children ? tabPanelID : undefined,
                disabled: disabled || tab.disabled,
                siblingTabHasFocus: tabToFocus > -1,
                focused: index === tabToFocus,
                selected: index === selected,
                onAction: handleClick,
                accessibilityLabel: tab.accessibilityLabel,
                url: tab.url,
                content: tab.content,
                onToggleModal: handleToggleModal,
                onTogglePopover: handleTogglePopover,
                viewNames: viewNames,
                disclosureZIndexOverride: disclosureZIndexOverride,
                ref: index === selected ? selectedTabRef : null
            }));
        }
    }["Tabs.useCallback[renderTabMarkup]"], [
        disabled,
        tabs,
        children,
        selected,
        tabToFocus,
        disclosureZIndexOverride,
        handleTabClick,
        handleToggleModal,
        handleTogglePopover
    ]);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[handleFocus]": (event)=>{
            const target = event.target;
            const isItem = target.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item);
            const isInNaturalDOMOrder = target.closest(`[data-tabs-focus-catchment]`) || isItem;
            const isDisclosureActivator = target.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DisclosureActivator);
            if (isDisclosureActivator || !isInNaturalDOMOrder) {
                return;
            }
            setState({
                isTabsFocused: true
            });
        }
    }["Tabs.useCallback[handleFocus]"], []);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[handleBlur]": (event)=>{
            const target = event.target;
            const relatedTarget = event.relatedTarget;
            const isInNaturalDOMOrder = relatedTarget?.closest?.(`.${__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tabs}`);
            const targetIsATab = target?.classList?.contains?.(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tab);
            const focusReceiverIsAnItem = relatedTarget?.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item);
            if (!relatedTarget && !isTabModalOpen && !targetIsATab && !focusReceiverIsAnItem) {
                setState({
                    tabToFocus: -1
                });
                return;
            }
            if (!isInNaturalDOMOrder && !isTabModalOpen && !targetIsATab && !focusReceiverIsAnItem) {
                setState({
                    tabToFocus: -1
                });
                return;
            }
            setState({
                isTabsFocused: false
            });
        }
    }["Tabs.useCallback[handleBlur]"], [
        isTabModalOpen
    ]);
    const handleKeyDown = (event)=>{
        if (isTabPopoverOpen || isTabModalOpen || isNewViewModalActive) {
            return;
        }
        const { key } = event;
        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            const { visibleTabs, hiddenTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleAndHiddenTabIndices"])(tabs, selected, disclosureWidth, tabWidths, containerWidth);
            setState({
                visibleTabs,
                hiddenTabs
            });
        }
    }["Tabs.useEffect"], [
        containerWidth,
        disclosureWidth,
        tabs,
        selected,
        tabWidths,
        setState
    ]);
    const moveToSelectedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[moveToSelectedTab]": ()=>{
            const activeButton = selectedTabRef.current?.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['Tab-active']}`);
            if (activeButton) {
                moveToActiveTab(activeButton.offsetLeft);
            }
        }
    }["Tabs.useCallback[moveToSelectedTab]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            if (mdDown) {
                moveToSelectedTab();
            }
        }
    }["Tabs.useEffect"], [
        moveToSelectedTab,
        selected,
        mdDown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            if (isTabsFocused && !showDisclosure) {
                const tabToFocus = selected;
                setState({
                    tabToFocus
                });
            }
        }
    }["Tabs.useEffect"], [
        isTabsFocused,
        selected,
        setState,
        showDisclosure
    ]);
    const handleKeyPress = (event)=>{
        const { showDisclosure, visibleTabs, hiddenTabs, tabToFocus, isNewViewModalActive } = state;
        if (isTabModalOpen || isTabPopoverOpen || isNewViewModalActive) {
            return;
        }
        const key = event.key;
        const tabsArrayInOrder = showDisclosure || mdDown ? visibleTabs.concat(hiddenTabs) : [
            ...visibleTabs
        ];
        let newFocus = tabsArrayInOrder.indexOf(tabToFocus);
        if (key === 'ArrowRight') {
            newFocus += 1;
            if (newFocus === tabsArrayInOrder.length) {
                newFocus = 0;
            }
        }
        if (key === 'ArrowLeft') {
            if (newFocus === -1 || newFocus === 0) {
                newFocus = tabsArrayInOrder.length - 1;
            } else {
                newFocus -= 1;
            }
        }
        const buttonToFocus = tabsArrayInOrder[newFocus];
        if (buttonToFocus != null) {
            setState({
                tabToFocus: buttonToFocus
            });
        }
    };
    const handleDisclosureActivatorClick = ()=>{
        setState({
            showDisclosure: !showDisclosure,
            tabToFocus: hiddenTabs[0]
        });
    };
    const handleClose = ()=>{
        setState({
            showDisclosure: false
        });
    };
    const handleMeasurement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tabs.useCallback[handleMeasurement]": (measurements)=>{
            const { hiddenTabWidths: tabWidths, containerWidth, disclosureWidth } = measurements;
            const { visibleTabs, hiddenTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$utilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleAndHiddenTabIndices"])(tabs, selected, disclosureWidth, tabWidths, containerWidth);
            setState({
                visibleTabs,
                hiddenTabs,
                disclosureWidth,
                containerWidth,
                tabWidths
            });
        }
    }["Tabs.useCallback[handleMeasurement]"], [
        tabs,
        selected,
        setState
    ]);
    const handleListTabClick = (id)=>{
        handleTabClick(id);
        handleClose();
        setState({
            isTabsFocused: true
        });
    };
    const moveToActiveTab = (offsetLeft)=>{
        setTimeout(()=>{
            if (scrollRef.current && typeof scrollRef.current.scroll === 'function') {
                const scrollRefOffset = wrapRef?.current?.offsetLeft || 0;
                scrollRef?.current?.scroll({
                    left: offsetLeft - scrollRefOffset
                });
            }
        }, 0);
    };
    const createViewA11yLabel = newViewAccessibilityLabel || i18n.translate('Polaris.Tabs.newViewAccessibilityLabel');
    const tabsToShow = mdDown ? [
        ...visibleTabs,
        ...hiddenTabs
    ] : visibleTabs;
    const tabsMarkup = tabsToShow.sort((tabA, tabB)=>tabA - tabB).filter((tabIndex)=>tabs[tabIndex]).map((tabIndex)=>renderTabMarkup(tabs[tabIndex], tabIndex));
    const disclosureActivatorVisible = visibleTabs.length < tabs.length && !mdDown;
    const classname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tabs, fitted && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fitted, disclosureActivatorVisible && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fillSpace);
    const wrapperClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Wrapper, canCreateNewView && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].WrapperWithNewButton);
    const disclosureTabClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DisclosureTab, disclosureActivatorVisible && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['DisclosureTab-visible']);
    const disclosureButtonClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DisclosureActivator);
    const disclosureButtonContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        variant: "bodySm",
        fontWeight: "medium"
    }, disclosureText ?? i18n.translate('Polaris.Tabs.toggleTabsLabel')), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$utilities$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].IconWrap, disclosureActivatorVisible && showDisclosure && __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['IconWrap-open'])
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
        source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChevronDownIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__ChevronDownIcon$3e$__["ChevronDownIcon"],
        tone: "subdued"
    })));
    const disclosureButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        type: "button",
        className: disclosureButtonClassName,
        onClick: handleDisclosureActivatorClick,
        "aria-label": disclosureText ?? i18n.translate('Polaris.Tabs.toggleTabsLabel'),
        disabled: disabled
    }, disclosureButtonContent);
    const activator = disclosureButton;
    const disclosureTabs = hiddenTabs.map((tabIndex)=>tabs[tabIndex]);
    const viewNames = tabs.map(({ content })=>content);
    const tabMeasurer = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$TabMeasurer$2f$TabMeasurer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabMeasurer"], {
        tabToFocus: tabToFocus,
        activator: activator,
        selected: selected,
        tabs: tabs,
        siblingTabHasFocus: tabToFocus > -1,
        handleMeasurement: handleMeasurement
    });
    const newTab = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], {
        id: CREATE_NEW_VIEW_ID,
        content: createViewA11yLabel,
        actions: [],
        onAction: handleClickNewTab,
        onFocus: ()=>{
            if (modalSubmitted) {
                setState({
                    tabToFocus: selected,
                    modalSubmitted: false
                });
            }
        },
        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            source: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PlusIcon$2e$svg$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__PlusIcon$3e$__["PlusIcon"],
            accessibilityLabel: createViewA11yLabel
        }),
        disabled: disabled,
        onTogglePopover: handleTogglePopover,
        onToggleModal: handleToggleModal,
        tabIndexOverride: 0
    });
    const panelMarkup = children ? tabs.map((_tab, index)=>{
        return selected === index ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Panel$2f$Panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
            id: tabs[index].panelID || `${tabs[index].id}-panel`,
            tabID: tabs[index].id,
            key: tabs[index].id
        }, children) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$Panel$2f$Panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
            id: tabs[index].panelID || `${tabs[index].id}-panel`,
            tabID: tabs[index].id,
            key: tabs[index].id,
            hidden: true
        });
    }) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Outer
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        padding: {
            md: '200'
        }
    }, tabMeasurer, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: wrapperClassNames,
        ref: scrollRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ButtonWrapper,
        ref: wrapRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
        role: tabsMarkup.length > 0 ? 'tablist' : undefined,
        className: classname,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyPress,
        "data-tabs-focus-catchment": true
    }, tabsMarkup, mdDown || tabsToShow.length === 0 ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        className: disclosureTabClassName,
        role: "presentation"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Popover"], {
        preferredPosition: "below",
        preferredAlignment: "left",
        activator: activator,
        active: disclosureActivatorVisible && showDisclosure,
        onClose: handleClose,
        autofocusTarget: "first-node",
        zIndexOverride: disclosureZIndexOverride
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        focusIndex: hiddenTabs.indexOf(tabToFocus),
        disclosureTabs: disclosureTabs,
        onClick: handleListTabClick,
        onKeyPress: handleKeyPress
    })))), canCreateNewView && tabsToShow.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NewTab
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tabs$2f$components$2f$CreateViewModal$2f$CreateViewModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateViewModal"], {
        open: isNewViewModalActive,
        onClose: handleCloseNewViewModal,
        onClickPrimaryAction: handleSaveNewViewModal,
        viewNames: viewNames,
        activator: disabled ? newTab : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$shopify_counter_app$2f$client$2f$node_modules$2f40$shopify$2f$polaris$2f$build$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            content: i18n.translate('Polaris.Tabs.newViewTooltip'),
            preferredPosition: "above",
            hoverDelay: 400,
            zIndexOverride: disclosureZIndexOverride
        }, newTab))
    })) : null))), panelMarkup);
};
;
}),
]);

//# sourceMappingURL=bb515_%40shopify_polaris_build_esm_components_Tabs_8dc30884._.js.map