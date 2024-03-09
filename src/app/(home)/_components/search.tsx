'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { useDebounce } from '@/app/_utils/debounce';
import SearchIcon from '@/app/_components/icons/search';
import classes from './search.module.css';

const Search = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(searchQuery || '');
  }, [searchQuery]);

  const debouncedReplace = useDebounce(() => {
    const url = searchValue ? `${pathname}?searchQuery=${searchValue}` : pathname;
    router.replace(url);
  }, 200);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);

    debouncedReplace();
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <SearchIcon aria-hidden="true" />
        <input
          value={searchValue}
          onChange={handleChange}
          className={classes.input}
          type="search"
          placeholder="Search a character..."
          aria-label="Search a character"
          autoComplete="off"
          aria-controls="search-results"
        />
      </div>
      {children}
    </div>
  );
};

export default Search;
