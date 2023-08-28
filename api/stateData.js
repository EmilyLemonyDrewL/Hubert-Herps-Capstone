import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getStates = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/states.json`, {
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

const getSingleState = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/states/${firebaseKey}.json`, {
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
  getStates,
  getSingleState,
};
