import Link from 'next/link';

import classes from './index.module.css';
import Logo from './logo';
import FavoriteCounter from './favorite-counter';

const Header = () => {
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
