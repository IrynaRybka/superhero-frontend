import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { Home } from '../pages/Home/Home';

const Hero = lazy(() => import('./HeroSearch/HeroSearch').then(module => ({...module, default: module.Hero})));

const HeroesDetails = lazy(() => import('./HeroDetailsComponent/HeroDetailsComponent').then(module => ({...module, default: module.HeroesDetails})));

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="hero" element={<Hero />} />
          <Route path="hero/:movieId" element={<HeroesDetails />}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};


