import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadTableByIdFromApi, getTableById } from '../../redux/tableRedux';

const useFetchTable = (id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const table = useSelector(state => getTableById(state, id));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(loadTableByIdFromApi(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (table) {
            setLoading(false);
        } else if (!loading) {
            navigate('/');
        }
    }, [table, navigate, loading]);

    return { table, loading };
};

export default useFetchTable;