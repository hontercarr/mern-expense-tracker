import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: Number(amount),
        };

        addTransaction(newTransaction);
    };

    return (
        <>
            <div className="text-light text-center mt-5 mb-5">
                <h3 className="mb-3">Add new transaction</h3>
                <form onSubmit={onSubmit}>
                    <div class="form-group">
                        <input
                            className="form-control bg-white-ish"
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Enter text..."
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control bg-white-ish"
                            type="number"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            placeholder="Enter amount..."
                        />
                    </div>
                    <button className="btn btn-success col-12 mt-3">
                        Add transaction
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddTransaction;
