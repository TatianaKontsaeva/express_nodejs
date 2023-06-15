const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/students", (req, res) => {
  res.json({ name_and_surname: "Иванов Иван", specialty: "физика" });
});

app.get("/students/:id", (req, res) => {
  req.params.id;
  res.json({ message: `Hello, ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
