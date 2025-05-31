export const getProducts = () => {
  return Promise.resolve([
    // Mujer
    { id: 1, name: 'Conjunto Mujer 1', price: 49.99, category: 'mujer', image: '/mujer1.jpg', stock: 10 },
    { id: 2, name: 'Conjunto Mujer 2', price: 59.99, category: 'mujer', image: '/mujer2.jpg', stock: 8 },
    { id: 3, name: 'Conjunto Mujer 3', price: 69.99, category: 'mujer', image: '/mujer3.jpg', stock: 5 },
    
    // Hombre
    { id: 4, name: 'Conjunto Hombre 1', price: 54.99, category: 'hombre', image: '/hombre1.jpg', stock: 12 },
    { id: 5, name: 'Conjunto Hombre 2', price: 64.99, category: 'hombre', image: '/hombre2.jpg', stock: 7 },
    { id: 6, name: 'Conjunto Hombre 3', price: 74.99, category: 'hombre', image: '/hombre3.jpg', stock: 3 },
    
    // Zapatos
    { id: 7, name: 'Zapatos Elegantes', price: 89.99, category: 'zapatos', image: '/zapatos1.jpg', stock: 6 },
    { id: 8, name: 'Zapatos Casuales', price: 65.99, category: 'zapatos', image: '/zapatos2.jpg', stock: 9 },
    { id: 9, name: 'Zapatos Deportivos', price: 75.99, category: 'zapatos', image: '/zapatos3.jpg', stock: 4 }
  ]);
};