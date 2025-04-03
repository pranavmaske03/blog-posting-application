import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import './App.css';
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className='flex flex-col min-h-screen bg-gray-400'>
      {/* Header - Stays at the top */}
      <Header />

      {/* Main Content - Pushes footer to bottom */}
      <main className='flex-grow p-6'>
        <Outlet />
      </main>

      {/* Footer - Stays at the bottom */}
      <Footer />
    </div>
  ) : null;
}

export default App;
