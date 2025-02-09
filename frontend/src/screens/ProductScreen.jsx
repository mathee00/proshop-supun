import { useParams } from 'react-router-dom';
import products from '../products';
import React from 'react';
import Product from '../components/Product';

const ProductScreen = () => {
  const { id:prodctId } = useParams();
  const product = products.find((p) => p._id === prodctId);
  console.log(product);

  return (
    <div>ProductScreen</div>
  )
}

export default ProductScreen