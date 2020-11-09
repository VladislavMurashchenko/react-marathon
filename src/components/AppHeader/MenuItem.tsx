import React from 'react';
import { A } from 'hookrouter';

import s from './MenuItem.module.scss';

type Props = {
  text: string;
  navigateTo?: string;
};

const MenuItem: React.FC<Props> = ({ text, navigateTo = '#' }) => {
  return (
    <A href={navigateTo} className={s.menuLink}>
      {text}
    </A>
  );
};

export default MenuItem;
