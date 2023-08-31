import React, { useEffect, useState } from 'react';
import { getTypes } from '../api/typeData';
import TypeCard from '../components/forms/TypeCard';

function ShowTypes() {
  const [types, setTypes] = useState([]);
  const getAllTypes = () => {
    getTypes().then(setTypes);
  };

  useEffect(() => {
    getAllTypes();
  });

  return (
    <div className="text-center my-4">
      <h5>Select A Type</h5>
      <div className="d-flex flex-wrap">
        {types.map((type) => (
          <TypeCard key={type.firebaseKey} typeObj={type} onUpdate={getAllTypes} />
          // eslint-disable-next-line indent
       ))}
      </div>
    </div>
  );
}

export default ShowTypes;
