import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import { loadTableByIdFromApi, getTableById, updateTables } from '../../redux/tableRedux';
import { useNavigate } from 'react-router-dom';


const Table = () => {

    const {id} = useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const table=useSelector(state=>getTableById(state,id));

    const [status, setStatus] = useState('');
    const [peopleAmount, setPeopleAmount]=useState('');
    const [maxPeopleAmount, setMaxPeopleAmount]=useState('');
    const [bill, setBill] =useState('');
    const [loading, setLoading] = useState(true);



    useEffect(()=> {
        dispatch(loadTableByIdFromApi(id));
    }, [dispatch, id]);

    useEffect(()=> {
        if (table){
            setStatus(table.status);
            setPeopleAmount(table.peopleAmount);
            setMaxPeopleAmount(table.maxPeopleAmount)
            setBill(table.bill);
            setLoading(false);
        } else if (!loading){
            navigate('/')
        }
    }, [table, id ,navigate, loading])


    const handlePeopleAmount = (e)=> {
        let newValue=Number(e.target.value);
        if(newValue<0){newValue=0};
        if(newValue>10){newValue=10}
        if(newValue>maxPeopleAmount){newValue=maxPeopleAmount}

        setPeopleAmount(newValue)
    }

    const handleMaxPeopleAmount = (e) => {
        let newValue=Number(e.target.value);
        if(newValue<0){newValue=0}
        if(newValue>10){newValue=10};
        if(newValue<peopleAmount){setPeopleAmount(newValue)}

        setMaxPeopleAmount(newValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedTable = {
            id:table.id,
            status,
            peopleAmount,
            maxPeopleAmount,
            bill: bill || 0,
        };

        try {
            const response = await fetch (`http://localhost:3131/tables/${table.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(updatedTable)
            });

            if(response.ok){
                const data = await response.json();
                dispatch(updateTables(data));
                navigate('/');
            } else {
                throw new Error ('Failer to update the table')
            }
        } catch (error) {
            console.log("error:", error);
            alert('There was error updating th table.')
        }
    }

    if(!table){
        return <h2>Loading...</h2>
    }

    return (
        <Container className="mt-4">
            <h2>Table {table.id}</h2>
            <Form className="mt-4">
                <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Label className="me-2">Status:</Form.Label>
                    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} style={{width:"300px"}}>
                        <option value="Free">Free</option>
                        <option value="Busy">Busy</option>
                        <option value="Reserved">Reserved</option>
                        <option value="Cleaning">Cleaning</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Label className="me-2">People: </Form.Label>
                    <div className="d-flex align-items-center">
                        <Form.Control value={peopleAmount}
                        onChange={handlePeopleAmount}
                        size="sm" style={{width:"70px"}}></Form.Control>/
                        <Form.Control value={maxPeopleAmount}  onChange={handleMaxPeopleAmount}size="sm"style={{width:"70px"}}></Form.Control>
                    </div>
                </Form.Group>

                {status==="Busy" && (
                    <Form.Group className="mb-3 d-flex align-items-center">
                        <Form.Label className="me-5">Bill:</Form.Label>
                        <div className="d-flex align-items-center">
                            <span className="mb-2 me-2">$</span>
                            <Form.Control value={bill} onChange={(e) => setBill(Number(e.target.value))}size="mb-2" style={{width:"70px"}}></Form.Control>
                        </div>
                    </Form.Group>
                )}
                <Button onClick={handleSubmit}>Update</Button>
            </Form>
        </Container>
    )

}

export default Table;