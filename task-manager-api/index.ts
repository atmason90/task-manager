import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Instantiate express app
const app: Express = express();
dotenv.config();

// Define server port
const PORT = process.env.PORT;



// Create default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeSscript Server')
});

// Start listening to the requests on defined port
app.listen(PORT);