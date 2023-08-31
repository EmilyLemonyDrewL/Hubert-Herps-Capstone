import { getSingleFind } from './findData';
import { getTypeFinds } from './typeData';

const viewTypeDetails = (findFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleFind(findFirebaseKey), getTypeFinds(findFirebaseKey)])
    .then(([typeObject, findObject]) => {
      resolve({ ...typeObject, finds: findObject });
    }).catch((error) => reject(error));
});

export default viewTypeDetails;
