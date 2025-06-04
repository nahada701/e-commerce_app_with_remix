import {
  ShoppingBag_default
} from "/build/_shared/chunk-EVJGN6FM.js";
import {
  useCart
} from "/build/_shared/chunk-O2SSUEUN.js";
import {
  Link,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-NTD7GPJS.js";
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

// app/component/Header.tsx
var import_react3 = __toESM(require_react(), 1);

// app/component/Icons/CrossIcon.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/Icons/CrossIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/Icons/CrossIcon.tsx"
  );
  import.meta.hot.lastModified = "1748955382479.6194";
}
var CrossIcon = import_react.default.memo(_c = function CrossIcon2({
  width,
  height,
  fill
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, fill, className: "bi bi-x", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" }, void 0, false, {
    fileName: "app/component/Icons/CrossIcon.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/component/Icons/CrossIcon.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/component/Icons/CrossIcon.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c2 = CrossIcon;
var CrossIcon_default = CrossIcon;
var _c;
var _c2;
$RefreshReg$(_c, "CrossIcon$React.memo");
$RefreshReg$(_c2, "CrossIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/component/Header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/Header.tsx"
  );
  import.meta.hot.lastModified = "1749041127655.8293";
}
function Header({
  setSearchKey,
  currentPage
}) {
  _s();
  const navigate = useNavigate();
  const [search, setSearch] = (0, import_react3.useState)("");
  const {
    state
  } = useCart();
  const location = useLocation();
  const insideCartPage = location.pathname === "/cart";
  const insideCategoryPage = location.pathname.includes("category");
  const [categories, setCategories] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories") || "[]");
    setCategories(storedCategories);
  }, []);
  const handleSearch = (e) => {
    setSearchKey(e.target.value);
    setSearch(e.target.value);
  };
  const clearSearch = () => {
    setSearchKey("");
    setSearch("");
  };
  (0, import_react3.useEffect)(() => {
    setSearch("");
  }, [currentPage]);
  const handleCategorySearch = (slug) => {
    sessionStorage.setItem("selectedCategory", slug);
    navigate(`/category/${slug}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-5 px-10 bg-primary_purple flex justify-between items-start    items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "md:text-3xl sm:text-xl text-[14px]   text-white", children: "E comm " }, void 0, false, {
      fileName: "app/component/Header.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    !insideCartPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("select", { className: "rounded py-2 hidden sm:block text-gray-400 text-[14px]", id: "", onChange: (e) => handleCategorySearch(e.target.value), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: "", hidden: true, children: "Select Categotry" }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      categories?.map((cate) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: cate.slug, children: cate.name }, cate.name, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 64,
        columnNumber: 43
      }, this))
    ] }, void 0, true, {
      fileName: "app/component/Header.tsx",
      lineNumber: 62,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " gap-2 hidden sm:flex  ", children: !insideCartPage && !insideCategoryPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " flex justify-between bg-white border rounded pr-3 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: search, type: "text", className: "py-2 outline-0 bg-none placeholder-xs rounded w-[100px] sm:w-[200px]", placeholder: "Search product", onChange: (e) => handleSearch(e) }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 70,
        columnNumber: 20
      }, this),
      search && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: " rounded-full w-5 h-5 border border-secondary_purple text-secondary_purple ", onClick: () => clearSearch(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Loading Icon..." }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 72,
        columnNumber: 48
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CrossIcon_default, { width: "100%", height: "100%", fill: "text-secondary_purple" }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 73,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 72,
        columnNumber: 28
      }, this) }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 71,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/Header.tsx",
      lineNumber: 69,
      columnNumber: 60
    }, this) }, void 0, false, {
      fileName: "app/component/Header.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => navigate("/cart"), className: "flex  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShoppingBag_default, { width: "18", height: "18", fill: "white" }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 83,
        columnNumber: 78
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[10px] text-white rounded-full bg-dark_purple w-[15px] h-[15px]", children: state?.items.length }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 84,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/Header.tsx",
      lineNumber: 83,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/component/Header.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/component/Header.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(Header, "7wQfui+Azf5Kz6Dzsa/G+9Hn2A0=", false, function() {
  return [useNavigate, useCart, useLocation];
});
_c3 = Header;
var Header_default = Header;
var _c3;
$RefreshReg$(_c3, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Header_default
};
//# sourceMappingURL=/build/_shared/chunk-QCN65HSX.js.map
