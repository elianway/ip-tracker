import React from 'react';

const Display = ({ data }) => {
  return (
    <>
      <div id="display">
        <div className="display-module" id="latlon">{data.latitude}, <br/> {data.longitude}</div>
        <div className="display-module" id="location">{data.city}, {data.region_code} {data.zip}</div>
        <div className="display-module" id="country">{data.country_code} <img src={data.country_flag} alt="country flag" /></div>
      </div>
    </>
  );
};

export default Display;