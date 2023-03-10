import React from 'react';
import Proptypes from 'prop-types';
import './ImageContainer.scss';

function ImageContainer({ imgUrl, alt }) {
  return (
    <div className="image-container">
      <img src={imgUrl} alt={alt} />
    </div>
  );
}
ImageContainer.propTypes = {
  imgUrl: Proptypes.string,
  alt: Proptypes.string,
};

ImageContainer.defaultProps = {
  imgUrl:
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80',
  alt: 'maquina de escribir',
};

export default ImageContainer;
