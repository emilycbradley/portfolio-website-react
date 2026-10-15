import { useState } from "react";
import { getProducts } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import "./Work.css";

export default function Work() {
  const products = getProducts();

  const [currentIndex, setCurrentIndex] = useState(null);

  function openGallery(index) {
    setCurrentIndex(index);
  }

  function closeGallery() {
    setCurrentIndex(null);
  }

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % products.length);
  }

  function previousImage() {
    setCurrentIndex(
      (currentIndex - 1 + products.length) % products.length
    );
  }

  return (
    <div>
      <h1>Work</h1>

      <div className="product-grid-work">
        {products.map((product, index) => (
          <div
            key={product.id}
            page="work"
            onClick={() => openGallery(index)}
          >
            <ProductCard product={product} page="work" />
          </div>
        ))}
      </div>


      {/* GALLERY */}

      {currentIndex !== null && (
        <div className="gallery-overlay">

          <button
            className="gallery-close"
            onClick={closeGallery}
          >
            ×
          </button>

          <button
            className="gallery-prev"
            onClick={previousImage}
          >
            ‹
          </button>

          <img
            className="gallery-image"
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
          />

          <button
            className="gallery-next"
            onClick={nextImage}
          >
            ›
          </button>

        </div>
      )}
    </div>
  );
}