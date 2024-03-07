import classes from './search.module.css';
import SearchIcon from '@/app/_components/icons/search';

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <SearchIcon />
        <input
          className={classes.input}
          type="text"
          placeholder="Search a character..."
          aria-label="Search a character"
        />
      </div>
      <span className={classes.result}>1 Result</span>
    </div>
  );
};

export default Search;
