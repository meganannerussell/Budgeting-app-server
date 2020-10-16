const express = require('express');
const router = new express.Router()
const pool = require('../db')

// Expense ROUTES

//CREATE AN EXPENSE
router.post("/expenses", async(req, res)=>{
    try{

        // res.send('hi')
        console.log('hello')
        const{charge, amount}= req.body;
        const newExpense = await pool.query("INSERT INTO expense (charge, amount) VALUES($1, $2) RETURNING *", [charge, amount]);

        res.json(newExpense.rows[0]);

    }catch(err) {
        console.log(err)
    }
})

//GET ALL EXPENSES
router.get("/expenses", async(req, res)=>{
    try{
        const allExpenses = await pool.query("SELECT * FROM expense");
        res.json(allExpenses.rows)

    }catch(err){
        console.log(err)
    }
})

//GET AN EXPENSE
router.get("/expenses/:id", async(req, res)=>{
    try{
        const{id} = req.params
        const expense = await pool.query("SELECT * FROM expense WHERE expense_id = $1", [id])
        res.json(expense.rows[0])

    }catch(error){
        console.log(error)
    }
})

//UPDATE AN EXPENSE
router.put("/expenses/:id", async(req, res)=>{
    try{
        const{id} =req.params;
        const {charge, amount} = req.body;
        const updateExpense = await pool.query("UPDATE expense SET (charge, amount) = ($1, $2) WHERE expense_id = $3", [charge, amount, id]);

        res.json("Expense was updated")
    }catch(error){
        console.log(error)
    }
})

//DELETE EXPENSE
router.delete("/expenses/:id", async (req, res)=>{
    const {id} = req.params;
    const deleteExpense = await pool.query("DELETE FROM expense WHERE expense_id = $1", [id]);
    res.json("expense was deleted")
})

module.exports = router