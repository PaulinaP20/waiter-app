import {useState, useEffect} from 'react'


const usePeopleAmount = (initialPeopleAmount, initialMaxPeopleAmount, status ) => {
    const [peopleAmount, setPeopleAmount] = useState(initialMaxPeopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount]= useState(initialMaxPeopleAmount)

    useEffect(() => {
        if (status === 'Free' || status === 'Cleaning') {
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

    return {peopleAmount, maxPeopleAmount, handlePeopleAmount, handleMaxPeopleAmount, setMaxPeopleAmount, setPeopleAmount}
}

export default usePeopleAmount;