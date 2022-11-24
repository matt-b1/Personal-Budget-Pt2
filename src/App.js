import React from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Register, Login, Budget } from './Pages';

import AuthContext from './Api/context/AuthProvider';

function App() {

  const { auth } = useContext(AuthContext);

  //console.log(auth.user);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}></Route>
        <Route path='/register' element={!auth.user ? (<Register />) : (<Navigate replace to='/budget'/>)}/>
        <Route path='/login' element={!auth.user ? (<Login />) : (<Navigate replace to='/budget'/>)}/>
        <Route path='/budget' element={<Budget />}/>
      </Routes>
    </div>
  );
}

export default App;
