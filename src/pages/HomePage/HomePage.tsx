import React from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

import s from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const history = useHistory();

  console.log(history);

  return (
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
          <Button onClick={() => history.push('/pokedex')}>See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
    </main>
  );
};

export default HomePage;
