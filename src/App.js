import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { CartProvider } from './CartContext';

// ensures that the route will only match if the path is exactly the same as the one specified. 
//Without the exact prop, a route with a path of / would match all paths that start with /, 
//which could lead to unexpected behavior.

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
