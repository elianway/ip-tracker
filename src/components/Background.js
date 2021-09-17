import React from 'react';
import Image from '../assets/images/background.jpg'

const Background = () => {
  return (
    <div id="background-container">
      <img id="background-img" src={Image} alt="background"></img>
    </div>
  );
}

export default Background;