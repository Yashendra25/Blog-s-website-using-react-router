import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './PostCard.css'
import { Link } from 'react-router-dom'

export default function PostCard({post}) {
  return (
    <div className='col-md-4 mb-4 d-flex'>
    <Card className='custom-card flex-grow-1'>
      <Card.Img variant="top" src={post.image} />
      <Card.Body className='custom-card-body'>
        <Card.Title className='custom-card-title'>{post.title}</Card.Title>
        <Card.Text className='custom-card-text'>
          {post.content.slice(0, 100)}...
        </Card.Text>
        <Link to={`/post/${post._id}`}>
          <Button className='custom-btn-primary'>View more</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
  )
}