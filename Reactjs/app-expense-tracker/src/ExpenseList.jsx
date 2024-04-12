
import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>${expense.amount}</span>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
