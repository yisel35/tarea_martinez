import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader'; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
 
        await new Promise(resolve => setTimeout(resolve, 1000));
        
       
        const mockProducts = [
          { 
            id: 1, 
            name: 'Conjunto Mujer Primavera', 
            price: 49.99, 
            description: 'Conjunto elegante para mujer con tejido transpirable y diseño floral.', 
            category: 'mujer',
            image: 'mujer1.jpg',
            stock: 8
          },
          { 
            id: 2, 
            name: 'Conjunto Mujer Verano', 
            price: 54.99, 
            description: 'Vestido ligero perfecto para días calurosos con corte favorecedor.', 
            category: 'mujer',
            image: '/mujer2.jpg',
            stock: 6
          },
          { 
            id: 3, 
            name: 'Conjunto Mujer Noche', 
            price: 69.99, 
            description: 'Elegante conjunto para ocasiones especiales con detalles en encaje.', 
            category: 'mujer',
            image: '/mujer3.jpg',
            stock: 5
          },
          { 
            id: 4, 
            name: 'Conjunto Hombre Casual', 
            price: 59.99, 
            description: 'Conjunto moderno para hombre en algodón orgánico y corte moderno.', 
            category: 'hombre',
            image: '/hombre1.jpg',
            stock: 12
          },
          { 
            id: 5, 
            name: 'Conjunto Hombre Oficina', 
            price: 74.99, 
            description: 'Traje profesional para hombre con tejido resistente a arrugas.', 
            category: 'hombre',
            image: '/hombre2.jpg',
            stock: 7
          },
          { 
            id: 6, 
            name: 'Conjunto Hombre Deportivo', 
            price: 49.99, 
            description: 'Conjunto deportivo transpirable con tecnología de secado rápido.', 
            category: 'hombre',
            image: '/hombre3.jpg',
            stock: 9
          },
          { 
            id: 7, 
            name: 'Zapatos de Cuero Elegantes', 
            price: 79.99, 
            description: 'Zapatos elegantes de cuero genuino para cualquier ocasión formal.', 
            category: 'zapatos',
            image: '/zapatos1.jpg',
            stock: 5
          },
          { 
            id: 8, 
            name: 'Zapatos Casuales Urbanos', 
            price: 65.99, 
            description: 'Zapatos cómodos para el día a día con suela de goma antideslizante.', 
            category: 'zapatos',
            image: '/zapatos2.jpg',
            stock: 8
          },
          { 
            id: 9, 
            name: 'Zapatos Deportivos Running', 
            price: 75.99, 
            description: 'Zapatillas de alto rendimiento con amortiguación para corredores.', 
            category: 'zapatos',
            image: '/zapatos3.jpg',
            stock: 6
          }
        ];
        
        const foundProduct = mockProducts.find(p => p.id === parseInt(itemId));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="item-detail-container" style={{ 
      minHeight: '70vh',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {loading ? (
        <Loader />
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          fontSize: '1.1rem'
        }}>
          <p>Producto no encontrado</p>
          <a href="/" style={{
            color: '#000',
            textDecoration: 'underline',
            marginTop: '20px',
            display: 'inline-block'
          }}>
            Volver a la tienda
          </a>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;