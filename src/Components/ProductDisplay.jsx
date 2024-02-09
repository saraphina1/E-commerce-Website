import "../Styles/ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}= useContext(ShopContext)
  return (
    <div className="productDisplay">
      <div className="productdisplayLeft">
         <div className="productdisplayImglist">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> 
        <div className="productdisplayImg">
          <img className="productdisplayMainImg" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplayRight">
      <h1>{product.name}</h1>
      <div className="productdisplayRStar">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(115)</p>
      </div>
      <div className="productdisplayPrices">
        <div className="productdisplayOldprice">${product.old_price}</div>
        <div className="productdisplayNewprice">${product.new_price}</div>
      </div>
      <div className="productdisplayDescription">
        A lightweight, usually knitted, pullover shirt, close knitting and with
        a round neckline and short sleeves, worn as an undershirt or outer
        garment.
      </div>
      <div className="productdisplaySize">
        <h1>Select size</h1>
        <div className="productdisplaySizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
      <p className="productdisplayCategory">
        <span>Category :</span>Women , Tshirt, Crop Top
      </p>
      <p className="productdisplayCategory">
        <span>Tags :</span>Modern , Latest
      </p>
    </div>
    </div>
  );
};

export default ProductDisplay;
