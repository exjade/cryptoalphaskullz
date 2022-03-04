import React, { lazy, Suspense, useEffect } from 'react'
//Styles
import './styles/App.css';
// Components
import * as ROUTES from './constants/routes';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

const SKULLZ = lazy(() => import('./components/Index'));
const TERMS = lazy(() => import('./components/terms'));
const NotFound = lazy(() => import('./pages/NotFound.js'));


function App() {
  useEffect(() => {
    ReactGA.initialize('G-8KL9FP56MF');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path={ROUTES.SKULLZ} element={<SKULLZ />} />
            <Route exact path={ROUTES.TERMS} element={<TERMS />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
