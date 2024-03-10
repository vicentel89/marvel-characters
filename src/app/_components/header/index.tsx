import Link from 'next/link';

import classes from './index.module.css';
import Logo from './logo';
import FavoriteCounter from './favorite-counter';
import { preloadGetAllCharacters, config } from '@/modules/characters/application';

const Header = () => {
  preloadGetAllCharacters(config.characterRepository);

  return (
    <header className={classes.container}>
      <Link href="/" title="Marvel characters" itemScope>
        <Logo title="Marvel characters" titleId="logo" />
      </Link>
      <Link href="/favorites" title="Favorite characters">
        <FavoriteCounter />
      </Link>
    </header>
  );
};

export default Header;
