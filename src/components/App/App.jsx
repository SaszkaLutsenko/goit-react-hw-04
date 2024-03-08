import { useState, useEffect } from "react";
import { fetchImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMasage from "../ErrorMasage/ErrorMasage";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageInfo, setSelectedImageInfo] = useState({});

  useEffect(() => {
    const getImage = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchImages({ query, page });

        if (!results.length) {
          setIsEmpty(true);
          return;
        }
        setImages(prev => [...prev, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setIsError(true);
      } finally { 
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handelSearch = value => {
    if(value === query) return;
    setImages([]);
    setIsError(false);
    setQuery(value);
    setPage(1);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = () => {
    setSelectedImageInfo(value);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImageInfo({});
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {isError && (
        <ErrorMasage>Whoops, something went wrong! Please try reloading this page!</ErrorMasage>
      )}

      {images.length !== 0 && <ImageGallery images={images} openModal={openModal} />}

      {isEmpty && query && <ErrorMasage>There are no images</ErrorMasage>}

      {isVisible && (
        <LoadMoreButton disabled={isLoading} onClick={handleLoadMore}>
          {isLoading ? "Loading" : "Load more"}
        </LoadMoreButton>
      )}

      {isLoading && <Loader />}

      <ImageModal closeModal={closeModal} modalIsOpen={showModal} modal={selectedImageInfo} />
    </div>
  );
};

export default App;

