
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
          <button type="submit"><MdImageSearch size={20} /></button>
          <label>
            <input
              name="searchQuery"
              type="text"
              autoFocus
              autoComplete="off"
              placeholder="what do you want to see?"
            />
          </label>
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;