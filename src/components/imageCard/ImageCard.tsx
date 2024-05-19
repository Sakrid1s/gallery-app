import React from 'react';
import { UnsplashResImage } from '../../api/unsplash-api';

interface ImageCardProps {
  image: UnsplashResImage;
  onImgClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImgClick }) => {
  const { urls, description } = image;
  const { small } = urls;
  return (
    <div>
      <img src={small} alt={description || 'Image'} onClick={onImgClick} />
    </div>
  );
};

export default ImageCard;
