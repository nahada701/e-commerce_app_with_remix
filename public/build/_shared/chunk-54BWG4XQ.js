import {
  createHotContext
} from "/build/_shared/chunk-PZLREGOM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/component/Icons/ShoppingBag.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/Icons/ShoppingBag.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/Icons/ShoppingBag.tsx"
  );
  import.meta.hot.lastModified = "1748956002419.272";
}
var ShoppingBag = import_react.default.memo(_c = function ShoppingBag2({
  width,
  height,
  fill
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, fill, className: "bi bi-bag", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" }, void 0, false, {
    fileName: "app/component/Icons/ShoppingBag.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/component/Icons/ShoppingBag.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c2 = ShoppingBag;
var ShoppingBag_default = ShoppingBag;
var _c;
var _c2;
$RefreshReg$(_c, "ShoppingBag$React.memo");
$RefreshReg$(_c2, "ShoppingBag");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ShoppingBag_default
};
//# sourceMappingURL=/build/_shared/chunk-54BWG4XQ.js.map
