import Modal from 'react-modal';
import { BiSolidLike } from "react-icons/bi";
import style from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: 32,
  },
};

const ImageModal = ({
  closeModal,
  modalIsOpen,
  modal: { user, likes, description, alt_description, imgUrl },
}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={style.wrapper}>
        <img className={style.image} src={imgUrl} alt={alt_description} />
      </div>
      <div className={style.thumb}>
        <div className={style.user}>
          <img
            className={c.avatar}
            src={user?.profile_image.small}
            alt={alt_description ?? 'Unrecognized image'}
          />
          <span>@{user?.username}</span>
        </div>
        <div className={style.likes}>
          <BiSolidLike size={20} />
          <span>{likes}</span>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;

