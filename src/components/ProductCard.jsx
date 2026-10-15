import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
 


export default function ProductCard({ product, page }) {
    
  const navigate = useNavigate();
   const { addToCart, cartItems } = useCart();
   const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` 
            : "";


  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-content">
        <h2>{product.name}</h2>
      </div>
        {page === "shop" && (
          <>
            <span className="shop-buttons">
              <button className="details-button" onClick={() => navigate(`/shop/${product.id}`)}>
                View Details
              </button>
              <button className="add-to-cart-button" onClick={() => addToCart(product.id)}>
                Add to Cart {productQuantityLabel}
              </button>
            </span>
          </>
        )}
      
    </div>
  );
}