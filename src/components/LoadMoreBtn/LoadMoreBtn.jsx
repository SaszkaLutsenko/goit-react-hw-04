import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, children, disabled }) => (
  <button 
  onClick={onClick}
  disabled={disabled}
  className={style.btn}>{children}</button>
);

export default LoadMoreBtn;