import React from "react";

import "./ExpenseList.css";
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";

function ExpenseList(props) {
    return (
        <Card className="expense-list">
            <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                price={props.items[0].amount}
            />
            <ExpenseItem
                title={props.items[1].title}
                date={props.items[1].date}
                price={props.items[1].amount}
            />
        </Card>
    );
};

export default ExpenseList