import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import React from 'react';
//import Product from '../components/Product';

const ProductScreen = () => {
  const { id:productId } = useParams();
  const product = products.find((p) => p._id === productId);
  //console.log(product);

  return <>
    {/* Creating the back link */}
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>
    <Row>

      {/* First column with image */}
      <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      
      {/* Second column with name and others */}
      <Col md={4}>
       <ListGroup variant='flush'>
        <ListGroup.Item>
          <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Rating value={product.rating} text={`${product.
            numReviews} reviews`} />
        </ListGroup.Item>
        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
        <ListGroup.Item>Description: {product.description}</ListGroup.Item>

       </ListGroup>
      </Col>
      
      {/* s */}
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Stats:</Col>
                <Col>
                  <strong>{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button className='btn-block' type='button'
              disabled={product.countInStock == 0}>
                Add To Cart
              </Button>
            </ListGroup.Item>

          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>;
}

export default ProductScreen