import { Link } from 'react-router-dom';
import '../Styles/Item.css';

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img  onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
        <p>{props.name}</p>
        <div className='itemPrice'>
            <div className='itemNewPrice'>
            {props.new_price}
           
            </div>
        
        <div className='itemOldPrice'>
            {props.old_price}
        </div>
        </div>
        </div>
  )
}



export default Item;