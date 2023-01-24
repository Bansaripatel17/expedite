import React from "react";
import {Route,Routes,Navigate,Outlet } from "react-router-dom";
import ProductEdit from "./ProductEdit";
import AddProducts from "./AddProducts";
// import Product from "./Product";
import Products from "../containers/Products";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import Checkout from "./Checkout";
import Logout from "./Logout";
import Profile from "./Profile";
import Order from "./Order";
import Payment from "../containers/Payment";
import Completion from "./Completion"
import NotFound from "./status/NotFound";
import About from "./About";
import Contact from "./Contact";
import Admin from "./Admin/Admin";
import Vendor from './Vendor/Vendor'
// const NotFound=()=><h1>404 Page Not Found</h1>;

const ProtectedRoute = ({user,children}) => {
  console.log('protected-route',user);
  if (!user) {
   
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default function AllRoutes() {

  var user= sessionStorage.getItem('user');
  setTimeout(user,6000);
  
  return (
    <Routes>
    <Route path='/' element={<Products />} />
    <Route path='/products' element={<Products />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/logout' element={<Logout />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/order' element={<Order />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/completion' element={<Completion />} />
    <Route path='/payment' element={<Payment />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />


    <Route path='/admin' element={<Admin />} />
    <Route path='/:vendor' element={<Vendor />} />

    

 
    <Route path='/addproducts' element={<AddProducts />} />
    <Route path='/productdetail' element={<ProductDetail />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/edit/:_id' element={<ProductEdit />} />
    
</Routes>
  );
}
