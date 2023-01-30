import React from "react";
import {Route,Routes,Navigate,Outlet } from "react-router-dom";
import ProductEdit from "./ProductEdit";
import AddProducts from "./AddProducts";

import Products from "../components/Product";
import ProductDetail from "./ProductDetail";

import About from "./About";
import Contact from "./Contact";

const NotFound=()=><h1>404 Page Not Found</h1>;

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

    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />



    
    <Route path='*' element={<NotFound />} />
    
    
</Routes>
  );
}
