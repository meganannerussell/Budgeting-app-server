CREATE DATABASE pernbudget;

CREATE TABLE income(
    income_id SERIAL PRIMARY KEY,
    charge VARCHAR(255),
    amount VARCHAR(50)
);

CREATE TABLE expense(
    expense_id SERIAL PRIMARY KEY,
    charge VARCHAR(255),
    amount VARCHAR(50)
);