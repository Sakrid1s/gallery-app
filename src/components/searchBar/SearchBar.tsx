import React, { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  handleSearch: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const notify = () => toast.error('Please, fill in the field');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = (form.elements.namedItem('input') as HTMLInputElement)
      .value;
    if (inputValue.trim() === '') {
      notify();
      form.reset();
      return;
    }
    handleSearch(inputValue);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.formInput}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
        <button type="submit" className={css.formBtn}>
          Search
        </button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
};

export default SearchBar;
