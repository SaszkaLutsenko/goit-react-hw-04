import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css"

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={style.list}>
            {images.map( image =>(
                <li key={image.id} className={style.item}>
                    <ImageCard image={image} openModal={openModal}/>
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;