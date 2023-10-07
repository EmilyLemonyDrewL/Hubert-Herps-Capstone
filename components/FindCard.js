import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteFind } from '../api/findData';
import { getSingleType } from '../api/typeData';
import { getSingleState } from '../api/stateData';
import { useAuth } from '../utils/context/authContext';

function FindCard({ findObj, onUpdate }) {
  const [type, setType] = useState({});
  const [location, setLocation] = useState({});
  const { user } = useAuth();
  const deleteThisFind = () => {
    if (window.confirm('Delete this find from your collection?')) {
      deleteFind(findObj.firebaseKey).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getSingleType(findObj.type_id).then(setType);
  }, [findObj.type_id]);

  useEffect(() => {
    getSingleState(findObj.state_id).then(setLocation);
  }, [findObj.state_id]);

  return (
    <Card className="card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Img className="find-card" variant="top" src={findObj.find_img} alt="..." style={{ height: '250px' }} />
      <Card.Body>
        <p>Type: {type.type_name}</p>
        <p>Date Found: {findObj.date_found}</p>
        <p>Location: {location.state_name}</p>
        <Link href={`/find/${findObj.firebaseKey}`} passHref>
          <Button className="green-btn" variant="btn btn-success">Details</Button>
        </Link>

        {user.uid === findObj.uid ? (
          <Button className="green-btn" variant="btn btn-success" onClick={deleteThisFind}>X</Button>
        ) : ''}

        {user.uid === findObj.uid ? (
          <Link href={`/find/edit/${findObj.firebaseKey}`} passHref>
            <Button className="green-btn" variant="btn btn-success">Edit</Button>
          </Link>
        ) : ''}
      </Card.Body>
    </Card>
  );
}

FindCard.propTypes = {
  findObj: PropTypes.shape({
    date_found: PropTypes.string,
    description: PropTypes.string,
    find_img: PropTypes.string,
    firebaseKey: PropTypes.string,
    state_id: PropTypes.string,
    type_id: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default FindCard;
