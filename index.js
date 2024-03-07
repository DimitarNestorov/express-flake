const express = require("express");
const app = express();
const port = 35253;

app.get("/", (req, res) => {
  res.send("Hello Flakes!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
