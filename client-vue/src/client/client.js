const client = async props => {
  const { url, params = {}, ...rest } = props;

  const parsedURL = new URL(`${process.env.VUE_APP_API_URL}${url}`);
  const paramsKeys = Object.keys(params);
  if (paramsKeys.length) {
    paramsKeys.forEach(key => {
      if (params[key]) {
        parsedURL.searchParams.append(key, params[key]);
      }
    });
  }
  const response = await fetch(parsedURL, {
    ...rest,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const json = await response.json();

  if (!response.ok) {
    const err = new Error(`HTTP status code: ${response.status}`);
    err.json = json;
    err.status = response.status;
    throw err;
  }
  return json;
};

export default client;
