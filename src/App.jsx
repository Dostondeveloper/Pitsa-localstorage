import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Reg from "./components/Reg";
import ProtectedRoute from "./components/ProtectedRoute";
import { useGlobalContext } from './context';


const App = () => {
 
  const {user,
     setUser, 
     signUp, 
     setSignUp,
     handleLogin,
     handleLogout
    } =  useGlobalContext()
 
  return (
    <div className='container'>
 
      <header>
        <nav>
          <Navbar
            signUp={signUp}
            setSignUp={setSignUp}
            user={user}
            handleLogout={handleLogout}
          />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/cart' element={<Cart user={user} />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/reg" element={<Reg />} />
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;