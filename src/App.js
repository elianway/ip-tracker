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
      const centerValue = {
        lat: resJson.lat,
        lng: resJson.lon
      };
      setIpData(resJson);
      setCenter(centerValue);
    } catch {
      alert('Please enter a valid IP address.');
    }
  }

  //try calling handlesubmit instead
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Background />
      <Map center={center} />
      <div id="display-container">
        <Search
          handleFetch={handleFetch}
        />
        <Display data={ipData} />
      </div>
    </>
  );
}

export default App;
