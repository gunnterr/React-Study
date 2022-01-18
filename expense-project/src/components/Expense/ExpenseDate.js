import React from "react";

import "./ExpenseDate.css"

function ExpenseDate(props) {
    const expense_date = new Date(props.date.year, props.date.month, props.date.day);
    const year = expense_date.getFullYear();
    const month = expense_date.toLocaleString("en-US", {month: "long"});
    const day = expense_date.toLocaleString("en-US", { day: "2-digit" });

    return (
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__date">{day}</div>
        </div>
    );
};

export default ExpenseDate