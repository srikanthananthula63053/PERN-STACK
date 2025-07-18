import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            })
          window.location="/"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">PERN Todo</h1>
            <form className="d-flex mt-5" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
