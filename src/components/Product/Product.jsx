import "./styles.css";

function Product({productName, productPrice}) {
  return (
    <div className="product-card-wrapper">
      <h3>{productName}</h3>
      <div>{productPrice}</div>
    </div>
  );
}

export default Product;
