import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

const Heading: React.FC<Props> = ({ as, children, className }) => {
  return React.createElement(
    as,
    {
      className: cn(s.heading, className, {
        [s.h1]: as === 'h1',
        [s.h2]: as === 'h2',
        [s.h3]: as === 'h3',
        [s.h4]: as === 'h4',
        [s.h5]: as === 'h5',
        [s.h6]: as === 'h6',
      }),
    },
    children,
  );
};

export default Heading;
