/*
Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits
*/
import React from "react";
const AccountBalance = ({ balance, debit, credit }) => {
    console.log("acc bal tot deb", debit);
    return (
      <div>
        <h2>Account Balance</h2>
        <h3>Total Balance</h3>
        <p>{balance}</p>
        <h3>Total Debit</h3>
        <p>{debit}</p>
        <h3>Total Credit</h3>
        <p>{credit}</p>
      </div>
    );
  };
export default AccountBalance;  