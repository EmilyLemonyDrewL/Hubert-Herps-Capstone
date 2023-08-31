import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTypeFinds } from '../../api/typeData';
import viewTypeDetails from '../../api/mergedData';
import FindCard from '../../components/FindCard';

export default function ViewType() {
  const [typeView, setTypeView] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewTypeDetails(firebaseKey).then(setTypeView);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>{typeView.type_name}</h5>
      </div>
      <div className="d-flex flex-wrap">
        {typeView.find?.map((find) => (
          <FindCard key={find.firebaseKey} findObj={find} onUpdate={getTypeFinds} />
        ))}
      </div>
    </div>
  );
}
