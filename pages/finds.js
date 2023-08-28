import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getFindsById } from '../api/findData';
import FindCard from '../components/FindCard';
import { useAuth } from '../utils/context/authContext';

// add a find button and find card component
function ShowFinds() {
  const [finds, setFinds] = useState([]);
  const { user } = useAuth();
  const getFindsByUser = () => {
    getFindsById(user.uid).then(setFinds);
  };

  useEffect(() => {
    getFindsByUser();
  }, []);

  return (
    <div className="text-center my-4">
      <p>Find something?</p>
      <Link href="find/new" passHref>
        <Button className="green-btn" variant="btn btn-success">ADD IT</Button>
      </Link>
      <p>to your collection</p>
      <div className="d-flex flex-wrap">
        {finds.map((find) => (
          <FindCard key={find.firebaseKey} findObj={find} onUpdate={getFindsByUser} />
        ))}
      </div>
    </div>
  );
}

export default ShowFinds;
