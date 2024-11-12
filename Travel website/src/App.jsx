import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Routing from './Routing'; // Bu Routing, yönlendirmeyi yapan component

function App() {
  const [user, setUser] = useState(null); // Kullanıcı bilgisini tutan state
  const location = useLocation(); // Sayfa konumunu almak için kullanıyoruz

  // Sayfa her değiştiğinde scroll'u en üst yapıyoruz
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgisini kontrol et
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')); // localStorage'dan kullanıcı verisini al
    if (userData) {
      setUser(userData); // Eğer kullanıcı verisi varsa, state'e set et
    }
  }, []); // Bu useEffect sadece component ilk defa render olduğunda çalışacak

  // Uygulama render olurken Routing component'ine user ve setUser props olarak geçiyoruz
  return (
    <>
      <Routing user={user} setUser={setUser} />
    </>
  );
}

export default App;
