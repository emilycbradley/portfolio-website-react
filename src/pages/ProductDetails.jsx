

export default function ProductDetails({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}