//console.log("hello world");
const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectUser, addUser } = require("./user");

app.get("/users", async (req, res) => {
  let list = await selectUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "Message added successfully.." });
});

app.listen(6000, () => console.log("server started.."));
