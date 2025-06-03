import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
            features: [
              'Material: 95% algodón, 5% elastano',
              'Lavable a máquina',
              'Tallas disponibles: S, M, L'
            ],
            category: 'mujer',
            image: '/mujer1.jpg',
            stock: 8
          },
          { 
            id: 2, 
            name: 'Conjunto Mujer Verano', 
            price: 54.99, 
            description: 'Vestido ligero perfecto para días calurosos con corte favorecedor.', 
            features: [
              'Material: 100% lino',
              'Secado rápido',
              'Tallas disponibles: XS, S, M'
            ],
            category: 'mujer',
            image: '/mujer2.jpg',
            stock: 6
          },
          { 
            id: 3, 
            name: 'Conjunto Mujer Noche', 
            price: 69.99, 
            description: 'Elegante conjunto para ocasiones especiales con detalles en encaje.', 
            features: [
              'Material: 70% poliéster, 30% seda',
              'Cuidado profesional recomendado',
              'Tallas disponibles: M, L, XL'
            ],
            category: 'mujer',
            image: '/mujer3.jpg',
            stock: 5
          },
          { 
            id: 4, 
            name: 'Conjunto Hombre Casual', 
            price: 59.99, 
            description: 'Conjunto moderno para hombre en algodón orgánico y corte moderno.', 
            features: [
              'Material: 100% algodón orgánico',
              'Resistente a arrugas',
              'Tallas disponibles: M, L, XL, XXL'
            ],
            category: 'hombre',
            image: '/hombre1.jpg',
            stock: 12
          },
          { 
            id: 5, 
            name: 'Conjunto Hombre Oficina', 
            price: 74.99, 
            description: 'Traje profesional para hombre con tejido resistente a arrugas.', 
            features: [
              'Material: 65% poliéster, 35% lana',
              'Planchado fácil',
              'Tallas disponibles: S, M, L, XL'
            ],
            category: 'hombre',
            image: '/hombre2.jpg',
            stock: 7
          },
          { 
            id: 6, 
            name: 'Conjunto Hombre Deportivo', 
            price: 49.99, 
            description: 'Conjunto deportivo transpirable con tecnología de secado rápido.', 
            features: [
              'Material: 85% poliéster, 15% elastano',
              'Tecnología anti-olor',
              'Tallas disponibles: S, M, L, XL'
            ],
            category: 'hombre',
            image: '/hombre3.jpg',
            stock: 9
          },
          { 
            id: 7, 
            name: 'Zapatos de Cuero Elegantes', 
            price: 79.99, 
            description: 'Zapatos elegantes de cuero genuino para cualquier ocasión formal.', 
            features: [
              'Cuero genuino italiano',
              'Plantilla acolchada',
              'Tallas: 38-45'
            ],
            category: 'zapatos',
            image: '/zapatos1.jpg',
            stock: 5
          },
          { 
            id: 8, 
            name: 'Zapatos Casuales Urbanos', 
            price: 65.99, 
            description: 'Zapatos cómodos para el día a día con suela de goma antideslizante.', 
            features: [
              'Material: Cuero sintético',
              'Suela de goma flexible',
              'Tallas: 37-44'
            ],
            category: 'zapatos',
            image: '/zapatos2.jpg',
            stock: 8
          },
          { 
            id: 9, 
            name: 'Zapatos Deportivos Running', 
            price: 75.99, 
            description: 'Zapatillas de alto rendimiento con amortiguación para corredores.', 
            features: [
              'Amortiguación de aire',
              'Peso ligero: 250g',
              'Tallas: 38-46'
            ],
            category: 'zapatos',
            image: '/zapatos3.jpg',
            stock: 6
          }
        ];
        
        const foundProduct = mockProducts.find(p => p.id === parseInt(itemId));
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Producto no encontrado');
        }
      } catch (error) {
        setError('Error al cargar el producto');
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <Loader />
        </div>
      ) : error ? (
        <div className={styles.errorContainer}>
          <p>{error}</p>
          <Link to="/" className={styles.backLink}>
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;