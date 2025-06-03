import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

   
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        
        const newTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
        const newCartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        setTotalItems(newTotalItems);
        setCartTotal(parseFloat(newCartTotal.toFixed(2)));
    }, [cart]);

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(i => i.id === item.id);
            
            if (existingItemIndex !== -1) {
               
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + quantity
                };
                return updatedCart;
            } else {
             
                return [...prevCart, { 
                    ...item, 
                    quantity,
                    addedAt: new Date().toISOString() 
                }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? {...item, quantity: newQuantity} : item
            )
        );
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const getItemCount = (id) => {
        const item = cart.find(item => item.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            totalItems, 
            cartTotal,
            isCartOpen,
            addToCart, 
            removeFromCart, 
            clearCart,
            updateQuantity,
            toggleCart,
            getItemCount
        }}>
            {children}
        </CartContext.Provider>
    );
};