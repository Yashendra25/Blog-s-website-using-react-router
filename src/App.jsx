
import './App.css'
import Button from 'react-bootstrap/Button';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function App() {

  return (
    <>
      <div className="App">
        <h1 className='header-text'>Yashendra 's Blog</h1>
        <div>
          <Link to='/add-post'>
            <Button>Add post</Button>
          </Link>
        </div>
      </div>
      <hr className='divider' />
      <PostList />
      
    </>
  )
}

export default App;
