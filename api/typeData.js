import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTypes = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/types.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleType = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/types/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getTypes,
  getSingleType,
};
