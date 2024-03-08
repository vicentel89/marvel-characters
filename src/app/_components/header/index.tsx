import Link from 'next/link';

import classes from './index.module.css';
import Logo from './logo';
import FavoriteCounter from './favorite-counter';

const Header = () => {
  return (
    <header className={classes.container}>
      <Link href="/" title="Marvel characters" itemScope>
        <span className="sr-only">Marvel characters</span>
        <Logo aria-hidden="true" />
      </Link>
      <FavoriteCounter />
    </header>
  );
};

export default Header;
