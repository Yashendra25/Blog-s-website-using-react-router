import './ViewPost.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function ViewPost() {
  var { postId } = useParams();
  var [post, setPost] = useState();
  useEffect(() => {
    async function getPost() {
      var res = await fetch(`http://localhost:3005/api/v1/post/${postId}`);
      var data = await res.json();
      setPost(data);
    }
    getPost();
  }, [])
  return (
    <div className='container'>
      <h1 className='post-title m-3 p-3'>{post?.title}</h1>
      <hr />
      <div className='post-body m-3'>
        <div className='post-img-div m-3 p-3'>
          <img className='post-img' src={post?.image} alt="" />
        </div>
        <div className='post-content m-3 p-3'>
          {post?.content}

        </div>
      </div>
    </div>
  )
}