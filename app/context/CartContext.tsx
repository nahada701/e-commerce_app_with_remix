import { createContext, ReactNode, useContext, useReducer } from "react";

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

type Dimensions = {
    width: number;
    height: number;
    depth: number;
};

type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
    quantity?: number
};


type CartState = {
    items: Product[]
}

type CartAction =
    | { type: "ADD_TO_CART", product: Product }
    | { type: "REMOVE_FROM_CART", id: number }
    | { type: "INCREMENT", id: number }
    | { type: "DECREMENT", id: number }
    | { type: "CLEAR_CART" }


const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
} | null>(null);

const initialState: CartState = {
    items: []
}

const CartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const exists = state.items.find(items => items.id == action.product.id)
            if (exists) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id == action.product.id
                            ? { ...item, quantity: (item?.quantity || 0 ) + 1 }
                            : item
                    )
                }
            }
            else {
                return {
                    ...state,
                    items: [...state.items, { ...action.product, quantity: 1 }]

                }
            }
        }
        case "REMOVE_FROM_CART":
            return {
              ...state,
              items: state.items.filter((item) => item.id !== action.id),
            };
        case "INCREMENT":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, quantity: (item?.quantity || 0) + 1 }
                        : item
                ),
            };
        case "DECREMENT":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, quantity: (item.quantity || 1) - 1 }
                        : item
                ),
            };
        case "CLEAR_CART":
            return initialState;
        default:
            return state;
    }
}
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("CartProvider is missing")
    }
    else {
        return context
    }
}

