"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.text());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api", require("./routes/api.routes"));
app.listen(port, () => console.log(`Server started on port ${port}`));
