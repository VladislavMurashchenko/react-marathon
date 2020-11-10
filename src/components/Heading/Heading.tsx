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
      className: cn(s.heading, className, s[as]),
    },
    children,
  );
};

export default Heading;
