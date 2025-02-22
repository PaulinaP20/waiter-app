import React from 'react';
import {Form} from 'react-bootstrap'


const StatusForm = ({status, setStatus}) => {
    return (
        <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label className="me-2">Status:</Form.Label>
            <Form.Select value={status} onChange={(e)=> setStatus(e.target.value)} style={{width:"300px"}}>
                <option value="Free">Free</option>
                <option value="Busy">Busy</option>
                <option value="Reserved">Reserved</option>
                <option value="Cleaning">Cleaning</option>
            </Form.Select>
        </Form.Group>
    )
}

export default StatusForm;