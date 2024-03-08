import style from './ErrorMasage.module.css';

const ErrorMessage = ({ children }) => {
    return(
<div className={style.error}>{children}</div>
    )
};

export default ErrorMessage;