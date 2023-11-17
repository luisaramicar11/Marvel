import { Product } from "./Product.jsx";
import { useContext } from "react";
import "./Products.css";
import listProducts from "./productData.js";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

export function Products() {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div className={theme}>
      <p className="h2 fw-bold p-4 text-center ">{texts.productsTitle}</p>
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
