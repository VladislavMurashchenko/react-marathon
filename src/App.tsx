import React from 'react';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Layout from './components/Layout';
import Parallax from './components/Parallax';

import s from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <AppHeader />
      <main className={s.main}>
        <Layout>
          <Parallax />
        </Layout>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
