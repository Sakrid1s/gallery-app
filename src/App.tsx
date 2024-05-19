import { useEffect, useState } from 'react';
import { getUnsplashImages, UnsplashResImage } from './api/unsplash-api';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';
import ImageModal from './components/imageModal/ImageModal';
import './App.css';

interface SelectedImage {
  src: string;
  alt: string;
}

function App() {
  const [images, setImages] = useState<UnsplashResImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const data = await getUnsplashImages(searchValue, page);
        const res = data.results;
        setImages(prevImages => [...prevImages, ...res]);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    if (searchValue) {
      fetchImages();
    }
  }, [searchValue, page]);

  const handleSearch = async (inputValue: string) => {
    setSearchValue(inputValue);
    setPage(1);
    setImages([]);
  };

  const onLoadMoreBtnClick = async () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (img: SelectedImage) => {
    setIsOpen(true);
    setSelectedImage(img);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery imageArray={images} onImgClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={onLoadMoreBtnClick} />}
      <ImageModal
        image={selectedImage}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
