import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();


// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Actualizar totales cuando cambie el carrito
    useEffect(() => {
        const newTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
        const newCartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        setTotalItems(newTotalItems);
        setCartTotal(newCartTotal);
    }, [cart]);

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(i => i.id === item.id);
            
            if (existingItemIndex !== -1) {
                // Actualizar cantidad si existe
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + quantity
                };
                return updatedCart;
            } else {
                // Agregar nuevo item
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            totalItems, 
            cartTotal,
            addToCart, 
            removeFromCart, 
            clearCart 
        }}>
            {children}
        </CartContext.Provider>
    );
};