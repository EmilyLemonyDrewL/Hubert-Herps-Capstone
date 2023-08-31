import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/Button';
import Link from 'next/link';
import { getSingleType } from '../api/typeData';
import { getSingleState } from '../api/stateData';

function AllFindCards({ findObj }) {
  const [type, setType] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    getSingleType(findObj.type_id).then(setType);
  }, [findObj.type_id]);

  useEffect(() => {
    getSingleState(findObj.state_id).then(setLocation);
  }, [findObj.state_id]);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={findObj.find_img} alt="..." style={{ height: '250px' }} />
      <Card.Body>
        <p>Type: {type.type_name}</p>
        <p>Date Found: {findObj.date_found}</p>
        <p>Location: {location.state_name}</p>
        <Link href={`/find/${findObj.firebaseKey}`} passHref>
          <Button className="green-btn" variant="btn btn-success">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

AllFindCards.propTypes = {
  findObj: PropTypes.shape({
    date_found: PropTypes.string,
    description: PropTypes.string,
    find_img: PropTypes.string,
    firebaseKey: PropTypes.string,
    state_id: PropTypes.string,
    type_id: PropTypes.string,
  }).isRequired,
};

export default AllFindCards;
