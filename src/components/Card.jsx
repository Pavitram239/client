import "./Card.css";
import product from "../assets/product.svg";
import icons from "../assets/icon1.svg";
const Card = () => {
  return (
    <div className="card">
      <img className="product-image" src={product} alt="product" />
      <div className="card-body">
        <h3>the royal room</h3>
        <p>available: yes</p>
        <p>$1900</p>
      </div>
      <div className="card-footer">
        <img src={icons} alt="icons" />
        <button>book now</button>
      </div>
    </div>
  );
};
export default Card;
