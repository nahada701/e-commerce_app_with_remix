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

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1749015624431.7297";
}
var Header = (0, import_react3.lazy)(_c = () => import("/build/_shared/Header-TXRXAW7I.js"));
_c2 = Header;
var Pagination = (0, import_react3.lazy)(_c3 = () => import("/build/_shared/Pagination-6JAVCWA4.js"));
_c4 = Pagination;
var ProductCard = (0, import_react3.lazy)(_c5 = () => import("/build/_shared/ProductCard-2GO3BMGM.js"));
_c6 = ProductCard;
var meta = () => [{
  title: "E commerce app"
}, {
  name: "description",
  content: "Welcome to my e commerce app"
}];
function Index() {
  _s();
  const [searchProducts, setSearchProducts] = (0, import_react2.useState)([]);
  const [searchKey, setSearchKey] = (0, import_react2.useState)("");
  const {
    productData,
    categories
  } = useLoaderData();
  console.log(categories);
  const productPerPage = 8;
  const [currentPage, setCurrentpage] = (0, import_react2.useState)(1);
  const products = searchKey ? searchProducts : productData;
  const handlePageClick = (page) => {
    if (navigator.onLine) {
      setCurrentpage(page);
    } else {
      alert("Check Your Internet Connection");
    }
  };
  (0, import_react2.useEffect)(() => {
    if (searchKey?.trim() !== "") {
      const filtered = productData.filter((item) => item.title.toLowerCase().includes(searchKey.toLowerCase()));
      setSearchProducts(filtered);
      setCurrentpage(1);
    } else {
      setSearchProducts([]);
    }
  }, [searchKey, productData]);
  (0, import_react2.useEffect)(() => {
    if (categories && Array.isArray(categories)) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { currentPage, searchKey, setSearchKey }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-10 mb-4 gap-4 sm:flex-row justify-center   flex-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading searchProducts..." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 87,
        columnNumber: 37
      }, this), children: products.slice((currentPage - 1) * productPerPage, currentPage * productPerPage).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { item }, item.id, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 88,
        columnNumber: 113
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { limit: productPerPage, offset: currentPage, totalItems: products.length, onPageChange: handlePageClick, primaryColor: "bg-indigo-400", textColor: "text-white", totalToShow: 5 }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 84,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-10 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-center text-red-500", children: "No product found" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 96,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(Index, "c77dI7EikWsf20xHIpMMNV1QFa4=", false, function() {
  return [useLoaderData];
});
_c7 = Index;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
$RefreshReg$(_c, "Header$lazy");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Pagination$lazy");
$RefreshReg$(_c4, "Pagination");
$RefreshReg$(_c5, "ProductCard$lazy");
$RefreshReg$(_c6, "ProductCard");
$RefreshReg$(_c7, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-MKOCFHZD.js.map
