const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(`Username:${username} and Password:${password}`)
  res.status(200).json({ message: "Captured" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
