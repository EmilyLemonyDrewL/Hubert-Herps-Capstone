import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function TypeCard({ typeObj }) {
  if (!typeObj) {
    return null;
  }

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{typeObj.type_name}</Card.Title>
        <Link href={`type/${typeObj.firebaseKey}`} passHref>
          <Button className="green-btn">Search</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

TypeCard.propTypes = {
  typeObj: PropTypes.shape({
    type_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default TypeCard;
