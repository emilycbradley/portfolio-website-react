import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]); // { id: 2, quantity: 7 }

    function addToCart(productId) {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === productId);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            
            return [...prevItems, { id: productId, quantity: 1 }];
        });
    }

    function getCartItemsWithProducts() {
       return cartItems.map((item) => {
            const product = getProductById(item.id);

            if (product) {
                return { ...item, product };
            }

            return null;
            })
            .filter((item) => item !== null);
        }


    function removeFromCart(productId) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }

    function getCartTotal() {
        return cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    function clearCart() {

        setCartItems([]);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                getCartItemsWithProducts,
                removeFromCart,
                updateQuantity,
                getCartTotal,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}