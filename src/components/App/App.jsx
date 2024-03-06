import { useState, useEffect } from "react";
import { fetchImages } from "../..images-api";
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

  })
}

