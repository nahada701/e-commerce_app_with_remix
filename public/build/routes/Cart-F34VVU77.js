import {
  Header_default
} from "/build/_shared/chunk-QCN65HSX.js";
import "/build/_shared/chunk-EVJGN6FM.js";
import {
  useCart
} from "/build/_shared/chunk-O2SSUEUN.js";
import "/build/_shared/chunk-NTD7GPJS.js";
import {
  createHotContext
} from "/build/_shared/chunk-PZLREGOM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/Cart.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/Cart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/Cart.tsx"
  );
  import.meta.hot.lastModified = "1749012790829.1614";
}
function Cart() {
  _s();
  const {
    state,
    dispatch
  } = useCart();
  const handleDecrement = (id) => {
    const product = state.items.find((item) => item.id == id);
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
  const products = state.items;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, {}, void 0, false, {
      fileName: "app/routes/Cart.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    state.items.some((item) => item?.quantity && item?.quantity > 0) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "my-2 text-4xl text-center ", children: "Cart" }, void 0, false, {
        fileName: "app/routes/Cart.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 overflow-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "table-auto  w-full border-collapse border border-gray-300 shadow-md rounded-lg  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-200 text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: " px-4 py-2 text-left", children: "No" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: " px-4 py-2 text-left", children: "Title" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: " px-4 py-2 text-left", children: "Image" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: " px-4 py-2 text-left", children: "Quantity" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: " px-4 py-2 text-left", children: "Price" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: " px-4 py-2 text-left", children: "Total" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Cart.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/Cart.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: products.map((item, i) => item.quantity !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: i % 2 === 0 ? "bg-white" : "bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " px-4 py-2", children: i + 1 }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " px-4 py-2", children: item.title }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.thumbnail, alt: item.title, className: "w-12 h-12 object-cover rounded" }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " px-4 py-2", children: state.items.find((pro) => pro.id == item.id && pro.quantity !== 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-indigo-300 rounded p-2 w-[100px]  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-[30px]", onClick: () => handleDecrement(item.id), children: "-" }, void 0, false, {
              fileName: "app/routes/Cart.tsx",
              lineNumber: 80,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-[30px] text-center text-indigo-400", value: state.items.find((pro) => pro.id === item.id)?.quantity ?? 0, readOnly: true }, void 0, false, {
              fileName: "app/routes/Cart.tsx",
              lineNumber: 81,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-[30px]", onClick: () => handleIncrement(item.id), children: "+" }, void 0, false, {
              fileName: "app/routes/Cart.tsx",
              lineNumber: 82,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 79,
            columnNumber: 86
          }, this) }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " px-4 py-2", children: item.price }, void 0, false, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          item.quantity && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " px-4 py-2", children: [
            "\u20B9",
            Math.floor(item.price * item?.quantity)
          ] }, void 0, true, {
            fileName: "app/routes/Cart.tsx",
            lineNumber: 87,
            columnNumber: 33
          }, this)
        ] }, i, true, {
          fileName: "app/routes/Cart.tsx",
          lineNumber: 72,
          columnNumber: 61
        }, this)) }, void 0, false, {
          fileName: "app/routes/Cart.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Cart.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/Cart.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Cart.tsx",
      lineNumber: 56,
      columnNumber: 75
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-indigo-400 text-4xl ", children: "Cart is empty" }, void 0, false, {
      fileName: "app/routes/Cart.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/Cart.tsx",
      lineNumber: 94,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Cart.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Cart, "D4aysCl38QGOEkZLILdqXhCCQDY=", false, function() {
  return [useCart];
});
_c = Cart;
var Cart_default = Cart;
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart_default as default
};
//# sourceMappingURL=/build/routes/Cart-F34VVU77.js.map
