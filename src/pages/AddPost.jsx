import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import baseurl from '../common';

export default function AddPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const authToken = localStorage.getItem('srt');

  const [token, setToken] = useState(localStorage.getItem('srt'));

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
    setToken(authToken);
  }, [authToken, navigate]);

  async function createPost(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${baseurl}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
          
        },
        body: JSON.stringify({
          title: title,
          image: image,
          content: content
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("result of the request is:"+result);
      // Navigate to the home page or another page after successful post creation
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }

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
