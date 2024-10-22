"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const { justifyText, login } = require("../controllers/api.controller");
const { justify } = require("../utils/textUtils");
globals_1.jest.mock('../utils/textUtils', () => ({
    justify: globals_1.jest.fn(),
}));
(0, globals_1.describe)('justify text function', () => {
    (0, globals_1.it)('should justify the text and return 200 on success', () => {
        const req = {
            is: globals_1.jest.fn().mockReturnValue(true),
            body: "tictactrip"
        };
        const res = {
            status: globals_1.jest.fn().mockReturnThis(),
            send: globals_1.jest.fn(),
        };
        justify.mockReturnValue("Justified text");
        justifyText(req, res);
        (0, globals_1.expect)(justify).toHaveBeenCalledWith("tictactrip");
        (0, globals_1.expect)(res.status).toHaveBeenCalledWith(200);
    });
    (0, globals_1.it)('should return 400 if Content-Type is not text/plain', () => {
        const req = {
            is: globals_1.jest.fn().mockReturnValue(false),
            body: "tictactrip"
        };
        const res = {
            status: globals_1.jest.fn().mockReturnThis(),
            json: globals_1.jest.fn(),
        };
        justifyText(req, res);
        (0, globals_1.expect)(req.is).toHaveBeenCalledWith("text/plain");
        (0, globals_1.expect)(res.status).toHaveBeenCalledWith(400);
        (0, globals_1.expect)(res.json).toHaveBeenCalledWith({ error: "ContentType must be text/plain" });
    });
});
(0, globals_1.describe)('login function', () => {
    (0, globals_1.it)('should return 401 if the email is not found in database', () => {
        const req = {
            body: { email: "test@test.com" }
        };
        const res = {
            status: globals_1.jest.fn().mockReturnThis(),
            json: globals_1.jest.fn(),
            cookie: globals_1.jest.fn(),
        };
        login(req, res);
        (0, globals_1.expect)(res.cookie).toHaveBeenCalledWith('jwt', '', { maxAge: 1 });
        (0, globals_1.expect)(res.status).toHaveBeenCalledWith(401);
        (0, globals_1.expect)(res.json).toHaveBeenCalledWith({ error: "user not found" });
    });
});
