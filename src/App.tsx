import React from 'react';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Layout from './components/Layout';
import Parallax from './components/Parallax';
import Button from './components/Button';
import Heading from './components/Heading';

import s from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <AppHeader />
      <main className={s.main}>
        <Layout className={s.layout}>
          <div className={s.textWrapper}>
            <Heading as="h1">
              <span className={s.bold}>Find</span> all your favorite{' '}
              <span className={s.bold}>Pokemon</span>
            </Heading>
            <Heading as="h2">
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </Heading>
            <Button onClick={() => {}}>See pokemons</Button>
          </div>
          <Parallax />
        </Layout>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
