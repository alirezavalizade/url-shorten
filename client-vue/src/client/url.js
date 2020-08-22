import client from './client';

export const fetchAll = params => {
  return client({
    method: 'GET',
    url: '/url',
    params
  });
};

export const makeShortUrl = body => {
  return client({
    method: 'POST',
    url: '/url',
    body: JSON.stringify(body)
  });
};

export const redirect = id => {
  return client({
    method: 'POST',
    url: `/url/${id}`
  });
};
