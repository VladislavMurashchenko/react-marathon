import React from 'react';
import cn from 'classnames';

import s from './Layout.module.scss';

interface LayoutProps {
  className?: string;
  as?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

export default Layout;
