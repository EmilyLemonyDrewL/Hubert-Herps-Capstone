import React, { useEffect, useState } from 'react';
import { getFinds } from '../api/findData';
import FindCard from '../components/FindCard';

function ShowAllFinds() {
  const [allFinds, setAllFinds] = useState([]);
  const getEveryFind = () => {
    getFinds().then(setAllFinds);
  };

  useEffect(() => {
    getEveryFind();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {allFinds.map((find) => (
          <FindCard key={find.firebaseKey} findObj={find} onUpdate={getEveryFind} />
        ))}
      </div>
    </div>
  );
}

export default ShowAllFinds;
