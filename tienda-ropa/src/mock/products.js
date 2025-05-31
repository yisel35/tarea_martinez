export const getProducts = () => {
    return Promise.resolve([
        {
            id: 1,
            name: "Camiseta Básica",
            price: 19.99,
            category: "hombre",
            description: "Camiseta de algodón 100%",
            image: "/images/camiseta.jpg",
            stock: 15
        },
        {
            id: 2,
            name: "Vestido Floral",
            price: 39.99,
            category: "mujer",
            description: "Vestido veraniego de flores",
            image: "/images/vestido.jpg",
            stock: 8
        },
        
    ]);
};

export const getProductById = (id) => {
    return getProducts()
        .then(products => products.find(prod => prod.id === parseInt(id)));
};