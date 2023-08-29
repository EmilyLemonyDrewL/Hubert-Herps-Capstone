import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleFind } from '../../api/findData';
import { getSingleState } from '../../api/stateData';
import { getSingleType } from '../../api/typeData';

// detailed view of finds
export default function ViewFind() {
  const [findDetails, setFindDetails] = useState({});
  const [findType, setFindType] = useState({});
  const [findState, setFindState] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleFind(firebaseKey).then((findData) => {
      setFindDetails(findData);

      getSingleState(findData.state_id).then(setFindState);
      getSingleType(findData.type_id).then(setFindType);
    });
  }, [firebaseKey]);

  return (
    <div>
      <div>
        <img src={findDetails.find_img} alt={findDetails.description} style={{ width: '300px' }} />
      </div>
      <div>
        <h5>
          Type: {findType.type_name}
        </h5>
        <h5>
          Date Found: {findDetails.date_found}
        </h5>
        <h5>
          Description: {findDetails.description}
        </h5>
      </div>
      <div>
        <h4>Location: {findState.state_name}</h4>
        <img src={findState.state_img} alt={findState.state_name} style={{ width: '300px' }} />
      </div>
    </div>
  );
}
