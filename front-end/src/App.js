import React,{useEffect, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"
import Movies from './containers/Products'
import addProduct from './components/AddProducts'
import AllRoutes from './components/AllRoutes'
import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from './components/SplashScreen'

import {  ThemeProvider } from './components/ThemeContext';


export default function App() {

  


  return (
    <>

 <ConditionalRendering />


    </>

  )
}

function ConditionalRendering(){
  const [splash,setSplash]=useState(true);
  
 

  if(splash){
    setTimeout(() => {
      setSplash(false);
  }, 2000);
   return <SplashScreen />

  }
  else{
  return  <>
 <ThemeProvider>
    <Header />
    <Footer />
    </ThemeProvider>
    </>
    
  }
}