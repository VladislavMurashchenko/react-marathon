import React from 'react';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import s from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <AppHeader />
      <main className={s.main}>some content</main>
      <AppFooter />
    </div>
  );
};

export default App;
