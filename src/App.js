import React from 'react';
import { useState, useEffect } from 'react';
import Background from './components/Background';
import Map from './components/Map';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [ipData, setIpData] = useState([]);
  const [searchAddress, setSearchAddress] = useState('0.0.0.0');

  // Write fetchURL as indy function and call it once with useEffect
  // on initial load
  useEffect(() => {
    const getFetchUrl = () => {
      return 'api.ipstack.com/' + searchAddress + '?access_key=0370214eef5cb481e92e4b97089eb78a';
    }

    const fetchUrl = async () => {
      try {
        const response = await fetch(getFetchUrl());
        const data = await response.json();
        return data;
      } catch(err) {
        alert(err)
      }
    }

    setIpData(fetchUrl());
    console.log(ipData);

  })

  const handleIpAddress = (address) => {
    setSearchAddress(address);
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
        <Search submit={handleIpAddress} />
        <Display data={ipData} />
      </div>
    </>
  );
}

export default App;
