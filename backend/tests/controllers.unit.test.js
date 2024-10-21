const {justifyText, login } = require("../controllers/api.controller");
const {justify} = require( "../utils/textUtils");

jest.mock('../utils/textUtils', () => ({
    ...jest.requireActual('../utils/textUtils'),
    justify: jest.fn(),
}));

describe('justify text function', () => {
    it('should justify the text and return 200 on success', () => {
        const req = {
            is: jest.fn().mockReturnValue(true),
            body: "tictactrip"
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        justify.mockReturnValue("Justified text");

        justifyText(req, res);

        expect(justify).toHaveBeenCalledWith("tictactrip");
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return 400 if Content-Type is not text/plain', () => {
        const req = {
            is: jest.fn().mockReturnValue(false),
            body: "Sample text"
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        justifyText(req, res);

        expect(req.is).toHaveBeenCalledWith("text/plain");
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({error: "ContentType must be text/plain"});
    });
});

describe('login function', () => {
    it('should return 401 if the email is not found in database', () => {

        const req = {
            body: { email: "test@test.com" }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            cookie: jest.fn(),
        };
        login(req, res);

        expect(res.cookie).toHaveBeenCalledWith('jwt', '', { maxAge: 1 });
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ error: "user not found" });
    });
});