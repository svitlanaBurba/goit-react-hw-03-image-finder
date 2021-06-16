import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import {ImageGalleryContainer} from './ImageGalleryStyled';

class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ImageGalleryContainer
        onClick={event =>
          this.props.onItemClick(event.target.dataset.largeImageUrl)
        }
      >
        {this.props.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            imgURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ImageGalleryContainer>
    );
  }
}

ImageGallery.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};

export default ImageGallery;
