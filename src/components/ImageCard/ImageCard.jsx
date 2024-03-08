import style from './ImageCard.module.css';

const ImageCard = ({
  image: { alt_description, urls, user, likes, description, color },
  openModal}) => {
  return (
    <div className={style.container} style={{ backgroundColor: color }}>
      <img  onClick={() => openModal({ alt_description, imgUrl: urls.regular, user, likes, description })}
        className={style.image}
        src={urls.small}
        alt={alt_description ?? 'Image not found'}
      />
    </div>
  );
};

export default ImageCard;