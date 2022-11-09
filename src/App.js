import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from './Pages';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
