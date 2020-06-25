import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts
            .filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    return (
        <div className="container card pt-3 text-light">
            <div className="row text-center justify-content-center">
                <div className="col-4">
                    <h4 className="text-success">Income</h4>
                    <p className="balance-success">
                        +${numberWithCommas(income)}
                    </p>
                </div>
                <div className="col-4">
                    <h4 className="text-danger">Expense</h4>
                    <p className="balance-danger">
                        -${numberWithCommas(expense)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IncomeExpenses;
