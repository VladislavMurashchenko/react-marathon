import React from 'react';
import { navigate } from 'hookrouter';

import s from './HomePage.module.scss';
import { LinkEnum } from '../../routes';

import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className={s.main}>
        <Layout className={s.layout}>
          <div className={s.textWrapper}>
            <Heading as="h1" className={s.heading}>
              <span className={s.bold}>Find</span> all your favorite{' '}
              <span className={s.bold}>Pokemon</span>
            </Heading>
            <Heading as="h2" className={s.heading}>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </Heading>
            <Button onClick={() => navigate(LinkEnum.POKEDEX)}>
              See pokemons
            </Button>
          </div>
          <Parallax />
        </Layout>
      </main>
      <AppFooter />
    </>
  );
};

export default HomePage;
