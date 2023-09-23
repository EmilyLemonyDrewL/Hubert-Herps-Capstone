import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getGreetings = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/greetings.json`, {
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

const getSingleGreeting = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/greetings/${firebaseKey}.json`, {
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
  getGreetings,
  getSingleGreeting,
};
