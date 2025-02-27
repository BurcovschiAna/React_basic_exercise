function Heading(props) {    
    return (
      <div className="header flexbox">
        <div className="logo">
          <span className="material-symbols-outlined">face_4</span>
        </div>
        <ul className="nav flexbox">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flexbox">
          <span className="material-symbols-outlined shoping">shopping_cart</span>
          <div className="cart-number">
            {props.cartNumber}
          </div>
        </div>
      </div>
    );
  }
  export default Heading;