
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";



const products = [
    {
        id: 1,
        image: image1,
        name: "Product 1",
        price: 19.99,
        description: "Description for Product 1"
    },
    {
        id: 2,
        image: image2,
        name: "Product 2",
        price: 29.99,
        description: "Description for Product 2"
    },
    {
        id: 3,
        image: image3,
        name: "Product 3",
        price: 39.99,
        description: "Description for Product 3"
    },
    {
        id: 4,
        image: image4,
        name: "Product 4",
        price: 49.99,
        description: "Description for Product 4"
    },
    {
        id: 5,
        image: image5,
        name: "Product 5",
        price: 59.99,
        description: "Description for Product 5"
    },
    {
        id: 6,
        image: image6,
        name: "Product 6",
        price: 69.99,
        description: "Description for Product 6"
    }
];

export function getProducts() {
  return products;

}