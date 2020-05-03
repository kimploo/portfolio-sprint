const express = require("express");
const app = express();

app.use(express.static(__dirname + "/build"));
console.log(__dirname);

app.listen(8000);
