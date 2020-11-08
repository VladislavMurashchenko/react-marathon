import React from 'react';

import s from './MenuItem.module.scss';

type Props = {
  text: string;
};

const MenuItem: React.FC<Props> = ({ text }) => {
  return <div className={s.menuLink}>{text}</div>;
};

export default MenuItem;
