const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'ipstack',
  apiKey: '0370214eef5cb481e92e4b97089eb78a'
};

export const Geocoder = NodeGeocoder(options);
