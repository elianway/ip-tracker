import React from 'react';

const Search = ({ handleFetch }) => {

  const handleSubmit = () => {
    handleFetch();
    resetInput();
  }

  const resetInput = () => {
    const input = document.getElementById('ipinput');
    input.value = '';
  }
  
  return (
    <div id="search-module">
      <div id="title">
        <h2 id="title-text">Ip Address Tracker</h2>
      </div>
      <div id="search-input">
        <input type="text" id="ipinput" name="ipinput" />
        <button id="search-btn" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Search;
