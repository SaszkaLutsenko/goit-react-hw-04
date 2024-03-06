import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick, children, disabled}) => (
    <button onClick={onClick}
     disabled={disabled}
      className={styles.btn}
      >{children}</button>
);

export default LoadMoreButton;