
import React, { Fragment, useState, useEffect } from "react";

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
    console.log(todos)
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
                                <td>{todo.description}</td>
                            )

                            ) : <></>
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo