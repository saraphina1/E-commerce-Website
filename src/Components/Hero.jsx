import  '../Styles/Hero.css'
import shop_bag from '../assets/shop_bag.png';
// import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroLeft">
            <h2>NEW ARRIVALS ONLY</h2>
    <div>
<div className='handIcon'>
    <p>new</p>
    <img src={shop_bag} alt='hand'/>
</div>
<p>collections</p>
<p>for everyone</p>
    </div>
{/* <div className="heroButton">
  <div>Lastest collection</div>
  <img src={arrow_icon} alt='arrow'/>
</div> */}


        </div>

        <div className="heroRight">
<img src={hero_image} alt='hImg'/>
        </div>

        </div>
  )
}

export default Hero