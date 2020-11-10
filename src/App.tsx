import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import s from './App.module.scss';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className={s.wrapper}>
        <AppHeader />
        <Switch>
          <Route path="/pokedex">
            <PokedexPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
