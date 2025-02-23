import React from 'react';
import {Form, Container} from 'react-bootstrap';
import styles from './StatusForm.module.scss'


const StatusForm = ({status, setStatus}) => {
    return (
        <Container >
            <Form.Group className={styles.statusForm}>
                <Form.Label className={styles.statusLabel}>Status:</Form.Label>
                <Form.Select value={status} onChange={(e)=> setStatus(e.target.value)} className={styles.formSelect}>
                    <option value="Free">Free</option>
                    <option value="Busy">Busy</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Cleaning">Cleaning</option>
                </Form.Select>
            </Form.Group>
        </Container>
    )
}

export default StatusForm;