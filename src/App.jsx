import { useEffect } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,useNavigate } from 'react-router-dom';
function App() {
var navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem('srt');
    if (!token) {
      navigate('/login');
    }
  }, [])

  return (
    <>
      <div className="App">
        <h1 className='header-text'>Yashendra 's Blog</h1>
        <div>
          <Link to='/add-post'>
            <Button>Add post</Button>
          </Link>
          <Button style={{margin:'10px'}} onClick={() => {
            localStorage.removeItem('srt');
            navigate('/login');
          }}>Logout</Button>
        </div>
      </div>
      <hr className='divider' />
      <PostList />
      
    </>
  )
}

export default App;
