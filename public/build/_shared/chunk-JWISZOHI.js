import {
  ShoppingBag_default
} from "/build/_shared/chunk-EVJGN6FM.js";
import {
  useCart
} from "/build/_shared/chunk-O2SSUEUN.js";
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

// app/component/ProductCard.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1749016090913.2517";
}
function ProductCard({
  item
}) {
  _s();
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const {
    dispatch,
    state
  } = useCart();
  const handleAddToCart = (item2) => {
    dispatch({
      type: "ADD_TO_CART",
      product: item2
    });
  };
  const handleDecrement = (id) => {
    const product = state.items.find((item2) => item2.id == id);
    if (product?.quantity == 1) {
      dispatch({
        type: "REMOVE_FROM_CART",
        id
      });
    } else {
      dispatch({
        type: "DECREMENT",
        id
      });
    }
  };
  const handleIncrement = (id) => {
    dispatch({
      type: "INCREMENT",
      id
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded w-[200px]  sm:w-[300px] flex flex-col justify-between ", children: [
    isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-[300px]  flex items-center justify-center bg-indigo-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute animate-spin w-10  h-10  border-4 border-indigo-400 border-t-transparent rounded-full", children: " " }, void 0, false, {
      fileName: "app/component/ProductCard.tsx",
      lineNumber: 62,
      columnNumber: 12
    }, this) }, void 0, false, {
      fileName: "app/component/ProductCard.tsx",
      lineNumber: 61,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-full", src: item.thumbnail, alt: "", onLoad: () => setIsLoading(false) }, void 0, false, {
      fileName: "app/component/ProductCard.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between   h-[100px] items-center px-4 bg-indigo-200 py-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", children: item.title }, void 0, false, {
        fileName: "app/component/ProductCard.tsx",
        lineNumber: 66,
        columnNumber: 10
      }, this),
      state.items.find((pro) => pro.id == item.id && pro.quantity !== 0) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-indigo-300 rounded p-2  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-[30px]", onClick: () => handleDecrement(item.id), children: "-" }, void 0, false, {
          fileName: "app/component/ProductCard.tsx",
          lineNumber: 69,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-[30px] text-center text-indigo-400", value: state.items.find((pro) => pro.id === item.id)?.quantity ?? 0, readOnly: true }, void 0, false, {
          fileName: "app/component/ProductCard.tsx",
          lineNumber: 70,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-[30px]", onClick: () => handleIncrement(item.id), children: "+" }, void 0, false, {
          fileName: "app/component/ProductCard.tsx",
          lineNumber: 71,
          columnNumber: 3
        }, this)
      ] }, void 0, true, {
        fileName: "app/component/ProductCard.tsx",
        lineNumber: 68,
        columnNumber: 79
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-indigo-300 rounded p-2", onClick: () => handleAddToCart(item), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag_default, { width: "16", height: "16", fill: "white" }, void 0, false, {
        fileName: "app/component/ProductCard.tsx",
        lineNumber: 73,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/component/ProductCard.tsx",
        lineNumber: 72,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/ProductCard.tsx",
      lineNumber: 65,
      columnNumber: 10
    }, this)
  ] }, item.id, true, {
    fileName: "app/component/ProductCard.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(ProductCard, "HeYj3xZJZl8MB46xSCF41sZ7DXg=", false, function() {
  return [useCart];
});
_c = ProductCard;
var ProductCard_default = ProductCard;
var _c;
$RefreshReg$(_c, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProductCard_default
};
//# sourceMappingURL=/build/_shared/chunk-JWISZOHI.js.map
