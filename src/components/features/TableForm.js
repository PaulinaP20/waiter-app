import React from 'react';
import {Button, Form} from 'react-bootstrap'
import BillForm from './BillForm/BillForm'
import PeopleAmountForm from './PeopleAmountForm/PeopleAmountForm'
import StatusForm from './StatusForm/StatusForm'


const TableForm = ({status, setStatus, peopleAmount, maxPeopleAmount, handlePeopleAmount, handleMaxPeopleAmount, bill, setBill, handleSubmit}) => {
    return (
        <Form className="mt-4">
            <StatusForm status={status} setStatus={setStatus} key={status}/>
            <PeopleAmountForm
                peopleAmount={peopleAmount}
                maxPeopleAmount={maxPeopleAmount}
                handlePeopleAmount={handlePeopleAmount}
                handleMaxPeopleAmount={handleMaxPeopleAmount}/>
            {status==="Busy" && <BillForm bill={bill || 0} setBill={setBill}/>}
            <Button onClick={handleSubmit}>Update</Button>
        </Form>
    )
}

export default TableForm;