import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Row,Col,Button} from 'react-bootstrap'
import { useHistory,useNavigate } from 'react-router'
import { useState,useEffect } from 'react'

export default function Profile() {
const [user,setUser]=useState();
const mail=sessionStorage.getItem("user");


        const query = `
        mutation {
            userByfirstName(mail:"${mail}"
                          
                            ) {
            _id
            firstname
            lastname
            mail
            password
            username
          
            }
        }`;
        async function fetchUser(newObj){
            console.log('fetchuser',newObj);
            // const mail=sessionStorage.getItem("user");
        // fetchUser(queryCheckUser);
        await fetch("http://localhost:4000/graphql",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({query}),
           }).then(
            async function (response){
                let userData = await response.json();
                console.log('userData',userData);
               setUser(userData.data.userByfirstName);
            //    console.log('--user--',user._id);
           

            }
           );
    
    
    }
useEffect(() => {
  fetchUser()

  
}, [])


    async function handleSubmit(event) {
        event.preventDefault();
        let form = document.forms.register;

        let newObj = {
            _id:user._id,
            firstname: form.firstname.value, 
            lastname: form.lastname.value, 
            mail: form.mail.value, 
            password: form.password.value, 
            username: form.username.value, 
            
        }
        fetchUser(newObj)
     
     console.log('Profile-newObj',user._id);
    const query = `
    mutation {
        updateUser(modifyUser:{_id:"${newObj._id}",firstname:"${newObj.firstname}",lastname:"${newObj.lastname}",mail:"${newObj.mail}",password:"${newObj.password}",username:"${newObj.username}"}) 
       
    }`;
    await fetch("http://localhost:4000/graphql",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({query}),
       }).then(
        async function (response){
            let userData = await response.json();
            console.log(userData.data.updateUser);
           
        }
       );

       if(user._id){
        alert("successfully updated");
    }else{
        alert("An error ");
    }

    }

  return (
    <div>
  <div className="container m-5 ">
  <Form name='register' style={{height:"400px",width:"400px"}} onSubmit={handleSubmit}>
      <Row>
      {/* Firstname FORM GROUP */}
      <Col>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter firstname" name="firstname"  required></Form.Control>
         
      </Form.Group>
      </Col>
      {/* Lastname FORM GROUP */}
      <Col>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter lastname" name="lastname"   required></Form.Control>
         
      </Form.Group>
      </Col>
      </Row>
      {/* EMAIL FORM GROUP */}
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="mail" defaultValue={mail} required></Form.Control>
         
      </Form.Group>

      {/* PASSWORD FORM GROUP */}
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password" required></Form.Control>
          

       </Form.Group>
        {/* MObile FORM GROUP */}
      <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name="username"  required></Form.Control>
          
       </Form.Group>
       <Button className='m-1' type="submit">Submit</Button>
      
  </Form>
 
</div>
 

</div>
  )
}
