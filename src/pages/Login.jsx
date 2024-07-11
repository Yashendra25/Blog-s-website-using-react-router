import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import baseurl from '../common'
export default function Login() {
    const Navigate=useNavigate();
    var [username,setUsername]=useState();
    var [password,setPassword]=useState();
    function updateUsername(e){
        setUsername(e.target.value);
    }
    function updatePassword(e){
        setPassword(e.target.value);
    }
    function login(e){
        e.preventDefault();
        fetch(`${baseurl}/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username:username,password:bcrypt.hashSync(password)})
        }).then(res=>res.text()).then(
            token=>{
                if(token!='Auth failed!!'){
                    localStorage.setItem('srt',token);
                    Navigate('/post');
                }
                else{
                    alert('Invalid username or password');
                    console.log(token);
                }
            }).catch(err=>console.error(err));




        }
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={login}>
                    <Form.Group controlId="title" className='m-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={updateUsername} />
                    </Form.Group>
                    <Form.Group controlId="url" className='m-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={updatePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='m-3'>
                        Submit
                    </Button>
                </Form>
            </div>
        )
       
    }