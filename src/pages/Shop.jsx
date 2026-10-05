import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard.jsx";

export default function Shop() {
  const products = getProducts();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}