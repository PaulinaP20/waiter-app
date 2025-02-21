import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Container, ListGroup, Button } from 'react-bootstrap'

const Home = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3131/tables")
            .then((response)=>response.json())
            .then((data)=> {
                setTables(data);
            },[]);
    })

    return (
        <Container className="mt-4">
            <h2>All Tables</h2>
            <ListGroup>
                {tables.map((table=> (
                    <ListGroup.Item key={table.id} className="d-flex justify-content-between">
                        <div>
                        <strong>Table {table.id}</strong> <b>Status: </b> {table.status}
                        </div>
                        <Link to={`/table/${table.id}`}>
                        <Button className="float-end">Show more</Button>
                        </Link>
                    </ListGroup.Item>
                )))}
            </ListGroup>

        </Container>
    )
}



export default Home