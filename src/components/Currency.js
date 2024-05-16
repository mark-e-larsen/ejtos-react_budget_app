import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    // eslint-disable-next-line
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-success'>
            <label for="Currency">Selected Currency:</label>
            <div class="custom-select" background-color="Green">
            <select id="Currency" onChange={handleCurrencyChange}>
                <option background-color="LightGreen" value="£">£ Pound</option>
                <option background-color="LightGreen" value="$">$ Dollar</option>
                <option background-color="LightGreen" value="€">€ Euro</option>
                <option background-color="LightGreen" value="₹">₹ Ruppee</option>   
            </select>
            </div>
        </div>
    );
};

export default Currency;