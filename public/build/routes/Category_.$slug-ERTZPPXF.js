import {
  Pagination
} from "/build/_shared/chunk-H3N5C4G2.js";
import {
  ProductCard_default
} from "/build/_shared/chunk-46O43VVW.js";
import "/build/_shared/chunk-54BWG4XQ.js";
import {
  Header_default
} from "/build/_shared/chunk-5B5VK4KW.js";
import "/build/_shared/chunk-VVZK5JFR.js";
import {
  useLoaderData
} from "/build/_shared/chunk-2A6JWUTX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-PZLREGOM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/Category_.$slug.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/Category_.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/Category_.$slug.tsx"
  );
  import.meta.hot.lastModified = "1749015271197.9424";
}
function Categories() {
  _s();
  const loaderData = useLoaderData();
  const products = loaderData?.data?.products;
  console.log(products);
  const productPerPage = 8;
  const [currentPage, setCurrentpage] = (0, import_react2.useState)(1);
  const handlePageClick = (page) => {
    if (navigator.onLine) {
      setCurrentpage(page);
    } else {
      alert("Check Your Internet Connection");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, {}, void 0, false, {
      fileName: "app/routes/Category_.$slug.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-10 mb-4 gap-4 sm:flex-row justify-center   flex-wrap", children: products.slice((currentPage - 1) * productPerPage, currentPage * productPerPage).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard_default, { item }, item.id, false, {
        fileName: "app/routes/Category_.$slug.tsx",
        lineNumber: 58,
        columnNumber: 119
      }, this)) }, void 0, false, {
        fileName: "app/routes/Category_.$slug.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/Category_.$slug.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { limit: productPerPage, offset: currentPage, totalItems: products.length, onPageChange: handlePageClick, primaryColor: "bg-indigo-400", textColor: "text-white", totalToShow: 5 }, void 0, false, {
        fileName: "app/routes/Category_.$slug.tsx",
        lineNumber: 65,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Category_.$slug.tsx",
      lineNumber: 54,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-10 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-center text-red-500", children: "No product found" }, void 0, false, {
      fileName: "app/routes/Category_.$slug.tsx",
      lineNumber: 67,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/Category_.$slug.tsx",
      lineNumber: 66,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Category_.$slug.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Categories, "lpG6NQpLN25iyaK6K4lk/dHXI0Y=", false, function() {
  return [useLoaderData];
});
_c = Categories;
var Category_slug_default = Categories;
var _c;
$RefreshReg$(_c, "Categories");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Category_slug_default as default
};
//# sourceMappingURL=/build/routes/Category_.$slug-ERTZPPXF.js.map
