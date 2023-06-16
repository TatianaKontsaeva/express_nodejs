const express = require("express");
const { init, Student, Specialty} = require("./models/init");

const app = express();

app.get("/", async (req, res) => {
  const items = await Student.findAll({
    include: Specialty,
  });
  return res.json(items);
});


app.listen(3000, async () => {
  await init();
});







// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/students", (req, res) => {
//   res.json({ name_and_surname: "Иванов Иван", specialty: "физика" });
// });

// app.get("/students/:id", (req, res) => {
//   req.params.id;
//   res.json({ message: `Hello, ${req.params.id}` });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
