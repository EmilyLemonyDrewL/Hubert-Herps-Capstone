import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getFinds = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsById = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleFind = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createFind = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateFind = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteFind = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getFindsTurtle = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1930"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsFrog = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1931"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsSnake = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1932"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsLizard = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1933"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsSalamander = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1934"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsCroc = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1935"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFindsOther = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/finds.json?orderBy="type_id"&equalTo="1936"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getFinds,
  getFindsById,
  getSingleFind,
  createFind,
  updateFind,
  deleteFind,
  getFindsTurtle,
  getFindsFrog,
  getFindsSnake,
  getFindsLizard,
  getFindsSalamander,
  getFindsCroc,
  getFindsOther,
};
