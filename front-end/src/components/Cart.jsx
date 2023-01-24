import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cart() {
  // hook call 
  const location = useLocation();
  const navigate = useNavigate();

  const [items,setItems]=useState(JSON.parse(localStorage.getItem("items")) || []);
  var total ;
  var perc=13;
  var pst=0;
  var shipping=0;

function handleDelete(e){
  console.log(items);
console.log('delete',e);
var arr2=items.filter((x,i)=> i !== 2);
console.log('arr2',arr2);
setItems(arr2);


}
function handleCheckOut(){
  // console.log('checkout');
  navigate('/payment');
}
async function handleProduct(e){
  console.log('handleProduct',e);
  await navigate('/productdetail',{state:e});

}
console.log("cart-items",items);

  return (
    <>
    <Row>
    {items.map((e,key)=>{
        return (
          <Card style={{ width: '40%' }} className="m-5 d-inline-block" key={key}>
          <Row md='12' style={{display:'inline-block'}} >
            <Col md='10' style={{display:'inline-block'}} onClick={()=>{handleProduct(e)}}>
          
        
        <CartItem name={e.name} qty={e.qty} image={e.image} price={e.price}/>
      
    
    

    
            </Col>

            <Col md='2' style={{display:'inline-block'}}>
            <Button  style={{marginLeft:'6rem',borderRadius:'1em',display:'inline-block'}}  onClick={()=>{handleDelete(key)}} variant='danger'>
     <DeleteIcon style={{fontSize:'20px'}} />
      </Button>
            </Col>
  
        </Row>
        </Card>
        )
    })}
  </Row>
      <Row md='12'>
      <Card style={{ width: '40%' }} className="m-5 p-5">
    <Col md='12' style={{display:'inline-block'}}>
    <Card.Title style={{display:'inline-block'}}>Total before tax:</Card.Title>
    <Card.Text style={{display:'inline-block'}}>
       $ {subtotal(items)}
      </Card.Text>
    </Col>
  
      <Row md='12' className='p-2'>
      <Col md='6' style={{display:'inline-block'}}>
      <Card.Text className='d-inline-block'>
      + Shipping
      </Card.Text>
      </Col>
      <Col md='6' style={{display:'inline-block'}}>

      <Card.Text className='d-inline-block'>
     + {shipping}
      </Card.Text>
      </Col>
      </Row>
   <Row md='12' className='p-2'>
   <Col md='6' style={{display:'inline-block'}}>
   <Card.Text className='d-inline-block'>
       + Estimated GST/HST
      </Card.Text>
      </Col>
      <Col md='6' style={{display:'inline-block'}}>
      <Card.Text className='d-inline-block'>
       + {percentage((subtotal(items)),perc)}
      </Card.Text>
      </Col>
   </Row>
    <Row md='12' className='p-2'>
    <Col md='6' style={{display:'inline-block'}}>
    <Card.Text>
       + Estimated PST/RST/QST
      </Card.Text>
      </Col>
      <Col md='6' style={{display:'inline-block'}}>
      <Card.Text>
       + {pst}
      </Card.Text>
      </Col>
    </Row>
    <Row md='12' className='p-2'>
      <hr />
    <Col md='6' style={{display:'inline-block'}}>
    <Card.Text>
       + Total Amount
      </Card.Text>
      </Col>
      <Col md='6' style={{display:'inline-block'}}>
      <Card.Text className='h4'>
      $ {percentage((subtotal(items)),perc)+(subtotal(items))}
      </Card.Text>
      </Col>
    </Row>
      
      
     

    <Button onClick={()=>{handleCheckOut()}} >
Checkout
      </Button>
      </Card>
    </Row>
    </>

  )
}
function subtotal(items){
  return items.reduce((total,currentValue)=> total = total + Number(currentValue.price),0);
}
function percentage(num,perc){
  return (num/100)*perc;

}
function CartItem(props){
console.log('cart',props);



  return(
    // <Row xs='3' md='3' className='m-5' >
      <Card.Body >

        <Col md='6' style={{display:'inline-block'}}>
      <Card.Img variant="card-img-left" style={{ height: '10rem',width:'6rem',borderRadius:'0.66rem' }} src={props.image} />
      </Col>
      <Col md='6' style={{display:'inline-block',paddingTop:'1rem'}}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Qty: {props.qty}
        </Card.Text>
        <Card.Text>
        Price:$ {props.price}
        </Card.Text>

        </Col>
       
      </Card.Body>
      
  
    // </Row>
  )
}

