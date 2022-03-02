import React, { lazy, Suspense } from 'react'
//Styles
import './styles/App.css';
// Components
import * as ROUTES from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SKULLZ = lazy(() => import('./components/Index'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.SKULLZ} element={<SKULLZ />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
