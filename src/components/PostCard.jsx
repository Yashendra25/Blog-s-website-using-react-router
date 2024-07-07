import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './PostCard.css'
import { Link } from 'react-router-dom'

export default function PostCard({post}) {
  return (
    <Card className='card'>
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.content.slice(0, 100)}...
        </Card.Text>
        <Link to={`/post/${post.id}`}>
            <Button variant="primary">View more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}