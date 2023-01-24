import React from 'react'
import {Button,Form,Container} from 'react-bootstrap';

export default function AddProducts() {
  return (
    <Container className='mt-5'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="description" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="text" placeholder="qty" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>rating</Form.Label>
    <Form.Control type="text" placeholder="rating" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" placeholder="image" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>price</Form.Label>
    <Form.Control type="text" placeholder="price" />
  </Form.Group>
    
    
    
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  )
}
