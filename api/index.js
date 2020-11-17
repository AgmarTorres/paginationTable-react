const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 1, title: "bola", description: "asdas" },
    { id: 1, title: "bola", description: "asdas" },
    { id: 1, title: "bola", description: "asdas" },
    { id: 1, title: "bola", description: "asdas" },
    { id: 1, title: "bola", description: "asdas" },
    { id: 1, title: "bola", description: "asdas" },
  ]);
});

app.listen(9999, () => {
  console.log("Server running on port 9999");
});

const axios = require("axios");
