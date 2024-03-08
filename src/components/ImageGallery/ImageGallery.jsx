import style from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style.list}>
      {images.map(image => (
        <li className={style.item} key={image.id} >
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;