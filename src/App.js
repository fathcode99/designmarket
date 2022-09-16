import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import HomePages from './pages/homePages';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePages />}  />
      </Routes>
    </div>
  );
}

export default App;
