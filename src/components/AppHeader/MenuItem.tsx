import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './MenuItem.module.scss';

type Props = {
  text: string;
  navigateTo?: string;
};

const MenuItem: React.FC<Props> = ({ text, navigateTo = null }) => {
  return navigateTo ? (
    <NavLink
      to={navigateTo}
      activeClassName={s.activeLink}
      className={s.menuLink}
    >
      {text}
    </NavLink>
  ) : (
    <div className={s.menuLink}>{text}</div>
  );
};

export default MenuItem;
