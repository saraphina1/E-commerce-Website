import { useContext, useRef, useState } from 'react';
import '../Styles/Navbar.css';
import NavLogo from '../assets/NavLogo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon2.png';


const Navbar = () => {
  const [menu, setMenu]=useState('shop')
  const {getTotalCartItems}= useContext(ShopContext)
  const menuRef = useRef();

  const dropdownToggle=(e)=>{
     menuRef.current.classList.toggle('navMenuVisible');
     e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className='navLogo'>
        <img src={NavLogo} alt='logo' className='logo'/>
        <p>SHOPMORE</p>
        </div>
        <img className='navDropdown' onClick={dropdownToggle} src={dropdown_icon} alt=''/>
        <ul ref={menuRef} className='navMenu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}}to='/'>Shop</Link>{menu==="shop"? <hr/>:<></> }</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}}to='/men'>Men</Link>{menu==="men"? <hr/>:<></> }</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}}to='/women'>women</Link>{menu==="women"? <hr/>:<></> }</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}}to='/kids'>Kids</Link>{menu==="kids"? <hr/>:<></> } </li>
        </ul>
        <div className='NavLoginCart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt='cart'/></Link>
          <div className='navCartCount'>{getTotalCartItems()}</div>
        </div>
        </div>
  )
}

export default Navbar