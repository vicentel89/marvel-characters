import classes from './search.module.css';
import SearchIcon from '@/app/_components/icons/search';

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <SearchIcon aria-hidden="true" />
        <input
          className={classes.input}
          type="search"
          placeholder="Search a character..."
          aria-label="Search a character"
          autoComplete="off"
          aria-controls="search-results"
        />
      </div>
      <span className={classes.result} id="search-results" role="log" aria-live="polite">
        1 Result
      </span>
    </div>
  );
};

export default Search;
