import React, { useState } from 'react';
import './reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import { Main, Detail, Search } from './pages';
import { searchValue } from './context/search';

function App() {
  const [search, setSearch] = useState(); //검색어 저장
  return (
    <div className="App">
      <searchValue.Provider value={{ search, setSearch }}>
        <Routes>
          <Route path={PATH.MAIN} element={<Main></Main>}></Route>
          <Route path={PATH.Detail} element={<Detail></Detail>}></Route>
          <Route path={PATH.Search} element={<Search></Search>}></Route>
        </Routes>
      </searchValue.Provider>
    </div>
  );
}

export default App;
