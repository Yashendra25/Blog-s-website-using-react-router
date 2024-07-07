import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import './PostList.css';

export default function PostList() {
   var [posts,setpost]=useState();
   useEffect(
    ()=>{
      async function getPost(){
        var res= await fetch('http://localhost:3005/api/v1/post/all');
        var data=await res.json();
        setpost(data);
      
    }
    getPost();
  },[])
  return (
    <div className='post-list-container'>
       {
       posts && posts.map((p)=>(
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  )
}