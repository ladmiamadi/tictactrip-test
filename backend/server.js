const express = require("express");
const port = 5000;
const app = express();

app.use(express.text());
//app.use(express.urlencoded({extended: false}));
app.use("/api", require("./routes/api.routes"));

app.listen(port, () => console.log(`Server started on port ${port}`))