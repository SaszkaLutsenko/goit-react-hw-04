import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGalery.module.css"

const ImageGalery = ({ images, openModal }) => {
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

export default ImageGalery;