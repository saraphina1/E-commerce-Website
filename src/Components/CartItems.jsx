import { useContext } from "react"; 
import "../Styles/CartItems.css";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart} =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartFormatMain">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e,i) => {
        if(cartItems[e.id]>0) 
        {
          return ( 
        <div key={i}>
              <div className="cartFormat cartFormatMain">
                <img src={e.image} alt="" className="productIcon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItemQuantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                  className="cartitemRemoveicon"
                />
              </div>
              <hr/>
            </div>
          )
        }
       else {return null}
      })}
      <div className="cartitemsBottom">
        <div className="cartitemsTotal">
          <h1>Cart Total</h1>
          <div>
            <div className="totalItems">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>

            </div>
            <hr/>
            <div className="totalItems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="totalItems">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

      </div>
    </div>
  );
};

export default CartItems;
