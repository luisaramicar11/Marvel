import { Product } from "./Product.jsx";
import { useContext } from "react";
import "./Products.css";
import listProducts from "./productData.js";
import ThemeContext from "../context/ThemeContext";

export function Products() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
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
    </div>
  );
}
