import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col'
import {  useNavigate } from 'react-router-dom';
import useProduct  from './useProduct';
import { useTheme,useThemeUpdate } from './ThemeContext';




export default function Product(props) {
  const navigate = useNavigate();
  //theme
  const toggleTheme=useThemeUpdate();
const darkTheme=useTheme();
const themeStyles={
margin:'0rem',
  color:darkTheme?'rgba(0, 0, 0)':'rgba(0, 0, 0)',
  // padding:'2rem',
  // margin:'2rem',
}
  // useState 
  const [qty,setQty]=useState(parseInt(props.qty));
  const [singleProduct,setSingleProduct] = useState({
    //id:Math.random(1,3),
    name:props.name,
    description:props.description,
    qty:props.qty,
    price:props.price,
    rating:props.rating,
    image:props.image

  });
  // const {product,setProduct}=useProduct(singleProduct);

  
  console.log(typeof(props.image));
  console.log(props);

 const validateQty=()=>{
    if(qty>0 && qty <=9){
      return qty;
    }
    else{
      alert( "qty must be between 1 to 9");
      setQty(1);
    }
  }
const  NavigateToDetailPage=async()=>{

setSingleProduct(singleProduct.qty=qty);

  await navigate('/productdetail',{state:singleProduct});
  }

const  NavigateToCartPage=async()=>{
//   setProduct(singleProduct);
// console.log(product);
var prevLocal = JSON.parse(localStorage.getItem("items"));

console.log('prevLocal',(prevLocal));
if(prevLocal !== null){
  console.log('before-prevLocal',prevLocal);
  prevLocal.push(singleProduct);
  localStorage.setItem("items",JSON.stringify(prevLocal));
  console.log(prevLocal);

}else{
localStorage.setItem("items",JSON.stringify([singleProduct]));

}
setSingleProduct(singleProduct.qty=qty);





let newItem={
  id:Math.random(1,20),
  name:singleProduct.name,
  description:singleProduct.description,
  qty:singleProduct.qty,
  price:singleProduct.price,
  rating:singleProduct.rating,
  image:singleProduct.image
}


  await navigate('/cart',{state:singleProduct});
  }
  return (
    <>
 
<Col xs='3' md='4' style={themeStyles}>
    <Card style={{ width: '18rem',border:'0rem',padding:'1rem' }} >
      <Card.Img variant="top" style={{ height: '18rem',borderRadius:'1rem' }} src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Button size='sm' variant="primary" className='m-2' onClick={()=>{setQty(qty+1)}}>+</Button> 
       <input type="number" disabled value={qty} onBlur={()=>{validateQty()}}  style={{width:'4rem'}}/>
        <Button size='sm' variant="primary" className='m-2' onClick={()=>{setQty(qty-1)}}>-</Button>
        <br />
        <Button variant="primary" className='m-2' onClick={(e)=>{NavigateToDetailPage()}}>View</Button>
        <Button variant="primary" className='m-2' onClick={(e)=>{NavigateToCartPage()}}>Add</Button>
      </Card.Body>
    </Card>
 
    </Col>
    </>
  )
}
