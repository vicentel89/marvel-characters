import { config, getCharacters } from '@/modules/characters/application';
import classes from './search.module.css';
import SearchIcon from '@/app/_components/icons/search';

const Search = async () => {
  const characters = await getCharacters(config.characterRepository);

  const resultCount = characters.length;
  const resultText = resultCount === 1 ? 'result' : 'results';

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
        {resultCount} {resultText}
      </span>
    </div>
  );
};

export default Search;
