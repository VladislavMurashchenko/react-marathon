import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setScreenX(e.screenX);
      setScreenY(e.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const moveWithMouse = (ratio: number) => {
    return {
      transform: `translate(${screenX * ratio}px, ${screenY * ratio}px)`,
    };
  };

  return (
    <div className={s.root}>
      <div style={moveWithMouse(0.04)} className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div style={moveWithMouse(0.03)} className={s.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div style={moveWithMouse(0.03)} className={s.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div style={moveWithMouse(0.01)} className={s.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div style={moveWithMouse(0.015)} className={s.pikachu}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
