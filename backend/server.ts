require("dotenv").config();
const cookieParser = require('cookie-parser');

const express = require("express");

const port = process.env.PORT;
const app = express();

app.use(express.text());
app.use(express.json());
app.use(cookieParser());

app.use("/api", require("./routes/api.routes"));

app.listen(port, () => console.log(`Server started on port ${port}`))