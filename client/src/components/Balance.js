import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <div className="mt-5 mb-5 card col-12 mx-auto">
                <h5 className="mt-3 card-title text-center">Your Balance</h5>
                <div className="card-body">
                    <h1
                        className={
                            total < 0
                                ? "text-center balance-danger"
                                : "text-center balance-success"
                        }
                    >
                        ${numberWithCommas(total)}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Balance;
