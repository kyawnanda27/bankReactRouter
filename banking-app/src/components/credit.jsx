import React, { useState } from 'react';

/*
    Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
    */

const Credit = ({ creditData, setCreditData }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    
    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    
    const handleAmountChange = event => {
        setAmount(event.target.value);
    };

    const handleAddCredit = () => {
        if (description && amount) {
            const newCredit = {
                description,
                amount: Number(amount),
                date: new Date().toLocaleDateString(),
            };

            setCreditData(prevCreditData => [...prevCreditData, newCredit]);

            // Reset input fields
            setDescription('');
            setAmount('');
        }
    };

    return (
         /*
        Displaying credits:

GIVEN I am on the Credits page
WHEN I view the Credits display area
THEN I should see all of my Credits displayed
AND each Debit should display a Credit description
AND each Debit should display a Credit amount
AND each Debit should display a Credit date
        */
        <div>
            <h2>Credits</h2>
            <div>
                <label htmlFor="credit-description">Description:</label>
                <input
                    type="text"
                    id="credit-description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
            <div>
                <label htmlFor="credit-amount">Amount:</label>
                <input
                    type="number"
                    id="credit-amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <button onClick={handleAddCredit}>Add Credit</button>
            <h3>Recent Credits:</h3>
            <ul>
                {creditData.map((credit, index) => (
                    <li key={index}>
                        <div>Description: {credit.description}</div>
                        <div>Amount: {credit.amount}</div>
                        <div>Date: {credit.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Credit;
