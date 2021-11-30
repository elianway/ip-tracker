import React from 'react';

const Display = ({ data }) => {
  return (
    <>
      <div id="display">
        <div className="display-module" id="latlon">{data.lat}, <br/> {data.lon}</div>
        <div className="display-module" id="location">{data.city}, {data.region} {data.zip}</div>
        <div className="display-module" id="country">{data.countryCode}</div>
      </div>
    </>
  );
};

export default Display;
