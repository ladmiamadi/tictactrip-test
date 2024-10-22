import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import express from 'express';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.text());
app.use(express.json());
app.use(cookieParser());

app.use("/api", require("./routes/api.routes"));

app.listen(port, () => console.log(`Server started on port ${port}`))