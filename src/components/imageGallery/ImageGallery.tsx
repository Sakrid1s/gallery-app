import React from 'react';
import { UnsplashResImage } from '../../api/unsplash-api';
import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  imageArray: UnsplashResImage[];
  onImgClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  imageArray,
  onImgClick,
}) => {
  return (
    <div>
      <ul className={css.gallery}>
        {imageArray.map(img => (
          <li key={img.id} className={css.galleryImg}>
            <ImageCard imageArray={img} onImgClick={onImgClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
