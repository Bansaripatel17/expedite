import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Completion() {
  const navigate=useNavigate();
  setTimeout(()=>{
    navigate('/products');
  },6000)
  return (
    <Card className='p-5'>
    <Card.Title className='text-center'>
    Completion ✅
      </Card.Title > 
      <Card.Text className='text-center'>Redirecting you to home</Card.Text>
      </Card>
  )
}
