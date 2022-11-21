import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Register, Login, Budget } from './Pages';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate to='/login'/> }></Route>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/budget' element={<Budget />}/>
      </Routes>
    </div>
  );
}

export default App;
