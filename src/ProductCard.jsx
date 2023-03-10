import React from 'react';
import ImageContainer from './ImageContainer';
import Title from './Title';
import './ProductCard.scss';

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__images">
        <ImageContainer />
        <ImageContainer imgUrl="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG9iamVjdCUyMHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
      </div>
      <div className="d-flex">
        <Title />
        {/* <h2>$1</h2> */}
      </div>
    </div>
  );
}

export default ProductCard;
