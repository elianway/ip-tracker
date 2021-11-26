import React from 'react';
import { useState, useEffect } from 'react';
import Background from './components/Background';
import Map from './components/Map';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [ipData, setIpData] = useState({
    jsonReturnedValue: null  
  });
  const [searchAddress, setSearchAddress] = useState('161.185.160.93');

  const fetchIpData = async () => {
    try {
      const url = 'api.ipstack.com/' + searchAddress + '?access_key=0370214eef5cb481e92e4b97089eb78a';
      console.log(url);
      const response = await fetch(url);
      const jsonData = await response.json();
      setIpData(jsonData);
    } catch(err) {
      alert(err)
    }
  }

  useEffect(() => {
    fetchIpData();
    console.log(ipData);
  }, [])
 
  const handleSearch = () => {
    const address = document.getElementById('ipinput').value;
    setSearchAddress(address);
    setIpData(fetchIpData);
    resetInput();
  }

  const resetInput = () => {
    const input = document.getElementById('ipinput');
    input.textContent = '';
  }

  const getCenter = (ipData) => {
    const center = {
      lat: ipData.latitude,
      lng: ipData.longitude
    };
    return center;
  }
  
  return (
    <>
      <Background />
      <Map center={getCenter} />
      <div id="display-container">
        <Search submit={handleSearch} />
        <Display data={ipData} />
      </div>
    </>
  );
}

export default App;
