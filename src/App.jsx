
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png'; 
function App() {
  

  return (
    
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Shop/>}/>
          <Route path='/men' exact element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/women' exact element={<ShopCategory banner={women_banner}category="women"/>}/>
          <Route path='/kids' exact element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' exact element={<Product/>}>
          <Route path=':productId' exact element={<Product/>}/>
          </Route>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/login' exact element={<LoginSignup/>}/>
          
        </Routes>
        <Footer/> 
        </Router>
        
      </div>
      
    
  )
}

export default App
