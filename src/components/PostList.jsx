import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import './PostList.css';
import baseurl from '../common';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostList() {
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array

  useEffect(() => {
    const authToken = localStorage.getItem('srt');

    async function getPost() {
      try {
        const res = await fetch(`${baseurl}/post`, {
          headers: { 'Authorization': `Bearer ${authToken}` }
        });
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Set posts to an empty array in case of error
      }
    }

    getPost();
  }, []);

  return (
    <div className='container my-5'>
      <div className='row gx-4 gy-4'>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}
