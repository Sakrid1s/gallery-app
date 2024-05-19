import React from 'react';
import { UnsplashResImage } from '../../api/unsplash-api';

interface ImageCardProps {
  imageArray: UnsplashResImage;
  onImgClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageArray, onImgClick }) => {
  const { urls, description } = imageArray;
  const { small, regular } = urls;
  const handleClick = () => {
    onImgClick(regular);
  };
  return (
    <div>
      <img src={small} alt={description || 'Image'} onClick={handleClick} />
    </div>
  );
};

export default ImageCard;
