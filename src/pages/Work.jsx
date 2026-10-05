import { getProducts } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Work() {
  return (
    <div>
      <h1>Work</h1>
        <div>
            {getProducts().map((product) => (
            <ProductCard product={product} key={product.id} />
            ))}
        </div>
    </div>
  );
}