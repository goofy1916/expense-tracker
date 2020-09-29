import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MoneyPlusMinus = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions.map((transaction) => transaction.amount>0?transaction.amount:0);
  const incomeAmount = income
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = transactions.map((transaction) => transaction.amount<0?transaction.amount:0);
  const expenseAmount = expense
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomeAmount}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expenseAmount).toFixed(2)}</p>
      </div>
    </div>
  );
};
