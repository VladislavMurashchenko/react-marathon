import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type Props = {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  width?: 'min' | 'max';
  size?: 'normal' | 'small';
};

const Button: React.FC<Props> = ({
  variant = 'primary',
  type = 'button',
  children,
  className = null,
  width = 'min',
  size = 'normal',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(s.button, className, {
        [s.maxWidth]: width === 'max',
        [s.secondary]: variant === 'secondary',
        [s.small]: size === 'small',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
