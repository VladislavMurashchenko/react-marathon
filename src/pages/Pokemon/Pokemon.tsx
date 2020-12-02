import React from 'react';
import { PokemonType } from '../../api/pokemons';
import PokemonCard from '../../components/PokemonCard';
import useData, { DataStatus } from '../../hook/useData';

export type PokemonProps = {
  id: number | string;
};

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, status } = useData<PokemonType | null>({
    initialData: null,
    endpoint: 'getPokemon',
    query: { id },
  });

  if (status === DataStatus.LOADING) {
    return <div>loading...</div>;
  }

  if (status === DataStatus.ERROR || !data) {
    return <div>Something went wrong</div>;
  }

  return <PokemonCard pokemon={data} />;
};

export default Pokemon;
