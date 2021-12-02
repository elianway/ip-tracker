import React from 'react';
import { useState, useEffect } from 'react';
import Background from './components/Background';
import Map from './components/Map';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [ipData, setIpData] = useState([]);
  const [center, setCenter] = useState([]);

  const handleFetch = async () => {
    try {
      const address = document.getElementById('ipinput').value;
      const res = await fetch('http://ip-api.com/json/' + address);
      const resJson = await res.json();
      setIpData(resJson);
      setCenter({
        lat: resJson.lat,
        lng: resJson.lon
      });
    } catch {
      alert('Please enter a valid IP address.');
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main>
      <Background />
      <Map center={center} />
      <div id="display-container">
        <Search
          handleFetch={handleFetch}
        />
        <Display data={ipData} />
      </div>
    </main>
  );
}

export default App;
