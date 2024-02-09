import '../Styles/Offers.css'
import exclusive_image from "../assets/exclusive_image.png"

const offers = () => {
  return (
    <div className='offers'>
        <div className="offersLeft">
  <h1>Exclusive</h1>
  <h1>Offers For You</h1>
  <p>ONLY ON BEST SELLERS PRODUCT</p>
  <button>Check Now</button>
        </div>
        <div className="offersRight">
<img src={exclusive_image} alt=''/>
        </div>
        </div>
  )
}

export default offers