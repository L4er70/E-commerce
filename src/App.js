import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Manager from './Manager';
import EditProduct from './EditProduct';
import CreateProduct from './CreateProduct';
import Home from './Home';
import { ShopProvider } from './ShopContext';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <ShopProvider>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="manager" element={<Manager />} />
          <Route path="manager/edit/:id" element={<EditProduct  />} />
          <Route path="manager/create" element={<CreateProduct />} />
        </Route>
      </Routes>
      </ShopProvider>
    </Router>
  );


}

export default App;
