import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product/Product';


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
