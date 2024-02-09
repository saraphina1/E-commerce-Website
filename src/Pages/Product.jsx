import { useContext } from "react"
import "../Styles/Product.css"
import { ShopContext } from '../Context/ShopContext'
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const {all_product} = useContext (ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id==Number(productId))
  return (
    <div className="product">
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
      </div>
  )
}

export default Product
  