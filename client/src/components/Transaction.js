import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? "-" : "+";
    const capitalText =
        transaction.text.charAt(0).toUpperCase() + transaction.text.slice(1);
    return (
        <li
            onClick={() => deleteTransaction(transaction._id)}
            className="bg-white-ish rounded text-dark p-3 mt-2 mb-2"
        >
            <div className="row font-weight-bold">
                <div id="text-left" className="col-2">
                    {capitalText}{" "}
                </div>
                <div className="col-8" />
                <div className="col-2 text-right">
                    <span
                        className={
                            transaction.amount < 0
                                ? "text-danger"
                                : "text-success"
                        }
                    >
                        {sign}${numberWithCommas(Math.abs(transaction.amount))}
                    </span>
                </div>
            </div>
        </li>
    );
};

export default Transaction;
