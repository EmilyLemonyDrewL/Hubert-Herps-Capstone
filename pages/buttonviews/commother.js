import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getFindsOther } from '../../api/findData';
import FindCard from '../../components/FindCard';

function ShowAllOthers() {
  const [otherFinds, setOtherFinds] = useState([]);

  const getOtherFinds = () => {
    getFindsOther().then(setOtherFinds);
  };

  useEffect(() => {
    getOtherFinds();
  }, []);

  return (
    <div className="text-center my-4">
      <div>
        <Link href="/community" passHref>
          <Button className="green-btn" variant="success">Show All</Button>
        </Link>
        <Link href="/buttonviews/commturtles" passHref>
          <Button className="green-btn" variant="success">Turtles and Tortoises</Button>
        </Link>
        <Link href="/buttonviews/commfrogs" passHref>
          <Button className="green-btn" variant="success">Frogs and Toads</Button>
        </Link>
        <Link href="/buttonviews/commsnakes" passHref>
          <Button className="green-btn" variant="success">Snakes</Button>
        </Link>
        <Link href="/buttonviews/commlizards" passHref>
          <Button className="green-btn" variant="success">Lizards</Button>
        </Link>
        <Link href="/buttonviews/commsals" passHref>
          <Button className="green-btn" variant="success">Salamanders</Button>
        </Link>
        <Link href="/buttonviews/commcrocs" passHref>
          <Button className="green-btn" variant="success">Crocodiles and Alligators</Button>
        </Link>
        <Link href="/buttonviews/commother" passHref>
          <Button className="green-btn" variant="success">Other</Button>
        </Link>
      </div>

      <div className="d-flex flex-wrap">
        {otherFinds.map((other) => (
          <FindCard key={other.firebaseKey} findObj={other} onUpdate={getOtherFinds} />
        ))}
      </div>
    </div>
  );
}

export default ShowAllOthers;
