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

export default getStates;
