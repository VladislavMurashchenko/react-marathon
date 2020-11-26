import React, { useState } from 'react';

import s from './PokedexPage.module.scss';

import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import { PaginatedPokemons, PokemonType } from '../../api/pokemons';
import Heading from '../../components/Heading';
import useData, { DataStatus } from '../../hook/useData';

const nullPokemonsData: PaginatedPokemons = {
  count: 0,
  total: 0,
  limit: '',
  offset: 0,
  pokemons: [],
};

const PokedexPage = () => {
  const [searchName, setSearchName] = useState('');
  const { data: pokemonsData, status } = useData<PaginatedPokemons>({
    endpoint: 'getPokemons',
    initialData: nullPokemonsData,
    query: {
      name: searchName,
    },
    deps: [searchName],
  });

  if (status === DataStatus.ERROR) {
    return withLayout(<div>Something went wrong</div>);
  }

  if (status === DataStatus.LOADING) {
    return withLayout(<div>Loading...</div>);
  }

  return withLayout(
    <>
      <Heading as="h2" className={s.heading}>
        {pokemonsData.total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      {pokemonsData.pokemons.map((pokemon: PokemonType) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </>,
  );
};

export default PokedexPage;

const withLayout = (reactNode: React.ReactNode): JSX.Element => {
  return (
    <main className={s.main}>
      <Layout className={s.layout}>{reactNode}</Layout>
    </main>
  );
};
