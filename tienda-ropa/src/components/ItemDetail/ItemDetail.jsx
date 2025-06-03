import { Link } from 'react-router-dom';
import styles from './ItemDetail.module.css';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import Description from './Description';



const ItemDetail = ({ product }) => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageSection}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={styles.mainImage}
        />
      </div>
      
      <div className={styles.infoSection}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        
        {product.stock > 0 ? (
          <p className={styles.stock}>Disponible: {product.stock} unidades</p>
        ) : (
          <p className={styles.outOfStock}>Producto agotado</p>
        )}
        
        <Description product={product} />
        
        <div className={styles.actions}>
          {product.stock > 0 && (
            <>
              <ItemQuantitySelector />
              <AddItemButton />
            </>
          )}
        </div>
        
        <Link to="/" className={styles.backButton}>
          &larr; Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;