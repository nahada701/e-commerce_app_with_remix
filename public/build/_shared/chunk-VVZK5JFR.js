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

// app/context/CartContext.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/CartContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/CartContext.tsx"
  );
  import.meta.hot.lastModified = "1749012549725.189";
}
var CartContext = (0, import_react.createContext)(null);
var initialState = {
  items: []
};
var CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.items.find((items) => items.id == action.product.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) => item.id == action.product.id ? {
            ...item,
            quantity: (item?.quantity || 0) + 1
          } : item)
        };
      } else {
        return {
          ...state,
          items: [...state.items, {
            ...action.product,
            quantity: 1
          }]
        };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id)
      };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((item) => item.id === action.id ? {
          ...item,
          quantity: (item?.quantity || 0) + 1
        } : item)
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items.map((item) => item.id === action.id ? {
          ...item,
          quantity: (item.quantity || 1) - 1
        } : item)
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};
_c = CartReducer;
var CartProvider = ({
  children
}) => {
  _s();
  const [state, dispatch] = (0, import_react.useReducer)(CartReducer, initialState);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartContext.Provider, { value: {
    state,
    dispatch
  }, children }, void 0, false, {
    fileName: "app/context/CartContext.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
};
_s(CartProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");
_c2 = CartProvider;
var useCart = () => {
  _s2();
  const context = (0, import_react.useContext)(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  } else {
    return context;
  }
};
_s2(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
var _c2;
$RefreshReg$(_c, "CartReducer");
$RefreshReg$(_c2, "CartProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CartProvider,
  useCart
};
//# sourceMappingURL=/build/_shared/chunk-VVZK5JFR.js.map
