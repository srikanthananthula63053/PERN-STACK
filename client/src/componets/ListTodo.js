
import React, { Fragment, useState, useEffect } from "react";

const deleteTodo = async (id) => {
    try {
        const todoDelete = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        }
        )
        console.log(todoDelete)
    } catch (err) {
        console.error(err.message)
    }
}

const ListTodo = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos')
            const jsonData = await response.json()
            setTodos(jsonData.rows)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => { getTodos() }, [])

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.length > 0 ?
                            todos.map(todo => (
                                <tr>
                                    <td>{todo.description}</td>
                                    <td>Edit</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
                                            Delete</button>
                                    </td>
                                </tr>
                            )
                            ) : <></>


                    }

                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo