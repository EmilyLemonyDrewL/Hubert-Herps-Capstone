// const viewFindDetails

import { getSingleFind } from './findData';
import { getSingleState } from './stateData';
import { getSingleType } from './typeData';

const viewFindDetailsState = (findFirebaseKey) => new Promise((resolve, reject) => {
  getSingleFind(findFirebaseKey)
    .then((findObject) => {
      getSingleState(findObject.state_id)
        .then((stateObject) => {
          resolve({ stateObject, ...findObject });
        });
    }).catch((error) => reject(error));
});

const viewFindDetails = (findFirebaseKey) => new Promise((resolve, reject) => {
  getSingleFind(findFirebaseKey)
    .then((findObject) => {
      getSingleType(findObject.type_id)
        .then((typeObject) => {
          resolve({ typeObject, ...findObject });
        });
    }).catch((error) => reject(error));
});

export {
  viewFindDetails,
  viewFindDetailsState,
};

export default viewFindDetailsState;
