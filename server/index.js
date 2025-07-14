const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middle ware
app.use(cors())              // middleware enable all orgin
app.use(express.json())       //req.body

//ROUTES

// CREATE TODO

app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        res.json(newTodo.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})

//GET ALL TODOS

app.get('/todos', async (req, res) => {
    try {
        const alltodos = await pool.query("SELECT * FROM todo")
        res.json(alltodos)
    } catch (err) {
        console.log(err.message)
    }
})

// GET A TODOS

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE  todo_id=$1", [id])
        res.json(todo.rows[0])
    } catch (err) {
        console.log(err.message)

    }
})

// update todo

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const update = await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2",
            [description, id])
        res.json('todo was update')
    } catch (err) {
        console.log(err.message)

    }
})

// delete  todo

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo= await pool.query('DELETE FROM todo WHERE todo_id=$1', [id])
        res.json("sucessfully delete")
    } catch (err) {
        console.log(err.message)

    }
})


app.listen(5000, () => {
    console.log('server has started at port 5000')
})