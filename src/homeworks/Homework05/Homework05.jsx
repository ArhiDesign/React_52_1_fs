import "./styles.css";
import { productsData } from "./data";
import Product from "../../components/Product/Product";

function Homework05() {
  const productsCards = productsData.map((productData) => {
    return (
      <Product
        key={productData.id}
        productName={productData.name}
        productPrice={productData.price}
      />
    );
  });

  return <div className="homework05-wrapper">{productsCards}</div>;
}

export default Homework05;
