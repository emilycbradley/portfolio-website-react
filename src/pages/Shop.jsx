import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard.jsx";
import "./Shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  const products = getProducts();

  return (
    <><Link 
        to="/checkout" 
        className="checkout-button">
          Go to Checkout
      </Link>
      <div className="product-grid-shop">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            page="shop"
            product={product} />

        ))}
      </div></>
  );
}