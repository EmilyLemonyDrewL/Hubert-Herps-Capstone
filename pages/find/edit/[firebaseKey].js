import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleFind } from '../../../api/findData';
import FindForm from '../../../components/forms/FindForm';

// edit form function
export default function EditFind() {
  const [editFind, setEditFind] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleFind(firebaseKey).then(setEditFind);
  }, [firebaseKey]);

  return (<FindForm obj={editFind} />);
}
