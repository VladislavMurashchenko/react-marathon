import React from 'react';

import s from './AppFooter.module.scss';

const AppFooter = () => {
  return (
    <footer className={s.root}>
      <div>
        <span>Make with</span>{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>
      </div>
      <div>Our Teams</div>
    </footer>
  );
};

export default AppFooter;
