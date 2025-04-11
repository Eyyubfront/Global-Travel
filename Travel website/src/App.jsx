import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Routing from './Routing';

function App() {
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

 

  return (
    <>
      <Routing  />
    </>
  );
}

export default App;
