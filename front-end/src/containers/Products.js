import React from 'react'
import Product from '../components/Product'
import { useQuery, gql } from '@apollo/client';
// import { graphql } from 'graphql';
import Row from 'react-bootstrap/Row';
import FadeCarousel from '../components/FadeCarousel';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box'

const allProducts = gql`
{
  products{
    name,
    description,
    qty,
    price,
    rating,
    image
  }
}
`
 function Products () {
 
 
    
    const { loading, error, data } = useQuery(allProducts);
  console.log(data);
    if (loading) return  ( <><Box sx={{ display: 'flex' }}>
    <LinearProgress color="success" />
  </Box></>);

    if (error)
    {

      // console.log(error);
      return <p>Error :(</p>;
    }
  
  
    return (
      <div className='movies'>
        <FadeCarousel />
      <Row>
{data.products.map((e,key)=>{
    return<Product key={key} name={e.name} description={e.description} qty={e.qty} price={e.price} rating={e.rating} image={e.image} />
})}
</Row>
      </div>
    )
  
}

export default Products;
