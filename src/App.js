import React from 'react';
import { useState, useEffect } from 'react';
import { fetchApi } from './components/Geocoder';
import Background from './components/Background';
import Map from './components/Map';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [ipData, setIpData] = useState([]);
  const [searchAddress, setSearchAddress] = useState('161.185.160.93');

  const handleFetch = async () => {
    const res = await fetchApi(searchAddress);
    setIpData(res);
  }

  useEffect(() => {
    handleFetch();
    console.log(ipData);
  }, [])
 
  const handleSearch = () => {
    const address = document.getElementById('ipinput').value;
    setSearchAddress(address);
    handleFetch();
    resetInput();
  }

  const resetInput = () => {
    const input = document.getElementById('ipinput');
    input.textContent = '';
  }

  const center = {
    lat: ipData.latitude,
    lng: ipData.longitude
  };
  
  return (
    <>
      <Background />
      <Map center={center} />
      <div id="display-container">
        <Search submit={handleSearch} />
        <Display data={ipData} />
      </div>
    </>
  );
}

export default App;
