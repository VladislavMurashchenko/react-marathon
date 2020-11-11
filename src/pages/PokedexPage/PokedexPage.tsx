import React from 'react';

import s from './PokedexPage.module.scss';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import PokemonCard from '../../components/PokemonCard';

import pokemons from './pokemons';
import Layout from '../../components/Layout';

const PokedexPage = () => {
  return (
    <>
      <AppHeader />
      <main className={s.main}>
        <Layout className={s.layout}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Layout>
      </main>
      <AppFooter />
    </>
  );
};

export default PokedexPage;
