import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Row,Col,Button} from 'react-bootstrap'
import { useHistory,useNavigate } from 'react-router'
import { useState } from 'react'


export default function Register() {
const [user,setUser]=useState();
  const navigate = useNavigate();
   
async function fetchUser(newObj){
    console.log('fetchuser',newObj);
    
    const query = `
    mutation {
        userByfirstName(mail:"${newObj.mail}"
                      
                        ) {
    
        firstname
        lastname
        mail
        password
        username
      
        }
    }`;
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
            console.log(userData);
           setUser(userData);
        }
       );


}

async function insertUser(newObj){
    console.log('type',typeof(newObj.firstname));
        const query = `
        mutation {
            addUser(firstname:"${newObj.firstname}",
                          lastname:"${newObj.lastname}",
                          mail:"${newObj.mail}",
                          password:"${newObj.password}",
                          username:"${newObj.username}",
                          role:"${newObj.role}",
                            ) {
   
            firstname
            lastname
            mail
            password
            username
            role
          
            }
        }`;
       const response = await fetch("http://localhost:4000/graphql",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({query}),
       });
}



   async function handleSubmit(event) {
        event.preventDefault();
        let form = document.forms.register;

        let newObj = {
            firstname: form.firstname.value, 
            lastname: form.lastname.value, 
            mail: form.mail.value, 
            password: form.password.value, 
            username: form.username.value, 
            role:form.role.value,
        }

        // ----check user already exist ---
 
     await fetchUser(newObj);
   
     

        console.log('user',user);
        if (user === undefined){
            insertUser(newObj);
            alert("Registration successfull");
            navigate("/login");
        }else{
            alert("Email adress already exists");
        }
     

  

        
       
        //form.reset();
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
                   <Form.Control type="text" placeholder="Enter firstname" name="firstname" required></Form.Control>
                  
               </Form.Group>
               </Col>
               {/* Lastname FORM GROUP */}
               <Col>
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>Last name</Form.Label>
                   <Form.Control type="text" placeholder="Enter lastname" name="lastname" required></Form.Control>
                  
               </Form.Group>
               </Col>
               </Row>
               {/* EMAIL FORM GROUP */}
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>Email Address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" name="mail" required></Form.Control>
                  
               </Form.Group>

               {/* PASSWORD FORM GROUP */}
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Enter password" name="password" required></Form.Control>
                   

                </Form.Group>
                 {/* MObile FORM GROUP */}
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>UserName</Form.Label>
                   <Form.Control type="text" placeholder="Enter username" name="username"required></Form.Control>
                   
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Role</Form.Label>
                  
                   <select id="status" name="role">
            {["admin","user","vendor"].map((e,key)=>
            <option  key={key}>{e}</option>
    )}
            </select>
                </Form.Group>
                <Button className='m-1' type="submit">Submit</Button>
               
           </Form>
          
        </div>
          

    </div>
  )
}
