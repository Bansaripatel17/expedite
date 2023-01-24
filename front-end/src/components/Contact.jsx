import React from 'react'
import '.././index.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Button  from 'react-bootstrap/Button'

export default function Contact() {
  return (
 <div className="wrapper">

    <div className='contact-container'>
        <Row md='12' className='pb-5'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="mark me as anonymous" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Row>
          <Row md='12'>
            <Col md='6'>
         
            <div className= 'text-card'>
            <LocationOnIcon fontSize='small'/>
        <b>Location</b>
     
        <p className='location-text'>300-Regina st,
        Waterloo,ON
       N2J-3B8  </p>
        </div>
            </Col>
         

            <Col md='6'>
            <div className= 'text-card'>
            <PhoneIcon fontSize='small'/>
        <b>Contact</b>

        <p className='contact-text'>
            <a className='contact-text' href="mailto:webmaster@example.com">
                Mail
                </a>
                <br />
                <a className='contact-text' href="tel:+4733378901">+47 333 78 901</a>
            </p>
        </div>
            </Col>

        
          </Row>
       
    </div>
 </div>
   
  )
}
