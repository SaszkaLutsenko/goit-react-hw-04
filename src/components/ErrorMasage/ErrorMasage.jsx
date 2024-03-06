import style from "./ErrorMasage.module.css";

const ErrorMasage = ({ children }) => <div className={style.error}>{ children }</div>
export default ErrorMasage;