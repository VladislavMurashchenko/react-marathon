import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import { ReactComponent as Logo } from './Logo.svg';
import s from './AppHeader.module.scss';
import { GENERAL_MENU } from '../../routes';

const AppHeader: React.FC = () => {
  const path = usePath();

  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <Logo className={s.pokemonLogo} />
        <nav className={s.menuWrap}>
          {GENERAL_MENU.map((menuItem) => (
            <A
              href={menuItem.link}
              className={cn(s.menuLink, {
                [s.activeLink]: path === menuItem.link,
              })}
            >
              {menuItem.title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
