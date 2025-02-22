import React from 'react';
import {Container} from 'react-bootstrap';
import TableForm from '../features/TableForm';
import useTable from '../features/useTable';

const Table = () => {

    const {
        table, status, setStatus, peopleAmount, maxPeopleAmount, handlePeopleAmount,
        handleMaxPeopleAmount, bill, setBill, handleSubmit
    } = useTable();

    if (!table) {
        return <h2>Loading...</h2>;
    }

    if(!table){
        return <h2>Loading...</h2>
    }

    return (
        <Container className="mt-4">
            <h2>Table {table.id}</h2>
            <TableForm
                status={status}
                setStatus={setStatus}
                peopleAmount={peopleAmount}
                maxPeopleAmount={maxPeopleAmount}
                handlePeopleAmount={handlePeopleAmount}
                handleMaxPeopleAmount={handleMaxPeopleAmount}
                bill={bill}
                setBill={setBill}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default Table;