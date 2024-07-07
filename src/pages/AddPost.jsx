import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function AddPost() {
  var [title,setTitle]=useState();
  var [image,setImage]=useState();
  var [content,setContent]=useState();

  async function createPost(event){
    event.preventDefault();
   fetch('http://localhost:3005/api/v1/post',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {id:Math.floor(Math.random()*1000),
        title:title,
        image:image,
        content:content
        }
      )
    }
    ).then(
      res=>{
        console.log(res);
      }
     


    );

  }

  function updateTitle(e){
    setTitle(e.target.value);
  }
  function updateImage(e){
    setImage(e.target.value);
  }
  function updateContent(e){
    setContent(e.target.value);
  }
  return (
    <div>
      <h1 className='m-3'>Add Post</h1>
      <hr />
      <div>
        <Form>
          <Form.Group className="m-3" controlId="title">
            <Form.Label>Post Title</Form.Label>
            <Form.Control type="text" onChange={updateTitle} placeholder="Title" />
          </Form.Group>

          <Form.Group className="m-3" controlId="url">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" onChange={updateImage} placeholder="Image url" />
          </Form.Group>

          <Form.Group className='m-3' controlId='content'>
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" onChange={updateContent} />
          </Form.Group>
          <Button className='m-3' variant="primary" type="submit" onClick={createPost}>
            Submit
          </Button>
          <Link to='/'>
              <Button className='m-3' variant="primary">Go Home</Button>
           </Link>
        </Form>
        
        
      </div>
    </div>
  )
}