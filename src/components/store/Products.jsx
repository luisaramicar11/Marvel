import { Product } from "./Product.jsx";
import "./Products.css";
import listProducts from "./productData.js";

export function Products() {
  return (
    <div className="content-products">
      {listProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          rating={product.rating}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}
