import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory, useNavigate } from "react-router";

export default function Login() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  async function loginCheck(newObj) {
    const query = `
        mutation {
            loginUser(mail:"${newObj.mail}") {       
            mail
            password
            role
            }
        }`;
    // fetchUser(queryCheckUser);
    await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }).then(async function (response) {
      let userData = await response.json();
      console.log("login-user", userData.data);
      setUser(userData.data.loginUser);
    });
  }
useEffect(()=>{
  if (user !== undefined) {
       console.log('user',user.role)
       sessionStorage.setItem("user", user.mail); //session storage
  

      if(user.role == "admin" && user.role !== null){


    alert("login successfull");
    navigate("/admin");
      }
      if(user.role == "user" && user.role !== null){
// console.log('user-role',user.mail);

        navigate("/products")
      }
      if(user.role == "vendor" && user.role !== null){


        navigate("/vendor")
      }else{
        return
      }
      // console.log('user',user);

  } else {
    return
    // alert("Invalid email and password",user);
  }
},[user])
  async function handleSubmit(event) {
    event.preventDefault();
    let form = document.forms.login;

    let newObj = {
      mail: form.mail.value,
      password: form.password.value,
    };
// if(newObj.mail ){
//   sessionStorage.setItem("user", user.mail); //session storage
// }


    // ----check user already exist ---

    await loginCheck(newObj);
// console.log('hbtn', user);

    //form.reset();
  }
  return (
    <div>
      <div className="container m-5 ">
        <Form
          name="login"
          style={{ height: "400px", width: "400px" }}
          onSubmit={handleSubmit}
        >
          {/* EMAIL FORM GROUP */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="mail"
              required
            ></Form.Control>
          </Form.Group>

          {/* PASSWORD FORM GROUP */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              required
            ></Form.Control>
          </Form.Group>

          <Button className="m-1" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
