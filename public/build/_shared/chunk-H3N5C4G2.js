import {
  createHotContext
} from "/build/_shared/chunk-PZLREGOM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/component/Pagination.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1748950551734.9465";
}
function Pagination({
  limit,
  offset,
  totalItems,
  onPageChange,
  primaryColor = "bg-indigo-400",
  textColor = "text-white",
  totalToShow = 5
}) {
  const lastPage = Math.ceil(totalItems / limit);
  const currentPage = offset;
  const pageButtonClass = (isActive) => `border rounded  w-[25px] h-[25px] text-[12px] sm:w-[40px] sm:h-[40px] ${isActive ? `${primaryColor} ${textColor}` : "border-indigo-300"}`;
  const handlePrev = () => {
    if (currentPage > 1)
      onPageChange(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < lastPage)
      onPageChange(currentPage + 1);
  };
  const getPageRange = () => {
    const half = Math.floor(totalToShow / 2);
    let start = Math.max(1, currentPage - half);
    let end = start + totalToShow - 1;
    if (end > lastPage) {
      end = lastPage;
      start = Math.max(1, end - totalToShow + 1);
    }
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4 mb-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `border rounded w-[25px] h-[25px] text-[12px] sm:w-[40px] sm:h-[40px] text-white  ${currentPage == 1 ? "bg-indigo-100 " : "bg-indigo-300  "}`, onClick: handlePrev, disabled: currentPage === 1, children: "\xAB" }, void 0, false, {
      fileName: "app/component/Pagination.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this),
    getPageRange().map((num) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: pageButtonClass(currentPage === num), onClick: () => onPageChange(num), children: num }, num, false, {
      fileName: "app/component/Pagination.tsx",
      lineNumber: 62,
      columnNumber: 36
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `border rounded w-[25px] h-[25px] text-[12px] sm:w-[40px] sm:h-[40px] text-white  ${currentPage == lastPage ? "bg-indigo-100 " : "bg-indigo-300  "}`, onClick: handleNext, disabled: currentPage === lastPage, children: "\xBB" }, void 0, false, {
      fileName: "app/component/Pagination.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/component/Pagination.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/component/Pagination.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-H3N5C4G2.js.map
