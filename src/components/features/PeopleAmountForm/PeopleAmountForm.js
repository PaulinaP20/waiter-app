import React from 'react';
import { Form, Container } from 'react-bootstrap';
import styles from './PeopleAmountForm.module.scss'

const PeopleAmountForm=({peopleAmount, maxPeopleAmount, handlePeopleAmount, handleMaxPeopleAmount}) => {
    return (
        <Container >
            <Form.Group className={styles.peopleAmountForm}>
                <Form.Label>People: </Form.Label>
                <div className={styles.peopleInputWrapper}>
                    <Form.Control value={peopleAmount}
                    onChange={handlePeopleAmount} className={styles.peopleInput}>
                    </Form.Control>/
                    <Form.Control value={maxPeopleAmount}  onChange={handleMaxPeopleAmount} className={styles.peopleInput}>
                    </Form.Control>
                </div>
            </Form.Group>
        </Container>

    )
}

export default PeopleAmountForm;
