import { IoSearchOutline } from "react-icon/io5";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit}) => {
    const handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.searchQuery.value;

        if(!searchQuery.trim()) {
            toast('Type something to search', { duration: 2000, position: 'top-right' });
      return;
    }
    onSubmit(searchQuery);
    };

    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.searchBox}>
                    <button type="submit">
                        <IoSearchOutline size={24}/> 
                    </button>
                    <label>
                        <input
                        name="searchQuery" 
                        type="text"
                        autoFocus
                        autoComplete="off"
                        placeholder="Search images and photos"
                         />
                    </label>
                </div>
            </form>
            <Toaster />

        </header>
    )
}

export default SearchBar;