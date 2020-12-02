import React from 'react';
import { useRoutes } from 'hookrouter';

import s from './App.module.scss';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App: React.FC = () => {
  const currentRoute = useRoutes(routes);

  if (!currentRoute) {
    return (
      <div className={s.wrapper}>
        <AppHeader />
        <NotFoundPage />
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <AppHeader />
      <div className={s.maxHeight}>{currentRoute}</div>
      <AppFooter />
    </div>
  );
};

export default App;
