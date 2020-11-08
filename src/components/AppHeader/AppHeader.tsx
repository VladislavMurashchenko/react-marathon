import React from 'react';

import { ReactComponent as Logo } from './Logo.svg';
import s from './AppHeader.module.scss';

import MenuItem from './MenuItem';

const AppHeader: React.FC = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <Logo className={s.pokemonLogo} />
        <nav className={s.menuWrap}>
          <MenuItem text="Home" />
          <MenuItem text="Pokédex" />
          <MenuItem text="Legendaries" />
          <MenuItem text="Documentation" />
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
