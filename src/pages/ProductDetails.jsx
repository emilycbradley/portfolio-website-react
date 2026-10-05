import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductDetails() {
  const products = getProducts();

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}