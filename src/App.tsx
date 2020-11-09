import React from 'react';
import { useRoutes } from 'hookrouter';

import s from './App.module.scss';
import routes from './routes';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const currentRoute = useRoutes(routes);

  return <div className={s.wrapper}>{currentRoute || <NotFound />}</div>;
};

export default App;
