import React, { lazy, Suspense } from 'react'
//Styles
import './styles/App.css';
// Components
import * as ROUTES from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  Switch } from "react-router";

const SKULLZ = lazy(() => import('./components/Index'));
const TERMS = lazy(() => import('./components/terms'));


function App() {
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
