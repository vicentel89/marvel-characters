'use client';
import { useState, useTransition } from 'react';
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
  const search = searchParams.get('search');
  const [searchValue, setSearchValue] = useState(search || '');

  const debouncedReplace = useDebounce(() => {
    const url = searchValue ? `${pathname}?search=${searchValue}` : pathname;
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
          aria-controls="search-results"
          autoComplete="off"
          data-test="character-search-input"
        />
      </div>
      {children}
    </section>
  );
};

export default Search;
