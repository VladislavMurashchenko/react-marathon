import React from 'react';
import { useRoutes } from 'hookrouter';

import s from './App.module.scss';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const currentRoute = useRoutes(routes);

  return <div className={s.wrapper}>{currentRoute || <NotFoundPage />}</div>;
};

export default App;
