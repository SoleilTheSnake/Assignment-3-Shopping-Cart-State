import './ProductCard.css';
// I had to ask AI to help me figure out why this was broken.

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-header"></div>
      <div className="product-body">
        <h3 className="product-name">{props.title}</h3>
        <p className="product-description">{props.description}</p>
        <img
          alt={props.title}
          className="product-image"
          src={props.img}
        />
      </div>
      <div className="product-footer">
        <span className="product-price">{props.price}</span>
      </div>
      <div className="product-actions">
        <button onClick={props.onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;