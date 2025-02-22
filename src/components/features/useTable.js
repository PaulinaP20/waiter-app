import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { loadTableByIdFromApi, getTableById } from '../../redux/tableRedux';
import useUpdateTable from './useUpdateTable';

const useTable = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const table = useSelector(state => getTableById(state, id));
    const { handleSubmit } = useUpdateTable(id);

    const [status, setStatus] = useState('');
    const [peopleAmount, setPeopleAmount] = useState('');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
    const [bill, setBill] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(loadTableByIdFromApi(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (table) {
            setStatus(table.status);
            setPeopleAmount(table.peopleAmount);
            setMaxPeopleAmount(table.maxPeopleAmount);
            setBill(table.bill);
            setLoading(false);
        } else if (!loading) {
            navigate('/');
        }
    }, [table, id, navigate, loading]);

    useEffect(()=> {
        if(status==='Free' || status==="Cleaning"){
            setPeopleAmount(0);
        }
    }, [status]);

    const handlePeopleAmount = (e) => {
        let newValue = Number(e.target.value);
        if (newValue < 0) newValue = 0;
        if (newValue > 10) newValue = 10;
        if (newValue > maxPeopleAmount) newValue = maxPeopleAmount;
        setPeopleAmount(newValue);
    };

    const handleMaxPeopleAmount = (e) => {
        let newValue = Number(e.target.value);
        if (newValue < 0) newValue = 0;
        if (newValue > 10) newValue = 10;
        if (newValue < peopleAmount) setPeopleAmount(newValue);
        setMaxPeopleAmount(newValue);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const updatedTable = {
            id: table.id,
            status,
            peopleAmount,
            maxPeopleAmount,
            bill: bill || 0,
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