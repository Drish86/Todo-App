const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("frontend"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/api", (req, res) => {
  const { q } = req.query;

  //res.send(`calling ${q}()`);
  res.send([
    { id: 1, title: "Idi u ducan" },
    { id: 2, title: "promijeni gume" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
