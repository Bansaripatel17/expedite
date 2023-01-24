import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap';
import ControlCarousel from './ControlledCarousel';

export default function ProductDetail() {
  // hook call 
  const location = useLocation();
  const navigate = useNavigate();

  const validateQty=()=>{
    if(qty>0 && qty <=9){
      return qty;
    }
    else{
      alert( "qty must be between 1 to 9");
      setQty(1);
    }
  }
  const [singleProduct,setSingleProduct] = useState({
    name:location.state.name,
    description:location.state.description,
    qty:location.state.qty,
    price:location.state.price,
    rating:location.state.rating,
    image:location.state.image

  });
  const [qty,setQty]=useState(parseInt(location.state.qty));

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
console.log(singleProduct);

  return (
 
    <Card style={{ width: '80%',height:'80%',display:"block" }} >
     <Row md='12'>
      <Col md='4' style={{display:"inline-block"}} >
      {/* <Card.Img variant="top" style={{ height: '22rem',width:'22rem' }} src={location.state.image} /> */}
      <ControlCarousel path={location.state.image}/>
      </Col>
      <Col md='4' style={{display:"inline-blocl"}}>
      
      <Card.Body>
        <Card.Title>{singleProduct.name}</Card.Title>
        <Card.Text>
         {singleProduct.description}
        </Card.Text>
      </Card.Body>
      <Button size='sm' variant="primary" className='m-2' onClick={()=>{setQty(qty+1)}}>+</Button> 
       <input type="number" disabled value={qty} onBlur={()=>{validateQty()}} />
        <Button size='sm' variant="primary" className='m-2' onClick={()=>{setQty(qty-1)}}>-</Button>
      <Button variant="primary" className='m-2' onClick={(e)=>{NavigateToCartPage()}}>Add</Button>

      </Col>
      </Row>
    </Card>


  )
}
