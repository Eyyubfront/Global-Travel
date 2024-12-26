import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Routing from './Routing';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <>
      <Routing user={user} setUser={setUser} />
    </>
  );
}

export default App;
