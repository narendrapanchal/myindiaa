import Products from "../pages/Products";
import Cart from "../pages/Cart";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function AllRoutes() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route element={<Products/>}path="/" ></Route>
      <Route element={<Cart/>}path="/cart" ></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>;
}

export default AllRoutes;
