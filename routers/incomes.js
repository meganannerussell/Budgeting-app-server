const express = require("express");
4;
const router = new express.Router();
const pool = require("../db");

//CREATE AN INCOME
router.post("/incomes", async (req, res) => {
  try {
    // res.send('hi')
    const { charge, amount } = req.body;
    const newIncome = await pool.query(
      "INSERT INTO income (charge, amount) VALUES($1, $2) RETURNING *",
      [charge, amount]
    );

    res.json(newIncome.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

//GET ALL INCOMES
router.get("/incomes", async (req, res) => {
  try {
    const allIncomes = await pool.query("SELECT * FROM income");
    res.json(allIncomes.rows);
  } catch (err) {
    console.log(err);
  }
});

//GET AN INCOME
router.get("/incomes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const income = await pool.query(
      "SELECT * FROM income WHERE income_id = $1",
      [id]
    );
    res.json(income.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

//UPDATE AN INCOME
router.put("/incomes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { charge, amount } = req.body;
    const updateIncome = await pool.query(
      "UPDATE income SET (charge, amount) = ($1, $2) WHERE income_id = $3",
      [charge, amount, id]
    );

    res.json("Income was updated");
  } catch (error) {
    console.log(error);
  }
});

//DELETE INCOME

router.delete("/incomes/:id", async (req, res) => {
  const { id } = req.params;
  const deleteIncome = await pool.query(
    "DELETE FROM income WHERE income_id = $1",
    [id]
  );
  res.json("Income was deleted");
});

module.exports = router;
