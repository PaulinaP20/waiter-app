import React from 'react';
import { Form } from 'react-bootstrap';

const PeopleAmountForm=({peopleAmount, maxPeopleAmount, handlePeopleAmount, handleMaxPeopleAmount}) => {
    return (
        <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label className="me-2">People: </Form.Label>
            <div className="d-flex align-items-center">
                <Form.Control value={peopleAmount}
                onChange={handlePeopleAmount}
                size="sm" style={{width:"70px"}}></Form.Control>/
                <Form.Control value={maxPeopleAmount}  onChange={handleMaxPeopleAmount}size="sm"style={{width:"70px"}}></Form.Control>
            </div>
        </Form.Group>
    )
}

export default PeopleAmountForm;
