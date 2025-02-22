import React from 'react';
import {Form} from 'react-bootstrap'

const BillForm=({bill, setBill}) => {
    return (
        <Form.Group className="mb-3 d-flex align-items-center">
        <Form.Label className="me-5">Bill:</Form.Label>
            <div className="d-flex align-items-center">
                <span className="mb-2 me-2">$</span>
                <Form.Control value={bill} onChange={(e) => setBill(Number(e.target.value))}size="mb-2" style={{width:"70px"}}></Form.Control>
            </div>
        </Form.Group>
    )
};
export default BillForm;
