const express = require('express')
const app = express()
const cors = require('cors')
const pool=require('./db')

//middle ware
app.use(cors())              // middleware enable all orgin
app.use(express.json())       //req.body


app.post('/todos',async(req,res)=>{
try {
    const {description}=req.body;
    const newTodo=await pool.query("INSERT INTO todo (description) VALUES($1)",[description])
    res.json(newTodo)
} catch (err) {
    console.log(err.message)
}
})

app.listen(5000, () => {
    console.log('server has started at port 5000')
})