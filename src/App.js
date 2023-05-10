import React from 'react';
import './App.css';
import Starwars from './component/Starwars';
import { Routes, Route } from 'react-router-dom';
import Details from './component/Deatils'


function App() {
  return (
   <div>
   <Routes >
      <Route path='/' element={<Starwars />}/>
      <Route path='/Details' element={<Details />}/>
</Routes>
   </div>
  );
}

export default App;
