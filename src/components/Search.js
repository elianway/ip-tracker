import React from 'react';

const Search = ({ submit }) => {
  return (
    <>
      <div id="title">
        <h2 id="title-text">Ip Address Tracker</h2>
      </div>
      <div id="search-container">
        <input type="text" id="ipinput" name="ipinput" />
        <button id="search-btn" onClick={submit} />
      </div>
    </>
  );
};

export default Search;