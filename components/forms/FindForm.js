import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createFind, updateFind } from '../../api/findData';
import { getStates } from '../../api/stateData';
import { getTypes } from '../../api/typeData';

const initialState = {
  find_img: '',
  category_id: '',
  date_found: '',
  state_id: '',
  description: '',
};

function FindForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [type, setType] = useState([]);
  const [state, setState] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTypes().then(setType);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  useEffect(() => {
    getStates().then(setState);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateFind(formInput).then(() => router.push('/finds'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createFind(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateFind(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Find</h2>

      {/* image */}
      <FloatingLabel controlId="floatingInput1" label="Find Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="find_img"
          value={formInput.find_img}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* category */}
      <FloatingLabel controlId="floatingSelect" label="Type">
        <Form.Select
          aria-label="Type"
          name="type_id"
          onChange={handleChange}
          className="mb-3"
          value={obj.type_id}
          required
        >
          <option value="">Select a type</option>
          {
            type.map((types) => (
              <option
                key={types.firebaseKey}
                value={types.firebaseKey}
              >
                {types.type_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* date Found */}
      <FloatingLabel controlId="floatingLabel2" label="Date Found" className="mb-3">
        <Form.Control
          type="text"
          placeholder="00.00.00"
          name="date_found"
          value={formInput.date_found}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* state */}
      <FloatingLabel controlId="floatingSelect2" label="State">
        <Form.Select
          aria-label="State"
          name="state_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.state_id}
          required
        >
          <option value="">Select a state</option>
          {
            state.map((states) => (
              <option
                key={states.firebaseKey}
                value={states.firebaseKey}
              >
                {states.state_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* description */}
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Find</Button>
    </Form>
  );
}

FindForm.propTypes = {
  obj: PropTypes.shape({
    find_img: PropTypes.string,
    type_id: PropTypes.string,
    date_found: PropTypes.string,
    state_id: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

FindForm.defaultProps = {
  obj: initialState,
};

export default FindForm;
