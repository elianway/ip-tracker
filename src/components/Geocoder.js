const options = {
  provider: 'ipstack',
  apiKey: '0370214eef5cb481e92e4b97089eb78a'
};

export const fetchApi = async (address) => {
  const {provider, apiKey} = options;
  try {
    const res = await fetch('http://api.' + provider + '.com/' + address + '?access_key=' + apiKey);
    const json = await res.json();
    return json;
  } catch (e) {
      alert(e);
  }
}
