import React from 'react';
import './reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import { Main, Detail } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PATH.MAIN} element={<Main></Main>}></Route>
        <Route path={PATH.Detail} element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
