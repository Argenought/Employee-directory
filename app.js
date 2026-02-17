import express, { response } from "express";

const app = express();

export default app;

import employees from "./db/employees.js";

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.get("/employees/:id", (request, response) => {
  const { id } = request.params;

  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return response.status(404).send("There is no employee with that id.");
  }
  response.send(employee);
});
