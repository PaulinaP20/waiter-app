import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchTable from './useFetchTable';
import usePeopleAmount from './usePeopleAmount';
import useUpdateTable from './useUpdateTable';

const useTable = () => {
    const { id } = useParams();
    const { table, loading } = useFetchTable(id);
    const { handleSubmit } = useUpdateTable(id);
    const [status, setStatus] = useState('');
    const [bill, setBill] = useState('');

    const {
        peopleAmount,
        maxPeopleAmount,
        handlePeopleAmount,
        handleMaxPeopleAmount,
        setPeopleAmount,
        setMaxPeopleAmount
    } = usePeopleAmount('', '', status);

    useEffect(() => {
        if (table && !loading) {
            setStatus(table.status);
            setPeopleAmount(table.peopleAmount);
            setMaxPeopleAmount(table.maxPeopleAmount);
            setBill(table.bill);
        }
    }, [table, loading, setPeopleAmount, setMaxPeopleAmount]);

    const submitForm = (e) => {
        e.preventDefault();
        const updatedTable = {
            id: table.id,
            status,
            peopleAmount,
            maxPeopleAmount,
            bill: status !== "Busy" ? 0 : bill
        };
        handleSubmit(updatedTable);
    };

    return {
        table,
        status,
        setStatus,
        peopleAmount,
        maxPeopleAmount,
        handlePeopleAmount,
        handleMaxPeopleAmount,
        bill,
        setBill,
        handleSubmit: submitForm,
    };
};

export default useTable;