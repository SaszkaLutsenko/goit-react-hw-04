
import { MdImageSearch } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value;

    if (!searchQuery.trim()) {
      toast('Enter the query in the input field', { duration: 2500, position: 'top-center' });
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.container}>
         
          <label>
            <input
              name="searchQuery"
              type="text"
              autoComplete="off"
              placeholder="Search images and photos"
            />
          </label>
          <button type="submit"><MdImageSearch size={20} /></button>
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;