import { objectKeysToCamelCase } from '../utils';
import Endpoint from './Endpoint';

export type Pokemon = {
  nameClean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
};

type PaginatedPokemons = {
  count: number;
  limit: string;
  offset: number;
  pokemons: Pokemon[];
  total: number;
};

// eslint-disable-next-line import/prefer-default-export
type FetchParams = {
  limit: number;
  offset: number;
};

export const fetchPokemons = ({
  limit,
  offset,
}: FetchParams): Promise<PaginatedPokemons> => {
  return fetch(`${Endpoint.pokemons}?limit=${limit}offset=${offset}`)
    .then((res) => res.json())
    .then(objectKeysToCamelCase);
};
