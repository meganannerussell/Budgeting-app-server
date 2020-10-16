const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors');
const pool = require("./db")

const incomeRouter = require('./routers/incomes')
const expenseRouter = require('./routers/expenses')


app.use(cors())
app.use(express.json()) //req.body
app.use(incomeRouter, expenseRouter)


app.listen(port, ()=>{
    console.log("server has started on port" + port)
} )