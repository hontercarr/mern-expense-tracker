import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(transactions);
    return (
        <>
            <div className="text-light mt-3">
                <h3 className="text-center mb-3">History</h3>
                <ul className="mx-auto col-10" W>
                    {transactions.map(transaction => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TransactionList;
