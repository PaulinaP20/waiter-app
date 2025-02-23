import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTables } from '../../redux/tableRedux';
import { API_URL } from '../../config';

const useUpdateTable = (tableId) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (updatedTable) => {
        try {
            const response = await fetch(`${API_URL}/tables/${tableId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTable),
            });

            if (response.ok) {
                const data = await response.json();
                dispatch(updateTables(data));
                navigate('/');
            } else {
                throw new Error('Failed to update the table');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error updating the table.');
        }
    };

    return { handleSubmit };
};

export default useUpdateTable;