import {
  axios_default
} from "/build/_shared/chunk-AJSKGOBF.js";
import {
  Header_default
} from "/build/_shared/chunk-QCN65HSX.js";
import "/build/_shared/chunk-EVJGN6FM.js";
import "/build/_shared/chunk-O2SSUEUN.js";
import "/build/_shared/chunk-NTD7GPJS.js";
import {
  createHotContext
} from "/build/_shared/chunk-PZLREGOM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/idb/build/index.js
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(this.request);
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
var methodMap = {};
var advanceResults = /* @__PURE__ */ new WeakMap();
var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
var cursorIteratorTraps = {
  get(target, prop) {
    if (!advanceMethodProps.includes(prop))
      return target[prop];
    let cachedFunc = methodMap[prop];
    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function(...args) {
        advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
      };
    }
    return cachedFunc;
  }
};
async function* iterate(...args) {
  let cursor = this;
  if (!(cursor instanceof IDBCursor)) {
    cursor = await cursor.openCursor(...args);
  }
  if (!cursor)
    return;
  cursor = cursor;
  const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
  ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
  reverseTransformCache.set(proxiedCursor, unwrap(cursor));
  while (cursor) {
    yield proxiedCursor;
    cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
    advanceResults.delete(proxiedCursor);
  }
}
function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get(target, prop, receiver) {
    if (isIteratorProp(target, prop))
      return iterate;
    return oldTraps.get(target, prop, receiver);
  },
  has(target, prop) {
    return isIteratorProp(target, prop) || oldTraps.has(target, prop);
  }
}));

// app/utils/indexedDb.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/indexedDb.ts"
  );
  import.meta.hot.lastModified = "1749033510030.6238";
}
var STORE_NAME = "products";
var initDB = async () => {
  return await openDB("EcommerceDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    }
  });
};
var saveToIndexedDB = async (data) => {
  const db = await initDB();
  await db.put(STORE_NAME, data, "data");
};
var getFromIndexedDB = async () => {
  const db = await initDB();
  return await db.get(STORE_NAME, "data");
};

// app/routes/_index.tsx
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
  import.meta.hot.lastModified = "1749039938698.0688";
}
var ProductCard = (0, import_react2.lazy)(_c = () => import("/build/_shared/ProductCard-WNEBVYEM.js"));
_c2 = ProductCard;
var Pagination = (0, import_react2.lazy)(_c3 = () => import("/build/_shared/Pagination-N33G5EGQ.js"));
_c4 = Pagination;
var meta = () => [{
  title: "E commerce app"
}, {
  name: "description",
  content: "Welcome to my e commerce app"
}];
function Index() {
  _s();
  const [loaderData, setLoaderData] = (0, import_react.useState)({
    productData: {},
    categories: {}
  });
  const [products, setProducts] = (0, import_react.useState)([]);
  const [searchProducts, setSearchProducts] = (0, import_react.useState)([]);
  const [searchKey, setSearchKey] = (0, import_react.useState)("");
  const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
  const productPerPage = 8;
  (0, import_react.useEffect)(() => {
    const fetchProducts = async () => {
      const res = await axios_default.get("/fetchdata");
      setLoaderData(res.data);
    };
    fetchProducts();
  }, []);
  (0, import_react.useEffect)(() => {
    const loadProducts = async () => {
      const dbData = await getFromIndexedDB();
      if (dbData && Array.isArray(dbData) && dbData.length > 0) {
        setProducts(dbData);
      } else {
        setProducts(loaderData?.productData);
        await saveToIndexedDB(loaderData?.productData);
      }
    };
    loadProducts();
  }, [loaderData?.productData]);
  (0, import_react.useEffect)(() => {
    if (searchKey.trim() !== "") {
      const filtered = products.filter((item) => item.title.toLowerCase().includes(searchKey.toLowerCase()));
      setSearchProducts(filtered);
      setCurrentPage(1);
    } else {
      setSearchProducts([]);
    }
  }, [searchKey, products]);
  (0, import_react.useEffect)(() => {
    if (loaderData?.categories && Array.isArray(loaderData?.categories)) {
      localStorage.setItem("categories", JSON.stringify(loaderData?.categories));
    }
  }, [loaderData?.categories]);
  const finalProducts = searchKey ? searchProducts : products;
  const handlePageClick = (page) => {
    if (navigator.onLine) {
      setCurrentPage(page);
    } else {
      alert("Check Your Internet Connection");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, { currentPage, searchKey, setSearchKey }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this),
    finalProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-10 mb-4 gap-4 sm:flex-row justify-center flex-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading products..." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 104,
        columnNumber: 39
      }, this), children: finalProducts.slice((currentPage - 1) * productPerPage, currentPage * productPerPage).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { item }, item.id, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 120
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 104,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { limit: productPerPage, offset: currentPage, totalItems: finalProducts.length, onPageChange: handlePageClick, primaryColor: "bg-primary_purple", textColor: "text-white", totalToShow: 5 }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 39
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-center text-red-500", children: "No product found" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 111,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s(Index, "Qy3qIM7g6Fk6vxt7W6BZvkwD+bM=");
_c5 = Index;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "ProductCard$lazy");
$RefreshReg$(_c2, "ProductCard");
$RefreshReg$(_c3, "Pagination$lazy");
$RefreshReg$(_c4, "Pagination");
$RefreshReg$(_c5, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-EUOREMJK.js.map
