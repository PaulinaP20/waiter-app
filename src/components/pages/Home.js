import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { loadTablesFromApi } from '../../redux/tableRedux';
import Loading from '../features/Loading';

const Home = () => {
    const dispatch = useDispatch();
    const tables = useSelector(state => state.tables);

    useEffect(() => {
        dispatch(loadTablesFromApi());
    }, [dispatch]);

    if (!tables || tables.length === 0) {
        return <Loading messange={"Loading all tables..."}></Loading>;
    }

    return (
        <Container className="mt-4">
            <h2>All Tables</h2>
            <ListGroup>
                {tables.map(table => (
                    <ListGroup.Item key={table.id} className="d-flex justify-content-between">
                        <div>
                            <strong>Table {table.id}</strong> <b>Status: </b> {table.status}
                        </div>
                        <Link to={`/table/${table.id}`}>
                            <Button className="float-end">Show more</Button>
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Home;