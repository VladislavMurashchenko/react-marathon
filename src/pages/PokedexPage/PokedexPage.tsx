import React, { useEffect, useState } from 'react';

import s from './PokedexPage.module.scss';

import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import { fetchPokemons, Pokemon } from '../../api/pokemons';
import Heading from '../../components/Heading';

enum Status {
  INITIAL = 'initial',
  LOADING = 'loading',
  ERROR = 'error',
  READY = 'ready',
}

const PokedexPage = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [status, setStatus] = useState(Status.INITIAL);

  useEffect(() => {
    setStatus(Status.LOADING);

    fetchPokemons({ limit: 100, offset: 0 })
      .then((data) => {
        setPokemons(data.pokemons);
        setTotalPokemons(data.total);
        setStatus(Status.READY);
      })
      .catch(() => {
        setStatus(Status.ERROR);
      });
  }, []);

  if (status === Status.ERROR) {
    return withLayout(<div>Something went wrong</div>);
  }

  if (status === Status.INITIAL || status === Status.LOADING) {
    return withLayout(<div>Loading...</div>);
  }

  return withLayout(
    <>
      <Heading as="h2" className={s.heading}>
        {totalPokemons} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      {pokemons.map((pokemon) => (
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
