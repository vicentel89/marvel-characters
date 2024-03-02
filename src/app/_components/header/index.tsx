import Link from 'next/link';

import classes from './index.module.css';
import Logo from './logo';
import FavoriteCounter from './favorite-counter';

const Header = () => {
  return (
    <header className={classes.container}>
      <Link href="/" title="Marvel characters">
        <Logo />
      </Link>
      <FavoriteCounter />
    </header>
  );
};

export default Header;
