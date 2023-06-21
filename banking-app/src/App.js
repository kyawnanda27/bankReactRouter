import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Debit from './components/debit';
import Credit from './components/credit';
import AccountBalance from './components/accountBalance';

const App = () => {
  const [debitData, setDebitData] = useState([]);
  const [creditData, setCreditData] = useState([]);
  const [accountBalance, setAccountBalance] = useState(0.0);
  const [totalDebits, setTotalDebits] = useState(0.0);
  const [totalCredits, setTotalCredits] = useState(0.0);

  useEffect(() => {
    axios
      .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
      .then((response) => {
        const debitAmount = response.data;
        const newDebit = {
          id: 1,
          description: 'Initial Debit',
          amount: parseFloat(debitAmount),
          date: new Date().toLocaleDateString()
        };
        setDebitData([newDebit]);
      })
      .catch((error) => {
        console.log('Error fetching debit amount:', error);
      });
    
      axios
        .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
        .then((response) => {
          const creditAmount = response.data;
          const newCredit = {
            id: 1,
            description: 'Initial Credit',
            amount: parseFloat(creditAmount),
            date: new Date().toLocaleDateString()
          };
          setCreditData([newCredit]);
        })
        .catch((error) => {
          console.log('Error fetching credit amount:', error)
        });
    

  }, []);

  /*
  Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
  */
  useEffect(() => {
    // Calculate account balance whenever debitData or creditData changes
    const totalDebits = debitData.reduce((sum, debit) => sum + debit.amount, 0);
    const totalCredits = creditData.reduce((sum, credit) => sum + credit.amount, 0);
    console.log("tot debits ", totalDebits);
    console.log("tot credits ", totalCredits);
    const balance = totalDebits - totalCredits;
    setTotalDebits(totalDebits);
    setTotalCredits(totalCredits);
    setAccountBalance(balance);
  }, [debitData, creditData]);
  //const totalDebits = debitData.reduce((sum, debit) => sum )
  console.log(creditData);


    
  return (
    <Router>
      <div>
        <h1>Banking App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/debits">Debits</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>
        <AccountBalance balance={accountBalance} debit = {totalDebits} credit = {totalCredits}/>

        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/debits" element={<Debit debitData={debitData} setDebitData={setDebitData} />} />
          <Route path="/credits" element={<Credit creditData={creditData} setCreditData={setCreditData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

