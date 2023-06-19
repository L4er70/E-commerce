import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import Manager from './Manager';


function App() {
  return (
    

    
   <Router>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/manager' element={<Manager/>}/>



    </Routes>
    </Router>
    
  )
   
        
  
}

export default App;
