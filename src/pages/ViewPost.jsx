import './ViewPost.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import baseurl from '../common'
export default function ViewPost() {
  var { postId } = useParams();
  var [post, setPost] = useState();
  useEffect(() => {
    async function getPost() {
      let authtoken=localStorage.getItem('srt');
      if(!authtoken){
       navigate('/login');
      }
      var res = await fetch(`${baseurl}/post/${postId}`, {headers:{'Authorization':`Bearer ${authtoken}`}});      var data = await res.json();
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