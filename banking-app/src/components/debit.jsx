
import React, { useState } from 'react';

/*
      Adding debits:
  
  GIVEN I am on the Debits page
  WHEN I enter a new Debit description
  AND WHEN I enter a new Debit amount
  AND WHEN I click 'Add Debit'
  THEN I should see my new debit added to the Debits display area with the current date
  AND I should see my Account Balance updated to reflect the new Debit
  
    */
const Debit = ({ debitData, setDebitData }) => {
    // State for new debit input values
    const [newDebitDescription, setNewDebitDescription] = useState('');
    const [newDebitAmount, setNewDebitAmount] = useState('');

    // Function to handle adding a new debit
    const addDebit = () => {
        // Create a new debit object
        const newDebit = {
            id: debitData.length + 1,
            description: newDebitDescription,
            amount: parseFloat(newDebitAmount),
            date: new Date().toLocaleDateString()
        };

        // Update the debitData array
        const updatedDebitData = [...debitData, newDebit];
        setDebitData(updatedDebitData);

        // Clear the input fields
        setNewDebitDescription('');
        setNewDebitAmount('');
    };

    return (
        /*
        Displaying debits:

GIVEN I am on the Debits page
WHEN I view the Debits display area
THEN I should see all of my debits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
        */
        <div>
            <h2>Debits Page</h2>
            <div>
                <label htmlFor="debit-description">Debit Description:</label>
                <input
                    type="text"
                    id="debit-description"
                    value={newDebitDescription}
                    onChange={(e) => setNewDebitDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="debit-amount">Debit Amount:</label>
                <input
                    type="number"
                    id="debit-amount"
                    value={newDebitAmount}
                    onChange={(e) => setNewDebitAmount(e.target.value)}
                />
            </div>
            <button onClick={addDebit}>Add Debit</button>

            <div>
                <ul>
                    {debitData.map((debit, index) => (
                        <li key={index}>
                            <div>Description: {debit.description}</div>
                            <div>Amount: {debit.amount}</div>
                            <div>Date: {debit.date}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Debit;