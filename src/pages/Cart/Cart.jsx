import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qauntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cartItemsTitle cartItemsItem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cross"
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                  >
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cartBottom">
        <div className="cartTotal">
          <h2>Cart Total</h2>
          <div>
            <div className="cartTotalDetails">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartTotalDetails">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cartTotalDetails">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/order");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartPromoCode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cartPromoCodeInput">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
