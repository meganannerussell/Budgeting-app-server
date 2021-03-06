const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const pool = require("./db");

const incomeRouter = require("./routers/incomes");
const expenseRouter = require("./routers/expenses");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(cors());
app.use(express.json()); //req.body
app.use(incomeRouter, expenseRouter);

app.listen(port, () => {
  console.log("server has started on port" + port);
});
