import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems, addtoCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="foodItem">
      <div className="foodItemImgContainer">
        <img className="foodItemImg" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={()=>addtoCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="foodItemCounter">
            <img
              
              onClick={()=>removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>

      <div className="foodItemInfo">
        <div className="foodItemNameRating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="foodItemDescription">{description}</p>
        <p className="foodItemPrice">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
