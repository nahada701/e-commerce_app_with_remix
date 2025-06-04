import {
  useCart
} from "/build/_shared/chunk-VVZK5JFR.js";
import {
  Link,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-2A6JWUTX.js";
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
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1749016294914.3325";
}
var ShoppingBag = (0, import_react2.lazy)(_c = () => import("/build/_shared/ShoppingBag-U4TMGWHS.js"));
_c2 = ShoppingBag;
var CrossIcon = (0, import_react2.lazy)(_c3 = () => import("/build/_shared/CrossIcon-2KI3NUF6.js"));
_c4 = CrossIcon;
function Header({
  setSearchKey,
  currentPage
}) {
  _s();
  const navigate = useNavigate();
  const [search, setSearch] = (0, import_react2.useState)("");
  const {
    state
  } = useCart();
  const location = useLocation();
  const insideCartPage = location.pathname === "/cart";
  const insideCategoryPage = location.pathname.includes("category");
  console.log(insideCategoryPage);
  const [categories, setCategories] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
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
  (0, import_react2.useEffect)(() => {
    setSearch("");
  }, [currentPage]);
  const handleCategorySearch = (slug) => {
    navigate(`/category/${slug}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-5 px-10 bg-indigo-300 flex justify-between items-start    items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "md:text-3xl sm:text-xl text-[14px]   text-white", children: "E comm App" }, void 0, false, {
      fileName: "app/component/Header.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    !insideCartPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "rounded py-2", id: "", onChange: (e) => handleCategorySearch(e.target.value), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, hidden: true, children: "Select Categotry" }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      categories?.map((cate) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: cate.slug, children: cate.name }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 66,
        columnNumber: 43
      }, this))
    ] }, void 0, true, {
      fileName: "app/component/Header.tsx",
      lineNumber: 64,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " gap-2 hidden sm:flex  ", children: !insideCartPage && !insideCategoryPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex justify-between bg-white border rounded pr-3 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: search, type: "text", className: "outline-0 bg-none placeholder-xs rounded w-[100px] sm:w-[200px]", placeholder: "Search product", onChange: (e) => handleSearch(e) }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 72,
        columnNumber: 20
      }, this),
      search && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " rounded-full w-5 h-5 border border-indigo-400 text-indigo-400 ", onClick: () => clearSearch(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading Icon..." }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 74,
        columnNumber: 48
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CrossIcon, { width: "100%", height: "100%", fill: "text-indigo-400" }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 75,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 74,
        columnNumber: 28
      }, this) }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 73,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/Header.tsx",
      lineNumber: 71,
      columnNumber: 60
    }, this) }, void 0, false, {
      fileName: "app/component/Header.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigate("/cart"), className: "flex  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { width: "18", height: "18", fill: "white" }, void 0, false, {
          fileName: "app/component/Header.tsx",
          lineNumber: 85,
          columnNumber: 78
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[10px] text-white rounded-full bg-indigo-400 w-[15px] h-[15px]", children: state?.items.length }, void 0, false, {
          fileName: "app/component/Header.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/component/Header.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-white sm:text-[14px] text-[12px]", to: "logout", children: "Logout" }, void 0, false, {
        fileName: "app/component/Header.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/Header.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/component/Header.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Header, "7wQfui+Azf5Kz6Dzsa/G+9Hn2A0=", false, function() {
  return [useNavigate, useCart, useLocation];
});
_c5 = Header;
var Header_default = Header;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "ShoppingBag$lazy");
$RefreshReg$(_c2, "ShoppingBag");
$RefreshReg$(_c3, "CrossIcon$lazy");
$RefreshReg$(_c4, "CrossIcon");
$RefreshReg$(_c5, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Header_default
};
//# sourceMappingURL=/build/_shared/chunk-5B5VK4KW.js.map
