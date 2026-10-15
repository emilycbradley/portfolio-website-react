
import { useCart } from '../context/CartContext';
import "./Checkout.css";


export default function Checkout() {
  const { 
    getCartItemsWithProducts,
    removeFromCart,
    getCartTotal,
    clearCart, } = useCart();

    const cartItemsWithProducts = getCartItemsWithProducts();
    const total = getCartTotal();



return (
  <div className="checkout-container">
    <div>
      <h1>Checkout</h1>

      <ul className="checkout-items">
        {cartItemsWithProducts.map((item) => (
          <li className="checkout-item" key={item.id}>
            <img
              src={item.product.image}
              alt={item.product.name}
            />

            <div className="checkout-item-details">
              <h3>{item.product.name}</h3>
              <p>${item.product.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="checkout-summary">
      <h2>Order Summary</h2>
      <p>Total: ${total.toFixed(2)}</p>

      <button
        className="place-order-button"
        onClick={() => {
          alert("Order placed!");
          clearCart();
        }}
      >
        Place Order
      </button>
    </div>
  </div>
)};
