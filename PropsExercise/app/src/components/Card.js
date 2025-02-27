function Card(props) {
    return (
      <div className="item-cart">
        <img src={props.src} alt="" />
        <h2 className="promo">{props.promo}</h2>
        <div className="btn" onClick={props.addToCart}>
          Add to cart
        </div>
      </div>
    );
  }
  
  export default Card;