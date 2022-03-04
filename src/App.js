import React, { lazy, Suspense, useEffect } from 'react'
//Styles
import './styles/App.css';
// Components
import * as ROUTES from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

const SKULLZ = lazy(() => import('./components/Index'));
const TERMS = lazy(() => import('./components/terms'));


function App() {
  useEffect(() => { 
    ReactGA.initialize('G-8KL9FP56MF');
    ReactGA.pageview(window.location.pathname + window.location.search);
  } , []);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTES.SKULLZ} element={<SKULLZ />}
              />
              <Route path={ROUTES.TERMS} element={<TERMS />} />
            </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
