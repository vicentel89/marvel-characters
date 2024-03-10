'use client';
import { useEffect, useState, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import clsx from 'clsx';

import { useDebounce } from '@/app/_utils/debounce';
import SearchIcon from '@/app/_components/icons/search';
import classes from './search.module.css';

const Search = ({ children }: { children?: React.ReactNode }) => {
  const [isLoading, startTransition] = useTransition();
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
    startTransition(() => router.replace(url));
  }, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);

    debouncedReplace();
  };

  return (
    <section className={classes.container}>
      <h2 id="character-search" className="sr-only">
        Search a character
      </h2>
      <div
        className={clsx(classes.inputContainer, { [classes.inputContainerLoading]: isLoading })}
        role="search"
      >
        <SearchIcon aria-hidden="true" />
        <input
          value={searchValue}
          onChange={handleChange}
          className={classes.input}
          placeholder="Search a character..."
          aria-labelledby="character-search"
          autoComplete="off"
          aria-controls="search-results"
        />
      </div>
      {children}
    </section>
  );
};

export default Search;
