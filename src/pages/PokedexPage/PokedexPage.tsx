import React from 'react';

import s from './PokedexPage.module.scss';

import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';

import pokemons from './pokemons';

const PokedexPage = () => {
  return (
    <main className={s.main}>
      <Layout className={s.layout}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Layout>
    </main>
  );
};

export default PokedexPage;
