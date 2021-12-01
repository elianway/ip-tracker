import React from 'react';
import Line from './Line';

const Display = ({ data }) => {
  return (
    <>
      <div id="display">
        <div className="display-module" id="query">{data.query}</div>
        <Line />
        <div className="display-module" id="location">{data.city}, {data.region} {data.zip}</div>
        <Line />
        <div className="display-module" id="timezone">{data.timezone}</div>
        <Line />
        <div className="display-module" id="provider">{data.org}</div>
      </div>
    </>
  );
};

export default Display;
