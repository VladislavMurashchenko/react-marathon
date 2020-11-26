import React from 'react';
import { PokemonType } from '../../api/pokemons';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

type Props = {
  pokemon: PokemonType;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading as="h5" className={s.titleName}>
          {pokemon.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((pokemonType) => (
            <span key={pokemonType} className={s.label}>
              {pokemonType}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
