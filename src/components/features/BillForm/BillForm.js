import React from 'react';

import {Form, Container} from 'react-bootstrap'
import styles from './BillForm.module.scss'

const BillForm=({bill, setBill}) => {
    return (
        <Container>
            <Form.Group className={styles.billForm}>
                <Form.Label className={styles.billLabel}>Bill:</Form.Label>
                <div className={styles.billInputWrapper}>
                    <span className={styles.dolarSign}>$</span>
                    <Form.Control value={bill} onChange={(e) => setBill(Number(e.target.value))} className={styles.billInput}></Form.Control>
                </div>
            </Form.Group>
        </Container>

    )
};
export default BillForm;
