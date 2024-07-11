import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ViewPost from './pages/ViewPost'
import AddPost from './pages/AddPost'
import Login from './pages/Login'
const router=createBrowserRouter([
  {
    path:'/login',
    element:<Login />
  },
  {
    
    path:'/post',
    element:<App />
    
  },
  {
    path:'/post/:postId',
    element:<ViewPost />
  },
  {
    path:'/add-post',
    element:<AddPost />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
