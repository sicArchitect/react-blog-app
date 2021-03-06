import { Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getPosts } from '../../redux/postRedux';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../utils/dateToStr';

const Posts = () => {
  const posts = useSelector(getPosts);

  return (
    <section>
      <Row xs={12} md={2} className="g-2">
        {posts.map((post) => (
          <Col key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-3">{post.title}</Card.Title>
                <Card.Subtitle className="mb-2">
                  <b>Author:</b>
                  {post.author}
                </Card.Subtitle>
                <Card.Subtitle className="mb-3">
                  <b>Published:</b>
                  {dateToStr(post.publishedDate)}
                </Card.Subtitle>
                <Card.Text>
                  <b>Category:</b> {post.category}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link to={'/post/' + post.id}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Posts;
