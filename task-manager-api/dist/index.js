"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Instantiate express app
const app = (0, express_1.default)();
// Define server port
const PORT = 3001;
// Create default route
app.get('/', (req, res) => {
    res.send('Express + TypeSscript Server');
});
// Start listening to the requests on defined port
app.listen(PORT);
